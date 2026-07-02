let coins=+localStorage.getItem('coins')||0;
let miningEnd=+localStorage.getItem('miningEnd')||0;
let boxEnd=+localStorage.getItem('boxEnd')||0;
let dailyEnd=+localStorage.getItem('dailyEnd')||0;

const coinsEl=document.getElementById('coins');
coinsEl.textContent=coins;

document.getElementById('mineBtn').onclick=()=>{

 if(Date.now()>=miningEnd && miningEnd!=0){

   coins+=100;

   localStorage.setItem('coins',coins);

   miningEnd=0;

   localStorage.setItem('miningEnd',0);

   alert("🎉 You received 100 Coins!");

   return;
 }

 if(Date.now()<miningEnd){

   alert("Mining already running!");

   return;
 }

 miningEnd=Date.now()+24*60*60*1000;

 localStorage.setItem('miningEnd',miningEnd);

};
};

document.getElementById('boxBtn').onclick=()=>{
if(Date.now()<boxEnd){alert('Box not ready');return;}
const reward=Math.floor(Math.random()10)+1;
coins+=reward;
localStorage.setItem('coins',coins);
boxEnd=Date.now()+6060*1000;
localStorage.setItem('boxEnd',boxEnd);
};

document.getElementById('dailyBtn').onclick=()=>{
if(Date.now()<dailyEnd){alert('Already claimed');return;}
coins+=10;
localStorage.setItem('coins',coins);
dailyEnd=Date.now()+246060*1000;
localStorage.setItem('dailyEnd',dailyEnd);
};

function fmt(ms){
let s=Math.max(0,Math.floor(ms/1000));
let h=Math.floor(s/3600),m=Math.floor((s%3600)/60),ss=s%60;
return ${h}h ${m}m ${ss}s;
}
setInterval(()=>{
const now=Date.now();
coinsEl.textContent=coins;
if(now<miningEnd){

 document.getElementById('miningTimer').textContent=fmt(miningEnd-now);

 document.getElementById('mineBtn').innerText="Mining...";

}else if(miningEnd!=0){

 document.getElementById('miningTimer').textContent="✅ Mining Complete";

 document.getElementById('mineBtn').innerText="Claim 100 Coins";

}else{

 document.getElementById('miningTimer').textContent="Ready";

 document.getElementById('mineBtn').innerText="Start Mining";

}
document.getElementById('boxTimer').textContent=now<boxEnd?fmt(boxEnd-now):'Ready';
document.getElementById('dailyTimer').textContent=now<dailyEnd?fmt(dailyEnd-now):'Ready';
},1000);
