// 전체 컨텐츠 변수 설정
	//var regi_date = "포트폴리오 날짜";
	var regi_date = "2012.07.12";
	//var EN_tit = "포트폴리오 영어 타이틀";
	var EN_tit = "NEW INNOVATION FOR THE SKIN";
	//var KR_tit = "포트폴리오 한글 타이틀";
	var KR_tit = "SK-II 동안 크림 시리즈 캠페인";
	//var fullImgUrl ="배경에 삽입되는 전체 이미지 주소";
	var fullImgUrl ="images/temp/@video_temp1.jpg";
	var fullContentType= "포트폴리오가 무비 컨텐츠면 0, 이미지 컨텐츠면 1";
	var contentMoreChk = "포트폴리오의 외부 링크 경로, 존재하면 0, 없으면 1. 없으면 버튼을 생성하지 않는다.";
	var contentMoreUrl = "포트폴리오의 외부 링크 경로";
	//var movieUrl = "무비 컨텐츠의 유투브 경로";
	var movieUrl = 'http://www.youtube.com/v/ar_l0owsoXI?version=3&autoplay=1&amp;hl=ko_KR&amp;rel=0';
	var thumbChk = "내부 컨텐츠가 존재하면 0, 존재 하지 않으면 1";
	var thumbArray = "내부 컨텐츠가 존재할 때 컨텐츠의 수량";
	//var thumbArrayImg = "내부 컨텐츠의 썸네일 이미지 주소 값";
	var thumbArrayImg = new Array();

	
// 전체 컨텐츠가 최초로 불러오는 함수
function fullContentIntro(index){
	var tags = '';
	tags +='<article class="fullContent_wrap">';
	tags += AdQUA.Renew.htmlContainer(index);
	tags +='</article>';

	// fullContent 안에 상단의 설정 끝난 태그를 모두 구현
	$(".fullContent").html(tags);
	// fullContent의 배경 이미지 주소
	$(".fullContent_img").backstretch(fullImgUrl);

	// #view_container .fullContent_thumControl 가로설정
	var thumControl_W = $("#view_container .fullContent_thumControl .thumList_wrap ul li").length;
	$("#view_container .fullContent_thumControl .thumList_wrap ul").css("width", thumControl_W*63+"px");

	$(".thumList_wrap li").click(function(){
		$(".thumList_wrap li .thumb_img").each(function(){
			$(this).removeClass("thumb_img_on").addClass("thumb_img_off");
		});
		$(".thumList_wrap li .on_thumb").each(function(){
			$(this).removeClass("on_thumb").addClass("off_thumb");
		});
			$(this).find(".thumb_img").removeClass("thumb_img_off").addClass("thumb_img_on");
			$(this).find(".off_thumb").removeClass("off_thumb").addClass("on_thumb");
		$(".fullContent_img .backstretch").fadeOut();
		$(".fullContent_img").backstretch($(this).find(".thumb_img img").attr("src")).fadeIn();
	});

	var countNum = 5;
	$(".btn_thumbnail_next").click(function(){
		if (countNum < thumControl_W){
			$(".thumList_wrap ul").stop().animate({
				left:"-=315px"
			},200);
			countNum += 5;
		}
	});
	$(".btn_thumbnail_prev").click(function(){
		if (countNum > 5){
			$(".thumList_wrap ul").stop().animate({
				left:"+=315px"
			},200);
			countNum-=5;
		}
	});
}
// 다음 버튼 클릭시 함수
function fullContentNext(index){
	var tags = '';
	tags +='<article class="fullContent_wrap" style="left:-100%;">';
	tags += AdQUA.Renew.htmlContainer(index);
	tags +='</article>';

	// fullContent 안에 상단의 설정 끝난 태그를 모두 구현
	$(".fullContent").append(tags);
	
	//$(".fullContent_img").backstretch( "images/temp/@video_temp1.jpg");
	if ($(".wrapBG").data("oData")[index].contents[0].contentsType == "image")
	    $(".fullContent_img").backstretch("/Uploads/FullImage/" + $(".wrapBG").data("oData")[index].contents[0].imageName);
	else
	    $(".fullContent_img").backstretch("/Uploads/YoutubeImage/" + $(".wrapBG").data("oData")[index].contents[0].imageName);	    

	// #view_container .fullContent_thumControl 가로설정
	var thumControl_W = $("#view_container .fullContent_thumControl .thumList_wrap ul li").length;
	$("#view_container .fullContent_thumControl .thumList_wrap ul").css("width", thumControl_W*63+"px");

	$(".thumList_wrap li").click(function(){
		$(".thumList_wrap li .thumb_img").each(function(){
			$(this).removeClass("thumb_img_on").addClass("thumb_img_off");
		});
		$(".thumList_wrap li .on_thumb").each(function(){
			$(this).removeClass("on_thumb").addClass("off_thumb");
		});
			$(this).find(".thumb_img").removeClass("thumb_img_off").addClass("thumb_img_on");
			$(this).find(".off_thumb").removeClass("off_thumb").addClass("on_thumb");
		$(".fullContent_img .backstretch").fadeOut(5000).remove();
		$(".fullContent_img").backstretch($(this).find(".thumb_img img").attr("src")).hide().fadeIn(1000);
	});

	var countNum = 5;
	$(".btn_thumbnail_next").click(function(){
		if (countNum < thumControl_W){
			$(".thumList_wrap ul").stop().animate({
				left:"-=315px"
			},200);
			countNum += 5;
		}
	});
	$(".btn_thumbnail_prev").click(function(){
		if (countNum > 5){
			$(".thumList_wrap ul").stop().animate({
				left:"+=315px"
			},200);
			countNum-=5;
		}
	});
}
// 이전 버튼 클릭시 함수
function fullContentPrev(index){
	var tags = '';
	tags +='<article class="fullContent_wrap" style="left:100%;">';
	tags += AdQUA.Renew.htmlContainer(index);
	tags +='</article>';

	// fullContent 안에 상단의 설정 끝난 태그를 모두 구현
	$(".fullContent").append(tags);
	// 
	//$(".fullContent_img").backstretch("images/temp/@video_temp1.jpg");	
	if ($(".wrapBG").data("oData")[index].contents[0].contentsType == "image")
	    $(".fullContent_img").backstretch("/Uploads/FullImage/" + $(".wrapBG").data("oData")[index].contents[0].imageName);
	else
	    $(".fullContent_img").backstretch("/Uploads/YoutubeImage/" + $(".wrapBG").data("oData")[index].contents[0].imageName);	    

	// #view_container .fullContent_thumControl 가로설정
	var thumControl_W = $("#view_container .fullContent_thumControl .thumList_wrap ul li").length;
	$("#view_container .fullContent_thumControl .thumList_wrap ul").css("width", thumControl_W*63+"px");

	$(".thumList_wrap li").click(function(){
		$(".thumList_wrap li .thumb_img").each(function(){
			$(this).removeClass("thumb_img_on").addClass("thumb_img_off");
		});
		$(".thumList_wrap li .on_thumb").each(function(){
			$(this).removeClass("on_thumb").addClass("off_thumb");
		});
			$(this).find(".thumb_img").removeClass("thumb_img_off").addClass("thumb_img_on");
			$(this).find(".off_thumb").removeClass("off_thumb").addClass("on_thumb");
		$(".fullContent_img .backstretch").fadeOut(5000).remove();
		$(".fullContent_img").backstretch($(this).find(".thumb_img img").attr("src")).hide().fadeIn(1000);
	});

	var countNum = 5;
	$(".btn_thumbnail_next").click(function(){
		if (countNum < thumControl_W){
			$(".thumList_wrap ul").stop().animate({
				left:"-=315px"
			},200);
			countNum += 5;
		}
	});
	$(".btn_thumbnail_prev").click(function(){
		if (countNum > 5){
			$(".thumList_wrap ul").stop().animate({
				left:"+=315px"
			},200);
			countNum-=5;
		}
	});
}

function moviePlay(){
	var tags ='';
	tags +='<object width="1280" height="720">';
	tags +='	<param name="movie" value="'+movieUrl+'" />';
	tags +='	<param name="allowFullScreen" value="true" />';
	tags +='	<param name="allowscriptaccess" value="always" />';
	tags +='	<param name="wmode" value="opaque" />';
	tags +='	<embed src="'+movieUrl+'" type="application/x-shockwave-flash" width="1280" height="720" allowscriptaccess="always" allowfullscreen="true" wmode="opaque"></embed>';
	tags +='</object>';
	$(".fullContent_wrap").html(tags);
}

function movieClose(){
	$(".fullContent_wrap").html('');
	fullContentIntro();
}

function fullContentRemove(){
	$(".fullContent_wrap").prev(".fullContent_wrap").remove();
}

function fullDataLoad(index) {
    regi_date = ($(".wrapBG").data("oData")[index].openDate).replace(/-/gi, ".");
    //var EN_tit = "포트폴리오 영어 타이틀";
    EN_tit = $(".wrapBG").data("oData")[index].projectEngName;
    //var KR_tit = "포트폴리오 한글 타이틀";
    KR_tit = $(".wrapBG").data("oData")[index].projectName;
    //var fullImgUrl ="배경에 삽입되는 전체 이미지 주소";
    if ($(".wrapBG").data("oData")[index].contents[0].contentsType == "image")
        fullImgUrl = "/Uploads/FullImage/" + $(".wrapBG").data("oData")[index].contents[0].imageName;
    else
        fullImgUrl = "/Uploads/YoutubeImage/" + $(".wrapBG").data("oData")[index].contents[0].imageName;

    fullContentType = "포트폴리오가 무비 컨텐츠면 0, 이미지 컨텐츠면 1";

    if ($(".wrapBG").data("oData")[index].contents[0].contentsType == "image") 
        fullContentType = 1;
    else
        fullContentType = 0;

    contentMoreChk = "포트폴리오의 외부 링크 경로, 존재하면 0, 없으면 1. 없으면 버튼을 생성하지 않는다.";
    
    if ($(".wrapBG").data("oData")[index].linkYN == 1) 
        contentMoreChk = 0;
    else
        contentMoreChk = 1;

    contentMoreUrl = $(".wrapBG").data("oData")[index].linkUrl;
    //var movieUrl = "무비 컨텐츠의 유투브 경로";
    //var movieUrl = 'http://www.youtube.com/v/ar_l0owsoXI?version=3&autoplay=1&amp;hl=ko_KR&amp;rel=0';
    movieUrl = $(".wrapBG").data("oData")[index].contents[0].youtubeLink;
    
    thumbChk = "" //"내부 컨텐츠가 존재하면 0, 존재 하지 않으면 1";
    if ($(".wrapBG").data("oData")[index].contents[0].length > 1)
        thumbChk = 0;
    else
        thumbChk = 1;

    thumbArray = $(".wrapBG").data("oData")[index].contents.length;  //"내부 컨텐츠가 존재할 때 컨텐츠의 수량";
    //var thumbArrayImg = "내부 컨텐츠의 썸네일 이미지 주소 값";
    
    $.each($(".wrapBG").data("oData")[index].contents, function (i, oData) {
        thumbArrayImg[i] = oData.imageName;
    });    
}

$(document).ready(function () {

    // 썸네일 리스트로 보기
    $("#snb .thumb").click(function () {
        movieClose();
    });

    // 전체화면 모드
    $("#snb .full").click(function () {
        $(".container_width").css("width", "100%");
        fullContentIntro(0);        
    });

    $(".fullContent_control .btn_contents_prev").click(function () {
        fullContentPrev(0);
        $(".fullContent_wrap").imagesLoaded(function () {
            $(".fullContent_wrap").stop().animate({ left: "-=100%" }, 400);
        });
        setTimeout("fullContentRemove()", 400);
    });

    $(".fullContent_control .btn_contents_next").click(function () {
        fullContentNext(1);
        $(".fullContent_wrap").imagesLoaded(function () {
            $(".fullContent_wrap").stop().animate({ left: "+=100%" }, 400);
        });
        setTimeout("fullContentRemove()", 400);
    });


});