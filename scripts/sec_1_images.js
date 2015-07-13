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

		

		var i = 0;		
		function stepThrough() {
		//section_2.innerHTML = "<h1>Hello World!</h1><br>" + "<h2>Here I Come</h2>";	
		section_1.style.cssText = "background-image: url(" + img.img[i].url + ");";
		i += 1;
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