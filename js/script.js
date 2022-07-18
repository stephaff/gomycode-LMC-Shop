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
