let btnBuyArticles = document.querySelectorAll('.main-right-article-button-buy');

btnBuyArticles.forEach((btnBuyArticle) =>{
    btnBuyArticle.addEventListener('click', acheter);
});

function acheter(){
    location = 'details--articles.html'
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