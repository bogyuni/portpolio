$(function (){

	var $flickContainer = $('.container');
	var $slideMenu = $('.slide_ov_wrap');
	var tOn = false; // touch start check
	var tStartPosX = 0; // touch start position X
	var tStartPosY = 0; // touch start position Y
	var tMovePosX; // touch move position X
	var tMovePosY; // touch move position Y
	var winWidth = $(window).width();
	var flickNum = path_plans.length; // Link path list
	var tabCnt = 0;
	var nextCnt = 0;
	var aniTime = 300;
	var tMovePosX_ch = false;
	var tMovePosY_ch = false;
	var pageload_ch = false;

	// Touch Start
	$flickContainer.on('touchstart',function (e){
		if (in_slide_tOn == false && pageload_ch == false){
			tOn = true;
		}
		var t = e.originalEvent.touches[0];
		tMovePosX = 0;
		tMovePosY = 0;
		tStartPosX = t.pageX;
		tStartPosY = t.pageY;
	});

	// Touch Move
	$flickContainer.on('touchmove',function (e){
		if (tOn == true && pageload_ch == false){
			//if (tOn == true){
			var t = e.originalEvent.touches[0];

			var tMovePosX_val = ((t.pageX - tStartPosX) < 0) ? (t.pageX - tStartPosX) * -1 : (t.pageX - tStartPosX);
			var tMovePosY_val = ((t.pageY - tStartPosY) < 0) ? (t.pageY - tStartPosY) * -1 : (t.pageY - tStartPosY);

			if (tMovePosX_val > 6){
				tMovePosX_ch = true;
				tMovePosY_val = 0;
			}else{
				tMovePosX_ch = false;
				$flickContainer.css('transform','translate3d(0px, 0px, 0px)');
			}
			if (tMovePosY_val > 5){
				tMovePosY_ch = true;
				tMovePosX_val = 0;
			}

			if (tMovePosX_ch == true && tMovePosY_ch == false){
				e.preventDefault();
				tMovePosX = t.pageX - tStartPosX;
				$flickContainer.css('transform','translate3d('+tMovePosX+'px, 0px, 0px)');
			}
			if (tMovePosY_ch == true && tMovePosX_ch == false){
				tMovePosX = 0;
				return;
			}
		}
	});

	// Touch End
	$flickContainer.on('touchend',function (e){
		if (in_slide_tOn == false && pageload_ch == false){
			tMovePosX_ch = false;
			tMovePosY_ch = false;
			tOn = false;
			pageload_ch = true;

			var tPersent = parseInt(tMovePosX/winWidth*100);
			var tDirection = (tPersent > 0) ? 'right' : 'left' ;
			var tPersentPositive = (tPersent > 0) ? tPersent : tPersent*-1;

			// Move
			if ( tPersentPositive > 10 ){
				// Left
				if ( tDirection == 'left' ){
					$flickContainer.css({ transform:'translate3d(-100%, 0px, 0px)', transitionDuration: aniTime+'ms' });
					tabCnt++;
					if (tabCnt > flickNum-1){ tabCnt = 0; }
					nextCnt = tabCnt+1;
					if (nextCnt > flickNum-1){ nextCnt = 0; }
				// Right
				}else{
					$flickContainer.css({ transform:'translate3d(100%, 0px, 0px)', transitionDuration: aniTime+'ms' });
					tabCnt--;
					if (tabCnt < 0){ tabCnt = flickNum-1; }
					nextCnt = tabCnt-1;
					if (nextCnt < 0){ nextCnt = flickNum-1; }
				}

				setTimeout(function (){
					$.ajax({
						type : 'GET',
						//async : false,
						url : path_plans[nextCnt],
						dataType : 'html',
						success : function(result){
							if ( tDirection == 'left' ){
								$('.flick_section').first().html(result).appendTo($flickContainer);
							}else{
								$('.flick_section').last().html(result).prependTo($flickContainer);
							}
							$flickContainer.css({ transform:'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' });
							pageLoadFn(); // page load function
						},
						complete: function() {
							pageload_ch = false;
							$(window).scrollTop(0);
						}


					});
				}, aniTime);

				// slide_menu move
					$slideMenu.find('.menu_li').removeClass('on');
					$slideMenu.find('.menu_li').eq(tabCnt).addClass('on');
					var slide_menu_left = $slideMenu.find('.menu_li').eq(tabCnt).offset().left;
					$slideMenu.scrollLeft(slide_menu_left);

			// Not move
			}else{
				$flickContainer.css({ transform:'translate3d(0px, 0px, 0px)', transitionDuration: aniTime+'ms' });
				setTimeout(function (){
					$flickContainer.css({ transitionDuration: '0ms' });
					pageload_ch = false;
				}, aniTime);
			}
		}
	});

	// slide menu click move
	$slideMenu.find('a').click(function (){
		tabCnt = parseInt($(this).attr('value'));
		var tabCnt_prev = (tabCnt-1 < 0) ? flickNum-1 : tabCnt-1;
		var tabCnt_next = (tabCnt+1 > flickNum-1) ? 0 : tabCnt+1;

		$slideMenu.find('.menu_li').removeClass('on');
		$slideMenu.find('.menu_li').eq(tabCnt).addClass('on');

		$('.flick_section').html('');

		$.ajax({
			type:'GET',
			//async : false,
			url : path_plans[tabCnt_prev],
			dataType:'html',
			success:function(result){ $('.flick_section').eq(0).html(result); }
		});

		$.ajax({
			type:'GET',
			//async : false,
			url : path_plans[tabCnt],
			dataType:'html',
			success:function(result){
				$('.flick_section').eq(1).html(result);
				$flickContainer.css({ transform:'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' });
				pageLoadFn(); // page load function
			}
		});

		$.ajax({
			type:'GET',
			//async : false,
			url : path_plans[tabCnt_next],
			dataType:'html',
			success:function(result){ $('.flick_section').eq(2).html(result); }
		});

		var slide_menu_left = $slideMenu.find('.menu_li').eq(tabCnt).offset().left;
		$slideMenu.scrollLeft(slide_menu_left);
	});


});
