$('#mywrapper').snappish();

$('#mywrapper').on('scrollbegin.snappish', function(event, data) {
  console.log('from slide', data.fromSlide, data.fromSlideNum);
  console.log('to slide', data.toSlide, data.toSlideNum);
  data.fromSlide.removeClass('active');
  data.toSlide.addClass('active');
});