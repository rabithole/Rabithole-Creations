/*
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
			 	fontSize: "1em",
			 	left: "70%"
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
				 	fontSize: "0em",
				 	left: "90%",
				 	top: "10%"
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
				 	fontSize: "1em",
				 	left: "70%",
				 	top: "100px"
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

*/



$(document).ready(function() {
	$("#clickNav").click(function() {
		$("#mobile_nav").fadeToggle();
	});

	$("#mobile_nav").click(function() {
		//alert("clicked collapsed nav");
		$("a").unbind("click");
		$("ul").animate({
			 	width: "230px",
			 	fontSize: "1em",
			 	left: "70%",
			 	top: "300px"
			 });
			$("li").animate({
				marginTop: "5px"
			});	
	});

	$("#slide_arrow").click(function() {
		$("#the_process").slideToggle("slow");
		//$("#the_process").css("position" : "absolute", "zIndex": "1500");
	});
});

	// Top of page animations for everything but mobile. 
	
var scrollEvent = 0;

$(window).scroll(function() {
	var x = screen.width;
	if(x < 750) {
		return;
	}

	var scroll = $(window).scrollTop();
	console.log("This is the scroll number " + scroll);


	if(scroll < 5) {
		scrollEvent = 0;
	}
	if(scrollEvent > 1) {
		return;
	}
	if(scroll > 5) {
		scrollEvent += 1;
	}

	if(scrollEvent == 0) {
		animateEnlarge();
		
	}
	if(scrollEvent == 1) {
		if(scrollEvent > 1) {
			return;
		}
		animateReduce();
	}

	console.log("This is the scrollEvent state " + scrollEvent);
	
		// This section begins the reduction animation.
	function animateEnlarge() {
		$("ul").animate({
		 	width: "230px",
		 	fontSize: "1em",
		 	left: "70%",
		 	top: "100px"
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

		if(x > 751) {
			$("#media_links").animate({
				width: "34%"
			});				
		}

		$("a").unbind('click');
	}

	function animateReduce() {	
		$("ul").animate({
		 	width: "50px",
		 	fontSize: "0em",
		 	left: "90%",
		 	top: "10%"
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

		$(".media").unbind('click');
	}	
});

