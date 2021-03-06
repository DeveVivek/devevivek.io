const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
const dayNightNav = document.querySelector(".day-night-nav");
dayNightNav.addEventListener("click", () =>{
    dayNightNav.querySelector("i").classList.toggle("fa-sun");
    dayNightNav.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

var typed = new Typed(".typing",{
    strings:["Web Developer", "Competitive Coder"],
    typeSpeed:100,
    BackSpeed:0,
    loop:true
});
var typed = new Typed(".auto-type",{
    strings:["{Web Developer}", "{Competitive Coder}","{Freelancer}"],
    typeSpeed:100,
    BackSpeed:0,
    loop:true
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// const header = document.querySelector("[data-header]");
// const backTopBtn = document.querySelector("[data-back-top-btn]");

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 100) {
//     header.classList.add("active");
//     backTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     backTopBtn.classList.remove("active");
//   }
// });

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});


const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);