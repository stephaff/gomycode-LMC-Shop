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

btnBuyArticles.forEach((btnBuyArticle) =>{
    btnBuyArticle.addEventListener('click', acheter);
});

btnBuyArticles.forEach((btnBuyArticle) =>{
    btnBuyArticle.addEventListener('mouseover', zoom);
});

btnBuyArticles.forEach((btnBuyArticle) =>{
    btnBuyArticle.addEventListener('mouseleave', zoom);
});

function acheter(){
    location = 'details--articles.html'
}

function zoom(){
    console.log(this.parentElement.previousElementSibling.previousElementSibling.children[0]);
    this.parentElement.previousElementSibling.previousElementSibling.children[0].classList.toggle('zoom');
}

let logo = document.querySelector('.haeder-top-logo');

logo.addEventListener('click', actionLogo);

function actionLogo(){
    location = 'index.html';
}

window.onload = essai;

function essai(){
    // juste pour voir l'effet
    setInterval(() => {
        document.querySelector('.loader').classList.add('loaderOff');  
    }, 5000);
    // document.querySelector('.loader').classList.add('loaderOff');
}

