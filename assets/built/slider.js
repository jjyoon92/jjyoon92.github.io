const slider = document.querySelector('.simple-slider');
const slides = slider.querySelector('.slides');
const slide = slider.querySelectorAll('.slide');
const prevBtn = slider.querySelector('.prev-btn');
const nextBtn = slider.querySelector('.next-btn');

let currentSlide = 0;

prevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slide.length - 1;
    updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slide.length) currentSlide = 0;
    updateSlidePosition();
});

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}