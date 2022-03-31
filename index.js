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
  $(".login-modal__img-container").mousedown(function () {
    $(".login-modal__form-password").removeAttr("type");
  });
  $(".login-modal__img-container").mouseup(function () {
    $(".login-modal__form-password").attr("type", "password");
  });
  // sesction 1

  let counterBag = 0;
  let counterlike = 0;

  $(".card__hover-btn-bag").on("click", function () {
    counterBag += 1;
    $(".counter-bag").css("visibility", "visible").empty();
    $(".counter-bag").append(counterBag);
    if (counterBag >= 10) {
      $(".counter-bag").css("padding-top", "2px").css("padding-bottom", "2px");
    }
  });
  $(".card__hover-btn-like").on("click", function () {
    counterlike += 1;
    $(".counter-like").css("visibility", "visible").empty();
    $(".counter-like").append(counterlike);
    if (counterlike >= 10) {
      $(".counter-like").css("padding-top", "2px").css("padding-bottom", "2px");
    }
  });
});
