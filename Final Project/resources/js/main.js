// JavaScript Document

$(document).ready(function() {
	
$('#link-home').click( function() {
	 $('html, body').animate({
		  scrollTop: $('#home').offset().top}, 500);
});
	
$('#link-journey').click( function() {
	 $('html, body').animate({
		  scrollTop: $('#journey').offset().top}, 500);
});
	
$('#link-challenges').click( function() {
	 $('html, body').animate({
		  scrollTop: $('#challenges').offset().top}, 500);
});
	
$('#link-proposals').click( function() {
	 $('html, body').animate({
		  scrollTop: $('#proposals').offset().top}, 500);
});
	
$('#link-tech-challenges').click( function() {
	 $('html, body').animate({
		  scrollTop: $('#tech-challenges').offset().top}, 500);
});
	
// scroll to the top of the page
if ($('.scrollToTop')[0]){
     $('.scrollToTop').click(function(){
          $('html,body').animate({ scrollTop: 0 }, 500);
     });
}
	
});