var animation_start_pos__ = 0;
var animation_end_pos__ = $(window).height();
if ((!$('.m_feature-video').length) && ($('#contents').hasClass('highlights'))) {
	animation_end_pos__ = $('.m_content-kv').height() / 2;
}

;(function($){
$(function() {
	
	var colorCg = [];

	var scrollpos = 0;
	var start_color = [11, 26, 59];
	var end_color = [0, 0, 0];
	var count_load = false;
	var timeCheck;

	if ($('#contents').hasClass('highlights')) {
		start_color = [69, 111, 225];
	}

	var
	$jumpControls = $('.m_jump_controls .jump_wrap'),
	$jumpMoveWrap = $('.m_jump_controls .jump_wrap ul'),
	$jumpItem = $('.m_jump_controls .jump_wrap li'),
	$jumpArrows = $('.m_jump_controls_arrow .arrows'),
	$jumpArrowsNew = $('.m_jump_controls_arrow');

	// jump control
	var showNum = Math.round($jumpControls.width() / $jumpItem.outerWidth());
	var restLength = $jumpItem.length - showNum;
	var itemWidth = $jumpItem.outerWidth();
	var moveValue = 0;
	var callJump = false;

	function cgBack() {
		if (colorCg.length) {
			$.each(colorCg, function() {
				this.css = 'fadebg';
				this.cgT = this.offset().top;
				this.bgB = this.offset().top + this.outerHeight();
				this.wH = $(window).height();
			});
		}
	}

	var scroll_pos = 0;
	var last_scroll_pos = 0;


	function checkOffset() {
		var scroll_pos = $('html, body').scrollTop() || $(window).scrollTop();
		$('#contents section article').each(function () {
			var thsiSet = $(this).offset().top;
			if (thsiSet < scroll_pos) {
				$(this).addClass('on');
			}
		});
	}
	function bgChangeSc() {
		var scroll_pos = $('html, body').scrollTop() || $(window).scrollTop();
		if (scroll_pos >= animation_start_pos__ && scroll_pos <= animation_end_pos__) {
			var percentSc = (scroll_pos-animation_start_pos__) / (animation_end_pos__ - animation_start_pos__);
			var newR = Math.floor(start_color[0] + ((end_color[0] - start_color[0]) * percentSc));
			var newG = Math.floor(start_color[1] + ((end_color[1] - start_color[1]) * percentSc));
			var newB = Math.floor(start_color[2] + ((end_color[2] - start_color[2]) * percentSc));
			if ($('#contents').hasClass('highlights')) {
				$('#contents, #contents section').css('background-color', 'rgb(' + newR + ',' + newG + ',' + newB + ')');
			} else {
				$('.change-article').css('background-color', 'rgb(' + newR + ',' + newG + ',' + newB + ')');
			}
		} else if (scroll_pos <= animation_start_pos__) {
			if ($('#contents').hasClass('highlights')) {
				$('#contents, #contents section').css('background-color', 'rgb(69, 111, 225)');
			} else {
				$('.change-article').css('background-color', 'rgb(11, 26, 59)');
			}
		} else if (scroll_pos >= animation_end_pos__) {
			if ($('#contents').hasClass('highlights')) {
				$('#contents, #contents section').css('background-color', 'rgb(0, 0, 0)');
			} else {
				$('.change-article').css('background-color', 'rgb(0, 0, 0)');
			}
		}
	}
	function bgChangeLoad() {
		$('#contents').addClass('fade');
		setTimeout(function () {
			$('#contents').removeClass('fade');
		}, 1000);
		count_load = true;
		bgChangeSc();
	}


	function moveControl() {
		if ($jumpControls.length) {
			if($('html').hasClass('rtl')) {
				if ($('html').hasClass('desktop') && $('html').hasClass('s12')) {
					$jumpMoveWrap.stop().__animate({scrollLeft: $jumpMoveWrap.width() - moveValue}, {duration: 1000, easing: 'easeOutCubic', force3D: true});
				} else {
					$jumpControls.css('margin-right',-moveValue);
				}
			} else {
				if ($('html').hasClass('desktop') && $('html').hasClass('s12')) {
					$jumpMoveWrap.stop().__animate({scrollLeft: moveValue}, {duration: 1000, easing: 'easeOutCubic', force3D: true});
				} else {
					$jumpControls.css('margin-left',-moveValue);
				}
			}
		}
	}

	GALAXY.load(function () {
		if(!GALAXY.isGalaxy) {
			var title = $('.dotcom #subnav.nav-type1 .heading a').text();
			$('.dotcom #subnav.nav-type1 .heading').html('<span>'+title+'</span>');
		}
		
		$('article').each(function () {
			if ($(this).parent().hasClass('m_content_galaxy-type1') && !$(this).hasClass('m_content-kv') && !$(this).hasClass('hidden-arc')) {
				colorCg.push($(this));
			}
			if ($(this).find('sup').length) {
				var supTit = $('#desc-section ol').attr('data-title');
				$(this).find('sup').wrapInner("<a class='click_sup' href='#' title='" + supTit + "'></a>")
			}
		});
		cgBack();
		bgChangeLoad();
		checkOffset();

		$jumpArrows.find('.prev').addClass('disabled');
		$jumpArrows.find('a').on('click',function(e){
			e.preventDefault();

			if($(this).hasClass('disabled')){
				return false;
			}

			var direction = $(this).hasClass('prev') ? 'prev' : 'next';
			if(direction == 'next'){
				if(restLength == 0) return false;
				if ($('html').hasClass('desktop') && $('html').hasClass('s12')) {
					moveValue = itemWidth * (($jumpItem.length - 1) - restLength);
				} else {
					moveValue = moveValue + itemWidth;
				}
				restLength--;
			} else {
				if(restLength == $jumpItem.length - showNum) return false;
				
				if ($('html').hasClass('desktop') && $('html').hasClass('s12')) {
					moveValue = itemWidth * (($jumpItem.length - (Math.ceil($jumpControls.width() / $jumpItem.outerWidth()))) - restLength);
				} else {
					moveValue = moveValue - itemWidth;
				}
				restLength++;
			}

			moveControl();

			if(restLength == 0) {
				$jumpArrows.find('.next').addClass('disabled');
				$jumpArrows.find('.prev').removeClass('disabled');
			} else if (restLength == $jumpItem.length - showNum) {
				$jumpArrows.find('.next').removeClass('disabled');
				$jumpArrows.find('.prev').addClass('disabled');
			} else {
				$jumpArrows.find('.next').removeClass('disabled');
				$jumpArrows.find('.prev').removeClass('disabled');
			}
		});


		$('sup a.click_sup').on('click',function(e){
			e.preventDefault();
			if($('#desc-section').length > 0) {
				GALAXY.setSmoothScrollTop($('#desc-section').offset().top - $('#subnav').height(), 1000);
			} else {
				return false;
			}
		});
		GALAXY.resize();
		$('img').each(function () {
			$(this).on('load', function () {
				clearTimeout(timeCheck);
				timeCheck = setTimeout(function () {
					checkSt();
					GALAXY.scroll();
				}, 500);
			})
		});
		
	});



	GALAXY.resize(function () {
		var _sizeMode = GALAXY.sizeMode;

		itemWidth = $jumpItem.outerWidth();


		if(_sizeMode <= 2 && (GALAXY.sizeMode != GALAXY.prevSizeMode) && !$('.subnav-menus .inside ul .clone').length){
			var dis = $('.dotcom-inside li').addClass('clone').clone().unwrap('ul').unwrap('div');
			$('.subnav-menus .inside ul').append(dis);
			$('.subnav-menus .inside ul .clone').eq(0).addClass('first');
		} else if (_sizeMode > 2 && (GALAXY.sizeMode != GALAXY.prevSizeMode)) {
			$('.subnav-menus .inside ul li.clone').remove();
		}
		if ((GALAXY.sizeMode != GALAXY.prevSizeMode)) {
			showNum = Math.round($jumpControls.width() / $jumpItem.outerWidth());
			restLength = $jumpItem.length - showNum;
			itemWidth = $jumpItem.outerWidth();
			moveValue = 0;

			if ($jumpMoveWrap.length) {
				if(_sizeMode <= 2){ // s12
					$jumpMoveWrap.attr('style','');
					if(!callJump) {
						$jumpMoveWrap.scrollLeft($jumpMoveWrap[0].scrollWidth);
					}
					showNum = Math.floor($jumpControls.width() / $jumpItem.outerWidth());
					restLength = $jumpItem.length - showNum;
				} else { // s34
					moveValue = ($jumpItem.length - showNum - restLength) * itemWidth;
					moveControl();
					callJump = false;
				}
			}

			$jumpControls.attr('style', '');

			$jumpArrows.find('.prev').addClass('disabled');
			$jumpArrows.find('.next').removeClass('disabled');
		}
		GALAXY.scroll();

		if(_sizeMode <= 2) {
			$jumpArrowsNew.css('height',$jumpMoveWrap.outerHeight() - parseInt($jumpMoveWrap.css('padding-bottom')));
		} else {
			$jumpArrowsNew.css('height',$jumpControls.outerHeight());
		}
	});

	$(window).scroll(function () {

		checkSt();

		if (count_load) {
			bgChangeSc();
		}

		if(scroll_pos <= 0) {
			$('section.m_content_galaxy-type1 article:first-child').removeClass('fadebg');
		}

		if ($jumpMoveWrap.length) {
			var wh = $(this).scrollTop() + $(window).height();
			var jt = $jumpMoveWrap.offset().top;

			if(GALAXY.sizeMode <= 2 && (wh > jt && !callJump)) {
				if($('html').hasClass('rtl')){
					$jumpMoveWrap.scrollLeft(0).stop().__animate({scrollLeft: $jumpMoveWrap.outerWidth()}, {duration: 1000, delay: 500, easing: 'easeOutCubic', force3D: true});
				} else {
					$jumpMoveWrap.scrollLeft($jumpMoveWrap.outerWidth()).stop().__animate({scrollLeft: 0}, {duration: 1000, delay: 500, easing: 'easeOutCubic', force3D: true});
				}
				callJump = true;
			}
		}

		last_scroll_pos = scroll_pos;
	});

	$(document).on('keydown', function (e) {
		if (e.keyCode==9) {
			$('a, button').focus(function (e) {
				if (!$(this).parents('article').hasClass('on')) {
					$(this).parents('article').addClass('on');
				}
				$(this).parents('article').removeClass('fadebg');

				$('#contents section article').each(function(){
					$(this).removeClass('fadebg');
				});
			});
		}
	});
	$(document).on('keyup', function (e) {
		if (e.keyCode==9) {
			$('#contents section article').each(function(){
				$(this).removeClass('fadebg');
			});
		}
	});

	function checkSt() {
		cgBack();
		scroll_pos = $('html, body').scrollTop() || $(window).scrollTop();
		if (colorCg.length) {
			$.each(colorCg, function(i) {
				var baseLine = this.wH * 0.3;
				var restLine = this.wH * 0.7;
				var $article = this;

				if (scroll_pos > last_scroll_pos) {
					if (this.cgT<=scroll_pos+this.wH-baseLine && this.bgB>=scroll_pos) {

						$(this).removeClass('fadebg');
						for (y=1;y<2;y++) {
							if ($(colorCg[i+y]).hasClass('on')) {
								$(colorCg[i+y]).addClass('fadebg');
							}
						}
					}
					if (this.bgB<=scroll_pos+this.wH-restLine) {
						if ($(this).hasClass('on')) {
							$(this).addClass('fadebg');
						}
					}
				} else {
					if (this.bgB>=scroll_pos+this.wH-restLine && this.cgT<=scroll_pos) {
						if ($(colorCg[i]).hasClass('fadebg')) {
							for (x=2;x>0;x--) {
								if ($(colorCg[i-x]).hasClass('on')) {
									$(colorCg[i-x]).addClass('fadebg');
								}
							}
							$(this).removeClass('fadebg');
							if ($(colorCg[i]).hasClass('on')) {
								for (z=0;z<i;z++) {
									$(colorCg[z]).addClass('on')
								}
							}
						}
					}
					if (this.cgT>=scroll_pos+this.wH-baseLine) {
						if ($(this).hasClass('on')) {
							$(this).addClass('fadebg');
						}
					}
				}
			});
		}
	}
});
})(window.jQuery);