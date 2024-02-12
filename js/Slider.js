let sliderPos = 0;

move(0);

function move(n) {
    var slides = document.getElementsByClassName('slider-image-wrap');
    var icons = document.getElementsByClassName('pagination-icon');

    if (icons[sliderPos].classList.contains('fa-solid')) {
        icons[sliderPos].classList.remove('fa-solid');
        icons[sliderPos].classList.add('fa-regular');
    }

    slides[sliderPos].style.width = '0';

    sliderPos += n;

    if (sliderPos > (slides.length - 1)) {
        sliderPos = 0;
    }

    if (sliderPos < 0) {
        sliderPos = (slides.length - 1);
    }

    if (icons[sliderPos].classList.contains('fa-regular')) {
        icons[sliderPos].classList.remove('fa-regular');
        icons[sliderPos].classList.add('fa-solid');
    }

    slides[sliderPos].style.width = '100%';
}