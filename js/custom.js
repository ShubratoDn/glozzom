// scrolling script start

  var navbar = document.querySelector(".navbar");

  document.addEventListener('scroll', function(){
    var scroll_position = window.scrollY;
    if (scroll_position > 300) {
      navbar.style.position = 'fixed';
    } else {
      navbar.style.position = 'initial';
    }
  });
//   ends

// about page owl-carousel starts
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        1200:{
            items:1
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

$('.custom1').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});
// about page owl-carousel Ends
