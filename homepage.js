$(document).ready(function() {

	// Pages
	var $landing = $(".landing-body");
	var $about = $(".about-body");
	var $events = $(".events-body")

	// Current View
	var current_page = $landing;

	// Pages Dict
	var pages = { "about":$about, "events":$events, "apply":$events };


	$(".nav-item").click(function() {
		let page = this.className.slice(8, this.className.length);
		current_page = activate(pages[page.trim()], current_page);
	})

});


activate = (page, current_page) => {
	current_page.css("display", "none");
	page.css("display", "block");

	return page;
};
