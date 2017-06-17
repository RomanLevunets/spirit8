$(document).ready(function () {

	//slides
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

		//filter
		$('.menu__item').click(function(){
			if (!$(this).hasClass('active-h')) {
	    		$('.menu__item').removeClass('active-h');
	    		$(this).addClass('active-h');
	    	}
		});

		//animation content
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


		//deleted animation for mobile
		var isMobile = {
		    Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
		    BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
		    iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
		    Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
		    any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
		};
  
		if ( !isMobile.any() ) {
    		$(".about__mac").animated("fadeInLeft");
				$(".about__text").animated("fadeInRight");
				$(".owl-item").animated("fadeInUp");
				$(".services").animated("lightSpeedIn");
				$(".content-portfolio").animated("fadeInLeft");
				$(".wr-contact__txt").animated("fadeInRight");
		}

		//burger animation
		$('.burger').click(function(){
			$('.burger__line').toggleClass('active-b');
			$('.b-menu').toggleClass('open');

		});


		//fixed header

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

		//preloader
		$('.preloader').fadeOut();



		$("a.arrowDown__font").click(function() {
		    var elementClick = $(this).attr("href");
		    var destination = $(elementClick).offset().top;
		    jQuery("html:not(:animated),body:not(:animated)").animate({
		      scrollTop: destination
		    }, 1200);
		    return false;
  		});




  		//jquery-validation


			$('#form-message').validate({
			rules:{

		            form__name:{
			                required: true,
			                minlength: 4,
			                maxlength: 16,
			            },

			            form__email:{
			                required: true,
			                email: true,
			            },

			            form__message:{
			            	required: true,
			            	minlength: 10,
			            },
	       			},

		         messages:{

		            form__name:{
		            	minlength: "Имя должно состоять минимум из 4-х символов",
		                required: "Это поле обязательно для заполнения",
		            },

		            form__email:{
		                required: "Это поле обязательно для заполнения",
		                email: "Ведите правильный Email адресс",
		            },

		            form__message:{
		                required: "Это поле обязательно для заполнения",
		                minlength: "Минимум 10 символов"
		            },

		       },
			});

});


