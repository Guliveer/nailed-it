setInterval(function () {
	window.scrollTo(0, 0);

	var img = $("#DisplaySrc, #BgSrc");
	var imgNum = Math.ceil(Math.random() * imgCount);
	console.log(imgNum);
	var imgSrc = "ed_paznokcie/pic (" + imgNum + ").jpg";

	img.fadeOut(1000, function () {
		img.attr("src", imgSrc);
		img.fadeIn(1000);
	});
}, 15000);
