
let leftButton = document.getElementById("leftButton-icon");
let hamburgerClasses = document.getElementsByClassName("hamburger--links__items")
let hamburger = document.getElementById("hamburger--links");
let navImg= document.getElementById("nav__img")


const leftButtonShow =() => {
    leftButton.style.color = "gray";
}
const leftButtonFade = () => {
    leftButton.style.color="transparent"
}

const closeHamburger = () => {
    hamburger.style.opacity = "0";
    for (i = 0; i < hamburgerClasses.length; ++i) {
        hamburgerClasses[i].style.marginBottom = "0"
    }
}

const hamburgerShow =() => {
    if (hamburger.style.opacity === "0") {
        hamburger.style.opacity = "1";
        for (i = 0; i < hamburgerClasses.length; ++i) {
            hamburgerClasses[i].style.marginBottom = "30px"
        }
    } else {
        closeHamburger()
    }
}

window.onscroll = function() {headerFixer()};
let header = document.getElementById("nav");
let sticky = header.offsetTop;

function headerFixer() {
    if (window.pageYOffset > sticky ) {
        header.classList.add("headerFixer--sticky");
        hamburger.classList.add("hamburgerFixer--sticky");
        navImg.classList.add("nav__img--smaller")

    } else {
        header.classList.remove("headerFixer--sticky");
        hamburger.classList.remove("hamburgerFixer--sticky");
        navImg.classList.remove("nav__img--smaller")
    }
}
