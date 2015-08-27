$(document).ready(function() {
$(".GRADESIGN").click(function (event) {
		$(".BOXGRA").slideToggle(1000);
		$(".BOXAUD").slideUp(1000);
		$(".BOXWEB").slideUp(1000);
		$(".BOXVID").slideUp(1000)
		});
	
$(".WEBDESIGN").click(function() {
		$(".BOXWEB").slideToggle(1000);
		$(".BOXAUD").slideUp(1000);
		$(".BOXGRA").slideUp(1000);
		$(".BOXVID").slideUp(1000);
		
		});
$(".VIDEO").click(function (event) {
		$(".BOXVID").slideToggle(1000);
		$(".BOXAUD").slideUp(1000);
		$(".BOXWEB").slideUp(1000);
		$(".BOXGRA").slideUp(1000);
		});
		
$(".AUDIO").click(function (event) {
		$(".BOXAUD").slideToggle(1000);
		$(".BOXWEB").slideUp(1000);
		$(".BOXGRA").slideUp(1000);
		$(".BOXVID").slideUp(1000);
		});
		
$(".services").click(function (event) {
		$(".BOXAUD").slideToggle(1000);
		$(".BOXWEB").slideUp(1000);
		$(".BOXGRA").slideUp(1000);
		$(".BOXVID").slideUp(1000);})
		});
		
$(".blog").click(function (event) {
		$(".BOXAUD").show(1000);
		$(".BOXWEB").hide(1000);
	});
		
		
function changeBG(el,clr){
	var elem = document.getElementById(el);
	elem.style.transition = "background 1.0s linear 0s";
	elem.style.background = clr;
}


$(document).ready(function(){
  $(".blog").click(function(){
    $("back").addclass(".front");
	elem.style.transition = "background 1.0s linear 0s";
	elem.style.background = clr;
  });
});