$(function() {

	var sectionCount = $(".section_content").length;
	$(".section_list").css("width",sectionCount*624+"px");






	// section1 select box seting

	// 연락처
		$(".section1_select1 .selected_value").click(function(){
			$(".section1_select1 .tinyscrollbar").show().tinyscrollbar({axis:'y',wheel:10,scroll:true,size:'65',sizethumb:'30'});
		});
		$(".section1_select1 .jScrollbar_mask li").click(function(){
			var selectNum = 0+String($(this).attr("value"));
			$(".section1_select1 .selected_value").attr("value",selectNum);
			$(".section1_select1 .tinyscrollbar").hide();
		});


	// section2 select box seting

	// 소득정보입력 - 근로소득자
		// 직군 1
		$(".section2_1_select1 .selected_value").click(function(){
			$(".tinyscrollbar").hide();
			$(".section2_1_select1 .tinyscrollbar").show();
		});
		$(".section2_1_select1 .jScrollbar_mask li").click(function(){
			var selectNum = $(this).attr("value");
			$(".section2_1_select1 .selected_value").attr("value",selectNum).css("background","url('images/common/select_160.gif') no-repeat");
			$(".section2_1_select1 .tinyscrollbar").hide();
		});
		// 직군 2
		$(".section2_1_select2 .selected_value").click(function(){
			$(".tinyscrollbar").hide();
			$(".section2_1_select2 .tinyscrollbar").show();
		});
		$(".section2_1_select2 .jScrollbar_mask li").click(function(){
			var selectNum = $(this).attr("value");
			$(".section2_1_select2 .selected_value").attr("value",selectNum).css("background","url('images/common/select_160.gif') no-repeat");
			$(".section2_1_select2 .tinyscrollbar").hide();
		});

		// 직위 1
		$(".section2_1_select3 .selected_value").click(function(){
			$(".tinyscrollbar").hide();
			$(".section2_1_select3 .tinyscrollbar").show();
		});
		$(".section2_1_select3 .jScrollbar_mask li").click(function(){
			var selectNum = $(this).attr("value");
			$(".section2_1_select3 .selected_value").attr("value",selectNum).css("background","url('images/common/select_160.gif') no-repeat");
			$(".section2_1_select3 .tinyscrollbar").hide();
		});

		// 직위 2
		$(".section2_1_select4 .selected_value").click(function(){
			$(".tinyscrollbar").hide();
			$(".section2_1_select4 .tinyscrollbar").show();
		});
		$(".section2_1_select4 .jScrollbar_mask li").click(function(){
			var selectNum = $(this).attr("value");
			$(".section2_1_select4 .selected_value").attr("value",selectNum).css("background","url('images/common/select_120.gif') no-repeat");
			$(".section2_1_select4 .tinyscrollbar").hide();
		});

	// 현직장 입사일
		$(".section2_1_select5 .selected_value").click(function(){
			$(".tinyscrollbar").hide();
			$(".section2_1_select5 .tinyscrollbar").show().tinyscrollbar({axis:'y',wheel:10,scroll:true,size:'65',sizethumb:'30'});
		});
		$(".section2_1_select5 .jScrollbar_mask li").click(function(){
			var selectNum = $(this).attr("value");
			$(".section2_1_select5 .selected_value").attr("value",selectNum).css("background","url('images/common/select_70.gif') no-repeat");
			$(".section2_1_select5 .tinyscrollbar").hide();
		});

	// 월 입력
		$(".section2_1_select6 .selected_value").click(function(){
			$(".tinyscrollbar").hide();
			$(".section2_1_select6 .tinyscrollbar").show().tinyscrollbar({axis:'y',wheel:10,scroll:true,size:'65',sizethumb:'30'});
		});
		$(".section2_1_select6 .jScrollbar_mask li").click(function(){
			var selectNum = $(this).attr("value");
			$(".section2_1_select6 .selected_value").attr("value",selectNum).css("background","url('images/common/select_60.gif') no-repeat");
			$(".section2_1_select6 .tinyscrollbar").hide();
		});

	// 개월 입력
		$(".selected_month_term").click(function(){
			$(".tinyscrollbar").hide();
			$(".scrollbar_month_term").show()
				.tinyscrollbar({
					axis : 'y',
					wheel : 10, 
					scroll : true,
					size : '75',
					sizethumb : '30'
				});
		});
		$(".viewport_month_term .jScrollbar_mask li").click(function(){
			var selectNum = String($(this).attr("value"));
			$(".selected_month_term").attr("value",selectNum);
			$(".scrollbar_month_term").hide();
		});

	// 라디오 버튼 체크 액션
		$(".radioChBtn1").click(function(){
			$(".radioChBtn1").css("backgroundPosition","0 0");
			$(this).css("backgroundPosition","0 -14px");
		});
		$(".radioChBtn2").click(function(){
			$(".radioChBtn2").css("backgroundPosition","0 0");
			$(this).css("backgroundPosition","0 -14px");
		});
		$(".radioChBtn3").click(function(){
			$(".radioChBtn3").css("backgroundPosition","0 0");
			$(this).css("backgroundPosition","0 -14px");
		});

	// 인풋 텍스트 포커스 액션
		$(".input_bg").focus(function(){
			$(this).css({
				backgroundPosition:"0 -21px",
				color:"#0089cc"
			});
		});
		$(".input_bg").blur(function(){
			$(this).css({
				backgroundPosition:"0 0",
				color:"#7a7a7a"
			});
		});

	// 한도확인하기 내부 스트롤
		$(".scrollbar_article").tinyscrollbar_sub({
			axis : 'y',
			wheel : 20, 
			scroll : true,
			size : '537',
			sizethumb : '91'
		});


	// 약관 자세히 보기
		$(".clausePopup").click(function(){
			$(".background_bg").fadeIn();
			$(".clause_box").fadeIn();
		});
		$(".btn_popupClose").click(function(){
			$(".background_bg").fadeOut();
			$(".clause_box").fadeOut();
		});


	// 다음 단계
		$(".btn_nextPhase").click(function(){
			$(".section_list").animate({left:'-=624px'},350);
		});

		// 섹션1-1
		$(".btn_nextPhase1").click(function(){
			$(".gnb_list .m1 .depth1").removeClass("focus");
			$(".gnb_list .m1 .depth2").addClass("on focus");
			$(".contents .btn_arrow").animate({top:'124px'},300);
		});
		// 섹션1-2
		$(".btn_nextPhase2").click(function(){
			$(".gnb_list .m1 .depth2").removeClass("focus");
			$(".gnb_list .m1 .depth3").addClass("on focus");
			$(".contents .btn_arrow").animate({top:'156px'},300);
		});
		// 섹션1-3
		$(".btn_nextPhase3").click(function(){
			$(".gnb_list .m1").removeClass("focus")
				.animate({height:'247px'},300);
			$(".gnb_list .m2").addClass("focus")
				.animate({height:'196px'},300);
			$(".gnb_list .m1 .depth3").removeClass("focus");
			$(".gnb_list .m2 .depth1").addClass("on focus");
			$(".contents .btn_arrow").animate({top:'340px'},300);
		});

		// 섹션2-1
		$(".btn_nextPhase4").click(function(){
			$(".gnb_list .m2 .depth1").removeClass("focus");
			$(".gnb_list .m2 .depth2").addClass("on focus");
			$(".contents .btn_arrow").animate({top:'372px'},300);
		});
		// 섹션2-2
		$(".btn_nextPhase5").click(function(){
			$(".gnb_list .m2 .depth2").removeClass("focus");
			$(".gnb_list .m2 .depth3").addClass("on focus");
			$(".contents .btn_arrow").animate({top:'404px'},300);
		});
		// 섹션2-3
		$(".btn_nextPhase6").click(function(){
			$(".gnb_list .m2").removeClass("focus");
			$(".gnb_list .m3").addClass("focus");
			$(".gnb_list .m2 .depth3").removeClass("focus");
			$(".contents .btn_arrow").animate({top:'484px'},300);
		});

	// 첫 화면으로
		$(".btn_default").click(function(){
			$(".section_list").animate({left:'0px'},350);
			$(".gnb_list .menu_li").removeClass("on focus");
			$(".gnb_list .menu_li li").removeClass("on focus");
			$(".gnb_list .m1").addClass("focus").animate({height:'197px'},300);
			$(".gnb_list .m2").animate({height:'72px'},300);
			$(".contents .btn_arrow").animate({top:'92px'},300);
			$(".gnb_list .m1 .depth1").addClass("on focus");
		});


	/* 수정버튼 */
		$(".gnbList .m1 .btn_modify").click(function(){
			$(".section_list").animate({left:'0px'},350);
			$(".gnbList .m3").removeClass("on focus");
			$(".gnbList .m2").removeClass("on focus");
			$(".gnbList .m1").addClass("on focus");
		});
		$(".gnbList .m2 .btn_modify").click(function(){
			$(".section_list").animate({left:'-624px'},350);
			$(".gnbList .m3").removeClass("on focus");
			$(".gnbList .m2").addClass("on focus");
		});



	// 탭메뉴
		$(".section2_tabMenu dt").click(function(){
			$(".section2_tabMenu dt").removeClass("on_dt");
			$(this).addClass("on_dt");
		});



	// 대출신청하기 - 신청정보 입력 슬라이드 메뉴
	$(".btn_instComplete_dd1").click(function(){
		$(".section4 .dd1").slideUp("fast");
		$(".section4 .dd2").slideDown("fast");
		$(".section4 .dt1").css("background-position","0 0px");
		$(".section4 .dt2").css("background-position","0 -36px");
	});
	$(".btn_instComplete_dd2").click(function(){
		$(".section4 .dd2").slideUp("fast");
		$(".section4 .dd3").slideDown("fast");
		$(".section4 .dt2").css("background-position","0 -72px");
		$(".section4 .dt3").css("background-position","0 -36px");
	});



}); //ready function