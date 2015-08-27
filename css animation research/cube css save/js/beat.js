$(document).ready(function() {
$(".Products").click(function (event) {
		$("").slideToggle(1000);
		$(".login").hide(1000);
		});
	
$("#3line").dblclick(function() {
    
		$(".login").show(1000);
		$(".divmenu").slideUp(1000);
		});
$(".front").click(function (event) {
		$(".face2").animate(1000);
		
		});
$("#3line").ondblclick=function(){SomeJavaScriptCode};
		});
		
$(function() {  
    $("#ali").click(function() {  
        $(".box").addClass("box-change");
		  
    });  
}); 
$(function() {  
    $("#gali").click(function() {  
        $(".box").toggleClass("box-change");
		  
    });  
}); 

$(function() {  
    $(".Products").click(function() {  
       
		$(".back").css({
		
		"-webkit-animation-transition":"all 1s ease",
		"-webkit-transform":"perspective( 600px ) rotateY( 0deg )"});
			
		$(".front").css({
		
		"-webkit-animation-transition":"all 1s eas",
		"-webkit-transform":"perspective( 600px ) rotateY( -180deg )"});
	
    });  
});
$(function() {  
    $(".about").click(function() {  
       
		$(".front").css({
		
		"-webkit-animation-transition":"all 1s ease",
		"-webkit-transform":"perspective( 600px ) rotateY( 0deg )"});
			
		$(".back").css({
		
		"-webkit-animation-transition":"all 1s eas",
		"-webkit-transform":"perspective( 600px ) rotateY( 180deg )"});
	
    });  
});
