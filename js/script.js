$(function() {
	$("#period").click(function(e) {
		e.stopPropagation();
		$('.period-list').show();
	});
	$('body').click(function() {
		$('.period-list').hide();
	});
	$('.datepicker').daterangepicker({
		opens: 'right'
	});
	$('.menu-btn').click(function() {
		$('.nav-panel').toggleClass('nav-collapsed');
	});
	$('.nav-panel-toggler').click(function() {
		$('.nav-panel').toggleClass('hidden');
		$(this).toggleClass('rotate');
		if ($('.nav-panel').hasClass('hidden')) {
			$('.info-panel').addClass('info-width-100');
			$('.info-panel').removeClass('info-width-offset');
		} else {
			$('.info-panel').removeClass('info-width-100');
			$('.info-panel').addClass('info-width-offset');
		}
	});
	$(".post-block").mCustomScrollbar();
});