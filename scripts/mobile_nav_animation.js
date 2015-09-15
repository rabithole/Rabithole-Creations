(function() {
	var x;
	document.getElementById("clickNav").addEventListener("click", navClick);

	x = clickNav;
})();

function navClick() {
	alert("click event");
	console.log(clickNav);
}
