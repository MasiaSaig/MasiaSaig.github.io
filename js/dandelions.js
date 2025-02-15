const dandelions_background = document.getElementById("home");
const dandelions = document.getElementById("dandelions");
const pappus1 = document.getElementById("pappus1");
const pappus2 = document.getElementById("pappus2");
const pappus3 = document.getElementById("pappus3");
const pappus4 = document.getElementById("pappus4");
const pappus_wrap1 = document.getElementById("pappus-wrap1");
const pappus_wrap2 = document.getElementById("pappus-wrap2");
const pappus_wrap3 = document.getElementById("pappus-wrap3");
const pappus_wrap4 = document.getElementById("pappus-wrap4");

const pappus_scale1 = 0.12;
const pappus_scale2 = 0.16;
const pappus_scale3 = 0.10;
const pappus_scale4 = 0.14;

// Select the path and the image element
const pappus_path1 = document.querySelector('#pappus-path1');
// const pappus_path_length1 = path.getTotalLength();
const pappus_path2 = document.querySelector('#pappus-path2');
const pappus_path3 = document.querySelector('#pappus-path3');
const pappus_path4 = document.querySelector('#pappus-path4');


// Animate the image along the path
anime({
    targets: pappus_wrap1,
    translateX: anime.path(pappus_path1)('x') ,
    translateY: anime.path(pappus_path1)('y'),
    rotate: anime.path(pappus_path1)('angle') ,
    opacity: [
        { value: [0, 1], duration: 2000, delay: 0, enddelay: 4000 },
        { value: [1, 0], duration: 4000, delay: 0, enddelay: 2000 }
    ],
    scale: 0.2,
    easing: 'linear',
    duration: 4000,
    delay: 2000,
    enddelay: 2000,
    loop: true
});
anime({
    targets: pappus_wrap2,
    translateX: anime.path(pappus_path2)('x') ,
    translateY: anime.path(pappus_path2)('y'),
    rotate: anime.path(pappus_path2)('angle') ,
    opacity: [
        { value: [0, 1], duration: 2000, delay: 0, enddelay: 6000 },
        { value: [1, 0], duration: 6000, delay: 0, enddelay: 2000 }
    ],
    scale: 0,
    easing: 'linear',
    duration: 6000,
    delay: 2000,
    enddelay: 2000,
    loop: true
});
anime({
    targets: pappus_wrap3,
    translateX: anime.path(pappus_path3)('x'),
    translateY: anime.path(pappus_path3)('y'),
    rotate: anime.path(pappus_path3)('angle'),
    opacity: [
        { value: [0, 1], duration: 2000, delay: 0, enddelay: 5000 },
        { value: [1, 0], duration: 5000, delay: 0, enddelay: 2000 }
    ],
    scale: 0.1,
    easing: 'linear',
    duration: 5000,
    delay: 2000,
    enddelay: 2000,
    loop: true
});
anime({
    targets: pappus_wrap4,
    translateX: anime.path(pappus_path4)('x') ,
    translateY: anime.path(pappus_path4)('y'),
    rotate: anime.path(pappus_path4)('angle') ,
    opacity: [
        { value: [0, 1], duration: 2000, delay: 2000, enddelay: 4000 },
        { value: [1, 0], duration: 4000, delay: 0, enddelay: 2000 }
    ],
    scale: 0.2,
    easing: 'linear',
    duration: 4000,
    delay: 4000,
    enddelay: 2000,
    loop: true
});

function updatePappusesSize(){
    var background_height = dandelions_background.getBoundingClientRect().height;
    pappus1.style.height = parseInt(background_height*pappus_scale1)+'px';
    pappus2.style.height = parseInt(background_height*pappus_scale2)+'px';
    pappus3.style.height = parseInt(background_height*pappus_scale3)+'px';
    pappus4.style.height = parseInt(background_height*pappus_scale4)+'px';
}

function getPageWidth() {
    if (self.innerWidth)
      return self.innerWidth;
    if (document.documentElement && document.documentElement.clientWidth)
      return document.documentElement.clientWidth;
    if (document.body)
      return document.body.clientWidth;
}

const row_max_width = $("#home").css("max-width").slice(0, -2);     //remove 'px'

function adjustPappusesPosition(){
    var pageWidth = getPageWidth();
    if(pageWidth < row_max_width) {
        dandelions.style.setProperty("left", -parseInt((row_max_width - pageWidth) / 2)+"px");
        
    }else{
        dandelions.style.setProperty("left", "0px");
    }
}

window.addEventListener('resize', function() {
    updatePappusesSize();
    adjustPappusesPosition();
});

document.addEventListener("scroll", function(){
    dandelions.style.setProperty("top", dandelions_background.style.backgroundPositionY);
});

document.addEventListener("DOMContentLoaded", function(){
    updatePappusesSize();
    adjustPappusesPosition();
}, false);
