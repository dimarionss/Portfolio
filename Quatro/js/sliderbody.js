$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: true,
    autoHeight: true,
    lazyLoad: true,
    stagePadding: 400,
    navText: [
      '<span class="arrow-owl arrow-left"><i class="fa fa-chevron-left"></i></span>',
      '<span class="arrow-owl arrow-right"><i class="fa fa-chevron-right"></i></span>'
    ],
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      768: {
        items: 2,
        stagePadding: 0,
      },
      1180: {
        items: 3,
        stagePadding: 0,
      },
      1555: {
        items: 2
      },
    }
  });
  $(".next_button").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".prev_button").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});