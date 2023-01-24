// Sleep function
async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

var lastImg = 0; // Declare a variable for later use

// Interval for the images change
setInterval(async function () {
	window.scrollTo(0, 0);

	var img = $("#DisplaySrc, #BgSrc"); // Set the image destination
	var imgNum = Math.ceil(Math.random() * imgCount); // Get a random image number between 1 and the number of images (from imgCount.js)

	// If the image is the same as the last one, pick a new one
	while (imgNum == lastImg) {
		imgNum = Math.ceil(Math.random() * imgCount);
	}

	var imgSrc = "pictures/pic (" + imgNum + ").jpg"; // Set the name of the source image

	// Transition the images
	img.fadeOut(1000, async function () {
		img.attr("src", imgSrc); // Set the source of the image
		await sleep(500);
		img.fadeIn(1000);
	});
}, 15000);
