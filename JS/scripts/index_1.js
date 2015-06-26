// JavaScript Document
/*
var li = document.getElementsByClassName("nav");

document.querySelector("li").addEventListener("mouseover", function(a) {
	console.log(a);
	if(a.target.li = li[0]{
		li[0].className = "navover";
	})
	//li[1].className = "navover";

});

document.querySelector("li").addEventListener("mouseout", function(e) {
	li[0].className = "nav";
	//alert("Why")
});
*/
/* JS II Lab 1 Assignment */

/* JS II Lab 1 Assignment */



var dev = document.getElementById("dev");
var creative = document.getElementById("creative");
var playground = document.getElementById("playground");
var employer = document.getElementById("employer");
var client = document.getElementById("client");

dev.onmouseover = function () {
	/*dev.style.color = "rgba(255,0,0,1)";
	dev.style.background = "rgba(12,197,232,1)";*/
	dev.className = "navover";
	
}

dev.onmouseout = function () {
	dev.className = "nav";
}

creative.onmouseover = function () {
	creative.className = "navover";
}

creative.onmouseout = function () {
	creative.className = "nav";
}

playground.onmouseover = function () {
	playground.className = "navover";
}

playground.onmouseout = function () {
	playground.className = "nav";
}

employer.onmouseover = function () {
	employer.className = "navover";
}

employer.onmouseout = function () {
	employer.className = "nav";
}

client.onmouseover = function () {
	client.className = "navover";
}

client.onmouseout = function () {
	client.className = "nav";
}