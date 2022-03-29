setTimeout(function () {
  $(".cookies__moadl").css("display", "block");
}, 3000);
$(".cookies__modal-dialog-button-close").on("click", function () {
  $(".cookies__moadl").css("display", "none");
});
$(".cookies__modal-dialog-button-accept").on("click", function () {
  $(".cookies__moadl").css("display", "none");
});
