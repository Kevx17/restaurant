import './style.css';

let body = document.querySelector('body')
let header = document.querySelector('header');
let nav = document.querySelector('nav');
let home = document.getElementById('home');
let menu = document.getElementById('menu');
let about = document.getElementById('about');

function homepage() {
    let content = document.createElement("div")
    content.id = "content";
    let h1 = document.createElement("h1");
    h1.innerHTML = "Kevin's Coctail Bar";
    let p = document.createElement("p");
    p.innerHTML = "Here at Kevin's coctail bar we serve you the best versions of your favorite coctails and a sortiment of local specialities for you to try out. the atmosphere and sevice will make you feel like a modern gentleman.";
    content.appendChild(h1);
    content.appendChild(p);
    header.appendChild(content);
}

homepage():