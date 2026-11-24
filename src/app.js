const KEY='sporttheorie-7-verletzt-v1';
let S={name:'',t:{}};
try{const r=localStorage.getItem(KEY);if(r){const p=JSON.parse(r);if(p&&p.t)S=p}}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const MSG={};
const app=document.getElementById('app');
const TYPE={mc:'Multiple Choice',tf:'Richtig oder falsch',ma:'Zuordnen',fi:'Lückentext',op:'Offene Aufgabe',mem:'Memory',cw:'Kreuzworträtsel',so:'Reihenfolge'};
const MEMS={};
const unitById=id=>U.find(u=>u.id===id);
const num=u=>U.filter(x=>x.min===u.min).indexOf(u)+1;
const code=u=>u.min+'-'+num(u);
function stat(u){let d=0,r=0;u.tasks.forEach((_,i)=>{const s=S.t[u.id+'-'+i];if(s&&s.d){d++;if(s.r)r++}});return{d,r,n:u.tasks.length,full:d===u.tasks.length}}
function total(){let d=0,n=0,r=0,full=0;U.forEach(u=>{const s=stat(u);d+=s.d;n+=s.n;r+=s.r;if(s.full)full++});return{d,n,r,full}}
const pct=(a,b)=>b?Math.round(a/b*100):0;
function openTasks(u){const o=[];u.tasks.forEach((_,i)=>{const s=S.t[u.id+'-'+i];if(!(s&&s.d))o.push(i)});return o}

function memHTML(t,key,st,done){
 const m=new Set(st.m||[]);
 return '<div class="mem">'+memCards(t,key).map((c,k)=>{const up=done||m.has(c.p);
  return `<button type="button" class="mcd${up?' up':''}${m.has(c.p)&&!done?' hit':''}" data-act="flip" data-key="${key}" data-k="${k}" aria-label="${up?esc(c.x):'verdeckte Karte'}"${up?' disabled':''}><span>${up?esc(c.x):'?'}</span></button>`}).join('')+
  `</div><div class="count" data-mv>Züge: ${st.mv||0} · Paare: ${m.size} von ${t.p.length}</div>`;
}
function cwHTML(t,key,st,done,bad){
 const L=cwL(t,key);if(!L)return '<p class="fb bad">Dieses Rätsel konnte nicht erstellt werden.</p>';
 const cells=cwCells(L),a=st.a&&typeof st.a==='object'&&!Array.isArray(st.a)?st.a:{};
 let g='';
 for(let r=0;r<L.rows;r++)for(let c=0;c<L.cols;c++){
  const k=r+','+c,e=cells.get(k);
  if(!e){g+='<span class="cwb"></span>';continue}
  const v=done?e.ch:(a[k]||'');
  g+=`<span class="cwc${bad(k)?' bad':''}${done?' ok':''}">${e.n?`<i>${e.n}</i>`:''}<input class="cwi" maxlength="1" data-ck="${k}" value="${esc(v)}" aria-label="Feld Zeile ${r+1}, Spalte ${c+1}" autocomplete="off" autocapitalize="characters" spellcheck="false"${done?' disabled':''}></span>`;
 }
 const cl=d=>L.words.filter(w=>w.d===d).map(w=>`<li><b>${w.n}</b> ${esc(w.cl)} <span class="n">(${w.a.length})</span></li>`).join('');
 return `<div class="cw"><div class="cwg" style="--cols:${L.cols};grid-template-columns:repeat(${L.cols},var(--cs))">${g}</div><div class="cwl"><div><h4>Waagerecht</h4><ul>${cl(0)}</ul></div><div><h4>Senkrecht</h4><ul>${cl(1)}</ul></div></div></div><div class="count">Umlaute: ä = ae, ö = oe, ü = ue</div>`;
}
function soHTML(t,key,st,done,bad){
 const n=t.items.length,ord=done?t.items.map((_,i)=>i):(st.o&&st.o.length===n?st.o:soInit(t,key));
 const b=(pos,dir,sym,lab,off)=>`<button type="button" class="btn ghost sm" data-act="mv" data-key="${key}" data-pos="${pos}" data-dir="${dir}" aria-label="${lab}"${off?' disabled':''}>${sym}</button>`;
 return '<ol class="so">'+ord.map((ix,pos)=>`<li class="row${bad(pos)?' bad':''}"><span class="sn">${pos+1}</span><span class="rt">${esc(t.items[ix])}</span>`+(done?'':`<span class="mvb">${b(pos,-1,'▲','Nach oben',pos===0)}${b(pos,1,'▼','Nach unten',pos===n-1)}</span>`)+'</li>').join('')+'</ol>';
}
function taskHTML(u,i){
 const t=u.tasks[i],key=u.id+'-'+i,st=S.t[key]||{},done=!!st.d,rev=!!st.r,dis=done?' disabled':'',a=st.a;
 const bad=k=>!done&&st.bad&&st.bad.includes(k);
 let body='';
 if(t.t==='mc'){
  body=shuffle(t.opts,key).map((o,k)=>`<label class="opt${done&&o.ok?' good':''}"><input type="radio" name="r-${key}" value="${k}"${(done?o.ok:a===k)?' checked':''}${dis}><span>${esc(o.x)}</span></label>`).join('');
 }else if(t.t==='tf'){
  body=t.rows.map((r,k)=>{const v=done?(r[1]?'T':'F'):(a&&a[k]);
   return `<div class="row${bad(k)?' bad':''}"><span class="rt">${esc(r[0])}</span><span class="tfg"><label><input type="radio" name="r-${key}-${k}" value="T"${v==='T'?' checked':''}${dis}>Richtig</label><label><input type="radio" name="r-${key}-${k}" value="F"${v==='F'?' checked':''}${dis}>Falsch</label></span></div>`}).join('');
 }else if(t.t==='ma'){
  const opts=shuffle([...new Set(t.p.map(p=>p[1]))],key);
  body=t.p.map((p,k)=>{const v=done?p[1]:((a&&a[k])||'');
   return `<div class="row${bad(k)?' bad':''}"><span class="rt">${esc(p[0])}</span><select data-k="${k}" aria-label="${esc(p[0])}"${dis}><option value="">– wählen –</option>${opts.map(x=>`<option value="${esc(x)}"${x===v?' selected':''}>${esc(x)}</option>`).join('')}</select></div>`}).join('');
 }else if(t.t==='fi'){
  const parts=t.text.split('___');
  body='<p class="cloze">'+parts.map((s,k)=>esc(s)+(k<parts.length-1?`<input type="text" class="gap${bad(k)?' bad':''}" data-k="${k}" aria-label="Lücke ${k+1}" value="${esc(done?t.ans[k][0]:((a&&a[k])||''))}" autocomplete="off" autocapitalize="off" spellcheck="false"${dis}>`:'')).join('')+'</p>';
 }else if(t.t==='mem'){
  body=memHTML(t,key,st,done);
 }else if(t.t==='cw'){
  body=cwHTML(t,key,st,done,bad);
 }else if(t.t==='so'){
  body=soHTML(t,key,st,done,bad);
 }else{
  const txt=typeof a==='string'?a:'';
  body=`<textarea rows="5" data-op placeholder="Schreibe hier deine Antwort …" aria-label="Antwort"${dis}>${esc(txt)}</textarea>`+
   (done?`<div class="muster"><b>Musterlösung</b><p>${esc(t.m)}</p><small>Vergleiche mit deiner Antwort und ergänze, was dir fehlt.</small></div>`:`<div class="count" data-count>${txt.trim().length} von mindestens ${t.min} Zeichen</div>`);
 }
 let foot='';
 if(done)foot=`<div class="fb good">✓ Gelöst${rev?' (Lösung wurde angezeigt)':''}</div>`;
 else if(t.t==='mem')foot='';
 else{
  foot=`<div class="acts"><button class="btn" data-act="check" data-u="${u.id}" data-i="${i}">${t.t==='op'?'Abgeben und Musterlösung ansehen':'Prüfen'}</button>`+
   ((st.n>=3&&t.t!=='op')?`<button class="btn ghost" data-act="reveal" data-u="${u.id}" data-i="${i}">Lösung anzeigen</button>`:'')+`</div>`+
   (MSG[key]?`<div class="fb bad" role="status">${esc(MSG[key])}</div>`:'');
 }
 return `<article class="task${done?' done':''}" id="t-${key}"><div class="th"><b>Aufgabe ${i+1}</b><span class="tag">${t.lab||TYPE[t.t]}</span></div><p class="q">${esc(t.q)}</p>${body}${foot}</article>`;
}
const progHTML=s=>`<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="${s.n}" aria-valuenow="${s.d}"><i style="width:${pct(s.d,s.n)}%"></i></div><div class="st" style="margin-top:6px;font-weight:600">${s.d} von ${s.n} Aufgaben gelöst</div>`;
function checkHTML(u){
 const o=openTasks(u);
 if(!o.length){
  const same=U.filter(x=>x.min===u.min),nx=same[same.indexOf(u)+1];
  return `<div class="panel"><h2>✓ Einheit abgeschlossen</h2><p>Alle ${u.tasks.length} Aufgaben sind gelöst.</p><div class="acts"><a class="btn" href="#${nx?'einheit-'+nx.id:'start'}">${nx?'Nächste Einheit':'Zur Übersicht'}</a><a class="btn ghost" href="#nachweis">Nachweis ansehen</a></div></div>`;
 }
 return `<div class="panel"><h2>Noch offen: ${o.length} von ${u.tasks.length}</h2><p>Diese Aufgaben fehlen noch. Tippe auf eine Aufgabe, um dorthin zu springen.</p><div class="chips">${o.map(i=>`<button class="chip" data-act="jump" data-key="${u.id}-${i}">Aufgabe ${i+1}</button>`).join('')}</div></div>`;
}
const LK={V:'Video',L:'Lesen',I:'Interaktiv',P:'PDF'};
function linksHTML(u){
 if(!u.v||!u.v.length)return '';
 return `<section class="links"><h2>Videos und Links</h2><p class="xs">Zum Vertiefen. Externe Seiten: Inhalte können sich ändern. Zählt nicht für die Lernkontrolle.</p><ul>${u.v.filter(l=>/^https:\/\//.test(l.u)||/^http:\/\//.test(l.u)).map(l=>`<li><a href="${esc(l.u)}" target="_blank" rel="noopener noreferrer"><span class="lk">${LK[l.k]||'Link'}</span><b>${esc(l.t)}</b><small>${esc(l.s)}</small></a></li>`).join('')}</ul></section>`;
}
function unitView(u){
 return `<a class="back" href="#start">← Alle Einheiten</a>
 <header class="uh m${u.min}"><span class="badge">${u.min} Minuten · Einheit ${num(u)}</span><h1>${esc(u.title)}</h1><p class="lead">${esc(u.intro)}</p><div id="unitprog">${progHTML(stat(u))}</div></header>
 <section class="merke"><h2>Merke dir</h2><ul>${u.k.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
 <div class="tasks">${u.tasks.map((_,i)=>(u.x&&i===u.x?'<div class="xh"><h2>Üben und Festigen</h2><p class="xs">Memory, Rätsel und weitere Übungen zum Stoff dieser Einheit.</p></div>':'')+taskHTML(u,i)).join('')}</div>
 ${linksHTML(u)}
 <section class="check" id="unitcheck">${checkHTML(u)}</section>`;
}
function card(u){const s=stat(u);
 return `<a class="card m${u.min}" href="#einheit-${u.id}"><span class="n">Einheit ${num(u)} · ${u.min} Min.</span><h3>${esc(u.title)}</h3><div class="bar"><i style="width:${pct(s.d,s.n)}%"></i></div><div class="st"><span>${s.d} / ${s.n} gelöst</span>${s.full?'<span class="tag done">Fertig</span>':(s.d?'<span class="tag">Offen</span>':'<span class="tag">Neu</span>')}</div></a>`;
}
function homeView(){
 const T=total(),u45=U.filter(u=>u.min===45),u90=U.filter(u=>u.min===90);
 return `<section class="hero"><div><div class="eyebrow">7. Klasse · Lernapp für Schülerinnen und Schüler, die nicht mitmachen können</div><h1>Sporttheorie</h1></div>
 <ol class="how"><li>Wähle eine Einheit. 45 Minuten ist die kurze, 90 Minuten die lange Variante.</li><li>Lies den Kasten «Merke dir» und löse alle Aufgaben.</li><li>Unten in jeder Einheit siehst du, was noch fehlt. Dein Nachweis zeigt alles der Lehrperson.</li></ol>
 <div class="panel stack"><div class="sum"><div><div class="big" id="bigd">${T.d}<small> / ${T.n}</small></div><div>Aufgaben gelöst · ${T.full} von ${U.length} Einheiten fertig</div></div><a class="btn" href="#nachweis">Nachweis ansehen</a></div>
 <div class="bar"><i style="width:${pct(T.d,T.n)}%"></i></div>
 <div class="nameline"><label for="nm"><b>Dein Name</b></label><input id="nm" type="text" value="${esc(S.name||'')}" placeholder="Vorname Nachname" autocomplete="name"></div></div></section>
 <section class="sec"><header><h2>45-Minuten-Einheiten</h2><p>Kurze Themen, ${u45[0].tasks.length} Aufgaben mit Memory, Rätseln und Texten</p></header><div class="grid">${u45.map(card).join('')}</div></section>
 <section class="sec"><header><h2>90-Minuten-Einheiten</h2><p>Lange Themen, ${u90[0].tasks.length} Aufgaben mit Memory, Rätseln und Texten</p></header><div class="grid">${u90.map(card).join('')}</div></section>`;
}
function nachText(){
 const T=total(),d=new Date().toLocaleDateString('de-CH');
 let s=`Nachweis Sporttheorie 7. Klasse\nName: ${S.name||'(nicht eingetragen)'}\nDatum: ${d}\nGelöst: ${T.d} von ${T.n} Aufgaben, ${T.full} von ${U.length} Einheiten komplett\n`;
 if(T.r)s+=`Davon mit angezeigter Lösung: ${T.r}\n`;
 s+='\n';
 U.forEach(u=>{const x=stat(u);s+=`${code(u)} ${u.title}: ${x.d}/${x.n}${x.full?' fertig':''}${x.r?' ('+x.r+' mit Lösung)':''}\n`});
 return s;
}
function nachView(){
 const T=total();
 const rows=U.map(u=>{const x=stat(u);return `<tr><td>${code(u)}</td><td class="t">${esc(u.title)}</td><td>${x.d} / ${x.n}</td><td>${x.r||'–'}</td><td>${x.full?'<span class="tag done">Fertig</span>':'<span class="tag">Offen</span>'}</td></tr>`}).join('');
 const miss=U.filter(u=>!stat(u).full).map(u=>`<li><a href="#einheit-${u.id}">${code(u)} ${esc(u.title)}</a>: Aufgabe ${openTasks(u).map(i=>i+1).join(', ')}</li>`).join('');
 const opens=[];U.forEach(u=>u.tasks.forEach((t,i)=>{const s=S.t[u.id+'-'+i];if(t.t==='op'&&s&&s.d&&s.a)opens.push(`<details><summary>${code(u)} ${esc(u.title)} · Aufgabe ${i+1}</summary><p><b>${esc(t.q)}</b></p><p>${esc(s.a)}</p></details>`)}));
 return `<a class="back" href="#start">← Alle Einheiten</a>
 <div class="stack"><header><div class="eyebrow">Zum Zeigen an die Lehrperson</div><h1>Nachweis</h1></header>
 <div class="panel stack"><div class="nameline"><label for="nm"><b>Name</b></label><input id="nm" type="text" value="${esc(S.name||'')}" placeholder="Vorname Nachname" autocomplete="name"></div>
 <div class="sum"><div><div class="big">${T.d}<small> / ${T.n}</small></div><div>Aufgaben gelöst · ${T.full} von ${U.length} Einheiten komplett${T.r?' · '+T.r+' mit angezeigter Lösung':''}</div></div><div><b>${new Date().toLocaleDateString('de-CH')}</b></div></div>
 <div class="bar"><i style="width:${pct(T.d,T.n)}%"></i></div>
 ${T.full===U.length?'<div class="fb good">✓ Alles gelöst. Alle 20 Einheiten sind abgeschlossen.</div>':`<div><b>Das fehlt noch:</b><ul>${miss}</ul></div>`}</div>
 <div class="panel"><h2>Übersicht</h2><div class="tw"><table><thead><tr><th>Nr.</th><th>Einheit</th><th>Gelöst</th><th>Mit Lösung</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div></div>
 <div class="panel stack"><h2>Text für die Lehrperson</h2><textarea id="nachtext" readonly>${esc(nachText())}</textarea><div class="acts"><button class="btn" data-act="copy">Text kopieren</button><span id="copymsg" class="count"></span></div></div>
 <div class="panel"><h2>Offene Antworten</h2>${opens.length?opens.join(''):'<p>Noch keine offenen Aufgaben abgegeben.</p>'}</div>
 <div class="panel"><h2>Zurücksetzen</h2><p>Löscht alle Antworten auf diesem Gerät. Das lässt sich nicht rückgängig machen.</p><div class="acts" id="resetbox"><button class="btn ghost" data-act="reset1">Alles zurücksetzen</button></div></div></div>`;
}
function updNav(){const T=total();const e=document.getElementById('navprog');if(e)e.textContent=T.d+' / '+T.n}
function route(){
 const h=location.hash.slice(1);let u;
 if(h.startsWith('einheit-')&&(u=unitById(h.slice(8)))){app.innerHTML=unitView(u);document.title=u.title+' · Sporttheorie 7. Klasse'}
 else if(h==='nachweis'){app.innerHTML=nachView();document.title='Nachweis · Sporttheorie 7. Klasse'}
 else{app.innerHTML=homeView();document.title='Sporttheorie 7. Klasse'}
 for(const k in MEMS)delete MEMS[k];
 CWLAST=null;updNav();window.scrollTo(0,0);
}
function redraw(uid,i){
 const u=unitById(uid),el=document.getElementById('t-'+uid+'-'+i);if(!el)return;
 el.outerHTML=taskHTML(u,i);
 const p=document.getElementById('unitprog'),c=document.getElementById('unitcheck');
 if(p)p.innerHTML=progHTML(stat(u));if(c)c.innerHTML=checkHTML(u);updNav();
}
function readAnswer(el,t){
 if(t.t==='mc'){const c=el.querySelector('input:checked');return c?+c.value:null}
 if(t.t==='tf')return t.rows.map((_,k)=>{const c=el.querySelector(`input[name$="-${k}"]:checked`);return c?c.value:null});
 if(t.t==='ma')return t.p.map((_,k)=>el.querySelector(`select[data-k="${k}"]`).value);
 if(t.t==='fi')return t.ans.map((_,k)=>el.querySelector(`.gap[data-k="${k}"]`).value);
 if(t.t==='so'){const key=el.id.slice(2),q=S.t[key]||{};return q.o&&q.o.length===t.items.length?q.o:soInit(t,key)}
 if(t.t==='cw'){const o={};el.querySelectorAll('.cwi').forEach(x=>{o[x.dataset.ck]=x.value.toUpperCase().trim()});return o}
 return el.querySelector('textarea').value.trim();
}
function check(uid,i){
 const u=unitById(uid),t=u.tasks[i],key=uid+'-'+i,el=document.getElementById('t-'+key);
 const st=S.t[key]=S.t[key]||{};const a=readAnswer(el,t);
 if(t.t==='op'){
  if(a.length<t.min){st.a=a;MSG[key]=`Schreibe etwas mehr. Mindestens ${t.min} Zeichen, du hast ${a.length}.`;save();return redraw(uid,i)}
  st.a=a;st.d=1;MSG[key]='';save();return redraw(uid,i);
 }
 const empty=t.t==='mc'?a===null:t.t==='so'?false:t.t==='cw'?Object.values(a).some(x=>!x):a.some(x=>x===null||x==='');
 if(empty){st.a=a;MSG[key]=t.t==='mc'?'Wähle zuerst eine Antwort.':t.t==='cw'?'Fülle zuerst alle Felder aus.':'Beantworte zuerst alle Teile.';save();return redraw(uid,i)}
 let ok,bad=[];
 if(t.t==='mc')ok=!!shuffle(t.opts,key)[a].ok;
 else if(t.t==='tf'){t.rows.forEach((r,k)=>{if((a[k]==='T')!==!!r[1])bad.push(k)});ok=!bad.length}
 else if(t.t==='ma'){t.p.forEach((p,k)=>{if(a[k]!==p[1])bad.push(k)});ok=!bad.length}
 else if(t.t==='so'){a.forEach((v,k)=>{if(v!==k)bad.push(k)});ok=!bad.length}
 else if(t.t==='cw'){cwCells(cwL(t,key)).forEach((e,k)=>{if(a[k]!==e.ch)bad.push(k)});ok=!bad.length}
 else{t.ans.forEach((acc,k)=>{if(!acc.map(norm).includes(norm(a[k])))bad.push(k)});ok=!bad.length}
 st.a=a;
 if(ok){st.d=1;st.bad=[];MSG[key]=''}
 else{st.n=(st.n||0)+1;st.bad=bad;MSG[key]=t.t==='mc'?'Noch nicht richtig. Lies den Kasten «Merke dir» nochmals.':`Noch nicht ganz richtig. ${bad.length} ${(t.t==='cw'?['Feld','Felder']:t.t==='so'?['Schritt','Schritte']:['Teil','Teile'])[bad.length>1?1:0]} ${bad.length>1?'sind':'ist'} rot markiert.`}
 save();redraw(uid,i);
}
const btnAt=(key,k)=>document.querySelector(`#t-${key} [data-act="flip"][data-k="${k}"]`);
function face(b,txt,up){b.classList.toggle('up',up);b.firstElementChild.textContent=txt;b.setAttribute('aria-label',up?txt:'verdeckte Karte')}
function memCount(key,t,st){const e=document.querySelector(`#t-${key} [data-mv]`);if(e)e.textContent=`Züge: ${st.mv||0} · Paare: ${(st.m||[]).length} von ${t.p.length}`}
function flip(key,k,btn){
 const m=key.match(/^(.+)-(\d+)$/),t=unitById(m[1]).tasks[+m[2]],st=S.t[key]=S.t[key]||{};
 if(st.d)return;
 const M=MEMS[key]=MEMS[key]||{open:[],lock:false},cards=memCards(t,key);
 if(M.lock||M.open.includes(k)||(st.m||[]).includes(cards[k].p))return;
 face(btn,cards[k].x,true);M.open.push(k);
 if(M.open.length<2)return;
 const[x,y]=M.open,bx=btnAt(key,x),by=btnAt(key,y);
 st.mv=(st.mv||0)+1;
 if(cards[x].p===cards[y].p){
  st.m=[...(st.m||[]),cards[x].p];M.open=[];
  if(st.m.length===t.p.length){st.d=1;save();return redraw(m[1],+m[2])}
  save();[bx,by].forEach(b=>{b.classList.add('hit');b.disabled=true});memCount(key,t,st);
 }else{
  M.lock=true;save();memCount(key,t,st);
  setTimeout(()=>{[bx,by].forEach(b=>b&&face(b,'?',false));M.open=[];M.lock=false},1000);
 }
}
function mv(key,pos,dir){
 const m=key.match(/^(.+)-(\d+)$/),t=unitById(m[1]).tasks[+m[2]],st=S.t[key]=S.t[key]||{};
 if(st.d)return;
 const o=(st.o&&st.o.length===t.items.length?st.o:soInit(t,key)).slice(),q=pos+dir;
 if(q<0||q>=o.length)return;
 [o[pos],o[q]]=[o[q],o[pos]];st.o=o;st.bad=[];MSG[key]='';save();redraw(m[1],+m[2]);
 const nb=document.querySelector(`#t-${key} [data-act="mv"][data-pos="${q}"][data-dir="${dir}"]`);if(nb)nb.focus();
}
let CWLAST=null;
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-act]');if(!b)return;
 const a=b.dataset.act;
 if(a==='check')check(b.dataset.u,+b.dataset.i);
 else if(a==='flip')flip(b.dataset.key,+b.dataset.k,b);
 else if(a==='mv')mv(b.dataset.key,+b.dataset.pos,+b.dataset.dir);
 else if(a==='reveal'){const key=b.dataset.u+'-'+b.dataset.i,st=S.t[key]=S.t[key]||{};st.d=1;st.r=1;MSG[key]='';save();redraw(b.dataset.u,+b.dataset.i)}
 else if(a==='jump'){const el=document.getElementById('t-'+b.dataset.key);if(el){el.scrollIntoView({behavior:'smooth',block:'start'})}}
 else if(a==='copy'){const ta=document.getElementById('nachtext'),m=document.getElementById('copymsg');
  const fb=()=>{ta.focus();ta.select();m.textContent='Text markiert. Jetzt kopieren (lange drücken oder Strg+C).'};
  try{navigator.clipboard.writeText(ta.value).then(()=>{m.textContent='Kopiert.'},fb)}catch(err){fb()}}
 else if(a==='reset1'){document.getElementById('resetbox').innerHTML='<b>Wirklich alles löschen?</b><button class="btn" data-act="reset2">Ja, löschen</button><button class="btn ghost" data-act="reset0">Abbrechen</button>'}
 else if(a==='reset0'){document.getElementById('resetbox').innerHTML='<button class="btn ghost" data-act="reset1">Alles zurücksetzen</button>'}
 else if(a==='reset2'){const n=S.name;S={name:n,t:{}};for(const k in MSG)delete MSG[k];save();route()}
});
document.addEventListener('input',e=>{
 const t=e.target;
 if(t.id==='nm'){S.name=t.value;save();const x=document.getElementById('nachtext');if(x)x.value=nachText()}
 else if(t.classList&&t.classList.contains('cwi')){
  t.value=t.value.toUpperCase().slice(-1);
  const art=t.closest('.task'),key=art.id.slice(2),st=S.t[key]=S.t[key]||{};
  if(!st.a||typeof st.a!=='object'||Array.isArray(st.a))st.a={};
  st.a[t.dataset.ck]=t.value;save();
  if(t.value){
   const[r,c]=t.dataset.ck.split(',').map(Number),at=(y,x)=>art.querySelector(`.cwi[data-ck="${y},${x}"]`);
   const right=at(r,c+1),down=at(r+1,c),L=CWLAST&&CWLAST.key===key?CWLAST:null;
   let nx=right||down;
   if(L&&L.r===r-1&&L.c===c&&down)nx=down;else if(L&&L.r===r&&L.c===c-1&&right)nx=right;
   CWLAST={key,r,c};if(nx)nx.focus();
  }
 }
 else if(t.matches('textarea[data-op]')){
  const art=t.closest('.task'),key=art.id.slice(2),m=key.match(/^(.+)-(\d+)$/),u=unitById(m[1]),task=u.tasks[+m[2]];
  const st=S.t[key]=S.t[key]||{};st.a=t.value;save();
  const c=art.querySelector('[data-count]');if(c)c.textContent=`${t.value.trim().length} von mindestens ${task.min} Zeichen`;
 }
});
document.addEventListener('focusin',e=>{if(e.target.classList&&e.target.classList.contains('cwi'))e.target.select()});
document.addEventListener('keydown',e=>{
 const t=e.target;if(!(t.classList&&t.classList.contains('cwi'))||e.key!=='Backspace'||t.value)return;
 const art=t.closest('.task'),[r,c]=t.dataset.ck.split(',').map(Number),at=(y,x)=>art.querySelector(`.cwi[data-ck="${y},${x}"]`);
 const pv=at(r,c-1)||at(r-1,c);if(pv){e.preventDefault();pv.focus()}
});
window.addEventListener('hashchange',route);
route();
