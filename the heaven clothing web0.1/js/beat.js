$(document).ready(function() {
$("#3line").click(function () {
		$(".divmenu").slideToggle(1000);
		$(".login").hide(1000);
		});

$("#logobig").click(function (event) {
		$("#block").fadeIn(2000);
		$("#pilier").hide(1000);
		$("#pilierleft").hide(1000);
		$("#logobig").hide(1000);
		$("#aile").hide(1000);
		$("#aileg").hide(1000);
		});
$("#logo").click(function (event) {
		$("#block").hide(1000);
		$("#logobig").show(1000);
		$("#pilier").show(2000);
		$("#pilierleft").show(2000);
		$("#aile").show(3000);
		$("#aileg").show(3000);
		
		
		
		});
		

$("#logo").mouseover(function(event) {
			
		$("#cloudright").animate({
			height: "370px",
			width: "800px",
		},200);
	}).mouseout(function(event) {
			
		$("#cloudright").animate({
			height: "474px",
			width: "979px",
		},500);
			$("#cloudleft").animate({
			height: "370px",
			width: "800px",
		},200);
	}).mouseout(function(event) {
			
		$("#cloudleft").animate({
			height: "474px",
			width: "979px",
		},500);
	});
	
	
	
$("#sidebar2").mouseover(function(event){
style.animationPlayState = "paused";


});
		});	