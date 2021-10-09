//################################# 2card #######################################
// Get the modal
var modal = document.getElementById("myModal_2card");

// Get the button that opens the modal
var btn = document.getElementById("myBtn_2card");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_2card")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//################################# lamp #######################################
// Get the modal
var modal2 = document.getElementById("myModal_lamp");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn_lamp");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close_lamp")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
// ####################################### square ####################################
// Get the modal
var modal3 = document.getElementById("myModal_squareBox");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn_squareBox");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close_squareBox")[0];

// When the user clicks the button, open the modal
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}
//################################# bag #######################################
// Get the modal
var modal1 = document.getElementById("myModal_bag");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn_bag");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close_bag")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
