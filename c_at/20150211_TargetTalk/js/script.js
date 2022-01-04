// 설정 데이터
	var adviserInsert=false; // 상담원 배정 전 최초 체크 값
	var defaultSendMsg='무료 상담 받으실 내용을 써주세요.'; // 채팅 입력칸 메시지
	var chatTime=new Date(); // 채팅 입력한 메시지 시간
		chatTime=chatTime.getHours()+':'+chatTime.getMinutes();
	var uesUserCheck=1; // 현재 사용자 시점 0=고객, 1=상담원
	var enquirerMsg, // 고객 메시지
		enquirerName='호갱님'; // 고객 이름
	var adviserMsg, // 상담원 메시지
		adviserName='서보균 상담원', // 상담원 이름
		adviserIcon='images/@user.gif'; // 상담원 아이콘
	var userAgt=navigator.userAgent;
	var snapCount=0;


//넘버 맥스렝스 체크
	function maxLengthCheck(obj){ if (obj.value.length > obj.maxLength) obj.value=obj.value.slice(0, obj.maxLength);}

// 고객이 최초 상담 신청 시
	function firstMsgInsert(){
		if (adviserInsert==false){
			$('.background_layer').show();
			$('.chat_loadBox').show();
			$('.inst_text').attr('disabled',true);
			adviserInsert=true;
			$('.enquirer_phone_box').animate({top:'0'},300);
		}
	}

// 모바일 채팅창 조정
	function moChatWinSet(){
		var win_H=$(window).height();
		// var chatWin_H=win_H-(46+40+47); 내부 팝업 용 : 타겟뷰타이틀 + 상단헤더 + 하단입력칸
		var chatWin_H=win_H-(40+63); // 새창 용 : 상단헤더 + 하단입력칸
		$('.forMobile').find('.chat_box').css('height',chatWin_H+'px');
	}

// 메시지 출력 함수
	function printChatMessage(user){
		// user 값이 0이면 고객, 1이면 상담원
		var $instText=$('.inst_text');
		if ($instText.val()==''||$instText.val()==defaultSendMsg){
			alert('메시지를 입력해주세요.');
			$instText.focus();
		}else{
			if (user==0){ // 메시지 출력이 고객일 경우
				var msg='<div class="chat_user chat_enquirer">'+
				'<div class="chat_talk">'+
				'<span class="arrow_con"></span>'+
				'<span class="msg_ment">'+enquirerMsg+'</span>'+
				'</div>'+
				'<div class="chat_time_con">'+
				'<span class="chat_name">'+enquirerName+'</span>'+
				'<img src="images/ico_time.png" alt="time icon">'+
				'<span class="chat_time">'+chatTime+'</span>'+
				'</div>'+
				'</div>';
			}else{ // 메시지 출력이 상담원일 경우
				var msg='<div class="chat_user chat_adviser">'+
				'<div class="adviser_icon"><img src="'+adviserIcon+'" alt=""></div>'+
				'<div class="chat_talk"><span class="arrow_con"></span>'+
				'<span class="msg_ment">'+adviserMsg+'</span>'+
				'</div>'+
				'<div class="chat_time_con">'+
				'<span class="chat_name">'+adviserName+'</span>'+
				'<img src="images/ico_time.png" alt="time icon">'+
				'<span class="chat_time">'+chatTime+'</span>'+
				'</div>'+
				'</div>';
			}
			$('.chat_inBox').append(msg); // 메시지 출력
			$('.chat_box').animate({scrollTop:$('.chat_inBox').height()+'px'},0); // 출력 후 화면 하단 이동
			if ($('.container').attr('value')!='0'){
				firstMsgInsert();
			}
		}
	}

// 배정 예정의 상담원 정보
	function adviserShow(){
		$('.chat_loadBox').hide();
		$('.chat_adviserBox').show();
	}

// 관리자 채팅 탭 버튼, 위치값
	function btnAdminLeft(){
		$('.chating_article').each(function(){
			var articleNum=$(this).attr('value');
			$(this).find('.btnAdmin_box').css('left',articleNum*106+'px');
		});
	}

// 모바일 광고 이미지 사이즈 조정
	function setToAdSnap(){
		var snapItemNum=$('.snap_item').length;
		var snap_list_width=snapItemNum*100;
		var snap_item_width=$('.snap_ad_box').width();
		$('.snap_list').css({width:snap_list_width+'%',left:0});
		$('.snap_item').css({width:snap_item_width+'px'});
		snapCount=0;
	}

$(function(){
	moChatWinSet();
	btnAdminLeft();
	setToAdSnap();

	// 임시용 이벤트
		// 현재 로딩 창을 클릭하면 상담원 정보를 임시로 보도록 함.
		// 로딩이 완료되면 adviserShow() 함수 실행
		$('.chat_loadBox').click(function(){adviserShow();});
		// 채팅 설정 변경하기
			$('.btn_firstAdviserOnOff').click(function(){
				if (adviserInsert==false){
					adviserInsert=true;
					$(this).text('상담원 배정 [후]');
				}else{
					adviserInsert=false;
					$(this).text('상담원 배정 [전]');
				}
			});
			$('.btn_chatUserOnOff').click(function(){
				if (uesUserCheck==0){
					uesUserCheck=1;
					$(this).text('채팅 대상자 [상담원]');
				}else{
					uesUserCheck=0;
					$(this).text('채팅 대상자 [고객]');
				}
			});

	// 채팅창 관련 이벤트
		// 상담원 정보
			$('.btn_adviserInfo').on('click',function(){
				$('.chat_botBox').hide();
				$('.chat_adviserInfo').show();
			});

		// 상담 예약 입력창
			$('.btn_adviserReserve').on('click',function(){
				$('.chat_botBox').hide();
				$('.chat_adviserReserve').show();
			});

		// 상담 완료
			$('.btn_reserve').on('click',function(){
				if ($('.user_name').val()==''){
					alert('성함을 입력해주세요.');
					$('.user_name').focus();
					return false;
				}
				if ($('.inst_num').eq(0).val()==''){
					alert('연락처를 입력해주세요.');
					$('.inst_num').eq(0).focus();
					return false;
				}
				if ($('.inst_num').eq(1).val()==''){
					alert('연락처를 입력해주세요.');
					$('.inst_num').eq(1).focus();
					return false;
				}
				$('.chat_adviserReserve').hide();
				$('.chat_reserveCom').show();
			});

		// 전화번호 숫자만 입력 가능
			$('.inst_num').on('keypress keydown',function(Ev){
				var eCode=(window.netscape) ? Ev.which : event.keyCode;
				if ((eCode<48 || eCode>57) && (eCode<96 || eCode>105) && eCode!=8 && eCode!=9 && eCode!=13 && (eCode<37 || eCode>40)){
					if (window.netscape){ Ev.preventDefault(); }
					else{ event.returnValue=false; }
				}
			});

		// 하단 정보창 닫기
			$('.btn_close').on('click',function(){
				$('.chat_botBox').hide();
			});

		// 메세지 전송 - 엔터키 입력
			$('.inst_text').on('keypress',function(e){
				if (e.keyCode==13&&e.shiftKey){ return; // 두줄입력
				}else if(e.keyCode==13){
					if (uesUserCheck==0){
						enquirerMsg=$('.inst_text').val();
					}else{
						adviserMsg=$('.inst_text').val();
					}
				}
			});
			$('.inst_text').on('keyup',function(e){
				if (e.keyCode==13&&e.shiftKey){ return; // 두줄입력
				}else if(e.keyCode==13){
					printChatMessage(uesUserCheck);
					$('.inst_text').val(''); 
				}
			});

		// 메세지 전송 - 버튼 클릭
			$('.btn_msg').on('click',function(){
				if (uesUserCheck==0){
					enquirerMsg=$('.inst_text').val();
				}else{
					adviserMsg=$('.inst_text').val();
				}
				printChatMessage(uesUserCheck);
				$('.inst_text').val(''); // 메시지 입력 후 채팅창 비움
				$('.inst_text').focus(); // 버튼 클릭 후 채팅입력칸으로 포커스 이동
			});

		// 메세지 입력창 포커스 - 기본 메시지 온오프
			$('.inst_text').on('focus',function(){
				if ($(this).val()==defaultSendMsg){$(this).val('');}
			});
			$('.inst_text').on('blur',function(){
				if ($(this).val()==''){$(this).val(defaultSendMsg);}
			});

		// 예약 입력 완료
			$('.btn_completion').on('click',function(){
				$('.background_layer').hide();
				$('.chat_topBox').hide();
				$('.chat_botBox').hide();
				$('.inst_text').attr('disabled',false);
				$('.chat_inBox').empty();
				$('#reserveForm')[0].reset();
				adviserInsert=false;
			});

		// 광고 시작 - 데스크탑일 경우
			function adOpeningDesk(){
				var chatTop;
				var chatAdHeight;
				var firstScrollCheck=false;
				if (userAgt.indexOf('Chrome')>0){
					$('img:last').load(function(){
						chatTop=$('.targetviewChatSystem').offset().top-360;
						chatAdHeight=$('.chat_ad_con').height();
						$('.chat_ad_con').css({marginTop:'-'+chatAdHeight+'px'});
					});
				}else{
					chatTop=$('.targetviewChatSystem').offset().top-360;
					chatAdHeight=$('.chat_ad_con').height();
					$('.chat_ad_con').css({marginTop:'-'+chatAdHeight+'px'});
				}
				$(window).scroll(function(){
					var winScroll=$(window).scrollTop();
					if (winScroll>chatTop){
						if (!firstScrollCheck){
							$('.chat_ad_con').animate({marginTop:'50px'},200).animate({marginTop:'0px'},200);
							firstScrollCheck=true;
						}
					}
				});
			}
			if ($('.targetviewChatSystem').hasClass('forDesktop')){
				adOpeningDesk();
			}

		// 광고 시작 - 모바일일 경우
			$('.btn_m_alert').click(function(){
				$('.targetviewChatSystem').find('.chat_wrap').show();
				$('.targetviewChatSystem').animate({top:'0px'},300,function(){
					$('.targetviewChatSystem').animate({top:'46px'},300);
					$('.mobile_alert').animate({bottom:'-38px'},300);
				});
			});
			$('.btn_m_windowClose').click(function(){
				$('.targetviewChatSystem').animate({top:'0px'},100,function(){
					$('.targetviewChatSystem').animate({top:'100%'},300,function(){
						$('.targetviewChatSystem').find('.chat_wrap').hide();
					});
					$('.mobile_alert').animate({bottom:'0px'},300);
				});
			});

		// 사용자 채팅 광고 클릭
			/*$('.chat_ad_con img').click(function(){
				if (!$(this).data('click')){
					$('.chat_ad_imgBack').show();
					$(this).css({
						position:'fixed',
						maxWidth:'none',
						maxHeight:'none'
					}).css({margin:'-'+$(this).height()/2+'px 0 0 -'+$(this).width()/2+'px'});
					$(this).data('click',1);
				}else{
					$('.chat_ad_imgBack').hide();
					$(this).css({
						position:'static',
						maxWidth:'100%',
						maxHeight:'200px'
					}).css({margin:'10px auto'});
					$(this).data('click',0);
				}
			});*/

	// 관리자 관련 이벤트
		// 관리자 상태 변경
			var user_status_clickCheck=false;
			$('.user_status').click(function(){
				if (!user_status_clickCheck){
					$('.user_status_list').slideDown(200);
					$('.user_status').addClass('on');
					user_status_clickCheck=true;
				}else{
					$('.user_status_list').slideUp(200);
					$('.user_status').removeClass('on');
					user_status_clickCheck=false;
				}
			});
			$('.user_status_list li').on('click',function(){
				var stNum=$(this).attr('value');
				var stTxt=$(this).text();
				$('.status_txt').text(stTxt);
				$('.user_status').removeClass().addClass('user_status set'+stNum);
				$('.user_status').removeClass('on');
				$('.user_status_list').slideUp(200);
				user_status_clickCheck=false;
				if (stNum==3){
					alert('왜? 자리 비우고 놀라고? 일 안해?');
				}
			});
			$('.btn_logout').click(function(){
				alert('로그아웃을 왜해? 지금 월급 밑장 빼기냐?');
			});

		// 메뉴 숨기기
			$('.btn_sideOut').click(function(){
				if (!$(this).data('click')){
					$('.sideMenu_area').animate({left:'-198px'},200);
					$('.content_area').animate({minWidth:'1024px',marginLeft:'0px'},200);
					$(this).data('click',1).addClass('on');
				}else{
					$('.sideMenu_area').animate({left:'0px'},200);
					$('.content_area').animate({minWidth:'824px',marginLeft:'200px'},200);
					$(this).data('click',0).removeClass('on');
				}
			});

		// 로그인 아이디 저장 체크
			$('.saveId_con label').click(function(){
				if (!$(this).data('click')){
					$(this).removeClass('on').data('click',1);
				}else{
					$(this).addClass('on').data('click',0);
				}
			});
			$('.saveId_con button').on('keydown',function(e){
				if (e.keyCode==32){
					$('.saveId_con label').click();
					$('.btn_login').focus();
				}
			});

		// 관리자 채팅창 - 클릭 대상 상위로 노출
			$('.chatAdmin_wrap').on('click','.btnAdmin_box',function(){
				$('.chating_article').css('zIndex',1).removeClass('on');
				$(this).parent('.chating_article').addClass('on').css('zIndex',2);
			});

		// 관리자 명단 셋팅 열림
			$('.customer_article').on('click','.customer_name',function(){
				$('.customer_set_box').hide();
				$(this).siblings('.customer_set_box').show();
			});

		// 관리자 명단 셋팅 리스트 클릭 후 닫힘
			$('.customer_article').on('click','.customer_set_list li',function(){
				$('.customer_set_box').hide();
			});

		// 관리자 채팅, 메모창 열림
			$('.chatAdmin_wrap').on('click','.btn_memoPopup',function(){
				$('.chat_memoBox').show();
			});
			$('.chatAdmin_wrap').on('click','.btn_memoConfirm',function(){
				$('.chat_memoBox').hide();
			});

		// 명단 리스트, 메모장 열림
			$('.td_memo_box').on('click','.btn_memoPopup',function(e){
				var winHalf=$(window).height()/2;
				if (winHalf>e.pageY){
					$('.chat_memoBox').removeClass('top bot').hide();
					$(this).next('.chat_memoBox').addClass('bot').show();
				}else{
					$('.chat_memoBox').removeClass('top bot').hide();
					$(this).next('.chat_memoBox').addClass('top').show();
				}
			});
			$('.td_memo_box').on('click','.btn_memoConfirm',function(){
				$('.chat_memoBox').hide();
			});

		// 예약 명단 상태 완료 버튼
			$('.btn_status1').click(function(){
				confirm('상담을 완료 하시겠습니까?');
			});

		// 팝업 정보
			// 팝업 이동
			$('.popup_layer').draggable({handle:'.title_box'});
			// 팝업 노출 - 예약고객설정
			$('.btn_reserveOpen').click(function(){
				$('.customer_reserve').show();
			});
			// 팝업 노출 - 채팅내역보기
			$('.btn_viewChatOpen').click(function(){
				$('.chating_history').show();
			});
			// 팝업 노출 - 광고세팅 미리보기
			$('.btn_previewAdOpen').click(function(){
				$('.preview_adseting').show();
			});
			// 팝업 닫기
			$('.popup_layer .btn_close').click(function(){
				$(this).parent().parent('.popup_layer').hide();
			});
			$('.customer_reserve .btn_cancel').click(function(){
				$('.customer_reserve').hide();
			});
			// 선택된 팝업창 상위노출
			$('.popup_layer').click(function(){
				$('.popup_layer').css('zIndex','100');
				$(this).css('zIndex','101');
			});

	// 모바일 광고 이미지 관련 이벤트
		$('.btn_snap_l').click(function(){
			if (snapCount>0){
				snapCount--;
				$('.snap_list').stop().animate({left:'-'+snapCount*$('.snap_ad_box').width()+'px'},200);
			}
		});
		$('.btn_snap_r').click(function(){
			if (snapCount<($('.snap_item').length-1)){
				snapCount++;
				$('.snap_list').stop().animate({left:'-'+snapCount*$('.snap_ad_box').width()+'px'},200);
			}
		});
		var touchCheck=false;
		var touchStart=0;
		var touchEnd=0;
		var touchMove=0;
		var snap_list_posLeft=0;
		var touchMovePageX;
		$('.snap_ad_box').on('touchstart',function(e){//$('.snap_ad_box').on('mousedown',function(e){
			var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
			touchStart=touch.pageX;
			snap_list_posLeft=parseInt($('.snap_list').css('left'));
			touchCheck=true;
		});
		$('.snap_ad_box').on('touchmove',function(e){//$('.snap_ad_box').on('mousemove',function(e){
			var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
			if (touchMovePageX>10 || touchMovePageX<-10){ e.preventDefault(); }
			if (touchCheck==true){
				touchMovePageX=(touch.pageX-touchStart)+snap_list_posLeft;
				$('.snap_list').css({left:touchMovePageX+'px'});
			}
		});
		$('.snap_ad_box').on('touchend',function(e){//$('.snap_ad_box').on('mouseup',function(e){
			var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
			touchEnd=touch.pageX;
			touchCheck=false;
			touchMove=touchStart-touchEnd;
			if (touchMove>50){
				if (snapCount<($('.snap_item').length-1)){
					snapCount++;
					$('.snap_list').stop().animate({left:'-'+snapCount*$('.snap_ad_box').width()+'px'},200);
				}else{
					$('.snap_list').stop().animate({left:'-'+($('.snap_item').length-1)*$('.snap_ad_box').width()+'px'},200);
				}
			}else if(touchMove<-50){
				if (snapCount>0){
					snapCount--;
					$('.snap_list').stop().animate({left:'-'+snapCount*$('.snap_ad_box').width()+'px'},200);
				}else{
					$('.snap_list').stop().animate({left:'0px'},200);
				}
			}else{
				$('.snap_list').stop().animate({left:'-'+snapCount*$('.snap_ad_box').width()+'px'},200);
			}
		});

	// 고객 전화번호 수집창
		$('.btn_close_enquirer_phone').click(function(){
			$('.enquirer_phone_box').animate({top:'100%'},300);
		});
		$('.btn_send_phone').click(function(){
			if ($('.inst_enquirer_phone').val()==''){
				alert('연락처를 입력해 주세요.');
			}else{
				alert('좋아! 너의 정보! 중국 동포와 공유해 주마!!!')
				$('.enquirer_phone_box').animate({top:'100%'},300,function(){
					$('.enquirer_phone_box').remove();
				});
			}
		});

		// 채팅창 활성/비활성 함수
			var openCheck_inactive;
			if ($('.targetviewChatSystem').hasClass('forDesktop type_p type_p1')){
				openCheck_inactive=false;
			}else if ($('.targetviewChatSystem').hasClass('forDesktop type_p type_p2')){
				openCheck_inactive=true;
				$('.chat_head .btn_closePopLayer').addClass('on');
			}

			function setInactiveChatBox(){
				if (!openCheck_inactive){
					if ($('.targetviewChatSystem').hasClass('forDesktop type_p type_p1')){
						// 하단 위치 시작형
						$('.inactive_chatBox').animate({top:'100%'},200,function(){
							$('.forDesktop.type_p').animate({height:'486px'},400,function(){
								$('.chat_head .btn_closePopLayer').addClass('on');
								$('.chat_head .chat_tit').fadeIn(600);
								$('.chat_head .btn_tel').delay(200).animate({left:'8px'},600,function(){
									openCheck_inactive=true;
								});
							});
						});
					}else if ($('.targetviewChatSystem').hasClass('forDesktop type_p type_p2')){
						// 특정 위치 시작형
						$('.inactive_chatBox').animate({top:'100%'},400);
						$('.forDesktop.type_p').animate({height:'486px'},400,function(){
							$('.chat_head .btn_closePopLayer').addClass('on');
							$('.chat_head .chat_tit').fadeIn(600);
							$('.chat_head .btn_tel').delay(200).animate({left:'8px'},600,function(){
								openCheck_inactive=true;
							});
						});
					}
				}else{
					// 특정 위치 시작형
					if ($('.targetviewChatSystem').hasClass('forDesktop type_p type_p1')){
						// 하단 위치 시작형
						$('.forDesktop.type_p').animate({height:'178px'},200,function(){
							$('.inactive_chatBox').animate({top:'40px'},400,function(){
								$('.chat_head .btn_closePopLayer').removeClass('on');
								$('.chat_head .chat_tit').fadeOut(600);
								$('.chat_head .btn_tel').delay(200).animate({left:'-50px'},600,function(){
									openCheck_inactive=false;
								});
							});
						});
					}else if ($('.targetviewChatSystem').hasClass('forDesktop type_p type_p2')){
						// 특정 위치 시작형
						$('.forDesktop.type_p').animate({height:'178px'},400);
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



$(window).resize(function(){
	setToAdSnap();
	moChatWinSet();
});