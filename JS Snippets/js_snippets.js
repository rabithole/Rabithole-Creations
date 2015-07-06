// This creates a selection box using AJAX. 
// CSS js creating syntax example with 'jQuery'.  
var selectionBox = null;

console.log("constructor called!");
function createSelection() {
	selectionBox = $("<div class='combo_list'></div>");
	// CSS creation code. 
	selectionBox.css({
		position: "absolute",
		top: combo.offset().top + combo.outerHeight() + 1,
		left: combo.offset().left + 1,
		width: combo.outerWidth() -2,
		overflowY: "auto",
		height: 96
	});
	$("body").append(selectionBox);
}
createSelection(); //This calls the function. 