var userAgent = navigator.userAgent;
var ie = userAgent.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i);
if(ie) ie = parseInt( ie[1] || ie[2] );
var chrome_not =! (/chrome/i).test(userAgent);
var userinfo = {
	os: (navigator.appVersion).match(/(mac)/i) ? 'mac' : (navigator.appVersion).match(/(win)/i) ? 'win' : (navigator.appVersion).match(/(linux)/i) ? 'linux' : 'other_os' ,
	browser: (/chrome/i).test(userAgent) ? 'chrome' : (/firefox/i).test(userAgent) ? 'firefox' : (/safari/i).test(userAgent) && chrome_not ? 'safari' : ie ? 'ie ie'+ie : 'other_browser',
	device: (/android/i).test(userAgent) || (/ip(ad|hone|od)/i).test(userAgent) ? 'mobile' : 'desktop',
	system: (/android/i).test(userAgent) ? 'android' : (/ip(ad|hone|od)/i).test(userAgent) ? 'ios' : 'other_system'
};
// console.log(userinfo.os, userinfo.browser, userinfo.device, userinfo.system);


var deviceStatus = userinfo.device;

function globalLayout(){
	var realWidth;
	if (userinfo.device == 'desktop'){
		realWidth = window.innerWidth;
	} else {
		realWidth = window.outerWidth;
	}

	var bodyDom = document.getElementsByTagName('body')[0];

	if (realWidth < 1024) {
		bodyDom.classList.add('mobile');
		bodyDom.classList.remove('desktop');
		deviceStatus = 'mobile';
	} else if(realWidth == 1024 && userinfo.device == 'mobile') {
		bodyDom.classList.add('mobile');
		bodyDom.classList.remove('desktop');
		deviceStatus = 'mobile';
	}else{
		bodyDom.classList.add('desktop');
		bodyDom.classList.remove('mobile');
		deviceStatus = 'desktop';
	}
}


var pcSeq = [];
var moSeq = [];

function desktopSeqStart(){
	desktopSeqStop();
	$('.sc_obj').each(function(idx){
		var obj = $(this);
		var w = obj.data('width');
		var h = obj.data('height');
		var c = obj.data('cut');
		var f = obj.data('frame');
		var cnt = 0;
		// obj.width(w).height(h);
		pcSeq[idx] = setInterval(function(){
			obj.data('cnt', cnt);
			obj.find('.sc_img').removeClass('on');
			obj.find('.sc_img').eq(cnt).addClass('on');
			cnt++;
			if(cnt >= c) cnt = 0;
		}, 1000 / f);
	});
}

function desktopSeqStop(){
	for (var i = 0; i < pcSeq.length; i++) {
		clearInterval(pcSeq[i]);
	}
}

function mobileSeqStop(){
	for (var i = 0; i < moSeq.length; i++) {
		clearInterval(moSeq[i]);
	}
}

function mobileSeqStart(){
	mobileSeqStop();
	$('.mobile_con .sc_obj').each(function(idx){
		var obj = $(this);
		var c = obj.data('cut');
		var f = obj.data('frame');
		var cnt = 0;
		moSeq[idx] = setInterval(function(){
			obj.data('cnt', cnt);
			obj.find('.sc_img').removeClass('on');
			obj.find('.sc_img').eq(cnt).addClass('on');
			cnt++;
			if(cnt >= c) cnt = 0;
		}, 1000 / f);
	});
}

window.onload = function(){

	globalLayout();

	if(deviceStatus == 'desktop'){
		desktopSeqStart();
	}else if(deviceStatus == 'mobile'){
		mobileSeqStart();
	}

	// $('.desktop_con .sc_obj').on('mouseover', function(){
	// 	var val = $(this).data('num');
	// 	clearInterval(pcSeq[val]);
	// });

	// $('.desktop_con .sc_obj').on('mouseout', function(){
	// 	var val = $(this).data('num');
	// 	var obj = $(this);
	// 	var h = obj.data('height');
	// 	var c = obj.data('cut');
	// 	var f = obj.data('frame');
	// 	var cnt = obj.data('cnt');

	// 	pcSeq[val] = setInterval(function(){
	// 		obj.data('cnt', cnt);
	// 		// obj.find('.sc_img').css('top', '-' + cnt * h + 'px');
	// 		obj.css('background-position', 'left -' + cnt * h + 'px');
	// 		cnt++;
	// 		if(cnt >= c) cnt = 0;
	// 	}, 1000 / f);
	// });

	var currentGroup = 1;
	var currentSlide = 1;
	var popupSlideLen = [];
	for (var i = 0; i < $('.slide_wrap').length; i++) {
		popupSlideLen[i] = $('.slide_wrap'+(i+1)).find('.slide_con').length;
	}

	function arrowBtnStatus(){
		if(currentSlide <= 1){
			$('.btn_prev').hide();
		}else{
			$('.btn_prev').show();
		}

		if(currentSlide >= popupSlideLen[currentGroup-1]){
			$('.btn_next').hide();
		}else{
			$('.btn_next').show();
		}
	}

	$('.desktop_con .btn_popup').on('click', function(){
		$('.back_header').removeClass('on');
		$('.gnb').hide();

		currentGroup = $(this).data('group');
		currentSlide = $(this).data('slide');
		$('.background_layer').addClass('on');
		$('.popup_wrap').addClass('on');
		$('.pc_popup').addClass('on');

		$('.slide_wrap, .slide_con').removeClass('on');
		$('.slide_wrap'+currentGroup).addClass('on');
		$('.slide_con'+currentSlide).addClass('on');

		$('.page_list').find('button').removeClass('on');
		console.log(currentGroup, currentSlide);
		$('.slide_wrap'+currentGroup).find('.page_list li').eq(currentSlide-1).find('button').addClass('on');
		// arrowBtnStatus();
		$('html,body').animate({scrollTop: $('.map').offset().top - 114 + 'px'}, 600);

		if(currentGroup == 4){
			if(currentSlide == 6){
				var pop4_6_wrap = new Swiper('.pop4_6_wrap', {
					slidesPerView: 'auto',
					scrollbar: {
						el: '.pop4_6_wrap .swiper-scrollbar',
						hide: false,
					},
				});
			}
			if(currentSlide == 7){
				var pop4_7_wrap = new Swiper('.pop4_7_wrap', {
					slidesPerView: 'auto',
					scrollbar: {
						el: '.pop4_7_wrap .swiper-scrollbar',
						hide: false,
					},
				});
			}
		}


	});

	$('.mobile_con .btn_popup').on('click', function(){
		currentGroup = $(this).data('group');
		currentSlide = $(this).data('slide');
		$('.background_layer').addClass('on');
		$('.popup_wrap').addClass('on');
		$('.mo_popup').addClass('on');
		// $('.slide_wrap, .slide_con').removeClass('on');
		// $('.slide_wrap'+currentGroup).addClass('on');
		// $('.slide_con'+currentSlide).addClass('on');

		// $('.page_list').find('button').removeClass('on');
		// $('.slide_wrap'+currentGroup).find('li').eq(currentSlide-1).find('button').addClass('on');
		// arrowBtnStatus();
		// window.scroll({
		// 	top: $('.map').offset().top,
		// 	behavior: 'smooth'
		// });

		var popup_slide3 = new Swiper('.popup_slide', {
			loop: false,
		});
	});

	$('.btn_close').on('click', function(){
		$('.background_layer').removeClass('on');
		$('.popup_wrap').removeClass('on');
		$('.mo_popup').removeClass('on');
		$('.pc_popup').removeClass('on');
	});

	$('.btn_prev').on('click', function(){
		currentSlide--;
		if(currentSlide < 1){
			currentSlide = $(this).val();
		}
		console.log(currentSlide);
		// arrowBtnStatus();
		$('.slide_wrap'+currentGroup).find('.slide_con').removeClass('on');
		$('.slide_wrap'+currentGroup).find('.slide_con'+currentSlide).addClass('on');
		$('.page_list').find('button').removeClass('on');
		$('.slide_wrap'+currentGroup).find('.page_list li').eq(currentSlide-1).find('button').addClass('on');


		if(currentGroup == 4){
			if(currentSlide == 6){
				var pop4_6_wrap = new Swiper('.pop4_6_wrap', {
					slidesPerView: 'auto',
					scrollbar: {
						el: '.pop4_6_wrap .swiper-scrollbar',
						hide: false,
					},
				});
			}
			if(currentSlide == 7){
				var pop4_7_wrap = new Swiper('.pop4_7_wrap', {
					slidesPerView: 'auto',
					scrollbar: {
						el: '.pop4_7_wrap .swiper-scrollbar',
						hide: false,
					},
				});
			}
		}

	});

	$('.btn_next').on('click', function(){
		currentSlide++;
		if(currentSlide > $(this).val()){
			currentSlide = 1;
		}
		// arrowBtnStatus();
		$('.slide_wrap'+currentGroup).find('.slide_con').removeClass('on');
		$('.slide_wrap'+currentGroup).find('.slide_con'+currentSlide).addClass('on');
		$('.page_list').find('button').removeClass('on');
		$('.slide_wrap'+currentGroup).find('.page_list li').eq(currentSlide-1).find('button').addClass('on');


		if(currentGroup == 4){
			if(currentSlide == 6){
				var pop4_6_wrap = new Swiper('.pop4_6_wrap', {
					slidesPerView: 'auto',
					scrollbar: {
						el: '.pop4_6_wrap .swiper-scrollbar',
						hide: false,
					},
				});
			}
			if(currentSlide == 7){
				var pop4_7_wrap = new Swiper('.pop4_7_wrap', {
					slidesPerView: 'auto',
					scrollbar: {
						el: '.pop4_7_wrap .swiper-scrollbar',
						hide: false,
					},
				});
			}
		}

	});



	$('.btn_menu').on('click', function(){
		$('.back_header').addClass('on');
		$('.gnb').show();
		var gnbPC = new Swiper('.gnb .menu_wrap', {
			slidesPerView: 6,
			slidesPerGroup: 4,
			scrollbar: {
				el: '.gnb .swiper-scrollbar',
				hide: false,
			},
			navigation: {
				nextEl: '.gnb .swiper-button-next',
				prevEl: '.gnb .swiper-button-prev',
			},
		});
	});

	$('.btn_menu_close').on('click', function(){
		$('.back_header').removeClass('on');
		$('.gnb').hide();
	});

	$('.btn_movie_close').on('click', function(){
		$('.back_movie').removeClass('on');
		$('.popup_moview').hide();
		$('.popup_moview').find('iframe').removeAttr('src');
	});

	var moviewSelector = '.slide_wrap2 .slide_con1 img, .slide_wrap2 .slide_con2 img, .slide_wrap3 .slide_con2 img'


	$(moviewSelector).on('click', function(){
		$('.back_movie').addClass('on');
		$('.popup_moview').show();
		$('.popup_moview').find('iframe').attr('src', 'https://www.youtube.com/embed/HXxmk_cUxg4');
	});


}

function resizeDesktop(){
	var scaleSet = window.innerWidth / 1920;
	var heightSet = 2778 * scaleSet;
	var wrap = $('.wrap');

	console.log(heightSet);

	if(window.innerWidth < 1920){
		wrap.css({
			transform : 'scale('+ scaleSet +')',
			// height : heightSet + 'px'
		});
	}else{
		wrap.css({
			transform : 'scale(1)',
			height : '2778px'
		});
	}
}



window.onresize = function(){
	globalLayout();
	// if(window.innerWidth < 1024 && src != img.dataset.mo){
	// 	src = img.dataset.mo;
	// 	img.src = src;
	// }else if(window.innerWidth >= 1024 && src != img.dataset.pc){
	// 	src = img.dataset.pc;
	// 	img.src = src;
	// }
	// if(deviceStatus == 'desktop'){
	// 	desktopSeqStart();
	// }else if(deviceStatus == 'mobile'){
	// 	mobileSeqStart();
	// }

	// resizeDesktop();

};



window.addEventListener('DOMContentLoaded', function(){
	// var video = document.getElementById('introMovie');
	// video.onloadeddata = function(){
	// 	if(deviceStatus == "desktop"){

	// 		desktopSeqStop();

	// 		setTimeout(function(){
	// 			$('.intro').addClass('off');
	// 		} , 4000);
	

	// 		video.onended = function() {
	// 			setTimeout(function(){
	// 				$('.intro').hide();
	// 			} , 1000);
	
	// 			if(deviceStatus == 'desktop'){
	// 				desktopSeqStart();
	// 			}else if(deviceStatus == 'mobile'){
	// 				mobileSeqStart();
	// 			}
	// 		};
	// 	}
	// };

	// resizeDesktop();


});
