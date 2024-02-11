function OpenDesc(n) {
    var contentDivs = document.getElementsByClassName('Product-content-showable');
    if (contentDivs[n].classList.contains('Product-content-visible')) {
        contentDivs[n].classList.remove('Product-content-visible');
        contentDivs[n].classList.add('Product-content-hidden');
    }
    else {
        contentDivs[n].classList.remove('Product-content-hidden');
        contentDivs[n].classList.add('Product-content-visible');
    }

    var icons = document.getElementsByClassName('Product-content-title-icon');
    if (icons[n].classList.contains('fa-plus')) {
        icons[n].classList.remove('fa-plus');
        icons[n].classList.add('fa-minus');
    }
    else {
        icons[n].classList.remove('fa-minus');
        icons[n].classList.add('fa-plus');
    }
}