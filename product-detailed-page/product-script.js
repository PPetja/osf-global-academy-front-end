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
  const plusButton = $(".image-section__quantity-button-plus");
  const minusButton = $(".image-section__quantity-button-minus");
  quantityInput.val(1);

  plusButton.on("click", function () {
    const value = +quantityInput.val();
    quantityInput.val(value + 1);
  });

  minusButton.on("click", function () {
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
  const numberCounterOfCarts = $(".counter-cart");
  const cartWithProduct = localStorage.getItem("objectForCart") ?? "{}";
  let objectForCart = JSON.parse(cartWithProduct);
  if (objectForCart[`${"id-2"}`]) {
    productFromDetaliedPage.css("filter", "grayscale(1)");
  }
  productFromDetaliedPage.on("click", function () {
    const self = $(this);

    const backgroundImage = $(".image-section__primary")
      .css("background-image")
      .replace("url(", "")
      .replace(")", "")
      .replace(/\"/gi, "");

    if (self.css("filter") == "none") {
      self.css("filter", "grayscale(1)");
      objectForCart[`${"id-2"}`] = {
        id: 2,
        quantity: +quantityInput.val(),
        name: $(".image-section__header").html(),
        price: +$(".image-section__price").html().slice(2),
        imageUrl: backgroundImage,
      };

      console.log(objectForCart);
    } else {
      self.css("filter", "none");
      delete objectForCart[`${"id-2"}`];
    }
    localStorage.setItem("objectForCart", JSON.stringify(objectForCart));

    numberCounterOfCarts
      .empty()
      .append(Object.keys(objectForCart).length)
      .css("visibility", "visible");

    if (Object.keys(objectForCart).length === 0) {
      numberCounterOfCarts.css("visibility", "hidden");
    } else if (Object.keys(objectForCart).length > 0) {
      numberCounterOfCarts
        .empty()
        .append(Object.keys(objectForCart).length)
        .css("visibility", "visible");
    }
  });
  if (Object.keys(objectForCart).length > 0) {
    numberCounterOfCarts
      .empty()
      .append(Object.keys(objectForCart).length)
      .css("visibility", "visible");
  }
});
