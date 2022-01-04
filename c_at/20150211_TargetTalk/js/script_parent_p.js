$(function(){

	// 팝업 이동
	$('.popup_layer').draggable({handle:'.title_box'});

	// 데스크탑 채팅창 레이어팝업 관련 메소드
		// 데스크탑 레이어팝업 형일 경우
			if ($('#targetTalk_frame_p').hasClass('type_p_wrap type_p_wrap2')){
				$('#targetTalk_frame_p').draggable({handle:'.chat_head'});
			}
		// 전화상담 버튼
			$('.btn_tel').hover(function(){
					$(this).next('.tel_popLayer').show();
			},function(){
					$(this).next('.tel_popLayer').hide();
			});

		// 채팅창 활성/비활성 함수
			var openCheck_inactive;
			if ($('#targetTalk_frame_p').hasClass('type_p_wrap type_p_wrap1')){
				openCheck_inactive=false;
			}else if ($('#targetTalk_frame_p').hasClass('type_p_wrap type_p_wrap2')){
				openCheck_inactive=true;
				$('.chat_head .btn_closePopLayer').addClass('on');
			}

			function setInactiveChatBox(){
				if (!openCheck_inactive){
					if ($('#targetTalk_frame_p').hasClass('type_p_wrap type_p_wrap1')){
						// 하단 위치 시작형
						$('.inactive_chatBox').animate({top:'100%'},200,function(){
							$('.type_p_wrap').animate({height:'486px'},400,function(){
								$('.chat_head .btn_closePopLayer').addClass('on');
								$('.chat_head .chat_tit').fadeIn(600);
								$('.chat_head .btn_tel').delay(200).animate({left:'8px'},600,function(){
									openCheck_inactive=true;
								});
							});
						});
					}else if ($('#targetTalk_frame_p').hasClass('type_p_wrap type_p_wrap2')){
						// 특정 위치 시작형
						$('.inactive_chatBox').animate({top:'100%'},400);
						$('.type_p_wrap').animate({height:'486px'},400,function(){
							$('.chat_head .btn_closePopLayer').addClass('on');
							$('.chat_head .chat_tit').fadeIn(600);
							$('.chat_head .btn_tel').delay(200).animate({left:'8px'},600,function(){
								openCheck_inactive=true;
							});
						});
					}
				}else{
					// 특정 위치 시작형
					if ($('#targetTalk_frame_p').hasClass('type_p_wrap type_p_wrap1')){
						// 하단 위치 시작형
						$('.type_p_wrap').animate({height:'178px'},200,function(){
							$('.inactive_chatBox').animate({top:'40px'},400,function(){
								$('.chat_head .btn_closePopLayer').removeClass('on');
								$('.chat_head .chat_tit').fadeOut(600);
								$('.chat_head .btn_tel').delay(200).animate({left:'-50px'},600,function(){
									openCheck_inactive=false;
								});
							});
						});
					}else if ($('#targetTalk_frame_p').hasClass('type_p_wrap type_p_wrap2')){
						// 특정 위치 시작형
						$('.type_p_wrap').animate({height:'178px'},400);
						$('.inactive_chatBox').animate({top:'40px'},400,function(){
							$('.chat_head .btn_closePopLayer').removeClass('on');
							$('.chat_head .chat_tit').fadeOut(600);
							$('.chat_head .btn_tel').delay(200).animate({left:'-50px'},600,function(){
								openCheck_inactive=false;
							});
						});
					}

				}
				check_btnTel=false;
				$('.tel_popLayer').hide();
			}
			$('.btn_closePopLayer').on('click',function(){
				setInactiveChatBox();
			});

});