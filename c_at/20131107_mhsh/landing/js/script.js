
function maxLengthCheck(obj){
	if (obj.value.length > obj.maxLength)
	obj.value = obj.value.slice(0, obj.maxLength)
}

function insertNumber(Ev) {
	var evCode = (window.netscape) ? Ev.which : event.keyCode;
	if ((evCode < 48 || evCode > 57) && (evCode < 96 || evCode > 105) && evCode != 8 && evCode != 9 && evCode != 13 && (evCode < 37 || evCode > 40)) {
		if (window.netscape) {
			Ev.preventDefault();
		}else{
			event.returnValue = false;
		}
	}
}

function setCookie( name, value, expiredays ){
	var todayDate = new Date(); 
	todayDate.setDate( todayDate.getDate() + expiredays ); 
	document.cookie = name + "_kor=" + escape( value ) + "; path=/; expires=" +    todayDate.toGMTString() + ";" 
}

function getCookie( name ){
	var nameOfCookie = name + "_kor=";
	var x = 0;
	while ( x <= document.cookie.length ){
		var y = (x+nameOfCookie.length);
		if ( document.cookie.substring( x, y ) == nameOfCookie ) {
			if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
				endOfCookie = document.cookie.length;
			return unescape( document.cookie.substring( y, endOfCookie ) );
		}
		x = document.cookie.indexOf( " ", x ) + 1;
		if ( x == 0 ) break;
	}
	return "";
}


// jQuery area 
$(function(){

var mainCount = 1;
var clickButton = true;
var userDevice = navigator.userAgent.toLowerCase();
var isMobile = (userDevice.match('android') || userDevice.match('iphone')) ? true : false;
var windowWidth = document.body.clientWidth;
var windowHeight = document.body.clientHeight;
var frontPageCh = true;

if (windowWidth < 1024) {
	$('.main_container').height(windowHeight);
}

if (userDevice.match('iphone')){
	$('.timeout_wrap .timeout_article .timeout_text').css({lineHeight:'48px'});
}

$(window).resize(function(){
	if (frontPageCh) location.reload();
});

function setSectionAction(type,state){
	var section = $('.section'+type);
	switch (type){
	case 1:
		if (state == 1){
			if (windowWidth > 1024) {
				section.find('.content3').animate({left:'690px'},300,function(){
					section.find('.content4').addClass('on');
					section.find('.content5').addClass('on');
				});
				section.find('.content1').delay(1000).animate({bottom:'20px'},400).animate({bottom:'0px'},200,function(){
					section.find('.content1_2 img').animate({marginLeft:'-23px'},400);
					section.find('.content1_3 img').animate({marginTop:'0px'},400);
					section.find('.content1_4 img').animate({marginLeft:'0px'},400);
					section.find('.content1_5 img').animate({marginTop:'0'},300,function(){
						section.find('.content1_6 img').animate({marginTop:'0'},300,function(){
							section.find('.content1_7 img').animate({marginTop:'0'},300);
						});
					});
				});
				section.find('.content6').animate({bottom:'0px'},400);
				section.find('.content7').delay('1000').animate({bottom:'40px'},400).animate({bottom:'20px'},400);
			}else{
				section.find('.content3').animate({left:'198px'},300,function(){
					section.find('.content4').addClass('on');
					section.find('.content5').addClass('on');
				});
				section.find('.content1').delay(1000).animate({bottom:'20px'},400).animate({bottom:'0px'},200,function(){
					section.find('.content1_2 img').animate({marginLeft:'-10px'},400);
					section.find('.content1_3 img').animate({marginTop:'0px'},400);
					section.find('.content1_4 img').animate({marginLeft:'0px'},400);
					section.find('.content1_5 img').animate({marginTop:'0'},300,function(){
						section.find('.content1_6 img').animate({marginTop:'0'},300,function(){
							section.find('.content1_7 img').animate({marginTop:'0'},300);
						});
					});
				});
				section.find('.content6').animate({bottom:'0px'},400);
				section.find('.content7').delay('1000').animate({bottom:'80px'},400).animate({bottom:'60px'},400);
			}
		}else{
			section.find('.content3').css({left:'1240px'});
			section.find('.content4').removeClass('on');
			section.find('.content5').removeClass('on');
			section.find('.content1').css({bottom:'-468px'});
			section.find('.content1_2 img').css({marginLeft:'-103px'});
			section.find('.content1_3 img').css({marginTop:'61px'});
			section.find('.content1_4 img').css({marginLeft:'78px'});
			section.find('.content1_5 img').css({marginTop:'32px'});
			section.find('.content1_6 img').css({marginTop:'32px'});
			section.find('.content1_7 img').css({marginTop:'32px'});
			section.find('.content6').css({bottom:'-97px'});
			section.find('.content7').css({bottom:'-104px'});
		}
		break;
	case 2:
		if (state == 1){
			if (windowWidth > 1024) {
				section.find('.content1').addClass('on');
				section.find('.content2').delay(1500).animate({left:'235px'},500);
				section.find('.content3').delay(750).animate({left:'800px'},200).animate({left:'719px'},400);
				section.find('.content4').delay(950).animate({left:'800px'},200).animate({left:'719px'},400);
				section.find('.content5').delay(1150).animate({left:'800px'},200).animate({left:'719px'},400);
			}else{
				section.find('.content1').addClass('on');
				section.find('.content2').delay(1500).animate({left:'96px'},500);
				section.find('.content3').delay(750).animate({left:'180px'},200).animate({left:'140px'},400);
				if (!isMobile){
					section.find('.content4').delay(950).animate({left:'110px'},200).animate({left:'70px'},400);
				}else{
					section.find('.content4').delay(950).animate({left:'110px'},200).animate({left:'80px'},400);
				}
				section.find('.content5').delay(1150).animate({left:'210px'},200).animate({left:'164px'},400);
			}
		}else{
			if (windowWidth > 1024) {
				section.find('.content1').removeClass('on');
				section.find('.content2').css({left:'135px'});
				section.find('.content3').css({left:'330px'});
				section.find('.content4').css({left:'330px'});
				section.find('.content5').css({left:'330px'});
			}else{
				section.find('.content1').removeClass('on');
				section.find('.content2').css({left:'40px'});
				section.find('.content3').css({left:'-1000px'});
				section.find('.content4').css({left:'-1000px'});
				section.find('.content5').css({left:'-1000px'});
			}
		}
		break;
	case 3:
		if (state == 1){
			if (windowWidth > 1024) {
				section.find('.content1>img').animate({width:'150%',left:'-25%',top:'-100px'},200)
					.animate({width:'100%',left:'0%',top:'0px'},400);
				section.find('.content2').delay(1600).animate({left:'-100px'},400);
				section.find('.content3').delay(1600).animate({left:'265px'},200,function(){
					section.find('.content3').addClass('on');
				});
				section.find('.content4').delay(600).animate({width:'270px',height:'126px'},200).animate({width:'90px',height:'42px'},400);
				section.find('.content5 p').delay(1200).animate({top:'0'},200);
				section.find('.content6 p').delay(1600).animate({top:'0'},200);
			}else{
				section.find('.content1>img').animate({width:'150%',left:'-25%',top:'-60px'},200)
					.animate({width:'100%',left:'0%',top:'0px'},400);
				section.find('.content2').delay(1600).animate({left:'-44px'},400);
				section.find('.content3').delay(1600).animate({left:'110px'},200,function(){
					section.find('.content3').addClass('on');
				});
				section.find('.content4').delay(600).animate({width:'120px',height:'60px',left:'110px'},200).animate({width:'43px',height:'20px',left:'136px'},400);
				section.find('.content5 p').delay(1200).animate({top:'0'},200);
				section.find('.content6 p').delay(1200).animate({top:'0'},200);
				if (isMobile){
					section.find('.content5').css({left:'40px'});
					section.find('.content6').css({left:'200px'});
				}
			}
		}else{
			if (windowWidth > 1024) {
				section.find('.content1>img').css({width:'100%',left:'0%',top:'0px'});
				section.find('.content2').css({left:'0px'});
				section.find('.content3').css({left:'165px'});
				section.find('.content3').removeClass('on');
				section.find('.content4').css({width:'0px',height:'0px'});
				section.find('.content5 p').css({top:'37px'});
				section.find('.content6 p').css({top:'37px'});
			}else{
				section.find('.content1>img').css({width:'100%',left:'0%',top:'0px'});
				section.find('.content2').css({left:'0px'});
				section.find('.content3').css({left:'60px'});
				section.find('.content3').removeClass('on');
				section.find('.content4').css({width:'0px',height:'0px'});
				section.find('.content5 p').css({top:'20px'});
				section.find('.content6 p').css({top:'20px'});
			}
		}
		break;
	case 4:
		if (state == 1){
			if (windowWidth > 1024) {
				section.find('.content5').animate({bottom:'322px'},200,function(){section.find('.content5').addClass('on')});
				section.find('.content6').delay(200).animate({bottom:'273px'},200,function(){section.find('.content6').addClass('on')});
				section.find('.content7').delay(400).animate({bottom:'229px'},200,function(){
					section.find('.content7').addClass('on');
					section.find('.content3').delay(400).animate({left:'265px',top:'430px'},200).animate({top:'260px'},200).animate({top:'293px'},200);
					section.find('.content4').delay(800).animate({left:'265px',top:'430px'},200).animate({top:'360px'},200).animate({top:'382px'},200);
					section.find('.content2').delay(1000).animate({left:'-102px'},400);
				});
			}else{
				section.find('.content5').animate({bottom:'-24px'},200,function(){section.find('.content5').addClass('on')});
				section.find('.content6').delay(200).animate({bottom:'-48px'},200,function(){section.find('.content6').addClass('on')});
				if (isMobile){
					section.find('.content6').css({left:'20px'});
				}
				section.find('.content6').delay(200).animate({bottom:'-48px'},200,function(){section.find('.content6').addClass('on')});
				section.find('.content7').delay(200).animate({bottom:'-48px'},200,function(){
					section.find('.content7').addClass('on');
					section.find('.content3').delay(400).animate({left:'110px',top:'170px'},200).animate({top:'100px'},200).animate({top:'112px'},200);
					section.find('.content4').delay(800).animate({left:'110px',top:'180px'},200).animate({top:'168px'},200).animate({top:'154px'},200);
					section.find('.content2').delay(1000).animate({left:'-42px'},400);
				});
			}
		}else{
			if (windowWidth > 1024) {
				section.find('.content5').css({bottom:'1000px'}).removeClass('on');
				section.find('.content6').css({bottom:'1000px'}).removeClass('on');
				section.find('.content7').css({bottom:'1000px'}).removeClass('on');
				section.find('.content3').css({left:'176px',top:'90px'});
				section.find('.content4').css({left:'176px',top:'130px'});
				section.find('.content2').css({left:'10px'});
			}else{
				section.find('.content5').css({bottom:'1000px'}).removeClass('on');
				section.find('.content6').css({bottom:'1000px'}).removeClass('on');
				section.find('.content7').css({bottom:'1000px'}).removeClass('on');
				section.find('.content3').css({left:'60px',top:'10px'});
				section.find('.content4').css({left:'60px',top:'10px'});
				section.find('.content2').css({left:'0px'});
			}
		}
		break;
	case 5:
		if (state == 1){
			if (windowWidth > 1024) {
				section.find('.content4 img').animate({height:'140px',marginTop:'-35px'},400).animate({height:'43px',marginTop:'0'},400,function(){
					section.find('.content5').show();
					section.find('.content5 img').animate({width:'400px',marginTop:'-80px',opacity:'0'},500,function(){
						section.find('.content6').animate({left:'200px',width:'286px'},200).animate({left:'240px'},200);
						section.find('.content7').delay(400).animate({left:'200px',width:'375px'},200).animate({left:'240px'},200);
						section.find('.content2').delay(500).animate({left:'254px'},600);
					});
				});
			}else{
				section.find('.content4 img').animate({height:'80px',marginTop:'-30px'},400).animate({height:'22px',marginTop:'0'},400,function(){
					section.find('.content5').show();
					section.find('.content5 img').animate({width:'200px',marginTop:'-40px',opacity:'0'},500,function(){
						if (!isMobile){
							section.find('.content6').animate({left:'-15px'},200).animate({left:'5px'},200);
						}else{
							section.find('.content6').animate({left:'-15px'},200).animate({left:'20px'},200);
						}
						section.find('.content7').delay(400).animate({left:'155px'},200).animate({left:'145px'},200);
						section.find('.content2').delay(500).animate({left:'104px'},600);
					});
				});
			}
		}else{
			if (windowWidth > 1024) {
				section.find('.content4 img').css({height:'43px',marginTop:'0'});
				section.find('.content5').hide();
				section.find('.content5 img').css({width:'81px',marginTop:'0px',opacity:'1'});
				section.find('.content6').css({left:'690px',width:'100px'});
				section.find('.content7').css({left:'690px',width:'100px'});
				section.find('.content2').css({left:'154px'});
			}else{
				section.find('.content4 img').css({height:'22px',marginTop:'0'});
				section.find('.content5').hide();
				section.find('.content5 img').css({width:'40px',marginTop:'0px',opacity:'1'});
				section.find('.content6').css({left:'1000px'});
				section.find('.content7').css({left:'-1000px'});
				section.find('.content2').css({left:'40px'});
			}
		}
		break;
	}
}

function mainAnimate(way){
	clickButton = true;
	if (way == 1){
		$('.section_wrap .section'+mainCount).animate({left:'-1240px'},400,'easeInOutExpo');
		setSectionAction(mainCount,0);
		mainCount = (mainCount == 5)? 1 : mainCount +1;
		$('.section_wrap .section'+mainCount).css('left','1240px').animate({left:'0'},400,'easeInOutExpo',function(){
			setSectionAction(mainCount,1);
		});
	}else{
		$('.section_wrap .section'+mainCount).animate({left:'1240px'},400,'easeInOutExpo');
		setSectionAction(mainCount,0);
		mainCount = (mainCount == 1)? 5 : mainCount -1;
		$('.section_wrap .section'+mainCount).css('left','-1240px').animate({left:'0px'},400,'easeInOutExpo',function(){
			setSectionAction(mainCount,1);
		});
	}

	$('.sectionpage_list li button').removeClass('on');
	$('.sectionpage_list').find('.sectionpage_'+mainCount).find('button').addClass('on');

	setTimeout(function(){clickButton = false;},3000);
}

$('.btn_next').click(function(){
	if (!clickButton){
		clearInterval(mainActionStart);
		mainAnimate(1);
		setTimeout(function(){
			mainActionStart = setInterval(function(){mainAnimate(1)},5000);
		},3000);
	}
});

$('.btn_prev').click(function(){
	if (!clickButton){
		clearInterval(mainActionStart);
		mainAnimate(2);
		setTimeout(function(){
			mainActionStart = setInterval(function(){mainAnimate(1)},5000);
		},3000);
	}
});

if ( !isMobile ){
	$('.sectionpage_list li button').click(function(){
		if (!clickButton){
			clearInterval(mainActionStart);
			$('.section_wrap .section'+mainCount).animate({left:'-1240px'},400,'easeInOutExpo');
			setSectionAction(mainCount,0);
			mainCount = $(this).val()-1;
			mainAnimate(1);
			setTimeout(function(){
				mainActionStart = setInterval(function(){mainAnimate(1)},5000);
			},3000);

		}
	});
}

setTimeout(function(){setSectionAction(1,1)},400);
setTimeout(function(){clickButton = false;},3000);

var mainActionStart = setInterval(function(){mainAnimate(1)},5000);

/*
if ( !isMobile ){
	$('.section_wrap').hover(function(){
		//clearInterval(mainActionStart);
	},function(){
		//mainActionStart = setInterval(function(){mainAnimate(1)},5000);
	});
}
*/

var timeMinute = 4;
var timeSecond = 59;
var timeSecond_m = 99;
var setTime_var;

function setTimeFn(){
	setTime_var = setInterval(function(){
		$('.min').text('0'+timeMinute);
		if (timeSecond <10) $('.sec').text('0'+timeSecond);
		else $('.sec').text(timeSecond);

		if (timeSecond_m <10) $('.m_sec').text('0'+timeSecond_m);
		else $('.m_sec').text(timeSecond_m);

		if (timeSecond_m > 0){
			timeSecond_m = timeSecond_m-1;
		}else{
			timeSecond_m = 99;
			if (timeSecond > 0){
				timeSecond = timeSecond-1;
			}else{
				timeSecond = 59;
				if (timeMinute > 0){
					timeMinute = timeMinute-1;
					$('.min').text('0'+timeMinute);
				}else{
					clearInterval(setTime_var);
					timeMinute = 0;
					timeSecond = 0;
					timeSecond_m = 0;
					$('.background_layer').show();
					$('.alert_layer').show();
					return;
				}
			}
		}
	},10);
}

$('.check_label').click(function(){
	if ($(this).find('input[type="checkbox"]').prop('checked')){
		$(this).addClass('on');
	}else{
		$(this).removeClass('on');
	}
});

function completeAction(){
	if (windowWidth > 1024) {
		$('.visual_box').find('.con1').animate({width:'114px',height:'102px',left:'0',bottom:'6px',opacity:'1'},300,function(){
			$('.visual_box').find('.con2').animate({width:'107px',height:'102px',left:'110px',bottom:'6px',opacity:'1'},300,function(){
				$('.visual_box').find('.con3').animate({width:'103px',height:'102px',left:'214px',bottom:'6px',opacity:'1'},300,function(){
					$('.visual_box').find('.con4').animate({width:'74px',height:'102px',left:'314px',bottom:'6px',opacity:'1'},300);
				});
			});
		});
	}else{
		$('.visual_box').find('.con1').animate({width:'66px',height:'59px',left:'10px',bottom:'6px',opacity:'1'},300,function(){
			$('.visual_box').find('.con2').animate({width:'62px',height:'59px',left:'80px',bottom:'6px',opacity:'1'},300,function(){
				$('.visual_box').find('.con3').animate({width:'59px',height:'59px',left:'150px',bottom:'6px',opacity:'1'},300,function(){
					$('.visual_box').find('.con4').animate({width:'42px',height:'59px',left:'220px',bottom:'6px',opacity:'1'},300);
				});
			});
		});
	}
}

$('.btn_challenge').click(function(){
	if ( getCookie('mhsh_timeout') != 'done' ){
		frontPageCh = false;
		$('.challenge_box').hide();
		$('.join_container').show();
		$('.main_container').animate({top:'-100%'},400,function(){
			$('.main_container').hide();
			setTimeout(function(){setTimeFn()},400);
			clearInterval(mainActionStart);
		});
	}else{
		alert('아쉽지만, 내일 다시 도전해 주세요.');
	}

});

setTimeout(function(){completeAction()},600);

$('.btn_close').click(function(){
	$('.background_layer').hide();
	$('.popup_layer').hide();
});

$('.open_clause').click(function(){
	$('.background_layer').show();
	$('.popup_clause').show();
});

$('.open_personal').click(function(){
	$('.background_layer').show();
	$('.popup_personal').show();
});

$('.open_cellphone').click(function(){
	$('.background_layer').show();
	$('.popup_cellphone').show();
});

$('.btn_check').click(function(){
	setCookie('mhsh_timeout', 'done', 1);
	location.reload();
});

});// end jQuery ready