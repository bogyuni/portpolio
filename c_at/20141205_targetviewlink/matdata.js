// 데이터 처리 단계
	// 영역 정보
		var areaInfo = {
			'bannerID' : 'adtiveBanner1_1',
			'width' : '540',
			'height' : '140'
		};
	// 스타일 정보
		var bannerStyle = {
			'structure' : '1', // 구조
			'shape' : '1', // 형태
			'skinType' : '3' // 스킨
		};
	// 세부정보 설정
		var detailCustom = {
			'areaBG' : '#efefef', // 전체 배경
			'headBG' : 'none', // 상단 배경
			'bodyBG' : '#ffffff', // 슬롯 리스트 영역 배경
			'infoBG' : 'none', // 상품 정보 배경
			'focusBD' : '#ff0000', // 포커스 되는 상품 테두리 컬러
			'infoTxt' : '#ffffff', // 상품정보 텍스트 컬러
			'priceTxt' : '#ff0000', // 상품가격 텍스트 컬러
			'maskBG' : '#000000', // 마스크 컬러
			'btnType' : '3' // 상품 슬롯 내부 버튼 이미지
		};
	// 소재 정보
		var matInfo = [];
			matInfo.push(
				{
					'img' : 'images/@temp1.gif',
					'txt' : '1번 1번 1번 1번 1번 1번 1번 1번 1번 1번 [상품제목] 상품설명 상품은 1번 상품입니다',
					'price' : '1,000 원',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp2.gif',
					'txt' : '[상품제목] 222',
					'price' : '\\ 2,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp3.gif',
					'txt' : '[상품제목] 상품설명 상품은 3번 상품입니다',
					'price' : '\\ 333,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp4.gif',
					'txt' : '[상품제목] 상품설명 상품은 4번 상품입니다',
					'price' : '\\ 4,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp5.gif',
					'txt' : '[상품제목] 상품설명 상품은 5번 상품입니다',
					'price' : '\\ 5,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp6.gif',
					'txt' : '[상품제목] 상품설명 상품은 6번 상품입니다',
					'price' : '\\ 6,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp7.jpg',
					'txt' : '[상품제목] 상품설명 상품은 7번 상품입니다',
					'price' : '\\ 7,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp8.jpg',
					'txt' : '[상품제목] 상품설명 상품은 8번 상품입니다',
					'price' : '\\ 888,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp9.jpg',
					'txt' : '[상품제목] 상품설명 상품은 9번 상품입니다',
					'price' : '\\ 9,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp10.jpg',
					'txt' : '[상품제목] 상품설명 상품은 10번 상품입니다',
					'price' : '\\ 10,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp11.jpg',
					'txt' : '[11] 11번 상품입니다상품입니다상품입니다상품입니다상품입니다',
					'price' : '\\ 111,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp12.jpg',
					'txt' : '[12] 상품설명 상품은 12번 상품입니다 상품입니다 상품입니다 상품입니다 상품입니다',
					'price' : '\\ 121212,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp13.jpeg',
					'txt' : '[13131313131] 상품설명 상품은 10번 상품입니다',
					'price' : '\\ 10,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp14.jpg',
					'txt' : '[1414141414] 상품설명 상품은 10번 상품입니다',
					'price' : '\\ 10,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp15.jpg',
					'txt' : '[1515151515] 상품설명 상품은 10번 상품입니다',
					'price' : '\\ 10,000',
					'landurl' : 'http://2beon.co.kr'
				},{
					'img' : 'images/@temp16.jpg',
					'txt' : '[16161616] 상품설명 상품은 10번 상품입니다',
					'price' : '\\ 10,000',
					'landurl' : 'http://2beon.co.kr'
				}
			);



		var areaInfo1_2 = {'bannerID' : 'adtiveBanner1_2', 'width' : '240', 'height' : '240'};
		var bannerStyle1_2 = {'structure' : '1', 'shape' : '2', 'skinType' : '1'};

		var areaInfo2_1 = {'bannerID' : 'adtiveBanner2_1', 'width' : '600', 'height' : '160'};
		var bannerStyle2_1 = {'structure' : '2', 'shape' : '1', 'skinType' : '1'};

		var areaInfo2_2 = {'bannerID' : 'adtiveBanner2_2', 'width' : '240', 'height' : '240'};
		var bannerStyle2_2 = {'structure' : '2', 'shape' : '2', 'skinType' : '2'};

		var areaInfo2_3 = {'bannerID' : 'adtiveBanner2_3', 'width' : '130', 'height' : '540'};
		var bannerStyle2_3 = {'structure' : '2', 'shape' : '3', 'skinType' : '1'};

		var areaInfo2_4 = {'bannerID' : 'adtiveBanner2_4', 'width' : '320', 'height' : '50'};
		var bannerStyle2_4 = {'structure' : '2', 'shape' : '4', 'skinType' : '2'};

		var areaInfo2_5 = {'bannerID' : 'adtiveBanner2_5', 'width' : '320', 'height' : '50'};
		var bannerStyle2_5 = {'structure' : '2', 'shape' : '5', 'skinType' : '1'};

		var areaInfo2_6 = {'bannerID' : 'adtiveBanner2_6', 'width' : '240', 'height' : '220'};
		var bannerStyle2_6 = {'structure' : '2', 'shape' : '6', 'skinType' : '1'};

		var areaInfo2_6_2 = {'bannerID' : 'adtiveBanner2_6_2', 'width' : '340', 'height' : '220'};
		var bannerStyle2_6_2 = {'structure' : '2', 'shape' : '6', 'skinType' : '2'};

		var areaInfo2_7 = {'bannerID' : 'adtiveBanner2_7', 'width' : '260', 'height' : '110'};
		var bannerStyle2_7 = {'structure' : '2', 'shape' : '7', 'skinType' : '1'};

		var areaInfo2_8 = {'bannerID' : 'adtiveBanner2_8', 'width' : '540', 'height' : '100'};
		var bannerStyle2_8 = {'structure' : '2', 'shape' : '8', 'skinType' : '2'};

		var areaInfo2_9 = {'bannerID' : 'adtiveBanner2_9', 'width' : '640', 'height' : '180'};
		var bannerStyle2_9 = {'structure' : '2', 'shape' : '9', 'skinType' : '1'};

		var areaInfo2_10 = {'bannerID' : 'adtiveBanner2_10', 'width' : '120', 'height' : '600'};
		var bannerStyle2_10 = {'structure' : '2', 'shape' : '10', 'skinType' : '1'};

		var areaInfo3_1 = {'bannerID' : 'adtiveBanner3_1', 'width' : '600', 'height' : '160'};
		var bannerStyle3_1 = {'structure' : '3', 'shape' : '1', 'skinType' : '1'};

		var areaInfo3_2 = {'bannerID' : 'adtiveBanner3_2', 'width' : '240', 'height' : '260'};
		var bannerStyle3_2 = {'structure' : '3', 'shape' : '2', 'skinType' : '2'};

		var areaInfo3_3 = {'bannerID' : 'adtiveBanner3_3', 'width' : '130', 'height' : '540'};
		var bannerStyle3_3 = {'structure' : '3', 'shape' : '3', 'skinType' : '1'};
