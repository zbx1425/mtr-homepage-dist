'use strict'

const carouselElem = document.getElementById("carousel-content");
const carouselItems = [...carouselElem.children];
for (let carouselItem of carouselItems) carouselElem.removeChild(carouselItem);
for (let i = carouselItems.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [carouselItems[i], carouselItems[j]] = [carouselItems[j], carouselItems[i]];
}
for (let carouselItem of carouselItems) carouselElem.appendChild(carouselItem);
for (let carouselItem of carouselItems) carouselElem.appendChild(carouselItem.cloneNode(true));

const carouselOffset = carouselItems[0].offsetWidth * 2.5;
let carouselItemOffset = 1;
carouselElem.style.transform = "translateX(-" + carouselOffset + "px)";
setInterval(() => {
  if (carouselItemOffset >= carouselItems.length + 1) {
    carouselItemOffset = 1;
    carouselElem.style.transform = "translateX(-" + carouselOffset + "px)";
  }
  carouselElem.animate(
    [
      { transform: "translateX(-" + (carouselOffset + (carouselItemOffset - 1) * carouselItems[0].offsetWidth) + "px)" },
      { transform: "translateX(-" + (carouselOffset + carouselItemOffset * carouselItems[0].offsetWidth) + "px)" }
    ], {
      duration: 1000,
      easing: "ease-in-out",
      fill: "forwards"
    }
  );
  carouselItemOffset += 1;
}, 4000);
