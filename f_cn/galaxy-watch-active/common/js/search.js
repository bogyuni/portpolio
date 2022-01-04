(function() {
	window.ADDSEARCH_KEYWORD = 'Galaxy S7';
	var ua = navigator.userAgent.toUpperCase();
	ua.indexOf('MSIE 8')<0 && ua.indexOf('MSIE 7')<0 && ua.indexOf('MSIE 6')<0
	&& location.href.indexOf('samsung.com')>-1
	&& document.write('<scr'+'ipt src="https://addsearch.com/js/?key=9f1cdfddde1bded380117a7be35519ac"></scr'+'ipt>');
})();