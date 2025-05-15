//carousel Boris logo's
const slides = document.querySelector('.slides');
const slideWidth = 270; // 250 + 2*10px margin
const totalSlides = document.querySelectorAll('.slide').length;
const visibleSlides = 1;
let index = 0;

document.querySelector('.button1.prev').addEventListener('click', () => {
  index = Math.max(index - 1, 0);
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
});

document.querySelector('.button1.next').addEventListener('click', () => {
  const maxIndex = totalSlides - visibleSlides;
  index = Math.min(index + 1, maxIndex);
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
});

//carousel stylescape
const slides2 = document.querySelector('.slides2');
    const slideCount = document.querySelectorAll('.slide2').length;
    let index2 = 0;

    document.querySelector('.button2.next').addEventListener('click', () => {
        index2 = (index2 + 1) % slideCount;
        slides2.style.transform = `translateX(-${index2 * 100}%)`;
    });

    document.querySelector('.button2.prev').addEventListener('click', () => {
        index2 = (index2 - 1 + slideCount) % slideCount;
        slides2.style.transform = `translateX(-${index2 * 100}%)`;
    });

// Carousel 3 – Brandguide
const slides3 = document.querySelector('.slides3');
const totalSlides3 = document.querySelectorAll('.slide3').length;
const slideWidth3 = 290; // zelfde breedte als andere carrousels
let index3 = 0;

document.querySelector('.button3.prev').addEventListener('click', () => {
  index3 = Math.max(index3 - 1, 0);
  slides3.style.transform = `translateX(-${index3 * slideWidth3}px)`;
});

document.querySelector('.button3.next').addEventListener('click', () => {
  const maxIndex3 = totalSlides3 - 1;
  index3 = Math.min(index3 + 1, maxIndex3);
  slides3.style.transform = `translateX(-${index3 * slideWidth3}px)`;
});

// Carousel 4 uxtesten
const slides4 = document.querySelector('.slides4');
const totalSlides4 = document.querySelectorAll('.slide4').length;
let index4 = 0;

document.querySelector('.button4.prev').addEventListener('click', () => {
  index4 = Math.max(index4 - 1, 0);
  slides4.style.transform = `translateX(-${index4 * 100}%)`;
});

document.querySelector('.button4.next').addEventListener('click', () => {
  const maxIndex4 = totalSlides4 - 1;
  index4 = Math.min(index4 + 1, maxIndex4);
  slides4.style.transform = `translateX(-${index4 * 100}%)`;
});