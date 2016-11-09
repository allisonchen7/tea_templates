var width = $(window).width();

if ( width < 500 ) {
	// select id nav-toggle and remove the class hidden
	$("#nav-toggle").removeClass("hidden");
	$(".nav-main").addClass("hidden");

	// select the aria-hidden attr and make it false 
	$("#nav-toggle").attr("aria-hidden", "false");
	$(".nav-main").attr("aria-hidden", "true");

}

// toggle menu hidden and not hidden 
$("#nav-toggle").click( 
	function() {

		//toggleClass to toggle the click on menu 
		$(".nav-main").toggleClass("hidden");
		// if nav items are hidden then it is set to hidden
		if ($(".nav-main").hasClass("hidden")) {
		 $(".nav-main").attr("aria-hidden", "true");
		} else {
		 $(".nav-main").attr("aria-hidden", "false");
		}

}
);