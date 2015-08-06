var currImage = 0;                              //Current Visible Slide
var interval = 5000;							//Time between slides in millisecs
var imageFolder = "assets/Slideshow/";			//Folder path

//Array of Slides
var imageNum = 0;
var imageArray = new Array();
imageArray[imageNum++] = ("assets/Slideshow/0.jpg");
imageArray[imageNum++] = ("assets/Slideshow/1.jpg");

var totalImages=imageArray.length;    			//Total no of slides


function getNextImage()
{
	imageNum = (++imageNum) % totalImages;
	
	var new_image = imageArray[imageNum];
	return (new_image);
}

function getPrevImage()
{
	imageNum = (--imageNum) % totalImages;
	var new_image = imageArray[imageNum];
	return (new_image);
}

function prevImage(place)
{
	var new_image=getPrevImage();
	document.getElementById(place).src = new_image;
}

function nextImage(place)
{
	var new_image=getNextImage();
	document.getElementById(place).src = new_image;
}

function slideShow(place)
{
	
	setInterval(function(){var new_image=getNextImage();
	document.getElementById(place).src = new_image;}, interval);
}