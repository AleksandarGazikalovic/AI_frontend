$(".navbar-menu-btn").click(function () {
  $(this).toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
  if ($(".navbar-menu").hasClass("is-active")) {
    $(".navbar-menu").animate({
      left: "0px",
    });
  } else {
    $(".navbar-menu").animate({
      left: "-100%",
    });
  }
});
