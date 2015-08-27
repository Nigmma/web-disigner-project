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