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
  // Counter for like

  const numberCounterOfLikes = $(".counter-like");
  let numberCounterForLike = 0;

  $(".card__hover-btn-like").on("click", function () {
    numberCounterForLike += 1;
    numberCounterOfLikes.css("visibility", "visible").empty();
    numberCounterOfLikes.append(numberCounterForLike);

    if (numberCounterForLike >= 10) {
      numberCounterOfLikes
        .css("padding-top", "2px")
        .css("padding-bottom", "2px");
    }
  });

  // Counter for bag

  const numberCounterOfBags = $(".counter-bag");
  $(".card__hover-btn-bag").on("click", function () {
    localStorage.clickcount = +localStorage.clickcount + 1;

    numberCounterOfBags
      .empty()
      .append(localStorage.clickcount)
      .css("visibility", "visible");

    if (localStorage.clickcount >= 10) {
      numberCounterOfBags
        .css("padding-top", "2px")
        .css("padding-bottom", "2px");
    }
  });

  if (+localStorage.clickcount > 0) {
    numberCounterOfBags
      .empty()
      .append(localStorage.clickcount)
      .css("visibility", "visible");
  }
});
