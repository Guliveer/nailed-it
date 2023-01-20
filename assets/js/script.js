async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

setInterval(async function () {
	window.scrollTo(0, 0);

	var img = $("#DisplaySrc, #BgSrc");
	var imgNum = Math.ceil(Math.random() * imgCount);
	var imgSrc = "pictures/pic (" + imgNum + ").jpg";

	img.fadeOut(1000, async function () {
		img.attr("src", imgSrc);
		await sleep(500);
		img.fadeIn(1000);
	});
}, 15000);
