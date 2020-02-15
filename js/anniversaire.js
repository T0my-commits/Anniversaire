$('ul').on('click', 'li', function() {
	$(this).next('li').fadeIn('fast').attr('class', 'titre');
});

$('li:last').on('click', function() {
	$('body').css('background', 'url("images/anniversaire.gif")');
	$('audio').attr('autoplay', 'autoplay').attr('loop', 'loop');
	$('li#message_principal ~ li').text('Joyeux Anniversaire !');
});
