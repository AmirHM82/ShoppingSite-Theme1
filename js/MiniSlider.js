window.setInterval(changeSlider, 2000);

let turn = 0;
function changeSlider() {
    var imgs = document.getElementsByClassName('slider-image-wrap');
    if (imgs[turn].classList.contains('slider-visible')) {
        imgs[turn].classList.remove('slider-visible');
        imgs[turn].classList.add('slider-hidden');
    }

    turn += 1;

    if (turn > (imgs.length - 1)) {
        turn = 0;
    }

    if (imgs[turn].classList.contains('slider-hidden')) {
        imgs[turn].classList.remove('slider-hidden');
        imgs[turn].classList.add('slider-visible');
    }
}