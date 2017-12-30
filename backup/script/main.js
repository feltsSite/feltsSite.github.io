$(window).on('load', function() {
	$('.portfolio').css("top", $('header').height() + $('.about').height() + 100 + "px");
	let pHeight = $(".portfolio").height();
	let aHeight = $(".about").height();
	$("#about").height(aHeight + 100);
	$("#myPortfolio").height(pHeight + 100);
	$('.preloader').delay(1000).fadeOut('slow');;
});

$(window).on('resize', function() {
	$('.portfolio').css("top", $('header').height() + $('.about').height() + 100 + "px");
	let pHeight = $(".portfolio").height();
	let aHeight = $(".about").height();
	$("#myPortfolio").height(pHeight + 100);
	$("#about").height(aHeight + 100);
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

	$("#aboutMe").click(function() {
		$("body,html").animate({"scrollTop" : $("#about").offset().top}, 1000);
		$('.navi').fadeOut(100);
		$('.sandwich').removeClass('active');
		$('.sw-stick').css("width", "25px")
		mMnu = true;
	});

	$("header .btnn").click(function() {
		$("body,html").animate({"scrollTop" : $("#about").offset().top}, 1000);
	});

	$(".about .btnn").click(function() {
		$("body,html").animate({"scrollTop" : $("#myPortfolio").offset().top}, 1000);
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

