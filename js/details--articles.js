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

let btnBuy = document.querySelector('.btn-buy');

btnBuy.addEventListener('click', detailsAchat);

function detailsAchat(){
    location = 'paiement.html';
}

let imageMiniatures = document.querySelectorAll('.main-articles-left-bottom-image img');

imageMiniatures.forEach((imageMiniature) =>{
    imageMiniature.addEventListener('click', switchImage);
});

function switchImage(){
    let image = document.querySelector('.main-articles-left-top img');
    image.src = this.src;
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