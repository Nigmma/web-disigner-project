
$(document).ready(function()//When the dom is ready or just add it if you already have a .ready function
{
  $(".logo").addClass("logo2");
  $(".ctnermain").addClass("ctnerhome");
 $(".PAGEHOME").fadeIn(1000);
 $("#video1").get(0);
 $("#video1").play();
});
$(document).ready(function() {
	
$(".coldDrinks").click(function (event) {
		$(".MENCOLD").fadeIn(1000);
		$(".MENHOT").fadeOut(1000);
		$(".MENSMO").fadeOut(1000);
		$(".MENFLAV").fadeOut(1000);
		$(".MENEXO").fadeOut(1000);
		
		});
	
$(".smooth").click(function() {
		$(".MENSMO").fadeIn(1000);
		$(".MENHOT").fadeOut(1000);
		$(".MENCOLD").fadeOut(1000);
		$(".MENFLAV").fadeOut(1000);
		$(".MENEXO").fadeOut(1000);
		});
		
$(".flavorHookah").click(function (event) {
		$(".MENFLAV").fadeIn(1000);
		$(".MENHOT").fadeOut(1000);
		$(".MENSMO").fadeOut(1000);
		$(".MENCOLD").fadeOut(1000);
		$(".MENEXO").fadeOut(1000);
		});
		
$(".hotDrinks").click(function (event) {
		$(".MENHOT").fadeIn(1000);
		$(".MENSMO").fadeOut(1000);
		$(".MENCOLD").fadeOut(1000);
		$(".MENFLAV").fadeOut(1000);
		$(".MENEXO").fadeOut(1000);
		});
		
$(".exoticHookah").click(function (event) {
		$(".MENEXO").fadeIn(1000);
		$(".MENSMO").fadeOut(1000);
		$(".MENCOLD").fadeOut(1000);
		$(".MENFLAV").fadeOut(1000);
		$(".MENHOT").fadeOut(1000);
		});

		
		
});
