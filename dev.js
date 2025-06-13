// Carousel 6 iteraties dev project
const slides6 = document.querySelector('.slides6');
const totalSlides6 = document.querySelectorAll('.slide6').length;
let index6 = 0;

// Bereken de breedte van één slide (270px zoals gedefinieerd in CSS)
// const slideWidth = 270;

document.querySelector('.button6.prev').addEventListener('click', () => {
  const slideWidth = document.querySelector('.slide6').offsetWidth;
  index6 = Math.max(index6 - 1, 0);
  slides6.style.transform = `translateX(-${index6 * slideWidth}px)`;
  updateButtons6();
});

document.querySelector('.button6.next').addEventListener('click', () => {
  const slideWidth = document.querySelector('.slide6').offsetWidth;
  const maxIndex6 = totalSlides6 - 1;
  index6 = Math.min(index6 + 1, maxIndex6);
  slides6.style.transform = `translateX(-${index6 * slideWidth}px)`;
  updateButtons6();
});
updateButtons6()

function updateButtons6() {
  const maxIndex6 = totalSlides6 - 1;
  document.querySelector('.button6.prev').style.display = index6 > 0 ? 'block' : 'none';
  document.querySelector('.button6.next').style.display = index6 < maxIndex6 ? 'block' : 'none';
}