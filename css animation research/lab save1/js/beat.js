

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
		"display":"block",
		"-webkit-animation-transition":"all 1s ease",
		"-webkit-transform":"perspective( 600px ) rotateY( 0deg )"});
			
		$(".front").css({
		"visibility":"hidden",
		"-webkit-animation-transition":"all 1s eas",
		"-webkit-transform":"perspective( 600px ) rotateY( -180deg )"});
	
    });  
});
$(function() {  
    $("#gali").click(function() {  
       
		$(".front").css({
		"display":"block",
		"-webkit-animation-transition":"all 1s ease",
		"-webkit-transform":"perspective( 600px ) rotateY( 0deg )"});
			
		$(".back").css({
		"visibility":"hidden",
		"-webkit-animation-transition":"all 1s eas",
		"-webkit-transform":"perspective( 600px ) rotateY( 180deg )"});
	
    });  
});
$(function() { 
var xx = document.getElementById("id13959");
var button1 = document.getElementById("b1");
var button2 = document.getElementById("b2");

button1.addEventListener("click", function () {xx.style.color="green";} , false);
button2.addEventListener("click", function () {xx.style.color="blue";} , false);  });

$(function() {   
var img = document.images[0];
img.style.setProperty("-webkit-transition", "left 2s linear");
var slide = function(){
    img.style.setProperty("left", "400px");
    setTimeout(function(){
        img.style.setProperty("left", "0px");
        setTimeout(slide,1000);    
    },2000);
}

slide();});
