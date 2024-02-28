const lastPath = window.location.pathname.split('/').pop();

const urlParams = new URLSearchParams(window.location.search);

const searchParam = urlParams.get('search');

let maxPage = parseInt(document.getElementById('maxPage').innerHTML);

const pageStr = urlParams.get('Page');
let page = 1;
if (pageStr != null) {
    page = parseInt(pageStr);
}

var counterElement = document.getElementById('page-counter');
counterElement.innerHTML = 'صفحه' + page + '/' + maxPage;

var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');

let nextPage = page + 1;
let previousPage = page - 1;

let phref = '';

if (previousPage > 0) {
    phref = './' + lastPath;
    phref += '?Page=' + previousPage;
    leftBtn.href = phref;
}
if (nextPage <= maxPage) {
    phref = './' + lastPath;
    phref += '?Page=' + nextPage;
    rightBtn.href = phref;
}

if (searchParam != null) {
    phref += '&search=' + searchParam;
    var searchInput = document.getElementById('searchInput');
    searchInput.value = searchParam;
    var titleElemtn = document.getElementById('products-title');
    titleElemtn.innerHTML = 'نتایج جستجو برای ' + searchParam;
}