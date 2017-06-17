$(document).ready(function () {
		$('.owl-team').owlCarousel({
		items: 4,
		loop: true,
		dots: true,
		nav: false,
		dots: true,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {

			0: {
				items: 1
			},
			450:{
				items: 2
			},

			800: {
				items: 3
			},

			1100: {
				items: 4
			}
		}


		});
		$('.owl-brand').owlCarousel({
		items: 5,
		loop: true,
		dots: true,
		nav: false,
		dots: true,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {

			0: {
				items: 1
			},
			450:{
				items: 2
			},

			800: {
				items: 4
			},

			1100: {
				items: 5
			}
		}

		});


		$('.owl-testimonials').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		nav: false,
		dots: true,
		smartSpeed: 700
		});

		$('.filter-right__item_txt').click(function(){
			if (!$(this).hasClass('active')) {
	    		$('.filter-right__item_txt').removeClass('active');
	    		$(this).addClass('active');
	    	}
		});

		$('.menu__item').click(function(){
			if (!$(this).hasClass('active-h')) {
	    		$('.menu__item').removeClass('active-h');
	    		$(this).addClass('active-h');
	    	}
		});


		(function($) {
			$.fn.animated = function(inEffect) {
				$(this).each(function() {
					var ths = $(this);
					ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
							ths.addClass(inEffect).css("opacity", "1");
						}
					}, {
						offset: "90%"
					});

				});
			};
		})(jQuery);

		$(".about__mac").animated("fadeInLeft");
		$(".about__text").animated("fadeInRight");
		$(".owl-item").animated("fadeInUp");
		$(".services").animated("lightSpeedIn");
		$(".content-portfolio").animated("fadeInLeft");
		$(".wr-contact__txt").animated("fadeInRight");


		

		$('.burger').click(function(){
			$('.burger__line').toggleClass('active-b');
			$('.b-menu').toggleClass('open');

		});


		// $(document).on('scroll', function(){
		// 	var header = $('.header');
		// 	var top = $('#fixed-header').offset().top;
		// 	if(header.css('position') == 'relative' && window.pageYOffset >= top){
		// 	  	header.css('position', 'fixed');
		// 	}
		// 	else if(header.css('position') == 'fixed' && window.pageYOffset < top){
		// 		header.css('position', 'relative');
		// 	}
		// });


		$('.preloader').fadeOut();


});


