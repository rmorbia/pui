// JavaScript Document

var scrollPos;

$(document).ready( function() {
	
	scrollPos = $(document).scrollTop();
	
	$('#link-home').click( function() {
		$('html, body').animate({
			 scrollTop: $('#home').offset().top}, (Math.abs((scrollPos-$("#journey").offset().top))*400/1000), 'swing');
	});

	$('#link-journey').click( function() {
		$('html, body').animate({
			 scrollTop: $('#journey').offset().top}, (Math.abs((scrollPos-$("#journey").offset().top))*200/1000), 'swing');
	});

	$('#link-challenges').click( function() {
		 $('html, body').animate({
			  scrollTop: $('#challenges').offset().top}, (Math.abs((scrollPos-$("#challenges").offset().top))*200/1000), 'swing');
	});

	$('#link-proposals').click( function() {
		 $('html, body').animate({
			  scrollTop: $('#proposals').offset().top}, (Math.abs((scrollPos-$("#proposals").offset().top))*200/1000), 'swing');
	});

	$('#link-tech-challenges').click( function() {
		 $('html, body').animate({
			  scrollTop: $('#tech-challenges').offset().top}, (Math.abs((scrollPos-$("#tech-challenges").offset().top))*200/1000), 'swing');
	});
	
	$("#menu-button").attr("state", "notOpen");
	$("#menu-button").click( function(){
		if( $("#menu-button").attr("state") === "notOpen" ) {
			$(".nav-panel").animate({bottom: '0'}, "fast");
			$(this).animate({bottom: '320'}, "fast");
			$("body").css({"padding-bottom": "300px"});
			//Try to animate scroll if near the bottom of hte screen.
			//$("html, body").animate({ scrollTop: $(document).height() }, 400);
			$("#menu-button").attr("state", "isOpen");
		} else {
			$(".nav-panel").animate({bottom: '-300'}, "fast");
			$(this).animate({bottom: '20'}, "fast");
			$("body").css({"padding-bottom": "0"});
			$("#menu-button").attr("state", "notOpen");
		}
    });
	
	// Initiate Skrollr /////////
	( function( $ ) {
		// Init Skrollr
		var s = skrollr.init({
			render: function(data) {
				//Debugging - Log the current scroll position.
				console.log(data.curTop);
			}
		});
	} )( jQuery );
	
});