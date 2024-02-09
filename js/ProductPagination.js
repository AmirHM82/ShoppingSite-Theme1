const lastPath = window.location.pathname.split('/').pop();

const urlParams = new URLSearchParams(window.location.search);

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

var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');

let nextPage = page + 1;
let previousPage = page - 1;

if (previousPage > 0) {
    leftBtn.href = './' + lastPath + '?Page=' + previousPage;
}
if (nextPage <= maxPage) {
    rightBtn.href = './' + lastPath + '?Page=' + nextPage;
}