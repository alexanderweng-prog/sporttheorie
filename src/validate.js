const fs=require('fs'),vm=require('vm');
const src=['lib.js','data.js','data2.js','data3.js'].map(f=>fs.readFileSync(f,'utf8')).join('\n')+';globalThis.X={U,cwLayout,shuffle,soInit,memCards}';
vm.runInThisContext(src);
const {U,cwLayout}=X;
const err=[],cnt={},ty={};
for(const u of U){
 cnt[u.min]=(cnt[u.min]||0)+u.tasks.length;
 u.tasks.forEach((t,i)=>{
  const w=u.id+'-'+(i+1);ty[t.t]=(ty[t.t]||0)+1;
  if(t.t==='mc'&&t.opts.filter(o=>o.ok).length!==1)err.push(w+' mc');
  if(t.t==='fi'&&t.text.split('___').length-1!==t.ans.length)err.push(w+' fi gaps');
  if(t.t==='ma'&&t.p.length<3)err.push(w+' ma');
  if(t.t==='tf'&&t.rows.length<3)err.push(w+' tf');
  if(t.t==='mem'){
   if(t.p.length<4)err.push(w+' mem zu klein');
   const tx=t.p.flat();if(new Set(tx).size!==tx.length)err.push(w+' mem doppelte Texte');
   if(tx.some(x=>x.length>46))err.push(w+' mem Text lang: '+tx.find(x=>x.length>46));
  }
  if(t.t==='so'){
   if(t.items.length<3)err.push(w+' so klein');
   if(new Set(t.items).size!==t.items.length)err.push(w+' so doppelt');
   const o=X.soInit(t,u.id+'-'+i);if(o.every((v,k)=>v===k))err.push(w+' so schon sortiert');
  }
  if(t.t==='fi'&&t.lab){const letters=[...t.text.split(' = ')[0].replace(/ /g,'')].sort().join(''),a=[...t.ans[0][0].toUpperCase()].sort().join('');if(letters!==a)err.push(w+' sc Buchstaben');if(t.text.split(' = ')[0].replace(/ /g,'')===t.ans[0][0].toUpperCase())err.push(w+' sc unverändert')}
  if(t.t==='cw'){
   const ws=t.w.map(x=>x[0].toUpperCase());
   if(ws.some(x=>!/^[A-Z]+$/.test(x)))err.push(w+' cw Zeichen');
   if(new Set(ws).size!==ws.length)err.push(w+' cw doppelt');
   const L=cwLayout(t.w,u.id+'-'+i);
   if(!L){err.push(w+' cw kein Layout');return}
   if(L.words.length!==ws.length)err.push(w+' cw nicht alle platziert');
   // Gitter rekonstruieren und auf ungewollte Wörter prüfen
   const g=Array.from({length:L.rows},()=>Array(L.cols).fill(''));
   L.words.forEach(x=>{for(let k=0;k<x.a.length;k++){const y=x.r+(x.d?k:0),z=x.c+(x.d?0:k);if(g[y][z]&&g[y][z]!==x.a[k])err.push(w+' cw Konflikt');g[y][z]=x.a[k]}});
   const runs=(d)=>{const out=[];const R=d?L.cols:L.rows,C=d?L.rows:L.cols;for(let a=0;a<R;a++){let s=0;while(s<C){const ch=d?g[s][a]:g[a][s];if(!ch){s++;continue}let e=s;while(e<C&&(d?g[e][a]:g[a][e]))e++;if(e-s>=2)out.push([d?s:a,d?a:s,e-s]);s=e}}return out};
   for(const d of [0,1]){const rs=runs(d);const mine=L.words.filter(x=>x.d===d);
    rs.forEach(([y,x,n])=>{if(!mine.some(m=>m.r===y&&m.c===x&&m.a.length===n))err.push(w+' cw ungewolltes Wort dir'+d)});
    if(rs.length!==mine.length)err.push(w+' cw Anzahl Wörter dir'+d)}
   // zusammenhängend
   const cells=[];g.forEach((r,y)=>r.forEach((c,x)=>{if(c)cells.push(y+','+x)}));
   const seen=new Set([cells[0]]),q=[cells[0]];while(q.length){const [y,x]=q.pop().split(',').map(Number);for(const [dy,dx] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=(y+dy)+','+(x+dx);if(cells.includes(k)&&!seen.has(k)){seen.add(k);q.push(k)}}}
   if(seen.size!==cells.length)err.push(w+' cw nicht zusammenhängend');
   t._dim=L.rows+'x'+L.cols;
   if(L.cols>13)err.push(w+' cw zu breit '+L.cols);
  }
 });
}
console.log('Einheiten',U.length,'Aufgaben pro Dauer',cnt,'Typen',ty);
console.log('Rätselgrössen',U.flatMap(u=>u.tasks.filter(t=>t.t==='cw').map(t=>u.id+':'+t._dim)).join(' '));
console.log('Fehler',err);
