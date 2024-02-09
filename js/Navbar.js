function ShowNav(n) {
    var navs = document.getElementsByClassName('nav-dropdown');
    navs[n].style.height = 'auto';
    navs[n].style.visibility = 'visible';
}

function HideNav(n) {
    var navs = document.getElementsByClassName('nav-dropdown');
    navs[n].style.height = '0';
    navs[n].style.visibility = 'hidden';
}