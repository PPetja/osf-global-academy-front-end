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
  // Refactoriing for copied string (counter for like and bag);
  // Counter set to the local storage data for like
  // fix some bugs with modal "login" -- DONE!

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

  const numberCounterOfBags = $(".counter-bag");
  const activeBag = $(".card__hover-btn-bag");

  const bagWithProduct = localStorage.getItem("objectForBag") ?? "{}";
  let objectForBag = JSON.parse(bagWithProduct);

  for (let key in objectForBag) {
    $(`[data-productID='${key.slice(3)}'] .card__hover-btn-bag`).css(
      "filter",
      "grayscale(1)"
    );
  }

  activeBag.on("click", function () {
    const self = $(this);
    let clickCountBag;
    const containerCardId = self
      .closest(".card__container--width")
      .attr("data-productID");

    const cartProdctId = `id-${containerCardId}`;
    objectForBag[cartProdctId] = {
      id: +containerCardId,
    };

    if (self.css("filter") == "none") {
      self.css("filter", "grayscale(1)");

      objectForBag[cartProdctId].name = $(
        `[data-productID='${self
          .closest(".card__container--width")
          .attr("data-productID")}'] .card-text`
      ).html();

      objectForBag[cartProdctId].price = +$(
        `[data-productID='${self
          .closest(".card__container--width")
          .attr("data-productID")}'] .card-price`
      ).html();

      objectForBag[cartProdctId].imageUrl = $(
        `[data-productID='${self
          .closest(".card__container--width")
          .attr("data-productID")}'] .card-img-top`
      ).attr("src");
    } else {
      self.css("filter", "none");
      delete objectForBag[cartProdctId];
    }
    localStorage.setItem("objectForBag", JSON.stringify(objectForBag));

    numberCounterOfBags
      .empty()
      .append(Object.keys(objectForBag).length)
      .css("visibility", "visible");

    if (Object.keys(objectForBag).length === 0) {
      numberCounterOfBags.css("visibility", "hidden");
    } else if (Object.keys(objectForBag).length > 0) {
      numberCounterOfBags
        .empty()
        .append(Object.keys(objectForBag).length)
        .css("visibility", "visible");
    }
  });
  if (Object.keys(objectForBag).length > 0) {
    numberCounterOfBags
      .empty()
      .append(Object.keys(objectForBag).length)
      .css("visibility", "visible");
  }
});
