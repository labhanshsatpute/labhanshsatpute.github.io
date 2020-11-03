function scrollDown() {
	window.scroll({
		top: 700,
	  	behavior: 'smooth',
	});
}


$(document).ready(function(){

	$(".navbar-toggler-button").focus(function(){
	  	$("#collapse-navbar").toggle(500);
	});

	$(".navbar-toggler-button").blur(function(){
	  	$("#collapse-navbar").toggle(500);
	});

	$('.counter').counterUp({
		delay: 10,
		time: 1000
		
	});

	$('#contact-button').click(function(){
		$('#contact-form-container').toggle();
		$('#contact-form-container').addClass('animated fadeIn');
		$('#contact-form').addClass('animated zoomIn');
	});

	$('#contact-form-close').click(function(){
		$('#contact-form-container').hide();
	});

});