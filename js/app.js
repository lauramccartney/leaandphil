$('#mywrapper').snappish();

$('#mywrapper').on('scrollbegin.snappish', function(event, data) {
  data.fromSlide.removeClass('active');
  data.toSlide.addClass('active');
});

var $snappish = $('#wrapper').snappish();

$snappish.on('scrollbegin.snappish', function(e, data) {
    data.toSlide.addClass('active');
    $('nav a').removeClass('active');
    $('nav a[data-slide-num="' + data.toSlideNum + '"]').addClass('active');
}).on('scrollend.snappish', function(e, data) {
    data.fromSlide.removeClass('active');
});

$('nav a').on('click', function(e) {
    e.preventDefault();
    $snappish.trigger('scrollto.snappish', $(this).data('slide-num'));
});