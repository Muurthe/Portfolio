// Carousel 5 prototype motorisch
const slides5 = document.querySelector('.slides5');
const totalSlides5 = document.querySelectorAll('.slide5').length;
let index5 = 0;

// Bereken de breedte van één slide (270px zoals gedefinieerd in CSS)
const slideWidth = 270;

document.querySelector('.button5.prev').addEventListener('click', () => {
  index5 = Math.max(index5 - 1, 0);
  slides5.style.transform = `translateX(-${index5 * slideWidth}px)`;
});

document.querySelector('.button5.next').addEventListener('click', () => {
  const maxIndex5 = totalSlides5 - 1;
  index5 = Math.min(index5 + 1, maxIndex5);
  slides5.style.transform = `translateX(-${index5 * slideWidth}px)`;
});