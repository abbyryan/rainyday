$(document).ready(function() {
	$('.modal').click(function(e) { /* each li > a has class "modal". on clicking a modal link... */		
		e.preventDefault(); /* prevent default behavior of clicking a link (opening the link in same page) */
		var image_href = $(this).attr("href"); /* gets reference link from "modal" a */
		$('.lightbox img').attr("src", image_href); /* attributes the clicked link to the img in "lightbox" div */
		$('body').addClass('active'); /* "active" class sets "lightbox" display to block (originally none) */
		$('#container ul li').removeClass('current'); /* if any previously clicked a's li has "current" class, remove it */
		$(this).parents('li').addClass('current'); /* adds "current" class to clicked link */
	});	
	$('.lightbox').click(function() { /* click anywhere within active lightbox */
		$('body').removeClass('active'); /* remove "active" class - display is back to none */
		$('li').removeClass('current'); /* removes "current" class from originally clicked li */
	});
	$('body').on('keyup', function(e){ /* keyboard navigation */
		e.preventDefault(); /* prevent default behavior of key you press */
		if (e.keyCode == 37) { /* 37 is keycode for left arrow */
			if ($('body').hasClass('active')) { /* makes sure lightbox is active and displayed */
				$('#container ul li.current').prev().find('a').trigger('click'); /* whichever li is currently clicked on, triggers the "click" behavior above to previous li */
			};
		}
		else if (e.keyCode == 39) { /* 39 is keycode for left arrow */
			if ($('body').hasClass('active')) { /* makes sure lightbox is active and displayed */
				$('#container ul li.current').next().find('a').trigger('click'); /* whichever li is currently clicked on, triggers the "click" behavior above to next li */
			};
		}
		else if (e.keyCode == 27) { /* 27 is keycode for esc */
			if ($('body').hasClass('active')) { /* makes sure lightbox is active and displayed */
				$('.lightbox').trigger('click'); /*triggers lightbox click behavior: removes classes */
			};
		}		
	});
});