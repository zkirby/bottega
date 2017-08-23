$(document).ready(function() {

	// Current View
	var current_page = $(".landing-body");;

	$(".nav-item").click(function() {

		// Grab the page name and activate the page
		let page = this.className.slice(8, this.className.length);
		current_page = activate(page.trim(), current_page);
	})

});

// Function swaps displays on two pages
activate = (page, current_page) => {
	current_page.css("display", "none");

	let active_page = $("." + page + "-body");

	active_page.css("display", "block");

	return active_page;
};
