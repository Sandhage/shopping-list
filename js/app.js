$(document).ready(function() {
	// Add Button
	$('.add').click(function() {
		submitForm();
	});

	// Clear All Button 
	$('.clear-all').click(function() {
		$('.ul').empty();
	});

	// Selecting an Item
	$('.ul').on('click', '.item', function() {
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

	// Drag and Drop
	$(".ul").sortable({
		axis: "y"
	});

	// Prevent Form Default
	$(".input-form").submit(function(e) {
        e.preventDefault();
        submitForm();
    });

});

// Custom Function: Submit/Click 'Add Button'
function submitForm () {
	var input = $('input').val();
    $('input').val('');
    if ( input == '' ) {
    	alert ( "Don't be stupid! Type something!" );
    } else {
    	$('.ul').prepend('<div class="item"><li>' + input + '</li><hr  /></div>');
    }
}