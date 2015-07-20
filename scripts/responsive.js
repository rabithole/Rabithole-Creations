(function() {
	var x = screen.width;
	console.log(x);

// Mobile phones
	if(x < 440) {
		var cssId = 'myCss';  // you could encode the css path itself to generate id..
		if (!document.getElementById(cssId))
		{
		    var head  = document.getElementsByTagName('head')[0];
		    var link  = document.createElement('link');
		    link.id   = cssId;
		    link.rel  = 'stylesheet';
		    link.type = 'text/css';
		    link.href = 'css/mobile.css';
		    link.media = 'all';
		    head.appendChild(link);
		}
	}

	// Pad
	if(x < 1300) {
		var cssId = 'myCss';  // you could encode the css path itself to generate id..
		if (!document.getElementById(cssId))
		{
		    var head  = document.getElementsByTagName('head')[0];
		    var link  = document.createElement('link');
		    //link.id   = cssId;
		    link.rel  = 'stylesheet';
		    //link.type = 'text/css';
		    link.href = 'css/pad.css';
		    //link.media = 'all';
		    head.appendChild(link);
		}  
	}

	// Laptops
	if(x < 1860 && x > 1301 ) {
		var cssId = 'myCss';  // you could encode the css path itself to generate id..
		if (!document.getElementById(cssId))
		{
		    var head  = document.getElementsByTagName('head')[0];
		    var link  = document.createElement('link');
		    //link.id   = cssId;
		    link.rel  = 'stylesheet';
		    //link.type = 'text/css';
		    link.href = 'css/lap_top.css';
		    //link.media = 'all';
		    head.appendChild(link);
		}  
	}

	// Larger than 1860 
	if(x > 1861) {
		var cssId = 'myCss';  // you could encode the css path itself to generate id..
		if (!document.getElementById(cssId))
		{
		    var head  = document.getElementsByTagName('head')[0];
		    var link  = document.createElement('link');
		    //link.id   = cssId;
		    link.rel  = 'stylesheet';
		    //link.type = 'text/css';
		    link.href = 'css/rabit_2.css';
		    //link.media = 'all';
		    head.appendChild(link);
		}  
	}
})();