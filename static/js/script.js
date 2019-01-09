jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	// Preloader js    
	$(window).on('load', function () {
		$('#preloader').fadeOut(100);
	});


	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */

	$("#post-thumb, #gallery-post").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000

	});

	$("#features").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});


	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */


	$("#navigation").sticky({
		topSpacing: 0
	});


	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});
	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var mixer = mixitup('.portfolio-items-wrapper');

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	//Init the carousel
	$("#testimonials").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});
wow.init();


/* ========================================================================= */
/*	Smooth Scroll
/* ========================================================================= */
var scroll = new SmoothScroll('a[href*="#"]');
});

