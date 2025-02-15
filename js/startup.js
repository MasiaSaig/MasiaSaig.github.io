document.addEventListener("DOMContentLoaded", function(){
    
    setTimeout(() => {
        console.log(window.scrollY)
        if(window.scrollY > 0){
            // show page frames, if loading page not from top
            document.getElementById("top-frame").style = "visibility: visible; animation-name: fadeInDown;";
            document.getElementById("right-frame").style = "visibility: visible; animation-name: fadeInRight;";
            document.getElementById("bottom-frame").style = "visibility: visible; animation-name: fadeInUp;";
            document.getElementById("left-frame").style = "visibility: visible; animation-name: fadeInLeft;";

            // show social icons on nav-bar, if page is not loaded from top
            document.getElementById("linkedin-icon").style="visibility: visible; animation-delay: 0.5s; animation-name: swing;";
            document.getElementById("github-icon").style="visibility: visible; animation-delay: 0.5s; animation-name: swing;";
            document.getElementById("discord-icon").style="visibility: visible; animation-delay: 0.5s; animation-name: swing;";
            console.log(document.getElementById("discord-icon").style);
        }
    }, 100)
}, false);
