let menuBtn = document.querySelector(".menu-btn");
let menuImage = document.querySelector(".hamburger-menu");
var closedState = true

function toggle() {
    if (closedState == true) {
        closedState = false
    } else {
        closedState = true
    }
}

function changeImage() {
    toggle()

    if (closedState == false) {
        menuImage.src = "assets/images/icon-menu-close.svg"
    } else {
        menuImage.src = "assets/images/icon-menu.svg"
    }
}
