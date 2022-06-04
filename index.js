$(function () {
  // modal for cookies
  // setTimeout(function () {
  //   $(".cookies__moadl").css("display", "block");
  // }, 3000);

  $(".cookies__modal-dialog-button-close").on("click", function () {
    $(".cookies__moadl").css("display", "none");
  });
  $(".cookies__modal-dialog-button-accept").on("click", function () {
    $(".cookies__moadl").css("display", "none");
  });

  // modal for login
  const loginModalContainer = $(".login-modal__img-container");
  const loginModalPassword = $(".login-modal__form-password");

  loginModalContainer.mousedown(function () {
    loginModalPassword.removeAttr("type");
  });

  loginModalContainer.mouseup(function () {
    loginModalPassword.attr("type", "password");
  });

  // sesction 1
  const numberCounterOfLike = $(".counter-like");
  const activeLike = $(".card__hover-btn-like");

  const favoriteProduct = localStorage.getItem("arrOfFavoriteProduct") ?? "[]";
  let arrOfFavoriteProduct = JSON.parse(favoriteProduct);

  arrOfFavoriteProduct.forEach((el) => {
    $(`[data-productID='${el}'] .card__hover-btn-like`).css(
      "filter",
      "grayscale(1)"
    );
  });

  activeLike.on("click", function () {
    const self = $(this);
    const containerCardId = self
      .closest(".card__container--width")
      .attr("data-productID");

    if (self.css("filter") == "none") {
      self.css("filter", "grayscale(1)");
      arrOfFavoriteProduct.push(containerCardId);
    } else {
      self.css("filter", "none");
      const filteredArayOfFavorite = arrOfFavoriteProduct.filter(
        (id) => id != containerCardId
      );
      arrOfFavoriteProduct = filteredArayOfFavorite;
    }
    localStorage.setItem(
      "arrOfFavoriteProduct",
      JSON.stringify(arrOfFavoriteProduct)
    );
    numberCounterOfLike
      .empty()
      .append(arrOfFavoriteProduct.length)
      .css("visibility", "visible");

    if (arrOfFavoriteProduct.length === 0) {
      numberCounterOfLike.css("visibility", "hidden");
    } else if (arrOfFavoriteProduct.length > 0) {
      numberCounterOfLike
        .empty()
        .append(arrOfFavoriteProduct.length)
        .css("visibility", "visible");
    }
  });
  if (arrOfFavoriteProduct.length > 0) {
    numberCounterOfLike
      .empty()
      .append(arrOfFavoriteProduct.length)
      .css("visibility", "visible");
  }

  // Counter for bag
  const numberCounterOfCarts = $(".counter-cart");
  const activeCart = $(".card__hover-btn-cart");

  const cartWithProduct = localStorage.getItem("objectForCart") ?? "{}";
  let objectForCart = JSON.parse(cartWithProduct);

  for (let key in objectForCart) {
    $(`[data-productID='${key.slice(3)}'] .card__hover-btn-cart`).css(
      "filter",
      "grayscale(1)"
    );
  }

  activeCart.on("click", function () {
    const self = $(this);

    const containerCardId = self
      .closest(".card__container--width")
      .attr("data-productID");

    const cartProdctId = `id-${containerCardId}`;

    objectForCart[cartProdctId] = {
      id: +containerCardId,
      quantity: 1,
    };

    if (self.css("filter") == "none") {
      self.css("filter", "grayscale(1)");

      objectForCart[cartProdctId].name = $(
        `[data-productID='${self
          .closest(".card__container--width")
          .attr("data-productID")}'] .card-text`
      ).html();

      objectForCart[cartProdctId].price = +$(
        `[data-productID='${self
          .closest(".card__container--width")
          .attr("data-productID")}'] .card-price`
      ).html();

      objectForCart[cartProdctId].imageUrl = $(
        `[data-productID='${self
          .closest(".card__container--width")
          .attr("data-productID")}'] .card-img-top`
      ).attr("src");
    } else {
      self.css("filter", "none");
      delete objectForCart[cartProdctId];
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

  // Category-Landing page
  // load more button
  const showCardButton = $(".content__button-show-more");
  const visibleCard = $(".content__hover-card");
  showCardButton.on("click", function (event) {
    visibleCard.css("display", "block");
    showCardButton.css("display", "none");
  });
});
