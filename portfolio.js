let img = ['image/cs.png','image/js.png','image/b.jpeg','image/jq.png','image/p.png'];

let currentimg = 0;
let imgslide = document.getElementById("imgslide")
let prev = document.getElementById("prev");
let play = document.getElementById("play");
let next = document.getElementById("next");

function nxtimg(){
    if (currentimg < img.length - 1){
        currentimg++;
    }
    else{
        currentimg = 0;
    }
    imgslide.src = img[currentimg];
}
next.addEventListener('click', nxtimg);

function preimg(){
    if(currentimg > 0){
        currentimg--;
    }
    else{
        currentimg = img.length - 1;
    }
    imgslide.src = img[currentimg];
}
prev.addEventListener('click', preimg);

// let interval;
// function auto{
//     if(interval){
//         clearInterval(interval);
//         interval = null;
//     }else{
//         interval = setInterval(() =>{
//             nxtimg();
//         }, 1000);
//     }
// }
// play.addEventListener('click', auto);

// function hide(){
//     document.getElementById("login").style.display = "none";
// }

// function show(){
//     document.getElementById("login").style.display = "block";
// }



function darktheme(){
    document.getElementById("darknav").classList.toggle("dark");
    document.getElementById("darkarrbtn").classList.toggle("dark");
    document.getElementById("darkslideshow").classList.toggle("dark");
    document.getElementById("myprofile").classList.toggle("dark");
    document.getElementById("darkcard").classList.toggle("dark");
    document.getElementById("social").classList.toggle("dark");
    document.getElementById("texth").classList.toggle("lightcolor");
    document.getElementById("texta").classList.toggle("lightcolor");
    document.getElementById("textc").classList.toggle("lightcolor");
    document.getElementById("textsignin").classList.toggle("lightcolor");
    document.getElementById("textsignup").classList.toggle("lightcolor");
    document.getElementById("myprofilehello").classList.toggle("lightcolor");
    document.getElementById("myprofilename").classList.toggle("lightcolor");
    document.getElementById("myprofileabout").classList.toggle("lightcolor");
    document.getElementById("textleftarrow").classList.toggle("lightbackground");
    document.getElementById("textrightarrow").classList.toggle("lightbackground");
    // document.getElementById("contentwhite").classList.toggle("contentwhite");
}

window.onscroll = function(){
    const bar = document.getElementById('bar');
    var scrolled = window.pageYOffset;
    var val = scrolled * 0.62;
    bar.style.height = `${val * 0.20}%`
}

