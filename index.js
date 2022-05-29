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

  const numberCounterOfLike = $(".counter-like");
  const filterOfLike = $(".card__hover-btn-like");
  filterOfLike.on("click", function () {
    const self = $(this);
    let clickCountLike;

    if (self.css("filter") == "none") {
      self.css("filter", "grayscale(1)");

      localStorage.setItem("filterLike", "grayscale(1)");

      clickCountLike = +localStorage.getItem("clickCountLike") + 1;
      localStorage.setItem("clickCountLike", clickCountLike);
      numberCounterOfLike
        .empty()
        .append(clickCountLike)
        .css("visibility", "visible");
    } else {
      self.css("filter", "none");

      localStorage.setItem("filterLike", "none");

      clickCountLike = +localStorage.getItem("clickCountLike") - 1;
      localStorage.setItem("clickCountLike", clickCountLike);
      numberCounterOfLike
        .empty()
        .append(clickCountLike)
        .css("visibility", "visible");

      if (clickCountLike === 0) {
        numberCounterOfLike.css("visibility", "hidden");
      }
    }
  });

  const filterLike = localStorage.getItem("filterLike");
  const clickCountLike = +localStorage.getItem("clickCountLike");

  if (filterLike == "grayscale(1)") {
    filterOfLike.css("filter", "grayscale(1)");
  } else {
    filterOfLike.css("filter", "none");
  }

  if (clickCountLike > 0) {
    numberCounterOfLike
      .empty()
      .append(clickCountLike)
      .css("visibility", "visible");
  }
  const firstLikeBtn = $(".card__hover-btn-bag .first");
  firstLikeBtn.on("click", function () {
    const self = $(this);
  });

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


