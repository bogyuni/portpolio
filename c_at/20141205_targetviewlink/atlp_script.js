/**************************************************************
	[[ Adtive Targetview Link pruduct ]]

	author : seobogyun
	version : 1.0.0
		= 버전 정리
			.0 : 내부 요소 수정 시
			.0.0 : 탬플릿 형태 추가 시
			0.0.0 : 구조(structure), 기능등 설계가 변경 될 시
	date : 2014-12-17
		= 최종 수정일 2015-02-10

	[ Targetview Link Product  - Style Guide ]
		* 각 명칭의 앞 숫자는 코드번호.
			차후 형태가 추가 될 때마다 코드번호 증가.

		A. 슬롯 구조(structure)
			1 : 분리구조 (className = ATLP_structure_1)
			2 : 일체구조 (className = ATLP_structure_2)
			3 : 카드구조 (className = ATLP_structure_3)
		B. 영역 형태(shape)
			1 : 와이드형 (className = ATLP_shape_1)
			2 : 사각형 (className = ATLP_shape_2)
			3 : 스카이형 (className = ATLP_shape_3)
			4 : 라인형 (className = ATLP_shape_4)
			5 : 라인형(1슬롯) (className = ATLP_shape_5)
			6 : 사각형(2줄) (className = ATLP_shape_6)
			7 : 와이드형(썸네일내부) (className = ATLP_shape_7)
			8 : 라인형(썸네일내부) (className = ATLP_shape_8)
			9 : 라인형(썸네일내부 2줄) (className = ATLP_shape_9)
			10 : 스카이형(썸네일내부) (className = ATLP_shape_10)
		C. 스킨타입 설정 (skinType)
			0 : 스킨없음 (커스텀)  (className = ATLP_skin_0)
			1 : 밝은스킨 (className = ATLP_skin_1)
			2 : 어두운스킨 (className = ATLP_skin_2)
			3 : 특별스킨 (className = ATLP_skin_3) - 특별스킨은 현재 분리구조만 가지고있음

		D. 세부 설정 (detailCustom)
			areaBG : 영역 배경 색 (targetviewLinkStyleBanner)
			headBG : 상단 배경 (ATLP_head)
			bodyBG : 슬롯 리스트 영역 배경 (ATLP_body)
			infoBG : 상품정보영역 배경 색 (ATLP_foot)
			focusBD : 슬롯 포커스 색상 (ATLP_slotBorder)
			infoTxt : 상품정보 색상 (slotInfo_product)
			priceTxt : 상품가격 색상 (slotInfo_price)
			maskBG : 비활성 슬롯 색상 (ATLP_maskLayer)
			btnType : 상품 슬롯 내부 버튼 이미지 (slotInfo_button)

**************************************************************/

// 설계단계
function setAdtiveTargetviewLink(_areaInfo, _bannerStyle, _detailCustom, _matInfo){
	// 데이터 설정
		// 사용자 정보
			var userAgt=navigator.userAgent;
			var mobileDvi=new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
			var isMobile=false;
			for (var check in mobileDvi){
				if (userAgt.match(mobileDvi[check]) != null){ isMobile=true; }
			}

		// 영역 정보
			var $bannerID=$('#'+_areaInfo.bannerID), // 배너 선택자
				areaWidth=_areaInfo.width, // 영역 가로
				areaHeight=_areaInfo.height; // 영역 세로
			var headWidth, headHeight; // 해더 영역
			var footWidth, footHeight; // 푸터 영역
			var btnWidth; // 좌우 버튼 가로
			var infoPriceWidth; // 가격 가로
			var infoButtonWidth; // 구매버튼 가로
			var bannerBoxWidth, bannerBoxHeight; // 슬롯 래핑 박스 가로, 세로
			var slotWrapWidth, slotWrapHeight; // 슬롯 래퍼 가로, 세로

		// 스타일 정보
			var structure=_bannerStyle.structure,
				shape=_bannerStyle.shape,
				skinType=_bannerStyle.skinType;
			// 커스텀 스타일(색생) 정보
			var areaBG=_detailCustom.areaBG,
				headBG=_detailCustom.haedBG,
				bodyBG=_detailCustom.bodyBG,
				infoBG=_detailCustom.infoBG,
				focusBD=_detailCustom.focusBD,
				infoTxt=_detailCustom.infoTxt,
				priceTxt=_detailCustom.priceTxt,
				maskBG=_detailCustom.maskBG,
				btnType=_detailCustom.btnType;

		// 슬롯 정보
			var slotWidth, slotHeight;
			var slotSecondSize, slotThirdSize; // 슬롯 두번째 세번째 사이즈
			var slotMarginW, slotMarginH; // 슬롯 간의 간격
			var matNum=_matInfo.length; // 소재 개수, 일반적으로 10개 기준. 향후 20개 예정
			var slotNum, // 슬롯 개수
				panNum; // 판 개수
			var slotObj, // 슬롯 obj
				panObj; // 판 obj
			var slotData=new Array(), setResultData=new Array();
			var slotCount=0, // 슬롯 카운트
				globalCount=1; // 전체 카운트
			// 슬라이드 액션값
			var stratAniBanner, delayTime=2000;
			// 기타 설정값
			var coursorPos; // 커서 포지션
			var S2S6_actionCheck; // 사각형2줄의 액션 체크용
			var cardPosLeft,cardPosTop; // 카드구조 위치값
			var directionCheck=false; // 카드구조 방향 체크값
			var productMaxLine3=46; // 상품 정보 글자 줄 제한
			var productMaxLine2=30;
			var productMaxLine1=16;
			var slotBorderOnOff; // 보더 깜빡임 체크
			var touchStartPageX,touchEndPageX; // 터치 시작과 끝

	// CSS 설정
		var ATLP_CSS='';
		// 공통 영역
		ATLP_CSS+='.targetviewLinkStyleBanner{position:relative;font:normal 12px/1.2 Dotum,"돋움",sans-serif;color:#000;padding:0;margin:0 auto}.targetviewLinkStyleBanner *{padding:0 !important;margin:0;border:0;background:none;text-decoration:none}.targetviewLinkStyleBanner img{border:0;vertical-align:top}.targetviewLinkStyleBanner button{cursor:pointer;text-indent:-9999px;outline:0}.targetviewLinkStyleBanner .ATLP_ad_link{z-index:6;position:absolute;display:block;text-indent:-9999px;width:15px;height:15px;background:url("images/ico_adinfo.png") no-repeat right top}.targetviewLinkStyleBanner .ATLP_head{position:relative}.targetviewLinkStyleBanner .ATLP_biLogo{position:absolute}.targetviewLinkStyleBanner .ATLP_banner_box{overflow:hidden;position:relative;margin:0 auto}.targetviewLinkStyleBanner .ATLP_slotBox{text-align:center;border:1px solid #e1e1e1;background:#fff}.targetviewLinkStyleBanner .ATLP_slotAnchor{display:block;overflow:hidden;width:100%;height:100%;cursor:pointer}.targetviewLinkStyleBanner .ATLP_slotThum{overflow:hidden;display:inline-block;*display:inline}.targetviewLinkStyleBanner .ATLP_slotThum img{width:100%;height:100%}.targetviewLinkStyleBanner .ATLP_slotBox.on .ATLP_slotBorder{border-width:4px;border-style:solid}.targetviewLinkStyleBanner .ATLP_slotInfo{font-weight:bold;width:100%;cursor:pointer}.targetviewLinkStyleBanner .slotInfo_product{overflow:hidden;word-break:break-all;line-height:1.3;margin:0 auto}.targetviewLinkStyleBanner .slotInfo_price{font-size:14px;word-break:break-all;letter-spacing:-1px;margin:0 auto}.targetviewLinkStyleBanner .slotInfo_button{text-indent:-9999px;margin:0 auto}.targetviewLinkStyleBanner .ATLP_slotBorder{position:absolute;left:-1px;top:-1px}.targetviewLinkStyleBanner .ATLP_maskLayer{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0.6;filter:alpha(opacity=60);background:#ffffff}.targetviewLinkStyleBanner .ATLP_btn{position:absolute;z-index:5}';
		if (!isMobile){ATLP_CSS+='.targetviewLinkStyleBanner .ATLP_ad_link:hover{width:70px;height:15px;background-position:right bottom}';}
		// 스킨 설정
			if (skinType==1){
				ATLP_CSS+='.ATLP_skin_1{background:#efefef}';
			}else if (skinType==2){
				ATLP_CSS+='.ATLP_skin_2{background:#3a3a3a}';
			}else if (skinType==3){
				ATLP_CSS+='.ATLP_skin_3{background:#3a3a3a}';
			}else if (skinType==0){ // 커스텀 스킨 영역
				// 버튼 스타일
				if (btnType==1){
					ATLP_CSS+='.ATLP_btn1 .slotInfo_button{width:109px !important;height:24px !important;background:url("images/btn_buynow_off_1.png") no-repeat center !important}.ATLP_btn1 .ATLP_slotBox.on .slotInfo_button{background:url("images/btn_buynow_on_1.png") no-repeat center !important}';
					if (!isMobile){ATLP_CSS+='.ATLP_btn1.ATLP_structure_1 .ATLP_body:hover .slotInfo_button{background:url("images/btn_buynow_on_1.png") no-repeat center !important}';}
				}else if (btnType==2){
					ATLP_CSS+='.ATLP_btn2 .slotInfo_button{width:50px !important;height:23px !important;background:url("images/btn_buynow_off_2.png") no-repeat center !important}.ATLP_btn2 .ATLP_slotBox.on .slotInfo_button{background:url("images/btn_buynow_on_2.png") no-repeat center !important}';
					if (!isMobile){ATLP_CSS+='.ATLP_btn2.ATLP_structure_1 .ATLP_body:hover .slotInfo_button{background:url("images/btn_buynow_on_2.png") no-repeat center !important}';}
				}else if (btnType==3){
					ATLP_CSS+='.ATLP_btn3 .slotInfo_button{width:78px !important;height:28px !important;background:url("images/btn_buynow_off_3.png") no-repeat center !important}.ATLP_btn3 .ATLP_slotBox.on .slotInfo_button{background:url("images/btn_buynow_on_3.png") no-repeat center !important}';
					if (!isMobile){ATLP_CSS+='.ATLP_btn3.ATLP_structure_1 .ATLP_body:hover .slotInfo_button{background:url("images/btn_buynow_on_3.png") no-repeat center !important}';}
				}
			}

		if (structure==1){ // 구조:분리구조
			ATLP_CSS+='.ATLP_structure_1 .ATLP_slotBox .ATLP_slotInfo{display:none}.ATLP_structure_1 .ATLP_head{height:30px}.ATLP_structure_1 .ATLP_head .ATLP_biLogo{left:6px;top:6px}.ATLP_structure_1 .ATLP_head .ATLP_biLogo img{height:18px;width:auto}.ATLP_structure_1 .ATLP_foot{position:absolute;left:0;bottom:0;width:100%}.ATLP_structure_1 .ATLP_body{position:relative}.ATLP_structure_1 .ATLP_body .ATLP_slot_wrap{overflow:hidden}.ATLP_structure_1 .ATLP_body .slotInfo_product{white-space:nowrap;text-overflow:ellipsis}.ATLP_structure_1 .ATLP_body .slotInfo_price{font-weight:bold}.ATLP_structure_1 .ATLP_body .ATLP_coursor{position:absolute;text-indent:-9999px;width:24px;height:11px;margin-left:-12px}.ATLP_structure_1 .ATLP_ad_link{right:4px;top:6px}';
			if (shape==1){ // 형태:와이드형
				ATLP_CSS+='.ATLP_structure_1.ATLP_shape_1 .ATLP_foot{height:30px}.ATLP_structure_1.ATLP_shape_1 .ATLP_body .ATLP_slot_wrap{position:absolute;top:0;left:0}.ATLP_structure_1.ATLP_shape_1 .ATLP_body .ATLP_slotBox{float:left;position:relative}.ATLP_structure_1.ATLP_shape_1 .ATLP_body .ATLP_maskLayer{display:none}.ATLP_structure_1.ATLP_shape_1 .ATLP_body .ATLP_Info_wrap{position:absolute;left:0;top:0;width:100%;height:30px}.ATLP_structure_1.ATLP_shape_1 .ATLP_body .slotInfo_product{font-weight:bold;float:left;line-height:30px}.ATLP_structure_1.ATLP_shape_1 .ATLP_body .slotInfo_price{text-align:center;float:left;padding:0 10px !important;line-height:30px}.ATLP_structure_1.ATLP_shape_1 .ATLP_body .slotInfo_button{float:right;width:109px;height:24px;max-height:26px;background:url("images/btn_buynow_off_1.png") no-repeat center}.ATLP_structure_1.ATLP_shape_1 .ATLP_body .ATLP_coursor{top:-11px;background:url("images/arrow_con1_1.png") no-repeat}.ATLP_structure_1.ATLP_shape_1 .ATLP_btn{width:18px}.ATLP_structure_1.ATLP_shape_1 .ATLP_btn_left{left:0;background:url("images/btn_arrow_l_1.png") no-repeat center}.ATLP_structure_1.ATLP_shape_1 .ATLP_btn_right{right:0;background:url("images/btn_arrow_r_1.png") no-repeat center}.ATLP_structure_1.ATLP_shape_1 .ATLP_panList{position:absolute;right:40px;top:9px}.ATLP_structure_1.ATLP_shape_1 .ATLP_panList .ATLP_panNum{*text-indent:0;color:transparent;width:8px;height:8px;margin:0 2px;border-radius:5px;background:#cecece}';
				if (!isMobile){ATLP_CSS+='.ATLP_structure_1.ATLP_shape_1 .ATLP_body:hover .slotInfo_button{background:url("images/btn_buynow_on_1.png") no-repeat center}';}
			}else if (shape==2){ // 형태:사각형
				ATLP_CSS+='.ATLP_structure_1.ATLP_shape_2 .ATLP_foot{height:38px}.ATLP_structure_1.ATLP_shape_2 .ATLP_body .ATLP_slot_wrap{position:relative}.ATLP_structure_1.ATLP_shape_2 .ATLP_body .ATLP_slotBox{position:absolute;box-shadow: 0px 4px 6px rgba(0,0,0, .3)}.ATLP_structure_1.ATLP_shape_2 .ATLP_body .ATLP_Info_wrap{position:relative;width:100%;height:38px}.ATLP_structure_1.ATLP_shape_2 .ATLP_body .ATLP_maskLayer{display:block}.ATLP_structure_1.ATLP_shape_2 .ATLP_body .ATLP_slotBox.on .ATLP_maskLayer{display:none}.ATLP_structure_1.ATLP_shape_2 .ATLP_body .slotInfo_product{font-weight:bold;margin:4px 0 1px 6px}.ATLP_structure_1.ATLP_shape_2 .ATLP_body .slotInfo_price{margin-left:6px}.ATLP_structure_1.ATLP_shape_2 .ATLP_body .slotInfo_button{position:absolute;right:6px;width:50px;height:23px;max-height:34px;background:url("images/btn_buynow_off_2.png") no-repeat center}.ATLP_structure_1.ATLP_shape_2 .ATLP_body .ATLP_coursor{top:-11px;left:50%;background:url("images/arrow_con2_1.png") no-repeat}.ATLP_structure_1.ATLP_shape_2 .ATLP_btn{width:20px}.ATLP_structure_1.ATLP_shape_2 .ATLP_btn_left{left:6px;background:url("images/btn_arrow_l_2.png") no-repeat center}.ATLP_structure_1.ATLP_shape_2 .ATLP_btn_right{right:6px;background:url("images/btn_arrow_r_2.png") no-repeat center}';
				if (!isMobile){ATLP_CSS+='.ATLP_structure_1.ATLP_shape_2 .ATLP_body:hover .slotInfo_button{background:url("images/btn_buynow_on_2.png") no-repeat center}';}
			}
			// 스킨 설정
			if (skinType==1){
				ATLP_CSS+='.ATLP_structure_1.ATLP_skin_1.ATLP_shape_1 .ATLP_coursor{background:url("images/arrow_con1_1.png") no-repeat}.ATLP_structure_1.ATLP_skin_1.ATLP_shape_1 .ATLP_slotBox.on .ATLP_slotBorder{border-color:#fd0c89}.ATLP_structure_1.ATLP_skin_1.ATLP_shape_1 .slotInfo_product{color:#fff}.ATLP_structure_1.ATLP_skin_1.ATLP_shape_1 .slotInfo_price{color:#fff}.ATLP_structure_1.ATLP_skin_1.ATLP_shape_1 .ATLP_panNum.on{background:#ff0000}.ATLP_structure_1.ATLP_skin_1.ATLP_shape_1 .ATLP_foot{background:#3a3a3a}.ATLP_structure_1.ATLP_skin_1.ATLP_shape_2 .ATLP_coursor{background:url("images/arrow_con2_1.png") no-repeat}.ATLP_structure_1.ATLP_skin_1.ATLP_shape_2 .ATLP_slotBox.on .ATLP_slotBorder{border-color:#fd0c89}.ATLP_structure_1.ATLP_skin_1.ATLP_shape_2 .slotInfo_product{color:#ebebeb}.ATLP_structure_1.ATLP_skin_1.ATLP_shape_2 .slotInfo_price{color:#fff}.ATLP_structure_1.ATLP_skin_1.ATLP_shape_2 .ATLP_foot{background:#3a3a3a}';
			}else if (skinType==2){
				ATLP_CSS+='.ATLP_structure_1.ATLP_skin_2.ATLP_shape_1 .ATLP_slotBox.on .ATLP_slotBorder{border-color:#198be5}.ATLP_structure_1.ATLP_skin_2.ATLP_shape_1 .ATLP_coursor{background:url("images/arrow_con1_1.png") no-repeat}.ATLP_structure_1.ATLP_skin_2.ATLP_shape_1 .slotInfo_product{color:#fff}.ATLP_structure_1.ATLP_skin_2.ATLP_shape_1 .slotInfo_price{color:#ffde00}.ATLP_structure_1.ATLP_skin_2.ATLP_shape_1 .ATLP_panNum.on{background:#ffde00}.ATLP_structure_1.ATLP_skin_2.ATLP_shape_1 .ATLP_foot{background:#3a3a3a}.ATLP_structure_1.ATLP_skin_2.ATLP_shape_2 .ATLP_slotBox.on .ATLP_slotBorder{border-color:#ff0000}.ATLP_structure_1.ATLP_skin_2.ATLP_shape_2 .ATLP_coursor{background:url("images/arrow_con2_2.png") no-repeat}.ATLP_structure_1.ATLP_skin_2.ATLP_shape_2 .slotInfo_product{color:#ebebeb}.ATLP_structure_1.ATLP_skin_2.ATLP_shape_2 .slotInfo_price{color:#ffde00}.ATLP_structure_1.ATLP_skin_2.ATLP_shape_2 .ATLP_foot{background:#3a3a3a}';
			}else if (skinType==3){
				ATLP_CSS+='.ATLP_structure_1.ATLP_skin_3.ATLP_shape_1 .ATLP_slotBox.on .ATLP_slotBorder{border-color:#ff0000}.ATLP_structure_1.ATLP_skin_3.ATLP_shape_1 .ATLP_coursor{background:url("images/arrow_con1_2.png") no-repeat}.ATLP_structure_1.ATLP_skin_3.ATLP_shape_1 .slotInfo_product{color:#fff}.ATLP_structure_1.ATLP_skin_3.ATLP_shape_1 .slotInfo_price{color:#ffde00}.ATLP_structure_1.ATLP_skin_3.ATLP_shape_1 .ATLP_panNum.on{background:#198be5}.ATLP_structure_1.ATLP_skin_3.ATLP_shape_1 .ATLP_foot{background:url("images/bg_product_info1_2.gif") repeat-x}.ATLP_structure_1.ATLP_skin_3.ATLP_shape_2 .ATLP_slotBox.on .ATLP_slotBorder{border-color:#ff0000}.ATLP_structure_1.ATLP_skin_3.ATLP_shape_2 .ATLP_coursor{background:url("images/arrow_con2_3.png") no-repeat}.ATLP_structure_1.ATLP_skin_3.ATLP_shape_2 .slotInfo_product{color:#fff}.ATLP_structure_1.ATLP_skin_3.ATLP_shape_2 .slotInfo_price{color:#ffde00}.ATLP_structure_1.ATLP_skin_3.ATLP_shape_2 .ATLP_foot{background:url("images/bg_product_info2_2.gif") repeat}';
			}
		}else if (structure==2){ // 구조:일체구조
			ATLP_CSS+='.ATLP_structure_2 .ATLP_maskLayer{z-index:1;display:none}';
			if (shape==1){ // 형태:와이드형
				ATLP_CSS+='.ATLP_structure_2.ATLP_shape_1 .ATLP_head{height:30px}.ATLP_structure_2.ATLP_shape_1 .ATLP_head .ATLP_biLogo{left:6px;top:6px}.ATLP_structure_2.ATLP_shape_1 .ATLP_head .ATLP_biLogo img{height:18px;width:auto}.ATLP_structure_2.ATLP_shape_1 .ATLP_ad_link{right:4px;top:6px}.ATLP_structure_2.ATLP_shape_1 .ATLP_slotBox{float:left;position:relative;padding:3px !important}.ATLP_structure_2.ATLP_shape_1 .ATLP_slotInfo{position:relative}.ATLP_structure_2.ATLP_shape_1 .slotInfo_button{display:none;width:78px;height:28px;background:url("images/btn_buynow_on_3.png") no-repeat center}.ATLP_structure_2.ATLP_shape_1 .slotInfo_product{max-height:30px;padding:3px 3px 0px !important}';
				if (!isMobile){ATLP_CSS+='.ATLP_structure_2.ATLP_shape_1 .ATLP_slotBox:hover .slotInfo_button{display:block}.ATLP_structure_2.ATLP_shape_1 .ATLP_slotBox:hover .slotInfo_product{display:none}.ATLP_structure_2.ATLP_shape_1 .ATLP_slotBox:hover .slotInfo_price{display:none}';}
			}else if (shape==2){ // 형태:사각형
				ATLP_CSS+='.ATLP_structure_2.ATLP_shape_2 .ATLP_head{height:34px}.ATLP_structure_2.ATLP_shape_2 .ATLP_head .ATLP_biLogo{left:6px;top:7px}.ATLP_structure_2.ATLP_shape_2 .ATLP_head .ATLP_biLogo img{height:20px;width:auto}.ATLP_structure_2.ATLP_shape_2 .ATLP_ad_link{right:4px;top:9px}.ATLP_structure_2.ATLP_shape_2 .ATLP_slotBox{float:left;position:relative;padding:3px !important}.ATLP_structure_2.ATLP_shape_2 .ATLP_slotInfo{position:relative}.ATLP_structure_2.ATLP_shape_2 .slotInfo_button{width:78px;height:28px;background:url("images/btn_buynow_off_3.png") no-repeat center}.ATLP_structure_2.ATLP_shape_2 .ATLP_slotBox.on .slotInfo_button{background:url("images/btn_buynow_on_3.png") no-repeat center}.ATLP_structure_2.ATLP_shape_2 .slotInfo_product{max-height:30px;padding:3px 3px 0px !important}.ATLP_structure_2.ATLP_shape_2 .slotInfo_price{padding:0 0 3px !important}';
			}else if (shape==3){ // 형태:스카이형
				ATLP_CSS+='.ATLP_structure_2.ATLP_shape_3 .ATLP_head{height:47px}.ATLP_structure_2.ATLP_shape_3 .ATLP_head .ATLP_biLogo{left:6px;top:13px}.ATLP_structure_2.ATLP_shape_3 .ATLP_head .ATLP_biLogo img{height:22px;width:auto}.ATLP_structure_2.ATLP_shape_3 .ATLP_ad_link{right:4px;top:9px}.ATLP_structure_2.ATLP_shape_3 .ATLP_slotBox{position:relative;padding:3px !important}.ATLP_structure_2.ATLP_shape_3 .ATLP_slotInfo{position:relative}.ATLP_structure_2.ATLP_shape_3 .slotInfo_button{width:78px;height:28px;background:url("images/btn_buynow_off_3.png") no-repeat center}.ATLP_structure_2.ATLP_shape_3 .ATLP_slotBox.on .slotInfo_button{background:url("images/btn_buynow_on_3.png") no-repeat center}.ATLP_structure_2.ATLP_shape_3 .slotInfo_product{padding:0px 3px 0px !important;max-height:30px}.ATLP_structure_2.ATLP_shape_3 .slotInfo_price{padding:3px 0 !important}';
			}else if (shape==4){ // 형태:라인형
				ATLP_CSS+='.ATLP_structure_2.ATLP_shape_4{min-width:320px}.ATLP_structure_2.ATLP_shape_4 .ATLP_head{float:left;width:100px;height:100%}.ATLP_structure_2.ATLP_shape_4 .ATLP_head .ATLP_biLogo{left:0;top:50%;width:100%;text-align:center}.ATLP_structure_2.ATLP_shape_4 .ATLP_head .ATLP_biLogo img{height:auto;width:90%}.ATLP_structure_2.ATLP_shape_4 .ATLP_body{float:left}.ATLP_structure_2.ATLP_shape_4 .ATLP_ad_link{top:2px;left:80px}.ATLP_structure_2.ATLP_shape_4 .ATLP_slotBox{float:left;position:relative;padding:3px !important}.ATLP_structure_2.ATLP_shape_4 .ATLP_slotThum{float:left}.ATLP_structure_2.ATLP_shape_4 .ATLP_slotInfo{float:left;position:relative}.ATLP_structure_2.ATLP_shape_4 .slotInfo_product{padding:0 3px !important;max-height:30px}.ATLP_structure_2.ATLP_shape_4 .slotInfo_price{display:none;white-space:nowrap;font-size:12px;line-height:30px;padding:0 3px !important}.ATLP_structure_2.ATLP_shape_4 .slotInfo_button{display:none}';
				if (!isMobile){ATLP_CSS+='.ATLP_structure_2.ATLP_shape_4 .ATLP_ad_link:hover{margin-left:-76px}';}
			}else if (shape==5){ // 형태:라인형(1슬롯)
				ATLP_CSS+='.ATLP_structure_2.ATLP_shape_5 .ATLP_head{float:left;width:100px;height:100%}.ATLP_structure_2.ATLP_shape_5 .ATLP_head .ATLP_biLogo{left:0;top:50%;width:100%;text-align:center}.ATLP_structure_2.ATLP_shape_5 .ATLP_head .ATLP_biLogo img{height:auto;width:90%}.ATLP_structure_2.ATLP_shape_5 .ATLP_body{float:left}.ATLP_structure_2.ATLP_shape_5 .ATLP_ad_link{top:2px;left:80px}.ATLP_structure_2.ATLP_shape_5 .ATLP_slotBox{float:left;position:relative;padding:3px !important}.ATLP_structure_2.ATLP_shape_5 .ATLP_slotThum{float:left}.ATLP_structure_2.ATLP_shape_5 .ATLP_slotInfo{float:left;position:relative}.ATLP_structure_2.ATLP_shape_5 .slotInfo_product{padding:0 3px !important;max-height:30px}.ATLP_structure_2.ATLP_shape_5 .slotInfo_price{display:none;white-space:nowrap;line-height:30px}.ATLP_structure_2.ATLP_shape_5 .slotInfo_button{display:none}.ATLP_structure_2.ATLP_shape_5 .ATLP_slotBorder{display:none}';
				if (!isMobile){ATLP_CSS+='.ATLP_structure_2.ATLP_shape_5 .ATLP_ad_link:hover{margin-left:-76px}';}
			}else if (shape==6){ // 형태:사각형(2줄)
				ATLP_CSS+='.ATLP_structure_2.ATLP_shape_6{border:1px solid #e1e1e1}.ATLP_structure_2.ATLP_shape_6 .ATLP_head{height:24px}.ATLP_structure_2.ATLP_shape_6 .ATLP_head .ATLP_biLogo{left:5px;top:5px}.ATLP_structure_2.ATLP_shape_6 .ATLP_head .ATLP_biLogo img{height:14px;width:auto}.ATLP_structure_2.ATLP_shape_6.ATLP_skin_1 .ATLP_body{background:#fff}.ATLP_structure_2.ATLP_shape_6 .ATLP_ad_link{right:5px;top:3px}.ATLP_structure_2.ATLP_shape_6 .ATLP_slot_wrap{position:relative}.ATLP_structure_2.ATLP_shape_6 .ATLP_slotBox{position:absolute;border:0}.ATLP_structure_2.ATLP_shape_6 .ATLP_slotThum img{position:relative}.ATLP_structure_2.ATLP_shape_6 .ATLP_slotInfo{display:none;z-index:2;position:absolute;left:0;top:0}.ATLP_structure_2.ATLP_shape_6 .slotInfo_button{position:relative;width:78px;height:28px;background:url("images/btn_buynow_on_3.png") no-repeat}.ATLP_structure_2.ATLP_shape_6 .slotInfo_product{position:relative;padding:3px 10px 0px !important;max-height:46px}.ATLP_structure_2.ATLP_shape_6 .slotInfo_price{position:relative;padding:3px 4px !important;color:#f00}.ATLP_structure_2.ATLP_shape_6 .ATLP_maskLayer{background:#fff}.ATLP_structure_2.ATLP_shape_6 .ATLP_slotBorder{display:none}.ATLP_structure_2.ATLP_shape_6 .ATLP_btn{width:18px}.ATLP_structure_2.ATLP_shape_6 .ATLP_btn_left{left:0px;background:url("images/btn_arrow_l_3.png") no-repeat center}.ATLP_structure_2.ATLP_shape_6 .ATLP_btn_right{right:0px;background:url("images/btn_arrow_r_3.png") no-repeat center}';
			}else if (shape==7){ // 형태:와이드형(썸네일내부)
				ATLP_CSS+='.ATLP_structure_2.ATLP_shape_7{border:1px solid #e1e1e1}.ATLP_structure_2.ATLP_shape_7 .ATLP_head{height:22px}.ATLP_structure_2.ATLP_shape_7 .ATLP_head .ATLP_biLogo{left:7px;top:3px}.ATLP_structure_2.ATLP_shape_7 .ATLP_head .ATLP_biLogo img{height:16px;width:auto}.ATLP_structure_2.ATLP_shape_7 .ATLP_ad_link{right:4px;top:3px}.ATLP_structure_2.ATLP_shape_7 .ATLP_banner_box{padding-top:3px !important}.ATLP_structure_2.ATLP_shape_7 .ATLP_slotBox{position:relative;float:left;border:0}.ATLP_structure_2.ATLP_shape_7 .ATLP_slotBorder{z-index:2;display:none;left:0;top:0;border-color:#fd0c89}.ATLP_structure_2.ATLP_shape_7 .ATLP_slotBox.on .ATLP_slotBorder{display:block}.ATLP_structure_2.ATLP_shape_7 .ATLP_maskLayer{background:#000}.ATLP_structure_2.ATLP_shape_7 .ATLP_slotBox.on .ATLP_maskLayer{display:block}.ATLP_structure_2.ATLP_shape_7 .ATLP_slotThum img{position:relative}.ATLP_structure_2.ATLP_shape_7 .ATLP_slotInfo{display:none;z-index:2;position:absolute;left:0;top:0;width:100%}.ATLP_structure_2.ATLP_shape_7 .ATLP_slotBox.on .ATLP_slotInfo{display:block}.ATLP_structure_2.ATLP_shape_7 .slotInfo_product{padding:0 6px !important;max-height:30px;color:#fff}.ATLP_structure_2.ATLP_shape_7 .slotInfo_price{font-size:12px;padding:4px 4px !important;color:#f00}.ATLP_structure_2.ATLP_shape_7 .slotInfo_button{width:78px;height:28px;background:url("images/btn_buynow_on_3.png") no-repeat}.ATLP_structure_2.ATLP_shape_7 .ATLP_btn{top:1px;width:20px;height:19px}.ATLP_structure_2.ATLP_shape_7 .ATLP_btn_left{right:55px;background:url("images/btn_arrow_l_3.png") no-repeat center}.ATLP_structure_2.ATLP_shape_7 .ATLP_btn_right{right:30px;background:url("images/btn_arrow_r_3.png") no-repeat center}';
			}else if (shape==8){ // 형태:라인형(썸네일내부)
				ATLP_CSS+='.ATLP_structure_2.ATLP_shape_8{border:1px solid #e1e1e1}.ATLP_structure_2.ATLP_shape_8 .ATLP_head{float:left;width:92px;height:100%}.ATLP_structure_2.ATLP_shape_8 .ATLP_head .ATLP_biLogo{left:0;top:50%;width:100%;text-align:center}.ATLP_structure_2.ATLP_shape_8 .ATLP_head .ATLP_biLogo img{height:auto;width:88%}.ATLP_structure_2.ATLP_shape_8 .ATLP_body{float:left}.ATLP_structure_2.ATLP_shape_8 .ATLP_ad_link{top:4px;left:72px}.ATLP_structure_2.ATLP_shape_8 .ATLP_slotBox{float:left;position:relative;border:0}.ATLP_structure_2.ATLP_shape_8 .ATLP_slotThum{position:absolute;left:0}.ATLP_structure_2.ATLP_shape_8 .ATLP_slotThum img{position:relative}.ATLP_structure_2.ATLP_shape_8 .ATLP_slotBorder{z-index:2;display:none;left:0;top:0;border-color:#fd0c89}.ATLP_structure_2.ATLP_shape_8 .ATLP_slotBox.on .ATLP_slotBorder{display:block}.ATLP_structure_2.ATLP_shape_8 .ATLP_slotInfo{display:none;z-index:2;position:absolute;left:0;top:0;width:100%}.ATLP_structure_2.ATLP_shape_8 .ATLP_slotBox.on .ATLP_slotInfo{display:block}.ATLP_structure_2.ATLP_shape_8 .slotInfo_product{max-height:30px;padding:3px 6px 0 !important;color:#fff}.ATLP_structure_2.ATLP_shape_8 .slotInfo_price{padding:4px 4px !important;color:#f00;font-size:12px}.ATLP_structure_2.ATLP_shape_8 .slotInfo_button{width:78px;height:28px;background:url("images/btn_buynow_on_3.png") no-repeat}.ATLP_structure_2.ATLP_shape_8 .ATLP_maskLayer{background:#000}.ATLP_structure_2.ATLP_shape_8 .ATLP_slotBox.on .ATLP_maskLayer{display:block}.ATLP_structure_2.ATLP_shape_8 .ATLP_btn{bottom:6px;width:20px;height:19px}.ATLP_structure_2.ATLP_shape_8 .ATLP_btn_left{left:22px;background:url("images/btn_arrow_l_3.png") no-repeat center}.ATLP_structure_2.ATLP_shape_8 .ATLP_btn_right{left:50px;background:url("images/btn_arrow_r_3.png") no-repeat center}';
				if (!isMobile){ATLP_CSS+='.ATLP_structure_2.ATLP_shape_8 .ATLP_ad_link:hover{margin-left:-55px}';}
			}else if (shape==9){ // 형태:라인형(썸네일내부 2줄)
				ATLP_CSS+='.ATLP_structure_2.ATLP_shape_9{border:1px solid #e1e1e1}.ATLP_structure_2.ATLP_shape_9 .ATLP_head{float:left;width:92px;height:100%}.ATLP_structure_2.ATLP_shape_9 .ATLP_head .ATLP_biLogo{left:0;top:50%;width:100%;text-align:center}.ATLP_structure_2.ATLP_shape_9 .ATLP_head .ATLP_biLogo img{height:auto;width:88%}.ATLP_structure_2.ATLP_shape_9 .ATLP_body{float:left}.ATLP_structure_2.ATLP_shape_9 .ATLP_ad_link{top:4px;left:72px}.ATLP_structure_2.ATLP_shape_9 .ATLP_slotBox{float:left;position:relative;border:0}.ATLP_structure_2.ATLP_shape_9 .ATLP_slotThum{position:absolute;left:0}.ATLP_structure_2.ATLP_shape_9 .ATLP_slotThum img{position:relative}.ATLP_structure_2.ATLP_shape_9 .ATLP_slotBorder{z-index:2;display:none;left:0;top:0;border-color:#fd0c89}.ATLP_structure_2.ATLP_shape_9 .ATLP_slotBox.on .ATLP_slotBorder{display:block}.ATLP_structure_2.ATLP_shape_9 .ATLP_slotInfo{display:none;z-index:2;position:absolute;left:0;top:0}.ATLP_structure_2.ATLP_shape_9 .ATLP_slotBox.on .ATLP_slotInfo{display:block}.ATLP_structure_2.ATLP_shape_9 .slotInfo_button{display:none}.ATLP_structure_2.ATLP_shape_9 .slotInfo_product{padding:0 4px !important;max-height:13px;color:#fff}.ATLP_structure_2.ATLP_shape_9 .slotInfo_price{padding:4px 4px !important;color:#f00;font-size:12px}.ATLP_structure_2.ATLP_shape_9 .ATLP_maskLayer{background:#000}.ATLP_structure_2.ATLP_shape_9 .ATLP_slotBox.on .ATLP_maskLayer{display:block}.ATLP_structure_2.ATLP_shape_9 .ATLP_btn{bottom:6px;width:20px;height:19px}.ATLP_structure_2.ATLP_shape_9 .ATLP_btn_left{left:22px;background:url("images/btn_arrow_l_3.png") no-repeat center}.ATLP_structure_2.ATLP_shape_9 .ATLP_btn_right{left:50px;background:url("images/btn_arrow_r_3.png") no-repeat center}';
				if (!isMobile){ATLP_CSS+='.ATLP_structure_2.ATLP_shape_9 .ATLP_ad_link:hover{margin-left:-55px}';}
			}else if (shape==10){ // 형태:스카이형(썸네일내부)
				ATLP_CSS+='.ATLP_structure_2.ATLP_shape_10{border:1px solid #e1e1e1}.ATLP_structure_2.ATLP_shape_10 .ATLP_head{height:50px}.ATLP_structure_2.ATLP_shape_10 .ATLP_head .ATLP_biLogo{left:11px;top:20px;width:82%;text-align:center}.ATLP_structure_2.ATLP_shape_10 .ATLP_head .ATLP_biLogo img{height:22px;width:auto;max-width:94%}.ATLP_structure_2.ATLP_shape_10 .ATLP_ad_link{right:3px;top:3px}.ATLP_structure_2.ATLP_shape_10 .ATLP_slotBox{position:relative;border:0}.ATLP_structure_2.ATLP_shape_10 .ATLP_slotBorder{z-index:2;display:none;left:0;top:0;border-color:#fd0c89}.ATLP_structure_2.ATLP_shape_10 .ATLP_slotBox.on .ATLP_slotBorder{display:block}.ATLP_structure_2.ATLP_shape_10 .ATLP_slotThum img{position:relative}.ATLP_structure_2.ATLP_shape_10 .ATLP_slotInfo{display:none;z-index:2;position:absolute;left:0;top:0}.ATLP_structure_2.ATLP_shape_10 .ATLP_slotBox.on .ATLP_slotInfo{display:block}.ATLP_structure_2.ATLP_shape_10 .slotInfo_product{padding:3px 10px 0px !important;max-height:30px;color:#fff}.ATLP_structure_2.ATLP_shape_10 .slotInfo_price{padding:4px 4px !important;color:#f00}.ATLP_structure_2.ATLP_shape_10 .slotInfo_button{width:78px;height:28px;background:url("images/btn_buynow_on_3.png") no-repeat}.ATLP_structure_2.ATLP_shape_10 .ATLP_maskLayer{background:#000}.ATLP_structure_2.ATLP_shape_10 .ATLP_slotBox.on .ATLP_maskLayer{display:block}.ATLP_structure_2.ATLP_shape_10 .ATLP_btn{bottom:4px;width:20px;height:19px}.ATLP_structure_2.ATLP_shape_10 .ATLP_btn_left{left:30%;background:url("images/btn_arrow_l_3.png") no-repeat center}.ATLP_structure_2.ATLP_shape_10 .ATLP_btn_right{right:30%;background:url("images/btn_arrow_r_3.png") no-repeat center}';
			}
			// 스킨 설정
			if (skinType==1){
				ATLP_CSS+='.ATLP_structure_2.ATLP_skin_1 .ATLP_slotBox.on .ATLP_slotBorder{border-color:#fd0c89}.ATLP_structure_2.ATLP_skin_1 .slotInfo_product{color:#3a3a3a}.ATLP_structure_2.ATLP_skin_1.ATLP_shape_7 .ATLP_body{background:#fff}.ATLP_structure_2.ATLP_skin_1.ATLP_shape_7 .slotInfo_product{color:#fff}.ATLP_structure_2.ATLP_skin_1.ATLP_shape_8 .slotInfo_product{color:#fff}.ATLP_structure_2.ATLP_skin_1.ATLP_shape_9 .slotInfo_product{color:#fff}.ATLP_structure_2.ATLP_skin_1.ATLP_shape_10 .slotInfo_product{color:#fff}.ATLP_structure_2.ATLP_skin_1 .slotInfo_price{color:#a1a1a1}.ATLP_structure_2.ATLP_skin_1 .ATLP_slotBox.on .slotInfo_price{color:#f00}';
			}else if (skinType==2){
				ATLP_CSS+='.ATLP_structure_2.ATLP_skin_2 .ATLP_slotBox.on .ATLP_slotBorder{border-color:#2ca8ff}.ATLP_structure_2.ATLP_skin_2 .slotInfo_product{color:#3a3a3a}.ATLP_structure_2.ATLP_skin_2.ATLP_shape_7 .slotInfo_product{color:#fff}.ATLP_structure_2.ATLP_skin_2.ATLP_shape_8 .slotInfo_product{color:#fff}.ATLP_structure_2.ATLP_skin_2.ATLP_shape_9 .slotInfo_product{color:#fff}.ATLP_structure_2.ATLP_skin_2.ATLP_shape_10 .slotInfo_product{color:#fff}.ATLP_structure_2.ATLP_skin_2 .slotInfo_price{color:#a1a1a1}.ATLP_structure_2.ATLP_skin_2 .ATLP_slotBox.on .slotInfo_price{color:#2ca8ff}.ATLP_structure_2.ATLP_skin_2.ATLP_shape_6 .ATLP_slotBox.on .slotInfo_price{color:#f00}.ATLP_structure_2.ATLP_skin_2 .ATLP_maskLayer{background:#888}.ATLP_structure_2.ATLP_skin_2.ATLP_shape_6 .ATLP_maskLayer{background:#fff}.ATLP_structure_2.ATLP_skin_2.ATLP_shape_7 .ATLP_maskLayer{background:#000}.ATLP_structure_2.ATLP_skin_2.ATLP_shape_8 .ATLP_maskLayer{background:#000}.ATLP_structure_2.ATLP_skin_2.ATLP_shape_10 .ATLP_maskLayer{background:#000}';
			}
		}else if (structure==3){ // 구조:카드구조
			ATLP_CSS+='.ATLP_structure_3 .ATLP_ad_link{right:4px;top:4px}.ATLP_structure_3 .ATLP_maskLayer{display:none}.ATLP_structure_3 .ATLP_slotBox{position:absolute;padding:3px !important;border:1px solid #e1e1e1;background:#fff;transition: transform .2s linear;-webkit-transition: -webkit-transform .2s linear;transform-origin: center;-webkit-transform-origin: center;}.ATLP_structure_3 .ATLP_slotBox.on{z-index:21 !important;transform-origin: center}.ATLP_structure_3 .ATLP_slotBox.af{transform-origin: center;-webkit-transform-origin: center}.ATLP_structure_3 .slotInfo_product{line-height:1.3;color:#3a3a3a}';
			if (shape==1){ // 형태:와이드형
				ATLP_CSS+='.ATLP_structure_3.ATLP_shape_1 .ATLP_head{height:30px}.ATLP_structure_3.ATLP_shape_1 .ATLP_head .ATLP_biLogo{left:6px;top:6px}.ATLP_structure_3.ATLP_shape_1 .ATLP_head .ATLP_biLogo img{height:18px;width:auto}.ATLP_structure_3.ATLP_shape_1 .ATLP_slotBox{left:100%;box-shadow: 0px 10px 20px rgba(0,0,0,0.6);transform: perspective(180px) rotateY(-20deg) scale(0.75,0.75);-webkit-transform: perspective(180px) rotateY(-20deg) scale(0.75,0.75)}.ATLP_structure_3.ATLP_shape_1 .ATLP_slotBox.on{transform: perspective(1800px) rotateY(0deg);-webkit-transform: perspective(1800px) rotateY(0deg)}.ATLP_structure_3.ATLP_shape_1 .ATLP_slotBox.af{transform: perspective(180px) rotateY(20deg) scale(0.75,0.75);-webkit-transform: perspective(180px) rotateY(20deg) scale(0.75,0.75)}.ATLP_structure_3.ATLP_shape_1 .ATLP_slotThum{float:right}.ATLP_structure_3.ATLP_shape_1 .ATLP_slotInfo{float:left;position:relative}.ATLP_structure_3.ATLP_shape_1 .slotInfo_product{max-height:46px;padding:0 4px !important}.ATLP_structure_3.ATLP_shape_1 .slotInfo_price{padding:3px 0 !important}.ATLP_structure_3.ATLP_shape_1 .slotInfo_button{width:78px;height:28px;background:url("images/btn_buynow_on_3.png") no-repeat center}.ATLP_structure_3.ATLP_shape_1 .ATLP_slotBox.on .ATLP_slotThum,.ATLP_structure_3.ATLP_shape_1 .ATLP_slotBox.af .ATLP_slotThum{float:left}.ATLP_structure_3.ATLP_shape_1 .ATLP_slotBox.on .ATLP_slotInfo,.ATLP_structure_3.ATLP_shape_1 .ATLP_slotBox.af .ATLP_slotInfo{float:right}';
			}else if (shape==2){ // 형태:사각형
				ATLP_CSS+='.ATLP_structure_3.ATLP_shape_2 .ATLP_head{height:34px}.ATLP_structure_3.ATLP_shape_2 .ATLP_head .ATLP_biLogo{left:8px;top:7px}.ATLP_structure_3.ATLP_shape_2 .ATLP_head .ATLP_biLogo img{height:20px;width:auto}.ATLP_structure_3.ATLP_shape_2 .ATLP_slotBox{left:0;top:100%;box-shadow: 0px 10px 20px rgba(0,0,0,0.6);transform: perspective(180px) rotateY(-20deg) scale(0.82,0.82);-webkit-transform: perspective(180px) rotateY(-20deg) scale(0.82,0.82)}.ATLP_structure_3.ATLP_shape_2 .ATLP_slotBox.on{transform: perspective(1800px) rotateY(0deg);-webkit-transform: perspective(1800px) rotateY(0deg)}.ATLP_structure_3.ATLP_shape_2 .ATLP_slotBox.af{transform: perspective(180px) rotateY(20deg) scale(0.82,0.82);-webkit-transform: perspective(180px) rotateY(20deg) scale(0.82,0.82)}.ATLP_structure_3.ATLP_shape_2 .ATLP_slotInfo{position:relative}.ATLP_structure_3.ATLP_shape_2 .slotInfo_product{max-height:30px;padding:3px 3px 0 !important}.ATLP_structure_3.ATLP_shape_2 .slotInfo_button{width:78px;height:28px;background:url("images/btn_buynow_off_3.png") no-repeat center}.ATLP_structure_3.ATLP_shape_2 .ATLP_slotBox.on .slotInfo_button{background:url("images/btn_buynow_on_3.png") no-repeat center}.ATLP_structure_3.ATLP_shape_2 .slotInfo_price{padding:3px 0 !important}';
			}else if (shape==3){ // 형태:스카이형
				ATLP_CSS+='.ATLP_structure_3.ATLP_shape_3 .ATLP_head{height:46px}.ATLP_structure_3.ATLP_shape_3 .ATLP_head .ATLP_biLogo{left:0px;top:16px;width:100%;text-align:center}.ATLP_structure_3.ATLP_shape_3 .ATLP_head .ATLP_biLogo img{height:20px;width:auto;max-width:96%}.ATLP_structure_3.ATLP_shape_3 .ATLP_slotBox{left:0;top:100%;box-shadow: 0px 0px 20px rgba(0,0,0,0.6);transform: perspective(180px) rotateX(20deg) scale(0.75,0.75);-webkit-transform: perspective(180px) rotateX(20deg) scale(0.75,0.75)}.ATLP_structure_3.ATLP_shape_3 .ATLP_slotBox.on{transform: perspective(1800px) rotateX(0deg);-webkit-transform: perspective(1800px) rotateX(0deg)}.ATLP_structure_3.ATLP_shape_3 .ATLP_slotBox.af{transform: perspective(180px) rotateX(-20deg) scale(0.75,0.75);-webkit-transform: perspective(180px) rotateX(-20deg) scale(0.75,0.75)}.ATLP_structure_3.ATLP_shape_3 .ATLP_slotThum{position:absolute;left:3px;bottom:3px}.ATLP_structure_3.ATLP_shape_3 .ATLP_slotInfo{position:absolute;left:3px;top:3px}.ATLP_structure_3.ATLP_shape_3 .slotInfo_product{max-height:30px;padding:4px 4px 0 !important}.ATLP_structure_3.ATLP_shape_3 .slotInfo_price{padding:3px 0 !important}.ATLP_structure_3.ATLP_shape_3 .slotInfo_button{width:78px;height:28px;background:url("images/btn_buynow_off_3.png") no-repeat center}.ATLP_structure_3.ATLP_shape_3 .ATLP_slotBox.on .slotInfo_button{background:url("images/btn_buynow_on_3.png") no-repeat center}.ATLP_structure_3.ATLP_shape_3 .ATLP_slotBox.on .ATLP_slotThum,.ATLP_structure_3.ATLP_shape_3 .ATLP_slotBox.af .ATLP_slotThum{top:3px;bottom:auto}.ATLP_structure_3.ATLP_shape_3 .ATLP_slotBox.on .ATLP_slotInfo,.ATLP_structure_3.ATLP_shape_3 .ATLP_slotBox.af .ATLP_slotInfo{top:auto;bottom:3px}';
			}
			// 스킨 설정
			if (skinType==1){
				ATLP_CSS+='.ATLP_structure_3.ATLP_skin_1 .ATLP_slotBox.on .ATLP_slotBorder{border-color:#fd0c89}.ATLP_structure_3.ATLP_skin_1 .slotInfo_product{color:#3a3a3a}.ATLP_structure_3.ATLP_skin_1 .slotInfo_price{color:#a1a1a1}.ATLP_structure_3.ATLP_skin_1 .ATLP_slotBox.on .slotInfo_price{color:#f00}';
			}else if (skinType==2){
				ATLP_CSS+='.ATLP_structure_3.ATLP_skin_2 .ATLP_slotBox.on .ATLP_slotBorder{border-color:#0c9ffd}.ATLP_structure_3.ATLP_skin_2 .slotInfo_product{color:#3a3a3a}.ATLP_structure_3.ATLP_skin_2 .slotInfo_price{color:#0c9ffd}.ATLP_structure_3.ATLP_skin_2 .ATLP_slotBox.on .slotInfo_price{color:#0c9ffd}';
			}
		}
		// CSS <head> 태그 삽입
			ATLP_CSS='<style type="text/css">'+ATLP_CSS+'</style>';
			$('head').append(ATLP_CSS);

	// 기본 틀(DOM) 설정
	function setBaseDOM(){
		var baseHtml = '';
		baseHtml+='<div class="targetviewLinkStyleBanner">';
		baseHtml+='<div class="ATLP_head">';
		baseHtml+='<div class="ATLP_biLogo"><img src="images/adlogo1.png" alt="광고주로고"></div>';
		baseHtml+='</div>';

		if (structure==1){baseHtml+='<div class="ATLP_foot"></div>';}

		baseHtml+='<div class="ATLP_body">';
		baseHtml+='<div class="ATLP_banner_box">';
		// 분리구조의 슬롯 정보 영역
		if (structure==1){
			baseHtml+='<div class="ATLP_Info_wrap">';
			baseHtml+='<a href="'+_matInfo[0].landurl+'" target="_blank" class="ATLP_slotAnchor">';
			baseHtml+='<div class="slotInfo_product">'+_matInfo[0].txt+'</div>';
			baseHtml+='<div class="slotInfo_price">'+_matInfo[0].price+'</div>';
			baseHtml+='<div class="slotInfo_button">구매하기</div>';
			baseHtml+='</a>';
			baseHtml+='<div class="ATLP_coursor">focus</div>';
			baseHtml+='</div>';
		}
		baseHtml+='</div>';
		baseHtml+='</div>';

		// 버튼 유무 설정
		if (structure==1){
			baseHtml+='<button class="ATLP_btn ATLP_btn_left" type="button">left move</button>';
			baseHtml+='<button class="ATLP_btn ATLP_btn_right" type="button">right move</button>';
		}else if (structure==2&&shape==6||shape==7||shape==8||shape==9||shape==10){
			baseHtml+='<button class="ATLP_btn ATLP_btn_left" type="button">left move</button>';
			baseHtml+='<button class="ATLP_btn ATLP_btn_right" type="button">right move</button>';
		}
		// 판 리스트 설정
		if (structure==1&&shape==1){
			baseHtml+='<div class="ATLP_panList">';
			baseHtml+='</div>';
		}

		baseHtml+='<a href="" class="ATLP_ad_link">광고안내</a>';
		baseHtml+='</div>';
		return baseHtml;
	}
	$bannerID.html(setBaseDOM()); // 틀 생성
	var $bannerArea=$bannerID.find('.targetviewLinkStyleBanner'); // 배너 영역

	// 클래스 삽입
		switch (structure){
			case '1': $bannerArea.addClass('ATLP_structure_1'); break;
			case '2': $bannerArea.addClass('ATLP_structure_2'); break;
			case '3': $bannerArea.addClass('ATLP_structure_3'); break;
			default : alert('구조가 설정되지 않았습니다.');
		}
		switch (shape){
			case '1': $bannerArea.addClass('ATLP_shape_1'); break;
			case '2': $bannerArea.addClass('ATLP_shape_2'); break;
			case '3': $bannerArea.addClass('ATLP_shape_3'); break;
			case '4': $bannerArea.addClass('ATLP_shape_4'); break;
			case '5': $bannerArea.addClass('ATLP_shape_5'); break;
			case '6': $bannerArea.addClass('ATLP_shape_6'); break;
			case '7': $bannerArea.addClass('ATLP_shape_7'); break;
			case '8': $bannerArea.addClass('ATLP_shape_8'); break;
			case '9': $bannerArea.addClass('ATLP_shape_9'); break;
			case '10': $bannerArea.addClass('ATLP_shape_10'); break;
			default : alert('형태가 설정되지 않았습니다.');
		}
		switch (skinType){
			case '0': $bannerArea.addClass('ATLP_skin_0'); 
				// 버튼 스타일
				if (btnType==1){
					$bannerArea.addClass('ATLP_btn1');
				}else if(btnType==2){
					$bannerArea.addClass('ATLP_btn2');
				}else if(btnType==3){
					$bannerArea.addClass('ATLP_btn3');
				}
				break;
			case '1': $bannerArea.addClass('ATLP_skin_1'); break;
			case '2': $bannerArea.addClass('ATLP_skin_2'); break;
			case '3': 
				if (structure==1){
					$bannerArea.addClass('ATLP_skin_3');
				}else{
					alert('해당 구조는 대상 스킨이 없습니다.');
				}
				break;
			default : alert('스킨 타입이 설정되지 않았습니다.');
		}

	// 영역 크기 조절, 영역 값 설정
	function setBaseSize(){
		headWidth=$bannerArea.find('.ATLP_head').width();
		headHeight=$bannerArea.find('.ATLP_head').height();
		footWidth=$bannerArea.find('.ATLP_foot').width();
		footHeight=$bannerArea.find('.ATLP_foot').height();
		btnWidth=$bannerArea.find('.ATLP_btn').width();
		infoPriceWidth=$bannerArea.find('.ATLP_Info_wrap .slotInfo_price').outerWidth();
		infoButtonWidth=$bannerArea.find('.ATLP_Info_wrap .slotInfo_button').width();
		$bannerArea.css({width:areaWidth+'px',height:areaHeight+'px'});

		if (structure==1){ // 분리구조
			if (shape==1){ // 와이드형
				slotHeight=areaHeight-(headHeight+footHeight);
				slotWidth=slotHeight;
				bannerBoxWidth=areaWidth-(btnWidth*2);
				bannerBoxHeight=areaHeight-headHeight;
				slotWrapWidth=areaWidth-(btnWidth*2);
				slotWrapHeight=areaHeight-(headHeight+footHeight);
				$bannerArea.find('.ATLP_body').css({width:areaWidth+'px',height:areaHeight-headHeight+'px'});
				$bannerArea.find('.ATLP_btn').css({height:slotHeight+'px',top:headHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_Info_wrap').css({top:slotHeight+'px'})
					.find('.slotInfo_product').css({width:bannerBoxWidth-(infoPriceWidth+infoButtonWidth+6)+'px'});
				$bannerArea.find('.slotInfo_button').css({marginTop:(footHeight-$bannerArea.find('.slotInfo_button').height())/2});
				// 슬롯 & 판 설정
				slotNum=parseInt(bannerBoxWidth/slotWidth);
				// 슬롯 수량 제한
				if (slotNum>5) slotNum=5;
				// 판 수량 설정
				panNum=parseInt(matNum/slotNum);
				// 판 생성, 삽입
				for (i=0; i<panNum; i++){
					panObj=$('<button type="button" class="ATLP_panNum ATLP_panNum_'+(i+1)+'" value="'+(i+1)+'">'+(i+1)+'</button>');
					$bannerArea.find('.ATLP_panList').append(panObj);
				}
				$bannerArea.find('.ATLP_panNum:first').addClass('on');
				slotMarginW=parseInt(((bannerBoxWidth/slotNum) - slotWidth) / 2);
				// 포커스 커서 위치값
				coursorPos = bannerBoxWidth/slotNum;
				$bannerArea.find('.ATLP_coursor').css({left:(coursorPos/2)+'px'});
			}else if(shape==2){// 사각형
				slotHeight=areaHeight-(headHeight+footHeight)-28;
				slotWidth=slotHeight; // 센터 슬롯
				slotSecondSize=parseInt(slotHeight*0.82); // 중간 좌우 슬롯
				slotThirdSize=parseInt(slotHeight*0.66); // 가장자리 슬롯
				bannerBoxWidth=areaWidth;
				bannerBoxHeight=areaHeight-headHeight;
				slotWrapWidth=areaWidth-(btnWidth*2);
				slotWrapHeight=areaHeight-(headHeight+footHeight);
				$bannerArea.find('.ATLP_body').css({width:areaWidth+'px',height:areaHeight-headHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:areaHeight-headHeight+'px'});
				$bannerArea.find('.ATLP_btn').css({height:slotWrapHeight+'px',top:headHeight+'px'});
				$bannerArea.find('.slotInfo_product').css({width:bannerBoxWidth-infoButtonWidth-20+'px'});
				$bannerArea.find('.slotInfo_button').css({top:(footHeight-$bannerArea.find('.slotInfo_button').height())/2});
				// 슬롯 설정
				slotNum=5;
				$bannerArea.find('.ATLP_slot_wrap').css({width:areaWidth+'px',height:slotWrapHeight+'px'});
			}
		}else if(structure==2){ // 일체구조
			if (shape==1){ // 와이드
				slotHeight=areaHeight-headHeight;
				slotWidth=parseInt(slotHeight*0.82);
				bannerBoxWidth=areaWidth;
				bannerBoxHeight=areaHeight-headHeight;
				slotWrapWidth=areaWidth;
				slotWrapHeight=areaHeight-headHeight;
				$bannerArea.find('.ATLP_body').css({width:areaWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				// 슬롯 & 판 설정
				slotNum=parseInt(areaWidth/slotWidth);
				// 슬롯 수량 제한
				if (slotNum>5) slotNum=5;
				// 판 수량 설정
				panNum=parseInt(matNum/slotNum);
				slotMarginW=parseInt(((areaWidth/slotNum) - slotWidth) / 2);
			}else if (shape==2){ // 사각형
				slotHeight=areaHeight-headHeight;
				slotWidth=areaWidth/2;
				bannerBoxWidth=areaWidth;
				bannerBoxHeight=areaHeight-headHeight;
				slotWrapWidth=areaWidth;
				slotWrapHeight=areaHeight-headHeight;
				$bannerArea.find('.ATLP_body').css({width:areaWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				// 슬롯 & 판 설정
				slotNum=2;
				// 판 수량 설정
				panNum=matNum/slotNum;
			}else if (shape==3){ // 스카이
				slotHeight=parseInt((areaHeight-headHeight)/3);
				slotWidth=areaWidth;
				bannerBoxWidth=areaWidth;
				bannerBoxHeight=areaHeight-headHeight;
				slotWrapWidth=areaWidth;
				slotWrapHeight=areaHeight-headHeight;
				$bannerArea.find('.ATLP_body').css({width:areaWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				// 슬롯 & 판 설정
				slotNum=3;
				// 판 수량 설정
				panNum=3;
			}else if (shape==4){ // 라인형
				slotHeight=areaHeight;
				slotWidth=(areaWidth-headWidth)/2;
				bannerBoxWidth=areaWidth-headWidth;
				bannerBoxHeight=areaHeight;
				slotWrapWidth=bannerBoxWidth;
				slotWrapHeight=areaHeight;
				$bannerArea.find('.ATLP_body').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				// 슬롯 & 판 설정
				slotNum=2;
				// 판 수량 설정
				panNum=5;
				$bannerArea.find('img:last').load(function(){
					$bannerArea.find('.ATLP_biLogo').css({marginTop:'-'+$bannerArea.find('.ATLP_biLogo').height()/2+'px'});
				});
			}else if (shape==5){ // 라인형(1슬롯)
				slotHeight=areaHeight;
				slotWidth=areaWidth-headWidth;
				bannerBoxWidth=areaWidth-headWidth;
				bannerBoxHeight=areaHeight;
				slotWrapWidth=bannerBoxWidth;
				slotWrapHeight=areaHeight;
				$bannerArea.find('.ATLP_body').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				// 슬롯 & 판 설정
				slotNum=1;
				// 판 수량 설정
				panNum=10;
				$bannerArea.find('img:last').load(function(){
					$bannerArea.find('.ATLP_biLogo').css({marginTop:'-'+$bannerArea.find('.ATLP_biLogo').height()/2+'px'});
				});
			}else if (shape==6){ // 사각형(2줄)
				// 영역 보더 크기 제외
				areaWidth=areaWidth-2;
				areaHeight=areaHeight-2;
				// 영역 크기 재 설정
				$bannerArea.css({width:areaWidth+'px',height:areaHeight+'px'});
				bannerBoxWidth=areaWidth-(btnWidth*2);
				bannerBoxHeight=areaHeight-headHeight;
				slotWrapWidth=bannerBoxWidth;
				slotWrapHeight=bannerBoxHeight;
				slotHeight=bannerBoxHeight/2;
				slotWidth=slotHeight;
				// 슬롯 & 판 설정
				slotNum=parseInt(bannerBoxWidth/slotWidth)*2;
				// 판 수량 설정
				panNum=parseInt(matNum/slotNum);
				slotMarginW=parseInt(bannerBoxWidth-(slotWidth*(slotNum/2)))/(slotNum/2);
				$bannerArea.find('.ATLP_body').css({width:areaWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_btn').css({height:slotWrapHeight+'px',top:headHeight+'px'});
				delayTime=4000;
			}else if (shape==7){ // 와이드형(썸네일내부)
				// 영역 보더 크기 제외
				areaWidth=areaWidth-2;
				areaHeight=areaHeight-2;
				// 영역 크기 재 설정
				$bannerArea.css({width:areaWidth+'px',height:areaHeight+'px'});
				bannerBoxWidth=areaWidth;
				bannerBoxHeight=areaHeight-headHeight;
				slotWrapWidth=bannerBoxWidth;
				slotWrapHeight=bannerBoxHeight-6;
				slotHeight=slotWrapHeight;
				slotWidth=slotHeight;
				// 슬롯 & 판 설정
				slotNum=parseInt(bannerBoxWidth/slotWidth);
				// 판 수량 설정
				panNum=parseInt(matNum/slotNum);
				slotMarginW=parseInt((bannerBoxWidth-(slotWidth*slotNum))/slotNum);
				$bannerArea.find('.ATLP_body').css({width:areaWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
			}else if (shape==8){ // 라인형(썸네일내부)
				// 영역 보더 크기 제외
				areaWidth=areaWidth-2;
				areaHeight=areaHeight-2;
				// 영역 크기 재 설정
				$bannerArea.css({width:areaWidth+'px',height:areaHeight+'px'});
				bannerBoxWidth=areaWidth-headWidth;
				bannerBoxHeight=areaHeight;
				slotWrapWidth=bannerBoxWidth;
				slotWrapHeight=bannerBoxHeight;
				slotHeight=bannerBoxHeight;
				slotWidth=slotHeight;
				// 슬롯 & 판 설정
				slotNum=parseInt(bannerBoxWidth/slotWidth);
				// 판 수량 설정
				panNum=parseInt(matNum/slotNum);
				slotMarginW=parseInt((bannerBoxWidth-(slotWidth*slotNum))/slotNum);
				$bannerArea.find('.ATLP_body').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('img:last').load(function(){
					$bannerArea.find('.ATLP_biLogo').css({marginTop:'-'+(($bannerArea.find('.ATLP_biLogo').height()/2)+2)+'px'});
				});
			}else if (shape==9){ // 라인형(썸네일내부 2줄)
				// 영역 보더 크기 제외
				areaWidth=areaWidth-2;
				areaHeight=areaHeight-2;
				// 영역 크기 재 설정
				$bannerArea.css({width:areaWidth+'px',height:areaHeight+'px'});
				bannerBoxWidth=areaWidth-headWidth;
				bannerBoxHeight=areaHeight;
				slotWrapWidth=bannerBoxWidth;
				slotWrapHeight=bannerBoxHeight;
				slotHeight=(slotWrapHeight/2)-1;
				slotWidth=slotHeight;
				// 슬롯 & 판 설정
				slotNum=parseInt(slotWrapWidth/slotWidth)*2;
				// 판 수량 설정
				panNum=parseInt(matNum/slotNum);
				slotMarginW=parseInt((slotWrapWidth-(slotWidth*(slotNum/2)))/(slotNum/2));
				$bannerArea.find('.ATLP_body').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('img:last').load(function(){
					$bannerArea.find('.ATLP_biLogo').css({marginTop:'-'+(($bannerArea.find('.ATLP_biLogo').height()/2)+2)+'px'});
				});
			}else if (shape==10){ // 스카이형(썸네일내부)
				// 영역 보더 크기 제외
				areaWidth=areaWidth-2;
				areaHeight=areaHeight-2;
				// 영역 크기 재 설정
				$bannerArea.css({width:areaWidth+'px',height:areaHeight+'px'});
				bannerBoxWidth=areaWidth;
				bannerBoxHeight=areaHeight-(headHeight+28); // 하단 버튼 영역 제외
				slotWrapWidth=bannerBoxWidth;
				slotWrapHeight=bannerBoxHeight;
				slotWidth=slotWrapWidth;
				slotHeight=slotWidth;
				// 슬롯 & 판 설정
				slotNum=parseInt(slotWrapHeight/slotHeight);
				// 판 수량 설정
				panNum=(parseInt(matNum/slotNum)>0) ? parseInt(matNum/slotNum) : 1;
				slotMarginH=parseInt((slotWrapHeight-(slotHeight*slotNum))/slotNum);
				$bannerArea.find('.ATLP_body').css({width:bannerBoxWidth+'px',height:areaHeight-headHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
			}
		}else if (structure==3){ // 카드구조
			if (shape==1){ // 와이드형
				bannerBoxWidth=areaWidth;
				bannerBoxHeight=areaHeight-headHeight;
				slotWrapWidth=areaWidth;
				slotWrapHeight=bannerBoxHeight;
				slotHeight=slotWrapHeight;
				slotWidth=slotHeight*2;
				$bannerArea.find('.ATLP_body').css({width:areaWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				// 슬롯 & 판 설정
				slotNum=parseInt((areaWidth-slotWidth)/(slotWidth/4))+1;
				// 슬롯 수량 제한
				if (slotNum>10) slotNum=10;
				panNum=(parseInt(matNum/slotNum)>0) ? parseInt(matNum/slotNum) : 1;
				cardPosLeft=(areaWidth-slotWidth)/(slotNum-1);
			}else if (shape==2){ // 사각형
				bannerBoxWidth=areaWidth;
				bannerBoxHeight=areaHeight-headHeight;
				slotWrapWidth=areaWidth;
				slotWrapHeight=bannerBoxHeight;
				slotHeight=slotWrapHeight;
				slotWidth=parseInt(slotHeight*0.625);
				$bannerArea.find('.ATLP_body').css({width:areaWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				// 슬롯 & 판 설정
				slotNum=3;
				panNum=3;
				cardPosLeft=(slotWrapWidth-slotWidth)/(slotNum-1);
			}else if (shape==3){ // 스카이형
				bannerBoxWidth=areaWidth;
				bannerBoxHeight=areaHeight-headHeight;
				slotWrapWidth=areaWidth;
				slotWrapHeight=bannerBoxHeight;
				slotWidth=areaWidth;
				slotHeight=slotWidth*1.8;
				$bannerArea.find('.ATLP_body').css({width:areaWidth+'px',height:bannerBoxHeight+'px'});
				$bannerArea.find('.ATLP_banner_box').css({width:bannerBoxWidth+'px',height:bannerBoxHeight+'px'});
				// 슬롯 & 판 설정
				slotNum=parseInt((slotWrapHeight-slotHeight)/(slotHeight/4))+1;
				// 슬롯 수량 제한
				if (slotNum>10) slotNum=10;
				panNum=(parseInt(matNum/slotNum)>0) ? parseInt(matNum/slotNum) : 1;
				cardPosTop=(slotWrapHeight-slotHeight)/(slotNum-1);
			}
		}

		if (panNum<=1){
			$bannerArea.find('.ATLP_btn').hide();
			$bannerArea.find('.ATLP_panList').hide();
		}
	}

	// 슬롯 생성
	function makeSlot(){
		for (i=0; i<matNum; i++){
			slotObj=$(
				'<div class="ATLP_slotBox">'
				+'<a href="'+_matInfo[i].landurl+'" target="_blank" class="ATLP_slotAnchor">'
				+'<div class="ATLP_slotThum"><img src="'+_matInfo[i].img+'" alt=""></div>'
				+'<div class="ATLP_slotInfo">'
				+'<div class="slotInfo_product">'+_matInfo[i].txt+'</div>'
				+'<div class="slotInfo_price">'+_matInfo[i].price+'</div>'
				+'<div class="slotInfo_button">구매하기</div>'
				+'</div>'
				+'<div class="ATLP_slotBorder"></div>'
				+'</a>'
				+'<div class="ATLP_maskLayer"></div>'
				+'</div>'
			);
			slotData[i]=slotObj;
		}
		// 분리구조 -사각형 전용 데이터 처리
		if (structure==1&&shape==2){
			if (matNum==1){ // 소재가 1개일 경우
				// 슬롯 저장공간 6개에 데이터를 중복해서 담는다.
				for (var i=0; i<6; i++){
					setResultData[i]=slotData[0];
				}
			}else if(matNum==2){ // 소재가 2개일 경우
				// 슬롯 저장공간 6개에 0, 1의 소재를 중복해서 담는다.
				for (var i=0; i<6; i++){
					setResultData[i]=slotData[i%2];
				}
			}else if(matNum>2 && matNum<6){ // 소재가 3개이상 5개이하일 경우
				for (var i=0; i<(matNum*2)-2; i++){
					setResultData[i+2]=slotData[i%matNum];
				}
				setResultData[0]=slotData[slotData.length-2];
				setResultData[1]=slotData[slotData.length-1];
			}else{ //소재가 6개 이상일경우
				for (var i=0; i<matNum-2; i++){
					setResultData[i+2]=slotData[i];
				}
				setResultData[0]=slotData[slotData.length-2];
				setResultData[1]=slotData[slotData.length-1];
			}
		}
	}

	// 슬롯 삽입, 슬롯 값 설정
	function instSlot(){
		if (structure==1){ // 분리구조
			if (shape==1){ // 와이드형
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:slotWrapWidth+'px',height:slotWrapHeight+'px'});
				for (i=0; i<slotNum; i++){
					var idx = ((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i);
				}
				$bannerArea.find('.ATLP_slotBox').css({width:slotWidth-2+'px',height:slotHeight-2+'px',margin:'0 '+slotMarginW+'px'});
				$bannerArea.find('.ATLP_slotBox:first').addClass('on');
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotThum').css({width:slotWidth-2+'px',height:slotHeight-2+'px'});
				$bannerArea.find('.ATLP_maskLayer').css({width:slotWidth-2+'px',height:slotHeight-2+'px'});
			}else if (shape==2){ // 사각형
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:areaWidth+'px',height:slotWrapHeight+'px'});
				// 계산이 끝난 소재를 화면에 출력
				for (var i=0; i<slotNum; i++){
					$bannerArea.find('.ATLP_slot_wrap').append(setResultData[i]);
					$bannerArea.find('.ATLP_slotBox').eq(i);
				}
				$bannerArea.find('.ATLP_slotBox').eq(0).css({
					zIndex:'1',
					width:slotThirdSize-2+'px',
					height:slotThirdSize-2+'px',
					top:'0px',
					left:'4px'
					});
					$bannerArea.find('.ATLP_slotBox').eq(0).find('.ATLP_slotThum').css({width:slotThirdSize-2+'px',height:slotThirdSize-2+'px'});
					$bannerArea.find('.ATLP_slotBox').eq(0).find('.ATLP_slotBorder').css({width:slotThirdSize-8+'px',height:slotThirdSize-8+'px'});
					$bannerArea.find('.ATLP_slotBox').eq(0).find('.ATLP_maskLayer').css({width:slotThirdSize-2+'px',height:slotThirdSize-2+'px',opacity:'0.8'});
				$bannerArea.find('.ATLP_slotBox').eq(1).css({
					zIndex:'2',
					width:slotSecondSize-2+'px',
					height:slotSecondSize-2+'px',
					top:(slotWrapHeight-slotSecondSize)/3+'px',
					left:((areaWidth/4)*1.4)-(slotSecondSize/2)+'px'
					});
					$bannerArea.find('.ATLP_slotBox').eq(1).find('.ATLP_slotThum').css({width:slotSecondSize-2+'px',height:slotSecondSize-2+'px'});
					$bannerArea.find('.ATLP_slotBox').eq(1).find('.ATLP_slotBorder').css({width:slotSecondSize-8+'px',height:slotSecondSize-8+'px'});
					$bannerArea.find('.ATLP_slotBox').eq(1).find('.ATLP_maskLayer').css({width:slotSecondSize-2+'px',height:slotSecondSize-2+'px',opacity:'0.4'});
				$bannerArea.find('.ATLP_slotBox').eq(2).css({
					zIndex:'3',
					width:slotWidth-2+'px',
					height:slotWidth-2+'px',
					top:(slotWrapHeight-slotWidth)/2+2+'px',
					left:(areaWidth-slotWidth)/2+'px'
					}).addClass('on');
					$bannerArea.find('.ATLP_slotBox').eq(2).find('.ATLP_slotThum').css({width:slotWidth-2+'px',height:slotWidth-2+'px'});
					$bannerArea.find('.ATLP_slotBox').eq(2).find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotWidth-8+'px'});
					$bannerArea.find('.ATLP_slotBox').eq(2).find('.ATLP_maskLayer').css({width:slotWidth-2+'px',height:slotWidth-2+'px'});
				$bannerArea.find('.ATLP_slotBox').eq(3).css({
					zIndex:'2',
					width:slotSecondSize-2+'px',
					height:slotSecondSize-2+'px',
					top:(slotWrapHeight-slotSecondSize)/3+'px',
					left:((areaWidth/4)*2.6)-(slotSecondSize/2)+'px'
					});
					$bannerArea.find('.ATLP_slotBox').eq(3).find('.ATLP_slotThum').css({width:slotSecondSize-2+'px',height:slotSecondSize-2+'px'});
					$bannerArea.find('.ATLP_slotBox').eq(3).find('.ATLP_slotBorder').css({width:slotSecondSize-8+'px',height:slotSecondSize-8+'px'});
					$bannerArea.find('.ATLP_slotBox').eq(3).find('.ATLP_maskLayer').css({width:slotSecondSize-2+'px',height:slotSecondSize-2+'px',opacity:'0.4'});
				$bannerArea.find('.ATLP_slotBox').eq(4).css({
					zIndex:'1',
					width:slotThirdSize-2+'px',
					height:slotThirdSize-2+'px',
					top:'0px',
					left:areaWidth-(slotThirdSize+4)+'px'
					});
					$bannerArea.find('.ATLP_slotBox').eq(4).find('.ATLP_slotThum').css({width:slotThirdSize-2+'px',height:slotThirdSize-2+'px'});
					$bannerArea.find('.ATLP_slotBox').eq(4).find('.ATLP_slotBorder').css({width:slotThirdSize-8+'px',height:slotThirdSize-8+'px'});
					$bannerArea.find('.ATLP_slotBox').eq(4).find('.ATLP_maskLayer').css({width:slotThirdSize-2+'px',height:slotThirdSize-2+'px',opacity:'0.8'});
			}
		}else if (structure==2){ // 일체구조
			if (shape==1){ // 와이드형
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:slotWrapWidth+'px',height:slotWrapHeight+'px'});
				for (i=0; i<slotNum; i++){
					var idx = ((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i);
				}
				$bannerArea.find('.ATLP_slotBox').css({width:slotWidth-8+'px',height:slotHeight-8+'px',margin:'0 '+slotMarginW+'px'});
				$bannerArea.find('.ATLP_slotBox:first').addClass('on');
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotThum').css({width:slotWidth-8+'px',height:parseInt(slotHeight*0.63)-4+'px'});
				$bannerArea.find('.ATLP_slotInfo').css({width:slotWidth-8+'px'});
				$bannerArea.find('.ATLP_maskLayer').css({width:slotWidth-2+'px',height:slotHeight-2+'px'});
				if (areaHeight<170){ $bannerArea.find('.slotInfo_product').css({maxHeight:productMaxLine1+'px'}); }
				$bannerArea.find('.ATLP_slotInfo').each(function(){
					$(this).css({
						height:$(this).height()+'px',
						top:((slotHeight-8)-parseInt(slotHeight*0.63)-$(this).height())/2+'px'
					});
					$(this).find('.slotInfo_button').css({marginTop:($(this).height()-$bannerArea.find('.slotInfo_button').height())/2});
				});
			}else if (shape==2){ // 사각형
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:slotWrapWidth+'px',height:slotWrapHeight+'px'});
				for (i=0; i<slotNum; i++){
					var idx = ((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i);
				}
				$bannerArea.find('.ATLP_slotBox').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotBox:first').addClass('on');
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotThum').css({width:slotWidth-8+'px',height:parseInt(slotHeight*0.56)-4+'px'});
				$bannerArea.find('.ATLP_slotInfo').css({width:slotWidth-8+'px'});
				if (areaHeight<240&&areaHeight>=200){
					$bannerArea.find('.slotInfo_product').css({maxHeight:productMaxLine1+'px'});
				}else if(areaHeight<200){
					$bannerArea.find('.slotInfo_button').hide();
				}
				$bannerArea.find('.ATLP_slotInfo').each(function(){
					$(this).css({ top:((slotHeight-8)-(parseInt(slotHeight*0.56)-4)-$(this).height())/2+'px' });
				});
			}else if (shape==3){ // 스카이
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:slotWrapWidth+'px',height:slotWrapHeight+'px'});
				for (i=0; i<slotNum; i++){
					var idx = ((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i);
				}
				$bannerArea.find('.ATLP_slotBox').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotBox:first').addClass('on');
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotThum').css({width:slotWidth-8+'px',height:parseInt(slotHeight*0.5)-2+'px'});
				$bannerArea.find('.ATLP_slotInfo').css({width:slotWidth-8+'px'});
				if (areaHeight<580&&areaHeight>=490){
					$bannerArea.find('.slotInfo_product').css({maxHeight:productMaxLine1+'px'});
				}else if(areaHeight<490){
					$bannerArea.find('.slotInfo_button').hide();
				}
				$bannerArea.find('.ATLP_slotInfo').each(function(){
					$(this).css({
						height:$(this).height()+'px',
						top:((slotHeight-8)-(parseInt(slotHeight*0.5)-2)-$(this).height())/2+'px'
					});
				});
			}else if (shape==4){ // 라인형
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:slotWrapWidth+'px',height:slotWrapHeight+'px'});
				for (i=0; i<slotNum; i++){
					var idx = ((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i);
				}
				$bannerArea.find('.ATLP_slotBox').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotBox:first').addClass('on');
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotThum').css({width:parseInt(slotWidth*0.4)-4+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotInfo').css({width:parseInt(slotWidth*0.6)-4+'px'});
				var setPriceShowCheck=false;
				var setPriceShow = setInterval(function(){
					if (!setPriceShowCheck){
						$bannerArea.find('.slotInfo_product').hide();
						$bannerArea.find('.slotInfo_price').show();
						setPriceShowCheck=true;
					}else{
						$bannerArea.find('.slotInfo_product').show();
						$bannerArea.find('.slotInfo_price').hide();
						setPriceShowCheck=false;
					}
				},1000);
				$bannerArea.find('.ATLP_slotInfo').each(function(){
					$(this).css({ top:((slotHeight-8)-$(this).height())/2+'px' });
				});
			}else if (shape==5){ // 라인형(1슬롯)
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:slotWrapWidth+'px',height:slotWrapHeight+'px'});
				for (i=0; i<slotNum; i++){
					var idx = ((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i);
				}
				$bannerArea.find('.ATLP_slotBox').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotBox:first').addClass('on');
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotThum').css({width:parseInt(slotWidth*0.4)-4+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotInfo').css({width:parseInt(slotWidth*0.6)-4+'px'});
				var setPriceShowCheck=false;
				var setPriceShow = setInterval(function(){
					if (!setPriceShowCheck){
						$bannerArea.find('.slotInfo_product').hide();
						$bannerArea.find('.slotInfo_price').show();
						setPriceShowCheck=true;
					}else{
						$bannerArea.find('.slotInfo_product').show();
						$bannerArea.find('.slotInfo_price').hide();
						setPriceShowCheck=false;
					}
				},1000);
				$bannerArea.find('.ATLP_slotInfo').each(function(){
					$(this).css({ top:((slotHeight-8)-$(this).height())/2+'px' });
					$(this).find('.slotInfo_price').css({lineHeight:$(this).height()+'px'});
				});
			}else if (shape==6){ // 사각형(2줄)
				var slotwrapMarginL=slotWrapWidth-((slotWidth+parseInt(slotMarginW/2)*2)*(slotNum/2));
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({
					width:slotWrapWidth-slotwrapMarginL+'px',
					height:slotWrapHeight+'px',
					marginLeft:slotwrapMarginL/2+'px'
				});
				for (i=0; i<slotNum; i++){
					var idx = ((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i).css({
						width:slotWidth-6+'px',
						height:slotHeight-6+'px',
						left:(i%(slotNum/2))*(slotWidth+slotMarginW)+'px',
						top:parseInt(i/(slotNum/2))*slotHeight+'px',
						margin:'3px 0 3px '+slotMarginW/2+'px'
					});
				}
				$bannerArea.find('.ATLP_slotBox:first').addClass('on');
				$bannerArea.find('.ATLP_slotThum').css({width:slotWidth-6+'px',height:slotHeight-6+'px'});
				if (slotNum<=4){
					$bannerArea.find('.ATLP_slotInfo').css({ width:slotWrapWidth+'px' });
				}else{
					$bannerArea.find('.ATLP_slotInfo').css({});
					if (areaHeight<140){$bannerArea.find('.slotInfo_product').css({maxHeight:productMaxLine2+'px'});}
					$bannerArea.find('.ATLP_slotInfo').css({float:'left', position:'relative', width:'44%'});
					$bannerArea.find('.ATLP_slotThum').css({float:'left'});
				}
				$bannerArea.find('.ATLP_maskLayer').css({width:slotWrapWidth+'px',height:slotWrapHeight-6+'px'});
			}else if (shape==7){ // 와이드형(썸네일내부)
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:slotWrapWidth+'px',height:slotWrapHeight+'px'});
				for (i=0; i<slotNum; i++){
					var idx = ((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i).css({
						width:slotWidth+'px',
						height:slotHeight+'px',
						margin:'0 '+slotMarginW/2+'px'
					});
				}
				$bannerArea.find('.ATLP_slotBox').removeClass('on');
				$bannerArea.find('.ATLP_slotThum').css({width:slotWidth+'px',height:slotHeight+'px'});
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				if (areaHeight<120&&areaHeight>=110){
					$bannerArea.find('.slotInfo_product').css({maxHeight:productMaxLine1+'px'});
				}else if (areaHeight<110){
					$bannerArea.find('.slotInfo_product').css({maxHeight:productMaxLine1+'px'});
					$bannerArea.find('.slotInfo_button').hide();
				}
				$bannerArea.find('.ATLP_slotInfo').each(function(){
					$(this).css({top:(slotHeight-$(this).height())/2+'px'});
				});
			}else if (shape==8){ // 라인형(썸네일내부)
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:slotWrapWidth+'px',height:slotWrapHeight+'px'});
				for (i=0; i<slotNum; i++){
					var idx = ((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i).css({
						width:slotWidth+'px',
						height:slotHeight+'px',
						margin:'0 '+slotMarginW/2+'px'
					});
				}
				$bannerArea.find('.ATLP_slotBox').removeClass('on');
				$bannerArea.find('.ATLP_slotThum').css({width:slotWidth+'px',height:slotHeight+'px',top:'100%'});
				for (i=0; i<slotNum; i++){
					$bannerArea.find('.ATLP_slotThum').eq(i).delay(i*300).animate({top:'-20px'},100).animate({top:'0px'},300);
				}
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				if (areaHeight<98&&areaHeight>=70){
					$bannerArea.find('.slotInfo_button').hide();
				}else if (areaHeight<70){
					$bannerArea.find('.slotInfo_product').css({maxHeight:productMaxLine1+'px'});
					$bannerArea.find('.slotInfo_button').hide();
				}
				$bannerArea.find('.ATLP_slotInfo').each(function(){
					$(this).css({top:(slotHeight-$(this).height())/2+'px'});
				});
			}else if (shape==9){ // 라인형(썸네일내부 2줄)
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:slotWrapWidth+'px',height:slotWrapHeight+'px'});
				for (i=0; i<slotNum; i++){
					var idx = ((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i).css({
						width:slotWidth+'px',
						height:slotHeight+'px',
						margin:'0 '+slotMarginW/2+'px'
					});
					$bannerArea.find('.ATLP_slotBox').eq(i%(slotNum/2)).css({marginBottom:'2px'});
					$bannerArea.find('.ATLP_slotThum').find('img').eq(i).delay(i*200)
						.animate({top:'-20%',left:'-20%',width:'140%',height:'140%'},100)
						.animate({top:'0',left:'0',width:'100%',height:'100%'},200);
				}
				$bannerArea.find('.ATLP_slotBox').removeClass('on');
				$bannerArea.find('.ATLP_slotThum').css({width:slotWidth+'px',height:slotHeight+'px'});
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotInfo').css({width:slotWidth+'px',marginTop:(slotHeight-$bannerArea.find('.ATLP_slotInfo').height())/2+'px'});
			}else if (shape==10){ // 라인형(썸네일내부 2줄)
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({
					width:slotWrapWidth+'px',
					height:slotWrapHeight-slotMarginH/2+'px',
					marginTop:slotMarginH/2+'px'
				});
				for (i=0; i<slotNum; i++){
					var idx = ((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i).css({
						width:slotWidth+'px',
						height:slotHeight+'px',
						marginBottom:slotMarginH+'px'
					});
				}
				$bannerArea.find('.ATLP_slotBox:nth-child(odd)').css({left:'-100%'})
					.animate({left:'30px'},200).animate({left:'0'},400);
				$bannerArea.find('.ATLP_slotBox:nth-child(even)').css({left:'100%'})
					.animate({left:'-30px'},200).animate({left:'0'},400);
				$bannerArea.find('.ATLP_slotBox').removeClass('on');
				$bannerArea.find('.ATLP_slotBox:last').css({marginBottom:'0'});
				$bannerArea.find('.ATLP_slotThum').css({width:slotWidth+'px',height:slotHeight+'px'});
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				if (areaWidth<120){ $bannerArea.find('.slotInfo_product').css({maxHeight:productMaxLine1+'px'}); }
				$bannerArea.find('.ATLP_slotInfo').each(function(){
					$(this).css({top:(slotHeight-$(this).height())/2+'px'});
				});
			}
		}else if(structure==3){ // 카드구조
			if (shape==1){ // 와이드형
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:slotWrapWidth+'px',height:slotWrapHeight+'px'});
				for (i=0; i<slotNum; i++){
					var idx=((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i).css({zIndex:slotNum-i,left:'100%'});
					$bannerArea.find('.ATLP_slotBox').eq(i)
						.delay(i*100).animate({left:'0'},200)
						.delay(400).animate({left:cardPosLeft*i+'px'},400);
				}
				$bannerArea.find('.ATLP_slotBox').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotBox').removeClass('on af');
				$bannerArea.find('.ATLP_slotBox:first').addClass('on');
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotThum').css({width:slotWidth/2-4+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotInfo').css({width:slotWidth/2-4+'px'});
				if (areaHeight<150){$bannerArea.find('.slotInfo_button').hide();}
				if (areaHeight<120&&areaHeight>=108){
					$bannerArea.find('.slotInfo_product').css({maxHeight:productMaxLine2+'px'});
				}else if (areaHeight<108){
					$bannerArea.find('.slotInfo_product').css({maxHeight:productMaxLine1+'px'});
				}
				$bannerArea.find('.ATLP_slotInfo').each(function(){$(this).css({top:(slotHeight-8-$(this).height())/2+'px'});});
			}else if (shape==2){ // 사각형
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:slotWrapWidth+'px',height:slotWrapHeight+'px'});
				for (i=0; i<slotNum; i++){
					var idx=((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i).css({zIndex:slotNum-i,top:'100%',left:cardPosLeft*i+'px'});
					$bannerArea.find('.ATLP_slotBox').eq(i).delay(i*100).animate({top:'0'},200);
				}
				$bannerArea.find('.ATLP_slotBox').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotBox:first').addClass('on');
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotThum').css({width:slotWidth-8+'px',height:slotWidth-4+'px'});
				$bannerArea.find('.ATLP_slotInfo').css({width:slotWidth-8+'px'});
				if (areaHeight<264&&areaHeight>=220){
					$bannerArea.find('.slotInfo_product').css({maxHeight:productMaxLine1+'px'});
				}else if (areaHeight<220){
					$bannerArea.find('.slotInfo_button').hide();
				}
				$bannerArea.find('.ATLP_slotInfo').each(function(){
					$(this).css({
						height:$(this).height()+'px',
						top:(((slotHeight-8)-(slotWidth-4))-$(this).height())/2+'px'
					});
				});
			}else if (shape==3){ // 스카이형
				$bannerArea.find('.ATLP_banner_box').prepend('<div class="ATLP_slot_wrap ATLP_slot_wrap_'+globalCount+'"></div>');
				$bannerArea.find('.ATLP_slot_wrap').css({width:slotWrapWidth+'px',height:slotWrapHeight+'px'});
				for (i=0; i<slotNum; i++){
					var idx=((globalCount-1)*slotNum)+i;
					$bannerArea.find('.ATLP_slot_wrap').append(slotData[idx]);
					$bannerArea.find('.ATLP_slotBox').eq(i).attr('value',i).css({zIndex:slotNum-i,top:'100%'});
					$bannerArea.find('.ATLP_slotBox').eq(i)
						.delay(i*100).animate({top:'0'},200)
						.delay(400).animate({top:cardPosTop*i+'px'},400);
				}
				$bannerArea.find('.ATLP_slotBox').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotBox:first').addClass('on');
				$bannerArea.find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotHeight-8+'px'});
				$bannerArea.find('.ATLP_slotThum').css({width:slotWidth-8+'px',height:slotWidth-4+'px'});
				$bannerArea.find('.ATLP_slotInfo').css({width:slotWidth-8+'px'});
				if (areaWidth<110){$bannerArea.find('.slotInfo_product').css({maxHeight:productMaxLine1+'px'});}
				$bannerArea.find('.ATLP_slotInfo').each(function(){
					$(this).css({marginBottom:(((slotHeight-8)-(slotWidth-8))-$(this).height())/2+'px'});
				});
			}
		}
		if (skinType==0){detailCustomSet();}
	}

	// 슬롯 액션
	function slotAction(){
		if (structure==1){ // 분리구조
			if (shape==1){ // 와이드형
				slotCount++;
				var idx=slotCount+(slotNum*(globalCount-1));
					idx=(idx >= slotNum*panNum) ? 0 : idx;
				$bannerArea.find('.slotInfo_product').text(_matInfo[idx].txt);
				$bannerArea.find('.slotInfo_price').text(_matInfo[idx].price);
				$bannerArea.find('.ATLP_slotAnchor').attr('herf',_matInfo[idx].landurl);
				// 상품정보 영역 변경
				infoPriceWidth=$bannerArea.find('.ATLP_Info_wrap .slotInfo_price').outerWidth();
				$bannerArea.find('.slotInfo_product').css({width:bannerBoxWidth-(infoPriceWidth+infoButtonWidth+6)+'px'});
				if (slotCount>=slotNum && panNum>1){
					nextListEvnt();
					$bannerArea.find('.ATLP_coursor').stop().animate({left:(coursorPos*slotCount)-(coursorPos/2)+'px'},200);
				}else if(slotCount > slotNum && panNum == 1){
					oneListEvnt();
				}
				$bannerArea.find('.ATLP_slotBox').each(function(){
					if ($(this).attr('value')==slotCount){
						$(this).addClass('on');
						$bannerArea.find('.ATLP_coursor').stop().animate({left:(coursorPos*slotCount)+(coursorPos/2)+'px'},200);
					}else{
						$(this).removeClass('on');
					}
				});
			}else if (shape==2){ // 사각형
				nextListEvnt();
			}
		}else if (structure==2){ // 일체구조
			if (shape==6){
				if (slotCount>=slotNum && panNum>1){
					nextListEvnt();
				}else if(slotCount>=slotNum && panNum==1){
					oneListEvnt();
				}
				$bannerArea.find('.ATLP_slotBox').each(function(){
					var $this=$(this);
					var $slotInfo=$this.find('.ATLP_slotInfo');
					var $slotThum=$this.find('.ATLP_slotThum');
					var $maskLayer=$this.find('.ATLP_maskLayer');

					if ($this.attr('value')==slotCount){
						$this.animate({
							left:'0',
							top:'0',
							width:slotWrapWidth+'px',
							height:slotWrapHeight-6+'px',
							margin:'3px 0 0 0'
						},200,function(){
							$slotInfo.show();
							if (slotNum<=4){$maskLayer.show();}
							function afterAction(){
								$slotInfo.hide().css({top:'0px'});
								$maskLayer.hide();
								$this.animate({
									left:(slotCount%(slotNum/2))*(slotWidth+slotMarginW)+'px',
									top:parseInt(slotCount/(slotNum/2))*slotHeight+'px',
									width:slotWidth-6+'px',
									height:slotHeight-6+'px',
									margin:'3px 0 3px '+slotMarginW/2+'px'
								},200).find('.ATLP_slotThum').animate({
									width:slotWidth-6+'px',
									height:slotHeight-6+'px'
								},200,function(){
									$this.find('img').animate({
										width:'100%',
										height:'100%',
										marginTop:'0px'
									},200);
								});
								slotCount++;
							};
							S2S6_actionCheck=setTimeout(afterAction,2400);
						}).addClass('on').css('zIndex',3);

						if (slotNum<=4){
							$slotThum.animate({
								width:slotWrapWidth+'px',
								height:slotWrapHeight-6+'px'
							},200);
							$slotInfo.animate({
								top:((slotWrapHeight-6-$slotInfo.height())/2)+10+'px'
							},500,function(){
								$slotInfo.find('.slotInfo_product')
									.animate({marginBottom:'6px'},100)
									.animate({marginBottom:'0px'},200,function(){
										$slotInfo.find('.slotInfo_price')
											.animate({marginBottom:'6px'},100)
											.animate({marginBottom:'0px'},200);
								});
							}).animate({
								top:(slotWrapHeight-6-$slotInfo.height())/2+'px'
							},400);
						}else{
							if(slotWrapWidth*0.54>slotWrapHeight-6){// 가로
								$slotThum.find('img').css({width:'auto',height:'92%'});
							}else{ // 세로
								$slotThum.find('img').css({width:'92%',height:'auto'});
							}
							$slotThum.animate({
								width:'54%',
								height:slotWrapHeight-6+'px'
							},200,function(){
								$this.find('img').animate({
									marginTop:(slotWrapHeight-6-$slotThum.find('img').height())/2+'px'
								},500);
								$slotInfo.animate({top:((slotWrapHeight-6-$slotInfo.height())/2)+10+'px'},200)
									.animate({top:(slotWrapHeight-6-$slotInfo.height())/2+'px'},400);
							});
						}
					}else{
						$this.removeClass('on').css('zIndex',1);
					}
				});
			}else if(shape==7||shape==8||shape==9||shape==10){
				$bannerArea.find('.ATLP_slotBox').each(function(){
					if ($(this).attr('value')==slotCount){
						$(this).addClass('on');
					}else{
						$(this).removeClass('on');
					}
				});
				slotCount++;
				if (slotCount>slotNum && panNum>1){
					nextListEvnt();
				}else if(slotCount>slotNum && panNum==1){
					oneListEvnt();
				}
			}else{
				slotCount++;
				if (slotCount>=slotNum && panNum>1){
					nextListEvnt();
				}else if(slotCount>slotNum && panNum==1){
					oneListEvnt();
				}
				$bannerArea.find('.ATLP_slotBox').each(function(){
					if ($(this).attr('value')==slotCount){
						$(this).addClass('on');
					}else{
						$(this).removeClass('on');
					}
				});
			}
		}else if (structure==3){ // 카드구조
			if (shape==1){ // 와이드형
				// 왼쪽에서 오른쪽으로 순방향 이동
				if (slotCount<(slotNum-1)&&directionCheck==false){
					slotCount++;
					$bannerArea.find('.ATLP_slotBox').eq(slotCount).animate({
						left:'80%'
					},200,function(){
						$bannerArea.find('.ATLP_slotBox').eq(slotCount).addClass('on');
					}).animate({
						left:cardPosLeft*slotCount+'px'
					},400);
					$bannerArea.find('.ATLP_slotBox').eq(slotCount-1).removeClass('on').addClass('af').css('zIndex',slotCount+10);
				// 오른쪽에서 왼쪽으로 역방향 이동
				}else{
					// 역방향 체크 true
					directionCheck=true;
					// 만약 호버하여 카운트값이 0(처음)이 된다면 이동 실행 하지 않고 바로 오프닝시작
					if (slotCount==0){
						// 역방향 순서가 끝나고 역방향 체크 해제(false)
						directionCheck=false;
						// 카드 날리기 이벤트 해제,
						clearTimeout(stratAniBanner);
						// 오프닝 이벤트 재 실행
						nextListEvnt();
					// 일반적인 카운트로 이동하였다면 왼쪽으로 역방향 순차적으로 이동 시킴
					}else{
						slotCount--;
						$bannerArea.find('.ATLP_slotBox').eq(slotCount).animate({
							left:'-20%'
						},200,function(){
							$bannerArea.find('.ATLP_slotBox').eq(slotCount).removeClass('af').addClass('on');
						}).animate({
							left:cardPosLeft*slotCount+'px'
						},400);
						$bannerArea.find('.ATLP_slotBox').eq(slotCount+1).removeClass('on af').css('zIndex',19-slotCount);
						// 이동하다가 처음 에 도달하면 오프닝 시작
						if (slotCount==0){
							// 역방향 순서가 끝나고 역방향 체크 해제(false)
							directionCheck=false;
							// 카드 날리기 이벤트 해제,
							clearTimeout(stratAniBanner);
							// 오프닝 이벤트 재 실행
							nextListEvnt();
						}
					}
				}
			}else if (shape==2){ // 사각형
				// 왼쪽에서 오른쪽으로 순방향 이동
				if (slotCount<(slotNum-1)&&directionCheck==false){
					slotCount++;
					$bannerArea.find('.ATLP_slotBox').eq(slotCount).addClass('on');
					$bannerArea.find('.ATLP_slotBox').eq(slotCount-1).removeClass('on').addClass('af').css('zIndex',slotCount+10);
				// 오른쪽에서 왼쪽으로 역방향 이동
				}else{
					// 역방향 체크 true
					directionCheck=true;
					// 만약 호버하여 카운트값이 0(처음)이 된다면 이동 실행 하지 않고 바로 오프닝시작
					if (slotCount<0){
						// 역방향 순서가 끝나고 역방향 체크 해제(false)
						directionCheck=false;
						// 카드 날리기 이벤트 해제,
						clearTimeout(stratAniBanner);
						$bannerArea.find('.ATLP_slotBox').removeClass('on af');
						// 오프닝 이벤트 재 실행
						nextListEvnt();
					// 일반적인 카운트로 이동하였다면 왼쪽으로 역방향 순차적으로 이동 시킴
					}else{
						slotCount--;
						$bannerArea.find('.ATLP_slotBox').eq(slotCount).removeClass('af').addClass('on');
						$bannerArea.find('.ATLP_slotBox').eq(slotCount+1).removeClass('on af').css('zIndex',19-slotCount);
						// 이동하다가 처음 에 도달하면 오프닝 시작
						if (slotCount<0){
							// 역방향 순서가 끝나고 역방향 체크 해제(false)
							directionCheck=false;
							// 카드 날리기 이벤트 해제,
							clearTimeout(stratAniBanner);
							$bannerArea.find('.ATLP_slotBox').removeClass('on af');
							// 오프닝 이벤트 재 실행
							nextListEvnt();
						}
					}
				}
			}else if (shape==3){ // 스카이형
				// 왼쪽에서 오른쪽으로 순방향 이동
				if (slotCount<(slotNum-1)&&directionCheck==false){
					slotCount++;
					$bannerArea.find('.ATLP_slotBox').eq(slotCount).animate({
						top:'80%'
					},200,function(){
						$bannerArea.find('.ATLP_slotBox').eq(slotCount).addClass('on');
					}).animate({
						top:cardPosTop*slotCount+'px'
					},400);
					$bannerArea.find('.ATLP_slotBox').eq(slotCount-1).removeClass('on').addClass('af').css('zIndex',slotCount+10);
				// 오른쪽에서 왼쪽으로 역방향 이동
				}else{
					// 역방향 체크 true
					directionCheck=true;
					// 만약 호버하여 카운트값이 0(처음)이 된다면 이동 실행 하지 않고 바로 오프닝시작
					if (slotCount==0){
						// 역방향 순서가 끝나고 역방향 체크 해제(false)
						directionCheck=false;
						// 카드 날리기 이벤트 해제,
						clearTimeout(stratAniBanner);
						nextListEvnt();
					// 일반적인 카운트로 이동하였다면 왼쪽으로 역방향 순차적으로 이동 시킴
					}else{
						slotCount--;
						$bannerArea.find('.ATLP_slotBox').eq(slotCount).animate({
							top:'-20%'
						},200,function(){
							$bannerArea.find('.ATLP_slotBox').eq(slotCount).removeClass('af').addClass('on');
						}).animate({
							top:cardPosTop*slotCount+'px'
						},400);
						$bannerArea.find('.ATLP_slotBox').eq(slotCount+1).removeClass('on af').css('zIndex',19-slotCount);
						// 이동하다가 처음 에 도달하면 오프닝 시작
						if (slotCount==0){
							// 역방향 순서가 끝나고 역방향 체크 해제(false)
							directionCheck=false;
							// 카드 날리기 이벤트 해제,
							clearTimeout(stratAniBanner);
							// 오프닝 이벤트 재 실행
							nextListEvnt();
						}
					}
				}
			}
		}
		stratAniBanner=setTimeout(slotAction, delayTime);
	}

	// 판 네비게이션
	function panNavigation(){
		$bannerArea.find('.ATLP_panNum').each(function(){
			if ($(this).attr('value')==globalCount){
				$(this).addClass('on');
			}else{
				$(this).removeClass('on');
			}
		});
	}

	// 다음 판 이동
	function nextListEvnt(){
		if (structure==1){ // 분리구조
			if (shape==1){ // 와이드형
				slotCount=0;
				// 이동대상 캐시
				var $moveBox=$bannerArea.find('.ATLP_slot_wrap_'+globalCount);
				// 이동대상이 애니메이트중이면 리턴
				if($moveBox.is(':animated')) return;
				// 이동대상 이동
				$moveBox.stop().animate({left:'-100%'},300,function(){$(this).remove();});
				// 전체 카운트 증가
				globalCount++;
				// 전체 카운트가 판수를 초과하면 초기화
				if (globalCount > panNum) globalCount = 1;
				panNavigation();
				instSlot();
				$bannerArea.find('.ATLP_slot_wrap_'+globalCount).css({left:'100%'}).stop().animate({left:'0'},300,function(){
				});
			}else if(shape==2){ // 사각형
				// 2번 (좌측 중간) 제일 좌측으로 이동
					$bannerArea.find('.ATLP_slotBox').eq(1).css({zIndex:'1'}).stop().animate({
						width:slotThirdSize-2+'px',
						height:slotThirdSize-2+'px',
						top:'0px',
						left:'4px'
						},200);
						$bannerArea.find('.ATLP_slotBox').eq(1).find('.ATLP_slotThum').css({width:slotThirdSize-2+'px',height:slotThirdSize-2+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(1).find('.ATLP_slotBorder').css({width:slotThirdSize-8+'px',height:slotThirdSize-8+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(1).find('.ATLP_maskLayer').css({width:slotThirdSize-2+'px',height:slotThirdSize-2+'px',opacity:'0.8'});
				// 3번 (센터) 좌측 중간으로 이동
					$bannerArea.find('.ATLP_slotBox').eq(2).css({zIndex:'2'}).stop().animate({
						width:slotSecondSize-2+'px',
						height:slotSecondSize-2+'px',
						top:(slotWrapHeight-slotSecondSize)/3+'px',
						left:((areaWidth/4)*1.4)-(slotSecondSize/2)+'px'
						},200).removeClass('on');
						$bannerArea.find('.ATLP_slotBox').eq(2).find('.ATLP_slotThum').css({width:slotSecondSize-2+'px',height:slotSecondSize-2+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(2).find('.ATLP_slotBorder').css({width:slotSecondSize-8+'px',height:slotSecondSize-8+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(2).find('.ATLP_maskLayer').css({width:slotSecondSize-2+'px',height:slotSecondSize-2+'px',opacity:'0.4'});
				// 4번 (우측 중간) 센터로 이동
					$bannerArea.find('.ATLP_slotBox').eq(3).css({zIndex:'3'}).stop().animate({
						width:slotWidth-2+'px',
						height:slotWidth-2+'px',
						top:(slotWrapHeight-slotWidth)/2+2+'px',
						left:(areaWidth-slotWidth)/2+'px'
						},200).addClass('on');
						$bannerArea.find('.ATLP_slotBox').eq(3).find('.ATLP_slotThum').css({width:slotWidth-2+'px',height:slotWidth-2+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(3).find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotWidth-8+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(3).find('.ATLP_maskLayer').css({width:slotWidth-2+'px',height:slotWidth-2+'px'});
				// 5번 (제일 우측) 우측 중간으로 이동
					$bannerArea.find('.ATLP_slotBox').eq(4).css({zIndex:'2'}).stop().animate({
						width:slotSecondSize-2+'px',
						height:slotSecondSize-2+'px',
						top:(slotWrapHeight-slotSecondSize)/3+'px',
						left:((areaWidth/4)*2.6)-(slotSecondSize/2)+'px'
						},200);
						$bannerArea.find('.ATLP_slotBox').eq(4).find('.ATLP_slotThum').css({width:slotSecondSize-2+'px',height:slotSecondSize-2+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(4).find('.ATLP_slotBorder').css({width:slotSecondSize-8+'px',height:slotSecondSize-8+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(4).find('.ATLP_maskLayer').css({width:slotSecondSize-2+'px',height:slotSecondSize-2+'px',opacity:'0.4'});

				// 1번 (제일 좌측) 슬롯 데이터 저장 및 Dom 삭제
					//setResultData[slotCount] = $bannerArea.find('.ATLP_slotBox').eq(0).detach();
					$bannerArea.find('.ATLP_slotBox').eq(0).remove();

				// 마지막 슬롯 생성
				if (slotCount<5){
					$bannerArea.find('.ATLP_slot_wrap').append(setResultData[slotCount+5]);
				}else{
					$bannerArea.find('.ATLP_slot_wrap').append(setResultData[slotCount-5]);
				}
				// 마지막 슬롯 스타일 지정
					$bannerArea.find('.ATLP_slotBox').eq(4).css({
						zIndex:'1',
						width:slotThirdSize-2+'px',
						height:slotThirdSize-2+'px',
						top:'0px',
						left:areaWidth-(slotThirdSize+4)+'px'
						});
						$bannerArea.find('.ATLP_slotBox').eq(4).find('.ATLP_slotThum').css({width:slotThirdSize-2+'px',height:slotThirdSize-2+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(4).find('.ATLP_slotBorder').css({width:slotThirdSize-8+'px',height:slotThirdSize-8+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(4).find('.ATLP_maskLayer').css({width:slotThirdSize-2+'px',height:slotThirdSize-2+'px',opacity:'0.8'});

				slotCount++;
				if (slotCount>=setResultData.length){ slotCount=0; }

				$bannerArea.find('.slotInfo_product').text(_matInfo[slotCount].txt);
				$bannerArea.find('.slotInfo_price').text(_matInfo[slotCount].price);
				$bannerArea.find('.ATLP_slotAnchor').attr('herf',_matInfo[slotCount].landurl);
				if (skinType==0){detailCustomSet();}
			}
		}else if (structure==2){ // 일체구조
			slotCount=0;
			$bannerArea.find('.ATLP_slot_wrap_'+globalCount).remove();
			// 전체 카운트 증가
			globalCount++;
			// 전체 카운트가 판수를 초과하면 초기화
			if (globalCount>panNum) globalCount=1;
			instSlot();
		}else if (structure==3){ // 카드구조
			slotCount=0;
			$bannerArea.find('.ATLP_slot_wrap_'+globalCount).remove();
			// 전체 카운트 증가
			globalCount++;
			// 전체 카운트가 판수를 초과하면 초기화
			if (globalCount>panNum) globalCount=1;
			instSlot();
		}
	}

	// 이전 판 이동
	function prevListEvnt(){
		if (structure==1){ // 분리구조
			if (shape==1){ // 와이드형
				// 이동대상 캐시
				var $moveBox=$bannerArea.find('.ATLP_slot_wrap_'+globalCount);
				// 슬롯 카운트 초기화
				slotCount = 0;
				// 이동대상이 애니메이트중이면 리턴
				if($moveBox.is(':animated')) return;
				// 이동대상 이동
				$moveBox.stop().animate({left:'100%'},300,function(){
					$(this).detach();
					$bannerArea.find('.ATLP_slotBox:first').addClass('on');
				});
				// 전체 카운트 감소
				globalCount--;
				// 전체 카운트가 판수를 초과하면 초기화
				if (globalCount <= 0) globalCount=panNum;
				panNavigation();
				instSlot();
				$bannerArea.find('.ATLP_slot_wrap_'+globalCount).css({left:'-100%'}).stop().animate({left:'0'},300);
			}else if(shape==2){ // 사각형
				// 1번 (제일 좌측) 좌측 중간으로 이동
					$bannerArea.find('.ATLP_slotBox').eq(0).css({zIndex:'2'}).stop().animate({
						width:slotSecondSize-2+'px',
						height:slotSecondSize-2+'px',
						top:(slotWrapHeight-slotSecondSize)/3+'px',
						left:((areaWidth/4)*1.4)-(slotSecondSize/2)+'px'
						},200);
						$bannerArea.find('.ATLP_slotBox').eq(0).find('.ATLP_slotThum').css({width:slotSecondSize-2+'px',height:slotSecondSize-2+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(0).find('.ATLP_slotBorder').css({width:slotSecondSize-8+'px',height:slotSecondSize-8+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(0).find('.ATLP_maskLayer').css({width:slotSecondSize-2+'px',height:slotSecondSize-2+'px',opacity:'0.4'});
				// 2번 (좌측 중간) 센터로 이동
					$bannerArea.find('.ATLP_slotBox').eq(1).css({zIndex:'3'}).stop().animate({
						width:slotWidth-2+'px',
						height:slotWidth-2+'px',
						top:(slotWrapHeight-slotWidth)/2+2+'px',
						left:(areaWidth-slotWidth)/2+'px'
						},200).addClass('on');
						$bannerArea.find('.ATLP_slotBox').eq(1).find('.ATLP_slotThum').css({width:slotWidth-2+'px',height:slotWidth-2+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(1).find('.ATLP_slotBorder').css({width:slotWidth-8+'px',height:slotWidth-8+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(1).find('.ATLP_maskLayer').css({width:slotWidth-2+'px',height:slotWidth-2+'px'});
				// 3번 (센터) 우측 중간으로 이동
					$bannerArea.find('.ATLP_slotBox').eq(2).css({zIndex:'2'}).stop().animate({
						width:slotSecondSize-2+'px',
						height:slotSecondSize-2+'px',
						top:(slotWrapHeight-slotSecondSize)/3+'px',
						left:((areaWidth/4)*2.6)-(slotSecondSize/2)+'px'
						},200).removeClass('on');
						$bannerArea.find('.ATLP_slotBox').eq(2).find('.ATLP_slotThum').css({width:slotSecondSize-2+'px',height:slotSecondSize-2+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(2).find('.ATLP_slotBorder').css({width:slotSecondSize-8+'px',height:slotSecondSize-8+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(2).find('.ATLP_maskLayer').css({width:slotSecondSize-2+'px',height:slotSecondSize-2+'px',opacity:'0.4'});
				// 4번 (우측 중간) 제일 우측으로 이동
					$bannerArea.find('.ATLP_slotBox').eq(3).css({zIndex:'1'}).stop().animate({
						width:slotThirdSize-2+'px',
						height:slotThirdSize-2+'px',
						top:'0px',
						left:areaWidth-(slotThirdSize+4)+'px'
						},200);
						$bannerArea.find('.ATLP_slotBox').eq(3).find('.ATLP_slotThum').css({width:slotThirdSize-2+'px',height:slotThirdSize-2+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(3).find('.ATLP_slotBorder').css({width:slotThirdSize-8+'px',height:slotThirdSize-8+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(3).find('.ATLP_maskLayer').css({width:slotThirdSize-2+'px',height:slotThirdSize-2+'px',opacity:'0.8'});

				// 1번 (제일 좌측) 슬롯 데이터 저장 및 Dom 삭제
					//setResultData[slotCount] = $bannerArea.find('.ATLP_slotBox').eq(4).detach();
					$bannerArea.find('.ATLP_slotBox').eq(4).remove();

				slotCount--;
				if (slotCount<0){ slotCount=setResultData.length-1; }

				$bannerArea.find('.slotInfo_product').text(_matInfo[slotCount].txt);
				$bannerArea.find('.slotInfo_price').text(_matInfo[slotCount].price);
				$bannerArea.find('.ATLP_slotAnchor').attr('herf',_matInfo[slotCount].landurl);

				// 마지막 슬롯 생성
					$bannerArea.find('.ATLP_slot_wrap').prepend(setResultData[slotCount]);
				// 마지막 슬롯 스타일 지정
					$bannerArea.find('.ATLP_slotBox').eq(0).css({
						zIndex:'1',
						width:slotThirdSize-2+'px',
						height:slotThirdSize-2+'px',
						top:'0px',
						left:'4px'
						});
						$bannerArea.find('.ATLP_slotBox').eq(0).find('.ATLP_slotThum').css({width:slotThirdSize-2+'px',height:slotThirdSize-2+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(0).find('.ATLP_slotBorder').css({width:slotThirdSize-8+'px',height:slotThirdSize-8+'px'});
						$bannerArea.find('.ATLP_slotBox').eq(0).find('.ATLP_maskLayer').css({width:slotThirdSize-2+'px',height:slotThirdSize-2+'px',opacity:'0.8'});
				if (skinType==0){detailCustomSet();}
			}
		}else if (structure==2){ // 일체구조
			slotCount=0;
			$bannerArea.find('.ATLP_slot_wrap_'+globalCount).remove();
			// 전체 카운트 감소
			globalCount--;
			// 전체 카운트가 0이면 panNum 으로 초기화
			if (globalCount<=0) globalCount=panNum;
			instSlot();
		}
		// 카드구조는 이전 판 이동이 없음
	}

	// 단일 판
	function oneListEvnt(){
		slotCount=0;
		$bannerArea.find('.ATLP_slot_wrap_'+globalCount).remove();
		instSlot();
	}

	// 판 버튼 클릭
	function panMoveEvnt($this){
		if (globalCount!=$this.attr('value')){
			$bannerArea.find('.ATLP_slot_wrap_'+globalCount).stop().clearQueue().animate({left:'-100%'},300,function(){
				$(this).detach();
				$bannerArea.find('.ATLP_slotBox:first').addClass('on');
			});
			globalCount=$this.attr('value');
			panNavigation();
			slotCount=0;
			if (globalCount > panNum) globalCount=1;
			instSlot();
			$bannerArea.find('.ATLP_slot_wrap_'+globalCount).css({left:'100%'}).stop().animate({left:'0'},300);
		}
	}

	// 슬롯 호버 액션
	function slotHover($this){
		if (structure==1){ // 분리구조
			if (shape==1){ // 와이드형
				$bannerArea.find('.ATLP_slotBox').removeClass('on').find('.ATLP_maskLayer').show();	//미선택
				var $on_obj=$this.addClass('on');
				$on_obj.find('.ATLP_maskLayer').hide();
				slotCount=parseInt($this.attr('value'));
				$bannerArea.find('.ATLP_coursor').stop().animate({left:(coursorPos*slotCount)+(coursorPos/2)+'px'},300);
				var idx=slotCount+(slotNum*(globalCount-1));
				$bannerArea.find('.slotInfo_product').text(_matInfo[idx].txt);
				$bannerArea.find('.slotInfo_price').text(_matInfo[idx].price);
				$bannerArea.find('.ATLP_slotAnchor').attr('herf',_matInfo[idx].landurl);
				// 상품정보 영역 변경
				infoPriceWidth=$bannerArea.find('.ATLP_Info_wrap .slotInfo_price').outerWidth();
				$bannerArea.find('.slotInfo_product').css({width:bannerBoxWidth-(infoPriceWidth+infoButtonWidth)+'px'});
			}
			// 사각형은 호버 액션이 없음
		}else if (structure==2){ // 일체구조
			if (shape==6){
					var $slotThum=$this.find('.ATLP_slotThum');
					var $slotInfo=$this.find('.ATLP_slotInfo');
					slotCount=$this.attr('value');
					clearTimeout(S2S6_actionCheck);
					$this.css({
						zIndex:'4',
						left:'0',
						top:'0',
						width:slotWrapWidth+'px',
						height:slotWrapHeight-6+'px',
						margin:'3px 0 0 0'
					}).addClass('on');
					if (slotNum<=4){
						$slotThum.css({
							width:slotWrapWidth+'px',
							height:slotWrapHeight-6+'px'
						});
						$slotThum.find('img').animate({
							left:'-10%',
							top:'-10%',
							width:'120%',
							height:'120%'
						},100).animate({
							left:'0',
							top:'0',
							width:'100%',
							height:'100%'
							},200);
						$this.find('.ATLP_maskLayer').show();
						$slotInfo.css({top:(slotWrapHeight-6-$slotInfo.height())/2+'px'});
					}else{
						if(slotWrapWidth*0.54>slotWrapHeight-6){// 가로
							$slotThum.find('img').css({width:'auto',height:'92%'});
						}else{ // 세로
							$slotThum.find('img').css({width:'92%',height:'auto'});
						}
						$slotThum.css({
							width:'54%',
							height:slotWrapHeight-6+'px'
						}).find('img').css({
							marginTop:(slotWrapHeight-6-$slotThum.find('img').height())/2+'px'
						});
						$slotInfo.css({
							top:(slotWrapHeight-6-$slotInfo.height())/2+'px'
						});
						$slotInfo.find('.slotInfo_product').stop().animate({left:'-20px'},120)
							.animate({left:'0'},120,function(){
								$slotInfo.find('.slotInfo_price').animate({left:'-20px'},120)
									.animate({left:'0'},120,function(){
										$slotInfo.find('.slotInfo_button').animate({left:'-20px'},120)
											.animate({left:'0'},120);
									});
							});
					}
					$slotInfo.show();
			}else if (shape==7||shape==8||shape==9||shape==10){
				$bannerArea.find('.ATLP_slotBox').removeClass('on');
				$this.addClass('on');
				slotCount=parseInt($this.attr('value'));
				$this.find('img').animate({
					left:'-50%',top:'-50%',width:'200%',height:'200%'
				},3000);
				var slotBorderCheck=false;
				slotBorderOnOff=setInterval(function(){
					if (!slotBorderCheck){
						$this.find('.ATLP_slotBorder').hide();
						slotBorderCheck=true;
					}else{
						$this.find('.ATLP_slotBorder').show();
						slotBorderCheck=false;
					}
				},300);
			}else{
				$bannerArea.find('.ATLP_slotBox').removeClass('on').find('.ATLP_maskLayer').show();
				var $on_obj=$this.addClass('on');
				$on_obj.find('.ATLP_maskLayer').hide();
				slotCount=parseInt($this.attr('value'));
			}
		}else if (structure==3){ // 카드구조
			slotCount=parseInt($this.attr('value'));
			$bannerArea.find('.ATLP_slotBox').removeClass('on');
			$this.removeClass('af').addClass('on');
			// 호버한 시점보다 작은 인덱스 슬롯의 경우
			for (i=0,j=10; i<slotCount; i++,j--){
				$bannerArea.find('.ATLP_slotBox').eq(slotCount-1-i).addClass('af').css('zIndex',j);
			}
			// 호버한 시점보다 큰 인덱스 슬롯의 경우
			for (i=0,j=10; i<(9-slotCount); i++,j--){
				$bannerArea.find('.ATLP_slotBox').eq(slotCount+1+i).removeClass('af').css('zIndex',j);
			}
		}
	}

	// 슬롯 아웃 액션
	function slotOut($this){
		if (structure==1&&shape==1){
			$bannerArea.find('.ATLP_maskLayer').hide();
		}else if (structure==2){
			if (shape==6){
					$this.css({
						left:(slotCount%(slotNum/2))*(slotWidth+slotMarginW)+'px',
						top:parseInt(slotCount/(slotNum/2))*slotHeight+'px',
						width:slotWidth-6+'px',
						height:slotHeight-6+'px',
						margin:'3px 0 3px '+slotMarginW/2+'px',
						zIndex:'1'
					}).removeClass('on')
					.find('.ATLP_slotThum').css({
						width:slotWidth-6+'px',
						height:slotHeight-6+'px'
					})
					.find('img').css({
						width:'100%',
						height:'100%',
						marginTop:'0px'
					});
					$this.find('.ATLP_slotInfo').hide().css({top:'0px'});
					$this.find('.ATLP_maskLayer').hide();
					slotCount++;
			}else if(shape==7||shape==8||shape==9||shape==10){
				$bannerArea.find('.ATLP_slotThum img').stop().css({left:'0',top:'0',width:'100%',height:'100%'});
				clearInterval(slotBorderOnOff);
				$this.find('.ATLP_slotBorder').show();
			}else{
				$bannerArea.find('.ATLP_maskLayer').hide();
			}
		}
	}

	// 커스텀 스타일 적용
	function detailCustomSet(){
		var $customSkin=$('.ATLP_skin_0');
		$customSkin.css('background',areaBG);
		$customSkin.find('.ATLP_head').css('background',headBG);
		$customSkin.find('.ATLP_body').css('background',bodyBG);
		$customSkin.find('.ATLP_foot').css('background',infoBG);
		$customSkin.find('.ATLP_slotBorder').css('border-color',focusBD);
		$customSkin.find('.slotInfo_product').css('color',infoTxt);
		$customSkin.find('.slotInfo_price').css('color',priceTxt);
		$customSkin.find('.ATLP_maskLayer').css('background',maskBG);
	}

	// 최초 실행
	stratAniBanner=setTimeout(slotAction, delayTime);

	// 문서 로딩 후 함수 작동
		$(document).ready(function(){
			setBaseSize(); // 기본 DOM 생성
			makeSlot(); // 슬롯 생성
			instSlot(); // 슬롯 출력(삽입)

			// 마우스 오버, 클릭 함수 jQuery 버전별 분기
			if(Number(($.fn.jquery.split(".")).slice(0,2).join("")) < Number(("1.7".split(".")).slice(0,2).join(""))){
			// 1.7 이하
				if(!isMobile){ // 일반 데스크탑에서 호버 이벤트
					$bannerArea.delegate('.ATLP_slotBox','mouseenter',function(){
						slotHover($(this));
					});
					if (structure==2&&shape==6||shape==7||shape==8||shape==9||shape==10){
						$bannerArea.delegate('.ATLP_slotBox','mouseleave',function(){slotOut($(this));});
					}else{
						$bannerArea.delegate('.ATLP_slot_wrap','mouseleave',function(){slotOut($(this));});
					}
					$bannerArea.live('mouseenter',function(){
						clearTimeout(stratAniBanner);
					});
					$bannerArea.live('mouseleave',function(){
						stratAniBanner=setTimeout(slotAction, delayTime);
					});
				}else{ // 모바일에서 터치 이벤트
					$bannerArea.find('.ATLP_body').live('touchstart',function(e){
						clearInterval(stratAniBanner);
						var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
						touchStartPageX=touch.pageX;
					});
					$bannerArea.find('.ATLP_body').live('touchmove',function(e){
						var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
						touchMovePageX=touch.pageX;
						var touchMoveX=touchStartPageX-touchMovePageX;
						if (touchMoveX>10 || touchMoveX<-10){ e.preventDefault(); }
					});
					$bannerArea.find('.ATLP_body').live('touchend',function(e){
						var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
						touchEndPageX=touch.pageX;
						if ((touchStartPageX-touchEndPageX) > 50){
							if (structure==1){
								nextListEvnt();
								stratAniBanner=setTimeout(slotAction, delayTime);
							}else if (structure==2 && shape==6||shape==7||shape==8||shape==9){
								nextListEvnt();
								stratAniBanner=setTimeout(slotAction, delayTime);
							}else if (structure==3){
								directionCheck=false;
								slotAction();
							}
						}else if((touchStartPageX-touchEndPageX) < -50){
							if (structure==1){
								prevListEvnt();
								stratAniBanner=setTimeout(slotAction, delayTime);
							}else if (structure==2 && shape==6||shape==7||shape==8||shape==9){
								prevListEvnt();
								stratAniBanner=setTimeout(slotAction, delayTime);
							}else if (structure==3){
								directionCheck=true;
								slotAction();
							}
						}
						stratAniBanner=setTimeout(slotAction, delayTime);
					});
				}
				$bannerArea.delegate('.ATLP_btn_right','click',function(){
					nextListEvnt();
					clearTimeout(stratAniBanner);
				});
				$bannerArea.delegate('.ATLP_btn_left','click',function(){
					prevListEvnt();
					clearTimeout(stratAniBanner);
				});
				$bannerArea.find('.ATLP_panList').delegate('.ATLP_panNum','click',function(){
					panMoveEvnt($(this));
					clearTimeout(stratAniBanner);
				});
			}else{
			// 1.7 이상
				if(!isMobile){ // 일반 데스크탑에서 호버 이벤트
					$bannerArea.on('mouseenter','.ATLP_slotBox',function(){
						slotHover($(this));
					});
					if (structure==2&&shape==6||shape==7||shape==8||shape==9||shape==10){
						$bannerArea.on('mouseleave','.ATLP_slotBox',function(){slotOut($(this));});
					}else{
						$bannerArea.on('mouseleave','.ATLP_slot_wrap',function(){slotOut($(this));});
					}
					$bannerArea.on('mouseenter',function(){
						clearTimeout(stratAniBanner);
					});
					$bannerArea.on('mouseleave',function(){
						stratAniBanner=setTimeout(slotAction, delayTime);
					});
				}else{ // 모바일에서 터치 이벤트
					$bannerArea.find('.ATLP_body').on('touchstart',function(e){
						clearInterval(stratAniBanner);
						var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
						touchStartPageX=touch.pageX;
					});
					$bannerArea.find('.ATLP_body').on('touchmove',function(e){
						var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
						touchMovePageX=touch.pageX;
						var touchMoveX=touchStartPageX-touchMovePageX;
						if (touchMoveX>10 || touchMoveX<-10){ e.preventDefault(); }
					});
					$bannerArea.find('.ATLP_body').on('touchend',function(e){
						var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
						touchEndPageX=touch.pageX;
						if ((touchStartPageX-touchEndPageX) > 50){
							if (structure==1){
								nextListEvnt();
								stratAniBanner=setTimeout(slotAction, delayTime);
							}else if (structure==2 && shape==6||shape==7||shape==8||shape==9){
								nextListEvnt();
								stratAniBanner=setTimeout(slotAction, delayTime);
							}else if (structure==3){
								directionCheck=false;
								slotAction();
							}
						}else if((touchStartPageX-touchEndPageX) < -50){
							if (structure==1){
								prevListEvnt();
								stratAniBanner=setTimeout(slotAction, delayTime);
							}else if (structure==2 && shape==6||shape==7||shape==8||shape==9){
								prevListEvnt();
								stratAniBanner=setTimeout(slotAction, delayTime);
							}else if (structure==3){
								directionCheck=true;
								slotAction();
							}
						}
					});
				}
				$bannerArea.on('click','.ATLP_btn_right',function(){
					nextListEvnt();
					clearTimeout(stratAniBanner);
				});
				$bannerArea.on('click','.ATLP_btn_left',function(){
					prevListEvnt();
					clearTimeout(stratAniBanner);
				});
				$bannerArea.find('.ATLP_panList').on('click','.ATLP_panNum', function(){
					panMoveEvnt($(this));
					clearTimeout(stratAniBanner);
				});
			}

			$(window).resize(function(){
				clearTimeout(stratAniBanner);
				setAdtiveTargetviewLink();
			});
		});// $(document).ready()
}// setAdtiveTargetviewLink
