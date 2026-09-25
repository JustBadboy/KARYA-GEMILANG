const D=window.SITE_DATA;
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const use=n=>window.claude?claude.use(n):Promise.resolve(null);
const wa=(n,t)=>`https://wa.me/${n}${t?'?text='+encodeURIComponent(t):''}`;
const ext=' target="_blank" rel="noopener"';
D.tr=D.tr||{en:{},zh:{}};
if((D.v||0)<2){const g=id=>D.pages.find(x=>x.id==id);
  const r=g('rptka');if(r){r.ap=true;r.at=r.at||'Pengesahan RPTKA';if(!r.docs)r.docs='- Surat permohonan pengesahan RPTKA\n- Akta pendirian dan perubahan terakhir beserta pengesahan Kemenkumham\n- NIB (Nomor Induk Berusaha) sesuai bidang usaha\n- NPWP perusahaan\n- Bagan struktur organisasi perusahaan\n- Paspor yang masih berlaku\n- Ijazah dan/atau sertifikat kompetensi sesuai jabatan\n- Surat pengalaman kerja atau CV\n- Pas foto terbaru\n- Jabatan, lokasi kerja, dan jangka waktu penggunaan TKA\n- Penunjukan tenaga kerja pendamping WNI\n- Rencana alih teknologi dan keahlian serta pendidikan dan pelatihan\n- Bukti pembayaran Dana Kompensasi Penggunaan TKA (DKP-TKA) bila dipersyaratkan'}
  const j=g('jenis-visa');if(j){j.ap=true;j.at=j.at||'Ajukan Visa'}
  ['vitas','vitas-kerja'].forEach(i=>{const x=g(i);if(x)x.rptka=true});
  D.v=2}
const LN=[['id','ID','Bahasa Indonesia'],['en','EN','English'],['zh','中文','中文']];
let lang='id';
try{lang=localStorage.getItem('kgk_lang')||''}catch(e){}
if(!['id','en','zh'].includes(lang)){const n=(navigator.language||'id').toLowerCase();lang=n.startsWith('id')?'id':n.startsWith('zh')?'zh':'en'}
const UI={'Layanan Kami':['Our Services','我们的服务'],'Mengapa Memilih Kami':['Why Choose Us','为什么选择我们'],'Testimoni':['Testimonials','客户评价'],'Hubungi Kami':['Contact Us','联系我们'],'Ajukan':['Apply','申请'],'Ajukan Visa':['Apply for a Visa','申请签证'],'Pengajuan':['Application','申请'],'Formulir Pengajuan':['Application Form','申请表'],'Kirim Pesan via Email':['Send a Message via Email','通过电子邮件发送留言'],'Nama lengkap':['Full name','姓名'],'Kewarganegaraan':['Nationality','国籍'],'Email':['Email','电子邮件'],'Telepon / WhatsApp':['Phone / WhatsApp','电话 / WhatsApp'],'Rencana tanggal masuk / mulai':['Planned entry / start date','计划入境／开始日期'],'Layanan':['Service','服务'],'Lainnya':['Other','其他'],'Catatan':['Notes','备注'],'Catatan penting:':['Important note:','重要提示：'],'untuk berkas silahkan lampirkan saat kirim di email.':['please attach your documents when sending the email.','请在发送电子邮件时附上您的文件。'],'Setelah tombol ditekan, email terbuka dengan data yang sudah terisi.':['After you press the button, an email opens with your details filled in.','点击按钮后，将打开已填好信息的电子邮件。'],'Kirim via Gmail':['Send via Gmail','通过Gmail发送'],'Kirim via Aplikasi Email':['Send via Email App','通过邮件应用发送'],'Pilih kategori visa yang ingin diajukan.':['Choose the visa category you want to apply for.','请选择您要申请的签证类别。'],'Pilih jenis visa yang ingin diajukan.':['Choose the visa type you want to apply for.','请选择您要申请的签证类型。'],'Lihat keterangan lengkap':['See full details','查看完整说明'],'Persyaratan Berkas':['Required Documents','所需文件'],'Isi data kontak di Panel Admin.':['Add contact details in the Admin Panel.','请在管理面板中填写联系方式。'],'Email tujuan belum diisi di Panel Admin.':['Destination email has not been set.','尚未设置收件电子邮件。'],'Isi nama lengkap Anda.':['Please enter your full name.','请填写您的姓名。'],'Email dibuka. Lampirkan berkas lalu kirim.':['Email opened. Attach your documents, then send.','已打开电子邮件。请附上文件后发送。'],'Pilih layanan yang ingin diajukan.':['Choose the service you want to apply for.','请选择您要申请的服务。'],'Untuk VITAS bekerja (TKA), Pengesahan RPTKA harus diajukan dan disahkan terlebih dahulu.':['For a work-based VITAS (foreign worker), the RPTKA approval must be submitted and approved first.','办理工作类VITAS（外籍员工）前，须先提交并获得RPTKA批准。'],'Ajukan Pengesahan RPTKA':['Apply for RPTKA Approval','申请RPTKA批准'],'Pengesahan RPTKA':['RPTKA Approval','RPTKA批准'],'Nama perusahaan':['Company name','公司名称'],'Jabatan TKA yang diajukan':['Foreign worker position','外籍员工职位'],'Lengkapi kolom yang wajib diisi:':['Please fill in the required field:','请填写必填项：']};
function tt(s){if(lang=='id'||s==null)return s;const k=String(s).trim(),d=D.tr&&D.tr[lang];return(d&&d[k])||(UI[k]&&UI[k][lang=='en'?0:1])||s}
const E=s=>esc(tt(s));
if((D.v||0)<3){const d=(id,label,type,scope,req)=>({id,label,type,req:!!req,scope:scope||'',opts:''});
  if(!D.forms)D.forms=[d('fn','Nama lengkap','text','',1),d('fk','Kewarganegaraan','text'),d('fe','Email','email'),d('fp','Telepon / WhatsApp','tel'),d('fo','Nama perusahaan','text','rptka'),d('fj','Jabatan TKA yang diajukan','text','rptka'),d('fd','Rencana tanggal masuk / mulai','date'),d('ft','Catatan','textarea')];
  D.forms.forEach(f=>{const u=UI[f.label];if(u){D.tr.en[f.label]=D.tr.en[f.label]||u[0];D.tr.zh[f.label]=D.tr.zh[f.label]||u[1]}});
  D.v=3}
D.forms=D.forms||[];
let cur='beranda',admin=null,tab='site',authed=false,can=false,fails=0,until=0;

function fmt(t){let h='',ul=false;
  for(const l of String(t).split('\n')){
    if(l.startsWith('- ')){if(!ul){h+='<ul>';ul=true}h+='<li>'+E(l.slice(2))+'</li>';continue}
    if(ul){h+='</ul>';ul=false}
    if(l.startsWith('## '))h+='<h3>'+E(l.slice(3))+'</h3>';
    else if(l.trim())h+='<p>'+E(l)+'</p>';
  }
  return h+(ul?'</ul>':'')}

function nav(){const P=D.pages.filter(p=>p.show),s=D.site;
  $('#brand').innerHTML=(s.logo?`<img src="${s.logo}" alt="">`:'')+esc(s.name);document.title=s.name;document.documentElement.lang=lang;$('#lg').innerHTML=LN.map(([k,l,t])=>`<button data-lg="${k}" title="${t}" class="${lang==k?'on':''}">${l}</button>`).join('');
  const r=document.documentElement.style;r.setProperty('--hb',s.pri||'#12305e');r.setProperty('--acc',s.acc||'#c9962b');
  const ti=[s.phone&&`<a href="tel:${esc(s.phone.replace(/[^+\d]/g,''))}">📞 ${esc(s.phone)}</a>`,s.email&&`<a href="mailto:${esc(s.email)}" target="_blank" rel="noopener">✉️ ${esc(s.email)}</a>`,s.address&&`<span>📍 ${esc(s.address)}</span>`].filter(Boolean).join('');
  $('#tb').innerHTML=ti?`<div class="tbi">${ti}</div>`:'';
  const kids=id=>P.filter(c=>c.parent==id),its=id=>kids(id).map(c=>kids(c.id).length?`<div class="dd sm"><a href="#/${c.id}">${E(c.title)} ▸</a><div class="sub">${its(c.id)}</div></div>`:`<a href="#/${c.id}">${E(c.title)}</a>`).join('');
  $('#nav').innerHTML=P.filter(p=>!p.parent).map(p=>{if(!kids(p.id).length)return p.group?'':`<a href="#/${p.id}" class="${cur==p.id?'on':''}">${E(p.title)}</a>`;
    return `<div class="dd">${p.group?`<button>${E(p.title)} ▾</button>`:`<a href="#/${p.id}" class="${cur==p.id?'on':''}">${E(p.title)} ▾</a>`}<div class="sub">${its(p.id)}</div></div>`}).join('')+`<a class="cta" href="#/ajukan">${E(s.cta||'Hubungi Kami')}</a>`}

function foot(){const s=D.site;
  $('#foot').innerHTML=`<div class="wrap"><strong>${esc(s.name)}</strong><br>${[s.address,s.phone,s.email].filter(Boolean).map(esc).join(' · ')}<br><span id="cp">© ${new Date().getFullYear()} ${esc(s.name)}</span></div>${s.wa?`<a class="wab" href="${wa(s.wa)}"${ext} aria-label="WhatsApp">💬</a>`:''}`;
  use('user').then(u=>{if(u&&u.canEdit()){const a=document.createElement('a');a.href='#/panel';a.textContent='Panel Admin';$('#foot .wrap').append(' · ',a)}}).catch(()=>{})}

const dl=v=>String(v.docs||'').split('\n').filter(l=>l.startsWith('- ')).map(l=>l.slice(2));
const inJV=q=>{const P=D.pages;for(let x=q,n=0;x&&n++<8;x=P.find(y=>y.id==x.parent))if(x.id=='jenis-visa')return true;return false};
const GEN=[{id:'fn',label:'Nama lengkap',type:'text',req:true},{id:'fk',label:'Kewarganegaraan',type:'text'},{id:'fe',label:'Email',type:'email'},{id:'fp',label:'Telepon / WhatsApp',type:'tel'}];
const fields=v=>v?D.forms.filter(f=>!f.scope||(f.scope=='visa'?inJV(v):f.scope==v.id)):[...GEN,{id:'fs',label:'Layanan',type:'select',arr:D.services.map(x=>x.t).concat('Lainnya')},{id:'ft',label:'Catatan',type:'textarea'}];
const fld=f=>{const id='f_'+f.id,l=E(f.label)+(f.req?' *':'');
  if(f.type=='textarea')return `<label style="grid-column:1/-1">${l}<textarea id="${id}" rows="3" style="font-family:inherit"></textarea></label>`;
  if(f.type=='select')return `<label>${l}<select id="${id}"><option value=""></option>${(f.arr||String(f.opts||'').split(',')).map(o=>String(o).trim()).filter(Boolean).map(o=>`<option value="${esc(o)}">${E(o)}</option>`).join('')}</select></label>`;
  return `<label>${l}<input id="${id}" type="${esc(f.type||'text')}"></label>`};
function form(v){
  return `<div class="card" data-v="${v?esc(v.id):''}"><h3>${v?E('Formulir Pengajuan')+' - '+E(v.at||v.title):E('Kirim Pesan via Email')}</h3><div class="grid">${fields(v).map(fld).join('')}</div><p class="note"><b>${E('Catatan penting:')}</b> ${E('untuk berkas silahkan lampirkan saat kirim di email.')}</p><p class="mut">${E('Setelah tombol ditekan, email terbuka dengan data yang sudah terisi.')}</p><p><button class="pri" data-a="mail" data-m="g">${E('Kirim via Gmail')}</button> <button data-a="mail" data-m="m">${E('Kirim via Aplikasi Email')}</button> <span id="fm" class="mut"></span></p></div>`}

const apk=x=>x.apo??D.pages.indexOf(x);
const rnote=()=>`<div class="note"><b>${E('Catatan penting:')}</b> ${E('Untuk VITAS bekerja (TKA), Pengesahan RPTKA harus diajukan dan disahkan terlebih dahulu.')}</div><p><a class="btn pri" href="#/ajukan/rptka">${E('Ajukan Pengesahan RPTKA')}</a></p>`;
function apply(id){const P=D.pages,p=id&&P.find(x=>x.id==id),ti=q=>E(q.at||q.title),card=c=>`<a class="card svc" href="#/ajukan/${c.id}">${c.img?`<img src="${c.img}" alt="">`:''}<h3>${ti(c)}</h3><p>${esc(ex(c.body))}</p></a>`;
  if(!p)return `<section class="wrap"><p class="mut"><a href="#/ajukan">${E('Ajukan')}</a></p><h1>${E(D.site.cta)}</h1><p class="mut">${E('Pilih layanan yang ingin diajukan.')}</p><div class="cards">${P.filter(x=>x.ap&&(x.show||x.ao)).sort((a,b)=>apk(a)-apk(b)).map(card).join('')}</div></section>`;
  const ch=P.filter(c=>c.parent==p.id&&c.show),tr=[];
  for(let q=P.find(x=>x.id==p.parent),n=0;q&&n++<8;q=P.find(x=>x.id==q.parent))if(!q.group)tr.unshift(q);
  const bc=`<p class="mut"><a href="#/ajukan">${E('Ajukan')}</a>${tr.map(q=>` › <a href="#/ajukan/${q.id}">${ti(q)}</a>`).join('')} › ${ti(p)}</p>`,rn=p.rptka?rnote():'';
  if(ch.length)return `<section class="wrap">${bc}<h1>${ti(p)}</h1>${rn}<p class="mut">${E(p.id=='jenis-visa'?'Pilih kategori visa yang ingin diajukan.':'Pilih jenis visa yang ingin diajukan.')}</p><div class="cards">${ch.map(card).join('')}</div></section>`;
  const k=dl(p);
  return `<section class="wrap">${bc}<h1>${E('Pengajuan')} ${ti(p)}</h1>${rn}<p>${esc(ex(p.body))} <a href="#/${p.id}">${E('Lihat keterangan lengkap')}</a></p>${k.length?`<div class="prose"><h3>${E('Persyaratan Berkas')}</h3><ul>${k.map(d=>`<li>${E(d)}</li>`).join('')}</ul></div>`:''}${form(p)}</section>`}

function contact(){const s=D.site;return `<div class="card">${[s.phone&&'📞 '+esc(s.phone),s.email&&'✉️ '+esc(s.email),s.address&&'📍 '+esc(s.address)].filter(Boolean).join('<br>')||`<span class="mut">${E('Isi data kontak di Panel Admin.')}</span>`}</div>${form()}`}

function home(p){const s=D.site,h=t=>`<h2>${E(t)}</h2>`,c=(a,f)=>`<div class="cards">${a.map(f).join('')}</div>`;
  return `<div class="hero"${s.hero?` style="background-image:linear-gradient(#0009,#0009),url(${s.hero})"`:''}><div class="wrap"><div class="eyebrow">${E(s.eyebrow)}</div><h1>${esc(s.name)}</h1><p>${E(s.tagline)}</p><a class="btn pri" href="#/ajukan">${E(s.cta)}</a>${s.wa?`<a class="btn" href="${wa(s.wa)}"${ext}>WhatsApp</a>`:''}</div></div>
<section class="wrap">${p.img?`<img class="pimg" src="${p.img}" alt="">`:''}<div class="prose">${fmt(p.body)}</div>
${D.services.length?h('Layanan Kami')+c(D.services,x=>`<a class="card svc" href="#/${esc(x.to)}">${x.img?`<img src="${x.img}" alt="">`:''}<h3>${E(x.t)}</h3><p>${E(x.d)}</p></a>`):''}
${D.why.length?h('Mengapa Memilih Kami')+c(D.why,x=>`<div class="card"><h3>${E(x.t)}</h3><p>${E(x.d)}</p></div>`):''}
${D.testi.length?h('Testimoni')+c(D.testi,x=>`<div class="card"><p>“${E(x.t)}”</p><b>${esc(x.n)}</b> <span class="mut">${E(x.r)}</span></div>`):''}
${h('Hubungi Kami')}${form()}</section>`}

function route(){
  cur=location.hash.slice(2)||'beranda';if(window.ADMIN_PAGE)cur='panel';else if(cur=='panel'||cur=='admin')cur='beranda';
  document.body.classList.toggle('adm',cur=='panel');
  $('#nav').classList.remove('show');document.querySelectorAll('.dd.open').forEach(d=>d.classList.remove('open'));
  nav();foot();scrollTo(0,0);
  if(cur=='panel')return adminView();
  if(cur.split('/')[0]=='ajukan'){$('#app').innerHTML=apply(cur.split('/')[1]);return}
  const p=D.pages.find(x=>x.id==cur&&!x.group&&(x.show||x.ao))||D.pages.find(x=>x.id=='beranda');
  $('#app').innerHTML=p.id=='beranda'?home(p):page(p)}

const ex=b=>tt(String(b).split('\n').map(l=>l.trim()).find(l=>l&&!/^(#|- )/.test(l))||'').slice(0,110);
function page(p){const dk=dl(p),P=D.pages,ch=P.filter(c=>c.parent==p.id&&c.show),tr=[];
  for(let q=P.find(x=>x.id==p.parent),n=0;q&&n++<8;q=P.find(x=>x.id==q.parent))tr.unshift(q);
  const tail=p.id=='kontak'?contact():(p.rptka?rnote():'')+(p.ap&&!ch.length?`<p><a class="btn pri" href="#/ajukan/${p.id}">${E('Ajukan')} ${E(p.at||p.title)}</a></p>`:dk.length&&!ch.length?`<div class="prose"><h3>${E('Persyaratan Berkas')}</h3><ul>${dk.map(d=>`<li>${E(d)}</li>`).join('')}</ul></div><p><a class="btn pri" href="#/ajukan/${p.id}">${E('Ajukan')} ${E(p.title)}</a></p>`:`<p style="margin-top:24px"><a class="btn pri" href="#/ajukan">${E(D.site.cta)}</a></p>`);
  return `<section class="wrap">${tr.length?`<p class="mut">${tr.map(q=>q.group?E(q.title):`<a href="#/${q.id}">${E(q.title)}</a>`).join(' › ')} › ${E(p.title)}</p>`:''}<h1>${E(p.title)}</h1>${p.img?`<img class="pimg" src="${p.img}" alt="">`:''}<div class="prose">${fmt(p.body)}</div>${ch.length?`<div class="cards">${ch.map(c=>`<a class="card svc" href="#/${c.id}">${c.img?`<img src="${c.img}" alt="">`:''}<h3>${E(c.title)}</h3><p>${esc(ex(c.body))}</p></a>`).join('')}</div>`:''}${tail}</section>`}

const hx=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
async function hsh(pw,salt,it){const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveBits']);return hx(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:new TextEncoder().encode(salt),iterations:it},k,256))}
const sget=()=>{try{return sessionStorage.getItem('kgk')}catch(e){return null}};
const sset=v=>{try{v?sessionStorage.setItem('kgk',v):sessionStorage.removeItem('kgk')}catch(e){}};

async function adminView(){
  admin=await use('artifact');const u=await use('user');
  can=!window.claude||!!(u&&u.canEdit()&&admin);
  if(sget()&&can)authed=true;
  authed&&can?draw():login()}

function login(note){
  $('#app').innerHTML=`<section class="login card"><h1>Login Admin</h1><p class="mut">${esc(D.site.name)}</p><label>Username<input id="lu" autocomplete="username"></label><label style="margin-top:8px">Password<input id="lp" type="password" autocomplete="current-password"></label><p id="lm" style="color:#c0392b">${note||''}</p><button class="pri" data-a="login">Masuk</button> <a href="index.html">Kembali ke website</a></section>`}

async function doLogin(){const m=$('#lm');
  if(Date.now()<until){m.textContent='Terlalu banyak percobaan. Tunggu 30 detik.';return}
  let ok=false;
  try{ok=$('#lu').value.trim().toLowerCase()==D.auth.user.toLowerCase()&&await hsh($('#lp').value,D.auth.salt,D.auth.it)==D.auth.hash}
  catch(e){m.textContent='Peramban tidak mendukung verifikasi password.';return}
  if(!ok){if(++fails>=5){until=Date.now()+30000;fails=0}m.textContent='Username atau password salah.';return}
  if(!can){m.textContent='Login benar, tetapi hanya pemilik halaman (akun Claude) yang dapat menerbitkan perubahan.';return}
  authed=true;sset(1);draw()}

const up=(k,v,i)=>{const a=i===undefined?'':` data-i="${i}"`;
  return `${v?`<img class="pv" src="${v}" alt="">`:'<p class="mut">Belum ada gambar.</p>'}<div class="row"><input type="file" accept="image/*" data-u="${k}"${a} style="flex:1">${v?`<button data-a="rm" data-u="${k}"${a}>Hapus gambar</button>`:''}</div>`};

const LS={forms:[['label','Nama isian'],['type','Tipe isian',3],['req','Wajib diisi',5],['scope','Berlaku untuk',4],['opts','Pilihan (khusus tipe Pilihan, pisahkan dengan koma)']],services:[['t','Judul'],['d','Deskripsi',1],['to','Halaman tujuan',2]],why:[['t','Judul'],['d','Deskripsi',1]],testi:[['n','Nama'],['r','Jabatan / asal'],['t','Testimoni',1]]};
const apl=()=>D.pages.map((p,i)=>[p,i]).filter(([p])=>p.ap).sort((a,b)=>apk(a[0])-apk(b[0]));
const apc=(p,i)=>{const k=p.ao?'title':'at';
  return `<div class="card"><div class="row"><label style="flex:2 1 220px">${p.ao?'Judul pilihan':'Judul di menu Ajukan'}<input data-i="${i}" data-k="${k}" value="${esc(p[k]||'')}" placeholder="${esc(p.title)}"></label><label class="ck"><input type="checkbox" data-i="${i}" data-k="rptka"${p.rptka?' checked':''}>Wajib RPTKA dulu</label></div>${p.ao?`<label style="margin-top:8px">Deskripsi (baris pertama tampil di kartu)</label><textarea data-i="${i}" data-k="body" rows="3" style="font-family:inherit">${esc(p.body)}</textarea>`:''}<label style="margin-top:8px">Persyaratan berkas (satu per baris, awali dengan &quot;- &quot;)</label><textarea data-i="${i}" data-k="docs" rows="5">${esc(p.docs)}</textarea><label style="margin-top:8px">Gambar kartu (opsional)</label>${up('page',p.img,i)}<div class="row" style="margin-top:8px"><button data-a="apup" data-i="${i}">↑</button><button data-a="apdn" data-i="${i}">↓</button>${p.ao?`<button data-a="del" data-i="${i}">Hapus</button>`:`<button data-a="apoff" data-i="${i}">Hapus dari menu</button>`}</div></div>`};
const TYPES=[['text','Teks pendek'],['textarea','Teks panjang'],['email','Email'],['tel','Telepon'],['date','Tanggal'],['number','Angka'],['select','Pilihan']];
const fx=(a,l,m,v)=>{if(m==5)return `<label class="ck"><input type="checkbox" ${a}${v?' checked':''}>${l}</label>`;
  const o=m==3?TYPES:[['','Semua pengajuan'],['visa','Semua pengajuan Visa'],...D.pages.filter(p=>!p.group&&p.id!='beranda'&&p.id!='kontak').map(p=>[p.id,'Hanya: '+p.title])];
  return `<label>${l}<select ${a}>${o.map(([k,t])=>`<option value="${esc(k)}"${v==k?' selected':''}>${esc(t)}</option>`).join('')}</select></label>`};
function list(k,title,img){const at=(i,f)=>`data-l="${k}" data-i="${i}" data-f="${f}"`;
  return `<h3>${title}</h3>${D[k].map((x,i)=>`<div class="card">${LS[k].map(([f,l,m])=>m>2?fx(at(i,f),l,m,x[f]):m==1?`<label>${l}<textarea ${at(i,f)} rows="3" style="font-family:inherit">${esc(x[f])}</textarea></label>`:m==2?`<label>${l}<select ${at(i,f)}>${D.pages.filter(p=>!p.group).map(p=>`<option value="${p.id}"${x[f]==p.id?' selected':''}>${esc(p.title)}</option>`).join('')}</select></label>`:`<label>${l}<input ${at(i,f)} value="${esc(x[f])}"></label>`).join('')}${img?up(k,x.img,i):''}<div class="row" style="margin-top:8px"><button data-a="lup" data-l="${k}" data-i="${i}">↑</button><button data-a="ldn" data-l="${k}" data-i="${i}">↓</button><button data-a="ldel" data-l="${k}" data-i="${i}">Hapus</button></div></div>`).join('')}<button data-a="ladd" data-l="${k}">+ Tambah</button>`}

let TL=[];
function strs(){const o=new Set(),a=x=>{x=String(x||'').trim();if(x)o.add(x)},ln=t=>String(t||'').split('\n').forEach(l=>a(l.trim().replace(/^(## |- )/,''))),s=D.site;
  a(s.tagline);a(s.eyebrow);a(s.cta);
  D.pages.forEach(p=>{a(p.title);a(p.at);ln(p.body);ln(p.docs)});
  D.services.forEach(x=>{a(x.t);a(x.d)});D.why.forEach(x=>{a(x.t);a(x.d)});D.testi.forEach(x=>{a(x.r);a(x.t)});D.forms.forEach(f=>{a(f.label);String(f.opts||'').split(',').forEach(o=>a(o))});
  return[...o]}
async function autoTr(){const m=()=>$('#msg'),sm=await use('sample');
  if(!sm){m().textContent='Terjemahan otomatis tidak tersedia di sini. Isi manual.';return}
  const need=strs().filter(x=>!(D.tr.en[x]&&D.tr.zh[x]));
  if(!need.length){m().textContent='Semua teks sudah diterjemahkan.';return}
  try{for(let i=0;i<need.length;i+=20){const ch=need.slice(i,i+20);m().textContent=`Menerjemahkan ${Math.min(i+20,need.length)} dari ${need.length}…`;
    const r=await sm.json('Terjemahkan tiap teks bahasa Indonesia berikut ke bahasa Inggris dan Mandarin Sederhana. Konteks: website konsultan visa dan RPTKA Indonesia; pertahankan kode dan singkatan (C1, D2, E31A, KITAS, KITAP, RPTKA, VoA, NIB, NPWP). Balas HANYA JSON array berisi objek {"en":"...","zh":"..."} dengan urutan dan jumlah sama persis dengan input.\n'+JSON.stringify(ch));
    ch.forEach((k,j)=>{const x=r&&r[j];if(x){if(x.en&&!D.tr.en[k])D.tr.en[k]=String(x.en);if(x.zh&&!D.tr.zh[k])D.tr.zh[k]=String(x.zh)}})}
    draw();$('#msg').textContent='Selesai. Tinjau lalu tekan Simpan & Terbitkan.'}
  catch(e){draw();$('#msg').textContent='Gagal menerjemahkan: '+((e&&(e.message||e.code))||'')}}

const ghc=()=>{let c={};try{c=JSON.parse(localStorage.getItem('kgk_gh')||'{}')}catch(e){}return{repo:c.repo||'',branch:c.branch||'main',path:c.path||'data/data.js',token:c.token||''}};
const b64=t=>{const u=new TextEncoder().encode(t);let s='';for(let i=0;i<u.length;i+=8192)s+=String.fromCharCode.apply(null,u.subarray(i,i+8192));return btoa(s)};
const ghH=c=>({Authorization:'Bearer '+c.token,Accept:'application/vnd.github+json'}),ghU=c=>`https://api.github.com/repos/${c.repo}/contents/${encodeURI(c.path)}`;
async function ghSave(){const m=$('#msg'),v=i=>$('#'+i).value.trim(),c={repo:v('gr'),branch:v('gb')||'main',path:v('gp')||'data/data.js',token:v('gt')};
  try{localStorage.setItem('kgk_gh',JSON.stringify(c))}catch(e){m.textContent='Peramban tidak bisa menyimpan pengaturan.';return}
  m.textContent='Menguji koneksi…';
  try{const r=await fetch(ghU(c)+'?ref='+encodeURIComponent(c.branch),{headers:ghH(c)});
    m.textContent=r.ok?'Terhubung. File data ditemukan di repositori.':r.status==404?'Tidak ditemukan. Cek nama repositori, branch, dan lokasi file (atau file akan dibuat saat publikasi).':'Gagal: GitHub '+r.status+'. Cek token dan izin Contents.'}
  catch(e){m.textContent='Gagal terhubung: '+e.message}}
async function ghPub(){const m=$('#msg'),c=ghc();
  if(!c.repo||!c.token){m.textContent='Isi pengaturan di tab GitHub dulu.';return}
  m.textContent='Mengirim ke GitHub…';
  try{let sha;const g=await fetch(ghU(c)+'?ref='+encodeURIComponent(c.branch),{headers:ghH(c)});
    if(g.ok)sha=(await g.json()).sha;else if(g.status!=404)throw new Error('GitHub '+g.status+'. Cek repositori, branch, dan token.');
    const r=await fetch(ghU(c),{method:'PUT',headers:{...ghH(c),'Content-Type':'application/json'},body:JSON.stringify({message:'Update konten website dari panel admin',content:b64('window.SITE_DATA='+JSON.stringify(D)+';'),branch:c.branch,...(sha?{sha}:{})})});
    if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error('GitHub '+r.status+': '+(e.message||''))}
    m.textContent='Tersimpan. Website akan diperbarui otomatis dalam 1-2 menit.'}
  catch(e){m.textContent='Gagal: '+e.message}}
function draw(){const y=scrollY,s=D.site,f=(k,l)=>`<label>${l}<input data-s="${k}" value="${esc(s[k])}"></label>`;
  const T=[['site','Situs & Kontak'],['look','Tampilan & Gambar'],['services','Layanan'],['pages','Menu & Halaman'],['form','Menu Ajukan'],['why','Keunggulan & Testimoni'],['tr','Terjemahan'],['gh','GitHub'],['acc','Akun']];let b='';
  if(tab=='site')b=`<div class="card"><div class="grid">${f('name','Nama perusahaan')}${f('tagline','Slogan')}${f('eyebrow','Teks kecil di atas judul beranda')}${f('cta','Teks tombol ajakan (mis. Ajukan Sekarang)')}${f('phone','Nomor telepon tampil (bar atas & footer)')}${f('wa','Nomor WhatsApp (format 6285702576066)')}${f('email','Email tujuan formulir pengajuan')}${f('address','Alamat kantor')}</div></div>`;
  if(tab=='look')b=`<div class="card"><h3>Logo</h3>${up('logo',s.logo)}</div><div class="card"><h3>Gambar Latar Beranda</h3>${up('hero',s.hero)}</div><div class="card"><h3>Warna</h3><div class="grid"><label>Warna utama (latar beranda dan bar atas)<input type="color" data-s="pri" value="${esc(s.pri)}"></label><label>Warna aksen<input type="color" data-s="acc" value="${esc(s.acc)}"></label></div></div>`;
  if(tab=='services')b=`<p class="mut">Kartu layanan di beranda. Tiap kartu membuka halaman tujuan yang dipilih (buat halaman baru di tab Menu &amp; Halaman).</p>${list('services','Kartu Layanan',1)}`;
  if(tab=='pages')b=`<p class="mut">Halaman tampil berjenjang mengikuti &quot;Di bawah&quot;; tombol <b>+ Sub</b> menambah sub-menu. Format isi: baris biasa = paragraf, <code>## Judul</code> = subjudul, <code>- teks</code> = poin.</p>${order().map(([i,d])=>card(D.pages[i],i,d)).join('')}<div class="row"><button data-a="add">+ Halaman Baru</button><button data-a="grp">+ Grup Submenu</button></div>`;
  if(tab=='why')b=list('why','Mengapa Memilih Kami')+list('testi','Testimoni (bagian tampil di beranda jika ada isi)');
  if(tab=='tr'){TL=strs();const n=TL.filter(x=>!(D.tr.en[x]&&D.tr.zh[x])).length;b=`<p class="mut">Website otomatis tampil dalam Indonesia, Inggris, dan Mandarin. Teks yang Anda ubah atau tambah perlu diterjemahkan juga. <b>${n}</b> teks belum lengkap terjemahannya.</p><p><button class="pri" data-a="autotr">Terjemahkan otomatis yang belum ada</button></p>${TL.map((k,i)=>`<div class="card"><p class="mut" style="margin:0 0 6px">${esc(k)}</p><div class="grid"><label>English<textarea data-tr="en" data-n="${i}" rows="2" style="font-family:inherit">${esc(D.tr.en[k]||'')}</textarea></label><label>中文<textarea data-tr="zh" data-n="${i}" rows="2" style="font-family:inherit">${esc(D.tr.zh[k]||'')}</textarea></label></div></div>`).join('')}`}
  if(tab=='gh'){const c=ghc();b=`<div class="card"><h3>Publikasi ke GitHub</h3><p class="mut">Setelah dipublikasikan, Cloudflare Pages atau GitHub Pages memperbarui website otomatis. Token hanya disimpan di peramban ini dan tidak ikut masuk ke website.</p><div class="grid"><label>Repositori (pemilik/nama-repo)<input id="gr" value="${esc(c.repo)}" placeholder="username/nama-repo"></label><label>Branch<input id="gb" value="${esc(c.branch)}"></label><label>Lokasi file data<input id="gp" value="${esc(c.path)}"></label><label>Token (fine-grained, izin Contents: Read and write)<input id="gt" type="password" value="${esc(c.token)}" autocomplete="off"></label></div><p><button class="pri" data-a="ghsave">Simpan &amp; Tes Koneksi</button> <button data-a="ghclear">Hapus token</button></p></div>`}
  if(tab=='form'){const P=D.pages;b=`<p class="mut">Atur pilihan yang tampil di menu <b>Ajukan Sekarang</b> dan isian formulir pengajuan. Urutan pilihan mengikuti urutan halaman di tab Menu &amp; Halaman. Kolom <b>Berlaku untuk</b> menentukan isian itu muncul di semua pengajuan, semua pengajuan visa, atau satu halaman saja.</p><h3>Pilihan di Menu Ajukan</h3>${apl().map(([p,i])=>apc(p,i)).join('')}<p><button class="pri" data-a="apnew">+ Tambah Pilihan</button></p>${list('forms','Isian Formulir Pengajuan')}`}
  if(tab=='acc')b=`<div class="card"><h3>Ganti Username / Password</h3><div class="grid"><label>Username<input id="nu" value="${esc(D.auth.user)}"></label><label>Password baru (min. 8 karakter)<input id="np" type="password" autocomplete="new-password"></label><label>Ulangi password<input id="np2" type="password" autocomplete="new-password"></label></div><p><button data-a="pw">Terapkan</button></p></div>`;
  $('#app').innerHTML=`<section class="wrap"><div class="row"><h1 style="margin:0;flex:1">Panel Admin</h1><a href="index.html">Lihat website</a><button data-a="out">Keluar</button></div><div class="tabs">${T.map(t=>`<button data-a="tab" data-t="${t[0]}" class="${tab==t[0]?'on':''}">${t[1]}</button>`).join('')}</div>${b}<div class="bar"><button class="pri" data-a="save">Simpan &amp; Terbitkan</button><span id="msg" class="mut"></span></div></section>`;
  scrollTo(0,y)}

const dsc=(id,o=[])=>{D.pages.forEach(x=>{if(x.parent==id&&!o.includes(x.id)){o.push(x.id);dsc(x.id,o)}});return o};
const order=()=>{const o=[],w=(pid,d)=>D.pages.forEach((p,i)=>{if((p.parent||'')==pid&&d<8){o.push([i,d]);w(p.id,d+1)}});w('',0);return o};
const sib=(i,dir)=>{const par=D.pages[i].parent||'';for(let j=i+dir;j>=0&&j<D.pages.length;j+=dir)if((D.pages[j].parent||'')==par)return j;return -1};
function card(p,i,d){const X=[p.id,...dsc(p.id)],G=D.pages.filter(x=>!X.includes(x.id)&&x.id!='beranda');
  return `<div class="card" style="margin-left:${d*18}px"><div class="row"><input data-i="${i}" data-k="title" value="${esc(p.title)}">
${p.group?'<span class="tag">Grup</span>':''}${p.id=='beranda'?'':`<select data-i="${i}" data-k="parent"><option value="">Menu utama</option>${G.map(g=>`<option value="${g.id}"${p.parent==g.id?' selected':''}>Di bawah: ${esc(g.title)}</option>`).join('')}</select>`}
<label class="ck"><input type="checkbox" data-i="${i}" data-k="show"${p.show?' checked':''}>Tampil</label>
${p.group||p.id=='beranda'||p.id=='kontak'?'':`<label class="ck"><input type="checkbox" data-i="${i}" data-k="ap"${p.ap?' checked':''}>Di menu Ajukan</label><label class="ck"><input type="checkbox" data-i="${i}" data-k="rptka"${p.rptka?' checked':''}>Wajib RPTKA dulu</label>`}
<button data-a="up" data-i="${i}">↑</button><button data-a="dn" data-i="${i}">↓</button><button data-a="sub" data-i="${i}">+ Sub</button>${p.id=='beranda'?'':`<button data-a="del" data-i="${i}">Hapus</button>`}</div>
${p.group?'':`<textarea data-i="${i}" data-k="body" rows="7">${esc(p.body)}</textarea>${p.id=='beranda'||p.id=='kontak'?'':`<label style="margin-top:8px">Judul di menu Ajukan (opsional)</label><input data-i="${i}" data-k="at" value="${esc(p.at)}"><label style="margin-top:8px">Persyaratan berkas (satu per baris, awali dengan &quot;- &quot;)</label><textarea data-i="${i}" data-k="docs" rows="4">${esc(p.docs)}</textarea>`}<label style="margin-top:8px">Gambar halaman (opsional)</label>${up('page',p.img,i)}`}</div>`}

function build(){const c=document.documentElement.cloneNode(true);
  c.querySelector('#data').textContent=JSON.stringify(D).replace(/</g,'\\u003c');
  ['#app','#nav','#foot','#brand','#tb','#lg'].forEach(s=>c.querySelector(s).innerHTML='');
  return '<!DOCTYPE html>\n'+c.outerHTML}

function pic(file,max,png){return new Promise((ok,no)=>{const r=new FileReader();
  r.onload=()=>{const i=new Image();i.onload=()=>{const k=Math.min(1,max/i.width),c=document.createElement('canvas');c.width=Math.round(i.width*k);c.height=Math.round(i.height*k);c.getContext('2d').drawImage(i,0,0,c.width,c.height);ok(c.toDataURL(png?'image/png':'image/jpeg',.82))};i.onerror=no;i.src=r.result};
  r.onerror=no;r.readAsDataURL(file)})}

async function save(){const m=$('#msg'),c=ghc();
  if(c.repo&&c.token){await ghPub();return}
  m.textContent='Menyimpan…';
  const bl=new Blob(['window.SITE_DATA='+JSON.stringify(D)+';'],{type:'text/javascript'}),a=document.createElement('a');a.href=URL.createObjectURL(bl);a.download='data.js';document.body.append(a);a.click();a.remove();
  m.textContent='Pengaturan GitHub belum diisi (tab GitHub), jadi file data.js diunduh. Ganti file data/data.js dengan file ini, lalu upload ke hosting.'}

async function chPw(){const u=$('#nu').value.trim(),p=$('#np').value,m=$('#msg');
  if(!u){m.textContent='Username tidak boleh kosong.';return}
  if(p.length<8||p!=$('#np2').value){m.textContent='Password minimal 8 karakter dan kedua isian harus sama.';return}
  const salt=hx(crypto.getRandomValues(new Uint8Array(16)));
  D.auth={user:u,salt,it:150000,hash:await hsh(p,salt,150000)};
  m.textContent='Akun diperbarui. Tekan Simpan & Terbitkan agar berlaku.'}

const go=u=>{const a=document.createElement('a');a.href=u;a.target='_blank';a.rel='noopener';document.body.append(a);a.click();a.remove()};
function sendMail(b){const box=b.closest('[data-v]'),v=D.pages.find(x=>x.id==box.dataset.v),m=$('#fm'),to=D.site.email,F=fields(v),g=f=>((box.querySelector('#f_'+f.id)||{}).value||'').trim();
  if(!to){m.textContent=tt('Email tujuan belum diisi di Panel Admin.');return}
  const miss=F.find(f=>f.req&&!g(f));if(miss){m.textContent=tt('Lengkapi kolom yang wajib diisi:')+' '+tt(miss.label);return}
  const L=[];if(v)L.push(`Pengajuan: ${v.at||v.title}`);F.forEach(f=>L.push(`${f.label}: ${g(f)||'-'}`));
  const nm=F.find(f=>f.id=='fn'),sv=F.find(f=>f.id=='fs'),who=nm?g(nm):'',e=encodeURIComponent,
    sub=v?`Pengajuan ${v.at||v.title} - ${who}`:`Konsultasi ${sv?g(sv):''} - ${who}`,body=`Halo ${D.site.name},\n\n`+L.join('\n')+'\n\nTerima kasih.';
  go(b.dataset.m=='g'?`https://mail.google.com/mail/?view=cm&fs=1&to=${e(to)}&su=${e(sub)}&body=${e(body)}`:`mailto:${to}?subject=${e(sub)}&body=${e(body)}`);
  m.textContent=tt('Email dibuka. Lampirkan berkas lalu kirim.')}

document.addEventListener('input',e=>{const t=e.target,d=t.dataset;
  if(d.tr){const k=TL[d.n];if(t.value.trim())D.tr[d.tr][k]=t.value;else delete D.tr[d.tr][k];return}
  if(d.s!==undefined){D.site[d.s]=t.value;return}
  if(d.l){D[d.l][d.i][d.f]=t.type=='checkbox'?t.checked:t.value;return}
  if(d.k!==undefined&&d.i!==undefined)D.pages[d.i][d.k]=t.type=='checkbox'?t.checked:t.value});

document.addEventListener('change',async e=>{const t=e.target,d=t.dataset;
  if(t.type!='file'||!t.files[0])return;
  try{const u=await pic(t.files[0],d.u=='logo'?400:1400,d.u=='logo');
    if(d.u=='page')D.pages[d.i].img=u;else if(d.u=='services')D.services[d.i].img=u;else D.site[d.u]=u;draw()}
  catch(x){const m=$('#msg');if(m)m.textContent='Gambar tidak dapat dibaca.'}});

document.addEventListener('keydown',e=>{if(e.key=='Enter'&&e.target.id=='lp')doLogin()});

document.addEventListener('click',async e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.id=='bt'){$('#nav').classList.toggle('show');return}
  if(b.dataset.lg){lang=b.dataset.lg;try{localStorage.setItem('kgk_lang',lang)}catch(x){}route();return}
  if(b.parentNode.classList.contains('dd')){b.parentNode.classList.toggle('open');return}
  const a=b.dataset.a,d=b.dataset,i=+d.i,P=D.pages,L=D[d.l];if(!a)return;
  if(a=='mail')sendMail(b);
  else if(a=='login')doLogin();
  else if(a=='out'){authed=false;sset(0);login()}
  else if(a=='tab'){tab=d.t;draw()}
  else if(a=='add'||a=='grp'){P.push({id:'m'+Date.now().toString(36),title:a=='add'?'Halaman Baru':'Grup Baru',parent:'',group:a=='grp',show:true,body:''});draw()}
  else if(a=='up'||a=='dn'){const j=sib(i,a=='up'?-1:1);if(j>=0){[P[j],P[i]]=[P[i],P[j]];draw()}}
  else if(a=='sub'){P.push({id:'m'+Date.now().toString(36),title:'Sub Halaman Baru',parent:P[i].id,group:false,show:true,body:''});draw()}
  else if(a=='del'){const g=P[i];P.forEach(x=>{if(x.parent==g.id)x.parent=g.parent||''});P.splice(i,1);draw()}
  else if(a=='ladd'){const o=Object.fromEntries(LS[d.l].map(x=>[x[0],'']));if(d.l=='services'){o.to='beranda';o.img='';o.t='Layanan Baru'}if(d.l=='forms'){o.id='x'+Date.now().toString(36);o.type='text';o.req=false;o.label='Isian Baru'}L.push(o);draw()}
  else if(a=='lup'&&i>0){[L[i-1],L[i]]=[L[i],L[i-1]];draw()}
  else if(a=='ldn'&&i<L.length-1){[L[i+1],L[i]]=[L[i],L[i+1]];draw()}
  else if(a=='ldel'){L.splice(i,1);draw()}
  else if(a=='rm'){if(d.u=='page')delete P[i].img;else if(d.u=='services')D.services[i].img='';else D.site[d.u]='';draw()}
  else if(a=='pw')chPw();
  else if(a=='autotr')autoTr();
  else if(a=='apoff'){P[i].ap=false;draw()}
  else if(a=='apnew'){P.push({id:'a'+Date.now().toString(36),title:'Pilihan Ajukan Baru',parent:'',group:false,show:false,ao:true,ap:true,body:'Deskripsi singkat pilihan ini.',docs:'- Paspor dengan masa berlaku minimal 6 bulan\n- Pas foto berwarna terbaru'});draw()}
  else if(a=='apup'||a=='apdn'){const L=apl(),k=L.findIndex(x=>x[1]==i),j=k+(a=='apup'?-1:1);if(L[j]){[L[k],L[j]]=[L[j],L[k]];L.forEach((x,n)=>x[0].apo=n);draw()}}
  else if(a=='ghpub')ghPub();
  else if(a=='ghsave')ghSave();
  else if(a=='ghclear'){const c=ghc();c.token='';try{localStorage.setItem('kgk_gh',JSON.stringify(c))}catch(x){}draw()}
  else if(a=='save')save();
});
let tp=[];
document.addEventListener('click',e=>{if(e.target.id!='cp')return;const n=Date.now();tp=tp.filter(t=>n-t<3000);tp.push(n);if(tp.length>=5){tp=[];location.hash='#/panel'}});
if(sget()=='2'){sset(1);location.hash='#/panel'}
addEventListener('hashchange',route);
route();
