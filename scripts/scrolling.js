window.addEventListener("scroll", navScroll);
window.onload = zeroScroll;
//var navClick = document.getElementById("clickNav");
//navClick.onclick = zeroScroll();

function navScroll() {
	var navChange = document.getElementById("nav");

	console.log("Page is scrolling")

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
	console.log("Page is scrolling")

	var cssId = 'myCss';  // you could encode the css path itself to generate id..
	if (!document.getElementById(cssId))
	{
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


