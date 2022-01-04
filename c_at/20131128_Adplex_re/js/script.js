// 팝업 설정
	/*
	팝업은 해당 페이지 내부에서 순차적으로 공통된 클래스로 닫기, 열기를 구현
	열기 : popuplayer1, popuplayer2 ...
	닫기 : popuplayer > btn_close 공통
	*/
	// 열기
	function popuplayerOpen(n,tit){
		//$('body').css({overflowY:'hidden'});
		$('.background_layer').fadeIn();
		$('.popuplayer'+n).show();
		$('.popTitleSet').text(tit);
	}

// media 레이아웃 구조 설정
	function mediaLayoutSet(){
		var left_height = $('.media_content .left_section').height();
		var right_height = $('.media_content .right_section').height();
		var high_size = (left_height > right_height) ? left_height : right_height;
		$('.media_content').css('height',high_size+'px');
	}

// 폼 확인 메세지 함수 영역
	var chBoolean = true; // 임시 컨펌 값 true 면 .confirm_message_box_can 노출 false 면 .confirm_message_box_not 노출
	var formCheckAlertMsg = '정상적으로 등록 되었습니다.';
// 메세지 창 닫는 함수
	function fadeOutMag(){$('.confirm_message_box').fadeOut(1000);}
// 폼 확인 메세지 함수
	function formCheckAlert(){
		//chBoolean 이상 유무 체크
		if (chBoolean){
			// 이상 없음 
			$('.confirm_message_box_can').show().find('.confirm_message').text(formCheckAlertMsg);
		}else{
			// 오류 있음
			$('.confirm_message_box_not').show().find('.confirm_message').text(formCheckAlertMsg);
		}
		setTimeout(fadeOutMag,1000);
	}

// 확인 메세지 창
	function confirmMsgSel(msg){
		$('.confirmlayer .confirmlayer_msg').text(msg);
		$('.background_layer2').fadeIn();
		$('.confirmlayer').show();
	}

// 안내 메세지 창
	function guideMsgWin(num){
		$('.confirm_message_box'+num).show();
		setTimeout(fadeOutMag,1000);
	}

// 발행업체선택창
	function publishSelectWin(){
		$('.publish_select_popupIn').show();
	}

// 메모작성창
	function memoInstWin(){
		$('.background_layer2').fadeIn();
		$('.memo_popupIn1').show();
	}

// 발행완료창
	function confirmAlert(msg){
		confirm(msg);
	}


$(function(){

	// 팝업 설정 - 닫기 // 닫기 버튼, 취소 버튼, 백그라운드 레이어 클릭시 팝업창 닫음
		$('.popuplayer .btn_close, .background_layer').click(function(){
			//$('body').css('overflowY','scroll');
			$('.background_layer').fadeOut();
			$('.popuplayer').hide();
		});

	// media 레이아웃 구조 설정
		$('img:last').load(function(){
			mediaLayoutSet();
		});

	// media 레이아웃 이동 버튼
		if (	$('.media_container').hasClass('targetviewlink_media_container')){
			var containerLimit = 1544;
		}else{
			var containerLimit = 1838;
		}

		var containerW =  $('.container').width();
		if (containerW >= containerLimit){
			var slideMoveLeft = 0;
			var slideMoveLeft2 = 0;
		}else{
			var slideMoveLeft = containerW-(containerLimit-18);
			var slideMoveLeft2 = containerW-containerLimit;
		}
		$(window).resize(function(){
			containerW =  $('.container').width();
			slideMoveLeft = containerW-(containerLimit-18);
			if (containerW >= containerLimit){
				slideMoveLeft = 0;
				slideMoveLeft2 = 0;
			}else{
				slideMoveLeft = containerW-(containerLimit-18);
				slideMoveLeft2 = containerW-containerLimit;
			}
		});
		$('.btn_section_adjust').click(function(){
			if (!$(this).data('clickCheck')){
				$(this).html('▶').attr('title','오른쪽으로 숨김');
				$('.media_content .right_section').animate({marginLeft:slideMoveLeft+'px'},200);
				$('.media_content .btn_section_adjust').animate({marginLeft:slideMoveLeft2+'px'},200);
				$(this).data('clickCheck', 1);
			}else{
				$(this).html('◀').attr('title','왼쪽으로  레이어 확장');
				$('.media_content .right_section').animate({marginLeft:'0px'},200);
				$('.media_content .btn_section_adjust').animate({marginLeft:'0px'},200);
				$(this).data('clickCheck', 0);
			}
		});

	// media 상세정보 노출
		$('.media_content .btn_detail_view').click(function(){
			$('.media_content .right_section').css('height','auto');
			$(this).parent().parent().next('tr').find('.detail_view_td').show();
			mediaLayoutSet();
		});
		$('.media_content .detail_view_section .btn_close').click(function(){
			$(this).parent().parent().parent('.detail_view_td').hide();
			$('.media_content .right_section').css('height','100%');
			mediaLayoutSet();
		});

	// media 매체제공영역코드 전체선택 버튼
		$('.btn_allchoice').click(function(){
			$('.codeview_article .bot_con textarea').select();
		});

	// media 매체제공 영역 열기
		$('.media_content .right_section .btn_codeshow').click(function(){
			$('.background_in_layer').fadeIn();
			$('.codeview_article').show();
		});
	// media 매체제공 영역 닫기
		$('.codeview_article .top_con .btn_close').click(function(){
			$('.background_in_layer').fadeOut();
			$('.codeview_article').hide();
		});

	/*
	// 담당자, 광고주 , 대행사 선택
		var $category_select_box = $('.category_select_box');
		var $depth1_category_list = $category_select_box.find('.depth1_category_list');
		var $depth2_category_box = $depth1_category_list.find('.depth2_category_box');
		var $depth3_category_box = $depth2_category_box.find('.depth3_category_box');
		var $depth4_category_box = $depth3_category_box.find('.depth4_category_box');

	// 2뎁스 오픈
		$category_select_box.find('.depth1_menu').hover(function(){
			if ($(this).hasClass('detail_on')){
				$depth1_category_list.css({paddingLeft:'183px'});
				$(this).find('.depth2_category_box').show();
				$('.tinyscrollbar2').tinyscrollbar();
			}
		},function(){
			$depth1_category_list.css({paddingLeft:'0'});
			$(this).find('.depth2_category_box').hide();
		});
	// 3뎁스 오픈
		$category_select_box.find('.depth2_menu').hover(function(){
			if ($(this).hasClass('detail_on')){
				$depth1_category_list.css({paddingLeft:'366px'});
				$depth2_category_box.css({paddingLeft:'183px'});
				$(this).find('.depth3_category_box').show();
				$('.tinyscrollbar3').tinyscrollbar();
			}
		},function(){
			$depth1_category_list.css({paddingLeft:'183px'});
			$depth2_category_box.css({paddingLeft:'0'});
			$(this).find('.depth3_category_box').hide();
		});
	// 4뎁스 오픈
		$category_select_box.find('.depth3_menu').hover(function(){
			if ($(this).hasClass('detail_on')){
				$depth1_category_list.css({paddingLeft:'549px'});
				$depth2_category_box.css({paddingLeft:'366px'});
				$depth3_category_box.css({paddingLeft:'183px'});
				$(this).find('.depth4_category_box').show();
				$('.tinyscrollbar4').tinyscrollbar();
			}
		},function(){
			$depth1_category_list.css({paddingLeft:'366px'});
			$depth2_category_box.css({paddingLeft:'183px'});
			$depth3_category_box.css({paddingLeft:'0'});
			$(this).find('.depth4_category_box').hide();
		});

	*/

	// sub menu 노출
		$('.gnb_area,.submenu_area').hover(function(){
			$('.submenu_area').show();
		},function(){
			$('.submenu_area').hide();
		});

	// gnb hover 이벤트
		$('.gnb_list li').hover(function(){
			for (i=1; i<=$('.gnb_list li').length; i++){
				if ($(this).hasClass('menu'+i)){
					$('.submenu'+i).addClass('hover');
				}
			}
		},function(){
			$('.submenu').removeClass('hover');
		});

	// 신규영역생성 - 광고영역 정보 - 버튼 리스트 온오프
		$('.newarea_info_article .button_list li button').click(function(){
			$('.newarea_info_article .button_list li button').attr('class','btn_type1');
			$(this).attr('class','btn_type6 color_type6');
		});

	// USER DB 등록현황 - 상태별 보기 버튼 온오프
		$('.status_btn_list .btn_type_set').click(function(){
			$('.status_btn_list .btn_type_set').removeClass('btn_type3 color_type6').addClass('btn_type1 color_type7');
			$(this).removeClass('btn_type1 color_type7').addClass('btn_type3 color_type6');
		});

	// 신규영역생성 - 광고영역 정보 - step 온오프
		$('.newarea_step_article .top_con').click(function(){
			if (!$(this).parent().hasClass('on')){
				$('.newarea_step_article').removeClass('on');
				$(this).parent().addClass('on');
				$('.newarea_step_article .bot_con').slideUp(100);
				$(this).next('.bot_con').slideDown(100);
				setTimeout(mediaLayoutSet,100);
			}
		});

	// 탭 메뉴 액션
		$('.tab_box_wrap .tab_tit').click(function(){
			$(this).siblings('.tab_tit').removeClass('on');
			$(this).siblings('.tab_box').hide();
			$(this).addClass('on');
			$(this).next('.tab_box').show()
			mediaLayoutSet();
		});

	// 캠페인 등록/수정 - 과금방식
		/*
		$('.charge_way_list .charge_way_radio').bind('click mousedown', function(){
			if ( $('.charge_way_list .charge_way_radio_cpp').is(':checked')){
				$('.cpc_cost_con').show();
				$('.cpc_cost_select').hide();
				$('.cpc_cost_select2').show();
			}else if ( $('.charge_way_list .charge_way_radio_cpp2').is(':checked')){
				$('.cpc_cost_con').show();
				$('.cpc_cost_select').hide();
				$('.cpc_cost_select3').show();
			}else{
				$('.cpc_cost_con').hide();
				$('.cpc_cost_select').hide();
			}
		});
		*/

	// 캠페인 소재관리 - 전체영역 영역 확장/축소
		$('.material_area_article .btn_allview').click(function(){
			if (!$(this).data('clickCheck')){
				$(this).html('▲').attr('title','테이블 영역 축소');
				$(this).siblings('.data_table_box').css('height','auto');
				$(this).data('clickCheck', 1);
			}else{
				$(this).html('▼').attr('title','테이블 영역 확장');
				$(this).siblings('.data_table_box').css('height','194px');
				$(this).data('clickCheck', 0);
			}
		});

	// 캠페인 소재관리 - 전체영역 선택 포커스
		 //td 내 select 요소에 대한 선행 작업 필요함
		/*$('.material_table_box .data_table_box table td').click(function(){
			if (!$(this).parent().data('clickCheck')){
				$(this).parent().addClass('on').data('clickCheck', 1);
			}else{
				$(this).parent().removeClass('on').data('clickCheck', 0);
			}
		});*/

	// USER DB 등록현황 - 입력폼 제목 클릭 오픈
		$('.userdb_container .open_user_content').click(function(){
			$('.user_content').hide();
			if (!$(this).data('clickCheck')){
				$(this).parent().next('tr').find('.user_content').show();
				$('.userdb_container .open_user_content').data('clickCheck',0);
				$(this).data('clickCheck',1);
			}else{
				$(this).parent().next('tr').find('.user_content').hide();
				$(this).data('clickCheck',0);
			}
		});
		$('.user_list_table').on('click','.btn_userdb_detail td', function(){
			$('.user_detail_content').hide();
			if (!$(this).data('clickCheck')){
				$(this).parent().next('tr').find('.user_detail_content').show();
				$('.btn_userdb_detail td').data('clickCheck',0);
				$(this).data('clickCheck',1);
			}else{
				$(this).parent().next('tr').find('.user_detail_content').hide();
				$(this).data('clickCheck',0);
			}
		});

	// CPC / 리타겟팅 매출내역 기간 선택 버튼
		$('.date_select_btn_box .btn_con').click(function(){
			$('.date_select_btn_box .btn_con').removeClass('on');
			$(this).addClass('on');
			return false;
		});

	// 패키지관리 - 패키지 신규 생성, 패키지 수정
		$('.btn_package_seting').click(function(){
			$(this).hide();
			$(this).siblings('button').show();
			var setPackage = $(this).parent().siblings('.package_seting_article');
			setPackage.find('.before_con').hide();
			setPackage.find('.slot_set_article').append('<input type="text" class="after_con" /> <span class="after_con">/</span> <input type="text" class="after_con" />');
			setPackage.find('.amount_set_article').append('<input type="text" class="after_con" />');
		});

		$('.btn_package_cancel').click(function(){
			$(this).hide();
			$(this).siblings().hide();
			$(this).siblings('.btn_package_seting').show();
			var setPackage = $(this).parent().siblings('.package_seting_article');
			setPackage.find('.after_con').hide();
			setPackage.find('.before_con').show();
		});

		$('.btn_package_save').click(function(){
			alert('기능이 모두 .click() 메소드로 되었습니다. 작업 하실 때 말씀주세요.');
		});

	// 패키지관리 - 중간판매 영역 설정 , 가져올영역선택 액션
		$('.data_table_box.type2 thead').click(function(){
			if (!$(this).data('clickCheck')){
				$(this).next('tbody').show();
				$(this).data('clickCheck',1);
			}else{
				$(this).next('tbody').hide();
				$(this).data('clickCheck',0);
			}
		});

	// 패키지관리 - 중간판매 영역 설정 , 슬롯열기닫기
		$('.data_table_box .btn_slotswitch').click(function(){
			if (!$(this).data('clickCheck')){
				$(this).parent().parent().next('.detail_view').find('td').show();
				$(this).addClass('on').html('슬롯닫기 ▲');
				$(this).data('clickCheck',1);
			}else{
				$(this).parent().parent().next('.detail_view').find('td').hide();
				$(this).removeClass('on').html('슬롯보기 ▼');
				$(this).data('clickCheck',0);
			}
		});

	// 로그인 버튼 온오프
		$('.login_wrap .btn_login').hover(function(){
			$(this).attr('src',$(this).attr('src').replace('_off','_on'));
		},function(){
			$(this).attr('src',$(this).attr('src').replace('_on','_off'));
		});

	// 체크박스 일괄 체크하기
		$('.btn_all_check').on('click',function(){
			if ($(this).prop('checked')){
				$('.all_check_child').prop('checked', true);
			}else{
				$('.all_check_child').prop('checked', false);
			}
		});

	// 폼 확인 메세지 창 닫기
		$('.confirm_message_box .btn_close').on('click',function(){
			$(this).parent().hide();
		});

	// 확인 레이어창 닫기
		$('.confirmlayer .btn_close').on('click',function(){
			$('.background_layer2').fadeOut();
			$('.confirmlayer').hide();
		});

	// 신규회원 가입 유형 선택
		$('.member_join_selecter').change(function(){
			var thisValue = Number($(this).val());
			switch (thisValue){
				case 0:
					$('.member_join_step').hide();
					break;
				case 1:
					$('.member_join_step').hide();
					$('.member_join_step1').show();
					break;
				case 2:
					$('.member_join_step').hide();
					$('.member_join_step2').show();
					break;
				case 3:
					$('.member_join_step').hide();
					$('.member_join_step3').show();
					break;
			}
		});

	// 매체별 소재관리 테이블 열기 닫기
		$('.btn_media_material_detail').click(function(){
			$(this).parent().parent().next('tr').find('.media_material_detail_content').show();
		});
		$('.close_media_material_detail').click(function(){
			$(this).parent().parent().hide();
		});

	// 메인 대쉬보드 탭 이벤트
		$('.dashboard_wrap .dashboard_tit').click(function(){
			$('.dashboard_wrap .dashboard_tit').removeClass('on');
			$('.dashboard_wrap .dashboard_content').removeClass('on');
			$(this).addClass('on').next().addClass('on');
		});

	// 소재관리 이미지 소재 추가하기
		$('.btn_add_input').on('click', function(type){
			type = $(this).val();
			var file_set = '';
			if (type == 1){
				file_set += '<input type="text" class="input_w420">';
			}else{
				file_set += '<div class="file_set">';
				file_set += '<input type="text" class="input_w420" readonly>';
				file_set += ' <label for="file_set" class="btn_type_set btn_type_set_s btn_type2 color_type7">이미지 변경</label>';
				file_set += '<input type="file" id="file_set">';
				file_set += '</div>';
			}
			$(this).prev().append(file_set);
		});

	// 소재관리 팝업 - 라이브러리 열기/닫기
		$('.btn_library_table').click(function(){
			if (!$(this).data('clickCheck')){
				$(this).parents('.material_table_article').next().show();
				$(this).text('라이브러리 닫기');
				$(this).data('clickCheck',1);
			}else{
				$(this).parents('.material_table_article').next().hide();
				$(this).text('라이브러리 열기');
				$(this).data('clickCheck',0);
			}
		});

	// 수익금조회 탭 버튼 - 테이블 변경
		$('.calculate_container .link_tab_box .btn_link').click(function(){
			var tab_num = $(this).attr('value');
			$('.calculate_container .link_tab_box .btn_link').removeClass('on');
			$(this).addClass('on');
			$('.calculate_table_box').hide();
			$('.calculate_table_box'+tab_num).show();
		});


	// 간략 통계 상세 테이블 열기
		$('.simple_statistics_container .btn_detail').click(function(){
			if (!$(this).data('clickCheck')){
				$(this).html('▲').attr('title','상세정보 닫기');
				$(this).parent().parent().next('tr').find('.detail_table_td').show();
				$(this).data('clickCheck', 1);
			}else{
				$(this).html('▼').attr('title','상세정보 열기');
				$(this).parent().parent().next('tr').find('.detail_table_td').hide();
				$(this).data('clickCheck', 0);
			}
		});

	// 보도자료 작성 -  기사 보기 - 본문 전체 보기
		$('.btn_report_content').click(function(){
			if (!$(this).data('clickCheck')){
				$('.report_content_txt').css('height','auto');
				$(this).data('clickCheck',1).text('본문 접기');
			}else{
				$('.report_content_txt').css('height','220px');
				$(this).data('clickCheck',0).text('본문 더보기');
			}
		});

	// 캠페인 - 보도자료관리 - 보도자료 완료기사 수정 기능
		$('.btn_report_view_option').click(function(){
			if (!$(this).data('clickCheck')){
				$('.report_data_view_con').hide();
				$('.report_data_modify_con').css('display','table-cell');
				$('.report_data_modify_con').each(function(){
					if (!$(this).hasClass('report_data_modify_select')){
						$(this).find('input').attr('value', $(this).prev('.report_data_view_con').text() );
					}
				});
				$(this).text('확인').data('clickCheck',1);
			}else{
				$('.report_data_view_con').css('display','table-cell');
				$('.report_data_view_con').each(function(){
					if ($(this).hasClass('normalText')){

						$(this).text( $(this).next('.report_data_modify_con').find('input').prop('value') );

					}else if ($(this).hasClass('normalSelect')){
						if ($('.report_data_radio_ch1').prop('checked')){
							$(this).text('와이드커버리지');
						}else{
							$(this).text('네이버');
						}
					}else{
						$(this).find('a').attr('href', $(this).next('.report_data_modify_con').find('input').prop('value') );
						$(this).find('a').text( $(this).next('.report_data_modify_con').find('input').prop('value'));
					}
				});
				$('.report_data_modify_con').hide();
				$(this).text('수정').data('clickCheck',0);
			}
		});

	// 관리자 - CPC 업종별 단가관리
		$('.btn_append_cpcCategory').click(function(){
			if (!$(this).data('clickCheck')){
				var tagLine = '<tr><td><input type="text" ></td><td class="center_line"><input type="text" > 원</td><td><input type="text" > 원</td><td class="center_line"><input type="text" > 원</td><td><input type="text" > 원</td><td class="center_line"><input type="text" > 원</td><td><input type="text" > 원</td></tr>';
				$('.category_set_table').find('tbody').append(tagLine);
				$(this).data('clickCheck',1).text('삭제').addClass('btn_type9 color_type6').removeClass('btn_type4 color_type7');
			}else{
				$('.category_set_table').find('tbody').find('tr').last().remove();
				$(this).data('clickCheck',0).text('추가').removeClass('btn_type9 color_type6').addClass('btn_type4 color_type7');
			}
		});

	// 타겟뷰링크 테이블 클릭 시 세부 정보 노출
		$('.targetviewlink_table').on('click','.tbody_celldata',function(){
			if (!$(this).data('clickData')){
				$(this).find('.detailview_cell').show();
				$(this).data('clickData',1);
				$(this).find('tr:first-child td').addClass('on');
			}else{
				$(this).find('.detailview_cell').hide();
				$(this).data('clickData',0);
				$(this).find('tr:first-child td').removeClass('on');
			}
		});

	// 타겟뷰링크 날짜 새창 클릭 이벤트
		$('.targetviewlink_table').on('click','.open_dateData',function(n,tit){
			n.stopPropagation();
			n = $(this).attr('value');
			tit = $(this).text();
			//$('body').css({overflowY:'hidden'});
			$('.background_layer').fadeIn();
			$('.popuplayer'+n).show();
			$('.popTitleSet').text('TargetView Link 통계 ').append('<span class="sub_tit2">'+tit+'</span>');
		});

	// 타겟뷰링크 전환수 클릭 이벤트
		/*$('.targetviewlink_table').on('click','.open_newData',function(e){
			e.stopPropagation();
			alert('새창으로 데이터 창 뜸');
			var this_data	= $(this).attr('cellData'),
				arr_data	= this_data.split(','),
				cpno	= (typeof arr_data[0]==undefined)?"":arr_data[0],
				date	= (typeof arr_data[1]==undefined)?"":arr_data[1],
				smode	= (typeof arr_data[2]==undefined)?"":arr_data[2];
			if(!this_data) return;
			window.open('https://www.2beon.co.kr/stats/detail_rtg.php?cpno='+cpno+'&date='+date+'&smode='+smode, Math.random(), "width=1000,height=800,scrollbars=yes,resizeable=yes');
		});*/
	// 타겟뷰링크 송출영역 보기 버튼
		$('.btn_targetviewlink_emission').click(function(){
			if (!$(this).data('clickCheck')){
				$('.material_article').slideDown();
				$(this).text('닫기 ▲').data('clickCheck',1);
			}else{
				$('.material_article').slideUp();
				$(this).text('열기 ▼').data('clickCheck',0);
			}
		});

	// 타겟뷰링크 소재 추가하기
		$('.btn_add_material').click(function(){
			$('.right_frame_article').hide();
			$('.frame_material_article').fadeIn();
			$('.media_content').css('height','auto');
			mediaLayoutSet();
		});

	// 타겟뷰링크 소재등록창 닫기
		$('.frame_material_article .btn_close').click(function(){
			$('.frame_material_article').hide();
			$('.right_frame_article').fadeIn();
			$('.media_content').css('height','auto');
			mediaLayoutSet();
		});

	// 매체 신규영역 생성
		$('.check_passback').click(function(){
			$('.inst_passback_text').hide();
		});
		$('.check_passback1').click(function(){
			$('.inst_passback_text2').hide();
			$('.inst_passback_text1').show();
		});
		$('.check_passback2').click(function(){
			$('.inst_passback_text1').hide();
			$('.inst_passback_text2').show();
		});

	// 매체 신규영역 생성 - 템플릿
		$('#mz_rskin .skinThumb').hover(function(){
			var skinThumb_imgSrc = $(this).find('input').val();
			$('#mz_rskin .skinThumb_img').show().find('img').attr('src', '../images/content/'+skinThumb_imgSrc);
		},function(){
			$('#mz_rskin .skinThumb_img').hide();
		});

	// 매체관리 신규영역생성 각종 버튼 클릭시 레이아웃 재조정
		$(document).on('click','.ui-button',function(){ var mediaLayoutSetTime = setTimeout(mediaLayoutSet,100);});

	// 팝업 이동
		$('.popuplayer').draggable({handle:'.pop_header'});

	// 메모작성창 닫기
		$('.memo_popupIn1 .btn_close').on('click',function(){
			$('.background_layer2').fadeOut();
			$('.memo_popupIn').hide();
		});

	// 메모확인창 열기/닫기
		$('.open_memoViewPopup').click(function(){
			$('.memo_popupIn2').show();
		});
		$('.memo_popupIn2 .btn_close').click(function(){
			$('.memo_popupIn2').hide();
		});

	// 발행업체선택창 닫기
		$('.publish_select_popupIn .btn_close_inBox, .publish_select_popupIn .btn_box button').on('click',function(){
			$('.publish_select_popupIn').hide();
		});

});// $(function)