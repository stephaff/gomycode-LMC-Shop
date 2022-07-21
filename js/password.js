let cart = document.querySelector('.cart');

cart.addEventListener('click', displaySlideBar);

function displaySlideBar(){
    let slideBar = document.querySelector('.slide-bar');
    slideBar.classList.add('translate');
}

const btnCloses = document.querySelectorAll('.slide-bar-button-close');

btnCloses.forEach((btnClose)=>{
    btnClose.addEventListener('click', closeSlideBar);
});

function closeSlideBar(){
    let slideBar = document.querySelector('.slide-bar');
    slideBar.classList.remove('translate');
}

let logo = document.querySelector('.haeder-top-logo');

logo.addEventListener('click', actionLogo);

function actionLogo(){
    location = 'index.html';
}

let headerRight = document.querySelector('.header-right');

headerRight.addEventListener('mouseenter', displayClientNavbarOn);
headerRight.addEventListener('mouseleave', displayClientNavbarOff);

function displayClientNavbarOn(){
    document.querySelector('.client-navbar').classList.add('display-client-navbar');
}

function displayClientNavbarOff(){
    document.querySelector('.client-navbar').classList.remove('display-client-navbar');
}



