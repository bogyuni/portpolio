
// notice window
	var agt = navigator.userAgent.toLowerCase();

	function setCookie( name, value, expiredays ){
		var todayDate = new Date(); 
		todayDate.setDate( todayDate.getDate() + expiredays ); 
		document.cookie = name + "_kor=" + escape( value ) + "; path=/; expires=" +    todayDate.toGMTString() + ";" 
	}
	function closeNotice(){
		if ( document.forms[0].Notice.checked )
		setCookie( "Notice", "done" , 1);
		$(".notice").animate({marginTop:'-150px'},200);
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
	function noticePopup(){
		if ( getCookie( "Notice" ) != "done" ) $(".notice").show();
	}

//section1 main content action
	function section1_ani(){
		$(".section1 .obj1").stop().animate({top:'200px'},300).animate({top:'125px'},300).animate({top:'135px'},400);
		$(".section1 .left_obj").stop().animate({left:'0'},600);
		$(".section1 .right_obj").stop().animate({right:'0'},600);
		setTimeout("section1_ani2()",300);
	}
	function section1_ani2(){
		$(".section1 .obj1 .back").rotate({animateTo:-10,duration:400});
		setTimeout("section1_ani3()",300);
	}
	function section1_ani3(){
		$(".section1 .obj1 .back").rotate({animateTo:0,duration:200});
		$(".section1 .obj1 .shadow").stop().animate({left:'20px',top:'20px'},600);
	}
	setTimeout("section1_ani()");

//section2 main content action
	function section2_ani(){
		$(".section2 .obj1 img").stop().animate({left:'0',opacity:'1'},800);

		$(".section2 .obj3 img").stop().delay(600).animate({top:'0',opacity:'1'},800);
		$(".section2 .obj4 img").stop().delay(600).animate({top:'0',opacity:'1'},400);
		$(".section2 .obj5 img").stop().delay(600).animate({top:'0',opacity:'1'},600);

		if (agt.indexOf("msie 8.0") != -1) {
			$(".section2 .obj6 img").stop().delay(400).animate({left:'-30px',opacity:'1'},400).animate({left:'0'},400);
			$(".section2 .obj7 img").stop().delay(800).animate({left:'-30px',opacity:'1'},400).animate({left:'0'},400);
		}else{
			setTimeout("section2_ani1()",800);
			setTimeout("section2_ani3()",1200);
		}
	}
	function section2_ani1(){
		$(".section2 .obj6 img").stop().animate({opacity:'1'},400).rotate({animateTo:-10,center: ["0%", "100%"],duration:200});
		setTimeout("section2_ani2()",200);
	}
	function section2_ani2(){
		$(".section2 .obj6 img").rotate({animateTo:0,center: ["0%", "100%"],duration:200});
	}
	function section2_ani3(){
		$(".section2 .obj7 img").stop().animate({opacity:'1'},400).rotate({animateTo:370,center: ["100%", "100%"],duration:200});
		setTimeout("section2_ani4()",200);
	}
	function section2_ani4(){
		$(".section2 .obj7 img").rotate({animateTo:360,center: ["100%", "100%"],duration:200});
	}

//section3 main content action
	function section3_ani(){
		$(".section3 .obj1 img").stop().animate({top:'0'},400);
		$(".section3 .obj2 img").stop().delay(400).animate({left:'0',opacity:'1'},1200);
		$(".section3 .obj3 img").delay(1600).animate({width:'140%',left:'-10%',top:'-20%',opacity:'1'},300).animate({width:'100%',left:'0%',top:'0%'},200);
	}

//section4 main content action
	function section4_ani(){
		//$(".section4 .obj1").stop().animate({left:'854px'},200).animate({left:'10px'},200);
		//$(".section4 .obj1 .txt_con").stop().animate({width:'50%',height:'50px'},200).animate({width:'100%',height:'50px'},200);
		//$(".section4 .obj2").stop().delay(400).animate({left:'568px'},200).animate({left:'12px'},200);
		//$(".section4 .obj2 img").stop().delay(400).animate({width:'40%',height:'118px'},200).animate({width:'100%',height:'118px'},200);
		$(".section4 .obj3 .img_con").stop().delay(200).animate({top:'10px'},100).animate({top:'0px'},100).animate({top:'10px'},100).animate({top:'0px'},100).animate({top:'10px'},100).animate({top:'0px'},100).animate({top:'10px'},100).animate({top:'0px'},100);
		//$(".section4 .obj4 img").stop().delay(1400).animate({top:'188px',width:'257px',height:'50%'},400).animate({top:'0px',width:'257px',height:'100%'},400);
		$(".section4 .btn_event").stop().delay(400).animate({top:'582px'},200).animate({top:'522px'},400);
		setTimeout("section4_ani1()",600);
	}
	function section4_ani1(){
		$(".section4 .obj3 .txt_con").stop().animate({opacity:'1'},400).rotate({animateTo:-20,center: ["0%", "100%"],duration:200});
		setTimeout("section4_ani2()",200);
	}
	function section4_ani2(){
		$(".section4 .obj3 .txt_con").rotate({animateTo:0,center: ["0%", "100%"],duration:200});
	}


$(function(){
	// 초기 셋팅 값
	$(document).ready(function(){
		noticePopup();

		$(".section1 .obj1 .back").rotate(-4);
		if (agt.indexOf("msie 8.0") != -1) {
			$(".section2 .obj6 img").css({left:'408px'});
			$(".section2 .obj7 img").css({left:'-258px'});
		}else{
			$(".section2 .obj6 img").rotate({angle: 90,center: ["0%", "100%"]});
			$(".section2 .obj7 img").rotate({angle: 270,center: ["100%", "100%"]});
			$(".section4 .obj3 .txt_con").rotate(90);
		}
	});

	var section2Ch = true;
	var section3Ch = true;
	var section4Ch = true;

	$(window).scroll(function(){
		var section2Top = $(".section2").offset().top-140;
		var section3Top = $(".section3").offset().top-140;
		var section4Top = $(".section4").offset().top-260;
		var scrollTop = $(window).scrollTop();
//		$(".scrollTop").html("scrollTop : "+scrollTop);
		if (scrollTop > section2Top && scrollTop < section3Top){
			if (section2Ch == true){
				section2_ani();
				section2Ch = false;
			}
		}else if (scrollTop > section3Top && scrollTop < section4Top){
			if (section3Ch == true){
				section3_ani();
				section3Ch = false;
			}
		}else if (scrollTop > section4Top){
			if (section4Ch == true){
				section4_ani();
				section4Ch = false;
			}
		}
	});


});



