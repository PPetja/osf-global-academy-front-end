$(".thumbnail").on("click", function () {
  let clicked = $(this);
  let newSelection = clicked.data("big");
  let $img = $(".primary").css("background-image", "url(" + newSelection + ")");
  clicked.parent().find(".thumbnail").removeClass("selected");
  clicked.addClass("selected");
  $(".primary").empty().append($img.hide().fadeIn("lineral"));
});
