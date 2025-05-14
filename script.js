//carousel Boris logo's
const slides = document.querySelector('.slides');
const slideWidth = 270; // 250 + 2*10px margin
const totalSlides = document.querySelectorAll('.slide').length;
const visibleSlides = 1;
let index = 0;

document.querySelector('.prev').addEventListener('click', () => {
  index = Math.max(index - 1, 0);
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
});

document.querySelector('.next').addEventListener('click', () => {
  const maxIndex = totalSlides - visibleSlides;
  index = Math.min(index + 1, maxIndex);
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
});