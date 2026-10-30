const $=s=>document.querySelector(s),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
$('#y').textContent=new Date().getFullYear();
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});
// magnetic buttons
document.querySelectorAll('.mag').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();if(!rm)b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
// live card previews
const rnd=()=>Array.from({length:14},()=>'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%'[Math.random()*60|0]).join('');
$('#pw').closest('.card').addEventListener('mouseenter',()=>{let n=0;const i=setInterval(()=>{$('#pw').textContent=rnd();if(++n>12)clearInterval(i)},50)});
setInterval(()=>$('#clk').textContent=new Date().toLocaleTimeString('en-GB'),1000);$('#clk').textContent=new Date().toLocaleTimeString('en-GB');
const sc=['22 closed','80 open','443 open','3000 open'];let si=0;setInterval(()=>$('#sc').textContent='port '+sc[si++%4],1200);
// copy email
const cp=()=>{navigator.clipboard&&navigator.clipboard.writeText('codehuzaifa349@gmail.com');$('#toast').classList.add('s');setTimeout(()=>$('#toast').classList.remove('s'),1800)};
$('#mail').onclick=cp;$('#mail').onkeydown=e=>e.key==='Enter'&&cp();
// ring cursor
const rg=$('#ring');addEventListener('mousemove',e=>{rg.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
document.querySelectorAll('a,button,.card,.lv,input').forEach(el=>{el.addEventListener('mouseenter',()=>document.body.classList.add('h'));el.addEventListener('mouseleave',()=>document.body.classList.remove('h'))});
// CTF
const FL=['flag{view_source_master}','flag{base64_is_not_encryption}','flag{console_explorer}'],dn=new Set();
console.log(['huzaifa@portfolio:~$ ls','level3.txt  README.md','','huzaifa@portfolio:~$ cat level3.txt','flag{console_explorer}','','huzaifa@portfolio:~$ echo "Nice find. Paste the flag into Level 3."','Nice find. Paste the flag into Level 3.'].join('\n'));
document.querySelectorAll('.lv').forEach((lv,i)=>lv.querySelector('form').onsubmit=e=>{e.preventDefault();const st=lv.querySelector('.st');
 if(lv.querySelector('input').value.trim()===FL[i]){lv.classList.add('ok');st.textContent='Solved. Nice work.';dn.add(i);$('#pg').textContent=dn.size+'/3';
  if(dn.size===3){$('#win').style.display='block';$('#win').scrollIntoView({behavior:'smooth',block:'center'});for(let k=0;k<70;k++){const c=document.createElement('i');c.className='cf';c.style.cssText=`left:${Math.random()*100}vw;background:${['#7c5cff','#38e1ff','#ffb020','#3ddc84'][k%4]};animation-delay:${Math.random()*.8}s`;document.body.appendChild(c);setTimeout(()=>c.remove(),3600)}}}
 else st.textContent='Wrong flag. Try again.'});
// certificate lightbox
const lb=$('#lb'),lbi=$('#lb img');let lf;
const openLb=e=>{const b=e.currentTarget;lbi.src=b.dataset.src;lbi.alt=b.dataset.alt||'Certificate';lf=document.activeElement;lb.classList.add('o');$('#lbx').focus()};
const closeLb=()=>{lb.classList.remove('o');lf&&lf.focus()};
document.querySelectorAll('[data-zoom]').forEach(b=>b.addEventListener('click',openLb));
lb.addEventListener('click',closeLb);
addEventListener('keydown',e=>{if(e.key==='Escape'&&lb.classList.contains('o'))closeLb()});const out=$('#out'),cmd=$('#cmd'),A=t=>`<span class="c">${t}</span>`,E=x=>x.replace(/</g,'&lt;'),LK=(h,t)=>`<a href="${h}" target="_blank" rel="noopener">${t}</a>`,GO=(h,t)=>`<a href="${h}">${t}</a>`;
const C={
about:()=>`<b>Muhammad Huzaifa Khan</b>\nStudent from Hyderabad, Pakistan.\nGrowing into a Full-Stack Developer and Ethical Hacker.\nStatus: ${A('open to projects and internships')}\n${GO('#about','Read the About section')}`,
skills:()=>`<b>Build</b>    HTML, CSS, JavaScript, Tailwind, Node.js, Express, SQLite, Firebase, Git, GitHub\n<b>Hacking</b> Kali Linux, Termux, Gobuster, ExifTool, TryHackMe\n${GO('#skills','See the Skills section')}`,
projects:()=>`5 projects:\n- ${LK('https://mv8jtmqr34qb-production-6dmody2l.us-central1.suga.run/','CipherPath')} (full-stack, live)\n- AI Fitness Coach (Firebase)\n- Cyber Tools Collection\n- ${LK('https://code-huzaifa349.github.io/Keygen.js/','Password Generator')} (live)\n- ${LK('https://code-huzaifa349.github.io/I-create-a-digital-clock-at-home-pratice/','Digital Clock')} (live)\n${GO('#work','See the Projects section')}`,
certs:()=>`10 certificates (Nov 2023 to Oct 2026):\n- OPSWAT Critical Infrastructure Protection\n- TestDome HTML/CSS (top 25%)\n- Simplilearn Ethical Hacking 101\n- WsCube Ethical Hacking masterclass\n- UrduCourses CyberSavvy\n- TryHackMe x2, Google, Cisco, (ISC)²\n${GO('#certs','Open the Certificates section')}`,
hack:()=>`Hack my portfolio: 3 levels, 3 flags.\n1. View the page source\n2. Decode a base64 string\n3. Open the browser console\nFlags look like ${A('flag{...}')}\n${GO('#hack','Start the challenge')}`,
contact:()=>`<a href="mailto:codehuzaifa349@gmail.com">codehuzaifa349@gmail.com</a>\n${LK('https://wa.me/923043697071','WhatsApp')}  ${LK('https://github.com/code-huzaifa349','GitHub')}  ${LK('https://www.linkedin.com/in/huzaifa-khan-bb3660435/','LinkedIn')}  ${LK('https://www.tiktok.com/@code.huzaifa','TikTok')}`,
scan:()=>{['22/tcp closed','80/tcp '+A('open'),'443/tcp '+A('open'),'Result: 0 vulnerabilities. Hire him anyway.'].forEach((l,i)=>setTimeout(()=>{out.insertAdjacentHTML('beforeend',l+'\n');out.scrollTop=1e5},400*(i+1)));return'Scanning this portfolio ...'},
clear:()=>{out.innerHTML='';return''}};
C.help=()=>`Tap a button below or type a command:\n${Object.keys(C).map(A).join(' ')}`;
function run(r){const c=r.trim().toLowerCase();if(!c)return;out.insertAdjacentHTML('beforeend',`\n${A('$')} ${E(c)}\n`);let o;
 if(c==='sudo hire huzaifa'){o='Permission granted. Opening contact...';setTimeout(()=>$('#contact').scrollIntoView(),700)}
 else if(c.startsWith('sudo'))o='Nice try. Hint: sudo hire huzaifa';
 else if(C[c])o=C[c]();else o=`command not found: ${E(c)}. Type ${A('help')}.`;
 if(o)out.insertAdjacentHTML('beforeend',o+'\n');out.scrollTop=1e5}
$('#f').onsubmit=e=>{e.preventDefault();run(cmd.value);cmd.value=''};
['about','skills','projects','certs','hack','contact','scan'].forEach(n=>{const b=document.createElement('button');b.type='button';b.textContent=n;b.onclick=()=>run(n);$('#chips').appendChild(b)});
out.innerHTML='<span style="color:#8391b3">Live terminal. Type a command or tap a button.</span>\n';run('help');
(()=>{
const $$=s=>[...document.querySelectorAll(s)],G=window.gsap,ST=window.ScrollTrigger,pre=$('#pre'),big=innerWidth>900,I={v:1};
if(G&&ST)G.registerPlugin(ST);
const mb=$('#mb'),nl=$('#nl'),cl=()=>{nl.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.textContent='Menu'};
mb.onclick=()=>{const o=nl.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'Close':'Menu'};
nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',cl));addEventListener('keydown',e=>{if(e.key==='Escape')cl()});
addEventListener('mousemove',()=>document.body.classList.add('m'),{once:true});
let L,vel=0;
if(window.Lenis&&!rm){L=new Lenis({lerp:.085});L.on('scroll',e=>{vel=e.velocity});if(G&&ST){L.on('scroll',ST.update);G.ticker.add(t=>L.raf(t*1000));G.ticker.lagSmoothing(0)}else{const f=t=>{L.raf(t);requestAnimationFrame(f)};requestAnimationFrame(f)}}
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();L?L.scrollTo(t,{offset:-70}):t.scrollIntoView({behavior:'smooth'})}});
const pk=$('#pkt'),tick=()=>{try{pk.textContent=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Karachi'})}catch(e){}};tick();setInterval(tick,1000);
const rl=$('#rl'),WD=['Web developer','Ethical hacker in training','Firebase builder','Linux and recon learner'],GL='!<>-_/[]{}=+*^?#';let wi=0;
const scr=to=>{let f=0;const n=to.length,step=()=>{let o='';for(let i=0;i<n;i++)o+=i<f/2?to[i]:(to[i]===' '?' ':GL[Math.random()*GL.length|0]);rl.textContent=o;if(f++<n*2)requestAnimationFrame(step);else setTimeout(()=>scr(WD[++wi%WD.length]),1800)};step()};
if(!rm)setTimeout(()=>scr(WD[0]),G?2200:300);
const nv=$('nav');let ly=0;addEventListener('scroll',()=>{const y=scrollY;nv.classList.toggle('hd',y>ly&&y>240&&!nl.classList.contains('open'));ly=y},{passive:true});
const na=$$('nav ul a'),ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)na.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
na.forEach(a=>{const t=document.querySelector(a.getAttribute('href'));if(t)ob.observe(t)});
addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.card,.bt,.facts');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')},{passive:true});
const mq=$('.mq div');mq.innerHTML+=mq.innerHTML;let mp=0;
if(!rm)(function m(){vel*=.92;mp-=.7+Math.abs(vel)*.4;const w=mq.scrollWidth/2;if(w&&-mp>=w)mp+=w;mq.style.transform=`translate3d(${mp}px,0,0)`;requestAnimationFrame(m)})();
if(G&&!rm){I.v=0;const o={n:0};G.to(o,{n:100,duration:1.6,ease:'power2.inOut',onUpdate:()=>{$('#pl').textContent=Math.round(o.n)+'%';$('#pf').style.width=o.n+'%'},onComplete:()=>G.to(pre,{yPercent:-100,duration:.95,ease:'expo.inOut',onStart:()=>{G.from('.ch i',{yPercent:115,duration:1.2,delay:.4,ease:'expo.out',stagger:.05});G.from('.hero .tag,.role,.lead,.btns,.term,.hud',{y:30,opacity:0,duration:1,delay:.7,stagger:.1,ease:'power3.out',clearProps:'transform'});G.to(I,{v:1,duration:2.6,delay:.3,ease:'expo.out'})},onComplete:()=>pre.remove()})})}else pre.remove();
if(G&&ST&&!rm){G.to('.hg',{yPercent:-9,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.6}});
document.documentElement.classList.add('ga');$$('#about h2,#skills h2,#work h2,#contact h2,.ab>*,.bt,#work .sub,.pj,.mail,#contact .btns').forEach(e=>e.setAttribute('data-a',''));
ST.batch('[data-a]',{start:'top 90%',once:true,onEnter:b=>G.fromTo(b,{y:40,opacity:0},{y:0,opacity:1,duration:.9,stagger:.09,ease:'power3.out',overwrite:true,clearProps:'transform'})})}
try{const c=$('#gl'),R=new THREE.WebGLRenderer({canvas:c,alpha:true,antialias:false,powerPreference:'high-performance'});R.setPixelRatio(Math.min(devicePixelRatio,1.75));
const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(55,1,.1,100),NX=big?170:90,NZ=big?100:60,P=new Float32Array(NX*NZ*3);let k=0;
for(let i=0;i<NX;i++)for(let j=0;j<NZ;j++){P[k++]=(i/(NX-1)-.5)*40;P[k++]=0;P[k++]=(j/(NZ-1)-.5)*24}
const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(P,3));
const U={t:{value:0},m:{value:new THREE.Vector2(99,99)},a:{value:0},s:{value:0}};
const mat=new THREE.ShaderMaterial({uniforms:U,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
vertexShader:`uniform float t,a;uniform vec2 m;varying float h,d;
void main(){vec3 p=position;float w=sin(p.x*.3+t*.7)*.5+sin(p.z*.45-t*.55)*.4+sin((p.x+p.z)*.18+t*.3)*.6;float r=length(p.xz-m);float rp=sin(r*2.6-t*4.)*exp(-r*.45)*1.1*a;p.y=w+rp-1.2;h=rp;vec4 v=modelViewMatrix*vec4(p,1.);d=-v.z;gl_PointSize=(1.4+abs(h)*2.2)*(9./d);gl_Position=projectionMatrix*v;}`,
fragmentShader:`varying float h,d;uniform float s;void main(){vec2 q=gl_PointCoord-.5;if(dot(q,q)>.25)discard;float f=1.-smoothstep(6.,26.,d);vec3 c=mix(vec3(.62,.74,1.),vec3(1.,.7,.24),clamp(abs(h)*1.2+s,0.,1.));gl_FragColor=vec4(c,(.22+abs(h)*.6)*f);}`});
sc.add(new THREE.Points(g,mat));
const rc=new THREE.Raycaster(),pn=new THREE.Plane(new THREE.Vector3(0,1,0),1.2),hit=new THREE.Vector3(),nd=new THREE.Vector2(),tg=new THREE.Vector2(99,99);let act=0,mxn=0,pp=0;
addEventListener('pointermove',e=>{nd.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1);rc.setFromCamera(nd,cam);if(rc.ray.intersectPlane(pn,hit)){tg.set(hit.x,hit.z);act=1}mxn=nd.x},{passive:true});
const rz=()=>{R.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()};rz();addEventListener('resize',rz);
(function a(t){if(!document.hidden){const dh=document.documentElement.scrollHeight-innerHeight,p=dh>0?scrollY/dh:0;pp+=(p-pp)*.06;U.t.value=t*.001;U.s.value=pp*1.2;U.a.value+=(act-U.a.value)*.05;U.m.value.lerp(tg,.12);
cam.position.set(mxn*.7,3.1+pp*2.2+(1-I.v)*3,10-pp*3+(1-I.v)*7);cam.lookAt(0,-.6-pp*1.2,-3);c.style.opacity=I.v*(1-.45*Math.min(1,pp*3));R.render(sc,cam)}if(!rm)requestAnimationFrame(a)})(0);
}catch(e){}
})();

(()=>{const el=$('#cph');if(!el||rm)return;const HX='0123456789abcdef',T='CipherPath';
const go=()=>{let f=0;const s=()=>{let o='';for(let i=0;i<T.length;i++)o+=i<f/3?T[i]:HX[Math.random()*16|0];el.textContent=o;if(f++<T.length*3)requestAnimationFrame(s);else setTimeout(go,3400)};s()};
new IntersectionObserver((es,ob)=>{if(es[0].isIntersecting){ob.disconnect();go()}}).observe(el)})();
