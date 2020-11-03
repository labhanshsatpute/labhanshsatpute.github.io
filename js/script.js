$(document).ready(function(){

	$(".navbar-toggler-button").blur(function(){
	  	$("#collapse-navbar").hide(200);
	});

	$(".navbar-toggler-button").click(function(){
	  	$("#collapse-navbar").toggle(200);
	});

	$("#getstarted").click(function(){
	    window.scroll({
			top: 620,
			behaviour: 'smooth'
		});
	});

	$('#preloader').hide();
	
});

