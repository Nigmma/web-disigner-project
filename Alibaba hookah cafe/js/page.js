$(document).ready(function() {
$(".home").click(function (event) {
		$(".logo").addClass(".logobig");		
		
				
		});

$(".menu").click(function (event) {
	$(".PAGEMENU").fadeIn(1000);
	$(".PAGEHOME").fadeOut();
	$(".PAGEEVENT").fadeOut();
	$(".PAGEBLOG").fadeOut();
	$(".PAGECONTACT").fadeOut();
	$(".PAGEABOUT").fadeOut();
	$(".logo").removeClass("logo2");
	$(".ctnermain").removeClass("ctnerhome");
});
$(".home").click(function (event) {
	$(".PAGEHOME").fadeIn(1000);
	$(".PAGEMENU").fadeOut();
	$(".PAGEEVENT").fadeOut();
	$(".PAGEBLOG").fadeOut();
	$(".PAGECONTACT").fadeOut();
	$(".PAGEABOUT").fadeOut();
	$(".logo").removeClass("logo2");
	$(".ctnermain").removeClass("ctnerhome");
});	

$(".event").click(function (event) {
	$(".PAGEEVENT").fadeIn(1000);
	$(".PAGEMENU").fadeOut();
	$(".PAGEHOME").fadeOut();
	$(".PAGEBLOG").fadeOut();
	$(".PAGECONTACT").fadeOut();
	$(".PAGEABOUT").fadeOut();
	$(".logo").removeClass("logo2");
	$(".ctnermain").removeClass("ctnerhome");
	
});	
$(".home").click(function(event) {
			$(".logo").addClass("logo2");
		$(".ctnermain").addClass("ctnerhome");

});
/*
$(".home").click(function(event) {
			
		$(".logo").animate({
			height: "500px",
			width: "500px",
		},200);

});		*/	
		});