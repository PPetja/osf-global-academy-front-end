const showCardButton = document.querySelector('.content__button-show-more');
const visibleCard = document.querySelector('.content__hover-card');
showCardButton.addEventListener("click", function (event) {
    visibleCard.style.display = 'block';
    showCardButton.style.display = 'none';
});