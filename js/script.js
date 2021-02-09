$(document).ready(function () {

	$('.header__burger').click(function (e) {
		$('.header__burger').toggleClass('header__burger--active')
		$('.header__nav').toggleClass('header__nav--active')
	});

	$('.gallery__link').click(function (e) {
		if ($('.gallery__big-image img').attr('src') !== $(this).attr('href')) {
			$('.gallery__big-image img').hide().attr('src', $(this).attr('href')).fadeIn(100);
		}
		e.preventDefault();
	});

	$('.slider-catalog').slick({
		infinite: true,
		slidesToShow: 3,
		arrows: true,
	});

});