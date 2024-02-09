let sliderPos = 0;

move(0);

function move(n) {
    var slides = document.getElementsByClassName('slider-image-wrap');
    if (sliderPos >= 0 && sliderPos < slides.length && sliderPos + n >= 0 && sliderPos + n < slides.length) {
        slides[sliderPos].style.width = '0';
        sliderPos += n;
        slides[sliderPos].style.width = '100%';
    }
}