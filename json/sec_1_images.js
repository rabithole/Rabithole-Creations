
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
		//console.log(request);
		//console.log(request.responseText);
		//console.log(request.slide.sec_1_slide.s1_background);
		var img =  JSON.parse(request.responseText);
		console.log(img);

		var output = "";
		output += section_1.style.backgroundImage = "url('" + img.img[0].url + "')";
		section_1.innerHTML = output + "<img src='images/backgrounds/rabithole_logo.png'><br>";
		section_2.innerHTML = "<h1>Hello World!</h1><br>" + "<h5>Here I Come</h5>";
		
		var i = 0;

		
		function stepThrough() {		
			setInterval(function() {
				if (i < img.img.length) {
			    	var output = "";
					//section_1.style.backgroundImage = "url(" + img.img[i].url + ")";
					section_1.style.cssText = 
						"background-image:url(" + img.img[i].url + "); opacity: 0; transition-property: opacity; transition-duration: 2s;";
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
		
		

		/*
		for(i = 0; i < img.img.length; i++) {
			//setInterval(function(){loop()}, 3000);
console.log(i); 

			function loop() {
		    	var output = "";
				output += section_1.style.backgroundImage = "url('" + img.img[i].url + "')";
				section_1.innerHTML = output + "<img src='images/backgrounds/rabithole_logo.png'><br>";
				section_2.innerHTML = "<h1>Hello World!</h1><br>" + "<h5>Here I Come</h5>";
				console.log("Here");
			}*/
		
	}
}
request.send();
	