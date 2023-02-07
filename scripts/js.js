// JavaScript Document
$(document).ready(function(){
	
	$('#beta').mouseover(function() {
		
		$("#betamessagebox").animate({"top": "45px"}, "fast");
		
	});
	
	$('#beta').mouseout(function() {
		
		$("#betamessagebox").animate({"top": "-122px"}, "fast");
		
	});

});

