// Carousel 5 prototype motorisch
const slides5 = document.querySelector('.slides5');
const totalSlides5 = document.querySelectorAll('.slide5').length;
let index5 = 0;

// Bereken de breedte van één slide (270px zoals gedefinieerd in CSS)
const slideWidth = 270;

document.querySelector('.button5.prev').addEventListener('click', () => {
  index5 = Math.max(index5 - 1, 0);
  slides5.style.transform = `translateX(-${index5 * slideWidth}px)`;
  updateButtons5()
});

document.querySelector('.button5.next').addEventListener('click', () => {
  const maxIndex5 = totalSlides5 - 1;
  index5 = Math.min(index5 + 1, maxIndex5);
  slides5.style.transform = `translateX(-${index5 * slideWidth}px)`;
  updateButtons5()
});
updateButtons5()

function updateButtons5() {
  const maxIndex5 = totalSlides5 - 1;
  document.querySelector('.button5.prev').style.display = index5 > 0 ? 'block' : 'none';
  document.querySelector('.button5.next').style.display = index5 < maxIndex5 ? 'block' : 'none';
}


// Carousel 7 
const slides7 = document.querySelector('.slides7');
const totalSlides7 = document.querySelectorAll('.slide7').length;
let index7 = 0;

document.querySelector('.button7.prev').addEventListener('click', () => {
  index7 = Math.max(index7 - 1, 0);
  slides7.style.transform = `translateX(-${index7 * 100}%)`;
  updateButtons7()
  
});

document.querySelector('.button7.next').addEventListener('click', () => {
  const maxIndex7 = totalSlides7 - 1;
  index7 = Math.min(index7 + 1, maxIndex7);
  slides7.style.transform = `translateX(-${index7 * 100}%)`;
  updateButtons7()
  
});
updateButtons7()
function updateButtons7() {
  const maxIndex7 = totalSlides7 - 1;
  document.querySelector('.button7.prev').style.display = index7 > 0 ? 'block' : 'none';
  document.querySelector('.button7.next').style.display = index7 < maxIndex7 ? 'block' : 'none';
}

// Carousel 8 
const slides8 = document.querySelector('.slides8');
const totalSlides8 = document.querySelectorAll('.slide8').length;
let index8 = 0;

document.querySelector('.button8.prev').addEventListener('click', () => {
  index8 = Math.max(index8 - 1, 0);
  slides8.style.transform = `translateX(-${index8 * 100}%)`;
  updateButtons8()
  
});

document.querySelector('.button8.next').addEventListener('click', () => {
  const maxIndex8 = totalSlides8 - 1;
  index8 = Math.min(index8 + 1, maxIndex8);
  slides8.style.transform = `translateX(-${index8 * 100}%)`;
  updateButtons8()
  
});
updateButtons8()
function updateButtons8() {
  const maxIndex8 = totalSlides8 - 1;
  document.querySelector('.button8.prev').style.display = index8 > 0 ? 'block' : 'none';
  document.querySelector('.button8.next').style.display = index8 < maxIndex8 ? 'block' : 'none';
}

// Carousel 9
const slides9 = document.querySelector('.slides9');
const totalSlides9 = document.querySelectorAll('.slide9').length;
let index9 = 0;

document.querySelector('.button9.prev').addEventListener('click', () => {
  index9 = Math.max(index9 - 1, 0);
  slides9.style.transform = `translateX(-${index9 * 100}%)`;
  updateButtons9()
  
});

document.querySelector('.button9.next').addEventListener('click', () => {
  const maxIndex9 = totalSlides9 - 1;
  index9 = Math.min(index9 + 1, maxIndex9);
  slides9.style.transform = `translateX(-${index9 * 100}%)`;
  updateButtons9()
  
});
updateButtons9()
function updateButtons9() {
  const maxIndex9 = totalSlides9 - 1;
  document.querySelector('.button9.prev').style.display = index9 > 0 ? 'block' : 'none';
  document.querySelector('.button9.next').style.display = index9 < maxIndex9 ? 'block' : 'none';
}

