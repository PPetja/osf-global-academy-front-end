$(function () {
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

  const quantityInput = $(".image-section__quantity-number");
  quantityInput.val(1);

  $(".image-section__quantity-button-plus").on("click", function () {
    const value = +quantityInput.val();
    quantityInput.val(value + 1);
  });

  $(".image-section__quantity-button-minus").on("click", function () {
    const value = +quantityInput.val();
    if (value >= 2) {
      quantityInput.val(value - 1);
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

// adding product to the cart
  const productFromDetaliedPage = $(".image-section__add-to-card-button");
  productFromDetaliedPage.on("click", function () {
    const cartWithProduct = localStorage.getItem("objectForCart") ?? "{}";
    let objectForCart = JSON.parse(cartWithProduct);
      objectForCart[detail] = {
        name: $(".image-section__header").html(),
      };

    console.log(objectForCart);
    

  })
});
