$(document).ready(function() {
	// Add Button
	$('.add').click(function() {
		var input = $('input').val();
		$('input').val('');

		$('.ul').prepend('<div class="item"><li>' + input + '</li><hr  /></div>');
	});

	// Clear All Button 
	$('.clear-all').click(function() {
		$('.ul').empty();
	});

	// Selecting an Item
	$('.item').click(function() {
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$('.item').removeClass('active');
			$(this).addClass('active');
		}
	});

	// Remove Button
	$('.remove').click(function() {
		$('.active').remove();
	});

	// Check Button
	$('.check').click(function() {
		if ( $('.active').hasClass('checked') ) {
			$('.active').removeClass('checked');
		} else {
			$('.active').addClass('checked');
		}
	});
});

// <div class="item">
// 	<li>Milk</li>
// 	<hr  />
// </div>