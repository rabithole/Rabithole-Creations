// JavaScript Document
var placeholder;

var nav = document.getElementsByName("nav_tab");

window.onload = tab_selection;


function tab_selection() {
	
	var photo = document.getElementById("photo");
	var skills = document.getElementById("skills");
	var web_port = document.getElementById("web_port");
	var contact = document.getElementById("contact");
	var logo = document.getElementById("logo");
	var learning = document.getElementById("learning");
/*
	nav.onclick =
		function() {
			for (i = 0; i < nav.length - 1; i++) {
				if (nav[i].click === true) {
					alert("Worked");
					placeholder = nav[4].innerHTML ;
					nav[4].innerHTML = nav[i].innerHTML;
					nav[i].innerHTML = placeholder;
					break;
				}
}
}
*/	
	
		
	nav[3].onclick = 
		function() {
			if(nav[3].innerHTML === "Photography") {
				photo.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				learning.className = "hide";
			}
	
			if(nav[3].innerHTML === "Contact/Resume") {
				contact.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				photo.className = "hide";
				logo.className = "hide";
				learning.className = "hide";
			}
			
			if(nav[3].innerHTML === "Learning Goals") {
				learning.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[3].innerHTML === "Graphic Designs") {
				logo.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				learning.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[3].innerHTML === "Web Portfolio") {
				web_port.className = "reveal";
				skills.className = "hide";
				learning.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[3].innerHTML === "Skills") {
				skills.className = "reveal";
				learning.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}	
			placeholder = nav[4].innerHTML ;
			nav[4].innerHTML = nav[3].innerHTML;
			nav[3].innerHTML = placeholder;
	};
	
	nav[2].onclick = 
		function() {
			if(nav[2].innerHTML === "Photography") {
				photo.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				learning.className = "hide";
			}
	
			if(nav[2].innerHTML === "Contact/Resume") {
				contact.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				photo.className = "hide";
				logo.className = "hide";
				learning.className = "hide";
			}
			
			if(nav[2].innerHTML === "Learning Goals") {
				learning.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[2].innerHTML === "Graphic Designs") {
				logo.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				learning.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[2].innerHTML === "Web Portfolio") {
				web_port.className = "reveal";
				skills.className = "hide";
				learning.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[2].innerHTML === "Skills") {
				skills.className = "reveal";
				learning.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}	
			placeholder = nav[4].innerHTML ;
			nav[4].innerHTML = nav[2].innerHTML;
			nav[2].innerHTML = placeholder;
	};
	
	nav[1].onclick = 
		function() {
			if(nav[1].innerHTML === "Photography") {
				photo.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				learning.className = "hide";
			}
	
			if(nav[1].innerHTML === "Contact/Resume") {
				contact.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				photo.className = "hide";
				logo.className = "hide";
				learning.className = "hide";
			}
			
			if(nav[1].innerHTML === "Learning Goals") {
				learning.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[1].innerHTML === "Graphic Designs") {
				logo.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				learning.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[1].innerHTML === "Web Portfolio") {
				web_port.className = "reveal";
				skills.className = "hide";
				learning.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[1].innerHTML === "Skills") {
				skills.className = "reveal";
				learning.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}	
			placeholder = nav[4].innerHTML ;
			nav[4].innerHTML = nav[1].innerHTML;
			nav[1].innerHTML = placeholder;
		};
			
		nav[0].onclick = 
		function() {
			if(nav[0].innerHTML === "Photography") {
				photo.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				learning.className = "hide";
			}
	
			if(nav[0].innerHTML === "Contact/Resume") {
				contact.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				photo.className = "hide";
				logo.className = "hide";
				learning.className = "hide";
			}
			
			if(nav[0].innerHTML === "Learning Goals") {
				learning.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[0].innerHTML === "Graphic Designs") {
				logo.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				learning.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[0].innerHTML === "Web Portfolio") {
				web_port.className = "reveal";
				skills.className = "hide";
				learning.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[0].innerHTML === "Skills") {
				skills.className = "reveal";
				learning.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}	
			placeholder = nav[4].innerHTML ;
			nav[4].innerHTML = nav[0].innerHTML;
			nav[0].innerHTML = placeholder;
		};
		
		nav[5].onclick = 
		function() {
			if(nav[5].innerHTML === "Photography") {
				photo.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				learning.className = "hide";
			}
	
			if(nav[5].innerHTML === "Contact/Resume") {
				contact.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				photo.className = "hide";
				logo.className = "hide";
				learning.className = "hide";
			}
			
			if(nav[5].innerHTML === "Learning Goals") {
				learning.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[5].innerHTML === "Graphic Designs") {
				logo.className = "reveal";
				skills.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				learning.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[5].innerHTML === "Web Portfolio") {
				web_port.className = "reveal";
				skills.className = "hide";
				learning.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}
			
			if(nav[5].innerHTML === "Skills") {
				skills.className = "reveal";
				learning.className = "hide";
				web_port.className = "hide";
				contact.className = "hide";
				logo.className = "hide";
				photo.className = "hide";
			}	
			placeholder = nav[4].innerHTML ;
			nav[4].innerHTML = nav[5].innerHTML;
			nav[5].innerHTML = placeholder;
		};
}

