jQuery(document).ready(function ($) {
    var contentSections = $('.cd-section')
        , navigationItems = $('#cd-vertical-nav a');
    headerNavigationItems = $('#headerNavigationItems a');
    updateNavigation();
    $(window).on('scroll', function () {
        updateNavigation();
    });
    navigationItems.on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    headerNavigationItems.on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    $('.cd-scroll-down').on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    $('.touch .cd-nav-trigger').on('click', function () {
        $('.touch #cd-vertical-nav').toggleClass('open');
    });
    $('.touch #cd-vertical-nav a').on('click', function () {
        $('.touch #cd-vertical-nav').removeClass('open');
    });
    function updateNavigation() {
        contentSections.each(function () {
            $this = $(this);
            var activeSection = $('#cd-vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigationItems.eq(activeSection).addClass('is-selected');
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }
    function smoothScroll(target) {
        $('body,html').animate({
            'scrollTop': target.offset().top - 90
        }, 900);
    }
});
