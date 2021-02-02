$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger').toggleClass('header__burger--active')
		$('.header__nav').toggleClass('header__nav--active')
	});
});