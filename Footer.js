
const error = () => {
    const val = document. querySelector('input'). value
    const errorBox = document.getElementsByClassName("wpcf7-not-valid-tip")
    const falseText = document.getElementsByClassName("wpcf7-response-output-no")
    const trueText = document.getElementsByClassName("wpcf7-response-output-yes")
    if (val !== "") {

        console.log("khali nist")
        errorBox[0].style.display = "none"
        trueText[0].style.display = "block"
        falseText[0].style.display = "none"
    } else {
        console.log("khali hast")
        errorBox[0].style.display = "block"
        trueText[0].style.display = "none"
        falseText[0].style.display = "block"
    }
}