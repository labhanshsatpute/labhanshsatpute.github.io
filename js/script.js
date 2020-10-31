$(document).ready(function(){

	$(".navbar-toggler-button").blur(function(){
	  	$("#collapse-navbar").hide(500);
	});

	$(".navbar-toggler-button").click(function(){
	  	$("#collapse-navbar").toggle(500);
	});

});