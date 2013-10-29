$(document).ready(function () {
    var $snappish = $('body').snappish();

    // Start snappish on trackpad scroll
    $snappish.on('scrollbegin.snappish', function(e, data) {
        data.toSlide.addClass('active');
        $('nav a').removeClass('active');
        $('nav a[data-slide-num="' + data.toSlideNum + '"]').addClass('active');
    }).on('scrollend.snappish', function(e, data) {
        data.fromSlide.removeClass('active');
    });

    // Sidebar navigation click setup
    $(".snappish-nav").on('click', function(e) {
        e.preventDefault();
        $snappish.trigger('scrollto.snappish', $(this).data('slide-num'));
    });

    // Bootstrap carousel - auto scrolls
    var $carousel = $('.carousel').carousel({
        interval: 3000
    });

    // Use left + right arrows for carousel navigation
    // Don't worry if we aren't on that section yet
    keypress.combo("left", carouselLeft);
    keypress.combo("right", carouselRight);

    // Make snappish keyboard navigable
    keypress.combo("down", scrollDown);
    keypress.combo("space", scrollDown);
    keypress.combo("up", scrollUp);
    keypress.combo("shift space", scrollUp);


    // Trigger snappish scrolls programatically
    function scrollDown () { $snappish.trigger('mousewheel', [0, 0, -1]); }
    function scrollUp ()   { $snappish.trigger('mousewheel', [0, 0, 1]);  }

    // Trigger bootstrap carousel programatically
    function carouselLeft () { $carousel.carousel('prev'); }
    function carouselRight () { $carousel.carousel('next'); }
});
