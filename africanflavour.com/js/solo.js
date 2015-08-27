
$(document).ready(function() {
	$('').fadeIn('slow');
$("#AFlogo").click(function () {	
		$(".box").hide(1000);
		$(".box2").hide(1000);
		$(".box3").hide(1000);
		});
$("#home").click(function () {	
		$(".box").show(1000);
		$(".box2").hide(1000);
		$(".box3").hide(1000);
		});
$("#services").click(function () {	
		$(".box2").show(1000);
		$(".box").hide(1000);
		$(".box3").hide(1000);
		});
$("#menu").click(function () {	
		$(".box3").show(1000);
		$(".box").hide(1000);
		$(".box2").hide(1000);
		});
});