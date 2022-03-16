$(".thumbnail").on("click", function () {
  let clicked = $(this);
  let newSelection = clicked.data("big");
  let $img = $(".image-section__primary").css(
    "background-image",
    "url(" + newSelection + ")"
  );
  clicked.parent().find(".thumbnail").removeClass("selected");
  clicked.addClass("selected");
  $(".image-section__primary").empty().append($img.hide().fadeIn("lineral"));
});
 