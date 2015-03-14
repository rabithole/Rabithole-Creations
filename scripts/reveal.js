// JavaScript Document
var placeholder;

var nav = document.getElementsByName("nav_tab");


window.onload = Init;

function Init() {
	var photo_tab = document.getElementById("photo_tab");
	var web_tab = document.getElementById("web_tab");
	var skills_tab = document.getElementById("skills_tab");
	var logo_tab = document.getElementById("logo_tab");
	var learning_tab = document.getElementById("learning_tab");
	var contact_tab = document.getElementById("contact_tab");
	var current_tab = document.getElementById("current_tab");
	
	var photo = document.getElementById("photo");
	var skills = document.getElementById("skills");
	var web_port = document.getElementById("web_port");
	var contact = document.getElementById("contact");
	var logo = document.getElementById("logo");
	var learning = document.getElementById("learning");
	
	
	

	nav[5].onclick = 
		function() {
			skills.className = "reveal";
			photo.className = "hide";
			web_port.className = "hide";
			contact.className = "hide";
			logo.className = "hide";
			learning.className = "hide";
			
			nav[5].setAttribute("style" , "z-index: 110;");
			nav[3].setAttribute("style" , "z-index: 7;");
			nav[4].setAttribute("style" , "z-index: 7;");
			
		};
	
	nav[3].onclick = 
		function() {
			skills.className = "hide";
			photo.className = "reveal";
			web_port.className = "hide";
			contact.className = "hide";
			logo.className = "hide";
			learning.className = "hide";
			
			/*current_tab.innerHTML = web_tab.innerHTML;
			web_tab.innerHTML = photo_tab.innerHTML;
			photo_tab.innerHTML = current_tab.innerHTML;
			*/
			nav[3].setAttribute("style" , "z-index: 110;");
			nav[4].setAttribute("style" , "z-index: 7;");
			nav[5].setAttribute("style" , "z-index: 7;");
		};
	
	nav[4].onclick = 
		function() {
			skills.className = "hide";
			photo.className = "hide";
			web_port.className = "reveal";
			contact.className = "hide";
			logo.className = "hide";
			learning.className = "hide";
			
			nav[4].setAttribute("style" , "z-index: 110;");
			nav[3].setAttribute("style" , "z-index: 7;");
			nav[5].setAttribute("style" , "z-index: 7;");
			
		};
		
	nav[0].onclick = 
		function() {
			contact.className = "reveal";
			skills.className = "hide";
			photo.className = "hide";
			web_port.className = "hide";
			logo.className = "hide";
			learning.className = "hide";
			
			/*current_tab.innerHTML = web_tab.innerHTML;
			web_tab.innerHTML = contact_tab.innerHTML;
			contact_tab.innerHTML = current_tab.innerHTML;
			*/
			/*placeholder = nav[0].innerHTML;
			nav[0].innerHTML = nav[3].innerHTML;
			nav[3].innerHTML = placeholder;
			
			nav[4].setAttribute("style" , "z-index: 7;");
			nav[3].setAttribute("style" , "z-index: 110");
			*/
		};
		
	nav[2].onclick = 
		function() {
			logo.className = "reveal";
			contact.className = "hide";
			skills.className = "hide";
			photo.className = "hide";
			web_port.className = "hide";
			learning.className = "hide";
			
			current_tab.innerHTML = web_tab.innerHTML;
			web_tab.innerHTML = logo_tab.innerHTML;
			logo_tab.innerHTML = current_tab.innerHTML;
			
		};
		
	nav[1].onclick = 
		function() {
			learning.className = "reveal";
			logo.className = "hide";
			contact.className = "hide";
			skills.className = "hide";
			photo.className = "hide";
			web_port.className = "hide";
			
			current_tab.innerHTML = web_tab.innerHTML;
			web_tab.innerHTML = learning_tab.innerHTML;
			learning_tab.innerHTML = current_tab.innerHTML;
			
		};
		
}


		
	






