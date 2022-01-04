;(function($) {
$(window).load(function() {setTimeout(function() {

	if (GALAXY.isGPSI) {
		return;
	}

	var
		mode = 'list',

		list,
		view,

		$document = $(document.documentElement),
		$body = $(document.body),
		pageMap = {},
		indexMap = {},
		imageURLs = [],
		videoURLs = [],
		exifInfos = [],
		descriptions = [],
		changurlhowTo = [],
		changurlhowTotit = [],
		changHtmltit = [],
		changeurl360 = [],
		changebodyMsg = [],
		changebodyTag = [],
		biturl = [],

		isMobile = $.browser.mobile,
		isAndroid = $.browser.android,
		isChrome = $.browser.chrome,
		isPoorBrowser = GALAXY.isPoorBrowser,
		supportPushstate = $.support.pushstate,
		locationBase =  GALLERY_CONFIG['location'],

		regDetailHashID = /\/([0-9]+)/,
		regDetailID = /\/gallery\/([0-9]+)\/?$/,
		checkUrlhowto = /how-to\/([A-Z0-9-_]+)/i,

		clickedIndex = -1,
		numItems = 0,

		savedScrollTop = 0,

		pushCheck = true,

		hasSubNav = $('#wrap').hasClass('has-subnav'),
		initializeWithHash = false,
		windowLoaded = false,
		checkhowTo = $('#sg_view').attr('data-howto'),
		checkvr360 = $('#sg_view').attr('data-vr360'),
		checkPopup= $('#sg_view').attr('data-popup'),
		checkMsg = $('#sg_list').attr('data-type-msg'),
		checkTag = $('body').attr('data-tag'),
		checkNewgallery = $('#sg_list').attr('data-new-gallery'),
		baseTitle;



	baseTitle = 'Gallery |' + $(document).attr('title').split('|')[1];

	if ((locationBase === undefined) || (locationBase==='')) {
		locationBase = '';
	}

	list = (function() {

		if (!$('#sg_list').length) {
			return false;
		}

		var
			$box = $('#sg_list'),
			$listBox = $box.find('div.sg_list'),

			$items = $((checkNewgallery===undefined||checkNewgallery==='') ? $listBox.find('li').remove() : $listBox.find('.imgbox')),
			$moreButton = $box.parent().find('div.sg_button a'),
			$links = [],
			$imgBoxs = [],
			$img,

			widthMap = [],
			colWidthMap = [],
			numItemsInRowMap = [],

			rowsOnAdd = GALLERY_CONFIG['rows on add'] || 4,
			rowIndex = 0,
			currentRow = rowsOnAdd,
			itemIndex = 0,
			maxWidthAtRow = 0,

			itemGap = 10,
			sizeMode = -1,

			tryToReset = false,

			i = 0;

		if ((checkNewgallery===undefined||checkNewgallery==='')) {
			$items.find('a').click(GALAXY.tracking);
		}
		numItems = $items.length;
		for (; i < numItems; i++) {
			$items[i] = $($items[i]);
			href = $items[i].find('a').attr('href');
			var countArr = href.split('/');
			if ((checkMsg!=undefined)) {
				changebodyMsg[i] = $items[i].find('a img').attr('data-body-msg');
				changebodyTag[i] = $items[i].find('a img').attr('data-body-tag');
			}
			if ((checkhowTo===undefined||checkhowTo==='')) {
				page = countArr[countArr.length - 2];
				indexMap[page] = i;
				pageMap[i] = page;
				changHtmltit[i] = $items[i].find('a img').attr('data-html-tit');
				if ((checkvr360!=undefined)) {
					page = i;
					indexMap[i] = i;
					pageMap[i] = page;
					changeurl360[i] = countArr[countArr.length - 2] + '/';
				} else if (checkPopup!=undefined) {
					page = i;
					indexMap[i] = i;
					pageMap[i] = page;
					changeurl360[i] = countArr[countArr.length - 2] + '/';
				}
			} else {
				page = i;
				indexMap[i] = i;
				pageMap[i] = page;
				changurlhowTo[i] = countArr[countArr.length - 2] + '/';
				changurlhowTotit[i] = $items[i].find('a img').attr('data-html-tit');
				biturl[i] = $items[i].find('a img').attr('data-bit');
			}
			$links[i] = $items[i].find('a')
				.attr('data-index', i).click(click);
			$img = $links[i].find('.img img');
			imageURLs[i] = $img.attr('data-image').replace('thumb_gallery', 'gallery');
			videoURLs[i] = $img.attr('data-video');
			exifInfos[i] = $links[i].attr('data-exif');
			descriptions[i] = $img.attr('data-alt2');
			$img.attr('src', $img.attr('data-image'));
			$img.removeAttr('data-image').removeAttr('data-alt2');
			$imgBoxs[i] = $items[i].find('div.img');
			widthMap[i] = $imgBoxs[i].hasClass('x') ? 1 : $imgBoxs[i].hasClass('xs') ? 0.75 : 0.316;
		}
		$moreButton.click(more);

		function hover() {
			var index = parseInt(this.getAttribute('data-index')), i = 0;
			for (; i < itemIndex; i++) {
				$items[i].decideClass('off', i != index);
			}
		}

		function leave() {
			var index = parseInt(this.getAttribute('data-index')), i = 0;
			for (; i < itemIndex; i++) {
				$items[i].removeClass('off');
			}
		}
	 /*function stopVideo() {
		var div = document.getElementsByClassName("m_content_video-viewer");
		var iframe = div[0].getElementsByTagName("iframe")[0].contentWindow;
		iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
	 }*/

		function click(e) {

			var index = parseInt(this.getAttribute('data-index'));
			var link = this.getAttribute('data-link');
			if (supportPushstate) {
				if (link == null) {
					if (clickedIndex != index) {
						pushCheck = true;
						view.changeIndex(index);

					}
					return false;
				}
			} else if (!supportPushstate && !GALAXY.isGalaxy) {
				pushCheck = true;
				view.changePage(pageMap[index]);
				return false;
			}

		}

		function resetItems() {
			for (var i = 0; i < numItems; i++) {
				$items[i].detach();
			}
			$listBox.empty();
			itemIndex = rowIndex = 0;
			colWidthMap.length = numItemsInRowMap.length = 0;
			fillItems();
			buttonCheck();
		}

		function fillItems() {

			var $row, col, toCol, colWidth, numItemsInRow;

			for (; rowIndex < currentRow; rowIndex++) {

				for (col = 0, toCol = maxWidthAtRow*10, colWidth = 0, numItemsInRow = 0; col < toCol; col++) {
					if (numItems > col+itemIndex) {
						if (maxWidthAtRow >= colWidth + widthMap[itemIndex+col]) {
							colWidth += widthMap[itemIndex+col];
							numItemsInRow++;
						} else {
							break;
						}
					}
				}
				colWidthMap[rowIndex] = colWidth;
				numItemsInRowMap[rowIndex] = numItemsInRow;

				$row = $('<ul />');
				for (col = 0; col < numItemsInRow; col++, itemIndex++) {
					$items[itemIndex].appendTo($row);
				}
				$row.appendTo($listBox);

				if (itemIndex == numItems) {
					break;
				}
			}

			resizeItems();

		}

		function resizeItems() {

			var col, colWidth, numItemsInRow, widthCanUse, usedWidth, isLastRow,
				boxWidth = $box[0].offsetWidth,
				lastWidths = {},
				$row, $rows = $listBox[0].children, r = 0, i = 0;

			for (; r < currentRow; r++) {

				colWidth = colWidthMap[r];
				numItemsInRow = numItemsInRowMap[r];

				usedWidth = 0;
				widthCanUse = boxWidth-(numItemsInRow-1)*itemGap;
				isLastRow = i+numItemsInRow == numItems;

				$row = $($rows[r]).css('height', '');
				for (col = 0; col < numItemsInRow; col++, i++) {
					width = col == numItemsInRow-1 ? boxWidth-usedWidth : widthCanUse/colWidth*widthMap[i];
					if (isLastRow && maxWidthAtRow > colWidth) {
						width = widthMap[i] * boxWidth/maxWidthAtRow;
					} else {
						lastWidths[widthMap[i]] = width;
					}
					usedWidth += col != numItemsInRow-1 ? width+10 : 0;
					$items[i].css('width', width);
					if (windowLoaded && !col) {
						$row.css('height', widthMap[i] == 1 ? width/16*9 : widthMap[i] == 0.75 ? width/4*3 : width/9*16);
					}
				}

				if (isLastRow) {
					break;
				}

			}

		}

		function more() {
			currentRow += rowsOnAdd;
			fillItems();
			buttonCheck();
			return false;
		}

		function buttonCheck() {
			$moreButton[itemIndex == numItems ? 'hide' : 'show']();
		}

		function show() {
			mode = 'list';
				if ((checkMsg===undefined||checkMsg==='')) {
					$body.attr({
						'data-msg': GALLERY_CONFIG['share message'],
						'data-tags': GALLERY_CONFIG['share tags']
					});
				}

			$box.show();
			if (tryToReset) {
				resize();
			} else {
				resizeItems();
				setTimeout(function() {
					savedScrollTop && GALAXY.setScrollTop(savedScrollTop);
				}, 0);
			}
			clickedIndex = -1;
		}

		function hide() {
			$box.hide();
		}

		function resize() {
			if(GALAXY.sizeMode > 2){
				for (i = 0; i < numItems; i++) {
			 		if($items[i].find(".img img").attr("data-mobile") == "yes"){
		 				var src = $items[i].find(".img img").attr('src').replace('thumb_gallery_m.jpg', 'thumb_gallery.jpg');
		 				$items[i].find(".img img").attr('src',src);
			 		}
			 	}
			}else{
				for (i = 0; i < numItems; i++) {
					if($items[i].find(".img img").attr("data-mobile") == "yes"){
						if ((checkPopup != undefined) && ($items[i].find("img").attr('data-video') != undefined) && ($items[i].find("img").attr('data-main') == "yes")) {
							var src = $items[i].find(".img img").attr('src').replace('thumb_gallery_m.jpg', 'thumb_gallery.jpg');
			 				$items[i].find(".img img").attr('src',src);
			 			} else {
							var src = $items[i].find(".img img").attr('src').replace('thumb_gallery.jpg', 'thumb_gallery_m.jpg');
							$items[i].find(".img img").attr('src',src);
						}
					}
				}
			}
			var _sizeMode = 3 > GALAXY.sizeMode ? 1 : 2;
			tryToReset = false;
			if (sizeMode != _sizeMode) {
				if (mode == 'list') {
					sizeMode = _sizeMode;
					maxWidthAtRow = sizeMode == 2 ? 3 : 2;
					if ((checkNewgallery === undefined) || (checkNewgallery==='')) {
						resetItems();
					}
				} else {
					tryToReset = true;
				}
			} else {
				resizeItems();
			}

		}

		return {
			show: show,
			hide: hide,
			getItems: function() {
				return $items;
			},
			resize: resize
		}

	})();


	view = (function() {
		var $box = $('#sg_view'),
			$detailImage = $box.find('div.gallery_img_area > .img > img'),
			$detailImagebox = $box.find('div.gallery_img_area .img'),
			$vrbox = $box.find('#containerMin'),
			$detailVideoFrame = $box.find('div.gallery_img_area .vod-frame'),
			$detailVideo = $box.find('div.gallery_img_area .vod-src'),
			$prev = $box.find('div.gallery_image a[class*="-prev"]'),
			$next = $box.find('div.gallery_image a[class*="-next"]'),
			$shareLinks = $box.find('div.gallery_share a'),
			$backButton = $box.find('div.goto_back a')
			$current = $box.find('div.gallery_control em.current'),
			$thumbnail = $box.find('div.gallery_thumbnail ul'),
			$thumbScroller = $thumbnail.parent(),
			$thumbBar = $box.find('div.gallery_control a.drag_bar'),
			$thumbBarArea = $thumbBar.parent(),
			$photoInfo = $('div.photo_info em'),
			$listItems = list.getItems(),
			$listTit = $box.children('.intit'),
			$listWord = $box.children('.inword'),
			$thumbs = [],
			$vr360 = [],
			$textTit = [],
			$textWord = [],
			$vr360Div = $box.find('.vr360_Area'),
			$howToMoreBtn = $box.find('.learn_more a'),
			$herfMore = [],
			$omniMore = [],
			$detailImageclick = $box.find('div.gallery_img_area > .img > a'),
			galleryTit = $(document).attr('title'),
			blankImageURL = $detailImage.attr('src'),

			downX = 0,
			downLeft = 0,

			isDragging = false,
			thumbBarFocused = false,

			i = 0;
		var setTime,
			setPage;

		for (; i < numItems; i++) {
			if ((checkhowTo===undefined||checkhowTo==='')) {
				$thumbs[i] = $listItems[i].clone(true).appendTo($thumbnail);
			} else {
				$thumbs[i] = $listItems[i].clone(true).appendTo($thumbnail);
				$thumbnail.find('li').eq(i).find('img').attr('src', $thumbnail.find('li').eq(i).find('img').attr('src').replace('.jpg', '_s.jpg'));
				$textTit[i] = $thumbnail.find('li').eq(i).find('img').attr('data-tit');
				$textWord[i] = $thumbnail.find('li').eq(i).find('img').attr('data-word');
				$herfMore[i] = $thumbnail.find('li').eq(i).find('img').attr('data-more');
				$omniMore[i] = $thumbnail.find('li').eq(i).find('a').attr('data-omni');
				$thumbnail.find('li').eq(i).find('a').attr('data-omni', 'thumbnail:' + $omniMore[i])
			}
			$vr360[i] = $listItems[i].find('a').attr('data-vr');
		}
		$box.find('strong.count span').html(numItems);
		$shareLinks.click(GALAXY.sharing);
		$backButton.click(back);

		if($box.hasClass("fullLayer")){
			$prev = $box.find('div.gallery_image a[class*="-prev"],div.gallery_thumbnail a[class*="-prev"]'),
			$next = $box.find('div.gallery_image a[class*="-next"],div.gallery_thumbnail a[class*="-next"]');
		}
		$prev.click(function() {
			pushCheck = true;
			if (supportPushstate) {
				clickedIndex && changeIndex(clickedIndex-1);
				return false;
			} else if (!supportPushstate && !GALAXY.isGalaxy) {
				pushCheck = true;
				view.changePage(pageMap[clickedIndex - 1]);
				return false;
			} else {
				$(this).attr('href', $thumbs[clickedIndex-1].find('a').attr('href'));
			}
		});
		$next.click(function() {
			pushCheck = true;
			if (supportPushstate) {
				numItems-1 > clickedIndex && changeIndex(clickedIndex+1);
				return false;
			} else if (!supportPushstate && !GALAXY.isGalaxy) {
				pushCheck = true;
				view.changePage(pageMap[clickedIndex + 1]);
				return false;
			} else {
				$(this).attr('href', $thumbs[clickedIndex+1].find('a').attr('href'));
			}
		});
		$detailImageclick.click(function () {
			showVideo(videoURLs[clickedIndex]);
			pushCheck = true;
			return false;
		});

		$thumbScroller.bind('scroll', function() {
			if (!isDragging) {
				dragReady();
				$thumbBar.css('left', dragAbleWidth*this.scrollLeft/scrollAbleWidth);
			}
		});
		$thumbBar.bind(GALAXY.getEventType({mousedown: down}));
		$thumbBar.bind('click selectstart dragstart', GALAXY.returnFalse);
		$detailImage.click(function() {
			if (GALAXY.sizeMode == 1 && $('html').hasClass('mobile')) {
				window.open(this.src);
			}
		});
		$thumbBar.bind({
			focus: function() {
				thumbBarFocused = true;
			},
			blur: function() {
				thumbBarFocused = false;
			},
			keydown: function(e) {
				var keycode = e.keyCode;
				if (thumbBarFocused && (keycode == 37 || keycode == 39)) {
					pushCheck = true;
					if (keycode == 37) {
						changeIndex(Math.max(clickedIndex-1, 0));
					} else if (keycode == 39) {
						changeIndex(Math.min(clickedIndex+1, numItems-1));
					}
					return false;
				}
			}
		});


		function dragReady() {
			dragAbleWidth = $thumbBarArea[0].offsetWidth-$thumbBar[0].offsetWidth;
			scrollAbleWidth = $thumbScroller[0].scrollWidth-$thumbScroller[0].offsetWidth;
		}

		function down(e) {
			isDragging = true;
			dragReady();
			downX = GALAXY.getEventPoint(e)[0];
			downLeft = parseInt($thumbBar[0].style.left || 0);
			$document.bind(GALAXY.getEventType({mousemove: move, mouseup: up}));
			e.preventDefault();
		}

		function move(e) {
			var x = GALAXY.getEventPoint(e)[0],
				barX = Math.min(dragAbleWidth, Math.max(0, downLeft+(x-downX)));
			$thumbBar.css('left', barX);
			$thumbScroller.scrollLeft(scrollAbleWidth*barX/dragAbleWidth);
			e.preventDefault();
		}

		function up() {
			isDragging = false;
			$document.unbind(GALAXY.getEventType({mousemove: move, mouseup: up}));
		}

		function changeIndex(index, fromHash) {
			if (supportPushstate) {
				changePage(pageMap[index], fromHash);
			}
		}
		function changePage(page, fromHash) {
			var index = indexMap[page];
			setPage = index;
			if (mode == 'list') {
				savedScrollTop = GALAXY.getScrollTop();
				list.hide();
				show(fromHash);
				!fromHash && setTimeout(setTop, 10);
			}
			if ((checkMsg===undefined) || (checkMsg==='')) {
				$body.attr({
					'data-msg': GALLERY_CONFIG['item share message'],
					'data-tags': GALLERY_CONFIG['item share tags']
				});
			} else {
				$body.attr({
					'data-msg': changebodyMsg[page],
					'data-tags': changebodyTag[page]
				});
			}
			if (clickedIndex != index) {
				clickedIndex > -1 && $thumbs[clickedIndex].removeClass('on');
				$current.html(index+1);
				clickedIndex = index;
				$thumbs[clickedIndex].addClass('on').siblings().removeClass("on");
				if (!$photoInfo.parent().hasClass("font_style")) {
					$photoInfo.html(exifInfos[index]);
				} else {
					var phoneName = exifInfos[index].split('I')[0];
					$photoInfo.html(phoneName);
					$photoInfo.parent().find('span').html(exifInfos[index].split(phoneName));
				}
				if (!isPoorBrowser) {
					if($("#sg_view").hasClass("fullLayer")){
						imageURLs[index] = imageURLs[index].replace("_m","");
					}
					$detailImage.stop().css('opacity', 0).attr('src', imageURLs[index]);
				} else {
					$detailImage.attr('src', imageURLs[index]);
				}
				$detailImage.attr('alt', descriptions[index]);
				GALAXY.loadImage($detailImage, onImageLoad);
				if ((checkhowTo===undefined||checkhowTo==='' )) {
					if (videoURLs[index] != undefined) {
						showVideo(videoURLs[index]);
					} else {
						hideVideo();
					}
					$shareLinks.each(function() {
						var omni = '';
						var no = page;
						if (!$("#sg_view").hasClass("new_mata")) {
							if($("#sg_view").hasClass("fullLayer")){
								no = ':' + changeurl360[page].split('/')[0];
							}else{
							}
							if ($(this).hasClass('facebook')) {
								omni = ':share(facebook)_gallery'+no;
							} else if ($(this).hasClass('twitter')) {
								omni = ':share(twitter)_gallery'+no;
							} else if ($(this).hasClass('googleplus')) {
								omni = ':share(googleplus)_gallery'+no;
							} else if ($(this).hasClass('linkedin')) {
								omni = ':share(linkedin)_gallery'+no;
							}
							if (omni!='') {
								$(this).attr({
									'data-omni': omni
								});
							}
						} else {
							omni = $thumbs[clickedIndex].find('a').data('omni');
							if ($(this).hasClass('facebook')) {
								omni = omni.replace('expand:', 'share(facebook)_gallery:');
							} else if ($(this).hasClass('twitter')) {
								omni = omni.replace('expand:', 'share(twitter)_gallery:');
							} else if ($(this).hasClass('googleplus')) {
								omni = omni.replace('expand:', 'share(googleplus)_gallery:');
							} else if ($(this).hasClass('linkedin')) {
								omni = omni.replace('expand:', 'share(linkedin)_gallery:');
							}
							if (omni!='') {
								$(this).attr({
									'data-omni': omni
								});
							}
						}
					});
					if (GALAXY.isGalaxy) {
						var changeTit = $(document).attr('title').split('|')[1];

						if ( changHtmltit[index] == undefined || changHtmltit == '' ) {
							$(document).attr('title', galleryTit + ' | ' + changeTit);
						} else {
							if($("#sg_view").hasClass("fullLayer")){
								$(document).attr('title', changHtmltit[index] + ' - ' + baseTitle);

								if(checkvr360 == "play"){
									$(document).attr('title', $(document).attr('title').replace('- Gallery', ''));
								}
							}else{
								$(document).attr('title', changHtmltit[index] + ' | ' + changeTit);
							}

						}
					}
				} else {
					var changeTit = $(document).attr('title').split('|')[1];
					if ( changHtmltit[index] == undefined || changHtmltit == '' ) {
						$(document).attr('title', galleryTit + ' | ' + changeTit);
					} else {
						$(document).attr('title', changHtmltit[index] + ' | ' + changeTit);
					}
					if ( $('html').hasClass('mobile') ) {
						$listTit.html($textTit[index]);
						$listWord.html($textWord[index]);
						$('.m_share_gallery_view > strong.count > em.current').html(index+1);
						showVideo(videoURLs[index]);
					} else {
						$listTit.html($textTit[index]);
						$listWord.html($textWord[index]);
						$('.m_share_gallery_view > strong.count > em.current').html(index+1);
						hideVideo();
					}
					$howToMoreBtn.attr('href', $herfMore[index]);
					$howToMoreBtn.attr('data-omni', $omniMore[index] + ':learn more');
					$('.gallery_image nav .c_btn_type1-prev').attr('data-omni', $omniMore[index] + ':arrow_left');
					$('.gallery_image nav .c_btn_type1-next').attr('data-omni', $omniMore[index] + ':arrow_right');
					$('.gallery_img_area .img > a').attr('data-omni', $omniMore[index] + ':play');
					$('.gallery_img_area .img > a').attr('href', videoURLs[index]);
					$shareLinks.each(function() {
						var omni = '';
						var no = page;
						if ($(this).hasClass('facebook')) {
							omni = ':share(facebook)_how-tos'+no;
						} else if ($(this).hasClass('twitter')) {
							omni = ':share(twitter)_how-tos'+no;
						} else if ($(this).hasClass('googleplus')) {
							omni = ':share(googleplus)_how-tos'+no;
						} else if ($(this).hasClass('linkedin')) {
							omni = ':share(linkedin)_how-tos'+no;
						}
						if (omni!='') {
							$(this).attr({
								'data-omni': omni
							});
						}
					});
				}
				if (pushCheck) {
					locationPush(page);
				}
				setButtons();
				if ($vr360[setPage] == 'vr360') {
					$vr360Div.removeClass('on');
				} else {
					$vrbox.html('');
					$vr360Div.removeClass('on');
				}
				setTimeout(setTop, 100);
			}
		}

		function checkVr() {
			if ($vr360Div.length > 0) {
				var vr360 = function (idx) {
					var div = document.getElementById('containerMin');
					window.PSV = new PhotoSphereViewer({
						panorama: idx,
						container: div,
						time_anim: 1000,
						navbar: false,
						allow_scroll_to_zoom: false,
					});
					clearTimeout(setTime);
					setTime = setTimeout(function () {
						$vr360Div.addClass('on');
					}, 500);
				}
				if (!($.browser.ie < 10)) {
					if ($vr360[setPage] != undefined) {
						vr360((isMobile) ? imageURLs[setPage].replace('.jpg', '_m.jpg') : imageURLs[setPage].replace('.jpg', '_vr360.jpg'));
					}
				}
			}
		}

		function onImageLoad() {
			$detailImage.css('opacity', 0)._animate({opacity: 1}, {queue: false, duration: 1000, delay: 10, easing: 'easeInOutQuad', complete:checkVr});
		}

		function hideVideo() {
			$detailVideo.get(0).innerHTML = "";
			$('.gallery_img_area').removeClass('videoS');
			$detailVideoFrame.hide();
			$detailImage.show();
		}

		function showVideo(videoURL) {
			var key = "";
			if (videoURL.indexOf("?v=")>-1) {
				key = videoURL.split("?v=")[1];
			} else if (videoURL.indexOf("youtu.be")>-1) {
				key = videoURL.split("https://youtu.be/")[1];
			}
			var url = "https://www.youtube.com/embed/"+key+"?showinfo=0&amp;wmode=transparent&amp;autoplay=1";
			if($('#sg_view').hasClass("fullLayer") == true){
				var url = "https://www.youtube.com/embed/"+key+"?showinfo=0&amp;wmode=transparent&amp;autoplay=1&rel=0";
			}
			var html = '<iframe id="vod-player" class="vod-player" allowfullscreen title="Video player" src="'+url+'" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>';
			$('.gallery_img_area').addClass('videoS');
			$detailVideoFrame.show();
			$detailVideo.get(0).innerHTML = html;
			$box.find('.vod-player').css({height:$detailImage.height()});
			$detailImage.hide();

		}

		function setButtons() {
			$prev.decideClass('hide', !clickedIndex);
			$next.decideClass('hide', clickedIndex == numItems-1);
			setThumbScroll();
		}

		function setThumbScroll(noAni) {
			var scrollLeftTo;
			if (clickedIndex > -1) {
				noAni = isPoorBrowser ? true : noAni;
				scrollLeftTo = $thumbs[clickedIndex][0].offsetLeft-$thumbScroller[0].offsetWidth/2+$thumbs[clickedIndex][0].offsetWidth/2;
				if (noAni === true) {
					$thumbScroller.scrollLeft(scrollLeftTo);
				} else {
					$thumbScroller.animate({scrollLeft: scrollLeftTo}, {queue: false, duration: 500, easing: 'easeOutCubic'});
				}
			}
		}

		function back() {

			hideVideo();
			locationPush('');
			$vrbox.html('');
			list.show();
			view.hide();

			if ($('.m_content-banner').length) {
				$('.m_content-banner').show();
			}
			return false;
		}

		function show() {

			mode = 'view';

			$box.show();
			LayerType(true);
			resize();


		}

		function hide() {
			$box.hide();
			LayerType(false);

		}

		function LayerType(plug){
			if($box.hasClass("fullLayer")){
				if(plug == true){
					$("html").addClass("fullType");
					$("#wrap").addClass("bright-header");
				}else{
					$("html").removeClass("fullType");
					$("#wrap").removeClass("bright-header");
				}
			}
		}
		function setTop(noAni) {
			if (supportPushstate) {
				noAni = isPoorBrowser ? true : noAni;
				GALAXY[noAni === true ? 'setScrollTop' : 'setSmoothScrollTop']($box[0].getBoundingClientRect().top-(hasSubNav ? 60 : 0)+GALAXY.scrollTop-20);
			} else {
				GALAXY['setScrollTop']($box[0].getBoundingClientRect().top-(hasSubNav ? 60 : 0)+GALAXY.scrollTop-20);
			}

		}

		function resize() {
			if(GALAXY.sizeMode <= 2){
				$prev = $box.find('div.gallery_thumbnail a[class*="-prev"]'),
				$next = $box.find('div.gallery_thumbnail a[class*="-next"]');

			}
			setThumbScroll(true);
			$box.find('.vod-player').css({height:$detailImage.height()});
		}

		return {
			setTop: setTop,
			setThumbScroll: setThumbScroll,
			changeIndex: changeIndex,
			changePage: changePage,
			hide: hide,
			resize: resize
		}



	})();

	if (checkUrlhowto.test(location.href)) {
		initializeWithHash = true;
		var indA = location.href.match(/how-to\/([A-Z0-9-_]+)/i);
		var number = changurlhowTo.indexOf(indA[1] + '/');
		pushCheck = false;
		view.changePage(parseInt(number), true);
	} else {
		if ((checkhowTo===undefined||checkhowTo==='' )) {
			list.show();
			var id = location.href.match(/gallery\/.*\/([0-9]+)/i);
			if (id != null) {
				pushCheck = false;
				initializeWithHash = true;
				view.changePage(parseInt(id[1]), true);
			} else {
				id = location.href.match(/gallery\/([0-9]+)/i);
				if (id != null) {
					pushCheck = false;
					initializeWithHash = true;
					view.changePage(parseInt(id[1]), true);
				} else if ((checkvr360!=undefined)||(checkPopup!=undefined)) {
					for (var i = 0; i < numItems; i++) {
						var testUrl = location.href.match(changeurl360[i]);
						if (testUrl != null) {
							pushCheck = false;
							initializeWithHash = true;
							view.changePage(parseInt(i), true);
						}
					}
				}
			}
		}
	}

	function locationChange(idx) {
		if (regDetailID.test(location.href)) {
			pushCheck = false;
			view.changePage(parseInt(location.href.match(regDetailID)[1]), true);
		} else {
			if ((checkhowTo===undefined||checkhowTo==='' )) {
				if ((checkvr360===undefined||checkvr360==='')) {
					var testIn = /gallery\/.*\/([A-Z0-9-_]+)/i;
					if (!testIn.test(location.href)) {
						if (isNaN(idx)) {
							list.show();
							view.hide();
							if ($('.m_content-banner').length) {
								$('.m_content-banner').show();
							}
						}
					} else {
						if ((checkPopup!=undefined)) {
							initializeWithHash = true;
							var indA = location.href.match(/gallery\/.*\/([A-Z0-9-_]+)/i);
							var number = changeurl360.indexOf(indA[1] + '/');
							pushCheck = false;
							if (GALAXY.isGalaxy) {
								view.changePage(parseInt(number), true);
							}
						} else {
							initializeWithHash = true;
							var indA = location.href.match(/gallery\/.*\/([A-Z0-9-_]+)/i);
							pushCheck = false;
							view.changePage(parseInt(indA[1]), true);
							if ($('.m_content-banner').length) {
								$('.m_content-banner').hide();
							}
						}
					}
				} else {
					var testIn = /gear-360\/([A-Z0-9-_]+)/i;
					if (!testIn.test(location.href)) {
						if (isNaN(idx)) {
							list.show();
							view.hide();
						}
					} else {
						initializeWithHash = true;
						var indA = location.href.match(/gear-360\/([A-Z0-9-_]+)/i);
						var number = changeurl360.indexOf(indA[1] + '/');
						pushCheck = false;
						view.changePage(parseInt(number), true);
					}
				}
			} else {
				var testIn = /how-to\/([A-Z0-9-_]+)/i;
				if (!testIn.test(location.href)) {
					if (isNaN(idx)) {
						list.show();
						view.hide();
					}
				} else {
					initializeWithHash = true;
					var indA = location.href.match(/how-to\/([A-Z0-9-_]+)/i);
					var number = changurlhowTo.indexOf(indA[1] + '/');
					pushCheck = false;
					view.changePage(parseInt(number), true);
				}
			}
		}
	}
	function locationPush(page) {
		if (supportPushstate) {
			if ((checkNewgallery === undefined) || (checkNewgallery==='') || checkNewgallery == 'control') {
				if (GALAXY.isGalaxy) {
					if ((checkhowTo===undefined||checkhowTo==='' )) {
						if ((checkvr360===undefined||checkvr360==='')) {

							if (checkPopup!=undefined) {
								if (page === '') {
									window.history.pushState('', '', locationBase);
								} else {
									window.history.pushState('', '', locationBase + (changeurl360[page]));
								}
							} else {
								if (page === '') {
									window.history.pushState('', '', locationBase);
								} else {
									window.history.pushState('', '', locationBase + (page + '/'));
								}
							}
						} else {
							if (page === '') {
								window.history.pushState('', '', locationBase);
							} else {
								window.history.pushState('', '', locationBase + (changeurl360[page]));
							}
						}
					} else {
						window.history.pushState('', '', locationBase + (changurlhowTo[page]));
					}
				} else {
					location.href = locationBase + (page === '' ? '#!/' : '#!/'+ (page));
				}
			} else {
				location.href = locationBase + (page === '' ? '#!/' : '#!/'+ (page) + '/');
			}
		} else if (!GALAXY.isGalaxy && !supportPushstate){
			location.href = locationBase + (page === '' ? '#!/' : '#!/'+ (page) + '/');
		}
		locationChange(page);
	}


	function resize() {
		list && list.resize();
		view && view.resize();
	}

	GALAXY.resizeFunctions.push(resize);

	$(window).bind(supportPushstate ? 'popstate' : 'hashchange', locationChange);
	windowLoaded = true;
	resize();
	initializeWithHash && setTimeout(function() {
		view.setTop();
		view.setThumbScroll(true);
	}, 1000);






}, 0);});
})(window.jQuery);
