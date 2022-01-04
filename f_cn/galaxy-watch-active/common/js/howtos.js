var thiSc;
$(document).ready( function () {
	$(window).resize( function () {
		howTos();
	});
	var listnumber = $('.video_list li').size();
	$('.inner_number .all').html(listnumber);
	var __keyInt = 0;
	$('.m_howtos_list li a').on('keydown', function (e) {
		__keyInt = e.keyCode == 13 ? 1 : 0;
	}).on('click', function () {
		var openNum = $(this).attr('data-index');
		var omnimsg = $(this).attr('data-omni');
		openYoutube(openNum, omnimsg, __keyInt);
		return false;
	});
	$('.video_list li button').on('click', function () {
		var thisNum = $(this).parent().index();
		var thislist = $(this).attr('data-video');
		playYoutube(thisNum, thislist);
	});
	$('.play_layerpop .btn_area button').on('click', function () {
		if (!$('.video_list li').is(':animated')) {
			GALAXY.tracking.apply(this);
			if ($(this).hasClass('prev')) {
				movYoutube('prev');
			} else {
				movYoutube('next');
			}
		}
	});
	$('.layer_Dev button.close_pop').on('click', function () {
		GALAXY.tracking.apply(this);
		closeYoutube();
	});
	$('.ie8 .m_howtos_list li a').on('mouseenter', function () {
		$('.ie8 .m_howtos_list li a').addClass('offin');
		$(this).removeClass('offin');
	}).on('mouseleave', function () {
		$('.ie8 .m_howtos_list li a').removeClass('offin');
	});
	$('.video_list li').each( function () {
		$(this).prepend('<div></div>')
	});
	$('.m_howtos_list li a').on('mouseenter', function () {
		$('.m_howtos_list').addClass('over');
	}).on('mouseleave', function () {
		$('.m_howtos_list').removeClass('over');
	});
	$(document).keydown(function (e) {
		if ($('.layer_Dev').is(':visible') && (e.keyCode == 8)) {
			closeYoutube();
			return false;
		}
	});
});
function playYoutube(idx, __list) {
	var maxwidth = $('.video_list li').eq(idx).find('img').width();
	var maxheight = $('.video_list li').eq(idx).find('img').height();
	var url = "https://www.youtube.com/embed/"+__list+"?showinfo=0&amp;wmode=transparent&amp;autoplay=1";
	var html = '<iframe style="width:'+maxwidth+'px; height:'+maxheight+'px;" class="vod-player" allowfullscreen title="Video player" src="'+url+'" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>';
	$('.video_list li').eq(idx).addClass('play').append(html);
}
function openYoutube(idz, msg, keyBord) {
	var winheight = $(window).height();
	thiSc = $('html, body').scrollTop() || $(window).scrollTop();
	$('html, body').stop().animate({scrollTop:'0'}, 100);
	$('.layer_Dev').fadeIn(300);
	$('#wrap').css({'height':0, 'overflow':'hidden'});
	$('.video_list li').eq(idz).css('display', 'block').addClass('view');
	$('.inner_number .thistu').html(Math.ceil(idz) + 1);
	$('a, button, select, input, textarea, video').each( function () {
		var tabindex = $(this).attr('tabindex');
		if (tabindex!==undefined&&tabindex!==null) {
			$(this).attr('data-prev-tabindex', tabindex);
		}
		$(this).attr('tabindex','-1');
	});
	if ($.browser.mobile) {
		$('.play_layerpop .video_list li').addClass('mobile');
		$('.play_layerpop .video_list li.view button').click();
	}
	$('.layer_Dev .prev').attr('data-omni', msg + ':arrow_left');
	$('.layer_Dev .next').attr('data-omni', msg + ':arrow_right');
	$('.layer_Dev .close_pop').attr('data-omni', msg + ':close');
	if (keyBord == 1) {
		$('.video_list li.view button').focus();
	}
	innerVideo();
}
function closeYoutube() {
	$('.layer_Dev').fadeOut('300');
	removeVideo();
	$('.video_list li.view').fadeOut(100);
	$('.video_list li.view').removeClass('view');
	$('#wrap').css('height', 'auto');
	$('html, body').stop().animate({scrollTop:thiSc}, 10);
	$('a, button, select, input, textarea, video').each( function () {
		var tabindex = $(this).attr('data-prev-tabindex');
		if (tabindex!==undefined&&tabindex!==null) {
			$(this).attr('tabindex',tabindex);
			$(this).removeAttr('data-prev-tabindex');
		} else {
			$(this).removeAttr('tabindex');
		}
	});
}
function movYoutube(idy) {
	var indA = $('.video_list li.view').index();
	var indAll = $('.video_list li').size() - 1;
	var thisNumber ;
	removeVideo();
	if (idy == 'prev') {
		if (indA != 0) {
			thisNumber = indA -1;
		} else {
			thisNumber = indAll;
		}
	} else {
		if (indA != indAll) {
			thisNumber = indA + 1;
		} else {
			thisNumber = 0;
		}
	}
	$('.video_list li.view').css('display', 'none').removeClass('view');
	$('.video_list li').eq(thisNumber).fadeIn(100, function () {
		$(this).addClass('view');
		if ($.browser.mobile) {
			$(this).find('button').click();
		}
	});
	$('.m_howtos_list li a').each( function () {
		var aNum = $(this).attr('data-index');
		if (Math.ceil(aNum) == thisNumber) {
			var aMsg = $(this).attr('data-omni');
			$('.layer_Dev .prev').attr('data-omni', aMsg + ':arrow_left');
			$('.layer_Dev .next').attr('data-omni', aMsg + ':arrow_right');
			$('.layer_Dev .close_pop').attr('data-omni', aMsg + ':close');
		}
	});
	$('.inner_number .thistu').html(thisNumber + 1);
	
}
function howTos() {
	var winwidth = $(window).width();
	if ($('.video_list li.view').hasClass('play')) {
		var imgwidth = $('.video_list li.play img').width();
		var imgheight = $('.video_list li.play img').height();
		$('.video_list li.play iframe').css({'width':imgwidth, 'height':imgheight});
	}
	if (winwidth < 1920) {
		$('.layer_Dev').css({'width':'100%', 'left':'0', 'margin-left':'0'});
	} else {
		$('.layer_Dev').css({'width':1920, 'left':'50%', 'margin-left':-960});
	}
	innerVideo();
}
function innerVideo() {
	var winheight = $(window).height();
	var videoheight = $('.video_list li.view img').height() + 220;
	if (winheight < videoheight) {
		$('.layer_Dev').css('height', videoheight);
		$('.play_layerpop').css({'top':'0', 'margin-top':'0'});
	} else {
		var popheight = $('.play_layerpop').height() / 2 + 110;
		$('.layer_Dev').css('height', '100%');
		$('.play_layerpop').css({'top':'50%', 'margin-top':-popheight});
	}
}
function removeVideo() {
	if ($('.video_list li.view').hasClass('play')) {
		$('.video_list li.play .vod-player').remove();
		$('.video_list li.play').removeClass('play');
	}
}