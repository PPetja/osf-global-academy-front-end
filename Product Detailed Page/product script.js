// Thumbnail for image
$(".thumbnail").on("click", function () {
  let self = $(this);
  let newSelection = self.data("big");
  let img = $(".image-section__primary").css(
    "background-image",
    "url(" + newSelection + ")"
  );
  $(".thumbnail").removeClass("selected");
  self.addClass("selected");
  $(".image-section__primary").append(img.hide().fadeIn("lineral"));
});

// Drop down link
$(".image-section__dropdown-list-container").on("click", function () {
  let self = $(this);
  $(".image-section__dropdown-btn").empty();
  self.clone().appendTo(".image-section__dropdown-btn");
});
