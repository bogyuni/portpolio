
// main
$(function (){


	// visual seting
		$('.visual_box:first-child').addClass('on');
		var main_visual_num = $('.visual_box').length-1;
		var main_visual_cnt = 0;
		var setMainvisual;
		var reMainvisual;
		var main_visual_play = true;

		for (var i=main_visual_num; i>=0; i--){
			$('.control_box').prepend('<button type="button" class="btn_vis_page" value="'+i+'">'+i+'</button>');
		}
		$('.btn_vis_page:first-child').addClass('on');

		function mainvisualMove(direction){
			if (direction == 1){
				main_visual_cnt++;
				if ( main_visual_cnt > main_visual_num){ main_visual_cnt = 0; }
			}else if(direction == 0){
				main_visual_cnt--;
				if ( main_visual_cnt < 0){ main_visual_cnt = main_visual_num; }
			}
			$('.visual_box').removeClass('on');
			$('.visual_box').eq(main_visual_cnt).addClass('on');
			$('.btn_vis_page').removeClass('on');
			$('.btn_vis_page').eq(main_visual_cnt).addClass('on');

			$('.btn_vis_play').removeClass('off');
		}
		function mainvisualStart(){
			setMainvisual = setInterval(function (){
				mainvisualMove(1);
			}, 4000);
		}
		function mainvisualEnd(){
			clearInterval(setMainvisual);
			clearTimeout(reMainvisual);
			$('.btn_vis_play').addClass('off');
		}
		function mainvisualRe(){
			reMainvisual = setTimeout(mainvisualStart, 10000);
		}

		mainvisualStart();

		$('.btn_vis_prev').click(function (){
			mainvisualMove(0);
			mainvisualEnd();
			mainvisualRe();
			main_visual_play = true;
		});
		$('.btn_vis_next').click(function (){
			mainvisualMove(1);
			mainvisualEnd();
			mainvisualRe();
			main_visual_play = true;
		});
		$('.control_box').on('click', '.btn_vis_page', function (){
			main_visual_cnt = $(this).val();
			mainvisualMove();
			mainvisualEnd();
			mainvisualRe();
			main_visual_play = true;
		});
		$('.btn_vis_play').click(function (){
			if ( main_visual_play == true ){
				mainvisualEnd();
				main_visual_play = false;
			}else{
				$('.btn_vis_play').removeClass('off');
				mainvisualStart();
				main_visual_play = true;
			}
		});

	// garden seting
		var garden_num = $('.garden_list').length-1;
		var garden_cnt = 0;
		function gardenMove(align){
			$('.garden_list').removeClass('on');
			var thisList = $('.garden_list').eq(garden_cnt);

			thisList.addClass('on').find('.garden_product').hide();

			if (align == 'prev'){
				var delayTime=100;
				thisList.find('.garden_product').each(function (){
					$(this).fadeIn(delayTime);
					delayTime+=300;
				});
			}else{
				var delayTime=1600;
				thisList.find('.garden_product').each(function (){
					$(this).fadeIn(delayTime);
					delayTime-=300;
				});
			}
		}
		$('.garden_list:first-child').addClass('on');
		$('.btn_gd_prev').click(function (){
			garden_cnt--;
			if (garden_cnt < 0){ garden_cnt = garden_num; }
			gardenMove('prev');
		});
		$('.btn_gd_next').click(function (){
			garden_cnt++;
			if (garden_cnt > garden_num){ garden_cnt = 0; }
			gardenMove('next');
		});

		var garden_top = $('.garden').offset().top;
			//$('.garden').addClass('on');

			$(window).scroll(function (){
				var scTop = $(this).scrollTop();
				if (scTop > (garden_top-400) ){
					$('.garden').addClass('on');
				}
			});

	// country_section
		var country_section_T = $('.country_section').offset().top;

	// plan_section

		// 개별 기획전
		var $planItem = $('.plan_item');
		// 기획전의 수
		var planItem_num = $planItem.length;
		// 기획전의 아이템 수
		var planItem_in_num = [];
		// 아이템의 카운트
		var planItem_in_cnt = [];
		// click plan
		var clickPlanBtnCnt;

		for (var i=0; i<planItem_num; i++){
			planItem_in_num[i] = $planItem.eq(i).find('.plan_in_item').length-1;
			planItem_in_cnt[i] = 0;
		}

		for (var j=0; j<planItem_num; j++){
			for (var i=0; i<(planItem_in_num[j]+1); i++){
				$('.plan_btn_box').eq(j).append('<button type="button" class="btn_plan" value="'+i+'">'+i+'</button>');
			}
		}
		$('.btn_plan:first-child').addClass('on');

		function planActionCnt(planNum, btnAction){
			if (btnAction == false){
				planItem_in_cnt[planNum]++;
				if ( planItem_in_cnt[planNum] > planItem_in_num[planNum] ){
					planItem_in_cnt[planNum] = 0;
				}
			}else{
					planItem_in_cnt[planNum] = clickPlanBtnCnt;
			}

			$('.plan_btn_box').eq(planNum).find('.btn_plan').removeClass('on');
			$('.plan_btn_box').eq(planNum).find('.btn_plan').eq(planItem_in_cnt[planNum]).addClass('on');
		}

		function planAction(planNum, planTime, btnAction){
			var aniTime = planTime;
			var ranNum = parseInt( Math.random() * 4 +1);
			switch (ranNum){
				case 1: // top
					$planItem.eq(planNum).find('.plan_in_item').eq(planItem_in_cnt[planNum]).css({left:0}).animate({top:'-100%'},aniTime);
					planActionCnt(planNum, btnAction);
					$planItem.eq(planNum).find('.plan_in_item').eq(planItem_in_cnt[planNum]).css({left:0,top:'100%'}).animate({top:'0'},aniTime);
					break;
				case 2: // right
					$planItem.eq(planNum).find('.plan_in_item').eq(planItem_in_cnt[planNum]).css({top:0}).animate({left:'100%'},aniTime);
					planActionCnt(planNum, btnAction);
					$planItem.eq(planNum).find('.plan_in_item').eq(planItem_in_cnt[planNum]).css({top:0,left:'-100%'}).animate({left:'0'},aniTime);
					break;
				case 3: // bottom
					$planItem.eq(planNum).find('.plan_in_item').eq(planItem_in_cnt[planNum]).css({left:0}).animate({top:'100%'},aniTime);
					planActionCnt(planNum, btnAction);
					$planItem.eq(planNum).find('.plan_in_item').eq(planItem_in_cnt[planNum]).css({left:0,top:'-100%'}).animate({top:'0'},aniTime);
					break;
				case 4: // left
					$planItem.eq(planNum).find('.plan_in_item').eq(planItem_in_cnt[planNum]).css({top:0}).animate({left:'-100%'},aniTime);
					planActionCnt(planNum, btnAction);
					$planItem.eq(planNum).find('.plan_in_item').eq(planItem_in_cnt[planNum]).css({top:0,left:'100%'}).animate({left:'0'},aniTime);
					break;
			}
		}

		var planActionSet = [];
		var planAniTime = [];
		var planInterTime = [];
		var planBtnVal = [];
		planAniTime[0] = 350, planInterTime[0] = 14320;
		planAniTime[1] = 580, planInterTime[1] = 4500;
		planAniTime[2] = 520, planInterTime[2] = 5580;
		planAniTime[3] = 500, planInterTime[3] = 9800;
		planAniTime[4] = 550, planInterTime[4] = 8270;
		planActionSet[0] = setInterval(function (){ planAction(0, planAniTime[0], false); }, planInterTime[0]);
		planActionSet[1] = setInterval(function (){ planAction(1, planAniTime[1], false); }, planInterTime[1]);
		planActionSet[2] = setInterval(function (){ planAction(2, planAniTime[2], false); }, planInterTime[2]);
		planActionSet[3] = setInterval(function (){ planAction(3, planAniTime[3], false); }, planInterTime[3]);
		planActionSet[4] = setInterval(function (){ planAction(4, planAniTime[4], false); }, planInterTime[4]);

		$('.plan_item').hover(function (){
			var thisIndex = $(this).index();
			clearInterval(planActionSet[thisIndex]);
		},function (){
			var thisIndex = $(this).index();
			planActionSet[thisIndex] = setInterval(function (){ planAction(thisIndex, planAniTime[thisIndex], false); }, planInterTime[thisIndex]);
		});


		$('.plan_btn_box').on('click','.btn_plan',function (){
			var boxIndex = $(this).parent().attr('value');
			var btnVal = $(this).val();
			planBtnVal[boxIndex] = btnVal;

			if ( planItem_in_cnt[boxIndex] != btnVal ){
				clickPlanBtnCnt = btnVal;
				planAction(boxIndex, planAniTime[boxIndex], true);
			}

			//console.log(planItem_in_cnt[boxIndex]);
		});

	// product list
		var prodListWrap = $('.main_prod_list_wrap');
		var prodList = [];
		var prodList_num = prodListWrap.length;

		var prodList_cnt = [];

		for (var i=0; i<prodList_num; i++){
			prodList[i] = prodListWrap.eq(i).find('.prod_list').length;
			prodList_cnt[i] = 0;
			$('.btn_prod_list_p').eq(i).attr('value',i);
			$('.btn_prod_list_n').eq(i).attr('value',i);
		}

		$('.btn_prod_list_n').click(function (){
			var prNum = $(this).attr('value');
			prodList_cnt[prNum]++;
			if ( prodList_cnt[prNum] > prodList[prNum]-1 ){
				prodList_cnt[prNum] = 0;
			}
			prodListWrap.eq(prNum).find('.prod_list').hide().find('li').css('opacity',0);
			prodListWrap.eq(prNum).find('.prod_list').eq(prodList_cnt[prNum]).show();
			var delayTime = 0;
			prodListWrap.eq(prNum).find('.prod_list').eq(prodList_cnt[prNum]).find('li').each(function (){
				delayTime++;
				$(this).animate({opacity:1},delayTime*100);
			});
		});

		$('.btn_prod_list_p').click(function (){
			var prNum = $(this).attr('value');
			prodList_cnt[prNum]--;
			if ( prodList_cnt[prNum] < 0 ){
				prodList_cnt[prNum] = prodList[prNum]-1;
			}
			prodListWrap.eq(prNum).find('.prod_list').hide().find('li').css('opacity',0);
			prodListWrap.eq(prNum).find('.prod_list').eq(prodList_cnt[prNum]).show();
			var delayTime = 0;
			prodListWrap.eq(prNum).find('.prod_list').eq(prodList_cnt[prNum]).find('li').each(function (){
				delayTime++;
				$(this).animate({opacity:1},delayTime*100);
			});
		});




	$(window).scroll(function (){
		/* 브라우저 성능 문제로 일시 중단
		scrollTop = $(window).scrollTop();
		$('.visual_box').css('backgroundPosition','center '+((scrollTop*0.5)-75)+'px');
		var garden_offsetTop = $('.garden_wrap').offset().top;
		$('.garden_wrap').css('backgroundPosition','center '+(((garden_offsetTop-scrollTop)*0.26)-261)+'px');
		*/
		if (scrollTop > country_section_T-300 ){
			$('.country_item').addClass('on');
		}else{
			$('.country_item').removeClass('on');
		}

	}); // window scroll


	$('.board_desk_area .board_tab').click(function (){
		$('.board_desk_area .board_tab').removeClass('on');
		$('.board_desk_area .board_tab_con').removeClass('on');
		$(this).addClass('on').next('.board_tab_con').addClass('on');
	});



});// main
