
$(window).scroll(function(event) {
	var scroll = $(window).scrollTop();
	console.log(scroll);
	var dev = document.getElementsByTagName("li");

	for (var i = 0; i<dev.length; i++){
		var current = dev[i]; 
		console.log(current);

		if(scroll > 10) {
		current.className = "scrollNav";
		}
		if(scroll < 9) {
		current.className = "zeroScroll";
		}
	}	
});
