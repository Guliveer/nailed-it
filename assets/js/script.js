setInterval(function () {
    // Scroll to top
    window.scrollTo(0, 0);

    // Select random photo
    var imgNum = Math.floor(Math.random() * 200) + 1;
    var imgSrc = "assets/img/pic (" + imgNum + ").jpg";
    var imgTag = "<img src='" + imgSrc + "' alt=''>";
    
    $("#imgDisplay, #imgBg").html(imgTag)
    
}, 15000);
