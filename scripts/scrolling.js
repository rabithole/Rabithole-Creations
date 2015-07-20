//window.addEventListener("scroll", navScroll);
//window.onload = selectStyle;

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
		current.className = "";
		}
	}

	
	
});

/*
function selectStyle(event, scroll) {
	function navScroll() {
		console.log("Page is scrolling");

		var cssId = 'myCss';  // you could encode the css path itself to generate id..
		
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'css/scroll.css';
	    link.media = 'all';
	    head.appendChild(link);
	}

	function zeroScroll() {
		console.log("Zero scroll");

		var cssId = 'myCss';  // you could encode the css path itself to generate id..
		
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'css/nav.css';
	    link.media = 'all';
	    head.appendChild(link);
	}
}

if(scroll < 9) {
		console.log("Page is scrolling");

		var cssId = 'myCss';  // you could encode the css path itself to generate id..
		
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'css/nav.css';
	    link.media = 'all';
	    head.appendChild(link);
	}
	if(scroll > 10) {
		console.log("Zero scroll");

		var cssId = 'myCss';  // you could encode the css path itself to generate id..
		
	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'css/scroll.css';
	    link.media = 'all';
	    head.appendChild(link);
	} 
*/