$(window).resize(function () {
	var h = $(window).height();
	$(".block").css("height", h);
});
$(window).resize();

$(window).on("scroll", function () {
	clearTimeout($.data(this, "timer"));
	$.data(
		this,
		"timer",
		setTimeout(function () {
			$("html, body").animate(
				{
					scrollTop: $(".block:hover").offset().top,
				},
				100
			);
			event.preventDefault();
		}, 400)
	);
});
