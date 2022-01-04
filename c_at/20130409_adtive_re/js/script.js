// container seting
	var waitForFinalEvent = (function () {
		var timers = {};
		function finalEvent(callback, ms, uniqueId){
			if (!uniqueId) {uniqueId = "New";}
			if (timers.uniqueId) {clearTimeout (timers.uniqueId);}
			timers.uniqueId = setTimeout(callback, ms);
		};
		return {finalEvent: finalEvent};
	})();

// gnb open
	function gnbOpen(){$(".gnb").slideToggle(200);}

// sub action seting
	function subFull(){
		$(".sideMenu").css({right:"0"});
		$(".snb").css({left:"0"});
		$(".contents_wrap").css({marginLeft:"239px"});
		$(".snb").removeClass("type2 type3");
		$(".contents_wrap").removeClass("type2");
	}
	function subFullani(){
		$(".sideMenu").animate({right:"0"},300);
		$(".snb").animate({left:"0"},300);
		$(".contents_wrap").css({marginLeft:"239px"});
		$(".snb").removeClass("type2 type3");
		$(".snb .ul_wrap").show();
		$(".title_box .location").show();
		$(".contents_wrap").removeClass("type2");
	}

	function sub1024(){
		$(".sideMenu").css({right:"170px"});
		$(".snb").css({left:"0"});
		$(".contents_wrap").css({marginLeft:"239px"});
		$(".snb").removeClass("type2 type3");
		$(".contents_wrap").removeClass("type2");
	}
	function sub1024ani(){
		$(".sideMenu").animate({right:"-170px"},300);
		$(".snb").animate({left:"0"},300);
		$(".contents_wrap").css({marginLeft:"239px"});
		$(".snb").removeClass("type2 type3");
		$(".snb .ul_wrap").show();
		$(".title_box .location").show();
		$(".contents_wrap").removeClass("type2");
	}

	function sub960(){
		$(".sideMenu").css({right:"170px"});
		$(".contents_wrap").css({margin:"0 auto"});
		$(".snb").addClass("type2").removeClass("type3");
		$(".title_box .location").hide();
		$(".contents_wrap").removeClass("type2");
	}
	function sub960ani(){
		$(".sideMenu").css({right:"170px"});
		$(".contents_wrap").css({margin:"0 auto"});
		$(".snb").addClass("type2").removeClass("type3");
		$(".snb .ul_wrap").hide();
		$(".title_box .location").hide();
		$(".contents_wrap").removeClass("type2");
	}

	function sub768(){
		$(".sideMenu").css({right:"170px"});
		$(".contents_wrap").css({margin:"0 auto"});
		$(".snb").addClass("type2 type3");
		$(".title_box .location").hide();
		$(".contents_wrap").addClass("type2");
	}
	function sub768ani(){
		$(".sideMenu").css({right:"170px"});
		$(".contents_wrap").css({margin:"0 auto"});
		$(".snb").addClass("type2 type3");
		$(".title_box .location").hide();
		$(".contents_wrap").addClass("type2");
	}

// company - 개요 - 로드 애니메이션
	function summaryPlanAni(){
		$(".adtivePlanImg_list .li5").fadeIn(1200);
		$(".adtivePlanImg_list .li4").delay(200).fadeIn(1200);
		$(".adtivePlanImg_list .li3").delay(400).fadeIn(1200);
		$(".adtivePlanImg_list .li2").delay(600).fadeIn(1200);
		$(".adtivePlanImg_list .li1").delay(800).fadeIn(1200);
		$(".adtivePlan_tit").delay(1000).fadeIn(1200);
	}

// personal_info
	function personal_info_scroll(titNum){
		switch (titNum){
		case 0 :
			var titTop = $(".personal_info .content1 .content_list1").offset().top;
			$('html, body').stop().animate({scrollTop:titTop-40}, 800, 'easeInOutExpo');
			break;
		case 1 :
			var titTop = $(".personal_info .content2 .tit1").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		case 2 :
			var titTop = $(".personal_info .content2 .tit2").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		case 3 :
			var titTop = $(".personal_info .content2 .tit3").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		case 4 :
			var titTop = $(".personal_info .content2 .tit4").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		case 5 :
			var titTop = $(".personal_info .content2 .tit5").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		case 6 :
			var titTop = $(".personal_info .content2 .tit6").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		case 7 :
			var titTop = $(".personal_info .content2 .tit7").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		case 8 :
			var titTop = $(".personal_info .content2 .tit8").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		case 9 :
			var titTop = $(".personal_info .content2 .tit9").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		case 10 :
			var titTop = $(".personal_info .content2 .tit10").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		case 11 :
			var titTop = $(".personal_info .content2 .tit11").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		case 12 :
			var titTop = $(".personal_info .content2 .tit12").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		case 13 :
			var titTop = $(".personal_info .content2 .tit13").offset().top;
			$('html, body').stop().animate({scrollTop:titTop}, 800, 'easeInOutExpo');
			break;
		}
	}


$(function(){
	var mainVisualCount=0;
	var mainVisualCon=$('.mainBanner_list .con');
	var mainVisualLength=mainVisualCon.length;
	var mainVisualTime=3000;

	function mainVisualActionSet(){
		var startMainVisual=mainVisualCon.eq(mainVisualCount);
		startMainVisual.animate({left:'-100%'},600,function(){
			startMainVisual.css({left:'100%'});
		});
		mainVisualCount++;
		if (mainVisualCount==mainVisualLength){
			mainVisualCount=0;
		}
		$('.conBtn_list button').removeClass('on');
		$('.conBtn'+mainVisualCount).addClass('on');
		mainVisualCon.eq(mainVisualCount).animate({left:'0'},600);
	}

	var mainVisualAction=setInterval(mainVisualActionSet,mainVisualTime);

	$('.conBtn_list button').on('mouseover',function(){
		clearInterval(mainVisualAction);
		var btnNum=$(this).val();
		mainVisualCon.css({left:'100%'});
		mainVisualCon.eq(btnNum).css({left:'0'});
		$('.conBtn_list button').removeClass('on');
		$('.conBtn'+btnNum).addClass('on');
		mainVisualCount=btnNum;
	});

	$('.mainBanner_list').hover(function(){
		clearInterval(mainVisualAction);
	},function(){
		mainVisualAction=setInterval(mainVisualActionSet,mainVisualTime);
	});




	// main action seting
		var mainContainer = $(".main_container");
		var mainContent1 = mainContainer.find(".content1");
		var mainContent2 = mainContainer.find(".content2");
		var mainContent3 = mainContainer.find(".content3");
		var mainContent4 = mainContainer.find(".content4");
		var mainContent5 = mainContainer.find(".content5");
		var mainContent6 = mainContainer.find(".content6");
		var mainContent7 = mainContainer.find(".content7");
		var mainContent8 = mainContainer.find(".content8");
		var mainContent9 = mainContainer.find(".content9");
		var mainContent10 = mainContainer.find(".content10");
		var mainContent11 = mainContainer.find(".content11");

		function sizeFull(){
			mainContainer.css({width:"1200px",height:"870px"});
			mainContent1.css({left:"0px",top:"0px"});
			mainContent2.css({left:"240px",top:"0px"});
			mainContent3.css({left:"960px",top:"0px"});
			mainContent4.css({left:"0px",top:"390px"});
			mainContent5.css({left:"480px",top:"390px"});
			mainContent6.css({left:"720px",top:"390px"});
			mainContent7.css({left:"0px",top:"630px"});
			mainContent8.css({left:"240px",top:"630px"});
			mainContent9.css({left:"480px",top:"630px"});
			mainContent10.css({left:"720px",top:"630px"});
			mainContent11.css({left:"960px",top:"630px"});
		}
		function sizeFullAni(){
			$(".header_wrap").removeClass("type2");
			$(".header_wrap .search_box").show();
			$(".gnb").show();
			$(".footer_wrap").removeClass("type2");
			mainContainer.animate({width:"1200px",height:"870px"},400);
			mainContent1.animate({left:"0px",top:"0px"},300).removeClass("type2");
			mainContent2.animate({left:"240px",top:"0px"},300);
			mainContent3.animate({left:"960px",top:"0px"},400).removeClass("type2");
			mainContent4.animate({left:"0px",top:"390px"},400);
			mainContent5.animate({left:"480px",top:"390px"},500);
			mainContent6.animate({left:"720px",top:"390px"},500);
			mainContent7.animate({left:"0px",top:"630px"},600);
			mainContent8.animate({left:"240px",top:"630px"},600);
			mainContent9.animate({left:"480px",top:"630px"},700);
			mainContent10.animate({left:"720px",top:"630px"},700);
			mainContent11.animate({left:"960px",top:"630px"},800);
		}

		function size1024(){
			$(".header_wrap .search_box").hide();
			mainContainer.css({width:"960px",height:"1110px"});
			mainContent1.css({left:"480px",top:"630px"}).addClass("type2");
			mainContent2.css({left:"0px",top:"0px"});
			mainContent3.css({left:"720px",top:"0px"});
			mainContent4.css({left:"0px",top:"390px"});
			mainContent5.css({left:"240px",top:"870px"});
			mainContent6.css({left:"480px",top:"390px"});
			mainContent7.css({left:"0px",top:"630px"});
			mainContent8.css({left:"0px",top:"870px"});
			mainContent9.css({left:"240px",top:"630px"});
			mainContent10.css({left:"480px",top:"870px"});
			mainContent11.css({left:"720px",top:"870px"});
		}
		function size1024ani(){
			$(".header_wrap").removeClass("type2");
			$(".header_wrap .search_box").hide();
			$(".gnb").show();
			$(".footer_wrap").removeClass("type2");
			mainContainer.animate({width:"960px",height:"1110px"},400);
			mainContent1.animate({left:"480px",top:"630px"},300).addClass("type2");
			mainContent2.animate({left:"0px",top:"0px"},400);
			mainContent3.animate({left:"720px",top:"0px"},300).removeClass("type2");
			mainContent4.animate({left:"0px",top:"390px"},400);
			mainContent5.animate({left:"240px",top:"870px"},400);
			mainContent6.animate({left:"480px",top:"390px"},500);
			mainContent7.animate({left:"0px",top:"630px"},500);
			mainContent8.animate({left:"0px",top:"870px"},600);
			mainContent9.animate({left:"240px",top:"630px"},600);
			mainContent10.animate({left:"480px",top:"870px"},700);
			mainContent11.animate({left:"720px",top:"870px"},800);
		}

		function size960(){
			$(".header_wrap").addClass("type2");
			$(".header_wrap .search_box").hide();
			$(".footer_wrap").addClass("type2");
			mainContainer.css({width:"720px",height:"1590px"});
			mainContent1.css({left:"240px",top:"1110px"}).addClass("type2");
			mainContent2.css({left:"0px",top:"0px"});
			mainContent3.css({left:"0px",top:"390px"}).addClass("type2");
			mainContent4.css({left:"0px",top:"870px"});
			mainContent5.css({left:"0px",top:"1350px"});
			mainContent6.css({left:"0px",top:"630px"});
			mainContent7.css({left:"480px",top:"630px"});
			mainContent8.css({left:"0px",top:"1110px"});
			mainContent9.css({left:"480px",top:"870px"});
			mainContent10.css({left:"240px",top:"1350px"});
			mainContent11.css({left:"480px",top:"1350px"});
		}
		function size960ani(){
			$(".header_wrap").addClass("type2");
			$(".header_wrap .search_box").hide();
			$(".gnb").hide();
			$(".footer_wrap").addClass("type2");
			mainContainer.animate({width:"720px",height:"1590px"});
			mainContent1.animate({left:"240px",top:"1110px"},300).addClass("type2");
			mainContent2.animate({left:"0px",top:"0px"},300);
			mainContent3.animate({left:"0px",top:"390px"},400).addClass("type2");
			mainContent4.animate({left:"0px",top:"870px"},400);
			mainContent5.animate({left:"0px",top:"1350px"},500);
			mainContent6.animate({left:"0px",top:"630px"},500);
			mainContent7.animate({left:"480px",top:"630px"},600);
			mainContent8.animate({left:"0px",top:"1110px"},600);
			mainContent9.animate({left:"480px",top:"870px"},700);
			mainContent10.animate({left:"240px",top:"1350px"},700);
			mainContent11.animate({left:"480px",top:"1350px"},800);
		}

		function size768(){
			$(".header_wrap").addClass("type2");
			$(".header_wrap .search_box").hide();
			$(".footer_wrap").addClass("type2");
			mainContainer.css({width:"100%",height:"1360px"});
			mainContent1.css({left:"0px",top:"880px"}).addClass("type2");
			mainContent2.css({left:"0px",top:"0px"});
			mainContent3.css({left:"0px",top:"160px"}).addClass("type2");
			mainContent4.css({left:"0px",top:"560px"});
			mainContent5.css({left:"0px",top:"1200px"});
			mainContent6.css({left:"0px",top:"320px"});
			mainContent7.css({left:"0px",top:"720px"});
			mainContent8.css({left:"0px",top:"1040px"});
			mainContent9.css({left:"50%",top:"720px"});
			mainContent10.css({left:"50%",top:"1040px"});
			mainContent11.css({left:"50%",top:"1200px"});
		}
		function size768ani(){
			$(".header_wrap").addClass("type2");
			$(".header_wrap .search_box").hide();
			$(".gnb").hide();
			$(".footer_wrap").addClass("type2");
			mainContainer.css({width:"100%",height:"1360px"});
			mainContent1.animate({left:"0px",top:"880px"},300).addClass("type2");
			mainContent2.animate({left:"0px",top:"0px"},300);
			mainContent3.animate({left:"0px",top:"160px"},400).addClass("type2");
			mainContent4.animate({left:"0px",top:"560px"},400);
			mainContent5.animate({left:"0px",top:"1200px"},500);
			mainContent6.animate({left:"0px",top:"320px"},500);
			mainContent7.animate({left:"0px",top:"720px"},600);
			mainContent8.animate({left:"0px",top:"1040px"},600);
			mainContent9.animate({left:"50%",top:"720px"},700);
			mainContent10.animate({left:"50%",top:"1040px"},700);
			mainContent11.animate({left:"50%",top:"1200px"},800);
		}

	// main visual content
		$(".mainBanner_list div a img").imagesLoaded(function(){
			var visualConPos = $(".mainBanner_list div a img");
			var visualConW = visualConPos.width();
			var visualConH = visualConPos.height();
			visualConPos.css({
				marginLeft:(-visualConW/2)+'px',
				marginTop:(-visualConH/2)+'px'
			});
		});

	// layout seting
		var windowSizeW = $(window).width();
		var windowSizeH = $(window).height();

		// main
			if (windowSizeW > 1200){
				sizeFull()
			}else if (windowSizeW > 960 && windowSizeW <= 1200){
				size1024();
			}else if (navigator.userAgent.indexOf("MSIE 7.0") == -1 && navigator.userAgent.indexOf("MSIE 8.0") == -1 && windowSizeW <= 960 && windowSizeW > 768){
				size960();
			}else if (navigator.userAgent.indexOf("MSIE 7.0") != -1 || navigator.userAgent.indexOf("MSIE 8.0") != -1 && windowSizeW <= 960){
				size1024();
			}else if (navigator.userAgent.indexOf("MSIE 7.0") == -1 && navigator.userAgent.indexOf("MSIE 8.0") == -1 && windowSizeW < 769){
				size768();
			}

		// sub
			if (windowSizeW > 1200){
				subFull();
			}else if (windowSizeW >960 && windowSizeW <= 1200){
				sub1024();
			}else if (navigator.userAgent.indexOf("MSIE 7.0") == -1 && navigator.userAgent.indexOf("MSIE 8.0") == -1 && windowSizeW <= 960 && windowSizeW > 768){
				sub960();
			}else if (navigator.userAgent.indexOf("MSIE 7.0") != -1 || navigator.userAgent.indexOf("MSIE 8.0") != -1 && windowSizeW <= 960){
				sub1024();
			}else if (navigator.userAgent.indexOf("MSIE 7.0") == -1 && navigator.userAgent.indexOf("MSIE 8.0") == -1 && windowSizeW < 769){
				sub768();
			}

		$(".size_W").html(windowSizeW);
		$(".size_H").html(windowSizeH);

		$(window).bind("resize", function(){
			waitForFinalEvent.finalEvent(function(){
				var windowSizeW = $(window).width();
				var windowSizeH = $(window).height();

				// main
					if (windowSizeW > 1200){
						sizeFullAni()
					}else if (windowSizeW > 960 && windowSizeW <= 1200){
						size1024ani();
					}else if (navigator.userAgent.indexOf("MSIE 7.0") == -1 && navigator.userAgent.indexOf("MSIE 8.0") == -1 && windowSizeW <= 960 && windowSizeW > 768){
						size960ani();
					}else if (navigator.userAgent.indexOf("MSIE 7.0") != -1 || navigator.userAgent.indexOf("MSIE 8.0") != -1 && windowSizeW <= 960){
						size1024ani();
					}else if (navigator.userAgent.indexOf("MSIE 7.0") == -1 && navigator.userAgent.indexOf("MSIE 8.0") == -1 && windowSizeW < 769){
						size768ani();
					}

				// sub
					if (windowSizeW > 1200){
						subFullani();
					}else if (windowSizeW >960 && windowSizeW <= 1200){
						sub1024ani();
					}else if (navigator.userAgent.indexOf("MSIE 7.0") == -1 && navigator.userAgent.indexOf("MSIE 8.0") == -1 && windowSizeW <= 960 && windowSizeW > 768){
						sub960ani();
					}else if (navigator.userAgent.indexOf("MSIE 7.0") != -1 || navigator.userAgent.indexOf("MSIE 8.0") != -1 && windowSizeW <= 960){
						sub1024ani();
					}else if (navigator.userAgent.indexOf("MSIE 7.0") == -1 && navigator.userAgent.indexOf("MSIE 8.0") == -1 && windowSizeW < 769){
						sub768ani();
					}

				$(".size_W").html(windowSizeW);
				$(".size_H").html(windowSizeH);

			// main visual content
				var visualConPos = $(".mainBanner_list div a img");
				var visualConW = visualConPos.width();
				var visualConH = visualConPos.height();
				visualConPos.css({marginLeft:(-visualConW/2)+'px', marginTop:(-visualConH/2)+'px'});
			}, 100, "Start");
		});

	// gnb - sub menu
		var headerWrap = $(".header_wrap");
		var menuTit = headerWrap.find(".gnb ul .menu_tit")
		menuTit.hover(function(){
			if (!headerWrap.hasClass("type2")){
				$(this).find(".subMenu_list").stop().slideDown(100);
			}
		}, function(){
			$(this).find(".subMenu_list").stop().slideUp(100);
		});

	// snb hover
		$(".snb ul li").hover(function(){
			if (!$(this).hasClass("on")){
				$(this).find(".menu_bg").stop().animate({left:'0px'},200);
				$(this).find(".select_point").stop().animate({right:'33px'},200).animate({right:'11px'},200);
			}
		},function(){
			if (!$(this).hasClass("on")){
				$(this).find(".menu_bg").stop().animate({left:'-200px'},200);
				$(this).find(".select_point").stop().animate({right:'33px'},200).animate({right:'-12px'},200);
			}
		});

	// snb open
		$(".snb .snb_wrap").click(function(){
			if ($(".snb").hasClass("type2")){
				$(".snb.type2 .ul_wrap").slideToggle(200);
			}
		});

	// sub_dev
		$(window).bind("scroll", function(){summaryPlanAni();});

	// group_map - tab menu
		var $group_map = $(".group_map");
		$group_map.find("h4").click(function(){
			$group_map.find("h4").removeClass("on");
			$(this).addClass("on");
			$group_map.find(".group_box").hide();
			$(this).next(".group_box").show();
		});

	// history top button
		$(window).scroll(function(){
			var topBtn = $(".history .content2 .scroll_box");
			var yearTop = new Array();
			var winWidth = $(window).width();
			var scrollTop = $(window).scrollTop()-200;

			for (i=1; i<= $(".history_list>li").length; i++){
				if (winWidth > 1024){
						yearTop[i] = parseInt($(".year_"+i).offset().top)-497;
				}else if (winWidth <= 1024 && winWidth > 960){
						yearTop[i] = parseInt($(".year_"+i).offset().top)-558;
				}else if(winWidth <= 960){
						yearTop[i] = parseInt($(".year_"+i).offset().top)-457;
				}
			}
			var topBtnTop = parseInt(topBtn.css("top"));
			if (scrollTop < 0){
				topBtn.stop().animate({top:0}, 300, 'easeInOutExpo');
			}else if (scrollTop < yearTop[1]){
				topBtn.stop().animate({top:scrollTop}, 300, 'easeInOutExpo');
			}else if(scrollTop >= yearTop[1]){
					topBtn.stop().animate({top:yearTop[1]}, 300, 'easeInOutExpo');
			}
			var scrollTopCount;
			var scrollTop_upValue;
			var scrollTop_downValue;
			if (yearTop[9] <= scrollTop && scrollTop < yearTop[8]){scrollTopCount=2015;scrollTop_upValue=0;scrollTop_downValue=yearTop[8];}
			if (yearTop[8] <= scrollTop && scrollTop < yearTop[7]){scrollTopCount=2014;scrollTop_upValue=yearTop[9];scrollTop_downValue=yearTop[7];}
			if (yearTop[7] <= scrollTop && scrollTop < yearTop[6]){scrollTopCount=2013;scrollTop_upValue=yearTop[8];scrollTop_downValue=yearTop[6];}
			if (yearTop[6] <= scrollTop && scrollTop < yearTop[5]){scrollTopCount=2012;scrollTop_upValue=yearTop[7];scrollTop_downValue=yearTop[5];}
			if (yearTop[5] <= scrollTop && scrollTop < yearTop[4]){scrollTopCount=2011;scrollTop_upValue=yearTop[6];scrollTop_downValue=yearTop[4];}
			if (yearTop[4] <= scrollTop && scrollTop < yearTop[3]){scrollTopCount=2010;scrollTop_upValue=yearTop[5];scrollTop_downValue=yearTop[3];}
			if (yearTop[3] <= scrollTop && scrollTop < yearTop[2]){scrollTopCount=2009;scrollTop_upValue=yearTop[4];scrollTop_downValue=yearTop[2];}
			if (yearTop[2] <= scrollTop && scrollTop < yearTop[1]){scrollTopCount=2008;scrollTop_upValue=yearTop[3];scrollTop_downValue=yearTop[1];}
			if (yearTop[1] <= scrollTop)											{scrollTopCount=2007;scrollTop_upValue=yearTop[2];scrollTop_downValue=false;}

			switch (scrollTopCount){
				case 2015 :
					$(".list_box").removeClass("on");
					$(".year_9").addClass("on");
					$(".year_count").html(scrollTopCount);
					break;
				case 2014 :
					$(".list_box").removeClass("on");
					$(".year_8").addClass("on");
					$(".year_count").html(scrollTopCount);
					break;
				case 2013 :
					$(".list_box").removeClass("on");
					$(".year_7").addClass("on");
					$(".year_count").html(scrollTopCount);
					break;
				case 2012 :
					$(".list_box").removeClass("on");
					$(".year_6").addClass("on");
					$(".year_count").html(scrollTopCount);
					break;
				case 2011 :
					$(".list_box").removeClass("on");
					$(".year_5").addClass("on");
					$(".year_count").html(scrollTopCount);
					break;
				case 2010 :
					$(".list_box").removeClass("on");
					$(".year_4").addClass("on");
					$(".year_count").html(scrollTopCount);
					break;
				case 2009 :
					$(".list_box").removeClass("on");
					$(".year_3").addClass("on");
					$(".year_count").html(scrollTopCount);
					break;
				case 2008 :
					$(".list_box").removeClass("on");
					$(".year_2").addClass("on");
					$(".year_count").html(scrollTopCount);
					break;
				case 2007 :
					$(".list_box").removeClass("on");
					$(".year_1").addClass("on");
					$(".year_count").html(scrollTopCount);
					break;
			}

			topBtn.find(".btn_up").click(function(){
				switch (scrollTopCount){
					case 2014 :
						$('html, body').stop().animate({scrollTop:scrollTop_upValue+200}, 300);
						scrollTopCount = 2015;
						break;
					case 2013 :
						$('html, body').stop().animate({scrollTop:scrollTop_upValue+200}, 300);
						scrollTopCount = 2014;
						break;
					case 2012 :
						$('html, body').stop().animate({scrollTop:scrollTop_upValue+200}, 300);
						scrollTopCount = 2013;
						break;
					case 2011 :
						$('html, body').stop().animate({scrollTop:scrollTop_upValue+200}, 300);
						scrollTopCount = 2012;
						break;
					case 2010 :
						$('html, body').stop().animate({scrollTop:scrollTop_upValue+200}, 300);
						scrollTopCount = 2011;
						break;
					case 2009 :
						$('html, body').stop().animate({scrollTop:scrollTop_upValue+200}, 300);
						scrollTopCount = 2010;
						break;
					case 2008 :
						$('html, body').stop().animate({scrollTop:scrollTop_upValue+200}, 300);
						scrollTopCount = 2009;
						break;
					case 2007 :
						$('html, body').stop().animate({scrollTop:scrollTop_upValue+200}, 300);
						scrollTopCount = 2008;
						break;
				}
			});
			topBtn.find(".btn_down").click(function(){
				switch (scrollTopCount){
				case 2015 :
					$('html, body').stop().animate({scrollTop:scrollTop_downValue+200}, 300);
					scrollTopCount = 2014;
					break;
				case 2014 :
					$('html, body').stop().animate({scrollTop:scrollTop_downValue+200}, 300);
					scrollTopCount = 2013;
					break;
				case 2013 :
					$('html, body').stop().animate({scrollTop:scrollTop_downValue+200}, 300);
					scrollTopCount = 2012;
					break;
				case 2012 :
					$('html, body').stop().animate({scrollTop:scrollTop_downValue+200}, 300);
					scrollTopCount = 2011;
					break;
				case 2011 :
					$('html, body').stop().animate({scrollTop:scrollTop_downValue+200}, 300);
					scrollTopCount = 2010;
					break;
				case 2010 :
					$('html, body').stop().animate({scrollTop:scrollTop_downValue+200}, 300);
					scrollTopCount = 2009;
					break;
				case 2009 :
					$('html, body').stop().animate({scrollTop:scrollTop_downValue+200}, 300);
					scrollTopCount = 2008;
					break;
				case 2008 :
					$('html, body').stop().animate({scrollTop:scrollTop_downValue+200}, 300);
					scrollTopCount = 2007;
					break;
				}
			});
		});

	// service - solution, platform - tab menu
		var serviceTab = $(".service article.content2");
		serviceTab.find(".tab_tit").click(function(){
			serviceTab.find(".tab_tit").removeClass("on");
			serviceTab.find(".tab_section").hide();
			$(this).addClass("on");
			$(this).next(".tab_section").show();
		});

	// search box - select box
		var select_box_check = 0;
		$(".select_box .top_con").click(function(){
			if (select_box_check == 0){
				$(".select_box").find(".value_list").slideDown("fast");
				select_box_check = 1;
			}else{
				$(".select_box").find(".value_list").slideUp("fast");
				select_box_check = 0;
			}
		});

		$(".select_box .value_list li").click(function(){
			$(".select_box .value_list").slideUp("fast");
			$(".select_box .selected_value").html($(this).find(".value_option").val());
			select_box_check = 0;
		});

	// introduce
		var rightPeople1 = $(".introduce .content2 .rightPeople_list li.rightPeople_box1");
		var rightPeople1_visual = rightPeople1.find(".visual_con .con2");
		var rightPeopleRotation1;
		var rightPeopleAngle1 = 0;
		rightPeople1.bind("mouseenter", function(){
			rightPeopleRotation1 = setInterval(function(){
				rightPeopleAngle1+=3;
				rightPeople1_visual.rotate(rightPeopleAngle1);
			},10);
		}).bind("mouseleave", function(){
			clearInterval(rightPeopleRotation1);
		});

		var rightPeople2 = $(".introduce .content2 .rightPeople_list li.rightPeople_box2");
		var rightPeople2_visual1 = rightPeople2.find(".visual_con .con1");
		var rightPeople2_visual2 = rightPeople2.find(".visual_con .con2");
		var rightPeopleRotation2;
		var rightPeopleAngle2 = 0;
		rightPeople2.bind("mouseenter", function(){
			rightPeopleRotation2 = setInterval(function(){
				rightPeopleAngle2+=2;
				rightPeople2_visual1.rotate(rightPeopleAngle2*-2);
				rightPeople2_visual2.rotate(rightPeopleAngle2);
			},10);
		}).bind("mouseleave", function(){
			clearInterval(rightPeopleRotation2);
		});

		var rightPeople3 = $(".introduce .content2 .rightPeople_list li.rightPeople_box3");
		var rightPeople3_visual1 = rightPeople3.find(".visual_con .black_con");
		var rightPeople3_visual2 = rightPeople3.find(".visual_con .white_con");
		var rightPeopleFade;
		rightPeople3.bind("mouseenter", function(){
			rightPeople3_visual1.animate({opacity:'0.2'},500).animate({opacity:'1'},500);
			rightPeople3_visual2.delay(250).animate({opacity:'0.2'},500).animate({opacity:'1'},500);
			rightPeopleFade = setInterval(function(){
				rightPeople3_visual1.animate({opacity:'0.2'},500).animate({opacity:'1'},500);
				rightPeople3_visual2.delay(250).animate({opacity:'0.2'},500).animate({opacity:'1'},500);
			},1000);
		}).bind("mouseleave", function(){
			clearInterval(rightPeopleFade);
		});

	// subMenu_list position
		$(window).scroll(function(){
			var subMenuScrollTop = $(window).scrollTop();
			$(".subMenu_list").css('top',(113-subMenuScrollTop)+'px');
		});

});

// main item load seting
	$(document).ready(function(){
		var iconT = 0;
		var iTotal = $(".main_container article").length;
		$(".main_container article").each(function(index) {
			$(this).delay(iconT*10).animate({opacity:'1'},1000);
			iconT += iTotal;
		});
	});
