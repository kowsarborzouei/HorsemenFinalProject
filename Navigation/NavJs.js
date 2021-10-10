
let leftButton = document.getElementById("leftButton-icon");
let hamburgerClasses = document.getElementsByClassName("hamburger--links__items")
let hamburger = document.getElementById("hamburger--links");
let navImg= document.getElementById("nav__img")

//these functions are for changing the appearance of Details Left button

const leftButtonShow =() => {
    leftButton.style.color = "gray";
}
const leftButtonFade = () => {
    leftButton.style.color="transparent"
}

//These Functions are for hamburger menu

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
//this function is for closing hamburger menu whenever user clicks on page

$( function () {
    $("html").on("click", function (e) {
        let $t = $(e.target),
            $myLinks = $(".hamburger__menu") ;
        if ($t.is($myLinks)) {
            hamburgerShow();
        }else {
            closeHamburger()
        }
    })
});

//this function is for making Navigation Fixed on top

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


