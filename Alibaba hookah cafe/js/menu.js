$(document).ready(function() {
	

$(".menu").click(function (event) {
	$(".PAGEMENU").fadeIn(1000);
		$(".BOXCOLD").slideUp(1000);
		$(".BOXHOT").slideUp(1000);
		$(".BOXSMO").slideUp(1000);
		$(".BOXFLAV").slideUp(1000);
		$(".BOXEXO").slideUp(1000);
		
		
		});
$(".coldDrinks").click(function (event) {
		$(".BOXCOLD").slideToggle(1000);
		$(".BOXHOT").slideUp(1000);
		$(".BOXSMO").slideUp(1000);
		$(".BOXFLAV").slideUp(1000);
		$(".BOXEXO").slideUp(1000);
		
		});
	
$(".smooth").click(function() {
		$(".BOXSMO").slideToggle(1000);
		$(".BOXHOT").slideUp(1000);
		$(".BOXCOLD").slideUp(1000);
		$(".BOXFLAV").slideUp(1000);
		$(".BOXEXO").slideUp(1000);
		});
		
$(".flavorHookah").click(function (event) {
		$(".BOXFLAV").slideToggle(1000);
		$(".BOXHOT").slideUp(1000);
		$(".BOXSMO").slideUp(1000);
		$(".BOXCOLD").slideUp(1000);
		$(".BOXEXO").slideUp(1000);
		});
		
$(".hotDrinks").click(function (event) {
		$(".BOXHOT").slideToggle(1000);
		$(".BOXSMO").slideUp(1000);
		$(".BOXCOLD").slideUp(1000);
		$(".BOXFLAV").slideUp(1000);
		$(".BOXEXO").slideUp(1000);
		});
		
$(".exoticHookah").click(function (event) {
		$(".BOXEXO").slideToggle(1000);
		$(".BOXSMO").slideUp(1000);
		$(".BOXCOLD").slideUp(1000);
		$(".BOXFLAV").slideUp(1000);
		$(".BOXHOT").slideUp(1000);
		})
		});