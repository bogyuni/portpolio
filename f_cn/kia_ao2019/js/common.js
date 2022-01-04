var isMobile = false; //initiate as false
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

function setMovieSize(){
	var videoObj = $('#vi, #vi2, #vi3');
	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;
	var ratio = winHeight / winWidth;
	var defaultRatio = 9 / 16;

	if(ratio > defaultRatio){
		videoObj.removeClass('vertical').addClass('horizontal');
	}else{
		videoObj.removeClass('horizontal').addClass('vertical');
	}
}

function deviceInfoSetting(){
	if(isMobile && $(window).width() > 768){
		$('body').removeClass().addClass('isTablet');
	}else if(isMobile && $(window).width() <= 768){
		$('body').removeClass().addClass('isMobile');
	}else{
		$('body').removeClass().addClass('isDesktop');
		$('#vi').attr('src', 'video/chapter1_sec3.mp4');
		$('#vi2').attr('src', 'video/chapter2_sec1.mp4');
		$('#vi3').attr('src', 'video/chapter2_sec5.mp4');
	}
}



$(function(){

	deviceInfoSetting();

	if(isMobile){
		$('.video_wrap video, .video_wrap .dim').remove();
	}


	// 초기 설정 값
	var currentChapter = 1; // 현재 지정 된 챕터의 위치 값
	var currentSection = 0; // 현재 섹션을 나타내는 위치 값
	var scrollCheck = true; // 스크롤이 가능하도록 하는 값 - flase : 가능, true : 스크롤 중이라서 불가능
	var slideTime = 800; // 스크롤이 이동하는 시간
	var easeFunction = 'easeInOutExpo'; // jQuery UI easing 사용 가능함 - https://easings.net/ko 참조 URL
	var sectionLength = null; // 현재챕터의 섹션 갯수가 들어갈 변수

	$('.kv .icon_scroll').click(function(){
		$('.kv_wrapper, .kv_bg').stop().animate({top:'-100%'}, slideTime, easeFunction);
		currentSection++;
	});

	// 각 챕터 그룹의 위치값을 조정하는 함수
	function chapterSetting(chapter){
		$('.chapter_wrapper').css({zIndex:'11'});
		$('.chapter_wrapper'+chapter).css({zIndex:'12'});
	}

	function indicatorClick(value){
		// 내가 선택한 인디케이터의 값
		var selectSection = value;

		// 섹션 이동 후 위치값 재조정하는 함수
		function positionSectionSetting(){
			$('.chapter_wrapper' + currentChapter + ' .sec').each(function(index){
				var secNum = index + 1; // index 값이 0이므로 섹션 위치값과 매칭하기 위하여 1 더함
				if(secNum < selectSection){
					// 섹션이 선택한(인디케이터의 선택된 숫자)보가 작을 경우
					$('.chapter_wrapper' + currentChapter + ' .section' + secNum).stop().css({top:'-100%'});
				}else{
					// 섹션이 선택한(인디케이터의 선택된 숫자)보가 클 경우
					$('.chapter_wrapper' + currentChapter + ' .section' + secNum).stop().css({top:'0'});
				}
			});
		}
		// 내가 선택한 인디게이터의 숫자가 KV일 경우 - 0일 경우
		if(selectSection == 0){
			$('.kv_wrapper, .kv_bg').stop().animate({top:'0'}, slideTime, easeFunction, function(){
				$('.chapter_wrapper' + currentChapter + ' .sec').css({top:'0'});
			});
			currentSection = 0;
		}
		// 내가 선택한 인디게이터의 숫자가 현재 섹션보다 클 경우 - sec1 인데 2나 3을 선택한 경우
		else if(selectSection > currentSection){
			$('.chapter_wrapper' + currentChapter + ' .sec').stop().animate({top:'-100%'}, slideTime, easeFunction);
			$('.chapter_wrapper' + currentChapter + ' .section' + selectSection).stop().css({top:'0'});
			setTimeout(function(){
				positionSectionSetting();
			}, slideTime);
			currentSection = selectSection;
		}
		// 내가 선택한 인디게이터의 숫자가 현재 섹션보다 작을 경우 - sec3 인데 2나 1을 선택한 경우
		else{
			$('.chapter_wrapper' + currentChapter + ' .section' + selectSection).stop().animate({top:'0'}, slideTime, easeFunction);
			setTimeout(function(){
				positionSectionSetting();
			}, slideTime);
			currentSection = selectSection;
		}
	}

	function chapterChange(menuIndex){
		var aniTime = 0.6;

		$('.kv').removeClass('active');
		$('.chapter' + currentChapter).addClass('active')

		$('.icon_scroll').hide();
		$('.chapter' + currentChapter +' .icon_scroll').fadeIn(800);

		$('.kv .btn_kv').show();
		$('.chapter'+ currentChapter +' .btn_kv').hide();

		$('.kv .dim').show().css('opacity', 1);
		$('.chapter'+ currentChapter +' .dim').hide();

		$('.kv .kv_bg').css('background','none');
		$('.chapter'+ currentChapter +' .kv_bg').css('background','url(images/kv_full_bg'+currentChapter+'.jpg) no-repeat 0 0/cover');

		$('.kv .btn_cont').show();
		$('.chapter'+ currentChapter +' .btn_cont').hide();

		$('.kv .kv_text_area').hide();
		$('.kv .kv_text_full_area').hide();
		$('.chapter'+ currentChapter +' .kv_text_full_area').show();

		TweenMax.to($('.chapter' + currentChapter), aniTime, {width : '100%', left: '0', height: $(window).height(), ease:Power3.easeOut});

		if(menuIndex == 1){
			TweenMax.to($('.chapter2'), aniTime, {width : '5%', left: '89.9%'});
			TweenMax.to($('.chapter3'), aniTime, {width : '5%', left: '95%'});
		}else if(menuIndex == 2){
			TweenMax.to($('.chapter1'), aniTime, {width : '5%', left: '0'});
			TweenMax.to($('.chapter3'), aniTime, {width : '5%', left: '95%'});
		}else if(menuIndex == 3){
			TweenMax.to($('.chapter1'), aniTime, {width : '5%', left: '0'});
			TweenMax.to($('.chapter2'), aniTime, {width : '5%', left: '5.1%'});
		}
	}

	function scopeChapterStatus(status){
		$('.btn_chapter_arrow img').hide();
		if(status == 1){
			$('.btn_chapter_prev').hide();
			$('.btn_chapter_next').show().find('.ch2').show();
		}else if(status == 2){
			$('.btn_chapter_prev').show().find('.ch1').show();
			$('.btn_chapter_next').show().find('.ch3').show();
		}else if(status == 3){
			$('.btn_chapter_prev').show().find('.ch2').show();
			$('.btn_chapter_next').hide();
		}
	}

	$('.kv').hover(function(){
		if(scrollCheck == true){
			$(this).siblings().addClass('not_hover');
		}
	}, function(){
		if(scrollCheck == true){
			$(this).siblings().removeClass('not_hover');
		}
	});

	$('.kv .btn_kv').on('click', function(){
		currentChapter = $(this).data('value');
		scrollCheck = false;

		$('.kv').removeClass('not_hover');

		$('.btn_chapter_change'+currentChapter).addClass('on').siblings().removeClass('on');

		currentSection = 0;

		chapterSetting(currentChapter);

		chapterChange(currentChapter);

		scopeChapterStatus(currentChapter);
	});

	//chaper_menu 클릭
	$('.btn_chapter_change').click(function(){
		currentChapter = $(this).val();
		$(this).addClass('on').siblings().removeClass('on');
		chapterChange(currentChapter);

		$('.kv_wrapper, .kv_bg').stop().animate({top:'0'}, slideTime, easeFunction, function(){
			$('.chapter_wrapper' + currentChapter + ' .sec').css({top:'0'});
		});

		currentSection = 0;
	});

	$('.btn_chapter_arrow').click(function(){
		if($(this).val() == 'next'){
			currentChapter++;
		}else{
			currentChapter--;
		}
		currentSection = 0;

		chapterChange(currentChapter);

		$('.kv_wrapper, .kv_bg').stop().animate({top:'0'}, slideTime, easeFunction, function(){
			scopeChapterStatus(currentChapter);
			// $('.chapter_wrapper' + currentChapter + ' .sec').css({top:'0'});
			$('.chapter_wrapper .sec').css({top:'0'});
		});

	});

	$('.chapter_wrapper .indicator li').click(function(){
		indicatorClick($(this).index());
		$('.chapter_wrapper' + currentChapter + ' .indicator li').eq($(this).index()).addClass('on').siblings().removeClass('on');
	});

	$('.btn_top').click(function(){
		$('.kv_wrapper, .kv_bg').stop().animate({top:'0'}, slideTime, easeFunction, function(){
			$('.sec').stop().animate({top:'0'});
		});
		currentSection = 0;
	});

	$('.close_popup').on('click', function(){
		$('.background_layer').fadeOut();
		$('.popup_layer').hide().find('iframe').attr('src', '');
	});

	var videoUrl = [
		'https://www.youtube.com/embed/9MHIc4hHhCQ',
		'https://www.youtube.com/embed/si9lfpbGMcY',
		'https://www.youtube.com/embed/TGGKdA2LXW8',
	];

	$('.btn_play').click(function(){
		var url;
		var ch = $(this).data('ch');
		var sec = $(this).data('sec');
		var con = $(this).data('con');

		if(ch == 1 && sec == 1 && con == 1){
			url = videoUrl[0];
		}else if(ch == 1 && sec == 2 && con == 1){
			url = videoUrl[0];
		}else if(ch == 1 && sec == 2 && con == 2){
			url = videoUrl[0];
		}else if(ch == 1 && sec == 2 && con == 3){
			url = videoUrl[0];
		}else if(ch == 1 && sec == 2 && con == 4){
			url = videoUrl[0];
		}else if(ch == 2 && sec == 1 && con == 1){
			url = videoUrl[1];
		}else if(ch == 2 && sec == 5 && con == 1){
			url = videoUrl[2];
		}

		$('.background_layer').fadeIn();
		$('.popup_layer').show().find('iframe').attr('src', url);
	});

	function sectionMove(e, moveY){
		// 현재 챕터의 섹션 수량을 지정
		sectionLength = $('.chapter_wrapper' + currentChapter).find('.sec').length;
		// 챕터 그룹 재 설정
		chapterSetting(currentChapter);
		// 스크롤이 가능할 경우(flase) 실행
		if(scrollCheck == false){
			// 스크롤 불가능 하도록 설정
			scrollCheck = true;
			// 스크롤 올릴경우 (up)
			if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 || moveY == 'prev') {
				// 섹션 위치 1 차감
				currentSection--;
				// 현재 섹션이 0일 경우 (KV 화면일 경우)
				if(currentSection <= 0){
					// 섹션 위치 고정
					currentSection = 0;
					// KV 이동
					$('.kv_wrapper, .kv_bg').stop().animate({top:'0'}, slideTime, easeFunction);
				}
				// 현재 섹션이 1 초과이거나, 현재 챕터의 섹션 갯수 이하일 경우
				else if(currentSection > 0 && currentSection <= sectionLength){
					// 섹션 이동
					$('.chapter_wrapper' + currentChapter + ' .section'+currentSection).stop().animate({top:'0'}, slideTime, easeFunction);
				}
				else if(currentSection > 0 && currentSection <= sectionLength){
					// 섹션 이동
					$('.chapter_wrapper' + currentChapter + ' .section'+currentSection).stop().animate({top:'0'}, slideTime, easeFunction);
				}
			}
			// 스크롤 내릴경우 (down)
			else{
				// 현재 섹션이 0일 경우 (KV 화면일 경우)
				if(currentSection == 0){
					// KV 이동
					$('.kv_wrapper, .kv_bg').stop().animate({top:'-100%'}, slideTime, easeFunction);
					// 섹션 위치 1 증감
					currentSection++;
				}
				// 현재 섹션이 1 초과이거나, 현재 챕터의 섹션 갯수 미만일 경우
				else if(currentSection > 0 && currentSection < sectionLength){
					// 섹션 이동
					$('.chapter_wrapper' + currentChapter + ' .section'+currentSection).stop().animate({top:'-100%'}, slideTime, easeFunction);
					// 섹션 위치 1 증감
					currentSection++;
				}
			}

			$('.chapter_wrapper' + currentChapter).find('.indicator li').removeClass('on');
			var tempSectionIdx = null;
			if(currentSection-1 < 0){
				tempSectionIdx = 0
			}
			$('.chapter_wrapper' + currentChapter).find('.indicator li').eq(currentSection).addClass('on');

			// 스크롤 애니메이션(이동)이 끝나면 스크롤 가능하도록 체크값 변경
			setTimeout(function(){
				scrollCheck = false;
			}, slideTime);
		}
	}


	// 마우스 스크롤 시 현재 챕터 내에서 섹션을 이동시킴
	$(window).on('mousewheel DOMMouseScroll', function(e){
		if($('body').hasClass('isDesktop')){
			sectionMove(e);
		}else{
			console.log('Not desktop');
		}
	});

	var touchCheck = false;
	var touchStartX = 0;
	var touchStartY = 0;

	var touchMoveX = 0;
	var touchMoveY = 0;

	$(window).on('touchstart', function(e){
		touchCheck = true;
		touchStartX = parseInt(e.originalEvent.touches[0].clientX);
		touchStartY = parseInt(e.originalEvent.touches[0].clientY);
	});

	$(window).on('touchmove', function(e){
		if(touchCheck){
			touchMoveX = parseInt(e.originalEvent.touches[0].clientX);
			touchMoveY = parseInt(e.originalEvent.touches[0].clientY);
		}
	});

	$(window).on('touchend', function(e){
		touchCheck = false;
		// section next
		if(touchStartY - touchMoveY > 100 && touchMoveX > 0){
			sectionMove(e, 'next');
		}
		// section prev
		else if(touchStartY - touchMoveY < -100 && touchMoveX > 0){
			sectionMove(e, 'prev');
		}

		// chapter next
		if(touchStartX - touchMoveX > 100 && currentChapter < 3 && touchMoveX > 0){
			$('.btn_chapter_next').click();
		}
		// chapter prev
		else if(touchStartX - touchMoveX < -100 && currentChapter > 1 && touchMoveX > 0){
			$('.btn_chapter_prev').click();
		}
		touchMoveX = 0;
		touchMoveY = 0;
	});

	//chapter_wrapper1 background video 크기
	$('.video_wrap').height(window.innerHeight);

	function moChapterChange(select){
		$('.mo_chapter_wrapper').removeClass('front').addClass('back');
		$('.mo_chapter_wrapper'+select).removeClass('back').addClass('front');
		$('.swiper-pagination-bullet1').click();
	}

	$('.mo_chapter .btn_chapter').click(function(){
		$('.mo_kv_wrapper').removeClass('intro_on').addClass('intro_off');

		setTimeout(function(){
			$('.mo_kv_wrapper').hide();
		}, 2400);

		moChapterChange($(this).data('value'));
	});

	$('.mo_chapter_link').click(function(){
		moChapterChange($(this).data('value'));
		$('.mo_popup_layer').fadeOut();
	});

	$('.btn_mo_menu').click(function(){
		$('.mo_popup_layer').fadeIn();
	});

	$('.mo_popup_layer .btn_close_popup').click(function(){
		$('.mo_popup_layer').fadeOut();
	});

	function moTouchEnd($this){
		if($this.activeIndex == ($this.slides.length-1) && $this.swipeDirection == 'next'){
			$('.mo_chapter_wrapper').addClass('mo_end');
			$('.btn_mo_menu').addClass('mo_end');
		}else{
			$('.mo_chapter_wrapper').removeClass('mo_end');
			$('.btn_mo_menu').removeClass('mo_end');
		}
	}

	var moChapter1Swiper = new Swiper('.mo_chapter_wrapper1.swpier-container', {
		direction: 'vertical',
		mousewheel: false,
		loop : false,
		touchReleaseOnEdges : false,
		navigation: {
			nextEl: '.btn_mo_sec_next',
			prevEl: '.btn_mo_sec_prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + ' ' + className+(index+1) +'">' + (index + 1) + '</span>';
			},
		},
		on: {
			touchEnd: function () {
				moTouchEnd(this);
			},
		}
	});

	var moChapter2Swiper = new Swiper('.mo_chapter_wrapper2.swpier-container', {
		direction: 'vertical',
		mousewheel: false,
		loop : false,
		touchReleaseOnEdges : false,
		navigation: {
			nextEl: '.btn_mo_sec_next',
			prevEl: '.btn_mo_sec_prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + ' ' + className+(index+1) +'">' + (index + 1) + '</span>';
			},
		},
		on: {
			touchEnd: function () {
				moTouchEnd(this);
			},
		}
	});

	var moChapter3Swiper = new Swiper('.mo_chapter_wrapper3.swpier-container', {
		direction: 'vertical',
		mousewheel: false,
		loop : false,
		touchReleaseOnEdges : false,
		navigation: {
			nextEl: '.btn_mo_sec_next',
			prevEl: '.btn_mo_sec_prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + ' ' + className+(index+1) +'">' + (index + 1) + '</span>';
			},
		},
		on: {
			touchEnd: function () {
				moTouchEnd(this);
			},
		}
	});

	$(window).resize(function(){
		setMovieSize();
		deviceInfoSetting();
		$('.chapter'+currentChapter).css({height:$(window).height()+'px'});
	});

}); // end of ready()


$(window).load(function(){

	if(isMobile && $(window).width() > 768){
		$('.wrapper').css({opacity:1});
		$('.basic_ui_set').css({opacity:1});
		$('.kv_wrapper .chapter1 .kv_text_area').delay(100).animate({top:'75%',opacity:'1'}, 400);
		$('.kv_wrapper .chapter2 .kv_text_area').delay(300).animate({top:'75%',opacity:'1'}, 400);
		$('.kv_wrapper .chapter3 .kv_text_area').delay(500).animate({top:'75%',opacity:'1'}, 400);
		setMovieSize();
	}else if(isMobile && $(window).width() <= 768){
		$('.mo_kv_wrapper').addClass('intro_on');
	}else{
		$('body').addClass('isDesktop');
		$('.wrapper').css({opacity:1});
		$('.basic_ui_set').css({opacity:1});
		$('.kv_wrapper .chapter1 .kv_text_area').delay(100).animate({top:'75%',opacity:'1'}, 400);
		$('.kv_wrapper .chapter2 .kv_text_area').delay(300).animate({top:'75%',opacity:'1'}, 400);
		$('.kv_wrapper .chapter3 .kv_text_area').delay(500).animate({top:'75%',opacity:'1'}, 400);
		setMovieSize();
	}
});


