function initNav(active){
  const links=[
    {href:'index.html',icon:'🏠',label:'হোম'},
    {href:'flashcard.html',icon:'🃏',label:'ফ্ল্যাশকার্ড'},
    {href:'quiz.html',icon:'🧠',label:'কুইজ'},
    {href:'exam.html',icon:'📝',label:'পরীক্ষা'},
    {href:'dictionary.html',icon:'📖',label:'অভিধান'},
    {href:'progress.html',icon:'📊',label:'অগ্রগতি'},
  ];
  const dn=document.getElementById('desktop-nav');
  const mn=document.getElementById('mobile-nav');
  if(dn)dn.innerHTML=links.map(l=>`<li><a href="${l.href}" class="${l.href===active?'active':''}">${l.icon} ${l.label}</a></li>`).join('')+`<li><button id="theme-btn" onclick="toggleTheme()">🌙</button></li>`;
  if(mn)mn.innerHTML=links.map(l=>`<a href="${l.href}" class="${l.href===active?'active':''}">${l.icon} ${l.label}</a>`).join('')+`<div class="mnav-bottom"><button class="mnav-btn" onclick="toggleTheme();closeMNav()">🌙 ডার্ক মোড</button></div>`;
}
function closeMNav(){document.getElementById('mobile-nav')?.classList.remove('open');}
function toggleMNav(){document.getElementById('mobile-nav')?.classList.toggle('open');}
document.addEventListener('click',e=>{
  const mn=document.getElementById('mobile-nav');
  if(mn?.classList.contains('open')&&!mn.contains(e.target)&&!e.target.closest('#hamburger'))closeMNav();
});
