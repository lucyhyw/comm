$(document).ready(function() {
	$("#contact-wrapper").height($(window).height() - 30)
	// let carouselHeight = 630
	// if (carouselHeight < $(window).height() - 150) {
		carouselHeight = $(window).height() - 150
	// }
	$("#carousel").height(carouselHeight)
	$(window).resize(function() {
		$("#contact-wrapper").height($(window).height() - 30)
		// let carouselHeight = 630
		// if (carouselHeight < $(window).height() - 150) {
			carouselHeight = $(window).height() - 150
		// }
		$("#carousel").height(carouselHeight)
	})

	$("#contact-link").click(function(e) {
		e.preventDefault();
		$([document.documentElement, document.body]).animate({
		        scrollTop: $("#contact-wrapper").offset().top - 20
		    }, 1000);
	});

	const carouselItems = $('#carousel .item');
	const left = $('#left-control');
	const right = $('#right-control');

	function scrollLeft(e) {
		e.preventDefault();
		e.stopPropagation();
		let newCur = 0;
		carouselItems.each(function(i, el) {
			if ($(el).hasClass('left')) {
				newCur = i;
			}
			$(el).removeClass('left right cur');
			$(el).removeClass('hidden first last').addClass('hidden');
		})

		if (newCur != 0) {
			$(carouselItems[newCur-1]).addClass('left');
			$(carouselItems[newCur-1]).removeClass('hidden');
		} else {
			// disable left button	
			// $(carouselItems[newCur]).addClass('first');
			// left.removeAttr('href')
			$(carouselItems[carouselItems.length - 1]).addClass('left');
			$(carouselItems[carouselItems.length - 1]).removeClass('hidden');

		}
		$(carouselItems[newCur]).addClass('cur');
		$(carouselItems[newCur]).removeClass('hidden');
		$(carouselItems[newCur+1]).addClass('right');
		$(carouselItems[newCur+1]).removeClass('hidden');
		if (newCur == carouselItems.length - 1) {
			$(carouselItems[0]).addClass('right');
			$(carouselItems[0]).removeClass('hidden');
		}
		right.attr('href','#')
		
	}

	function scrollRight(e) {
		e.preventDefault();
		e.stopPropagation();

		let newCur = carouselItems.length - 1;
		carouselItems.each(function(i, el) {
			if ($(el).hasClass('right')) {
				newCur = i;
			}
			$(el).removeClass('left right cur');
			$(el).removeClass('hidden first last').addClass('hidden');
		})

		if (newCur != carouselItems.length - 1) {
			$(carouselItems[newCur+1]).addClass('right');
			$(carouselItems[newCur+1]).removeClass('hidden');
		} else {
			// DISABLE right BUTTON
			// $(carouselItems[newCur]).addClass('last');
			// right.removeAttr('href')
			$(carouselItems[0]).addClass('right');
			$(carouselItems[0]).removeClass('hidden');
		}
		$(carouselItems[newCur]).addClass('cur');
		$(carouselItems[newCur]).removeClass('hidden');
		$(carouselItems[newCur-1]).addClass('left');
		$(carouselItems[newCur-1]).removeClass('hidden');

		if (newCur == 0) {
			$(carouselItems[carouselItems.length - 1]).addClass('left');
			$(carouselItems[carouselItems.length - 1]).removeClass('hidden');
		}
		left.attr('href','#')
	}
    left.click(scrollLeft);
    right.click(scrollRight);
})