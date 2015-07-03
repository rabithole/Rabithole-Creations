/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/

// Speed of the automatic slideshow
var slideshowSpeed = 10000;

// Variable to store the images we need to set as background
// which also includes some text and url's.
var photos = [ 
		{
		"title" : "",
		"image" : "s1_background.jpg",
		"url" : "",
		"firstline" : "",
		"secondline" : ""
	}, {
		"title" : "",
		"image" : "s2_background.jpg",
		"url" : "",
		"firstline" : "",
		"secondline" : ""
	}
	
];



$(document).ready(function() {
		
	// Backwards navigation
	$("#back").click(function() {
		stopAnimation();
		navigate("back");
	});
	
	// Forward navigation
	$("#next").click(function() {
		stopAnimation();
		navigate("next");
	});
	/*
	var interval;
	$("#control").toggle(function(){
		stopAnimation();
	}, function() {
		$(this).css({ "background-image" : "url(../images/slide_controls/main_page/btn_pause.png)" });// Change the background image to "pause"		
		navigate("next");	// Show the next image	
		interval = setInterval(function() {// Start playing the animation
			navigate("next");
		}, slideshowSpeed);
	});
	*/
	
	var activeContainer = 1;	
	var currentImg = 0;
	var animating = false;
	var navigate = function(direction) {
		// Check if no animation is running. If it is, prevent the action
		if(animating) {
			return;
		}
		
		// Check which current image we need to show
		if(direction == "next") {
			currentImg++;
			if(currentImg == photos.length + 1) {
				currentImg = 1;
			}
		} else {
			currentImg--;
			if(currentImg == 0) {
				currentImg = photos.length;
			}
		}
		
		// Check which container we need to use
		var currentContainer = activeContainer;
		if(activeContainer == 1) {
			activeContainer = 2;
		} else {
			activeContainer = 1;
		}
		
		showImage(photos[currentImg - 1], currentContainer, activeContainer);
		
	};
	
	var currentZindex = -1;
	var showImage = function(photoObject, currentContainer, activeContainer) {
		animating = true;
		
		// Make sure the new container is always on the background
		currentZindex--;
		
		// Set the background image of the new active container
		$("#headerimg" + activeContainer).css({
			"background-image" : "url(images/main_page/" + photoObject.image + ")",
			"display" : "block",
			"z-index" : currentZindex,

		});
		
		// Fade out the current container
		// and display the header text when animation is complete
		$("#headerimg" + currentContainer).fadeOut(function() {
			setTimeout(function() {
				
				animating = false;
			}, 2000);
		});
	};
	
	var stopAnimation = function() {
		// Change the background image to "play"
		$("#control").css({ "background-image" : "url(images/main_page/slide_controls/btn_play.png)" });
		
		// Clear the interval
		clearInterval(interval);
	};
	
	// We should statically set the first image
	navigate("next");
	
	// Start playing the animation
	interval = setInterval(function() {
		navigate("next");
	}, slideshowSpeed);
	
});