$(document).ready(function () {
  $(".owl__wrap").slick({
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: true,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
});
