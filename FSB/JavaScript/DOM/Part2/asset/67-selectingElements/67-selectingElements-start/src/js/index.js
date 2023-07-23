// Selectors

const siteTitle = document.getElementById('site-title');
const navEls = document.getElementsByTagName('li');
const contentText = document.getElementsByClassName('content-text');
const siteDesc = document.querySelector("#site-description");
const contentDiv = document.querySelector('.content');
const altNavs = document.querySelectorAll('#nav > li:nth-of-type(odd)');


siteTitle.innerText = "Dynamation SpaceTech";

console.log(navEls);

// So here we can use "forOf" loop on this HTML collection and it provides access to each element.

// But another way to gain access for manipulation is using array.from to convert HTML conllection to an array after which we can use "forEach"

Array.from(navEls).forEach(el => (el.innerText = `--${el.innerText}--`));

Array.from(contentText).forEach(
    (el) => {el.innerText = el.innerText.toUpperCase()}
);


siteDesc.innerText = siteDesc.innerText.replace(
    'DyneTech LLC',
    'Dynamation Space Tech'
);


contentDiv.style.backgroundColor = '#FFF';

contentDiv.style.textAlign = 'justify';

altNavs.forEach(el => el.style.backgroundColor = 'rgba(0, 0, 0, 0.5)');


