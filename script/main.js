$(function() {
		var mMnu = true;
	$('button.toggle_mnu').click(function() {
		if (mMnu) {
			$('.navi').fadeIn(500);
			$('.sw-stick').css("width", "0");
			$('.sandwich').addClass('active');
			mMnu = false;
		} else {
			$('.navi').fadeOut(300);
			$('.sandwich').removeClass('active');
			$('.sw-stick').css("width", "25px");
			mMnu = true;
		}
	});
});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');;
});