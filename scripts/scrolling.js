
$(window).scroll(function(event) {
	var scroll = $(window).scrollTop();
	console.log(scroll);

	(function() {
		var dev = document.getElementsByTagName("img");
	
			var current = dev[0];

			if(scroll > 200) {
			current.className = "logoCollapse";
			}
			if(scroll < 90) {
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
			if(scroll < 150) {
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
			if(scroll < 90) {
			current.className = "headerExpand";
			}
		}	
	})();

	
});
