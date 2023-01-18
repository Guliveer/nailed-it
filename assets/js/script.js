async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

setInterval(function () {
	window.scrollTo(0, 0);

	var img = $("#DisplaySrc, #BgSrc");
	var imgNum = Math.ceil(Math.random() * imgCount);
	var imgSrc = "ed_paznokcie/pic (" + imgNum + ").jpg";

	img.fadeOut(1000, async function () {
		img.attr("src", imgSrc);
		await sleep(500);
		img.fadeIn(1000);
	});
}, 15000);
