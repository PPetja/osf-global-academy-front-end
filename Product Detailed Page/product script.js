$(".thumbnail").on("click", function () {
  let clicked = $(this);
  let newSelection = clicked.data("big");
  let $img = $(".image-section__primary").css(
    "background-image",
    "url(" + newSelection + ")"
  );
  $(".thumbnail").removeClass("selected");
  clicked.addClass("selected");
  $(".image-section__primary").append($img.hide().fadeIn("lineral"));
});

var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
