// gnb, snb 사이즈 재조정 함수
function navigationResize(){
	var content_H = $(".content").height();
	$(".gnb").css('min-height',content_H+'px');
	$(".snb").css('min-height',content_H+'px');
}

$(function(){
	setTimeout('navigationResize()',100);

	//gnb 메뉴 액션
	$(".gnb_list li").hover(function(){
		if (!$(this).hasClass('on')){
			$(this).find(".mask").stop().animate({left:'-5px'},100).animate({left:'0px'},200);
		}
	},function(){
		if (!$(this).hasClass('on')){
			$(this).find(".mask").stop().animate({left:'160px'},200);
		}
	});

	//디자인 셀렉트박스 액션
	$(".select_box .selected_text,.select_box .arrow_con").bind("click",function(){
		$(this).siblings(".select_list_box").show();//.css({height:'600px'});//ie 버그 해결용 css height 값 설정
	});
	$(".select_box .select_list li").bind("mousedown", function(){
		var selectedValue =  $(this).attr("title");
//		$(this).parent().parent().siblings(".selected_text").val(selectedValue);
		$(this).parent().parent().siblings(".selected_text").attr('value',selectedValue);
		$(this).parent().parent().hide();
	});
	$(".selected_text").blur(function(){
		$(".select_list_box").hide();
	});

	//상품코드 찾기 팝업레이어 노출
	$(".btn_productcode_search").click(function(){
		$(".background_layer2").fadeIn();
		$(".product_search_layer").show();
	});
	//상품코드 찾기 팝업레이어 닫기
	$(".product_search_layer .btn_close").click(function(){
		$(".background_layer2").fadeOut();
		$(".product_search_layer").hide();
	});

	//소재일괄등록 등록완료 버튼
	$(".btn_regi_complete").click(function(){
		$(".background_layer").fadeIn();
		$(".alert_popup").show();
	});
	$(".btn_regi_complete2").click(function(){
		$(".background_layer2").fadeIn();
		$(".alert_popup").show();
	});
	$(".alert_popup1 .btn_close").click(function(){
		$(".background_layer").fadeOut();
		$(".alert_popup").hide();
	});
	$(".alert_popup2 .btn_close").click(function(){
		$(".background_layer2").fadeOut();
		$(".alert_popup").hide();
	});

	//소재등록심사-기본정보-상품코드 블라인드 창
	$(".popuplayer_article .blind_layer button").click(function(){
		$(this).parent().hide();
	});
	$(".popuplayer_article .blind_layer2 button").click(function(){
		$(this).parent().hide();
	});

	//소재등록심사-각 버튼별 레이어 링크
	$(".btn_popuplayer_article1").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_article1").show();
		$("html,body").css('overflow','hidden');
	});
	$(".btn_popuplayer_article2").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_article2").show();
		$("html,body").css('overflow','hidden');
	});
	$(".btn_popuplayer_article3").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_article3").show();
		$("html,body").css('overflow','hidden');
	});
	//소재등록심사-창닫기
	$(".popuplayer_article .title_article .btn_close").click(function(){
		$(".background_layer").fadeOut();
		$(".popuplayer_article").hide();
		$("html,body").css('overflow','visible');
	});

	//미리보기 창 팝업
	$(".btn_preview").click(function(){
		$(".background_layer2").fadeIn();
		$(".popuplayer_preview").show();
	});
	$(".popuplayer_preview .btn_confirm2").click(function(){
		$(".background_layer2").fadeOut();
		$(this).parent().hide();
	});

	//광고현황 차트 요일별 클릭 포커스
	$(".chart_section .table_article th,.chart_section .table_article td").click(function(){
		$(".chart_section .table_article th,.chart_section .table_article td").removeClass('focus');
		$(".chrat_table_article .cell_box").removeClass('focus');
		if ($(this).hasClass("col1")){
			$(".col1").addClass("focus");
		}else if ($(this).hasClass("col2")){
			$(".col2").addClass("focus");
		}else if ($(this).hasClass("col3")){
			$(".col3").addClass("focus");
		}else if ($(this).hasClass("col4")){
			$(".col4").addClass("focus");
		}else if ($(this).hasClass("col5")){
			$(".col5").addClass("focus");
		}else if ($(this).hasClass("col6")){
			$(".col6").addClass("focus");
		}else if ($(this).hasClass("col7")){
			$(".col7").addClass("focus");
		}
	});

	//광고현황 탭 메뉴 변경
	$(".ad_detail_list .list_count").click(function(){
		$(".ad_detail_list .list_count").removeClass("on");
		$(this).addClass("on");
		$(".ad_detail_list .ad_detail_article").hide();
		$(this).next("dd").show();
		navigationResize();
	});

	//광고집행통계 -  탭 메뉴 변경
	$(".statistics_list .statistics_title").click(function(){
		$(".statistics_list .statistics_title").removeClass("on");
		$(this).addClass("on");
		$(".statistics_list .statistics_content").hide();
		$(this).next("dd").show();
		navigationResize();
	});

	//상점설정-상점관리 -  탭 메뉴 변경
	$(".store_sales_list .store_sales_title").click(function(){
		$(".store_sales_list .store_sales_title").removeClass("on");
		$(this).addClass("on");
		$(".store_sales_list .store_sales_content").hide();
		$(this).next("dd").show();
		navigationResize();
	});

	//광고집행통계 - 기본통계 테이블 슬라이드
	$(".statistics_table1 .statistics_numerical_date").click(function(){
		$(".statistics_table1 .statistics_numerical_date").removeClass("on");
		$(this).addClass("on");
		$(".statistics_numerical_detail").hide();
		$(this).next(".statistics_numerical_detail").show();
		navigationResize();
	});

	//판매관리-판매현황-팝업1
	$(".sales_week_table .onsales_day").click(function(){
		$(".background_layer3").fadeIn();
		$(".sales_status_layer1").show();
	});
	$(".sales_week_table .schedule_day").click(function(){
		$(".background_layer3").fadeIn();
		$(".sales_status_layer2").show();
	});

	//판매관리-팝업 닫기
	$(".sales_status_layer .btn_close").click(function(){
		$(".background_layer3").fadeOut();
		$(".sales_status_layer").hide();
	});

	//판매관리-일자별판매현황 탭메뉴
	$(".sales_status_layer1 .sales_detail_list .list_count").click(function(){
		$(".sales_status_layer1 .sales_detail_list .list_count").removeClass("on");
		$(this).addClass("on");
		$(".sales_status_layer1 .sales_detail_list .ad_detail_article").hide();
		$(this).next("dd").show();
	});
	$(".sales_status_layer2 .sales_detail_list .list_count").click(function(){
		$(".sales_status_layer2 .sales_detail_list .list_count").removeClass("on");
		$(this).addClass("on");
		$(".sales_status_layer2 .sales_detail_list .ad_detail_article").hide();
		$(this).next("dd").show();
	});

	//삼정관리-좌표값찾기 팝업
	$(".btn_mapview").click(function(){
		$(".background_layer2").fadeIn();
		$(".popuplayer_map").show();
	});
	$(".popuplayer_map .btn_cencel").click(function(){
		$(".background_layer2").fadeOut();
		$(".popuplayer_map").hide();
	});

	//회원관리 - 전체회원명단, 주문내역
	$(".btn_popuplayer_order").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_order").show();
		$("html,body").css('overflow','hidden');
	});
	$(".popuplayer_order .btn_close").click(function(){
		$(".background_layer").fadeOut();
		$(".popuplayer_order").hide();
		$("html,body").css('overflow','auto');
	});
	//회원관리 - 전체회원명단, 5% 쿠폰내역
	$(".btn_popuplayer_coupon").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_coupon").show();
		$("html,body").css('overflow','hidden');
	});
	$(".popuplayer_coupon .btn_close").click(function(){
		$(".background_layer").fadeOut();
		$(".popuplayer_coupon").hide();
		$("html,body").css('overflow','auto');
	});
	//2014.05.02
	//회원관리 - 전체회원명단, 5% 쿠폰내역
	$(".btn_popuplayer_charge_deTa").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_charge_deTa").show();
		$("html,body").css('overflow','hidden');
	});
	$(".popuplayer_charge_deTa .btn_close").click(function(){
		$(".background_layer").fadeOut();
		$(".popuplayer_charge_deTa").hide();
		$("html,body").css('overflow','auto');
	});
	//2014.05.02

	//알람소재 셀렉트 노출
	$(".alarm_select_box .select_list li").bind('mousedown', function(){
		switch ($(".alarm_select").attr('value')){
			case '광고':
				$(".alarm_select_d3").hide();
				$(".alarm_select_d2").hide();
				$(".alarm_select_d2_1").css('display','inline-block');
			break;
			case '상점':
				$(".alarm_select_d3").hide();
				$(".alarm_select_d2").hide();
				$(".alarm_select_d2_2").css('display','inline-block');
			break;
			case '기타':
				$(".alarm_select_d3").hide();
				$(".alarm_select_d2").hide();
				$(".alarm_select_d2_3").css('display','inline-block');
			break;
		}
	});

	$(".alarm_select_box2 .select_list li").bind('mousedown', function(){
		switch ($(".alarm_select2").attr('value')){
			case '판매중':
				$(".alarm_select_d3").hide();
				$(".alarm_select_d3_1").css('display','inline-block');
			break;
			case '판매예정':
				$(".alarm_select_d3").hide();
				$(".alarm_select_d3_2").css('display','inline-block');
			break;
		}
	});

	//주문관리 - 전체주문현황, 결제여부->취소환불 , 일자 노출
	$(".cancel_date_check_box input").change(function(){
		if($(".cancel_date_check").prop('checked') == true){
			$(".cancel_date_con").show();
		}else{
			$(".cancel_date_con").hide();
		}
	});

	//주문관리 -전체주문현황, 주문자정보 
	$(".btn_popuplayer_order_info").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_order_info").show();
		$("html,body").css('overflow','hidden');
	});
	$(".popuplayer_order_info .btn_close").click(function(){
		$(".background_layer").fadeOut();
		$(".popuplayer_order_info").hide();
		$("html,body").css('overflow','auto');
	});

	//주문관리 -전체주문현황, 결제정보
	$(".btn_popuplayer_payment_info").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_payment_info").show();
		$("html,body").css('overflow','hidden');
	});
	$(".popuplayer_payment_info .btn_close").click(function(){
		$(".background_layer").fadeOut();
		$(".popuplayer_payment_info").hide();
		$("html,body").css('overflow','auto');
	});

	//주문관리 -티켓사용현황, 쿠폰사용명단
	$(".btn_popuplayer_coupon_list1").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_coupon_list1").show();
		$("html,body").css('overflow','hidden');
	});
	$(".btn_popuplayer_coupon_list2").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_coupon_list2").show();
		$("html,body").css('overflow','hidden');
	});
	$(".popuplayer_coupon_list .btn_close").click(function(){
		$(".background_layer").fadeOut();
		$(".popuplayer_coupon_list").hide();
		$("html,body").css('overflow','auto');
	});

	//게시판관리 -문의, 문의내용
	$(".btn_popuplayer_inquire").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_inquire").show();
		$("html,body").css('overflow','hidden');
	});

	//게시판관리 -문의, 답변내용보기
	$(".btn_popuplayer_answer_view").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_answer_view").show();
		$("html,body").css('overflow','hidden');
	});

	$(".btn_inquire_view").click(function(){
		$(".popuplayer_inquire_c").hide();
		$(".popuplayer_inquire").show();
	});

	//게시판관리 -문의, 답변보내기
	$(".btn_popuplayer_answer_send").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_answer_send").show();
		$("html,body").css('overflow','hidden');
	});
	$(".popuplayer_inquire .btn_answer_send").click(function(){
		$(".puplayer_inquire_c").hide();
		$(".popuplayer_answer_send").show();
	});

	//게시판관리 -답변 완료
	$(".popuplayer_answer_send .btn_answer_complete").click(function(){
		$(".background_layer").fadeOut();
		$(".popuplayer_inquire_c").hide();
		$("html,body").css('overflow','auto');
	});
	//게시판관리 -팝업창 닫기
	$(".popuplayer_inquire_c .btn_close").click(function(){
		$(".background_layer").fadeOut();
		$(".popuplayer_inquire_c").hide();
		$("html,body").css('overflow','auto');
	});

	//검색어관리 -상품검색
	$(".btn_popuplayer_productsearch").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_productsearch").show();
		$("html,body").css('overflow','hidden');
	});
	//검색어관리 -상품검색 닫기
	$(".popuplayer_productsearch .btn_close").click(function(){
		$(".background_layer").fadeOut();
		$(".popuplayer_productsearch").hide();
		$("html,body").css('overflow','auto');
	});

	//로딩관리 - 파일 불러오기 오픈
	$(".btn_filesearch").click(function(){
		$(this).next('input[type="file"]').click();
	});

	//로딩관리 -미리보기 오픈
	$(".btn_popuplayer_preview2").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_preview2").show();
		$("html,body").css('overflow','hidden');
	});
	//로딩관리 -미리보기 닫기
	$(".popuplayer_preview2 .btn_close").click(function(){
		$(".background_layer").fadeOut();
		$(".popuplayer_preview2").hide();
		$("html,body").css('overflow','auto');
	});
	//로딩관리 - 미리보기 탭 메뉴
	$(".disp_tab_list1 .disp_tab").click(function(){
		$(".disp_tab_list1 .disp_tab").removeClass('on');
		$(this).addClass('on');
		$(".disp_tab_list1 .previewimg_article").hide();
		$(this).next('dd').show();
	});

	//로딩관리 -등록정보수정 오픈
	$(".btn_popuplayer_infomodify").click(function(){
		$(".background_layer").fadeIn();
		$(".popuplayer_infomodify").show();
		$("html,body").css('overflow','hidden');
	});
	//로딩관리 -등록정보수정 닫기
	$(".popuplayer_infomodify .btn_close").click(function(){
		$(".background_layer").fadeOut();
		$(".popuplayer_infomodify").hide();
		$("html,body").css('overflow','auto');
	});

	//로딩관리 - 등록정보수정 탭 메뉴
	$(".disp_tab_list2 .disp_tab").click(function(){
		$(".disp_tab_list2 .disp_tab").removeClass('on');
		$(this).addClass('on');
		$(".disp_tab_list2 .previewimg_article").hide();
		$(this).next('dd').show();
	});

	//2014.05.02
	//상점설정 - 상품일괄등록 - 상품등록 - 티켓코드입력
	$(".btn_ticketCode_set").bind('click',function(){
		if ($("#inst_ticketCode_set2").prop('checked')){
			$(".input_box_ticketCode").find('.mask').hide();
			$(".filesearch_box").find('.mask').hide();
		}else{
			$('.input_box_ticketCode').find('.mask').show();
			$('.input_box_ticketCode').find('input').val('');
			$(".filesearch_box").find('.mask').show();
		}
	});
	//상점설정 - 상품일괄등록 - 상품등록 - 티켓코드입력 - 파일찾기
	$(".btn_filesearch2").click(function(){
		$(this).next(".inst_fileHidden").click();
	});
	//상점설정 - 상품일괄등록 - 상품등록 - 구매내역 메시지
	$(".btn_buyMsg_set").bind('click',function(){
		if ($("#inst_buyMsg_set2").prop('checked')){
			$(".input_box_buyMsg_set").find('.mask').hide();
		}else{
			$('.input_box_buyMsg_set').find('.mask').show();
			$('.input_box_buyMsg_set').find('input').val('');
		}
	});
	//회원관리 - 장려금발송 - 발송대상
	$(".btn_incentive_send").bind('click',function(){
		if ($("#incentive_send_select2").prop('checked')){
			$(".input_box_incentive_send1").find('.mask').show();
			$(".filesearch_box").find('.mask').show();
			$(".input_box_incentive_send2").find('.mask').hide();
		}else{
			$(".input_box_incentive_send1").find('.mask').hide();
			$(".input_box_incentive_send2").find('.mask').show();
			$(".input_box_incentive_send2").find('input').val('');
			$(".filesearch_box").find('.mask').hide();
		}
	});



});