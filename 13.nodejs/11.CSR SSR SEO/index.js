const { JSDOM } = require('jsdom');
const fs = require('node:fs');

const root = new JSDOM(`<!DOCTYPE html> <html> <head> <title></title> </head> <body> <div id="app"></div></body> </html>`);
const window = root.window;
const document = window.document;
const app = document.querySelector('#app');


fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1").then(res => res.json()).then(data => {
    data.forEach(element => {
        const img = document.createElement('img');
        img.src = element.url;
        img.style.width = '200px';
        img.style.height = '200px';
        app.appendChild(img);

    });

    fs.writeFileSync('index.html', root.serialize());

    // console.log(root.serialize());
});

