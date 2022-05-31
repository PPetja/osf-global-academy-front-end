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
  // Counter and set ro the local storage data for like

  const favoriteProduct = localStorage.getItem("arrOfFavoriteProduct");
  for (let i = 0; i < favoriteProduct.length; i++) {
    $(`[data-productID='${favoriteProduct[i]}'] .card__hover-btn-like`).css(
      "filter",
      "grayscale(1)"
    );
  }

  let arrOfFavoriteProduct = JSON.parse(favoriteProduct);
  const numberCounterOfLike = $(".counter-like");
  const activeLike = $(".card__hover-btn-like");
  activeLike.on("click", function () {
    const self = $(this);
    let clickCountLike;

    const containerCardId = self
      .closest(".card__container--width")
      .attr("data-productID");

    if (self.css("filter") == "none") {
      self.css("filter", "grayscale(1)");
      clickCountLike = +localStorage.getItem("clickCountLike") + 1;
      localStorage.setItem("clickCountLike", clickCountLike);
      numberCounterOfLike
        .empty()
        .append(clickCountLike)
        .css("visibility", "visible");

      arrOfFavoriteProduct.push(containerCardId);
    } else {
      self.css("filter", "none");
      clickCountLike = +localStorage.getItem("clickCountLike") - 1;
      localStorage.setItem("clickCountLike", clickCountLike);
      numberCounterOfLike
        .empty()
        .append(clickCountLike)
        .css("visibility", "visible");
      if (clickCountLike === 0) {
        numberCounterOfLike.css("visibility", "hidden");
      }
      const filteredArayOfFavorite = arrOfFavoriteProduct.filter(
        (id) => id != containerCardId
      );
      arrOfFavoriteProduct = filteredArayOfFavorite;
    }
    localStorage.setItem(
      "arrOfFavoriteProduct",
      JSON.stringify(arrOfFavoriteProduct)
    );
  });
  const clickCountLike = +localStorage.getItem("clickCountLike");
  if (clickCountLike > 0) {
    numberCounterOfLike
      .empty()
      .append(clickCountLike)
      .css("visibility", "visible");
  }

  // Counter for bag

  const numberCounterOfBags = $(".counter-bag");
  $(".card__hover-btn-bag").on("click", function () {
    const self = $(this);
    let clickCountBag;

    if (self.css("filter") == "none") {
      self.css("filter", "grayscale(1)");
      clickCountBag = +localStorage.getItem("clickCountBag") + 1;
      localStorage.setItem("clickCountBag", clickCountBag);
      numberCounterOfBags
        .empty()
        .append(clickCountBag)
        .css("visibility", "visible");
    } else {
      self.css("filter", "none");
      clickCountBag = +localStorage.getItem("clickCountBag") - 1;
      localStorage.setItem("clickCountBag", clickCountBag);
      numberCounterOfBags
        .empty()
        .append(clickCountBag)
        .css("visibility", "visible");

      if (clickCountBag === 0) {
        numberCounterOfBags.css("visibility", "hidden");
      }
    }
  });
  const clickCountBag = +localStorage.getItem("clickCountBag");

  if (clickCountBag > 0) {
    numberCounterOfBags
      .empty()
      .append(clickCountBag)
      .css("visibility", "visible");
  }
});
