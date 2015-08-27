

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
    $("#ali").click(function() {  
       
		$(".back").css({
		
		"-webkit-animation-transition":"all 1s ease",
		"-webkit-transform":"perspective( 600px ) rotateY( 0deg )"});
			
		$(".front").css({
		
		"-webkit-animation-transition":"all 1s eas",
		"-webkit-transform":"perspective( 600px ) rotateY( -180deg )"});
	
    });  
});
$(function() {  
    $("#gali").click(function() {  
       
		$(".front").css({
		
		"-webkit-animation-transition":"all 1s ease",
		"-webkit-transform":"perspective( 600px ) rotateY( 0deg )"});
			
		$(".back").css({
		
		"-webkit-animation-transition":"all 1s eas",
		"-webkit-transform":"perspective( 600px ) rotateY( 180deg )"});
		
		$(".front").css({
		
		"-webkit-animation-transition":"all 1s ease",
		"-webkit-transform":"perspective( 600px ) rotateY( 0deg )"});
	
    });  
});
$(window).on('mousemove', function(event) {
    var width = $(window).width();
    var mouseX = event.pageX - (width * 0.5);
    var height = $(window).height();
    var mouseY = event.pageY - (height * 0.5);
    var xAngle = (mouseY / height) * 90;
    var yAngle = (mouseX / width) * 90;

    $('.cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
});
