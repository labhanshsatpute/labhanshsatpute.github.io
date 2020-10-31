$(document).ready(function(){

	$('#sidebar-tab-1').click(function(){
		$('#tab-dashboard-1').show();
	});

	$('#sidebar-tab-1').blur(function(){
		$('#tab-dashboard-1').hide();
	});

});