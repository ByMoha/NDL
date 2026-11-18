import asyncio, json
from playwright.async_api import async_playwright
JS = r'''
() => {
 const ph=document.querySelector('.pc-screen');
 const parse=c=>{const m=c.match(/[\d.]+/g);return m?m.map(Number):[0,0,0,0]};
 const lum=([r,g,b])=>{const f=v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)};return .2126*f(r)+.7152*f(g)+.0722*f(b)};
 const bg=el=>{while(el){const c=getComputedStyle(el).backgroundColor;const p=parse(c);if(p.length===3||(p[3]>0.9))return p.slice(0,3);el=el.parentElement}return[255,255,255]};
 const out={noName:[],small:[],lowContrast:[],imgsNoAlt:0,checked:0};
 ph.querySelectorAll('button,a,input,select,[role=button]').forEach(e=>{const r=e.getBoundingClientRect(); if(!r.width) return;
   const name=(e.getAttribute('aria-label')||e.innerText||e.getAttribute('placeholder')||'').trim(); if(!name) out.noName.push(e.outerHTML.slice(0,90));
   if(r.height<44||r.width<44) out.small.push((name||e.className).slice(0,30)+' '+Math.round(r.width)+'x'+Math.round(r.height)); out.checked++;});
 ph.querySelectorAll('img').forEach(i=>{if(!i.hasAttribute('alt'))out.imgsNoAlt++});
 const walker=document.createTreeWalker(ph,NodeFilter.SHOW_TEXT);let n;const seen=new Set();
 while(n=walker.nextNode()){const el=n.parentElement;if(!n.textContent.trim()||seen.has(el))continue;seen.add(el);
  const cs=getComputedStyle(el); if(cs.visibility==='hidden'||el.closest('[aria-hidden=true]'))continue; const r=el.getBoundingClientRect(); if(!r.width)continue;
  const fg=parse(cs.color).slice(0,3), b=bg(el); const L1=lum(fg),L2=lum(b); const cr=(Math.max(L1,L2)+.05)/(Math.min(L1,L2)+.05);
  const size=parseFloat(cs.fontSize), need=(size>=24||(size>=18.66&&+cs.fontWeight>=700))?3:4.5;
  if(cr<need) out.lowContrast.push(n.textContent.trim().slice(0,28)+' '+cr.toFixed(2)+' ('+cs.color+' on rgb('+b+'))');}
 return out;}
'''
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--no-sandbox'])
        pg=await b.new_page(viewport={'width':1000,'height':940})
        for k in ['landing','details','payment','failed','expired','done']:
            await pg.goto('file://' + __import__('os').path.abspath('proto-local.html') + '#'+k); await pg.wait_for_timeout(500)
            r=await pg.evaluate(JS); print('==',k,json.dumps(r,ensure_ascii=False)[:1400])
        # keyboard: tab order on details
        await pg.goto('file://' + __import__('os').path.abspath('proto-local.html') + '#details'); await pg.wait_for_timeout(300)
        seq=[]
        for i in range(10):
            await pg.keyboard.press('Tab'); seq.append(await pg.evaluate("()=>{const e=document.activeElement;return (e.getAttribute('aria-label')||e.innerText||e.tagName).slice(0,25)}"))
        print('tab order:',seq)
        await b.close()
asyncio.run(main())
