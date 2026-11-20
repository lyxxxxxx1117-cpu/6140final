const body=document.body,edition=document.getElementById('edition'),openButton=document.getElementById('open-paper');
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
const pages=['background','risk','policy','effect','sources'];
const navLinks=[...document.querySelectorAll('.reading-nav>div a')];
let busy=false,timers=[];
function clearTransition(){timers.forEach(clearTimeout);timers=[];busy=false;openButton.disabled=false;body.classList.remove('turning','entering');}
function setPage(target,updateHistory=true){
 if(!pages.includes(target))target='background';
 for(const id of pages)document.getElementById(id).hidden=id!==target;
 edition.hidden=false;body.classList.add('reading-state');body.classList.remove('cover-state');
 navLinks.forEach(a=>{const active=a.hash==='#'+target;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(updateHistory&&location.hash!=='#'+target)history.pushState(null,'','#'+target);
 window.scrollTo({top:0,behavior:'instant'});
 const title=document.querySelector('#'+target+' h2');title.tabIndex=-1;title.focus({preventScroll:true});
 document.title='Beyond the Byline — '+(target==='sources'?'References':target[0].toUpperCase()+target.slice(1));
}
function reveal(target='background',updateHistory=true){
 if(busy)return;
 if(body.classList.contains('reading-state')){setPage(target,updateHistory);return;}
 busy=true;openButton.disabled=true;
 const show=()=>{setPage(target,updateHistory);body.classList.add('entering');};
 if(reduced.matches){show();clearTransition();return;}
 body.classList.add('turning');timers.push(setTimeout(show,620),setTimeout(clearTransition,1850));
}
function cover(updateHistory=true){
 clearTransition();edition.hidden=true;body.classList.remove('reading-state');body.classList.add('cover-state');
 if(updateHistory&&location.hash!=='#home')history.pushState(null,'','#home');
 window.scrollTo({top:0,behavior:'instant'});openButton.focus({preventScroll:true});document.title='Beyond the Byline — The Editorial Accountability Issue';
}
openButton.addEventListener('click',()=>reveal());document.getElementById('close-paper').addEventListener('click',()=>cover());
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=a.hash.slice(1);if(target==='home'){e.preventDefault();cover();}else if(pages.includes(target)){e.preventDefault();reveal(target);}}));
function restore(){clearTransition();const target=location.hash.slice(1);if(pages.includes(target))setPage(target,false);else cover(false);}
window.addEventListener('popstate',restore);window.addEventListener('hashchange',restore);
if(pages.includes(location.hash.slice(1)))setPage(location.hash.slice(1),false);

const questionQuote=document.querySelector('#background .research-question');
if(questionQuote&&!reduced.matches&&'IntersectionObserver' in window){
 questionQuote.classList.add('quote-waiting');
 const quoteObserver=new IntersectionObserver(entries=>{
  if(entries.some(entry=>entry.isIntersecting)){
   questionQuote.classList.remove('quote-waiting');
   questionQuote.classList.add('quote-visible');
   quoteObserver.disconnect();
  }
 },{threshold:0.2});
 quoteObserver.observe(questionQuote);
}
