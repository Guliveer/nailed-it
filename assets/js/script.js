// Sleep function
async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// Declare a variables for later use
var imgNum = 1;
var lastImg = 1;

// Interval for the images change
setInterval(async function () {
	window.scrollTo(0, 0); // Scroll to the top of the page (just in case)

	// Pick a new image that's different from the last one
	do {
		imgNum = Math.ceil(Math.random() * imgCount); // Get a random image number between 1 and the number of images (imgCount <- from imgCount.js)
	} while (imgNum == lastImg); // Repeat until the image number is different from the last one

	lastImg = imgNum; // Update the last image number

	var imgSrc = "pictures/pic (" + imgNum + ").jpg"; // Set the name of the source image

	var img = $("#DisplaySrc, #BgSrc"); // Set the image destination
	// Transition the images
	img.fadeOut(1000, async function () {
		img.attr("src", imgSrc); // Set the source of the image
		await sleep(300);
		img.fadeIn(1000);
	});
}, 15000);
