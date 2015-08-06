// JavaScript Document

$(document).ready(function(e) {
    $("#quesWhat").click( function(){
		$(".about").fadeOut();
		$("#ansWhat").fadeToggle("slow");
		});
	$("#quesWhy").click( function(){
		$(".about").fadeOut();
		$("#ansWhy").fadeToggle("slow");
		});
	$("#quesHow").click( function(){
		$(".about").fadeOut();
		$("#ansHow").fadeToggle("slow");
		});
});