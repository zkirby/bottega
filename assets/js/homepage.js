$(document).ready(function() {

	$nav_show = $("#nav-show");

	$(".hamburger").click(function() {
		console.log($nav_show.css("left"));
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			$nav_show.css("left", "-115%");
		} else {
			$(this).addClass("is-active");
			$nav_show.css("left", "-4%");
		}
	}) 


});