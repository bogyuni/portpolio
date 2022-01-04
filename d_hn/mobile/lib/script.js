var in_slide_tOn = false; // visual slide contents check
var winWidth = window.innerWidth;
var uagt = navigator.userAgent;

// set cookie
	function setCookieSbg(cname,cvalue,exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname+"="+cvalue+"; "+expires+"; path=/";
	}

	function getCookieSbg(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	function delCookieSbg(cname){
		setCookieSbg(cname,'',-1);
	}

// container height size set
	function containerHeightSet(){
		$('.container').height($('.flick_section').eq(1).height());
	}

// product list view change
	function pordListViewCheck(){
		if ( getCookieSbg('list_view_set') == '' ){
			setCookieSbg('list_view_set','type1','999');
		}
		if ( getCookieSbg('list_view_set') == 'type1' ){
			$('.list_view_set').addClass('type1').removeClass('type2');
			$('.btn_list_view').removeClass('big');
		}else if( getCookieSbg('list_view_set') == 'type2' ){
			$('.list_view_set').addClass('type2').removeClass('type1');
			$('.btn_list_view').addClass('big');
		}

		if ($('.btn_list_view').hasClass('firstBig')){
			$('.btn_list_view').addClass('big');
		}
	}
	// change button
		function pordListViewChange(noCookie){
			if (noCookie == true){
				if ( noCookieBigCh == true){
					noCookieBigCh = false;
					$('.list_view_big').addClass('type1').removeClass('type2');
					$('.btn_list_view').removeClass('big');
				}else{
					noCookieBigCh = true;
					$('.list_view_big').addClass('type2').removeClass('type1');
					$('.btn_list_view').addClass('big');
				}
			}else{
				if ( getCookieSbg('list_view_set') == 'type1' ){
					$('.list_view_set').addClass('type2').removeClass('type1');
					$('.btn_list_view').addClass('big');
					setCookieSbg('list_view_set','type2','999');
				}else{
					$('.list_view_set').addClass('type1').removeClass('type2');
					$('.btn_list_view').removeClass('big');
					setCookieSbg('list_view_set','type1','999');
				}
			}
			containerHeightSet();
		}

// visual event
	function visRollingEvn(selector, indicator){
		// indicator : true = bullet, false = number
		// visual height size
			var $vis = $(selector);
			var vis_img = $vis.find('.first_vis_img');
			var vis_num = $vis.find('.visual_con').length;


			vis_img.load(function(){
				$vis.find('.visual_view_box').css('height',vis_img.height()+'px');
				if (indicator == true){
					for (var i=0; i<vis_num; i++){
						$vis.find('.indicator_list').append('<li>'+(i+1)+'</li>');
					}
					$vis.find('.indicator_list li:first-child').addClass('on');
				}else{
					$vis.find('.indicator_cnt2').text(vis_num);
				}
			});
			$(window).resize(function (){
				$vis.find('.visual_view_box').css('height',vis_img.height()+'px');
			});

		// visual rolling
			var vis_cnt=0, vis_right ,vis_left, vis_next;
			var vis_e_time = 4000;
			$vis.find('.visual_con').eq(vis_cnt).css({transform:'translate3d(0px, 0px, 0px)',zIndex:2});
			$vis.find('.visual_con').eq(vis_cnt+1).css({transform:'translate3d(100%, 0px, 0px)',zIndex:2});
			$vis.find('.visual_con').eq(vis_num-1).css({transform:'translate3d(-100%, 0px, 0px)',zIndex:2});

			function visEvent(direction){
				if (direction == 'left'){
					$vis.find('.slide_visual_list').css({transform:'translate3d(-100%, 0px, 0px)',transitionDuration:'0.4s'});
					setTimeout(function (){
						$vis.find('.slide_visual_list').css({transform:'translate3d(0px, 0px, 0px)',transitionDuration:'0s'});
						if (vis_cnt > vis_num-1){vis_cnt = 0;}
						$vis.find('.visual_con').eq(vis_cnt).css({transform:'translate3d(-100%, 0px, 0px)',zIndex:2});
						vis_left = ( vis_cnt-1 < 0 ) ? vis_num-1 : vis_cnt-1;
						$vis.find('.visual_con').eq(vis_left).css({transform:'translate3d(0px, 0px, 0px)',zIndex:1});
						vis_cnt++;
						vis_right = ( vis_cnt > (vis_num-1) ) ? 0 : vis_cnt;
						$vis.find('.visual_con').eq(vis_right).css({transform:'translate3d(0px, 0px, 0px)',zIndex:3});
						if (indicator == true){
							$vis.find('.indicator_list li').removeClass('on');
							$vis.find('.indicator_list li').eq(vis_right).addClass('on');
						}else{
							$vis.find('.indicator_cnt1').text(vis_right+1);
						}
						vis_next = ( (vis_right+1) > (vis_num-1) ) ? 0 : vis_right+1;
						$vis.find('.visual_con').eq(vis_next).css({transform:'translate3d(100%, 0px, 0px)',zIndex:2});
					},400);
				}else{
					$vis.find('.slide_visual_list').css({transform:'translate3d(100%, 0px, 0px)',transitionDuration:'0.4s'});
					setTimeout(function (){
						$vis.find('.slide_visual_list').css({transform:'translate3d(0px, 0px, 0px)',transitionDuration:'0s'});
						if (vis_cnt < 0){vis_cnt = vis_num-1;}
						$vis.find('.visual_con').eq(vis_cnt).css({transform:'translate3d(100%, 0px, 0px)',zIndex:2});
						vis_right = ( vis_cnt+1 > (vis_num-1) ) ? 0 : vis_cnt+1;
						$vis.find('.visual_con').eq(vis_right).css({transform:'translate3d(0px, 0px, 0px)',zIndex:1});
						vis_cnt--;
						vis_left = ( vis_cnt < 0 ) ? vis_num-1 : vis_cnt;
						$vis.find('.visual_con').eq(vis_left).css({transform:'translate3d(0px, 0px, 0px)',zIndex:3});
						if (indicator == true){
							$vis.find('.indicator_list li').removeClass('on');
							$vis.find('.indicator_list li').eq(vis_left).addClass('on');
						}else{
							$vis.find('.indicator_cnt1').text(vis_left+1);
						}
						vis_next = ( (vis_left-1) < 0 ) ? vis_num-1 : vis_left-1;
						$vis.find('.visual_con').eq(vis_next).css({transform:'translate3d(-100%, 0px, 0px)',zIndex:2});
					},400);
				}
			}
			var vis_fn = setInterval(function (){ visEvent('left'); }, vis_e_time);

		// visual touch
			var vis_m_tOn = false;
			var vis_tStartPos = 0;
			var vis_tMovePos;

			$vis.find('.visual_view_box').on('touchstart',function (e){
				in_slide_tOn = true;
				clearInterval(vis_fn);
				vis_m_tOn = true;
				var t = e.originalEvent.touches[0];
				vis_tMovePos = 0;
				vis_tStartPos = t.pageX;
			});

			$vis.find('.visual_view_box').on('touchmove',function (e){
				if (vis_m_tOn == true){
					var t = e.originalEvent.touches[0];
					vis_tMovePos = t.pageX - vis_tStartPos;
					var vis_tMovePos_val = (vis_tMovePos < 0) ? vis_tMovePos * -1 : vis_tMovePos;
					if (vis_tMovePos_val > 10){
						e.preventDefault();
						$vis.find('.slide_visual_list').css({transform:'translate3d('+vis_tMovePos+'px, 0px, 0px)',transitionDuration:'0s'});
					}
				}
			});

			$vis.find('.visual_view_box').on('touchend',function (){
				in_slide_tOn = false;
				vis_m_tOn = false;
				var tPersent = parseInt(vis_tMovePos/winWidth*100);
				var tDirection = (tPersent > 0) ? 'right' : 'left' ;
				var tPersentPositive = (tPersent > 0) ? tPersent : tPersent*-1;
				// Move
				if ( tPersentPositive > 4 ){
					// Left
					if ( tDirection == 'left' ){ visEvent('left');
					// Right
					}else{ visEvent('right'); }
				// Not move
				}else{
					$vis.find('.slide_visual_list').css({transform:'translate3d(0px, 0px, 0px)',transitionDuration:'0.4s'});
				}
				vis_fn = setInterval(function (){ visEvent('left'); }, vis_e_time);
			});
	}

// product summary check
	function prodSumCheck(){
		setCookieSbg('prodSumCheck','done',999);
		$('.background_layer1').fadeOut();
		$('.prod_popup').hide();
		$('.alert_layer3').show();
		setTimeout(function (){
			$('.alert_layer3').fadeOut();
		},2000)
	}

// product summary open
	function prodSumOpen(link_url){
		if (!getCookieSbg('prodSumCheck')){
			$('.background_layer1').fadeIn();
			$('.prod_popup').show();
		}else{
			location.href=link_url;
		}
	}

// product summary close
	function prodSumClose(){
		$('.background_layer1').fadeOut();
		$('.prod_popup').hide();
	}

// slide_menu width set
	function slideMenuSet(){
		var slide_list_width = 0;
		$('.slide_menu .menu_li').each(function (){
			slide_list_width += parseInt($(this).outerWidth()+7);
		});
		$('.slide_menu .menu_list').width(slide_list_width);
	}

// product in cart
	function prodCartIn(ch_cart){
		if (ch_cart == false){
			$('.alert_layer1').show();
		}else{
			$('.alert_layer1_1').show();
		}
		$('.background_layer2').fadeIn();
	}

// picked in
	function pickedIn(){
		//$(this).addClass('on');
		$('.background_layer2').fadeIn();
		$('.alert_layer2').show();
	}


// basic rolling fn
	function basicRolling(select_bx, select_con, settime){
		var rollCnt = 0;
		var selBox = $(select_bx);
		var liNum = $(select_con).length-1;
		for (var i=0; i<liNum; i++){
			selBox.find('.indicator_list').append(' <li class="indicator_con"></li>');
		}
		selBox.find(select_con).eq(rollCnt).addClass('on');
		setInterval(function (){
			rollCnt++;
			if (rollCnt > liNum){
				rollCnt = 0;
			}
			selBox.find(select_con).removeClass('on');
			selBox.find(select_con).eq(rollCnt).addClass('on');
			selBox.find('.indicator_con').removeClass('on');
			selBox.find('.indicator_con').eq(rollCnt).addClass('on');
		},settime);
	}


// page ajax load function /////////////////////////////////////////////////////////
	function pageLoadFn(){
		pordListViewCheck();
		containerHeightSet();
	}


$(function (){

	if (uagt.match('NAVER')){
		$('.btn_top').remove();
	}


	// top button
		$('.btn_top').click(function (){
			$(window).scrollTop(0);
		});

	// side menu
		$('.btn_side_menu').click(function (){
			$('.btn_category_s').click();
			$('html,body').addClass('popon');
			$('.side_menu').css('transform', 'translate3d(0%, 0px, 0px)');
		});

		$('.btn_mypage').click(function (){
			$('.btn_mypage_s').click();
			$('html,body').addClass('popon');
			$('.side_menu').css('transform', 'translate3d(0%, 0px, 0px)');
		});

		$('.side_menu .btn_close').click(function (){
			$('html,body').removeClass('popon');
			$('.side_menu').css('transform', 'translate3d(-100%, 0px, 0px)');
		});

		$('.side_btn_box > button').click(function (){
			$('.side_btn_box > button').removeClass('on');
			$(this).addClass('on');
			$('.side_menu > section').removeClass('on');
			$('.side_menu > section').eq($(this).val()).addClass('on');
		});

	// side close slide
		var side_m_tOn = false;
		var side_tStartPos = 0;
		var side_tMovePos;
		$('.side_menu').on('touchstart',function (e){
			side_m_tOn = true;
			var t = e.originalEvent.touches[0];
			side_tMovePos = 0;
			side_tStartPos = t.pageX;
		});
		$('.side_menu').on('touchmove',function (e){
			if (side_m_tOn == true){
				var t = e.originalEvent.touches[0];
				side_tMovePos = t.pageX - side_tStartPos ;
			}
		});
		$('.side_menu').on('touchend',function (e){
			tOn = false;
			var tPersent = parseInt(side_tMovePos/winWidth*100);
			var tDirection = (tPersent > 0) ? 'right' : 'left' ;
			var tPersentPositive = (tPersent > 0) ? tPersent : tPersent*-1;
			if ( tPersentPositive > 30 && tDirection == 'left'){
				$('.side_menu .btn_close').click();
			}
		});

	// side menu category open/close
		var d1_tit_ch = false;
		$('.d1_tit').on('click',function (){
			if ( !$(this).data('click') ){
				$('.d1_menu').removeClass('on');
				$('.depth2_list').slideUp(160);
				$('.d1_tit').data('click',0);
				$(this).parent().addClass('on');
				$(this).next('.depth2_list').slideDown(160);
				$(this).data('click',1);
			}else{
				$(this).parent().removeClass('on');
				$(this).next('.depth2_list').slideUp(160);
				$(this).data('click',0);
			}
		});

	// input click check
		$('.ch_label').click(function (){
			var $label = $(this);
			if ( $label.find('input').is(':checked') ){
				$label.addClass('on');
			}else{
				$label.removeClass('on');
			}
		});

		$('.cart_list').on('click', '.ch_label',function (){
			var $label = $(this);
			if ( $label.find('input').is(':checked') ){
				$label.addClass('on');
			}else{
				$label.removeClass('on');
			}
		});

		$('.rd_label').click(function (){
			$(this).siblings('label').removeClass('on');
			$(this).addClass('on');
		});

		// all check click
		$('#all_terms_ch').click( function(e){
			if( $(this).is(':checked') ){
				$('.terms_list').find('input').prop('checked','checked').parent().addClass('on');
			}else{
				$('.terms_list').find('input').prop('checked','').parent().removeClass('on');
			}
		});
		// all cart item check
		$('#check_cart_all').click( function(e){
			if( $(this).is(':checked') ){
				$('.cart_list').find('input:checkbox[name*="check_cart_item"]').prop('checked','checked').parent().addClass('on');
			}else{
				$('.cart_list').find('input:checkbox[name*="check_cart_item"]').prop('checked','').parent().removeClass('on');
			}
		});

		// all picked item check
		$('#check_picked_all').click( function(e){
			if( $(this).is(':checked') ){
				$('.picked_list').find('input:checkbox[name*="check_picked_item"]').prop('checked','checked').parent().addClass('on');
			}else{
				$('.picked_list').find('input:checkbox[name*="check_picked_item"]').prop('checked','').parent().removeClass('on');
			}
		});

	// search event
		// search layer open/close
		$('.inst_recommend, .btn_search_open').click(function (){
			$('.search_layer').css('top','0').find('.inbox').css('width','100%');
		});
		$('.search_layer .btn_back').click(function (){
			$('.search_layer').css('top','120%').find('.inbox').css('width','60px');
		});
		// search button click
		$('.search_bot .link_box button').click(function (){
			var btnIdx = $(this).val();
			$('.search_bot .link_box button').removeClass('on');
			$('.search_bot .search_list_wrap').removeClass('on');
			$(this).addClass('on');
			$('.search_bot .search_list_wrap').eq(btnIdx).addClass('on');
		});


	// product summary close
		$('.prod_popup .btn_close').click(function (){
			prodSumClose();
		});

	// btn_cart
		/*$('.prod_popup .btn_cart').click(function (){
			prodCartIn();
		});*/

	// alert layer close
		$('.alert_layer .btn_cancel, .background_layer2').click(function (){
			$('.alert_layer').hide();
			$('.background_layer2').fadeOut();
		});

	// btn_picked
		$('.btn_picked').click(function (){
			$(this).addClass('on');
			$('.background_layer2').fadeIn();
			$('.alert_layer2').show();
		});

	// sub page head event
		$('.sub_title_area .cate_tit .btn_depth1').click(function (){
			if ( !$(this).data('click')){
				$(this).data('click',1).addClass('on');
				$('.sub_title_area .cate_1depth_table').show();
			}else{
				$(this).data('click',0).removeClass('on');
				$('.sub_title_area .cate_1depth_table').hide();
			}
		});

		$('.open_2depth').click(function (){
			if (!$(this).data('click')){
				$(this).data('click',1).addClass('on');
				$('.sub_head_nav .cate_2depth_table').show();
			}else{
				$(this).data('click',0).removeClass('on');
				$('.sub_head_nav .cate_2depth_table').hide();
			}
		});

	// layer window close
		$('.layer_window .btn_close').click(function (){
			$('html,body').removeClass('popon');
			$('.layer_window').hide();
		});



	pordListViewCheck();
	slideMenuSet();

});


$(window).load(function (){
	containerHeightSet();
});

$(window).resize(function (){
	slideMenuSet();
	setTimeout(function (){
		containerHeightSet();
	},1000);
});

$(window).scroll(function (){
	var scrollTop = $(window).scrollTop();

	if ( $('.slide_menu_area').length > 0 ){
		if (scrollTop > $('.slide_menu_area').offset().top){
			$('.slide_menu').addClass('is_fixed');
		}else{
			$('.slide_menu').removeClass('is_fixed');
		}
	}

	if ( $('.tab_menu_area').length > 0 ){
		if (scrollTop > $('.tab_menu_area').offset().top){
			$('.tab_menu').addClass('is_fixed');
		}else{
			$('.tab_menu').removeClass('is_fixed');
		}
	}



	if (scrollTop < 20){
		$('.btn_top').fadeOut();
	}else{
		$('.btn_top').fadeIn();
	}
});
