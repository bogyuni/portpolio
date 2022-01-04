
document.createElement('header');
document.createElement('nav');
document.createElement('article');
document.createElement('section');
document.createElement('aside');
document.createElement('footer');

var userAgt=navigator.userAgent;
var topbanner_H;
var scrollTop;
var cartProd_num;
var cartProd_W = 142;

function setPlanlist(){
	if ( $(window).width() > 1624 ){ 
		var plans_list_wrap_H;
		if ( scrollTop < topbanner_H){
			plans_list_wrap_H = $(window).height() - (
				topbanner_H // top banner
				+ 36 // util menu
				+ 150 // logo
				+ 64 // search box
				+42 // all menu
				+ $('.menu_category').height()
			);
			$('.plans_list_wrap').height(plans_list_wrap_H + scrollTop);
		}else{
			plans_list_wrap_H = $(window).height() - (
				36 // util menu
				+ 150 // logo
				+ 64 // search box
				+42 // all menu
				+ $('.menu_category').height()
			);
			$('.plans_list_wrap').height(plans_list_wrap_H);
		}

		$('.plans_list_wrap').mCustomScrollbar({
			theme : "planList"
			,autoHideScrollbar : true
		});
	}else{
		$('.plans_list_wrap').mCustomScrollbar('destroy');
		$('.plans_list_wrap').css('height','auto');
	}
}

function setGnb(){
	scrollTop = $(window).scrollTop();

	if ( scrollTop > topbanner_H ){
		$('.in_head').addClass('scSetW1 scSetS1');
		$('.utile_area').addClass('scSetS1');
	}else{
		$('.in_head').removeClass('scSetW1 scSetS1');
		$('.utile_area').removeClass('scSetS1');
	}
	if ( scrollTop > topbanner_H + 75){ // 75 is gnb height
		$('.in_head').addClass('scSetS2');
		$('.main_logo').addClass('scSetS1');
		$('.menu_all').addClass('scSetS1');
	}else{
		$('.in_head').removeClass('scSetS2');
		$('.main_logo').removeClass('scSetS1');
		$('.menu_all').removeClass('scSetS1');
	}
}

function cartBgSet(){
	cartProd_num = $('.cart_prod').length;
	if ( $(window).width() > 1624 ){ 
		if (cartProd_num > 5){
			$('.cart_product').addClass('over');
		}else{
			$('.cart_product').removeClass('over');
		}
	}else{
		if (cartProd_num > 3){
			$('.cart_product').addClass('over');
		}else{
			$('.cart_product').removeClass('over');
		}
	}
}

function prodInstCart(){
	var tag = '';
		tag+='<li class="cart_prod">';
		tag+='<div class="prod_box">';
		tag+='<div class="img_con">';
		tag+='<a href=""><img src="images/temp/@prod_f2.jpg" alt="" class="mCS_img_loaded"></a>';
		tag+='</div>';
		tag+='<div class="bot_con">';
		tag+='<div class="cnt_box">';
		tag+='<span>수량</span>';
		tag+='<input type="text" class="prod_cnt" readonly="">';
		tag+='</div>';
		tag+='<div class="btn_box">';
		tag+='<div class="btn_prod_box btn_top_box"><button class="btn_prod btn_prod_p" type="button">추가</button></div>';
		tag+='<div class="btn_prod_box btn_bot_box"><button class="btn_prod btn_prod_m" type="button">감소</button></div>';
		tag+='</div>';
		tag+='</div>';
		tag+='</div>';
		tag+='<div class="prod_cost_box">';
		tag+='<span class="prod_cost">89,000</span><span class="yg76">원</span>';
		tag+='</div>';
		tag+='</li>';
		$('.cart_prod_list').append(tag);
		cartProd_num = $('.cart_prod').length;
		$('.cart_prod_list').width(cartProd_num*cartProd_W);
}


// common
$(function() {

	cartProd_num = $('.cart_prod').length;

	$('.btn_cart_p').click(function (){
		prodInstCart();
		cartBgSet()
	});

	cartBgSet();

	//$.srSmoothscroll({step: 100,speed: 600});

	$(window).load(function (){
		// Gnb seting
		topbanner_H = $('.topbanner').outerHeight();
		setGnb();
		setPlanlist();

	}); // window load


	$(window).scroll(function (){
		scrollTop = $(window).scrollTop();
		setGnb();
		setPlanlist();
	}); // window scroll



	$(window).resize(function (){
		setPlanlist();
		cartBgSet();
	}); // window resize


	// search box open
		$('.open_search').click(function (){
			if ( !$(this).data('click') ){
				$('.search_box').animate({right:'-300px'},400,'easeOutExpo');
				$(this).data('click',1).text('닫기').addClass('on');
			}else{
				$('.search_box').animate({right:'0'},400,'easeOutExpo');
				$(this).data('click',0).text('검색').removeClass('on');
			}
		});

	// cart item list set
		$('.cart_prod_list').width(cartProd_num*cartProd_W);
		$('.cart_product').mCustomScrollbar({
			axis:"x",
			theme:"cart",
			advanced:{ autoExpandHorizontalScroll:true },
			scrollButtons:{
				enable:true,
				scrollType:"stepped"
			},
			keyboard:{scrollType:"stepped"},
			snapAmount:cartProd_W,
			mouseWheel:{scrollAmount:cartProd_W}
		});

	// cart open
		$('.open_cart').click(function (){
			if ( !$(this).data('ch') ){
				$(this).data('ch',1).addClass('on');
				$('.cart_area').animate({bottom:'0'},200);
			}else{
				$(this).data('ch',0).removeClass('on');
				$('.cart_area').animate({bottom:'-254px'},200);
			}
		});

	// top btn
		$('.btn_top').click(function (){
			$('html,body').animate({scrollTop:'0'},400);
		});


	// play moview
		/*$('.container').on('click','.btn_movie_open',function (){
			var movieUrl = $(this).val();
			var fornt_box = $(this).parent();
			fornt_box.siblings('.btn_close_movie').show();
			fornt_box.fadeOut();
			fornt_box.siblings('iframe').attr('src',movieUrl);
		});

		$('.container').on('click','.btn_close_movie',function (){
			$(this).siblings('iframe').attr('src','');
			$(this).siblings('.front_box').fadeIn();
			$(this).hide();
		});*/
		$('.container').on('click','.btn_movie_open',function (){
			var movieUrl = $(this).val();
			$('.background_layer').fadeIn();
			$('.movie_popup').show();
			$('.movie_popup .movie_box iframe').attr('src',movieUrl)
			$('.movie_popup').find('.prod_item').eq(0).show();
		});
		$('.movie_popup').on('click','.btn_close_movie',function (){
			$('.background_layer').fadeOut();
			$('.movie_popup').hide();
			$('.movie_popup .movie_box iframe').attr('src','')
		});
		$('.background_layer').click(function (){
			$('.background_layer').fadeOut();
			$('.movie_popup').hide();
			$('.movie_popup .movie_box iframe').attr('src','')
		});



	// prod item type1 hover event
		$('.item_type1').hover(function (){
			$(this).find('.back').stop().animate({left:'-185'},2000);
		},function (){
			$(this).find('.back').stop().css({left:'0'});
		});

	// all product shopping
	$('.btn_allshopping').click(function (){
		if ( !$(this).data('click')){
			$(this).data('click',1).addClass('open');
			$('.curtain_layer').animate({top:0},1000,'easeOutExpo',function (){
				$('.allshopping_area').css({position:'static'});
				$('.content_area').hide();
				$('.curtain_layer').animate({top:'100%'},'easeOutExpo',function (){
					$('.curtain_layer').css('top','-100%');
				});
			});
		}else{
			$(this).data('click',0).removeClass('open');
			$('.curtain_layer').animate({top:0},1000,'easeOutExpo',function (){
				$('.content_area').show();
				$('.allshopping_area').css({position:'fixed'});
				$('.curtain_layer').animate({top:'100%'},'easeOutExpo',function (){
					$('.curtain_layer').css('top','-100%');
				});
			});
		}
	});

	$('.allprod_section .prod_list').isotope({
		itemSelector: 'li',
		columnWidth: 246
	});


	// input click check
		$('.ch_label').click(function (){
			var $label = $(this);
			if ( $label.find("input").is(":checked")){
				$label.addClass('on');
			}else{
				$label.removeClass('on');
			}
		});

		$('.rd_label').click(function (){
			$(this).siblings('label').removeClass('on');
			$(this).addClass('on');
		});



});

