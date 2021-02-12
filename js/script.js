$(document).ready(function () {

	$('.header__burger').click(function (e) {
		$('.header__burger').toggleClass('header__burger--active');
		$('.header__nav').toggleClass('header__nav--active');
		$('.header__phone').toggleClass('header__phone--active');
		$('.header__btn').toggleClass('header__btn--active')
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
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}
		]
	});

	$('.slider-catalog__link').on('click', function () {
		$('.product-popup').addClass('open');
	});

	$('.product-popup__btn-close').on('click', function () {
		$('.product-popup').removeClass('open');
	});

});