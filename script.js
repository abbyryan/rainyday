$(document).ready(function() {
	$('.modal').click(function(e) {
		/* lightbox appears */
		e.preventDefault();
		var image_href = $(this).attr("href");
		if ($('.lightbox').length > 0) { /* lightbox active */
			$('#content').html('<img src="' + image_href + '" />');
			$('.lightbox').show();
		}
		else { /* lightbox not yet active -- no photo has been clicked */
			var theLightbox =
			'<div class="lightbox">' +
                        '<p>click to close</p>' +
                '<div id="content">' + 
                    '<img src="' + image_href +'" />' +
                '</div>' +
            '</div>';
            $('body').append(theLightbox);
		}
	});
		/* hide lightbox */

	$('.lightbox').click(function() {
		$(this).hide();
	});
});