$(document).ready(function () {
  // hero-slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
      1000: {},
    },
  });

  // entreprises-slider
  $("#entreprise-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    margin: 24,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: false,
      },
      768: {
        items: 2,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        nav: false,
        dots: true,
      },
      1140: {
        items: 2,
        center: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
      },
    },
  });

  //  avis-slider
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 2,
      },
    },
  });
});

//  ============================left sidebar======================================
$(document).on("click", "#sidebar li", () => {
  $(this).addClass("active").siblings().removeClass("active");
});
