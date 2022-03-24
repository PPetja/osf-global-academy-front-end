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
  $(".image-section__dropdown-container").empty();
  self.clone().appendTo(".image-section__dropdown-container");
});

// Button with quantity the item
const quantityText = $(".image-section__quantity-text");
let counter = 0;

$(".image-section__quantity-button-plus").on("click", function () {
  counter += 1;
  quantityText.empty().append(counter);
});

$(".image-section__quantity-button-minus").on("click", function () {
  if (counter >= 1) {
    counter -= 1;
    quantityText.empty().append(counter);
  } else {
  }
});

// text with describe

$(".image-section__describe-button").on("click", function () {
  const describeText = $(".image-section__describe-text");
  
  if (describeText.css("display") == "none") {
    describeText.css("display", "inline");
    $(this).empty().append("Read less");
  } else {
    describeText.css("display", "none");
    $(this).empty().append("Read more");
  }
});
