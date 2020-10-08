(function($){

	$('.index').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		download: false,
	});


	$('.thumbnails .content-slider .sliders').slick({
		// lazyLoad: 'onDemand',
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		autoplay: false,
		// autoplaySpeed: 2000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: true,
		dots: false,
		prevArrow: '<span class="button-arrow prev-arrow"></span>',
		nextArrow: '<span class="button-arrow next-arrow"></span>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					infinite: false,
					// centerMode: true,
					// centerPadding: '40px',
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					infinite: false,
					centerMode: false,
					// centerPadding: '20px',
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

})(jQuery);