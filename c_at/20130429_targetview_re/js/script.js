$(function(){

	// gnb 메뉴 오버
		$(".gnb_list .depth1").hover(function(){
			$(this).find(".depth2_list").stop().slideDown(200);
			$(this).find(".depth1_a").css("background-position","0 -42px");
		},function(){
			$(this).find(".depth2_list").stop().slideUp(200);
			if (!$(this).find(".depth1_a").hasClass("on")){
				$(this).find(".depth1_a").css("background-position","0 0px");
			}
		});

	// 광고관리 셀렉박스
		$(".select_box h4").click(function(){
			if (!$(this).data("clickCheck")){
				$(".select_box").removeClass("on");
				$(".select_box h4").data("clickCheck", 0);
				$(this).parent().addClass("on");
				$(this).data("clickCheck", 1);
			}else{
				$(this).parent().removeClass("on");
				$(this).data("clickCheck", 0);
			}
		});

	// 광고통계 - 날짜 기간 선택하기
		$(".choiceDate_list li").click(function(){
			$(".choiceDate_list li").removeClass("on");
			$(this).addClass("on");
		});

	// 업종 관리 탭 메뉴 변경
		$(".businessset_section h3").click(function(){
			$(".businessset_section h3").removeClass("on");
			$(this).addClass("on");
			$(".businessset_article").hide();
			$(this).next(".businessset_article").show();
		});

	// 내역 레이어 팝업
		$(".btn_detailPopup1").click(function(){
			$(".detailPopup").hide();
			$(".detailPopup1").show();
		});
		$(".btn_detailPopup2").click(function(){
			$(".detailPopup").hide();
			$(".detailPopup2").show();
		});
		$(".btn_detailPopup3").click(function(){
			$(".detailPopup").hide();
			$(".detailPopup3").show();
		});
		$(".detailPopup .btn_closePopup").click(function(){
			$(".detailPopup").hide();
		});

	// 세금 계산서 관리 tabmenu
		$(".taxcalculationset_tabmenu dt").click(function(){
			$(".taxcalculationset_tabmenu dt").removeClass("on");
			$(this).addClass("on");
			$(".taxcalculationset_tabmenu dd").hide();
			$(this).next("dd").show();
		});

	// 통계 - 광고 통계, 매체 통계 탭 메뉴
		var $statisticsTabBtn = $(".ad_statistics_section .article2 h3,.me_statistics_section .article2 h3");
		var $statisticsTabCon = $(".ad_statistics_section .article2 .tabCon_box,.me_statistics_section .article2 .tabCon_box");
		$statisticsTabBtn.click(function(){
			$statisticsTabBtn.removeClass("on");
			$(this).addClass("on");
			$statisticsTabCon.hide();
			$(this).next(".tabCon_box").show();
		});

	// 통계 - 광고 통계, 매체 통계 테이블 슬라이드
		var $statistics_in_box = $(".statistics_td_full .statistics_in_box");
		var $openTable = $(".btn_openTable");
		$openTable.click(function(){
			if (!$(this).data("clickCheck")){
				$openTable.data("clickCheck", 0);
				$statistics_in_box.slideUp(200);
				$(this).parent().parent().next("tr").find(".statistics_in_box").slideDown(200);
				$(this).data("clickCheck", 1);
			}else{
				$(this).parent().parent().next("tr").find(".statistics_in_box").slideUp(200);
				$(this).data("clickCheck", 0);
			}
		});


	// 주문관리 환불신청 클릭 안내 메세지
		$(".orderset_table_box .hoverPop_box").hover(function(){
			$(this).find(".hoverPop").show();
		},function(){
			$(this).find(".hoverPop").hide();
		});

	// 사용자 - 세금 계산서 내역 - 탭 메뉴
		var taxdetailTabBtn = $(".taxdetail_section .tab_article .tab_tit");
		var taxdetailTabCon = $(".taxdetail_section .tab_article .tabCon_box");
		taxdetailTabBtn .click(function(){
			taxdetailTabBtn .removeClass("on");
			$(this).addClass("on");
			taxdetailTabCon.hide();
			$(this).next(".tabCon_box").show();
		});

});