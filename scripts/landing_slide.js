(function() {
	var request;
/* This is for older browser compatability */

if(window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObect("Microsoft.XMLHTTP");
}

request.open('GET', 'json/landing.json', true);
request.onreadystatechange = function() {
	if((request.status === 200) && (request.readyState === 4)) {
		
		var img =  JSON.parse(request.responseText);

		
		var body = document.getElementsByTagName("body");
		var i = 0;		
		function stepThrough() {
		//section_2.innerHTML = "<h1>Hello World!</h1><br>" + "<h2>Here I Come</h2>";	
		
		body[0].style.backgroundImage = "url(" + img.landingImage[i].url + ")";
		i += 1;
			setInterval(function() {
				if (i < img.landingImage.length) {
					body[0].style.backgroundImage = "url(" + img.landingImage[i].url + ")";			
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
})();
