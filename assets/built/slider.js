document.addEventListener("DOMContentLoaded", function () {

    let sliders = document.querySelectorAll('.simple-slider');

    sliders.forEach(function (slider) {

        let index = 0;
        const slides = slider.querySelector('.slides');
        const totalSlides = slides.children.length;

        slider.querySelector('.prev-btn').addEventListener('click', function() {
            index = (index - 1 + totalSlides) % totalSlides;
            slides.style.transform = `translateX(-${index * 100}%)`;
        });

        slider.querySelector('.next-btn').addEventListener('click', function() {
            index = (index + 1) % totalSlides;
            slides.style.transform = `translateX(-${index * 100}%)`;
        });

    });

});
