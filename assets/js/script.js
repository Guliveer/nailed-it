// Sleep function
async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

var lastImg = 0; // Declare a variable for later use (contains the last image number)

// Interval for the images change
setInterval(async function () {
	window.scrollTo(0, 0); // Scroll to the top of the page (just in case)

	var img = $("#DisplaySrc, #BgSrc"); // Set the image destination

	// Pick a new image that's different from the last one
	do {
		imgNum = Math.ceil(Math.random() * imgCount); // Get a random image number between 1 and the number of images (imgCount -> from imgCount.js)
	} while (imgNum == lastImg); // Repeat until the image number is different from the last one

	lastImg = imgNum; // Set the last image to the current one

	var imgSrc = "pictures/pic (" + imgNum + ").jpg"; // Set the name of the source image

	// Transition the images
	img.fadeOut(1000, async function () {
		img.attr("src", imgSrc); // Set the source of the image
		await sleep(500);
		img.fadeIn(1000);
	});
}, 15000);
