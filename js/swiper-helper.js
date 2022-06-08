function loadSwipper(){
	let navigation = {}
	let autoHeight = false
	let pagination = {}
	let direction = 'horizontal'

	if (window.matchMedia('screen and (max-width: 768px)').matches) {
	    navigation = {
	      nextEl: ".float-next",
	      prevEl: ".float-prev",
	    }
	    autoHeight = true
	    pagination = {
			clickable: false,
	    }
	    direction = 'horizontal'
	} else {
		navigation = {
	      nextEl: ".swiper-button-next",
	      prevEl: ".swiper-button-prev",
	    }
	    pagination = {
	    	el: ".swiper-pagination",
			clickable: false,
			type: "progressbar",
	    }
	}

	var swiper = new Swiper(".mySwiper", {
		simulateTouch: false,
		direction: direction,
		slidesPerView: 1,
		autoHeight: autoHeight,
		spaceBetween: 0,
		effect: 'fade',
		fadeEffect: {
		    crossFade: true
		},
		noSwipingClass: false,
		slideToClickedSlide: false,
		allowTouchMove: false,
		freeMode: false,
		paginationClickable: false,
		keyboard: {
	          enabled: true,
	    },
		pagination,
		navigation
	});

	$(".menu-couple").click(function() {
		swiper.slideTo(0)
	})

	$(".menu-event").click(function() {
		swiper.slideTo(1)
	})

	$(".menu-images").click(function() {
		swiper.slideTo(2)
	})

	$(".menu-rsvp").click(function() {
		swiper.slideTo(3)
	})

	$(".menu-family").click(function() {
		swiper.slideTo(4)
	})

	$(".menu-closing").click(function() {
		swiper.slideTo(5)
	})

	swiper.on('slideChange', function (s) {
		$(".content__inner").animate({             
		 	scrollTop: 0           
		});
		if(s.realIndex === 1) {
			$("#akad").addClass('animate__animated animate__bounceInLeft animate__slow')
			$("#resepsi").addClass('animate__animated animate__bounceInRight animate__slow')
			$("#clock-b").addClass('animate__animated animate__fadeIn animate__slow')
			$("#map-container").addClass('animate__animated animate__fadeIn animate__slow')
			$("#slide-2-header").addClass('animate__animated animate__bounceIn animate__slow')
		}
		if(s.realIndex === 2) {
			$("#slide-3-header").addClass('animate__animated animate__bounceIn animate__slow')
			$("#image-1").addClass('animate__animated animate__zoomIn animate__slow')
			$("#image-2").addClass('animate__animated animate__zoomIn animate__slow')
			$("#image-3").addClass('animate__animated animate__zoomIn animate__slow')
		}
		if(s.realIndex === 3) {
			$("#slide-4-header").addClass('animate__animated animate__bounceIn animate__slow')
		}
		if(s.realIndex === 4) {
			$("#slide-5-header").addClass('animate__animated animate__bounceIn animate__slow')
			$("#family-0").addClass('animate__animated animate__fadeInUp animate__slow')
			$("#family-1").addClass('animate__animated animate__fadeInUp animate__slow')
			$("#family-2").addClass('animate__animated animate__fadeInUp animate__slow')
		}

		$('.swiper-wrapper').css('scrollTop', '0');
		$('.swiper-slide').css('scrollTop', '0');
	});

}