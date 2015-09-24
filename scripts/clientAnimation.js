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

	$("#sec_1_h1").click(function() {
		$("#the_process").slideToggle("slow");
	});

	// Top of page animations for everything but mobile. 
	var x = screen.width;
		if(x < 750) {
			return;
		}

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		console.log(scroll);

		if(this.timeoutId) {
			window.clearTimeout(this.timeoutId);
		}
		this.timeoutId = window.setTimeout(function() {
			if(scroll > 201) {
				$("header").css({
					"height": "40px",
					"fontSize": "1em"
				});

				$("#main_title").css({
					"fontSize": "1.7em",
					"marginTop": "0px"
				});

				$(".media_links").css(
					"width", "30px"
				);

				$("ul").css({
					"width": "50px",
					"fontSize": "0em", 
					"left": "90%", 
					"top": "5%"
				});

				$("li").css(
					"marginTop", "0px"
				);

				$("a").click(function(event) {
				event.preventDefault();
				});

				$(".media").unbind('click');
			}

			if(scroll > 10 && scroll < 200){
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

			if(scroll < 100) {
				$("header").animate({
					height: "110px",
					fontSize: "1em"
				});

				$("#main_title").animate({
					fontSize: "4em",
					marginTop: "50px"
				});

				$(".media_links").animate({
					width: "70px"
				});

				$("ul").animate({
				 	width: "230px",
				 	fontSize: "1em", 
				 	left: "70%",
				 	top: "300px"
				 });

				$("li").animate({
					marginTop: "5px"
				});

				$("a").unbind('click');
			}
		});
	});
});