let menuBtn = document.querySelector(".menu-btn");
let menuImage = document.querySelector(".hamburger-menu");
let mobileNavMenu = document.querySelector(".mobile-nav");

var closedState = true

function toggle() {
    if (closedState == true) {
        closedState = false
        mobileNavMenu.style.right = "0"
    } else {
        closedState = true
        mobileNavMenu.style.right = "-70vw"
        menuImage.src = "assets/images/icon-menu.svg"
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
