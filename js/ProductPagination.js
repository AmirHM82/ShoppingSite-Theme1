const lastPath = window.location.pathname.split('/').pop();

const urlParams = new URLSearchParams(window.location.search);

const searchParam = urlParams.get('search');

const maxPageStr = urlParams.get('MaxPage');
let maxPage = 2;
if (maxPageStr != null) {
    maxPage = parseInt(maxPageStr);
}

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

let href = './' + lastPath;

if (searchParam != null) {
    href += '?search=' + searchParam;
    var searchInput = document.getElementById('searchInput');
    searchInput.value = searchParam;
    var titleElemtn = document.getElementById('products-title');
    titleElemtn.innerHTML = 'نتایج جستجو برای ' + searchParam;
}

if (previousPage > 0) {
    href += '&Page=' + previousPage;
    
    leftBtn.href = href;
}
if (nextPage <= maxPage) {
    href += '&Page=' + nextPage;
    rightBtn.href = href;
}