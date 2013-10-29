$(document).ready(function () {
    var $snappish = $('body').snappish();

    // Fade out the loading background
    // Uses CSS3 animations rather than jQuery
    // We don't show the box at all on < IE10 so it's always display:none;
    $("#loading-background").transition({
        opacity: 0,
        duration: 1000,
        delay: 1000,
        easing: 'ease',
        complete: function() {
            $(this).remove();
        }
    });


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
