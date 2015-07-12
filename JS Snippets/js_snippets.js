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

// Final working code for section one landing page slideshow. 
function stepThrough() {		
			setInterval(function() {
				if (i < img.img.length) {
			    	var output = "";
					section_1.style.backgroundImage = "url(" + img.img[i].url + ")";
					section_1.innerHTML = output + "<img src='images/backgrounds/rabithole_logo.png'><br>";
					section_2.innerHTML = "<h1>Hello World!</h1><br>" + "<h5>Here I Come</h5>";
					console.log("Here");
					i += 1;
				} else {
					i = 0;
				}
			}, 5000);
		} 
		stepThrough();
// Final working code for section one landing page slideshow.




// Last commit for section on ajax slide show 7/12/2015
var request;
/* This is for older browser compatability */

if(window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObect("Microsoft.XMLHTTP");
}

request.open('GET', 'json/images.json', true);
request.onreadystatechange = function() {
	if((request.status === 200) && (request.readyState === 4)) {
		
		var img =  JSON.parse(request.responseText);
		console.log(img);

		function fadeOut() {
			section_1.className = "fadeOut";
		}

		function fadeIn() {
				section_1.className = "fadeIn";
			}

		var i = 0;		
		function stepThrough() {
		section_2.innerHTML = "<h1>Hello World!</h1><br>" + "<h2>Here I Come</h2>";	
			setInterval(function() {
				if (i < img.img.length) {
					section_1.style.cssText = "background-image: url(" + img.img[i].url + ");";			
					console.log("Here");	
					i += 1;	
				} else {
					i = 0;
					} 
			}, 5000);
		} 
		stepThrough();
	}
}
request.send();


