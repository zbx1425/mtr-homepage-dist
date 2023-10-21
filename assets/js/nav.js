'use strict'

const navElement = document.getElementsByTagName('nav')[0];
const navToggle = document.getElementById('nav-expand');
const navMobileElement = document.getElementById("nav-mobile-items");

window.addEventListener('scroll', () => {
    if(window.scrollY == 0) {
        navElement.classList.remove("background");
    } else {
        navElement.classList.add("background");
    }
});

navToggle.onclick = () => {
    const rootStyle = getComputedStyle(document.documentElement);
    const dp = rootStyle.getPropertyValue("--nav-bar-mobile-display");
    
    if(dp == 'block') {
        document.documentElement.style.setProperty("--nav-bar-mobile-display", 'none')
    } else {
        document.documentElement.style.setProperty("--nav-bar-mobile-display", 'block')
    }
}