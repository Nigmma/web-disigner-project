

$(function() {  
    $(".Products").click(function() {  
       
		$(".back").css({
		
		"-webkit-animation-transition":"all 1s ease",
		"-webkit-transform":"perspective( 600px ) rotateY( 0deg )"});
			
		$(".front").css({
		
		"-webkit-animation-transition":"all 1s ease",
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

$(function() {  
     
});
$(function() {  
    $(".cote1").click(function() {      
		$(".cubespinner").css({
		
		"-webkit-animation-transition":"all 1s ease",
		"-webkit-transform":"rotateY(-180deg) rotateZ(90deg)"});
    });  
});
$(function() {  
    $(".cote2").click(function() {      
		$(".cubespinner").css({
		
		"-webkit-animation-transition":"all 1s ease",
		"-webkit-transform":"rotateY(-90deg) rotateZ(90deg)"});	
    });  
});
$(function() {  
    $(".cote3").click(function() {      
		$(".cubespinner").css({
		
		"-webkit-animation-transition":"all 1s ease",
		"-webkit-transform":"rotateY(-270deg) rotateX(90deg)"});	
    });  
});