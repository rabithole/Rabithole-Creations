$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		console.log(scroll);

		if(scroll > 10 && scroll < 200){
				$("header").animate({
					height: "40px",
					fontSize: "1em"
				}, 1000);

				$("#main_title").animate({
					fontSize: "1.7em",
					top: "-3px"
				}, 1000);
			}

		if(scroll < 100) {
			$("header").animate({
					height: "120px",
					fontSize: "1em"
				}, 1000);

			$("#main_title").animate({
					fontSize: "3em",
					top: "30px"
				}, 1000);
		}
	});
});