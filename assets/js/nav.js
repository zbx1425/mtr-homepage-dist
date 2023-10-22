'use strict'

const navElement = document.getElementsByTagName('nav')[0];
const navToggle = document.getElementById('nav-hamburger');

function setNavBackground() {
    if(window.scrollY == 0) {
        navElement.classList.remove("background");
    } else {
        navElement.classList.add("background");
    }
}

window.addEventListener('scroll', () => {
    setNavBackground();
});

navToggle.addEventListener('click', () => {
    const rootStyle = getComputedStyle(document.documentElement);
    const dp = rootStyle.getPropertyValue("--nav-bar-mobile-display");
    
    if(dp == 'block') {
        document.documentElement.style.setProperty("--nav-bar-mobile-display", 'none')
    } else {
        document.documentElement.style.setProperty("--nav-bar-mobile-display", 'block')
    }
});

setNavBackground();