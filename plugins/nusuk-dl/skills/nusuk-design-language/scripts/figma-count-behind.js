// Read-only. Counts library instances that are behind their library, by component. Run in one file at a time.
const t0=Date.now(),L=new Map(),by={};let n=0,behind=0,stop=false;
for(const pg of figma.root.children){if(/^[-—\s]*$/.test(pg.name))continue;await pg.loadAsync();
for(const i of pg.findAllWithCriteria({types:['INSTANCE']}).filter(i=>!i.id.startsWith('I'))){if(Date.now()-t0>70000){stop=true;break;}n++;let m;try{m=await i.getMainComponentAsync();}catch(e){continue;}if(!m||!m.remote)continue;
if(!L.has(m.key)){try{L.set(m.key,(await figma.importComponentByKeyAsync(m.key)).id);}catch(e){L.set(m.key,null);}}
const l=L.get(m.key);if(l&&l!==m.id){behind++;const s=m.parent&&m.parent.type==='COMPONENT_SET'?m.parent.name:m.name;by[s]=(by[s]||0)+1;}}}
return{n,behind,stop,by,ms:Date.now()-t0};
