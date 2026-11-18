from dhelp import box, arr, svg
# ---- architecture
b=''
b+='<text x="20" y="24" class="h">On the device</text><text x="320" y="24" class="h">Nusuk backend</text><text x="680" y="24" class="h">Outside parties</text>'
b+='<rect x="10" y="36" width="250" height="430" rx="14" class="g"/><rect x="300" y="36" width="320" height="430" rx="14" class="g"/><rect x="660" y="36" width="330" height="430" rx="14" class="g"/>'
b+=box(30,56,210,50,'Charity home','campaigns, ways of giving')
b+=box(30,126,210,50,'Campaign page','amount, Apple Pay','k')
b+=box(30,196,210,50,'Payment page','wallet [P3] · Apple Pay · card','k')
b+=box(30,266,210,50,'PassKit · Apple Pay sheet','iOS only [F1]')
b+=box(30,336,210,50,'Receipts · my donations','not designed [B6]','q')
b+=box(30,406,210,46,'Local cache','home, campaign (offline)')
b+=box(320,56,280,50,'API gateway / BFF','auth, locale, rate limits')
b+=box(320,136,280,56,'Giving service','donations, statuses, receipts, totals [B3, B7]','k')
b+=box(320,222,280,50,'Payment orchestrator','idempotency, retries [D5]','k')
b+=box(320,302,280,50,'Campaign content (CMS)','Strapi [D7]')
b+=box(320,382,280,50,'Notification service','receipt only [G1]')
b+=box(680,56,290,50,'Ehsan [D1, K3]','payment channel and listing?','q')
b+=box(680,126,290,50,'Payment provider / acquirer [D3]','mada, Visa, Mastercard, 3-D Secure')
b+=box(680,196,290,50,'Apple Pay servers','approved nonprofit [F1]')
b+=box(680,266,290,50,'Licensed recipient [K1]','Nusuk Foundation or others','q')
b+=box(680,336,290,50,'Two Holy Mosques Authority [K2]','iftar rules, meal price','q')
b+=box(680,406,290,46,'NCNP licence check [F2]','fundraising licence','q')
b+=arr([(240,151),(320,81)],'HTTPS',282,104)
b+=arr([(240,221),(320,96)],None)
b+=arr([(460,106),(460,136)])
b+=arr([(460,192),(460,222)],'pay',484,212)
b+=arr([(460,352),(460,382)],None)
b+=arr([(600,81),(612,81),(612,327),(600,327)],'content',634,288)
b+=arr([(600,236),(680,81)],'charge?',652,128,dash=True)
b+=arr([(600,256),(680,151)],'charge',646,196)
b+=arr([(240,291),(320,96)],'Apple Pay token',268,214)
b+=arr([(825,176),(825,196)],None,dash=True)
b+=arr([(600,180),(680,291)],'settle [P4]',666,262,dash=True)
b+=arr([(680,361),(600,326)],'rules',640,336,dash=True)
b+=arr([(970,430),(984,430),(984,291),(970,291)],'licenses',960,370,dash=True)
b+=arr([(320,407),(240,361)],'receipt',280,372)
ARCH=svg(1000,480,b,'Architecture: the app calls one Nusuk giving service, which brokers the payment channel, the provider, Apple Pay, the recipient and the rule owners')

# ---- flow
W=126;H=48
def row(y,items,x0=20,gap=24):
    out='';pos=[];x=x0
    for t,sub,cls in items:
        out+=box(x,y,W,H,t,sub,cls); pos.append(x); x+=W+gap
    for i in range(len(pos)-1): out+=arr([(pos[i]+W,y+H/2),(pos[i+1],y+H/2)])
    return out,pos
b=''
r1,p1=row(60,[('Charity home','featured · list',''),('Campaign','سفرة صائم',''),('Choose amount','preset or other','k'),('Apple Pay sheet','iOS [F1]',''),('Result','from provider','k'),('Back to campaign','toast · totals','ok')])
b+=r1
r2,p2=row(220,[('Other method','link · Android',''),('Payment page','one line + total','k'),('Wallet / card','[P3] [D4]',''),('3-D Secure','provider page','q')],x0=170)
b+=r2
b+=arr([(p1[2]+W/2,108),(p1[2]+W/2,160),(p2[0]+W/2,160),(p2[0]+W/2,220)],'other way',p1[2]-10,152)
b+=arr([(p2[3]+W/2,220),(p2[3]+W/2,108)])
b+=box(790,150,150,H,'Payment failed','sheet · retry','x'); b+=box(790,300,150,H,'Session expired','sheet · retry','x')
b+=arr([(746,100),(764,100),(764,174),(790,174)],'failed',740,150)
b+=arr([(764,174),(764,324),(790,324)],'expired',740,300)
b+=arr([(865,348),(865,372),(383,372),(383,268)],'retry with the same donation [D5]',620,390,dash=True)
b+=arr([(865,198),(865,214),(950,214),(950,372),(865,372)],None,dash=True)
b+=box(p1[2],0,W,34,'Amount missing','says what to do','q'); b+=arr([(p1[2]+W/2,60),(p1[2]+W/2,34)],None,dash=True)
FLOW=svg(1000,410,b,'Flow: home, campaign, amount, then Apple Pay or the payment page; failures and expiries retry with the same donation; success returns to the campaign')

# ---- donation states
b=''
st=[('Initiated','amount chosen'),('Awaiting 3-D Secure','card only'),('Succeeded','receipt issued'),('Refunded','policy [P2]')]
xs=[20,230,470,730]
for (t,s2),x in zip(st,xs): b+=box(x,50,180,50,t,s2,'ok' if t=='Succeeded' else ('k' if t.startswith('Await') else ''))
b+=arr([(200,75),(230,75)],'pay',215,64); b+=arr([(410,75),(470,75)],'confirmed',440,64); b+=arr([(650,75),(730,75)],'refund',690,64,dash=True)
b+=arr([(110,50),(110,30),(560,30),(560,50)],'Apple Pay or wallet: no 3-D Secure step',330,24)
b+=box(230,190,180,50,'Failed','retryable','x'); b+=box(470,190,180,50,'Expired','nothing captured [D6]','x')
b+=arr([(320,100),(320,190)],'declined',350,160); b+=arr([(380,100),(380,120),(560,120),(560,190)],'timeout',600,180)
b+=arr([(230,215),(110,215),(110,100)],'retry, same id [D5]',150,235,dash=True)
STATE=svg(1000,260,b,'Donation state machine: initiated, awaiting 3-D Secure, succeeded, refunded; failed and expired branches retry with the same donation id')

# ---- iftar mechanism as reported (1447)
b=''
steps=[('Donor registers','Authority website'),('Chooses sufra','place, meals'),('Pays','through Ehsan'),('Payment confirmed','Nusuk Foundation link','k'),('Meals arranged','approved caterer'),('Permit issued','to the donor')]
x=16
for i,(t,s2,*c) in enumerate(steps):
    b+=box(x,40,148,52,t,s2,c[0] if c else ''); 
    if i: b+=arr([(x-16,66),(x,66)])
    x+=164
LIFE=svg(1000,110,b,'The Ramadan 1447 iftar mechanism as reported: register on the Authority site, pay through Ehsan, confirmation linked by Nusuk Foundation, meals arranged, permit issued')
