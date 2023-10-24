'use strict'

const carouselElem = document.getElementById("carousel-container");
const carouselItems = [...carouselElem.children];
for (let carouselItem of carouselItems) carouselElem.removeChild(carouselItem);
for (let i = carouselItems.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [carouselItems[i], carouselItems[j]] = [carouselItems[j], carouselItems[i]];
}
for (let carouselItem of carouselItems) carouselElem.appendChild(carouselItem);
for (let carouselItem of carouselItems) carouselElem.appendChild(carouselItem.cloneNode(true));
const carouselWidth = carouselItems[0].offsetWidth * carouselItems.length;

const cssText = "@keyframes slide {\
  0% { transform: translateX(0); }\
  100% { transform: translateX(-" + carouselWidth + "px); }\
}";
const styleElem = document.createElement("style");
styleElem.appendChild(document.createTextNode(cssText));
document.head.appendChild(styleElem);

carouselElem.style.animation = "slide 80s linear infinite";
