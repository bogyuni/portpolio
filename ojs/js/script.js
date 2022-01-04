$(function (){

	//jQuery.scrollSpeed(100, 800);
	//$('body').smoothWheel();

	var uagt = navigator.userAgent.toLowerCase();
	console.log(uagt);


	if (uagt.indexOf('iphone') != -1 || uagt.indexOf('ipad') != -1){
		$('body').addClass('ios');
	}
	if (uagt.indexOf('iphone') != -1){
		//$('.loading_layer').width($(window).width()).height($(window).height());
	}

	// main content seting
		function mainConHeight(){
			var winHeight = $(window).height();
			$('.main_content').height(winHeight);
		}
		mainConHeight();

	// intro
		function introAction(){
			$('.loading_layer').animate({left:'0'}, 400, 'easeOutExpo', function (){
				$('.loading_logo').animate({left:'50%'}, 600, 'easeOutExpo', function (){
					$('html,body').animate({scrollTop:'0'},0);
					$('.loading_logo').delay(200).animate({left:'-150px'}, 600, 'easeOutExpo', function (){});
					$('.wrapper').delay(600).animate({left:'0px'}, 800, 'easeOutExpo', function (){
						$('.wrapper').css('position','relative');
					});
					$('.loading_layer').delay(600).animate({left:'-100%'},800, 'easeOutExpo', function (){
						$('.loading_layer').css('left','100%');
						$('.loading_logo').css('left','130%');
						if (uagt.indexOf('iphone') != -1 || uagt.indexOf('ipad') != -1){
						}else{
							$('.content_box_bg').addClass('fixed');
						}
					});
				});
			});
		}
		introAction();

	// page status
	var pageStatus = 'main'; // 'sub'

	// item seting / grid seting
		var mainGnbCh = false;
		if ( $(window).width() < 1366 ){
			$('.main_content').addClass('off');
			mainGnbCh = true;
		}else{
			mainGnbCh = false;
			$('.main_content').removeClass('off on');
		}

		var itemLine = 5; // basic 5 row cell
		var itemHeight; // item height
		var itemVal = 0; // item cell value
		var itemCell = 0 // item cell all count
		var itemPosTop;
		var itemPosLeft;
		var cnt = 0; // item idx count
		for (var i=0; i < $('.prot_item').length ; i++){
			itemCell += $('.prot_item').eq(i).val();
		}

		function setItemlist(){
			itemVal = 0;
			cnt = 0;
			var winWidth = $(window).width();
			if (winWidth > 1920){
				itemLine = 5;
				itemHeight = parseInt( (1920 - 60) / itemLine );
				$('body').removeClass('mobile w640_low').addClass('desktop');
			}else if (winWidth > 1600){
				itemLine = 5;
				itemHeight = Math.ceil( (winWidth - 60) / itemLine );
				$('body').removeClass('mobile w640_low').addClass('desktop');
			}else if(winWidth > 738){
				itemLine = 4;
				itemHeight = Math.ceil( (winWidth - 60) / itemLine );
				$('body').removeClass('mobile w640_low').addClass('desktop');
			}else if(winWidth > 414){
				itemLine = 2;
				itemHeight = winWidth / 2;
				$('body').removeClass('mobile').addClass('w640_low desktop');
			}else if(winWidth <= 414){
				itemLine = 1;
				itemHeight = winWidth;
				$('body').removeClass('w640_low desktop').addClass('mobile');
			}

			if(winWidth <= 414){
				$('.item_s1').each(function (){
					$(this).find('.item_img').attr('src', $(this).find('.item_img').attr('src').replace('_1.jpg','_2.jpg'));
				});
			}else{
				$('.item_s1').each(function (){
					$(this).find('.item_img').attr('src', $(this).find('.item_img').attr('src').replace('_2.jpg','_1.jpg'));
				});
			}

			$('.desktop .prot_list').height( Math.ceil(itemCell / itemLine) * itemHeight);
			$('.desktop .prot_item').height(itemHeight);
			$('.desktop .item_s1').width(itemHeight);
			$('.desktop .item_s2').width(itemHeight*2);

			$('.mobile .prot_list').height('auto');
			$('.mobile .prot_item').height('auto');
			$('.mobile .item_s1').width('100%');
			$('.mobile .item_s2').width('100%');

			$('.prot_item').each(function (){
				itemPosTop = parseInt(itemVal / itemLine) * itemHeight;
				itemPosLeft = itemVal % itemLine * itemHeight;
				$('.prot_item').eq(cnt).css({left:itemPosLeft+'px',top:itemPosTop+'px'});
				if (winWidth > 414 && winWidth <= 738 && cnt == 9){
					$('.prot_item').eq(9).css({left:0+'px',top:(itemPosTop)+'px'});
					$('.prot_item').eq(8).css({left:0+'px',top:(itemPosTop+itemHeight)+'px'});
				}
				cnt++;
				itemVal += $(this).val();
			});
		}

		setItemlist();

	$(window).resize(function (){
		setItemlist();
		if (uagt.indexOf('android') != -1){
		}else{
			mainConHeight();
		}

		// mobile gnb
		mo_gnb_ch = false;
		$('.btn_mo_gnb').removeClass('on');
		$('.mo_gnb').css('top','-360px');

		if ( $(window).width() < 1366 ){
			$('.main_content').removeClass('on').addClass('off');
			mainGnbCh = true;
		}else{
			$('.main_content').removeClass('off');
			mainGnbCh = false;
		}

		if ( $(window).width() <= 738 ){
			$('.port_content').removeClass('on').data('click', 0);
		}
	});


	// scroll move direction
		var cur_scrollTop=0, now_scrollTop=0;
		var scroll_status = "down";
		var scroll_inter = setInterval(function(){
			cur_scrollTop = now_scrollTop;
		},100);
		function scroll_func(){
			now_scrollTop = $(window).scrollTop();
			if(cur_scrollTop>now_scrollTop) scroll_status="up";
			if(cur_scrollTop<now_scrollTop) scroll_status="down";
			return scroll_status;
		}


	$(window).scroll(function (){
		var scrollTop = $(window).scrollTop();
		if ( scrollTop > $(window).height() ){
			$('.gnb2').css('position','fixed');
		}else{
			$('.gnb2').css('position','absolute');
		}

		console.log($('.wrapper').height() - $(window).height()+' : '+scrollTop);

		if ( scroll_func() == 'up' && scrollTop > $(window).height()*0.5 && scrollTop <= $('.wrapper').height() - $(window).height() -100 ){
			$('.btn_top').stop().fadeIn(400);
		}else{
			$('.btn_top').stop().fadeOut(400);
		}

		if (uagt.indexOf('mobile') != -1 ){
		}else{
			if ( scrollTop < $(window).height() && scroll_func() == 'down' && pageStatus == 'main'){
				$('body,html').stop().animate({scrollTop:$(window).height()+'px'}, 150);
			}
		}

	});


	// GNB main content on/off
		$('.btn_gnb1').click(function (){
			if ( mainGnbCh == true ){
				$('.main_content').removeClass('off').addClass('on');
				mainGnbCh = false;
			}else{
				$('.main_content').removeClass('on').addClass('off');
				mainGnbCh = true;
			}
		});

	// GNB list/sub on/off
		var btn_gnb2_ch = false;
		$('.btn_gnb2').click(function (){
			if ( btn_gnb2_ch == false ){
				$('.port_content').addClass('on');
				btn_gnb2_ch = true;
			}else{
				$('.port_content').removeClass('on');
				btn_gnb2_ch = false;
			}
		});

	// GNB mobile on/off
		var mo_gnb_ch = false;
		$('.btn_mo_gnb').click(function (){
			if ( mo_gnb_ch == false ){
				$('.btn_mo_gnb').addClass('on');
				$('.mo_gnb').css('top','50px');
				mo_gnb_ch = true;
			}else{
				$('.btn_mo_gnb').removeClass('on');
				$('.mo_gnb').css('top','-360px');
				mo_gnb_ch = false;
			}
		});

	// list move
		$('.go_work').click(function (){
			if ( pageStatus == 'sub'){
				$('.loading_layer').animate({left:'0'}, 400, 'easeOutExpo', function (){
					$('.loading_logo').animate({left:'50%'}, 600, 'easeOutExpo', function (){
						if ( btn_gnb2_ch == true ){
							$('.port_content').removeClass('on');
							btn_gnb2_ch = false;
						}
						if ( mo_gnb_ch == true ){
							$('.btn_mo_gnb').removeClass('on');
							$('.mo_gnb').css('top','-360px');
							mo_gnb_ch = false;
						}
						$.ajax({
							 type:'POST'
							,url: 'list.html'
							,success:function(data){
								$('.portfolio').html(data);
								setItemlist();
							}
							,complete:function(){
								$('.main_content').show();
								if ( $('body').hasClass('desktop') ){
									$('html,body').animate({scrollTop:$(window).height()+'px'},0);
								}else{
									$('html,body').animate({scrollTop:$(window).height()-50+'px'},0);
								}
								$('.loading_logo').delay(200).animate({left:'-150px'}, 600, 'easeOutExpo');
								$('.wrapper').delay(600).animate({left:'0px'}, 800, 'easeOutExpo');
								$('.loading_layer').delay(600).animate({left:'-100%'},800, 'easeOutExpo', function (){
									$('.loading_layer').css('left','100%');
									$('.loading_logo').css('left','130%');
									if (uagt.indexOf('iphone') != -1 || uagt.indexOf('ipad') != -1){
									}else{
										$('.content_box_bg').addClass('fixed');
									}
								});
							}
							,error:function(){
								window.location.reload();
							}
							,timeout:100000
						});

						pageStatus = 'main';
					});
				});
			}else{
				if ( mo_gnb_ch == true ){
					$('.btn_mo_gnb').removeClass('on');
					$('.mo_gnb').css('top','-360px');
					mo_gnb_ch = false;
				}
				if ( $('body').hasClass('desktop') ){
					$('body,html').stop().animate({scrollTop: ($(window).height())+'px' },600, 'easeOutExpo');
				}else{
					$('body,html').stop().animate({scrollTop: ($(window).height()-50)+'px' },600, 'easeOutExpo');
				}
			}
		});

	// list move 2
		$('.portfolio').on('click', 'td.all', function (){
			$('.gnb2 .go_work').click();
		});

	// main move
		$('.go_home').click(function (){
			if ( pageStatus == 'main' ){
				$('body,html').animate({scrollTop: '0px' }, 800, 'easeOutExpo');
				if ( mo_gnb_ch == true ){
					$('.btn_mo_gnb').removeClass('on');
					$('.mo_gnb').css('top','-360px');
					mo_gnb_ch = false;
				}
			}else{
				$('.loading_layer').animate({left:'0'}, 400, 'easeOutExpo', function (){
					$('.loading_logo').animate({left:'50%'}, 600, 'easeOutExpo', function (){
						if ( btn_gnb2_ch == true ){
							$('.port_content').removeClass('on');
							btn_gnb2_ch = false;
						}
						if ( mo_gnb_ch == true ){
							$('.btn_mo_gnb').removeClass('on');
							$('.mo_gnb').css('top','-360px');
							mo_gnb_ch = false;
						}
						$('.main_content').show();
						$('html,body').animate({scrollTop:'0px'},0);
						$('.content_box_bg').removeClass('fixed');
						$.ajax({
							 type:'POST'
							,url: 'list.html'
							,success:function(data){
								$('.portfolio').html(data);
								setItemlist();
							}
							,complete:function(){
								$('.loading_logo').delay(200).animate({left:'-150px'}, 600, 'easeOutExpo');
								$('.wrapper').delay(600).animate({left:'0px'}, 800, 'easeOutExpo');
								$('.loading_layer').delay(600).animate({left:'-100%'},800, 'easeOutExpo', function (){
									$('.loading_layer').css('left','100%');
									$('.loading_logo').css('left','130%');
									if (uagt.indexOf('iphone') != -1 || uagt.indexOf('ipad') != -1){
									}else{
										$('.content_box_bg').addClass('fixed');
									}
								});
							}
							,error:function(){
								window.location.reload();
							}
							,timeout:100000
						});
						pageStatus = 'main';
					});
				});
			}
		});

	// main move 2
		$('.logo_link').click(function (){
			$('.gnb2 .go_home').click();
		});

	// list scroll move
		$('.btn_port, .go_port').click(function (){
			if ( $(window).width() <= 738 ){
				$('body,html').stop().animate({scrollTop: $(window).height()-50+'px' },600, 'easeOutExpo');
			}else{
				$('body,html').stop().animate({scrollTop: $(window).height()+'px' },600, 'easeOutExpo');
			}
		});

	// top scroll move
		$('.btn_top').click(function (){
			$('body,html').stop().animate({scrollTop: '0px' }, 800, 'easeOutExpo');
		});

	// item click
		$('.portfolio').on('click', '.item_link', function (){
			$('.wrapper').css('position','fixed');
			pageStatus = 'sub';
			var port_src = $(this).attr('href');
			$('.loading_layer').animate({left:'0px'}, 400, 'easeOutExpo', function (){
				$('.loading_logo').animate({left:'50%'}, 600, 'easeOutExpo', function (){
					if ( btn_gnb2_ch == true ){
						$('.port_content').removeClass('on');
						btn_gnb2_ch = false;
					}
					if ( mo_gnb_ch == true ){
						$('.btn_mo_gnb').removeClass('on');
						$('.mo_gnb').css('top','-360px');
						mo_gnb_ch = false;
					}
					$('html,body').animate({scrollTop:'0'},0);
					$('.main_content').hide();
					$('.wrapper').css('left','100%');
					$.ajax({
						 type:"POST"
						,url: port_src
						,success:function(data){
							$('.portfolio').html(data);
						}
						,complete:function(){
							$('.loading_logo').delay(200).animate({left:'-150px'}, 600, 'easeOutExpo');
							$('.wrapper').delay(600).animate({left:'0px'}, 800, 'easeOutExpo',function (){
								$('.wrapper').css('position','relative');
							});
							$('.loading_layer').delay(600).animate({left:'-100%'},800, 'easeOutExpo', function (){
								$('.loading_layer').css('left','100%');
								$('.loading_logo').css('left','130%');
							});
						}
						,error:function(){
							window.location.reload();
						}
						,timeout:100000
					});
				});

			});
			return false;
		});

	// about page on/off
		$('.go_about').click(function (){
			$('body').addClass('about_on');
			$('.about_back').show().animate({opacity:'1'}, 400,function (){
				$('.about_layer').show();
				$('.about_layer .vis_article').animate({top:0}, 600, 'easeOutExpo', function (){
					$('.about_layer .title_box').animate({top:'50%',opacity:'1'}, 500, 'easeOutExpo', function (){
						$('.wrapper').hide();
						$('.about_layer .info_box').addClass('on');
						$('.btn_close_about').fadeIn();
					});
				});
				$('.about_layer .about_article').animate({top:0}, 600, 'easeOutExpo');
			});
		});
		$('.btn_close_about').click(function (){
			$('.wrapper').show();
			$('.btn_close_about').hide();
			if($(window).width() <= 738){
				$('.about_layer .vis_article').animate({top:'-50%'}, 1000, 'easeOutExpo', function (){
					$('.about_layer').hide();
					$('.about_back').fadeOut(400);
					$('.about_layer .title_box').css({top:'100%',opacity:'0'});
					$('.about_layer .info_box').removeClass('on');
					$('body').removeClass('about_on');
					$('.about_layer .vis_article').css({top:'100%'});
				});
				$('.about_layer .about_article').animate({top:'80%'}, 1000, 'easeOutExpo', function (){
					$('.about_layer .about_article').css({top:'-100%'});
				});
			}else{
				$('.about_layer .vis_article').animate({top:'100%'}, 600, 'easeOutExpo', function (){
					$('.about_layer').hide();
					$('.about_back').fadeOut(400);
					$('.about_layer .title_box').css({top:'100%',opacity:'0'});
					$('.about_layer .info_box').removeClass('on');
					$('body').removeClass('about_on');
				});
				$('.about_layer .about_article').animate({top:'-100%'}, 600, 'easeOutExpo');
			}
		});

	// sns button click
		$('.sns_list a').click(function (){
			alert('준비중입니다.');
			return false;
		});

	// sub bottom menu move
		$('.portfolio').on('click', '.btn_link_prot', function (){
			var port_src = $(this).attr('href');
			$('.loading_layer').animate({left:'0px'}, 400, 'easeOutExpo', function (){
				$('.loading_logo').animate({left:'50%'}, 600, 'easeOutExpo', function (){
					if ( btn_gnb2_ch == true ){
						$('.port_content').removeClass('on');
						btn_gnb2_ch = false;
					}
					if ( mo_gnb_ch == true ){
						$('.btn_mo_gnb').removeClass('on');
						$('.mo_gnb').css('top','-360px');
						mo_gnb_ch = false;
					}
					$('html,body').animate({scrollTop:'0'},0);
					$('.wrapper').css('left','100%');
					$.ajax({
						 type:"POST"
						,url: port_src
						,success:function(data){
							$('.portfolio').html(data);
						}
						,complete:function(){
							$('.loading_logo').delay(200).animate({left:'-150px'}, 600, 'easeOutExpo');
							$('.wrapper').delay(600).animate({left:'0px'}, 800, 'easeOutExpo');
							$('.loading_layer').delay(600).animate({left:'-100%'},800, 'easeOutExpo', function (){
								$('.loading_layer').css('left','100%');
								$('.loading_logo').css('left','130%');
							});
						}
						,error:function(){
							window.location.reload();
						}
						,timeout:100000
					});
				});
			});
			return false;
		});


	// contant link
		$('.btn_contant').click(function (){
			var pwContant = prompt('비밀번호를 입력하세요');
			if (pwContant == 'wnstjd0438'){
				location.href = 'contant.php';
			}
		});

	// contant submit
		$('.btn_submit').click(function (){
			var re_mail = /^([\w\.-]+)@([a-z\d\.-]+)\.([a-z\.]{2,6})$/; // 이메일 검사식
			if ( form.inst_name.value == '' ){
				alert('이름을 적어주세요');
				form.inst_name.focus();
				return false;
			}else if ( form.inst_email.value == '' ){
				alert('이메일을 적어주세요');
				form.inst_email.focus();
				return false;
			}else if (re_mail.test(form.inst_email.value) != true ) {
				alert('이메일 형식이 잘 못 되었습니다');
				form.inst_email.focus();
				return false;
			}else if ( form.inst_message.value == '' ){
				alert('메시지를 적어주세요.');
				form.inst_message.focus();
				return false;
			}else{
				alert('메시지가 전달 되었습니다.');
				form.submit();
			}
		});

});

