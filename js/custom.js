$(function () {
    "use strict";
    
    $('#site-header .navbar-toggler').on('click', function() {
        $('body').toggleClass('actv');
    });

    // Tigger Slideshow Carousel
    $('#slideshow .skitter-large').skitter({
        dots: false,
        stop_over: false,
       
    });
       
    // Tigger Portfolio Carousel
    
    $('.portfolio .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        nav:false,
        rtl: true,
        responsive:{
            0:{
                items:2,
                margin: 10
            },
            400:{
                items:2,
                margin: 20
            },
            768:{
                items:3,
                margin:20
            },
            992:{
                items:3,
                margin:20
            }
        }
    });
    
    // Tigger Horizontal Accordion
    
   if($(window).width() > 767) {
        const horizontalAccordions = $(".accordion.width");
        horizontalAccordions.each((index, element) => {
            const accordion = $(element);
          const collapse = accordion.find(".collapse");
          const bodies = collapse.find("> *");
          accordion.height(accordion.height());  
          bodies.width(bodies.eq(0).width());
          collapse.not(".show").each((index, element) => {
            $(element).parent().find("[data-toggle='collapse']").addClass("collapsed");
          });
        });
   }
    
    // Scroll Top
    
	var scrollTop = $('.scrolltop');

	$(".screen_loading img").fadeOut(3000, function () {

		// Show The Scroll

		$("body").css("overflow-y", "auto");

		$(this).parent().fadeOut(1000, function () {

			$(this).remove();
		});
	});

	$(window).scroll(function () {
        
        if ($(window).scrollTop() > 400) {
            scrollTop.fadeIn();
        } else {
            scrollTop.fadeOut();
        }
    });
    
    $('.scrolltop').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });
    });
    
    // Tigger Loading Screen

    $(".screen-loading .sk-cube-grid").fadeOut(1000, function () {

		// Show The Scroll

		$("body").css("overflow-y", "auto");

		$(this).parent().fadeOut(1000, function () {

			$(this).remove();
		});
	});
    
    // Trigger Nice Scroll
    $('html').niceScroll({
        cursorcolor : '#3c3f41',
        cursorwidth:"11px",
        cursorborder:"0px",
        cursorborderradius:'0',
        zindex: "999999" 
    });
    
    // Tigger WOW JS
    
    new WOW().init();
});