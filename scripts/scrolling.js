window.addEventListener("scroll", navScroll);

function navScroll() {
	var navChange = document.getElementById("nav");

	console.log("Page is scrolling")
	navChange.style.cssText = 
	"position: relative; left: 50px;";

	var navli = document.getElementsByClassName("nav_li");
}