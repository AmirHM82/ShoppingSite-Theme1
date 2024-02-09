let pathContent = window.location.pathname.split('/');
pathContent.shift();
pathContent.unshift('Home.html');
var parent = document.getElementsByClassName('address-bar')[0];

let href = window.location.origin;

let span = null;
let a = null;
let counter = 0;
for (let p of pathContent) {
    counter += 1;
    span = document.createElement('span');
    span.classList.add('address-bar-space');
    span.innerText = '/';
    parent.appendChild(span);

    a = document.createElement('a');
    a.classList.add('address-bar-item');
    a.innerText = p.replace('.html', '');
    if (pathContent.length != counter) {
        href = href + '/' + p;
        a.href = href;
    }
    parent.appendChild(a);
}