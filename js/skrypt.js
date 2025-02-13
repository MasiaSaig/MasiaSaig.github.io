const dandelions_background = document.getElementById("home");
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
    scale: 0.1,
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

function updatePappuses(){
    pappus1.style.height = parseInt(dandelions_background.height*pappus_scale1)+'px';
    pappus2.style.height = parseInt(dandelions_background.height*pappus_scale2)+'px';
    pappus3.style.height = parseInt(dandelions_background.height*pappus_scale3)+'px';
    pappus4.style.height = parseInt(dandelions_background.height*pappus_scale4)+'px';
}

window.onresize = function(){
    updatePappuses();
    adjustTimeperiodsBoxHeight()
};

document.addEventListener("DOMContentLoaded", function(){
    updatePappuses();
    // if((window.scrollY > 0) && (window.outerWidth > 1024)) {
    //     var children = document.getElementById("border").children;
    //     for(var i=0; i<children.length; i++){
    //         children[i].classList.add("animated");
    //         children[i].visibility = "visible";
    //         console.log(children[i].style.visibility);
    //     }
    // }
}, false);


const timeperiodsBox = document.getElementById("timeperiods");
const past = document.getElementById("past");
const present = document.getElementById("present");
const future = document.getElementById("future");
let timeperiods = [past, present, future];

const pastButton = document.getElementById("historyButton");
const presentButton = document.getElementById("presentButton");
const futureButton = document.getElementById("plansButton");

var clickedTimeline = 0;

function hidePreviousElement(){
    timeperiods[clickedTimeline].style.transitionDelay = "0s";
    timeperiods[clickedTimeline].style.opacity = "0";
    timeperiods[clickedTimeline].style.visibility= "hidden";
    if(clickedTimeline == 0){
        past.style.transform = "translateX(-100%)";
    }else if(clickedTimeline == 1){
        present.style.transform = "translateY(100%)";
    }else if(clickedTimeline == 2){
        future.style.transform = "translateX(100%)";
    }
}

function showNextElement(){
    timeperiods[clickedTimeline].style.transitionDelay = "0.75s";
    timeperiods[clickedTimeline].style.opacity = "1";
    timeperiods[clickedTimeline].style.visibility= "visible";
    timeperiods[clickedTimeline].style.transform = "translateX(0)";
    timeperiods[clickedTimeline].style.transform = "translateY(0)";
}

function adjustTimeperiodsBoxHeight(){
    timeperiodsBox.style.height = timeperiods[clickedTimeline].getBoundingClientRect().height+"px";
}

adjustTimeperiodsBoxHeight()

pastButton.onclick = function() { 
    hidePreviousElement();
    clickedTimeline = 0;
    showNextElement();
    adjustTimeperiodsBoxHeight()
};
presentButton.onclick = function() { 
    hidePreviousElement();
    clickedTimeline = 1;
    showNextElement();
    adjustTimeperiodsBoxHeight()
};
futureButton.onclick  = function() { 
    hidePreviousElement();
    clickedTimeline = 2;
    showNextElement();
    adjustTimeperiodsBoxHeight()
};
