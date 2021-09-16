//PRELOADER
$(window).on('load', function () {
  $('.preloader').fadeOut(500);
});


$(function () {
  // Smooth scroll when anchor link
  $('.nav-item a, .intro a').on('click', function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    return false;
  });


  //toggle navbar to close after click everywhere on header
  $('.navbar').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

})



//BACK TO TOP BUTTON
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 200)
    $("#btn-back-to-top").fadeIn(500);
  else
    $("#btn-back-to-top").fadeOut(500);

  //Click event to scroll to top
  $("#btn-back-to-top").on('click', function () {
    $("html, body").stop().animate({
      scrollTop: 0
    }, 500);

  })

})



//tooltip bootstrap

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})