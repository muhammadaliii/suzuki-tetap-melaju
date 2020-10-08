/**
 * Navbar
 */

function stickyHeader() {
	var lastScroll = 300;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		
		if(st < 32) {
			$('body').removeClass('on-scroll');
		} else {
			$('body').addClass('on-scroll');
		}

		lastScroll = st;
	});
}

// function stickyClass() {
// 	$(window).scroll(function(event){
// 		var scroll = $(window).scrollTop();
		
// 		$('header').toggleClass('show-title',
// 			scroll >= $('#section2').offset().top
// 		);
// 	});
// }

$(function() {
	$(document).ready(function () {
		stickyHeader();
		// stickyClass();
	});
})
