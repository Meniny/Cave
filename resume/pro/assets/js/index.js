$(document).foundation();
function background() {
  var leftSide = document.getElementById('left-side');
  var pattern = Trianglify({
    height: leftSide.clientHeight,
    width: leftSide.clientWidth,
    cell_size: 250,
    x_colors: ['#3B5168', '#364b60', '#3F5870', '#445E79', '#496481', '#4D6B89', '#527191']
  });

  /*lighten($main-color, 12%, 10%, 7%, 5%)
  ['#435c77','#3f5771','#3a5067','#364b60']*/

  /*https://vis4.net/blog/posts/avoid-equidistant-hsv-colors/
  lighten($main-color, 20%) lighten($main-color, 5%)

  ['#3B5168', '#364b60', '#3F5870', '#445E79', '#496481', '#4D6B89', '#527191']*/
  //console.log(pattern.png());
  leftSide.setAttribute('style', 'background-image: url\(' + pattern.png() + '\)');
}
background();
$('.do-toggle').click(function() {
  $(this).closest('.toggle-title').next().slideToggle();
  if ($(this).find('i').hasClass('fa-chevron-up')) {
    $(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
  } else {
    $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    if ($(this).closest('#left-side').length > 0) {
      setTimeout(background, 500);
    }
  }
});

//Chirs Coyer Resizing
var resizeTimer;

$(window).on('resize', function(e) {

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(background, 250);

});