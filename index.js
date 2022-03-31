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

  $(".card__hover-btn-bag").on("click", function () {
    $(".counter-bag").css("visibility", "visible").empty();
    $(".counter-bag").append(1);
  });
  $(".card__hover-btn-like").on("click", function () {
    $(".counter-like").css("visibility", "visible").empty();
    $(".counter-like").append(1);
  });
});
