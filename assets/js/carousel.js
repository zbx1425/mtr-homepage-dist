'use strict'

const carouselElem = document.getElementById("carousel-content");
const carouselItems = [...carouselElem.children];

for (let i = 0; i < carouselItems.length; i++) {
  let j = Math.floor(Math.random() * (i + 1));
  [carouselItems[i], carouselItems[j]] = [carouselItems[j], carouselItems[i]];
}

let carouselItemOffset = 0;
for (let i = 0; i < carouselItems.length; i++) {
  if (i == 0) {
    carouselItems[i].style.opacity = "1";
    continue;
  }
  carouselItems[i].style.opacity = "0";
}

setInterval(() => {
  let prevItem = carouselItems[carouselItemOffset];
  let nextItem = carouselItems[(carouselItemOffset + 1) % carouselItems.length];

  // Cross-fade prevItem and nextItem
  prevItem.animate([ { opacity: 1 }, { opacity: 0 } ], 
    { duration: 1000, easing: "ease-in", fill: "forwards" });
  nextItem.animate([ { opacity: 0 }, { opacity: 1 } ], 
    { duration: 1000, easing: "ease-out", fill: "forwards" });
  
  carouselItemOffset += 1;
  if (carouselItemOffset >= carouselItems.length) {
    carouselItemOffset = 0;
  }
}, 4000);
