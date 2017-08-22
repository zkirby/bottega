$(document).ready(function() {

	$nav_show = $("#nav-show");

	$(".hamburger").click(function() {
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			$nav_show.css("left", "-115%");
		} else {
			$(this).addClass("is-active");
			$nav_show.css("left", "-4%");
		}
	}) 

	$(".overlay").click(function() {
		if ($(".hamburger").hasClass("is-active")) {
			$(".hamburger").removeClass("is-active");
			$nav_show.css("left", "-115%");
		} else {
			$(".hamburger").addClass("is-active");
			$nav_show.css("left", "-4%");
		}
	}) 

	$(".about").click(function() {
		zenscroll.to(document.getElementsByClassName("about-container")[0]);
	});


});