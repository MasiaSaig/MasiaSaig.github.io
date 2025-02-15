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
        pastButton.classList.toggle("is-active"); 
        past.style.transform = "translateX(-100%)";
    }else if(clickedTimeline == 1){
        presentButton.classList.toggle("is-active"); 
        present.style.transform = "translateY(100%)";
    }else if(clickedTimeline == 2){
        futureButton.classList.toggle("is-active"); 
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
    adjustTimeperiodsBoxHeight();
    this.classList.toggle("is-active"); 
};
presentButton.onclick = function() { 
    hidePreviousElement();
    clickedTimeline = 1;
    showNextElement();
    adjustTimeperiodsBoxHeight();
    this.classList.toggle("is-active"); 
};
futureButton.onclick  = function() { 
    hidePreviousElement();
    clickedTimeline = 2;
    showNextElement();
    adjustTimeperiodsBoxHeight();
    this.classList.toggle("is-active"); 
};

window.addEventListener('resize', function(event) {
    adjustTimeperiodsBoxHeight();
}, true);
