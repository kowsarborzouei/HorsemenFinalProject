
let x = document.getElementById("hamburger--links");
let y = document.getElementById("hamburger__firstLink");
let z = document.getElementById("hamburger__secondLink");
let k = document.getElementById("hamburger__thirdLink");

const closeMenu =() => {
    x.style.opacity = "0";
    y.style.marginBottom = "0"
    z.style.marginBottom = "0"
    k.style.marginBottom = "0"
}
const hamburgerFunction =() => {
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
        y.style.marginBottom = "30px"
        z.style.marginBottom = "30px"
        k.style.marginBottom = "20px"
    } else {
        x.style.opacity = "0";
        y.style.marginBottom = "0"
        z.style.marginBottom = "0"
        k.style.marginBottom = "0"
    }
}