function initTheme(){const t=localStorage.getItem('vm_theme')||'light';applyTheme(t);}
function applyTheme(t){document.documentElement.setAttribute('data-theme',t);localStorage.setItem('vm_theme',t);const b=document.getElementById('theme-btn');if(b)b.textContent=t==='dark'?'☀️':'🌙';}
function toggleTheme(){applyTheme(localStorage.getItem('vm_theme')==='dark'?'light':'dark');}
function speak(w){if(!window.speechSynthesis)return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(w);u.lang='en-US';u.rate=0.85;speechSynthesis.speak(u);}
function getSRSData(){return JSON.parse(localStorage.getItem('vm_srs')||'{}');}
function incrementTodayCount(){const t=new Date().toDateString();const d=JSON.parse(localStorage.getItem('vm_daily_counts')||'{}');d[t]=(d[t]||0)+1;localStorage.setItem('vm_daily_counts',JSON.stringify(d));}
function getDailyGoal(){return parseInt(localStorage.getItem('vm_daily_goal')||'20');}
