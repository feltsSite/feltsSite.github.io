var cHeight;

$(window).on('load', function() {
	let pHeight = $(".portfolio").height();
	let aHeight = $(".about").height();
	$(".about").height(aHeight + 80);
	$("#about").height($(".about").height());
	$("#myPortfolio").height(pHeight);
	$(".preloader").delay(500).fadeOut('slow');
	cHeight = $(".container").height() - $("header").height() - $(".portfolio").height() - $(".about").height() - 200;
	$(".contacts").height(cHeight)
});

$(window).on('resize', function() {
	let pHeight = $(".portfolio").height();
	let aHeight = $(".about").height();
	$(".about").height(aHeight);
	$("#myPortfolio").height(pHeight);
	$("#about").height($(".about").height());
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

