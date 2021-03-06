$(document).ready(function() {

	// Current View
	var current_page = $(".landing-body");

	$(".big-text").typeIt({
		strings: "Bottega"
	});

	$(".nav-item").click(function() {

		// Grab the page name and activate the page
		let page = this.className.slice(8, this.className.length);
		current_page = activate(page.trim(), current_page);
	})

});

// Function swaps displays on two pages
activate = (page, current_page) => {
	current_page.css("display", "none");

	current_page.removeClass("animate-page");

	let active_page = $("." + page + "-body");

	active_page.css("display", "block");

	active_page.addClass("animate-page");

	if (page == "about") {
		$('.descr-header').typeIt({
			strings: "We Are Creators",
			speed: 60
		});
	}

	return active_page;
};
