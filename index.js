$(function () {
  // modal for cookies
  setTimeout(function () {
    $(".cookies__moadl").css("display", "block");
  }, 3000);

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
  // Counter for like

  const numberCounterOfLike = $(".counter-like");
  $(".card__hover-btn-like").on("click", function () {
    const clickCountLike = +localStorage.getItem("clickCountLike") + 1;
    localStorage.setItem("clickCountLike", clickCountLike);

    numberCounterOfLike
      .empty()
      .append(clickCountLike)
      .css("visibility", "visible");

    if (clickCountLike >= 10) {
      numberCounterOfLike
        .css("padding-top", "2px")
        .css("padding-bottom", "2px");
    }
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
    const clickCountBag = +localStorage.getItem("clickCountBag") + 1;
    localStorage.setItem("clickCountBag", clickCountBag);

    numberCounterOfBags
      .empty()
      .append(clickCountBag)
      .css("visibility", "visible");

    if (clickCountBag >= 10) {
      numberCounterOfBags
        .css("padding-top", "2px")
        .css("padding-bottom", "2px");
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
