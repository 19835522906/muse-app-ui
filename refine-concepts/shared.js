/* Shared runtime for the refine concept boards.
   Rendering is a canvas approximation (same approach as muse-app.html): CSS filters for tone,
   a face-region soft-focus for skin, a radial lift for face light, screen-blur for glow, grain and vignette.
   No face detection: the "face region" is the upper-middle third, which holds for typical portraits. */
window.Muse=(()=>{
 const q=new URLSearchParams(location.search);
 const PHOTOS={portrait5:'暖调 · 发闷',portrait2:'逆光 · 发灰',portrait4:'棚拍 · 偏平',portrait:'手机 · 偏蓝'};
 const photoId=PHOTOS[q.get('photo')]?q.get('photo'):'portrait5';
 const photoSrc=`../assets/${photoId}.jpg`;
 const embed=q.has('embed');
 if(embed)document.documentElement.classList.add('embed-doc');

 const DEFAULT=()=>({exposure:0,contrast:0,saturation:0,warmth:0,smooth:0,facelight:0,glow:0,grain:0,vignette:0,look:null,lookAmt:100});
 const scaled=(s,k)=>{const o={...s};for(const key of ['exposure','contrast','saturation','warmth','smooth','facelight','glow','grain','vignette'])o[key]=s[key]*k;o.lookAmt=s.lookAmt*k;return o;};

 const icons={
  close:'M6 6l12 12M18 6 6 18',check:'m5 12 4.5 4.5L19 7',back:'m15 5-7 7 7 7',
  compare:'M12 3v18M4 8l-1 4 1 4M20 8l1 4-1 4',undo:'M9 14 4 9l5-5M4 9h9.5a5.5 5.5 0 0 1 0 11H11',
  wand:'m3 21 10.5-10.5m0 0 1.5 1.5M18 2.5v4m-2-2h4M6 5l1.5 1.5M20 10l1.5 1.5',
  face:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-3-11h.01M15 10h.01M8.5 14.5a4.5 4.5 0 0 0 7 0',
  sun:'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-15v2m0 16v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M2 12h2m16 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
  drop:'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z',
  spark:'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8L19 17Z',
  sliders:'M4 6h10M18 6h2M4 12h3M11 12h9M4 18h12M20 18h0M14 4v4M7 10v4M16 16v4',
  arrow:'M5 12h14m-6-6 6 6-6 6',swipe:'M8 12h12m-5-5 5 5-5 5M4 12h.01',
  share:'M12 3v12m0-12L8 7m4-4 4 4M5 13v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6',
  eye:'M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  wifi:'M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01',
  signal:'M3 18h2v-3H3v3Zm5 0h2V11H8v7Zm5 0h2V7h-2v11Zm5 0h2V3h-2v15Z',
  battery:'M3 8h15v8H3V8Zm15 3h2v2h-2v-2ZM5 10h9v4H5v-4Z'
 };
 const icon=(n,cls='')=>`<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${icons[n]}"/></svg>`;

 const cache=new Map();
 function load(src){if(cache.has(src))return cache.get(src);const p=(async()=>{const img=new Image();img.src=src;await img.decode();return img;})();cache.set(src,p);p.catch(()=>cache.delete(src));return p;}

 let grainTile=null;
 function grain(){if(grainTile)return grainTile;const t=document.createElement('canvas');t.width=t.height=192;const g=t.getContext('2d'),d=g.createImageData(192,192);for(let i=0;i<d.data.length;i+=4){const v=105+Math.random()*100|0;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255;}g.putImageData(d,0,0);return grainTile=t;}

 function baseFilter(s){const b=1+s.exposure/100,c=1+s.contrast/100,sat=1+s.saturation/100,sep=Math.max(0,s.warmth)/100*.9;return `brightness(${b.toFixed(3)}) contrast(${c.toFixed(3)}) saturate(${sat.toFixed(3)}) sepia(${sep.toFixed(3)})`;}
 const faceCenter=(w,h)=>({x:w*.5,y:h*.38,r:Math.min(w,h)*.42});

 async function render(source,s,maxSize=900){
  const img=source instanceof HTMLCanvasElement?source:await load(source),iw=img.naturalWidth||img.width,ih=img.naturalHeight||img.height;
  const ratio=Math.min(1,maxSize/Math.max(iw,ih)),w=Math.max(1,Math.round(iw*ratio)),h=Math.max(1,Math.round(ih*ratio));
  const c=document.createElement('canvas');c.width=w;c.height=h;const ctx=c.getContext('2d'),base=baseFilter(s);
  ctx.filter=base;ctx.drawImage(img,0,0,w,h);ctx.filter='none';
  if(s.look&&s.lookAmt>0){const layer=document.createElement('canvas');layer.width=w;layer.height=h;const l=layer.getContext('2d');l.filter=s.look.css+' '+base;l.drawImage(img,0,0,w,h);ctx.globalAlpha=Math.min(1,s.lookAmt/100);ctx.drawImage(layer,0,0);ctx.globalAlpha=1;}
  if(s.warmth<0){ctx.save();ctx.globalCompositeOperation='color';ctx.fillStyle=`rgba(96,140,255,${(-s.warmth/100*.22).toFixed(3)})`;ctx.fillRect(0,0,w,h);ctx.restore();}
  const snap=()=>{const t=document.createElement('canvas');t.width=w;t.height=h;t.getContext('2d').drawImage(c,0,0);return t;};
  const f=faceCenter(w,h);
  if(s.facelight>0){const a=s.facelight/100;ctx.save();ctx.globalCompositeOperation='soft-light';const g=ctx.createRadialGradient(f.x,f.y,0,f.x,f.y,f.r*1.15);g.addColorStop(0,`rgba(255,244,228,${(a*.95).toFixed(3)})`);g.addColorStop(.6,`rgba(255,244,228,${(a*.45).toFixed(3)})`);g.addColorStop(1,'rgba(255,244,228,0)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);ctx.globalCompositeOperation='screen';const g2=ctx.createRadialGradient(f.x,f.y,0,f.x,f.y,f.r);g2.addColorStop(0,`rgba(255,240,220,${(a*.16).toFixed(3)})`);g2.addColorStop(1,'rgba(255,240,220,0)');ctx.fillStyle=g2;ctx.fillRect(0,0,w,h);ctx.restore();}
  if(s.smooth>0){const a=s.smooth/100,t=snap(),tc=document.createElement('canvas');tc.width=w;tc.height=h;const g=tc.getContext('2d');g.filter=`blur(${(w/120*a+.6).toFixed(2)}px)`;g.drawImage(t,0,0);g.filter='none';g.globalCompositeOperation='destination-in';const m=g.createRadialGradient(f.x,f.y,f.r*.25,f.x,f.y,f.r*1.25);m.addColorStop(0,'rgba(0,0,0,1)');m.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=m;g.fillRect(0,0,w,h);ctx.save();ctx.globalAlpha=a*.66;ctx.drawImage(tc,0,0);ctx.restore();}
  const glowAmt=s.glow/100*.34+(s.look?.glow||0)*(s.lookAmt/100);
  if(glowAmt>0){const t=snap();ctx.save();ctx.globalCompositeOperation='screen';ctx.filter=`blur(${(w/90).toFixed(1)}px)`;ctx.globalAlpha=Math.min(.6,glowAmt);ctx.drawImage(t,0,0);ctx.restore();}
  const grainAmt=s.grain/100*.55+(s.look?.grain||0)*(s.lookAmt/100);
  if(grainAmt>0){ctx.save();ctx.globalCompositeOperation='overlay';ctx.globalAlpha=Math.min(.7,grainAmt);const sc=Math.max(.6,w/1000);ctx.scale(sc,sc);ctx.fillStyle=ctx.createPattern(grain(),'repeat');ctx.fillRect(0,0,w/sc,h/sc);ctx.restore();}
  if(s.vignette>0){const a=s.vignette/100*.55,g=ctx.createRadialGradient(w/2,h/2,Math.min(w,h)*.3,w/2,h/2,Math.max(w,h)*.72);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,`rgba(5,8,14,${a.toFixed(3)})`);ctx.fillStyle=g;ctx.fillRect(0,0,w,h);}
  return c;
 }
 function paint(el,out){el.width=out.width;el.height=out.height;el.getContext('2d').drawImage(out,0,0);}
 /* Rerender with a token so late results never overwrite newer ones. */
 function painter(el,{max=900,delay=16}={}){let token=0,timer=0;return (src,state)=>new Promise(res=>{clearTimeout(timer);timer=setTimeout(async()=>{const t=++token;try{const out=await render(src,state,max);if(t!==token)return;paint(el,out);el.hidden=false;res(out);}catch(e){res(null);}},delay);});}

 /* Face-region crop (for suggestion thumbnails). region: 'face' | 'full'. */
 async function crop(canvas,region,size=140){const w=canvas.width,h=canvas.height,c=document.createElement('canvas');const ar=.78;c.width=Math.round(size*ar);c.height=size;const g=c.getContext('2d');if(region==='face'){const f=faceCenter(w,h),cw=f.r*.95,ch=cw/ar;g.drawImage(canvas,f.x-cw/2,f.y-ch/2,cw,ch,0,0,c.width,c.height);}else{const sw=Math.min(w,h*ar),sh=sw/ar;g.drawImage(canvas,(w-sw)/2,(h-sh)/2,sw,sh,0,0,c.width,c.height);}return c;}

 /* Simple photo read: mean luma and warmth (R-B) in the face region, contrast as luma stddev. */
 async function analyse(src){const img=await load(src);const w=160,h=Math.round(160*img.naturalHeight/img.naturalWidth),c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d');g.drawImage(img,0,0,w,h);const d=g.getImageData(0,0,w,h).data,f=faceCenter(w,h);let n=0,l=0,rb=0,l2=0,N=0,L=0,L2=0;for(let y=0;y<h;y++)for(let x=0;x<w;x++){const k=(y*w+x)*4,lum=d[k]*.2126+d[k+1]*.7152+d[k+2]*.0722;N++;L+=lum;L2+=lum*lum;if(Math.hypot(x-f.x,y-f.y)<f.r*.55){n++;l+=lum;rb+=d[k]-d[k+2];l2+=lum*lum;}}const faceLuma=l/n,faceWarm=rb/n,std=Math.sqrt(L2/N-(L/N)**2);return {faceLuma,faceWarm,contrast:std};}

 /* Turn the read into three named changes + a starting quality score. Shared by A, C and D so the story is consistent. */
 function suggest(a){
  const skin={k:'skin',ic:'face',name:'Skin evened',title:'Skin looks a bit uneven',fix:'Even it out, keep the texture',why:'Soft-focus on the face only. Texture stays.',gain:7,set:s=>{s.smooth=45;s.glow=6;}};
  const light=a.faceLuma<95?{k:'light',ic:'sun',name:'Face light lifted',title:'Face is a touch dark',fix:'Lift the light on the face · +70',why:'More light where it matters. Background stays.',gain:9,set:s=>{s.facelight=70;s.exposure=8;}}
   :a.faceLuma>165?{k:'light',ic:'sun',name:'Highlights eased',title:'Highlights run a little hot',fix:'Bring the brightest skin back · −4',why:'The brightest skin comes back.',gain:5,set:s=>{s.facelight=15;s.exposure=-4;}}
   :{k:'light',ic:'sun',name:'Face light opened',title:'Light is close, could be softer',fix:'Open up the face a little · +40',why:'A gentle lift on the face.',gain:6,set:s=>{s.facelight=40;s.exposure=3;}};
  const color=a.faceWarm>60?{k:'color',ic:'drop',name:'Color balanced',title:'Color leans very warm',fix:'Cool a touch, add depth · −10',why:'Less orange in the skin, richer shadows.',gain:7,set:s=>{s.warmth=-10;s.saturation=5;s.contrast=8;}}
   :a.faceWarm<-20?{k:'color',ic:'drop',name:'Skin warmed',title:'Color leans cool',fix:'Warm the skin · +16',why:'Takes the blue out of the skin.',gain:7,set:s=>{s.warmth=16;s.saturation=6;s.contrast=5;}}
   :{k:'color',ic:'drop',name:'Tones enriched',title:'Color is a little flat',fix:'Richer tones · +8',why:'A bit more color and contrast.',gain:6,set:s=>{s.warmth=6;s.saturation=8;s.contrast=a.contrast<42?8:4;}};
  const score=Math.round(Math.min(78,52+a.contrast*.4+(a.faceLuma>=110&&a.faceLuma<=160?6:0)+(Math.abs(a.faceWarm)<35?5:0)));
  return {changes:[skin,light,color],score};
 }

 function fill(input){const min=+input.min,max=+input.max,v=+input.value,pos=(v-min)/(max-min)*100,zero=min<0?(0-min)/(max-min)*100:0;input.style.setProperty('--a',Math.min(pos,zero).toFixed(2)+'%');input.style.setProperty('--b',Math.max(pos,zero).toFixed(2)+'%');}
 function sliderRow({id,label,min=0,max=100,value=0,signed=false}){const disp=v=>signed&&v>0?'+'+v:String(v);return `<div class="row"><span>${label}</span><div class="slider-wrap">${min<0?`<span class="neutral" style="left:${(0-min)/(max-min)*100}%"></span>`:''}<input class="slider" id="${id}" type="range" min="${min}" max="${max}" value="${value}" aria-label="${label}"></div><output for="${id}">${disp(value)}</output></div>`;}
 function bindSlider(input,onInput,{signed=false}={}){const out=input.parentElement.parentElement.querySelector('output');const sync=()=>{fill(input);if(out)out.value=signed&&+input.value>0?'+'+input.value:input.value;};sync();input.addEventListener('input',()=>{sync();onInput(+input.value);});return sync;}
 /* Animate a slider to a value, firing input events along the way. */
 function glide(input,to,ms=550){return new Promise(res=>{const from=+input.value,t0=performance.now();const step=now=>{const k=Math.min(1,(now-t0)/ms),e=1-Math.pow(1-k,3);input.value=Math.round(from+(to-from)*e);input.dispatchEvent(new Event('input'));if(k<1)requestAnimationFrame(step);else res();};requestAnimationFrame(step);});}

 function hold(btn,down,up){let on=false;const d=e=>{if(on)return;on=true;if(e.pointerId!=null)btn.setPointerCapture(e.pointerId);down();};const u=()=>{if(!on)return;on=false;up();};btn.onpointerdown=d;btn.onpointerup=btn.onpointercancel=btn.onblur=u;btn.onkeydown=e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();d(e);}};btn.onkeyup=e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();u();}};}

 /* Split compare: root has .after (clipped) and .handle. */
 function split(root,{start=50,onMove}={}){const after=root.querySelector('.after'),handle=root.querySelector('.handle');let pct=start;const set=p=>{pct=Math.max(2,Math.min(98,p));after.style.clipPath=`inset(0 ${100-pct}% 0 0)`;handle.style.left=pct+'%';onMove?.(pct);};set(start);const move=e=>{const r=root.getBoundingClientRect();set((e.clientX-r.left)/r.width*100);};root.onpointerdown=e=>{root.setPointerCapture(e.pointerId);move(e);root.onpointermove=move;};root.onpointerup=root.onpointercancel=()=>{root.onpointermove=null;};return set;}

 let toastTimer=0;
 function toast(msg){let el=document.querySelector('.toast');if(!el){el=document.createElement('div');el.className='toast';document.querySelector('.screen').appendChild(el);}el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),1800);}

 function sheet(root){const scrim=root.parentElement.querySelector('.scrim');const open=()=>{root.classList.add('open');scrim?.classList.add('show');};const close=()=>{root.classList.remove('open');scrim?.classList.remove('show');};scrim?.addEventListener('click',close);return {open,close};}

 function chrome(){
  document.body.classList.toggle('embed',embed);
  const st=document.querySelector('.status');if(st)st.innerHTML=`<span>9:41</span><span class="icons">${icon('signal')}${icon('wifi')}${icon('battery')}</span>`;
  const sw=document.querySelector('.note .switch');if(sw){sw.innerHTML=`<span>换一张照片试试</span>`+Object.entries(PHOTOS).map(([id,d])=>`<a href="?photo=${id}" class="${id===photoId?'on':''}">${d}</a>`).join('')+`<br><a class="back" href="index.html">← 回到四方案并排</a>`;}
 }
 const wait=ms=>new Promise(r=>setTimeout(r,ms));
 return {q,PHOTOS,photoId,photoSrc,embed,DEFAULT,scaled,icon,load,render,paint,painter,crop,analyse,suggest,fill,sliderRow,bindSlider,glide,hold,split,toast,sheet,chrome,wait};
})();
