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

