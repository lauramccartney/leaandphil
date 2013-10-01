$(document).ready(function () {
    var $snappish = $('#wrapper').snappish();

    $snappish.on('scrollbegin.snappish', function(e, data) {
        console.log(e, data);
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

    $('.carousel').carousel({
        interval: 3000
    });

    $('.carousel').carousel('cycle');

    // Make it all keyboard navigable
    keypress.combo("down", scrollDown);
    keypress.combo("space", scrollDown);

    keypress.combo("up", scrollUp);
    keypress.combo("shift space", scrollUp);

    function scrollDown () { $snappish.trigger('mousewheel', [0, 0, -1]); }
    function scrollUp ()   { $snappish.trigger('mousewheel', [0, 0, 1]);  }
});
