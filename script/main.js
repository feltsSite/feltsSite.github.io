$(window).on('load', function() {
	let pHeight = $(".portfolio").height();
	$("#myPortfolio").css("height", pHeight + 100 + "px");
	$('.preloader').delay(1000).fadeOut('slow');;
});

$(window).on('resize', function() {
	let pHeight = $(".portfolio").height();
	$("#myPortfolio").css("height", pHeight + 100 + "px");
});

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

	$("#aboutMe,.btnn").click(function() {
		$("body,html").animate({"scrollTop" : $("#about").offset().top}, 1000);
		$('.navi').fadeOut(100);
		$('.sandwich').removeClass('active');
		$('.sw-stick').css("width", "25px")
		mMnu = true;
	});

	$("#portfolio").click(function() {
		$("body,html").animate({"scrollTop" : $("#myPortfolio").offset().top}, 1000);
		$('.navi').fadeOut(100);
		$('.sandwich').removeClass('active');
		$('.sw-stick').css("width", "25px")
		mMnu = true;
	});

	$("#contacts").click(function() {
		$("body,html").animate({"scrollTop" : $("#myContacts").offset().top}, 1000);
		$('.navi').fadeOut(100);
		$('.sandwich').removeClass('active');
		$('.sw-stick').css("width", "25px")
		mMnu = true;
	});

});

baguetteBox.run('.tz-gallery', {
	animation: 'fadeIn'
});

