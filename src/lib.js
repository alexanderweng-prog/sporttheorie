const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm=s=>String(s).toLowerCase().trim().replace(/ß/g,'ss').replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/[.,;:!?"'()]/g,'').replace(/\s+/g,' ');
function rng(seed){let h=2166136261;for(const c of seed){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return()=>{h+=0x6D2B79F5;let t=h;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
function shuffle(a,seed){const r=rng(seed),b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}

/* Kreuzworträtsel: Layout wird aus Wort und Hinweis berechnet (deterministisch pro Aufgabe) */
function cwFits(G,a,r,c,d){
 const dr=d?1:0,dc=d?0:1,at=(y,x)=>G.get(y+','+x);let cross=0;
 if(at(r-dr,c-dc)||at(r+dr*a.length,c+dc*a.length))return -1;
 for(let i=0;i<a.length;i++){
  const y=r+dr*i,x=c+dc*i,e=at(y,x);
  if(e){if(e.ch!==a[i]||e.d[d])return -1;cross++}
  else if(at(y+dc,x+dr)||at(y-dc,x-dr))return -1;
 }
 return cross;
}
function cwLayout(words,seed){
 const W=words.map(w=>({a:w[0].toUpperCase(),cl:w[1]}));
 let best=null;
 for(let at=0;at<300;at++){
  const r=rng(seed+'#'+at);
  const ord=W.map(w=>({w,k:w.a.length+r()*4})).sort((x,y)=>y.k-x.k).map(x=>x.w);
  const G=new Map(),P=[];let ok=true;
  const put=(w,y,x,d)=>{for(let i=0;i<w.a.length;i++){const k=(y+(d?i:0))+','+(x+(d?0:i));let e=G.get(k);if(!e){e={ch:w.a[i],d:[0,0]};G.set(k,e)}e.d[d]=1}P.push({a:w.a,cl:w.cl,d,r:y,c:x})};
  put(ord[0],0,0,0);
  for(let n=1;n<ord.length;n++){
   const w=ord[n],cand=[];
   let y0=1e9,y1=-1e9,x0=1e9,x1=-1e9;
   for(const p of P){const ey=p.r+(p.d?p.a.length-1:0),ex=p.c+(p.d?0:p.a.length-1);y0=Math.min(y0,p.r);y1=Math.max(y1,ey);x0=Math.min(x0,p.c);x1=Math.max(x1,ex)}
   for(const p of P)for(let i=0;i<w.a.length;i++)for(let j=0;j<p.a.length;j++){
    if(w.a[i]!==p.a[j])continue;
    const d=1-p.d,y=p.d===0?p.r-i:p.r+j,x=p.d===0?p.c+j:p.c-i,cr=cwFits(G,w.a,y,x,d);
    if(cr<1)continue;
    const ey=y+(d?w.a.length-1:0),ex=x+(d?0:w.a.length-1);
    const h=Math.max(y1,ey)-Math.min(y0,y)+1,b=Math.max(x1,ex)-Math.min(x0,x)+1;
    cand.push([cr*20-h*b-b*4+r()*3,y,x,d]);
   }
   if(!cand.length){ok=false;break}
   cand.sort((u,v)=>v[0]-u[0]);put(w,cand[0][1],cand[0][2],cand[0][3]);
  }
  if(!ok)continue;
  let y0=1e9,y1=-1e9,x0=1e9,x1=-1e9;
  for(const p of P){const ey=p.r+(p.d?p.a.length-1:0),ex=p.c+(p.d?0:p.a.length-1);y0=Math.min(y0,p.r);y1=Math.max(y1,ey);x0=Math.min(x0,p.c);x1=Math.max(x1,ex)}
  const rows=y1-y0+1,cols=x1-x0+1,score=rows*cols+12*cols;
  if(!best||score<best.score)best={score,rows,cols,P:P.map(p=>({...p,r:p.r-y0,c:p.c-x0}))};
 }
 if(!best)return null;
 const starts=[...new Set(best.P.map(p=>p.r+','+p.c))].map(s=>s.split(',').map(Number)).sort((u,v)=>u[0]-v[0]||u[1]-v[1]);
 const num={};starts.forEach((s,i)=>{num[s[0]+','+s[1]]=i+1});
 const out=best.P.map(p=>({...p,n:num[p.r+','+p.c]})).sort((u,v)=>u.n-v.n||u.d-v.d);
 return{rows:best.rows,cols:best.cols,words:out};
}
const CWC={};
const cwL=(t,key)=>CWC[key]||(CWC[key]=cwLayout(t.w,key));
function cwCells(L){
 const m=new Map();
 L.words.forEach(w=>{for(let i=0;i<w.a.length;i++){const y=w.r+(w.d?i:0),x=w.c+(w.d?0:i),k=y+','+x;let e=m.get(k);if(!e){e={ch:w.a[i],n:0};m.set(k,e)}if(i===0)e.n=w.n}});
 return m;
}
/* Reihenfolge-Aufgabe: Startanordnung (nie schon richtig) */
function soInit(t,key){
 const n=t.items.length;let o=shuffle([...Array(n).keys()],key);
 if(o.every((v,i)=>v===i))o=o.slice(1).concat(o[0]);
 return o;
}
/* Memory: Karten aller Paare gemischt */
function memCards(t,key){
 const c=[];t.p.forEach((p,i)=>{c.push({p:i,x:p[0]});c.push({p:i,x:p[1]})});
 return shuffle(c,key);
}
