$(document).ready(function() {
	$('.modal').click(function(e) {
		/* lightbox appears */
		e.preventDefault();
		var image_href = $(this).attr("href");
		$('.lightbox img').attr("src", image_href);
		$('body').addClass('active');
		$('#container ul li').removeClass('current');
		$(this).parents('li').addClass('current');
	});	
	$('.lightbox').click(function() {
		$('body').removeClass('active');
		$('li').removeClass('current');
	});
	$('body').on('keyup', function(e){
		e.preventDefault();
		if (e.keyCode == 37) {
			if ($('body').hasClass('active')) {
				$('#container ul li.current').prev().find('a').trigger('click');
			};
		}
		else if (e.keyCode == 39) {
			if ($('body').hasClass('active')) {
				$('#container ul li.current').next().find('a').trigger('click');
			};
		}
	});
});