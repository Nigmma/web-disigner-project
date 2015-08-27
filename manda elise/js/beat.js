$(document).ready(function() {
$("#3line").click(function (event) {
		$(".divmenu").slideToggle(1000);
		$(".login").hide(1000);
		});
	
$("#3line").dblclick(function() {
    
		$(".login").show(1000);
		$(".divmenu").slideUp(1000);
		});
$("#columnmenu").click(function (event) {
		$(".login").show(1000);
		$(".divmenu").slideUp(1000);
		});
$("#3line").ondblclick=function(){SomeJavaScriptCode};
		});
		