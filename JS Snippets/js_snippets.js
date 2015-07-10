// This creates a selection box using AJAX. 
// CSS js creating syntax example with 'jQuery'.  
var selectionBox = null;

console.log("constructor called!");
function createSelection() {
	selectionBox = $("<div class='combo_list'></div>");
	// CSS creation code. 
	selectionBox.css({
		position: "absolute",
		top: combo.offset().top + combo.outerHeight() + 1,
		left: combo.offset().left + 1,
		width: combo.outerWidth() -2,
		overflowY: "auto",
		height: 96
	});
	$("body").append(selectionBox);
}
createSelection(); //This calls the function. 


// Working json script for testing. 
{
	"full_name" : "Robert Kulp",
	"title" 	: "Staff Author",
	"links"     : [
		{"blog"		: "http://iviewssource.com"},
		{"facebook" : "http://facebook.com/iviewssource"}
	]
}

// Main page section 1 background url
url('images/main_page/sec_1_slide/s1_background.jpg')



// Working Code with JSON 
var request;
/* This is for older browser compatability */

if(window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObect("Microsoft.XMLHTTP");
}
//var section_1 = document.getElementById("section_1");

request.open('GET', 'json/images.json', true);
request.onreadystatechange = function() {
	if((request.status === 200) && (request.readyState === 4)) {
		console.log(request);
		console.log(request.responseText);
		//console.log(request.slide.sec_1_slide.s1_background);
		var img = JSON.parse(request.responseText);
		console.log(img);

		//for(i = 0; i < img.length; i++) {
				var output = "";
				output += section_1.style.backgroundImage = "url('" + img.s1_background + "')";
				section_1.innerHTML = output + "<img src='images/backgrounds/rabithole_logo.png'><br>";
				section_2.innerHTML = "<h1>Hello World!</h1><br>" + "<h5>Here I Come</h5>";


			//}

		//var slide_1_image = request.images.sec_1_slide.s1_background;
		//section_1.style.backgroundImage = "url('images/main_page/sec_1_slide/s1_background.jpg')";
	}
};
request.send();


/*
$(document).ready(function() {

$.getJSON('http://www.rabithole.com/json/images.json', function(slide) {
	console.log("Hello World!");

	var output = "";
	output += section_1.style.backgroundImage = "url('images/main_page/sec_1_slide/s1_background.jpg')";
	section_1.innerHTML = output + "<img src='images/backgrounds/rabithole_logo.png'>";
	}); 
});	
*/		

// Working json
{
	"s1_background" : "images/main_page/sec_1_slide/s1_background.jpg",
	"s2_background" : "images/main_page/sec_1_slide/s2_background.jpg"
}



// Working on image slider imcrementing. 
var request;
/* This is for older browser compatability */

if(window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObect("Microsoft.XMLHTTP");
}
//var section_1 = document.getElementById("section_1");

request.open('GET', 'json/images.json', true);
request.onreadystatechange = function() {
	if((request.status === 200) && (request.readyState === 4)) {
		console.log(request);
		console.log(request.responseText);
		//console.log(request.slide.sec_1_slide.s1_background);
		var img =  JSON.parse(request.responseText);
		console.log(img);

		var output = "";
		output += section_1.style.backgroundImage = "url('images/main_page/sec_1_slide/s1_background.jpg')";
		section_1.innerHTML = output + "<img src='images/backgrounds/rabithole_logo.png'><br>";
		section_2.innerHTML = "<h1>Hello World!</h1><br>" + "<h5>Here I Come</h5>";

		var slideTimer;

		//function timer() {	
				function imgSlider() {
					for(i = 0; i < img.img.length; i++) {
						var output = "";
						output += section_1.style.backgroundImage = "url('" + img.img[i].url + "')";
						section_1.innerHTML = output + "<img src='images/backgrounds/rabithole_logo.png'><br>";
						section_2.innerHTML = "<h1>Hello World!</h1><br>" + "<h5>Here I Come</h5>";
					//alert("Line 26");
					}
				}
				imgSlider();
		//}
		//timer();

		
		//var slide_1_image = request.images.sec_1_slide.s1_background;
		//section_1.style.backgroundImage = "url('images/main_page/sec_1_slide/s1_background.jpg')";
	}
};
request.send();


/*
$(document).ready(function() {

$.getJSON('http://www.rabithole.com/json/images.json', function(slide) {
	console.log("Hello World!");

	var output = "";
	output += section_1.style.backgroundImage = "url('images/main_page/sec_1_slide/s1_background.jpg')";
	section_1.innerHTML = output + "<img src='images/backgrounds/rabithole_logo.png'>";
	}); 
});	
*/		



