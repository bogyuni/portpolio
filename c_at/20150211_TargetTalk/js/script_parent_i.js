$(function(){

	// 팝업 이동
	$('.popup_layer').draggable({handle:'.title_box'});

	// 채팅안내 배너 이벤트 2015-03-17 추가
		// 채팅창 도달 체크
			var talkBannerPositionCh=false;
		// 배너 화살표 액션
			var talkBanner_arrowAc;
			var aaaat=0;
			function talkBanner_arrowFn(){
				$('.targettalk_banner .arrow_con').animate({bottom:'-15px'},400).animate({bottom:'-11px'},400);
			}
		// 배너 온/오프
			function talkBanner_on(){
				$('.targettalk_banner_content').stop().animate({width:'328px'},200);
				$('.btn_targettalk_close').stop().animate({left:'228px'},200);
				$('.targettalk_banner .arrow_con').stop().animate({bottom:'-11px'},200);
				clearInterval(talkBanner_arrowAc);
				talkBanner_arrowAc=setInterval(talkBanner_arrowFn,800);
			}
			function talkBanner_off(){
				$('.targettalk_banner_content').stop().animate({width:'111px'},200);
				$('.btn_targettalk_close').stop().animate({left:'80px'},200);
				$('.targettalk_banner .arrow_con').stop().animate({bottom:'0px'},200);
				clearInterval(talkBanner_arrowAc);
			}
		// 배너 마우스 호버
			$('.targettalk_banner').hover(function(){
				if (talkBannerPositionCh==false){
					$(this).addClass('on');
					talkBanner_on();
				}
			},function(){
				if (talkBannerPositionCh==false){
					$(this).removeClass('on');
					talkBanner_off();
				}
			});
		// 배너 클릭시 채팅창 이동
			$('.targettalk_banner_content').click(function(){
				$('html,body').animate({scrollTop:$('#targetTalk_frame_i').offset().top-200+'px'},200);
			});
		// 배너 닫기 버튼
			$('.btn_targettalk_close').click(function(){
				$('.targettalk_banner_box').hide();
			});
		// 채팅배너 스트롤 이동
			function talkBannerScrollFn(){
				var winScroll;
				var talkPosTop;
				var winHeight=$(window).height();
				var talkBannerTop;
				talkPosTop=$('#targetTalk_frame_i').offset().top;
				talkBannerTop=talkPosTop-winHeight;
				$(window).scroll(function(){
					winScroll=$(window).scrollTop();
					if (winScroll>talkBannerTop){
						talkBannerPositionCh=true;
						$('.targettalk_banner_box').css({position:'absolute',top:talkPosTop-20+'px'});
						$('.targettalk_banner').addClass('on');
						talkBanner_on();
					}else{
						talkBannerPositionCh=false;
						$('.targettalk_banner_box').css({position:'fixed',top:'94%'});
						$('.targettalk_banner').removeClass('on');
						talkBanner_off();
					}
				});
			}
			talkBannerScrollFn();

});