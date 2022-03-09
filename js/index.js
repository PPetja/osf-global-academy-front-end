// category page
const showCardButton = document.querySelector(".content__button-show-more");
const visibleCard = document.querySelector(".content__hover-card");
showCardButton.addEventListener("click", function (event) {
  visibleCard.style.display = "block";
  showCardButton.style.display = "none";
});

// product page
$(".thumbnail").on("click", function () {
  let clicked = $(this);
  let newSelection = clicked.data("big");
  let $img = $(".primary").css("background-image", "url(" + newSelection + ")");
  clicked.parent().find(".thumbnail").removeClass("selected");
  clicked.addClass("selected");
  $(".primary").empty().append($img.hide().fadeIn("slow"));
});
