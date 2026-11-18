import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        pg = await b.new_page(viewport={'width':1000,'height':940})
        errs=[]
        pg.on('console', lambda m: errs.append(m.type+': '+m.text) if m.type in ('error','warning') else None)
        pg.on('pageerror', lambda e: errs.append('PAGEERROR '+str(e)))
        await pg.goto('file://' + __import__('os').path.abspath('proto-local.html') + '#landing'); await pg.wait_for_timeout(800)
        ph = await pg.eval_on_selector('.pc-phone','e=>{const r=e.getBoundingClientRect();return [r.x,r.y]}')
        clip={'x':ph[0],'y':ph[1],'width':402,'height':874}
        m = lambda: pg.evaluate("""()=>{const pp=document.querySelector('.pc-phone').getBoundingClientRect();const q=s=>{const e=document.querySelector('.ch-page.top '+s);if(!e)return null;const r=e.getBoundingClientRect();return [Math.round(r.y-pp.y),Math.round(r.height)]};return {row:q('.nk-tb-row'),sub:q('.nk-tb-sub'),feat:q('.ch-feat'),blur:q('.ch-tbfx'),cls:document.querySelector('.ch-page.top .ch-scr').className}}""")
        print('rest', await m()); await pg.screenshot(path='/tmp/n1_rest.png', clip=clip)
        await pg.evaluate("document.querySelector('.ch-page.top .ch-scr').scrollTop=420"); await pg.wait_for_timeout(400)
        print('scrolled', await m()); await pg.screenshot(path='/tmp/n2_scrolled.png', clip=clip)
        await pg.evaluate("document.querySelector('.ch-page.top .ch-scr').scrollTop=0"); await pg.wait_for_timeout(200)
        await pg.click('.ch-page.top .ch-feat .ch-open'); await pg.wait_for_timeout(160)
        await pg.screenshot(path='/tmp/n3_push.png', clip=clip)
        await pg.wait_for_timeout(600); print('details', await m()); await pg.screenshot(path='/tmp/n4_details.png', clip=clip)
        # edge swipe back
        x=ph[0]+402-6; y=ph[1]+400
        await pg.mouse.move(x,y); await pg.mouse.down()
        for i in range(1,9): await pg.mouse.move(x-i*25,y); await pg.wait_for_timeout(16)
        await pg.screenshot(path='/tmp/n5_swipe.png', clip=clip)
        for i in range(9,14): await pg.mouse.move(x-i*25,y); await pg.wait_for_timeout(16)
        await pg.mouse.up(); await pg.wait_for_timeout(500)
        print('after swipe stage pages', await pg.evaluate("[...document.querySelectorAll('.ch-page')].map(e=>e.className)"))
        await pg.goto('file://' + __import__('os').path.abspath('proto-local.html') + '#details'); await pg.wait_for_timeout(700)
        await pg.click('.ch-page.top .ch-link'); await pg.wait_for_timeout(700)
        print('payment', await m()); await pg.screenshot(path='/tmp/n6_payment.png', clip=clip)
        await pg.click('.ch-page.top [aria-label="رجوع"]'); await pg.wait_for_timeout(200)
        await pg.screenshot(path='/tmp/n7_pop.png', clip=clip); await pg.wait_for_timeout(500)
        await pg.goto('file://' + __import__('os').path.abspath('proto-local.html') + '#details'); await pg.wait_for_timeout(700)
        await pg.click('.ch-page.top .nk-btn.primary'); await pg.wait_for_timeout(150)
        await pg.screenshot(path='/tmp/n8_sheet_rise.png', clip=clip); await pg.wait_for_timeout(500)
        await pg.click('.ch-applepay .pc-btn:not(.ghost)'); await pg.wait_for_timeout(700)
        await pg.screenshot(path='/tmp/n9_toast.png', clip=clip)
        for k in ['failed','expired']:
            await pg.goto('file://' + __import__('os').path.abspath('proto-local.html') + '#'+k); await pg.wait_for_timeout(800); await pg.screenshot(path=f'/tmp/n_{k}.png', clip=clip)
        print('\n'.join(errs[:20]) or 'no console errors')
        await b.close()
asyncio.run(main())
