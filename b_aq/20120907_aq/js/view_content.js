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
	var thumbArrayImg = "images/temp/@fullM_thumb01.png";

// 전체 컨텐츠가 최초로 불러오는 함수
function fullContentIntro(){
	var tags = '';
	tags +='<article class="fullContent_wrap">';
	tags +='	<div class="fullContent_box">';
	tags +='		<div class="fullContent_img"></div>';
	/* intro_mask 는 컨텐츠가 무비일 경우 인트로 이미지에 검은 배경을 깔아서 화면에 보여주는 효과용 태그 */
	//tags +='		<div class="intro_mask"></div>';    마스크 영역은 아직 미 확정 상태
	tags +='		<div class="content_info">';
	tags +='			<p class="date_p">'+regi_date+'</p>';
	tags +='			<p class="EN_tit">'+EN_tit+'</p>';
	tags +='			<p class="KR_tit">'+KR_tit+'</p>';
	tags +='			<a href="#"><img src="images/btn/btn_ideaViewMore.png" alt="more" /></a>';
	tags +='		</div>';
	/* 만약 인트로 컨텐츠가 무비라면 하단의 플레이 버튼 삽입 */
	tags +='		<div class="btn_play"><img src="images/btn/btn_play.png" alt="play" onclick="moviePlay();" /></div>';

	/* 내부 컨텐츠가 존재한다면 하단의 <aside>를 삽입. */
	tags +='	<aside class="fullContent_thumControl">';
	tags +='		<ul class="Control_box">';
	/* 썸네일 컨텐츠에서 <li> 클래스에 on 클래스가 추가되면 버튼이 파란색이 된다.
		초기셋팅은 둘다 off 상태인데, 다음으로 이동 가능한 컨텐츠가 있다면 대상 버튼에 on 클래스를 추가함. */
	tags +='			<li class="btn_thumbnail_prev">이전</li>';
	tags +='			<li class="btn_thumbnail_next">다음</li>';
	tags +='		</ul>';

	tags +='		<div class="thumList_wrap">';
	tags +='			<ul>';
	/* 컨텐츠 대상이에 따라 <li> 수량 증가. 
		현재 썸네일 이미지는 컬러, 흑백 두가지가 존재해서 클릭하면 흑백이 컬러로 전화되고 파란색 보더가 생성*/
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_on"><img src="'+thumbArrayImg+'" alt="" /></div>';
	tags +='					<div class="on_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="'+thumbArrayImg+'" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="'+thumbArrayImg+'" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="'+thumbArrayImg+'" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="'+thumbArrayImg+'" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="'+thumbArrayImg+'" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='			</ul>';
	tags +='		</div>';
	tags +='	</aside>';

	tags +='	</div>';
	tags +='</article>';

	// fullContent 안에 상단의 설정 끝난 태그를 모두 구현
	$(".fullContent").html(tags);
	// fullContent의 배경 이미지 주소
	$(".fullContent_img").backstretch(fullImgUrl);

	// #view_container .fullContent_thumControl 가로설정
	var thumControl_W = $("#view_container .fullContent_thumControl .thumList_wrap ul li").length;
	$("#view_container .fullContent_thumControl .thumList_wrap ul").css("width", thumControl_W * 84 + "px");

	$(".thumList_wrap li").click(function(){
		$(".thumList_wrap li .thumb_img").each(function(){
			$(this).removeClass("thumb_img_on").addClass("thumb_img_off");
		});
		$(".thumList_wrap li .on_thumb").each(function(){
			$(this).removeClass("on_thumb").addClass("off_thumb");
		});
			$(this).find(".thumb_img").removeClass("thumb_img_off").addClass("thumb_img_on");
			$(this).find(".off_thumb").removeClass("off_thumb").addClass("on_thumb");
	});

	var countNum = 5;
	$(".btn_thumbnail_next").click(function(){
		if (countNum < thumControl_W){
			$(".thumList_wrap ul").stop().animate({
				left:"-=420px"
			},200);
			countNum += 5;
		}
	});
	$(".btn_thumbnail_prev").click(function(){
		if (countNum > 5){
			$(".thumList_wrap ul").stop().animate({
				left:"+=420px"
			},200);
			countNum -= 5;
		}
	});
}
// 다음 버튼 클릭시 함수
function fullContentNext(){
	var tags = '';
	tags +='<article class="fullContent_wrap" style="left:-100%;">';
	tags +='	<div class="fullContent_box">';
	tags +='		<div class="fullContent_img"></div>';
	/* intro_mask 는 컨텐츠가 무비일 경우 인트로 이미지에 검은 배경을 깔아서 화면에 보여주는 효과용 태그 */
	//tags +='		<div class="intro_mask"></div>';    마스크 영역은 아직 미 확정 상태
	tags +='		<div class="content_info">';
	tags +='			<p class="date_p">'+regi_date+'</p>';
	tags +='			<p class="EN_tit">'+EN_tit+'</p>';
	tags +='			<p class="KR_tit">'+KR_tit+'</p>';
	tags +='			<a href="#"><img src="images/btn/btn_ideaViewMore.png" alt="more" /></a>';
	tags +='		</div>';
	/* 만약 인트로 컨텐츠가 무비라면 하단의 플레이 버튼 삽입 */
	tags +='		<div class="btn_play"><img src="images/btn/btn_play.png" alt="play" onclick="moviePlay();" /></div>';

	/* 내부 컨텐츠가 존재한다면 하단의 <aside>를 삽입. */
	tags +='	<aside class="fullContent_thumControl">';
	tags +='		<ul class="Control_box">';
	/* 썸네일 컨텐츠에서 <li> 클래스에 on 클래스가 추가되면 버튼이 파란색이 된다.
		초기셋팅은 둘다 off 상태인데, 다음으로 이동 가능한 컨텐츠가 있다면 대상 버튼에 on 클래스를 추가함. */
	tags +='			<li class="btn_thumbnail_prev">이전</li>';
	tags +='			<li class="btn_thumbnail_next">다음</li>';
	tags +='		</ul>';

	tags +='		<div class="thumList_wrap">';
	tags +='			<ul>';
	/* 컨텐츠 대상이에 따라 <li> 수량 증가. 
		현재 썸네일 이미지는 컬러, 흑백 두가지가 존재해서 클릭하면 흑백이 컬러로 전화되고 파란색 보더가 생성*/
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_on"><img src="images/temp/@fullM_thumb01.png" alt="" /></div>';
	tags +='					<div class="on_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="images/temp/@fullM_thumb01.png" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="images/temp/@fullM_thumb01.png" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="images/temp/@fullM_thumb01.png" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="images/temp/@fullM_thumb01.png" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="images/temp/@fullM_thumb01.png" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='			</ul>';
	tags +='		</div>';
	tags +='	</aside>';

	tags +='	</div>';
	tags +='</article>';

	// fullContent 안에 상단의 설정 끝난 태그를 모두 구현
	$(".fullContent").append(tags);
	// 
	$(".fullContent_img").backstretch("images/temp/@video_temp1.jpg");

	// #view_container .fullContent_thumControl 가로설정
	var thumControl_W = $("#view_container .fullContent_thumControl .thumList_wrap ul li").length;
	$("#view_container .fullContent_thumControl .thumList_wrap ul").css("width", thumControl_W * 84 + "px");

	$(".thumList_wrap li").click(function(){
		$(".thumList_wrap li .thumb_img").each(function(){
			$(this).removeClass("thumb_img_on").addClass("thumb_img_off");
		});
		$(".thumList_wrap li .on_thumb").each(function(){
			$(this).removeClass("on_thumb").addClass("off_thumb");
		});
			$(this).find(".thumb_img").removeClass("thumb_img_off").addClass("thumb_img_on");
			$(this).find(".off_thumb").removeClass("off_thumb").addClass("on_thumb");
	});

	var countNum = 5;
	$(".btn_thumbnail_next").click(function(){
		if (countNum < thumControl_W){
			$(".thumList_wrap ul").stop().animate({
				left:"-=420px"
			},200);
			countNum += 5;
		}
	});
	$(".btn_thumbnail_prev").click(function(){
		if (countNum > 5){
			$(".thumList_wrap ul").stop().animate({
				left:"+=420px"
			},200);
			countNum -= 5;
		}
	});
}
// 이전 버튼 클릭시 함수
function fullContentPrev(){
	var tags = '';
	tags +='<article class="fullContent_wrap" style="left:100%;">';
	tags +='	<div class="fullContent_box">';
	tags +='		<div class="fullContent_img"></div>';
	/* intro_mask 는 컨텐츠가 무비일 경우 인트로 이미지에 검은 배경을 깔아서 화면에 보여주는 효과용 태그 */
	//tags +='		<div class="intro_mask"></div>';    마스크 영역은 아직 미 확정 상태
	tags +='		<div class="content_info">';
	tags +='			<p class="date_p">'+regi_date+'</p>';
	tags +='			<p class="EN_tit">'+EN_tit+'</p>';
	tags +='			<p class="KR_tit">'+KR_tit+'</p>';
	tags +='			<a href="#"><img src="images/btn/btn_ideaViewMore.png" alt="more" /></a>';
	tags +='		</div>';
	/* 만약 인트로 컨텐츠가 무비라면 하단의 플레이 버튼 삽입 */
	tags +='		<div class="btn_play"><img src="images/btn/btn_play.png" alt="play" onclick="moviePlay();" /></div>';

	/* 내부 컨텐츠가 존재한다면 하단의 <aside>를 삽입. */
	tags +='	<aside class="fullContent_thumControl">';
	tags +='		<ul class="Control_box">';
	/* 썸네일 컨텐츠에서 <li> 클래스에 on 클래스가 추가되면 버튼이 파란색이 된다.
		초기셋팅은 둘다 off 상태인데, 다음으로 이동 가능한 컨텐츠가 있다면 대상 버튼에 on 클래스를 추가함. */
	tags +='			<li class="btn_thumbnail_prev">이전</li>';
	tags +='			<li class="btn_thumbnail_next">다음</li>';
	tags +='		</ul>';

	tags +='		<div class="thumList_wrap">';
	tags +='			<ul>';
	/* 컨텐츠 대상이에 따라 <li> 수량 증가. 
		현재 썸네일 이미지는 컬러, 흑백 두가지가 존재해서 클릭하면 흑백이 컬러로 전화되고 파란색 보더가 생성*/
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_on"><img src="images/temp/@fullM_thumb01.png" alt="" /></div>';
	tags +='					<div class="on_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="images/temp/@fullM_thumb01.png" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="images/temp/@fullM_thumb01.png" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="images/temp/@fullM_thumb01.png" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="images/temp/@fullM_thumb01.png" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='				<li>';
	tags +='					<div class="thumb_img thumb_img_off"><img src="images/temp/@fullM_thumb01.png" alt="" /></div>';
	tags +='					<div class="off_thumb"></div>';
	tags +='				</li>';
	tags +='			</ul>';
	tags +='		</div>';
	tags +='	</aside>';

	tags +='	</div>';
	tags +='</article>';

	// fullContent 안에 상단의 설정 끝난 태그를 모두 구현
	$(".fullContent").append(tags);
	// 
	$(".fullContent_img").backstretch("images/temp/@video_temp1.jpg");

	// #view_container .fullContent_thumControl 가로설정
	var thumControl_W = $("#view_container .fullContent_thumControl .thumList_wrap ul li").length;
	$("#view_container .fullContent_thumControl .thumList_wrap ul").css("width", thumControl_W * 84+"px");

	$(".thumList_wrap li").click(function(){
		$(".thumList_wrap li .thumb_img").each(function(){
			$(this).removeClass("thumb_img_on").addClass("thumb_img_off");
		});
		$(".thumList_wrap li .on_thumb").each(function(){
			$(this).removeClass("on_thumb").addClass("off_thumb");
		});
			$(this).find(".thumb_img").removeClass("thumb_img_off").addClass("thumb_img_on");
			$(this).find(".off_thumb").removeClass("off_thumb").addClass("on_thumb");
	});

	var countNum = 5;
	$(".btn_thumbnail_next").click(function(){
		if (countNum < thumControl_W){
			$(".thumList_wrap ul").stop().animate({
				left:"-=420px"
			},200);
			countNum += 5;
		}
	});
	$(".btn_thumbnail_prev").click(function(){
		if (countNum > 5){
			$(".thumList_wrap ul").stop().animate({
				left:"+=420px"
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

$(document).ready(function(){

	// 썸네일 리스트로 보기
	$("#snb .thumb").click(function(){
		movieClose();
	});

	// 전체화면 모드
		$("#snb .full").click(function(){
			$(".container_width").css("width","100%");
			fullContentIntro();
		});

	$(".fullContent_control .btn_contents_prev").click(function(){
		fullContentPrev();
		$(".fullContent_wrap").imagesLoaded(function(){
			$(".fullContent_wrap").stop().animate({left:"-=100%"},400);
		});
		setTimeout("fullContentRemove()", 400);
	});

	$(".fullContent_control .btn_contents_next").click(function(){
		fullContentNext();
		$(".fullContent_wrap").imagesLoaded(function(){
			$(".fullContent_wrap").stop().animate({left:"+=100%"},400);
		});
		setTimeout("fullContentRemove()", 400);
	});


});