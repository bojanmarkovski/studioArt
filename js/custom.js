

$( document ).ready(function() {

	$(".button-navbar").animate({left: 30, opacity: 1}, 1000);

	
	$(".button-navbar").on('click', function(){
		if ($(".overlay-menu-items").hasClass("active-nav")) {
			$(".overlay-menu-items").hide(800);
			$(".overlay-menu-items").removeClass("active-nav");
			$(".button-navbar div.icon-bar").show();
			$(".button-navbar .icon-bar-absolute-first").hide();
			$(".button-navbar .icon-bar-absolute-second").hide();
		} else{
			$(".overlay-menu-items").show(800);
			$(".overlay-menu-items").addClass("active-nav");
			$(".button-navbar div.icon-bar").hide();
			$(".button-navbar .icon-bar-absolute-first").show();
			$(".button-navbar .icon-bar-absolute-second").show();
		}
	})
	

})