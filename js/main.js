$(document).ready(function() {
  $('.button').click(function() {
    $('.content').toggleClass('off');
    $('.svgLogo').toggleClass('off');
  });

  $('.topNav a').click(function() {
    $('.content').toggleClass('off');
    $('.svgLogo').toggleClass('off');
  });
});
