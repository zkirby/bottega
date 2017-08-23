$(document).ready(function() {

	// Pages
	var $landing = $(".landing-body");
	var $about = $(".about-body");

	var current_page = $landing;


	// Pages Dict
	var pages = { "about":$about };


	$(".nav-item").click(function() {
		let page = this.className.slice(8, this.className.length);
		activate(pages[page.trim()], current_page);
	})

});


activate = (page, current_page) => {
	current_page.css("display", "none");
	page.css("display", "block");

	current_page = page;
};
