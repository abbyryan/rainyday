$(document).ready(function() {
	$('.modal').click(function(e) {
		/* lightbox appears */
		e.preventDefault();
		var image_href = $(this).attr("href");
		$('.lightbox img').attr("src", image_href);
		$('body').toggleClass('active');
	});	
	$('.lightbox').click(function() {
		$('body').removeClass('active');
	});
});