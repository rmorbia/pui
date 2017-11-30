// JavaScript Document

var scrollPos;

$(document).ready(function () {

	// Scrolling for Navigation //////////
	scrollPos = $(document).scrollTop();

	$('#link-home').click(function () {
		$('html, body').animate({
			scrollTop: $('#home').offset().top
		}, (Math.abs((scrollPos - $("#journey").offset().top)) * 300 / 1000), 'swing');
	});

	$('#link-journey').click(function () {
		$('html, body').animate({
			scrollTop: $('#journey').offset().top
		}, (Math.abs((scrollPos - $("#journey").offset().top)) * 200 / 1000), 'swing');
	});

	$('#link-challenges').click(function () {
		$('html, body').animate({
			scrollTop: $('#challenges').offset().top
		}, (Math.abs((scrollPos - $("#challenges").offset().top)) * 200 / 1000), 'swing');
	});

	$('#link-proposals').click(function () {
		$('html, body').animate({
			scrollTop: $('#proposals').offset().top
		}, (Math.abs((scrollPos - $("#proposals").offset().top)) * 200 / 1000), 'swing');
	});

	$('#link-tech-challenges').click(function () {
		$('html, body').animate({
			scrollTop: $('#tech-challenges').offset().top
		}, (Math.abs((scrollPos - $("#tech-challenges").offset().top)) * 200 / 1000), 'swing');
	});


	// Mobile Menu Button - expands and colapses //////////
	$("#menu-button").attr("state", "notOpen");
	$("#menu-button").click(function () {
		if ($("#menu-button").attr("state") === "notOpen") {
			$(".nav-panel").animate({
				bottom: '0'
			}, "fast");
			$(this).animate({
				bottom: '320'
			}, "fast");
			$("body").css({
				"padding-bottom": "300px"
			});
			//Try to animate scroll if near the bottom of hte screen.
			//$("html, body").animate({ scrollTop: $(document).height() }, 400);
			$("#menu-button").attr("state", "isOpen");
			$("#menu-button").html('<span class="glyphicon glyphicon-remove menu-icon"></span>');
		} else {
			$(".nav-panel").animate({
				bottom: '-300'
			}, "fast");
			$(this).animate({
				bottom: '20'
			}, "fast");
			$("body").css({
				"padding-bottom": "0"
			});
			$("#menu-button").attr("state", "notOpen");
			$("#menu-button").html('<span class="glyphicon glyphicon-menu-hamburger menu-icon"></span>');
		}
	});

	/* Adds Skrollr code to html for content that is 2 columns or 1 column,
	depending on window width */
	if ($(window).width() > 891) {
		$(".hero-panel").attr('data-start', 'background-position: 40% 50%;');
		$(".hero-panel").attr('data-top-bottom', 'background-position: 0% 50%;');

		$(".logistics-img").attr('data-bottom-top', 'opacity:0; left:100%; top:100px;');
		$(".logistics-img").attr('data-center-top', 'opacity:1; left:50%; top:20px;');
		$("#logistics-text").attr('data-bottom-top', 'opacity:0; left:-100%; top:100px;');
		$("#logistics-text").attr('data-center-top', 'opacity:1; left:-50%; top:50%; top:0px;');

		$("#physical-text").attr('data-bottom-top', 'opacity:0; left:-100%;');
		$("#physical-text").attr('data-center-top', 'opacity:1; left:0;');
		$(".physical-img").attr('data-bottom-top', 'opacity:0; left:100%; top:100px;');
		$(".physical-img").attr('data-center-top', 'opacity:1; left:0%; top:0px;');

		$(".protection-img").attr('data-bottom-top', 'opacity:0; left:100%; top:100px;');
		$(".protection-img").attr('data-center-top', 'opacity:1; left:50%; top:0px;');
		$("#protection-text").attr('data-bottom-top', 'opacity:0; left:-100%; top:100px;');
		$("#protection-text").attr('data-center-top', 'opacity:1; left:-50%; top:0px;');

		$(".dstransport-img").attr('data-bottom-top', 'opacity:0; left:100%; top:100px;');
		$(".dstransport-img").attr('data-center-top', 'opacity:1; left:50%; top:20px;');
		$("#dstransport-text").attr('data-bottom-top', 'opacity:0; left:-100%; top:100px;');
		$("#dstransport-text").attr('data-center-top', 'opacity:1; left:-50%; top:20px;');

		$(".text-innovation").attr('data-bottom-top', 'opacity:0; left:-100%; top:100px;');
		$(".text-innovation").attr('data-center-top', 'opacity:1; left:0%; top:20px;');
	} else {
		$(".hero-panel").attr('data-start', 'background-position: 20% 50%;');
		$(".hero-panel").attr('data-top-bottom', 'background-position: 0% 50%;');

		$(".logistics-img").attr('data-bottom-top', 'opacity:0; left:100%; top:100px;');
		$(".logistics-img").attr('data-center-top', 'opacity:1; left:0%; top:20px;');
		$("#logistics-text").attr('data-bottom-top', 'opacity:0; left:-100%; top:100px;');
		$("#logistics-text").attr('data-center-top', 'opacity:1; left:0%; top:50%; top:40px;');

		$("#physical-text").attr('data-bottom-top', 'opacity:0; left:-100%; top: 100px;');
		$("#physical-text").attr('data-center-top', 'opacity:1; left:0; top: 40px;');
		$(".physical-img").attr('data-bottom-top', 'opacity:0; left:100%; top:100px;');
		$(".physical-img").attr('data-center-top', 'opacity:1; left:0%; top:0px;');

		$(".protection-img").attr('data-bottom-top', 'opacity:0; left:100%; top:100px;');
		$(".protection-img").attr('data-center-top', 'opacity:1; left:0%; top:0px;');
		$("#protection-text").attr('data-bottom-top', 'opacity:0; left:-100%; top:100px;');
		$("#protection-text").attr('data-center-top', 'opacity:1; left:0%; top:20px;');

		$(".dstransport-img").attr('data-bottom-top', 'opacity:0; left:100%; top:100px;');
		$(".dstransport-img").attr('data-center-top', 'opacity:1; left:0%; top:20px;');
		$("#dstransport-text").attr('data-bottom-top', 'opacity:0; left:-100%; top:100px;');
		$("#dstransport-text").attr('data-center-top', 'opacity:1; left:0%; top:40px;');

		$(".text-innovation").attr('data-bottom-top', 'opacity:0; left:-100%; top:100px;');
		$(".text-innovation").attr('data-center-top', 'opacity:1; left:0%; top:20px;');
	}


	// Initiates Skrollr //////////
	(function ($) {
		// Init Skrollr
		var s = skrollr.init({
			/*Tried to used below line of code to get rid of 
			white space at the bottom but it breaks the functionality*/
			//forceHeight: false;

			render: function (data) {
				//Debugging - Log the current scroll position.
				//console.log(data.curTop);
			}
		});
	})(jQuery);

	// Fixes white space issue that Skrollr causes. If the window is resized, the page should be reloaded.
	$("body").attr('style', 'height: auto;');
});
