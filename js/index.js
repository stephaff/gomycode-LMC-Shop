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

let btnBuyArticles = document.querySelectorAll('.main-right-article-button-buy');

console.log(btnBuyArticles);

btnBuyArticles.forEach((btnBuyArticle) =>{
    btnBuyArticle.addEventListener('click', acheter);
});

function acheter(){
    location = 'details--articles.html'
}
let logo = document.querySelector('.haeder-top-logo');

logo.addEventListener('click', actionLogo);

function actionLogo(){
    location = 'index.html';
}