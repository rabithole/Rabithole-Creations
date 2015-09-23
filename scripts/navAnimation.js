$(document).ready(function() {
	// Mobile navigation expanding 

	$("#clickNav").click(function() {
		$("#mobile_nav").fadeToggle();
	});

	$("#mobile_nav").click(function() {
		//alert("clicked collapsed nav");
		$("a").unbind("click");
		$("ul").animate({
			 	width: "230px",
			 	fontSize: "1em"
			 });
			$("li").animate({
				marginTop: "5px"
			});	
	});

	// Top of page animations for everything but mobile. 
	var x = screen.width;
		if(x < 750) {
			return;
		}

	$(window).scroll(function(e) {
		//alert("clicked");
		var scroll = $(window).scrollTop();
		console.log(scroll);

		// Throttles collapsing of navigation and header elements.
		if(this.timeoutId) {
			window.clearTimeout(this.timeoutId);
		}	
		this.timeoutId = window.setTimeout(function () {
	// Throttles collapsing of navigation and header elements.
			if(scroll > 100) {
				$("ul").animate({
				 	width: "50px",
				 	fontSize: "0em"
				 });

				$("li").animate({
					marginTop: "0px"
				});

				$("header").animate({
					height: "20px",
					fontSize: ".2em"
				});

				$("#media_links").animate({
					width: "20%"
				});

				if(x > 751) {
					$("#media_links").animate({
						width: "10%"
					});				
				}

				$("a").click(function(event) {
					event.preventDefault();
				});
			}
			
			if(scroll < 100) {
				$("ul").animate({
				 	width: "230px",
				 	fontSize: "1em"
				 });

				$("li").animate({
					marginTop: "5px"
				});

				$("header").animate({
					height: "70px",
					fontSize: "1em"
				});

				$("#media_links").animate({
					width: "64%"
				});

				$("a").unbind('click');

				if(x > 751) {
					$("#media_links").animate({
						width: "34%"
					});				
				}
			} 		
		}, 500);   			
	});
});
