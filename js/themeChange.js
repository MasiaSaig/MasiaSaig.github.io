let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");
const dandelions_children = document.getElementById("dandelions").children;
const banner_logo = document.getElementById("banner-logo");
const navbar_logo = document.getElementById("navigation-logo");
// const dandelions_background = document.getElementById("home");

function addDarkmode(filepath){
    splitted_filepath = filepath.split(".png");
    return splitted_filepath[0] + "-darkmode.png" + splitted_filepath[1];
}

function removeDarkmode(filepath){
    var result = filepath.split("-darkmode");
    return result[0]+result[1];
}

function enableDarkmode(){
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");

    // change pappuses
    for(var i=0; i<dandelions_children.length; ++i){
        if(dandelions_children[i].tagName == "DIV"){
            var pappus_filepath = addDarkmode(dandelions_children[i].children[0].getAttribute("src"));
            dandelions_children[i].children[0].setAttribute("src", pappus_filepath);
        }
    }
    banner_logo.setAttribute("src", addDarkmode(banner_logo.getAttribute("src")));
    navbar_logo.setAttribute("src", addDarkmode(navbar_logo.getAttribute("src")));
    $("#home").css("background-image", addDarkmode($("#home").css("background-image")));
}

function disableDarkmode(){
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
    
    // change pappuses
    for(var i=0; i<dandelions_children.length; ++i){
        if(dandelions_children[i].tagName == "DIV"){
            var pappus_filepath = removeDarkmode(dandelions_children[i].children[0].getAttribute("src"))
            dandelions_children[i].children[0].setAttribute("src", pappus_filepath);
        }
    }
    banner_logo.setAttribute("src", removeDarkmode(banner_logo.getAttribute("src")));
    navbar_logo.setAttribute("src", removeDarkmode(navbar_logo.getAttribute("src")));
    $("#home").css("background-image", removeDarkmode($("#home").css("background-image")));
}

if(darkmode === "active")
    enableDarkmode()

themeSwitch.onclick = () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode === "active" ? disableDarkmode() : enableDarkmode();
};