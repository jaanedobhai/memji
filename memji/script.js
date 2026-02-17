// ----------------------
// TYPING EFFECT
// ----------------------

const text = "Happy Birthday Anu, My Favorite Human ❤️";
let index = 0;

function typeWriter(){
if(index < text.length){
document.getElementById("typingText").innerHTML += text.charAt(index);
index++;
setTimeout(typeWriter, 80);
}
}

typeWriter();

// ----------------------
// ENTER BUTTON
// ----------------------

document.getElementById("enterBtn").addEventListener("click", ()=>{
document.querySelector(".hero").style.display="none";
document.getElementById("mainContent").classList.remove("hidden");
});

// ----------------------
// MUSIC TOGGLE
// ----------------------

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

musicBtn.addEventListener("click", ()=>{
if(!isPlaying){
music.play();
musicBtn.innerHTML="🔈 Pause Music";
isPlaying=true;
}else{
music.pause();
musicBtn.innerHTML="🔊 Play Music";
isPlaying=false;
}
});

// ----------------------
// SURPRISE BUTTON
// ----------------------

document.getElementById("surpriseBtn").addEventListener("click", ()=>{
document.getElementById("surpriseMessage").classList.toggle("hidden");
});

// ----------------------
// COUNTDOWN TO MIDNIGHT
// ----------------------

function updateCountdown(){
const now = new Date();
const midnight = new Date();
midnight.setHours(24,0,0,0);

const diff = midnight - now;

const h = Math.floor(diff / 3600000);
const m = Math.floor((diff % 3600000) / 60000);
const s = Math.floor((diff % 60000) / 1000);

document.getElementById("countdown").innerHTML = `${h}h ${m}m ${s}s`;

if(diff <= 0){
document.getElementById("countdown").innerHTML = "IT'S YOUR DAY 🎉";
startConfetti();
}
}

setInterval(updateCountdown,1000);

// ----------------------
// CONFETTI
// ----------------------

const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti(){
for(let i=0;i<300;i++){
confetti.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height - canvas.height,
r:Math.random()*6 + 2,
speed:Math.random()*3 + 2,
color:`hsl(${Math.random()*360},100%,50%)`
});
}
animateConfetti();
}

function animateConfetti(){
ctx.clearRect(0,0,canvas.width,canvas.height);

confetti.forEach(c=>{
ctx.beginPath();
ctx.fillStyle=c.color;
ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
ctx.fill();
c.y += c.speed;

if(c.y > canvas.height){
c.y = 0;
}
});

requestAnimationFrame(animateConfetti);
}
