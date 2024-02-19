window.setInterval(changeSlider, 2000);

let turn = 0;
let turnRate = 1;
function changeSlider() {
    var imgs = document.getElementsByClassName('slider-image-wrap');
    var icons = document.getElementsByClassName('pagination-icon');

    if (icons[turn].classList.contains('fa-solid')) {
        icons[turn].classList.remove('fa-solid');
        icons[turn].classList.add('fa-regular');
    }

    if (imgs[turn].classList.contains('slider-visible')) {
        imgs[turn].classList.remove('slider-visible');
        imgs[turn].classList.add('slider-hidden');
    }

    turn += turnRate;

    if (turn >= (imgs.length - 1)) {
        turnRate = -1;
    }
    else if (turn <= 0) {
        turnRate = 1;
    }

    if (icons[turn].classList.contains('fa-regular')) {
        icons[turn].classList.remove('fa-regular');
        icons[turn].classList.add('fa-solid');
    }

    if (imgs[turn].classList.contains('slider-hidden')) {
        imgs[turn].classList.remove('slider-hidden');
        imgs[turn].classList.add('slider-visible');
    }
}