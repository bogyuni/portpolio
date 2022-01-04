// 초기 셋팅
	// item use
		var waitForFinalEvent = (function () {
			var timers = {};
			function finalEvent(callback, ms, uniqueId){
				if (!uniqueId) {
					uniqueId = "New";
				}
				if (timers.uniqueId) {
					clearTimeout (timers.uniqueId);
				}
				timers.uniqueId = setTimeout(callback, ms);
			};
			return {finalEvent: finalEvent};
		})();

	// company use
		var waitForFinalEvent2 = (function () {
			var timers = {};
			function finalEvent(callback, ms, uniqueId){
				if (!uniqueId) {
					uniqueId = "New";
				}
				if (timers.uniqueId) {
					clearTimeout (timers.uniqueId);
				}
				timers.uniqueId = setTimeout(callback, ms);
			};
			return {finalEvent: finalEvent};
		})();

// company contents set
	var timeC = 0;
	function timeSet(){
		$(".minute_hand").rotate(timeC);
		timeC += 30;
	}

	var fishLeftCSS = 0;
	var fishRightCSS = 0;
	function fishSet(){
		fishLeftCSS ++;
		fishRightCSS ++;
		$(".fish_back").css("background-position",""+(fishLeftCSS*0.1)+"px "+(fishRightCSS*0.1)+"px");
		$(".fish_back .fish3").css("background-position","-"+(fishLeftCSS*0.15)+"px "+"0px");
		$(".fish_back .fish2").css("background-position","-"+(fishLeftCSS*0.3)+"px "+"0px");
		$(".fish_back .fish1").css("background-position","-"+(fishLeftCSS*0.55)+"px "+"0px")
	}

	function smileSet(){
		$(".smile_eye").animate({height:"0px",top:"+=7px"},250).animate({height:"14px",top:"-=7px"},250);
	}

// item 동작구현 및 뷰페이지 설정
	var itemLineCount = parseInt($(".content_list_area").width()/237);
	var selected_item;
	var itemOpenCheck = 0;
	var clickItem;

	// item 텍스트 가운데 정렬
		function itemTxtSet(){
			var $text_top = Math.max($('.iconbox').outerHeight()-$('.iconbox .text').outerHeight(), 0) / 2;
			var $text_left= Math.max($('.iconbox').outerWidth()-$('.iconbox .text').outerWidth(), 0) / 2;
			$('.iconbox .text').css({
				"top" : $text_top,
				"left" : $text_left
			});
		}

	// item 순차 로딩
		function itemFadeLoad(){
			$('.item_list li').hide();
			var iconT = 0;
			var iTotal = $('.item_list li').length;
			$('.item_list li').each(function(index) {
				$(this).delay(iconT*3).fadeIn(1000);
				iconT += iTotal;
			});
		}

	// item 최초 정렬
		function itemPositionSet(){
			var itemLineCount = parseInt($(".content_list_area").width()/237);
			switch (itemLineCount){
				case 3 :
					$(".item_list").css({width:"711px", height:"1422px"});
					for (i=0; i<3; i++){$(".item").eq(i).css({top : "0", left : i*237+"px"});}
					for (i=3; i<6; i++){$(".item").eq(i).css({top : "237px", left : (i-3)*237+"px"});}
					for (i=6; i<9; i++){$(".item").eq(i).css({top : "474px", left : (i-6)*237+"px"});}
					for (i=9; i<12; i++){$(".item").eq(i).css({top : "711px", left : (i-9)*237+"px"});}
					for (i=12; i<15; i++){$(".item").eq(i).css({top : "948px", left : (i-12)*237+"px"});}
					for (i=15; i<18; i++){$(".item").eq(i).css({top : "1185px", left : (i-15)*237+"px"});}
					break;
				case 4 :
					$(".item_list").css({width:"948px", height:"1185px"});
					for (i=0; i<4; i++){$(".item").eq(i).css({top : "0", left : i*237+"px"});}
					for (i=4; i<8; i++){$(".item").eq(i).css({top : "237px", left : (i-4)*237+"px"});}
					for (i=8; i<12; i++){$(".item").eq(i).css({top : "474px", left : (i-8)*237+"px"});}
					for (i=12; i<16; i++){$(".item").eq(i).css({top : "711px", left : (i-12)*237+"px"});}
					for (i=16; i<18; i++){$(".item").eq(i).css({top : "948px", left : (i-16)*237+"px"});}
					break;
				case 5 :
					$(".item_list").css({width:"1185px", height:"948px"});
					for (i=0; i<5; i++){$(".item").eq(i).css({top : "0", left : i*237+"px"});}
					for (i=5; i<10; i++){$(".item").eq(i).css({top : "237px", left : (i-5)*237+"px"});}
					for (i=10; i<15; i++){$(".item").eq(i).css({top : "474px", left : (i-10)*237+"px"});}
					for (i=15; i<18; i++){$(".item").eq(i).css({top : "711px", left : (i-15)*237+"px"});}
					break;
				case 6 :
					$(".item_list").css({width:"1422px", height:"711px"});
					for (i=0; i<6; i++){$(".item").eq(i).css({top : "0", left : i*237+"px"});}
					for (i=6; i<12; i++){$(".item").eq(i).css({top : "237px", left : (i-6)*237+"px"});}
					for (i=12; i<18; i++){$(".item").eq(i).css({top : "474px", left : (i-12)*237+"px"});}
					break;
			}
				if (itemLineCount > 6){
						$(".item_list").css({width:"1422px", height:"711px"});
						for (i=0; i<6; i++){$(".item").eq(i).css({top : "0", left : i*237+"px"});}
						for (i=6; i<12; i++){$(".item").eq(i).css({top : "237px", left : (i-6)*237+"px"});}
						for (i=12; i<18; i++){$(".item").eq(i).css({top : "474px", left : (i-12)*237+"px"});}
				}
		}

	// item 클릭 이벤트
		function itemEvent(){
			switch (itemOpenCheck){
				case 0:
					//클릭 된 item의 가로 세로 값
						var $item = clickItem;
						var selected_itemLeft = parseInt($item.css("left"));
						var selected_itemTop = parseInt($item.css("top"));
						var itemLineCount = parseInt($(".item_list").width()/237);
						var itemLineNum = (selected_itemLeft/237)+1;
						selected_item = $item;

					//클릭 대상을 중심으로 item 움직임 설정
						$(".item_list .item").each(function(){

							//item이 첫번째일 때
							if (itemLineNum == 1){
								if (parseInt($(this).css("left")) >= selected_itemLeft){
									if (parseInt($(this).css("top")) == 0 && parseInt($(this).css("left")) > selected_itemLeft){
										$(this).animate({left:"+=474px"},350);
									}else if (parseInt($(this).css("top")) == 237) {
										$(this).delay(50).animate({left:"+=711px"},350);
									}else if (parseInt($(this).css("top")) == 474) {
										$(this).delay(100).animate({left:"+=711px"},350);
									}else if (parseInt($(this).css("top")) == 711) {
										$(this).delay(150).animate({left:"+=711px"},350);
									}
								}
								$(".itemContent").css({
									left:selected_itemLeft+"px",
									top:"0px"
								}).fadeIn();
							}

							//item이 첫번째가 아니고 마지막이 아닐 때
							if (itemLineNum != 1 && itemLineNum != itemLineCount){
								if (parseInt($(this).css("left")) < selected_itemLeft){
									if (parseInt($(this).css("top")) == 0){
										$(this).animate({left:"-=237px"},350);
									}else if (parseInt($(this).css("top")) == 237) {
										$(this).delay(50).animate({left:"-=237px"},350);
									}else if (parseInt($(this).css("top")) == 474) {
										$(this).delay(100).animate({left:"-=237px"},350);
									}else if (parseInt($(this).css("top")) == 711) {
										$(this).delay(150).animate({left:"-=237px"},350);
									}
								}
								if (parseInt($(this).css("left")) >= selected_itemLeft){
									if (parseInt($(this).css("top")) == 0 && parseInt($(this).css("left")) > selected_itemLeft){
										$(this).animate({left:"+=237px"},350);
									}else if (parseInt($(this).css("top")) == 237) {
										$(this).delay(50).animate({left:"+=474px"},350);
									}else if (parseInt($(this).css("top")) == 474) {
										$(this).delay(100).animate({left:"+=474px"},350);
									}else if (parseInt($(this).css("top")) == 711) {
										$(this).delay(150).animate({left:"+=474px"},350);
									}
								}
								$(".itemContent").css({
									left:(selected_itemLeft-237)+"px",
									top:"0px"
								}).fadeIn();
							}

							//item이 마지막일 때
							if (itemLineNum != 1 && itemLineNum == itemLineCount){
								if (parseInt($(this).css("left")) <= selected_itemLeft){
									if (parseInt($(this).css("top")) == 0 && parseInt($(this).css("left")) < selected_itemLeft){
										$(this).animate({left:"-=474px"},350);
									}else if (parseInt($(this).css("top")) == 237) {
										$(this).delay(50).animate({left:"-=711px"},350);
									}else if (parseInt($(this).css("top")) == 474) {
										$(this).delay(100).animate({left:"-=711px"},350);
									}else if (parseInt($(this).css("top")) == 711) {
										$(this).delay(150).animate({left:"-=711px"},350);
									}
								}
								$(".itemContent").css({
									left:(selected_itemLeft-474)+"px",
									top:"0px"
								}).fadeIn();
							}

						});//each함수

					//item img 컬러 흑백 설정
						$(".item a .iconbox img").each(function(){
							$(this).attr("src",$(this).attr("src").replace(".png","_BW.png"));
						});

					// item 박스가 뷰창보다 작을 경우 (item 6개일 경우)
						if (itemLineCount == 6){
							$(".content_list_area").css("height","847px");
						}

					itemOpenCheck = 1;

					break;

				case 1:
					$(".itemContent .btn_close").click()
					//item img 컬러 흑백 설정
						$(".item a .iconbox img").each(function(){
							$(this).attr("src",$(this).attr("src").replace("_BW.png",".png"));
						});
					clickItem.click();
					break;
			}
		};

	// itemContent 닫기
		function itemContentClose(){
			var itemLineCount = parseInt($(".content_list_area").width()/237);

			$(".itemContent").hide();

			//item img 컬러 흑백 설정
				$(".item a .iconbox img").each(function(){
					$(this).attr("src",$(this).attr("src").replace("_BW.png",".png"));
				});

			//클릭 된 item의 가로 세로 값
				var $item = selected_item;
				var selected_itemLeft = parseInt($item.css("left"));
				var selected_itemTop = parseInt($item.css("top"));
				var itemLineCount = parseInt($(".item_list").width()/237);
				var itemLineNum = (selected_itemLeft/237)+1;

			//클릭 대상을 중심으로 item 움직임 설정
			/*$(".item_list .item").each(function(){

				//item이 첫번째일 때
				if ( selected_itemLeft < parseInt($(this).css("left")) && selected_itemLeft == 0){
					if (parseInt($(this).css("top")) == 0) {
						$(this).animate({left:"-=474px"},350);
					}else if (parseInt($(this).css("top")) == 237) {
						$(this).delay(50).animate({left:"-=711px"},350);
					}else if (parseInt($(this).css("top")) == 474) {
						$(this).delay(100).animate({left:"-=711px"},350);
					}else if (parseInt($(this).css("top")) == 711) {
						$(this).delay(150).animate({left:"-=711px"},350);
					}
				}

				//item이 처음과 마지막이 아닌 경우
				if ( itemLineNum != itemLineCount && selected_itemLeft > parseInt($(this).css("left")) ){
					if (parseInt($(this).css("top")) == 0) {
						$(this).animate({left:"+=237px"},350);
					}else if (parseInt($(this).css("top")) == 237) {
						$(this).delay(50).animate({left:"+=237px"},350);
					}else if (parseInt($(this).css("top")) == 474) {
						$(this).delay(100).animate({left:"+=237px"},350);
					}else if (parseInt($(this).css("top")) == 711) {
						$(this).delay(150).animate({left:"+=237px"},350);
					}
				}
				if ( selected_itemLeft < parseInt($(this).css("left")) && selected_itemLeft != 0 ){
					if (parseInt($(this).css("top")) == 0){
						$(this).animate({left:"-=237px"},350);
					}else if (parseInt($(this).css("top")) == 237) {
						$(this).delay(50).animate({left:"-=474px"},350);
					}else if (parseInt($(this).css("top")) == 474) {
						$(this).delay(100).animate({left:"-=474px"},350);
					}else if (parseInt($(this).css("top")) == 711) {
						$(this).delay(150).animate({left:"-=474px"},350);
					}
				}

				//item이 마지막일 때
				if (itemLineNum == itemLineCount && selected_itemLeft > parseInt($(this).css("left")) ){
					if (parseInt($(this).css("top")) == 0){
						$(this).animate({left:"+=474px"},350);
					}else if (parseInt($(this).css("top")) == 237) {
						$(this).delay(50).animate({left:"+=711px"},350);
					}else if (parseInt($(this).css("top")) == 474) {
						$(this).delay(100).animate({left:"+=711px"},350);
					}else if (parseInt($(this).css("top")) == 711) {
						$(this).delay(150).animate({left:"+=711px"},350);
					}
				}

			});*///each함수


			// item_list 영역 설정
				waitForFinalEvent.finalEvent(
					function(){ 
						var resizeWidth = $(".content_list_area").width();
						var itemLineCount = parseInt(resizeWidth/237);

					// item 정렬
						switch (itemLineCount){
						case 3 :
							$(".item_list").animate({
								width:"711px",
								height:"1422px"
							},350);
							for (i=0; i<3; i++){
								$(".item").eq(i).animate({
									top : "0",
									left : i*237+"px"
								},350);
							}
							for (i=3; i<6; i++){
								$(".item").eq(i).animate({
									top : "237px",
									left : (i-3)*237+"px"
								},350);
							}
							for (i=6; i<9; i++){
								$(".item").eq(i).animate({
									top : "474px",
									left : (i-6)*237+"px"
								},350);
							}
							for (i=9; i<12; i++){
								$(".item").eq(i).animate({
									top : "711px",
									left : (i-9)*237+"px"
								},350);
							}
							for (i=12; i<15; i++){
								$(".item").eq(i).animate({
									top : "948px",
									left : (i-12)*237+"px"
								},350);
							}
							for (i=15; i<18; i++){
								$(".item").eq(i).animate({
									top : "1185px",
									left : (i-15)*237+"px"
								},350);
							}
							break;
						case 4 :
							$(".item_list").animate({
								width:"948px",
								height:"1185px"
							},350);
							for (i=0; i<4; i++){
								$(".item").eq(i).animate({
									top : "0",
									left : i*237+"px"
								},350);
							}
							for (i=4; i<8; i++){
								$(".item").eq(i).animate({
									top : "237px",
									left : (i-4)*237+"px"
								},350);
							}
							for (i=8; i<12; i++){
								$(".item").eq(i).animate({
									top : "474px",
									left : (i-8)*237+"px"
								},350);
							}
							for (i=12; i<16; i++){
								$(".item").eq(i).animate({
									top : "711px",
									left : (i-12)*237+"px"
								},350);
							}
							for (i=16; i<18; i++){
								$(".item").eq(i).animate({
									top : "948px",
									left : (i-16)*237+"px"
								},350);
							}
							break;
						case 5 :
							$(".item_list").animate({
								width:"1185px",
								height:"948px"
							},350);
							for (i=0; i<5; i++){
								$(".item").eq(i).animate({
									top : "0",
									left : i*237+"px"
								},350);
							}
							for (i=5; i<10; i++){
								$(".item").eq(i).animate({
									top : "237px",
									left : (i-5)*237+"px"
								},350);
							}
							for (i=10; i<15; i++){
								$(".item").eq(i).animate({
									top : "474px",
									left : (i-10)*237+"px"
								},350);
							}
							for (i=15; i<18; i++){
								$(".item").eq(i).animate({
									top : "711px",
									left : (i-15)*237+"px"
								},350);
							}
							break;
						case 6 :
							$(".item_list").animate({
								width:"1422px",
								height:"711px"
							},350);
							for (i=0; i<6; i++){
								$(".item").eq(i).animate({
									top : "0",
									left : i*237+"px"
								},350);
							}
							for (i=6; i<12; i++){
								$(".item").eq(i).animate({
									top : "237px",
									left : (i-6)*237+"px"
								},350);
							}
							for (i=12; i<18; i++){
								$(".item").eq(i).animate({
									top : "474px",
									left : (i-12)*237+"px"
								},350);
							}
							break;
						}
						if (itemLineCount > 6){
							$(".item_list").animate({
								width:"1422px",
								height:"711px"
							},350);
							for (i=0; i<6; i++){
								$(".item").eq(i).animate({
									top : "0",
									left : i*237+"px"
								},350);
							}
							for (i=6; i<12; i++){
								$(".item").eq(i).animate({
									top : "237px",
									left : (i-6)*237+"px"
								},350);
							}
							for (i=12; i<18; i++){
								$(".item").eq(i).animate({
									top : "474px",
									left : (i-12)*237+"px"
								},350);
							}
						}

				}, 100, "Start");

			// item 박스가 뷰창보다 작을 경우 (item 6개일 경우)
				if (itemLineCount <= 6){
					$(".content_list_area").css("height","auto");
				}

			itemOpenCheck = 0;
		};

$(document).ready(function(){

	itemTxtSet();

	itemFadeLoad();

	$(".jScrollbar").jScrollbar();

	$('.tinyscrollbar').tinyscrollbar({
		axis : 'y', // 스크롤방향
		wheel : 120, // 스크롤당 이동 거리 단위 픽셀
		scroll : true, // 마우스 휠을 설정하거나 해제합니다.
		size : 'auto', // 자동 또는 고정 번호로 스크롤바의 크기를 설정합니다.
		sizethumb : '102' // 자동 또는 고정 번호로 엄지손가락의 크기를 설정합니다.
		// scrollbar_box : 스크롤바 박스 영역 클래스
		// jScrollbar_draggable : 스크롤바 이동 영역
		// draggable : 스크롤 버튼
		// end : 스크롤 버튼 위치 체크
		// viewport : 내부컨텐츠 보이는 영역
		// jScrollbar_mask : 내부 컨텐츠
	});
	function tinyscroll(){
		$('.tinyscrollbar').tinyscrollbar({
			axis : 'y',
			wheel : 120,
			scroll : true,
			size : 'auto',
			sizethumb : '102'
		});
	}

	$(".map").draggable({containment: "parent" }); // map drag - event drag

	$(document).pngFix(); // png ie6-ie8 지원 메소드


	// sub_container action
		var sub_containerCount = 0;
		var contactusCount = 0;
		var recruitCount = 0;
		// contact_us click action
			$(".btn_contactus").click(function(){
				if (contactusCount == 0 && recruitCount == 0){
					$(".containerBG").fadeIn();
					$("#wrap").stop(true, true).animate({left:"-=28px"},200).animate({left:"+=767px"},500);
					$("#header").delay(200).animate({left:"+=767px"},500).delay(400).animate({left:"-=28px"},200);
					$("#sub_container").show().delay(200).animate({left:"+=767px"},500).animate({left:"0"},400);
					$("#sub_container2").delay(200).animate({left:"+=767px"},500);
					$("html").css("overflowY","hidden");
					contactusCount = 1;
					$(".company_content_wrap .tab_menu2 .li1").click();
					$(".company_content_wrap .tab_menu2").css({
						position:"absolute",
						left:"0px",
						paddingTop:"0px"
					});
					$(".detailview_mask").delay(1100).fadeIn(400).delay(100).fadeOut(300);
				}else if(contactusCount == 0 && recruitCount == 1){
					$("#wrap").stop(true, true).animate({left:"-=28px"},200).delay(800).animate({left:"+=28px"},200);
					$("#sub_container2").delay(200).animate({left:"+=767px"},400).hide(100);
					$("#sub_container").delay(200).show(100).delay(200).animate({left:"0px"},400);
					contactusCount = 1;
					recruitCount = 0;
					$(".detailview_mask").delay(1100).fadeIn(400).delay(100).fadeOut(300);
				}
			});
			$(".contactus .btn_close").click(function(){
				if (contactusCount == 1){
					$(".containerBG").fadeOut();
					$("#header").stop(true, true).animate({left:"+=28px"},200).animate({left:"-=767px"},500);
					$("#wrap").delay(200).animate({left:"-=767px"},500).animate({left:"+=28px"},500);
					$("#sub_container").delay(700).animate({left:"+=280px"},1).hide(100);
					$("html").css("overflowY","auto");
					contactusCount = 0;
				}
			});
		// recruit click action
			$(".btn_recruit").click(function(){
				if (contactusCount == 0 && recruitCount == 0){
					$(".containerBG").fadeIn();
					$("#wrap").stop(true, true).animate({left:"-=28px"},200).animate({left:"+=767px"},500);
					$("#header").delay(200).animate({left:"+=767px"},500).delay(400).animate({left:"-=28px"},200);
					$("#sub_container2").show().delay(200).animate({left:"+=767px"},500).animate({left:"0"},400);
					$("#sub_container").delay(200).animate({left:"+=767px"},500);
					$("html").css("overflowY","hidden");
					recruitCount = 1;
					$(".company_content_wrap .tab_menu2 .li1").click();
					$(".company_content_wrap .tab_menu2").css({
						position:"absolute",
						left:"0px",
						paddingTop:"0px"
					});
				}else if(contactusCount == 1 && recruitCount == 0){
					$("#wrap").stop(true, true).animate({left:"-=28px"},200).delay(800).animate({left:"+=28px"},200);
					$("#sub_container").delay(200).animate({left:"+=767px"},400).hide(100);
					$("#sub_container2").delay(200).show(100).delay(200).animate({left:"0px"},400);
					contactusCount = 0;
					recruitCount = 1;
				}
			});
			$(".recruit .btn_close").click(function(){
				if (recruitCount == 1){
					$(".containerBG").fadeOut();
					$("#header").stop(true, true).animate({left:"+=28px"},200).animate({left:"-=767px"},500);
					$("#wrap").delay(200).animate({left:"-=767px"},500).animate({left:"+=28px"},500);
					$("#sub_container2").delay(700).animate({left:"+=280px"},1).hide(100);
					$("html").css("overflowY","auto");
					recruitCount = 0;
				}
			});

	// GNB 설정
		var gnbCount = 0;
		var gnbCount2 = 0;

		// GNB 열기, 닫기 버튼
			$("#header .aside .open").toggle(function(){
				$(this).addClass('close');
				$("#header").animate({left:"-=252px"},500);
				$(".container_width").animate({
					left:"-=252px"
				},500);
				$("#view_container").css("width","100%");
				gnbCount = 1;
			},function(){
				$(this).removeClass('close');
				$("#header").animate({left:"+=252px"},500);
				$(".container_width").animate({
					left:"+=252px"
				},500);
				$(".container_width").css("width","auto");
				gnbCount = 0;
			});

		// IDEA 모드 변경 포트폴리오, 전체화면
			$("#snb .full").click(function(){
				$("#container").hide();
				$("#view_container").show();
				$(this).addClass("on");
				$("#snb .thumb").removeClass("on");
				$("html").css("overflowY","hidden");
				$("#header .aside").show();
				if (gnbCount == 0){
					$("#header .aside .open").click();
				}
			});
			$("#snb .thumb").click(function(){
				$("#view_container").hide();
				$("#container").show();
				$(this).addClass("on");
				$("#snb .full").removeClass("on");
				$("html").css("overflowY","auto");
				$("#header .aside").hide();
				if (gnbCount == 1){
					$("#header .aside .open").click();
				}
				if (itemOpenCheck == 1){
					$(".itemContent .btn_close").click();
				}
				// item_list 영역 설정, item 위치 재 조정
					waitForFinalEvent.finalEvent(
						function(){ 
							var resizeWidth = $(".content_list_area").width();
							var itemLineCount = parseInt(resizeWidth/237);

						// item 정렬
							switch (itemLineCount){
							case 3 :
								$(".item_list").animate({
									width:"711px",
									height:"1422px"
								},350);
								for (i=0; i<3; i++){
									$(".item").eq(i).animate({
										top : "0",
										left : i*237+"px"
									},350);
								}
								for (i=3; i<6; i++){
									$(".item").eq(i).animate({
										top : "237px",
										left : (i-3)*237+"px"
									},350);
								}
								for (i=6; i<9; i++){
									$(".item").eq(i).animate({
										top : "474px",
										left : (i-6)*237+"px"
									},350);
								}
								for (i=9; i<12; i++){
									$(".item").eq(i).animate({
										top : "711px",
										left : (i-9)*237+"px"
									},350);
								}
								for (i=12; i<15; i++){
									$(".item").eq(i).animate({
										top : "948px",
										left : (i-12)*237+"px"
									},350);
								}
								for (i=15; i<18; i++){
									$(".item").eq(i).animate({
										top : "1185px",
										left : (i-15)*237+"px"
									},350);
								}
								break;
							case 4 :
								$(".item_list").animate({
									width:"948px",
									height:"1185px"
								},350);
								for (i=0; i<4; i++){
									$(".item").eq(i).animate({
										top : "0",
										left : i*237+"px"
									},350);
								}
								for (i=4; i<8; i++){
									$(".item").eq(i).animate({
										top : "237px",
										left : (i-4)*237+"px"
									},350);
								}
								for (i=8; i<12; i++){
									$(".item").eq(i).animate({
										top : "474px",
										left : (i-8)*237+"px"
									},350);
								}
								for (i=12; i<16; i++){
									$(".item").eq(i).animate({
										top : "711px",
										left : (i-12)*237+"px"
									},350);
								}
								for (i=16; i<18; i++){
									$(".item").eq(i).animate({
										top : "948px",
										left : (i-16)*237+"px"
									},350);
								}
								break;
							case 5 :
								$(".item_list").animate({
									width:"1185px",
									height:"948px"
								},350);
								for (i=0; i<5; i++){
									$(".item").eq(i).animate({
										top : "0",
										left : i*237+"px"
									},350);
								}
								for (i=5; i<10; i++){
									$(".item").eq(i).animate({
										top : "237px",
										left : (i-5)*237+"px"
									},350);
								}
								for (i=10; i<15; i++){
									$(".item").eq(i).animate({
										top : "474px",
										left : (i-10)*237+"px"
									},350);
								}
								for (i=15; i<18; i++){
									$(".item").eq(i).animate({
										top : "711px",
										left : (i-15)*237+"px"
									},350);
								}
								break;
							case 6 :
								$(".item_list").animate({
									width:"1422px",
									height:"711px"
								},350);
								for (i=0; i<6; i++){
									$(".item").eq(i).animate({
										top : "0",
										left : i*237+"px"
									},350);
								}
								for (i=6; i<12; i++){
									$(".item").eq(i).animate({
										top : "237px",
										left : (i-6)*237+"px"
									},350);
								}
								for (i=12; i<18; i++){
									$(".item").eq(i).animate({
										top : "474px",
										left : (i-12)*237+"px"
									},350);
								}
								break;
							}

					}, 200, "Start");
			});

		// GNB hover
			$("#header nav ul li").hover(function(){
				if (!$(this).find(".mA").hasClass("on")){
					$(this).find(".menu_back").stop().animate({
						left:"-252px"
					},300);
				}
			}, function(){
				$(this).find(".menu_back").stop().animate({
					left:"0px"
				},300);
			});

		// PEOPLE 메뉴 롤오버
			$(".people_menu").hover(function(){
				$("header nav").stop(true, true).animate({
					paddingBottom:"+=62px"
				},500);
				$("header nav li .people_sub_menu").stop(true, true).animate({
					height:"+=62px"
				},500);
			},function(){
				$("header nav").stop(true, true).animate({
					paddingBottom:"-=62px"
				},500);
				$("header nav li .people_sub_menu").stop(true, true).animate({
					height:"-=62px"
				},500);
			});

	// item 최초 정렬
		/*switch (itemLineCount){
			case 3 :
				$(".item_list").css({
					width:"711px",
					height:"1422px"
				});
				for (i=0; i<3; i++){
					$(".item").eq(i).css({
						top : "0",
						left : i*237+"px"
					});
				}
				for (i=3; i<6; i++){
					$(".item").eq(i).css({
						top : "237px",
						left : (i-3)*237+"px"
					});
				}
				for (i=6; i<9; i++){
					$(".item").eq(i).css({
						top : "474px",
						left : (i-6)*237+"px"
					});
				}
				for (i=9; i<12; i++){
					$(".item").eq(i).css({
						top : "711px",
						left : (i-9)*237+"px"
					});
				}
				for (i=12; i<15; i++){
					$(".item").eq(i).css({
						top : "948px",
						left : (i-12)*237+"px"
					});
				}
				for (i=15; i<18; i++){
					$(".item").eq(i).css({
						top : "1185px",
						left : (i-15)*237+"px"
					});
				}
				break;
			case 4 :
				$(".item_list").css({
					width:"948px",
					height:"1185px"
				});
				for (i=0; i<4; i++){
					$(".item").eq(i).css({
						top : "0",
						left : i*237+"px"
					});
				}
				for (i=4; i<8; i++){
					$(".item").eq(i).css({
						top : "237px",
						left : (i-4)*237+"px"
					});
				}
				for (i=8; i<12; i++){
					$(".item").eq(i).css({
						top : "474px",
						left : (i-8)*237+"px"
					});
				}
				for (i=12; i<16; i++){
					$(".item").eq(i).css({
						top : "711px",
						left : (i-12)*237+"px"
					});
				}
				for (i=16; i<18; i++){
					$(".item").eq(i).css({
						top : "948px",
						left : (i-16)*237+"px"
					});
				}
				break;
			case 5 :
				$(".item_list").css({
					width:"1185px",
					height:"948px"
				});
				for (i=0; i<5; i++){
					$(".item").eq(i).css({
						top : "0",
						left : i*237+"px"
					});
				}
				for (i=5; i<10; i++){
					$(".item").eq(i).css({
						top : "237px",
						left : (i-5)*237+"px"
					});
				}
				for (i=10; i<15; i++){
					$(".item").eq(i).css({
						top : "474px",
						left : (i-10)*237+"px"
					});
				}
				for (i=15; i<18; i++){
					$(".item").eq(i).css({
						top : "711px",
						left : (i-15)*237+"px"
					});
				}
				break;
			case 6 :
				$(".item_list").css({
					width:"1422px",
					height:"711px"
				});
				for (i=0; i<6; i++){
					$(".item").eq(i).css({
						top : "0",
						left : i*237+"px"
					});
				}
				for (i=6; i<12; i++){
					$(".item").eq(i).css({
						top : "237px",
						left : (i-6)*237+"px"
					});
				}
				for (i=12; i<18; i++){
					$(".item").eq(i).css({
						top : "474px",
						left : (i-12)*237+"px"
					});
				}
				break;
		}
		if (itemLineCount > 6){
			$(".item_list").css({
				width:"1422px",
				height:"711px"
			});
			for (i=0; i<6; i++){
				$(".item").eq(i).css({
					top : "0",
					left : i*237+"px"
				});
			}
			for (i=6; i<12; i++){
				$(".item").eq(i).css({
					top : "237px",
					left : (i-6)*237+"px"
				});
			}
			for (i=12; i<18; i++){
				$(".item").eq(i).css({
					top : "474px",
					left : (i-12)*237+"px"
				});
			}
		}*/
		itemPositionSet();

	// item 클릭 이벤트 발생
		$(".item_list .item").bind("click", function(){
			clickItem = $(this);
			itemEvent();
			tinyscroll();
		});

	// itemContent 닫기 발생
		$(".itemContent .btn_close").bind("click", function(){
			itemContentClose();
		});

	// item 윈도우 재조정시 설정
		$(window).resize(function(){
			if (itemOpenCheck == 1){
			}
			if (itemOpenCheck == 0){
				// item_list 영역 설정, item 위치 재 조정
					waitForFinalEvent.finalEvent(
						function(){ 
							var resizeWidth = $(".content_list_area").width();
							var itemLineCount = parseInt(resizeWidth/237);

						// item 정렬
							switch (itemLineCount){
							case 3 :
								$(".item_list").animate({
									width:"711px",
									height:"1422px"
								},350);
								for (i=0; i<3; i++){
									$(".item").eq(i).animate({
										top : "0",
										left : i*237+"px"
									},350);
								}
								for (i=3; i<6; i++){
									$(".item").eq(i).animate({
										top : "237px",
										left : (i-3)*237+"px"
									},350);
								}
								for (i=6; i<9; i++){
									$(".item").eq(i).animate({
										top : "474px",
										left : (i-6)*237+"px"
									},350);
								}
								for (i=9; i<12; i++){
									$(".item").eq(i).animate({
										top : "711px",
										left : (i-9)*237+"px"
									},350);
								}
								for (i=12; i<15; i++){
									$(".item").eq(i).animate({
										top : "948px",
										left : (i-12)*237+"px"
									},350);
								}
								for (i=15; i<18; i++){
									$(".item").eq(i).animate({
										top : "1185px",
										left : (i-15)*237+"px"
									},350);
								}
								break;
							case 4 :
								$(".item_list").animate({
									width:"948px",
									height:"1185px"
								},350);
								for (i=0; i<4; i++){
									$(".item").eq(i).animate({
										top : "0",
										left : i*237+"px"
									},350);
								}
								for (i=4; i<8; i++){
									$(".item").eq(i).animate({
										top : "237px",
										left : (i-4)*237+"px"
									},350);
								}
								for (i=8; i<12; i++){
									$(".item").eq(i).animate({
										top : "474px",
										left : (i-8)*237+"px"
									},350);
								}
								for (i=12; i<16; i++){
									$(".item").eq(i).animate({
										top : "711px",
										left : (i-12)*237+"px"
									},350);
								}
								for (i=16; i<18; i++){
									$(".item").eq(i).animate({
										top : "948px",
										left : (i-16)*237+"px"
									},350);
								}
								break;
							case 5 :
								$(".item_list").animate({
									width:"1185px",
									height:"948px"
								},350);
								for (i=0; i<5; i++){
									$(".item").eq(i).animate({
										top : "0",
										left : i*237+"px"
									},350);
								}
								for (i=5; i<10; i++){
									$(".item").eq(i).animate({
										top : "237px",
										left : (i-5)*237+"px"
									},350);
								}
								for (i=10; i<15; i++){
									$(".item").eq(i).animate({
										top : "474px",
										left : (i-10)*237+"px"
									},350);
								}
								for (i=15; i<18; i++){
									$(".item").eq(i).animate({
										top : "711px",
										left : (i-15)*237+"px"
									},350);
								}
								break;
							case 6 :
								$(".item_list").animate({
									width:"1422px",
									height:"711px"
								},350);
								for (i=0; i<6; i++){
									$(".item").eq(i).animate({
										top : "0",
										left : i*237+"px"
									},350);
								}
								for (i=6; i<12; i++){
									$(".item").eq(i).animate({
										top : "237px",
										left : (i-6)*237+"px"
									},350);
								}
								for (i=12; i<18; i++){
									$(".item").eq(i).animate({
										top : "474px",
										left : (i-12)*237+"px"
									},350);
								}
								break;
							}
							if (itemLineCount > 6){
								$(".item_list").animate({
									width:"1422px",
									height:"711px"
								},350);
								for (i=0; i<6; i++){
									$(".item").eq(i).animate({
										top : "0",
										left : i*237+"px"
									},350);
								}
								for (i=6; i<12; i++){
									$(".item").eq(i).animate({
										top : "237px",
										left : (i-6)*237+"px"
									},350);
								}
								for (i=12; i<18; i++){
									$(".item").eq(i).animate({
										top : "474px",
										left : (i-12)*237+"px"
									},350);
								}
							}

					}, 200, "Start");
			}
		});

	// company tab menu hover
		var hoverCount = 0;
		$(".company_content_wrap .tab_menu li").hover(function(){
			if (!$(this).hasClass("on_li")){
				$(this).css("background","url(images/company/company_tab_on.png) no-repeat");
				$(this)
					.stop(true, true).animate({top:"6px"},80)
					.animate({top:"24px"},80)
					.animate({top:"0px"},20);
			}
		}, function(){
			if (!$(this).hasClass("on_li")){
				$(this).css("background","url(images/company/company_tab_off.png) no-repeat");
				//$(this).css("top","12px");
				$(this).animate({top:"12px"},200);
			}
		});

	// company tab menu click action
		$(".company_content_wrap .tab_menu li").click(function(){
			$(".company_content_wrap .tab_menu li").each(function(){
				$(this).removeClass("on_li");
				$(this).css({
					top:"12px",
					background:"url(images/company/company_tab_off.png) no-repeat"
					});
			});
			$(this).addClass("on_li");
			$(this).css({
				top:"0px",
				background:"url(images/company/company_tab_on.png) no-repeat"
				});
		});
		// tab menu1
			$(".company_content_wrap .tab_menu1 .li1").click(function(){
				$(".company_content_list").stop(true, true).animate({left:"29px"},300).animate({left:"0px"},400);
			});
			$(".company_content_wrap .tab_menu1 .li2").click(function(){
				$(".company_content_list").stop(true, true).animate({left:"-740px"},300).animate({left:"-711px"},400);
			});
			$(".company_content_wrap .tab_menu1 .li3").click(function(){
				$(".company_content_list").stop(true, true).animate({left:"-1451px"},300).animate({left:"-1422px"},400);
			});
			$(".company_content_wrap .tab_menu1 .li4").click(function(){
				$(".company_content_list").stop(true, true).animate({left:"-2162px"},300).animate({left:"-2133px"},400);
			});
		// tab menu2
			$(".company_content_wrap .tab_menu2 .li1").click(function(){
				$("html, body").stop(true, true).animate({scrollTop:"0"},300);
			});
			$(".company_content_wrap .tab_menu2 .li2").click(function(){
				var section1Height = $(".about_adqua").height();
				$("html, body").stop(true, true).animate({scrollTop:(section1Height+30+120+110)+"px"},300).animate({scrollTop:(section1Height+120+110)+"px"},400);
			});
			$(".company_content_wrap .tab_menu2 .li3").click(function(){
				var section1Height = $(".about_adqua").height();
				var section2Height = $(".business").height();
				$("html, body").stop(true, true).animate({scrollTop:(section1Height+section2Height+30+120+110+120)+"px"},300)
					.animate({scrollTop:(section1Height+section2Height+30+120+110+90)+"px"},400);
			});
			$(".company_content_wrap .tab_menu2 .li4").click(function(){
				var section1Height = $(".about_adqua").height();
				var section2Height = $(".business").height();
				var section3Height = $(".adqua_ci").height();
				$("html, body").stop(true, true).animate({scrollTop:(section1Height+section2Height+section3Height+30+120+110+250)+"px"},300)
					.animate({scrollTop:(section1Height+section2Height+section3Height+30+120+110+220)+"px"},400);
			});

	// company client hover
		$(".client_box ul li img").hover(function(){
			$(this).attr("src", $(this).attr("src").replace("_off","_on"));
		},function(){
			$(this).attr("src", $(this).attr("src").replace("_on","_off"));
		});

	// company 레이아웃 설정
		waitForFinalEvent2.finalEvent(function(){
			var resizeWidth = $(".company_container").width();
			if (parseInt(resizeWidth) < 936){
				$(".about_adqua .jScrollbar .jScrollbar_draggable").hide();
				$(".adqua_ci .jScrollbar .jScrollbar_draggable").hide();
				$(".company_content_wrap").removeClass("company_content_wrap2");
				$(".company_content_wrap section").removeClass("company_section2");

				$(".about_adqua").removeClass("about_adqua2");
				$(".about_adqua .jScrollbar").removeClass("jScrollbar2");
				$(".about_adqua .jScrollbar .jScrollbar_mask2").css("top","0");
				$(".about_adqua .jScrollbar .jScrollbar_mask2").removeClass("jScrollbar_mask");

				$(".adqua_ci").removeClass("adqua_ci2");
				$(".adqua_ci .jScrollbar").removeClass("jScrollbar2");
				$(".adqua_ci .jScrollbar .jScrollbar_mask2").css("top","0");
				$(".adqua_ci .jScrollbar .jScrollbar_mask2").removeClass("jScrollbar_mask");

				$(".company_content_wrap .tab_menu1").hide();
				$(".company_content_wrap .tab_menu2").show();

				$(window).bind("scroll", function(){
					var scrollTop = $(window).scrollTop();
					if (scrollTop > 110){
						$(".company_content_wrap .tab_menu2").css({
							position:"fixed",
							left:"280px",
							paddingTop:"5px"
						});
					}else{
						$(".company_content_wrap .tab_menu2").css({
							position:"absolute",
							left:"0px",
							paddingTop:"0px"
						});
					}
					if (scrollTop > -1 && scrollTop < 155 ){
						$(".company_content_wrap .tab_menu2").css("background", "none");
					}else if (scrollTop > 1725 && scrollTop < 1850 ){
						$(".company_content_wrap .tab_menu2").css("background", "none");
					}else if (scrollTop > 2692 && scrollTop < 2774 ){
						$(".company_content_wrap .tab_menu2").css("background", "none");
					}else if (scrollTop > 3955 && scrollTop < 4038 ){
						$(".company_content_wrap .tab_menu2").css("background", "none");
					}else{
						$(".company_content_wrap .tab_menu2").css("background", "url(images/bg/bg_list2.gif) repeat");
					}
				});
			}else{
				$(".about_adqua .jScrollbar .jScrollbar_draggable").show();
				$(".adqua_ci .jScrollbar .jScrollbar_draggable").show();
				$(".company_content_wrap").addClass("company_content_wrap2");
				$(".company_content_wrap section").addClass("company_section2");

				$(".about_adqua").addClass("about_adqua2");
				$(".about_adqua .jScrollbar").addClass("jScrollbar2");
				$(".about_adqua .jScrollbar .jScrollbar_draggable2").addClass("jScrollbar_draggable2");
				$(".about_adqua .jScrollbar .jScrollbar_mask2").addClass("jScrollbar_mask");

				$(".adqua_ci").addClass("adqua_ci2");
				$(".adqua_ci .jScrollbar").addClass("jScrollbar2");
			}
		}, 50, "Start");


		$(window).resize(function(){
			waitForFinalEvent2.finalEvent(function(){
				var resizeWidth = $(".company_container").width();
				if (parseInt(resizeWidth) < 936){
					$(".company_content_list").css({
						width:"711px",
						left:"0px"
					});

					$(".company_content_wrap .tab_menu2 .li1").click();

					$(".about_adqua .jScrollbar .jScrollbar_draggable").hide();
					$(".adqua_ci .jScrollbar .jScrollbar_draggable").hide();
					$(".company_content_wrap").removeClass("company_content_wrap2");
					$(".company_content_wrap section").removeClass("company_section2");

					$(".about_adqua").removeClass("about_adqua2");
					$(".about_adqua .jScrollbar").removeClass("jScrollbar2");
					$(".about_adqua .jScrollbar .jScrollbar_mask2").css("top","0");
					$(".about_adqua .jScrollbar .jScrollbar_mask2").removeClass("jScrollbar_mask");

					$(".adqua_ci").removeClass("adqua_ci2");
					$(".adqua_ci .jScrollbar").removeClass("jScrollbar2");
					$(".adqua_ci .jScrollbar .jScrollbar_mask2").css("top","0");
					$(".adqua_ci .jScrollbar .jScrollbar_mask2").removeClass("jScrollbar_mask");

					$(".company_content_wrap .tab_menu1").hide();
					$(".company_content_wrap .tab_menu2").show();

					$(window).bind("scroll", function(){
						var scrollTop = $(window).scrollTop();
						if (scrollTop > 110){
							$(".company_content_wrap .tab_menu2").css({
								position:"fixed",
								left:"280px",
								paddingTop:"5px"
							});
						}else{
							$(".company_content_wrap .tab_menu2").css({
								position:"absolute",
								left:"0px",
								paddingTop:"0px"
							});
						}
						if (scrollTop > -1 && scrollTop < 155 ){
							$(".company_content_wrap .tab_menu2").css("background", "none");
						}else if (scrollTop > 1725 && scrollTop < 1850 ){
							$(".company_content_wrap .tab_menu2").css("background", "none");
						}else if (scrollTop > 2692 && scrollTop < 2774 ){
							$(".company_content_wrap .tab_menu2").css("background", "none");
						}else if (scrollTop > 3955 && scrollTop < 4038 ){
							$(".company_content_wrap .tab_menu2").css("background", "none");
						}else{
							$(".company_content_wrap .tab_menu2").css("background", "url(images/bg/bg_list2.gif) repeat");
						}
					});

				}else{
					$(".company_content_list").css({
						width:"2844px",
						left:"0px"
					});

					$(".company_content_wrap .tab_menu1 .li1").click();

					$(".about_adqua .jScrollbar .jScrollbar_draggable").show();
					$(".adqua_ci .jScrollbar .jScrollbar_draggable").show();
					$(".company_content_wrap").addClass("company_content_wrap2");
					$(".company_content_wrap section").addClass("company_section2");

					$(".about_adqua").addClass("about_adqua2");
					$(".about_adqua .jScrollbar").addClass("jScrollbar2");
					$(".about_adqua .jScrollbar .jScrollbar_mask2").addClass("jScrollbar_mask");
					$(".about_adqua .jScrollbar .jScrollbar_mask2").css("top","0");
					$(".about_adqua .jScrollbar .jScrollbar_draggable .draggable").css("top","0");

					$(".adqua_ci").addClass("adqua_ci2");
					$(".adqua_ci .jScrollbar").addClass("jScrollbar2");
					$(".adqua_ci .jScrollbar .jScrollbar_mask2").css("top","0");
					$(".adqua_ci .jScrollbar .jScrollbar_mask2").addClass("jScrollbar_mask");

					$(".company_content_wrap .tab_menu1").show();
					$(".company_content_wrap .tab_menu2").hide();
				}
			}, 50, "Start");
		});

	// company contents

});// $(document).ready end

