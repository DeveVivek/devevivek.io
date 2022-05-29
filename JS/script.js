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