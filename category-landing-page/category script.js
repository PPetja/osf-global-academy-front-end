// load more button
const showCardButton = $(".content__button-show-more");
const visibleCard = $(".content__hover-card");
showCardButton.on("click", function (event) {
  visibleCard.css ("display", "block");
  showCardButton.css("display", "none");
});
