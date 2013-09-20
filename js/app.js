$('#mywrapper').snappish();

$('#mywrapper').on('scrollbegin.snappish', function(event, data) {
  data.fromSlide.removeClass('active');
  data.toSlide.addClass('active');
});