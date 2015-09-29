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
		$("header").animate({
			height: "110px",
			fontSize: "1em"
		}, 1000);

		$("#main_title").animate({
			fontSize: "4em",
			marginTop: "50px"
		}, 1000);

		$(".media_links").animate({
			width: "70px"
		}, 1000);

		$("ul").animate({
		 	width: "230px",
		 	fontSize: "1em", 
		 	left: "70%",
		 	top: "300px"
		 }, 1000);

		$("li").animate({
			marginTop: "5px"
		}, 1000);

		$("a").unbind('click');
	}

	function animateReduce() {	
		$("header").animate({
			height: "40px",
			fontSize: "1em"
		}, 1000);

		$("#main_title").animate({
			fontSize: "1.7em",
			marginTop: "0px"
		}, 1000);

		$(".media_links").animate({
			width: "30px"
		}, 1000);

		$("ul").animate({
			width: "50px",
			fontSize: "0em", 
			left: "90%", 
			top: "5%"
		});

		$("li").animate({
			marginTop: "0px"
		});

		$("a").click(function(event) {
		event.preventDefault();
		});

		$(".media").unbind('click');
	}	
});
