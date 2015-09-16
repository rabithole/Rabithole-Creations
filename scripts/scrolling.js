
$(window).scroll(function(event) {
	var scroll = $(window).scrollTop();
	console.log(scroll);

/*	function scrollCounter() {
		var scrollCount = 0;

		if(document.scroll = true) {
			scrollCount + 1;
		}
	}
	scrollCounter(); */

	var x = screen.width;

	if(x < 750) {
		return;
	}

	(function() {
		var dev = document.getElementById("media_links"); 

		if(scroll > 200) {
		dev.className = "media_div_right";
		}
		if(scroll < 70 && dev.className == "media_div_right") {
		dev.className = "media_div_left";
		}	
	
	})();

	(function() {
		var dev = [].slice.call(document.getElementsByTagName("img"));
		var img = dev.slice(1,4);

		for (var i = 0; i < img.length; i++ + 1){
			//var current = img[i]; 

			if(scroll > 200) {
			img[i].className = "media_collapse";
			}
			if(scroll < 70 && img[i].className == "media_collapse") {
			img[i].className = "mediaExpand";
			}	
		}
	})();

	(function() {
		var dev = document.getElementsByTagName("img");
	
		var current = dev[0];

		if(scroll > 200) {
		current.className = "logoCollapse";
		}
		if(scroll < 70 && current.className == "logoCollapse") {
		current.className = "logo";
		}
	})();

	(function() {
		var dev = document.getElementsByTagName("li");

		for (var i = 0; i < dev.length; i++){
			var current = dev[i]; 

			if(scroll > 200) {
			current.className = "scrollNav";
			}
			if(scroll < 70 && current.className == "scrollNav") {
			current.className = "zeroScroll";
			}
		}	
	})();
		
	(function() {
		var dev = document.getElementsByTagName("header");

		for (var i = 0; i < dev.length; i++){
			var current = dev[i]; 

			if(scroll > 200) {
			current.className = "headerCollapse";
			}
			if(scroll < 70 && current.className == "headerCollapse") {
				current.className = "headerExpand";
			}
		}	
	})();
});
