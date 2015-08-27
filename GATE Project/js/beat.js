

var audio;
function initAudioPlayer(){
	audio = new Audio();
	audio.src= "sound/Cdoor.mp3";
	audio.loop = true;
	audio.play();
window.addEventListener("load",initAudioPlayer);	
	
	}
		
var aud = document.getElementById("#myAudio");	
$("#Open").click(function () {
	$("myAudio").play();
});
$(document).ready(function()//When the dom is ready or just add it if you already have a .ready function
{

$("#Open").click(function (event) {
	$(".porteB").addClass("PdroiteOpen");
	$(".porteB").removeClass("PdroiteClose");
	$(".porteIn").fadeIn(500);
	
		});
$("#Close").click(function (event) {
	$(".porteB").addClass("PdroiteClose");
	$(".porteB").removeClass("PdroiteOpen");
		$(".porteIn").fadeOut(500);
		});

});
$(document).ready(function() {

$("#Open").click(function (event) {
	
	$(".porteA").addClass("PgaucheOpen");
	$(".porteA").removeClass("PgaucheClose");
	
		
		});
$("#Close").click(function (event) {
	
	$(".porteA").addClass("PgaucheClose");
	$(".porteA").removeClass("PgaucheOpen");
		});
		
});

