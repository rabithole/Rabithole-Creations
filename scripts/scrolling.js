
$(window).scroll(function(event) {
	var scroll = $(window).scrollTop();
	console.log(scroll);

	var x = screen.width;

	if(x < 441) {
		return;
	}

	(function() {
		var dev = document.getElementById("media_links"); 

		if(scroll > 200) {
		dev.className = "media_div_right";
		}
		if(scroll < 70) {
		dev.className = "media_div_left";
		}	
	
	})();

	(function() {
		var dev = document.getElementsByClassName("media");
	
		for (var i = 0; i < dev.length; i++ + 1){
			var current = dev[i]; 

			if(scroll > 200) {
			current.className = "media_collapse";
			}
			if(scroll < 70) {
			current.className = "mediaExpand";
			}	
		}
	})();

	(function() {
		var dev = document.getElementsByTagName("img");
	
		var current = dev[0];

		if(scroll > 200) {
		current.className = "logoCollapse";
		}
		if(scroll < 70) {
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
			if(scroll < 70) {
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
			if(scroll < 70) {
				current.className = "headerExpand";
			}
		}	
	})();
});
