

$( document ).ready(function() {

	$(".button-navbar").animate({left: 30, opacity: 1}, 1000);

	
	$(".button-navbar").on('click', function(){
		if ($(".overlay-menu-items").hasClass("active-nav")) {
			$(".overlay-menu-items").hide(800);
			$(".overlay-menu-items").removeClass("active-nav");
			$(".button-navbar div.icon-bar").show();
			$(".button-navbar .icon-bar-absolute-first").hide();
			$(".button-navbar .icon-bar-absolute-second").hide();
			// $("body").css({"overflow" : "auto", "padding-right" : "0px"});
		} else{
			$(".overlay-menu-items").show(800);
			$(".overlay-menu-items").addClass("active-nav");
			$(".button-navbar div.icon-bar").hide();
			$(".button-navbar .icon-bar-absolute-first").show();
			$(".button-navbar .icon-bar-absolute-second").show();
			// $("body").css({"overflow" : "hidden", "padding-right" : "17px"});
		}
	})
	

})