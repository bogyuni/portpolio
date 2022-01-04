;(function($) {
GALAXY.load(function() {
	var $newGalleryView = $('.m_content_galaxygallery'),
		$thumbWrap = $('.gallery_thumbnail'),
		$thumbList = $('.thumbnail_list'),
		$thumbItem = $thumbList.find('a'),
		$viewWrap = $('.m_share_gallery_view'),
		$viewCopy = $newGalleryView.find('[class*="howto_tit"]'),
		$bigImg =  $viewWrap.find('.img'),
		$viewTit = $bigImg.find('a >p'),
		$videoPlay = $bigImg.find('a'),
		$viewMore = $('.learn_more a'),
		$videoFrame = $viewWrap.find('.vod-frame'),
		viewTop = parseInt($('.m_share_gallery_view').css('margin-top'), 10),
		loadNavHeight = [0, 75, 106, 76, 76],
		titleOffset = ($newGalleryView.offset().top-viewTop) - loadNavHeight[GALAXY.sizeMode],
		supportPushstate = $.support.pushstate,
		locationBase =  GALLERY_CONFIG['location'],
		changurlhowTo = [],
		itemArray = [],
		oldItem = "",
		videoData = "";
		
	var init = function() {
		var maxLength = 5;
		$bigImg.addClass('show');
		GALAXY.setSmoothScrollTop(titleOffset);

		for ( var i = 0; i < $thumbItem.length-1; i++ ) {
			$thumbItem.eq(i).attr('data-idx', i);
		}

		if ( $thumbItem.length < maxLength ) {
			$('.paging').hide();
			$thumbWrap.find('a[class*="-prev"]').hide();
			$thumbWrap.find('a[class*="-next"]').hide();
		} else {
			$('.paging').show();
			$thumbWrap.find('a[class*="-prev"]').show();
			$thumbWrap.find('a[class*="-next"]').show();
			xliderSet();
		}
		
		locationChange();		
	}
	var xliderSet = function() {
		
		$('ul', $thumbWrap).xlider('remove');
		$('.paging').html('');
		$thumbWrap.find('ul li').each(function(i) {
			$('.paging').append('<button data-omni-type="microsite" data-page="' + i + '">' + (i+1) +'</button>')
				.eq(0).addClass('on');
		});
		$('ul', $thumbWrap).xlider({
			swipe: GALAXY.swipeAble,
			arrows: [$thumbWrap.find('a[class*="-prev"]'), $thumbWrap.find('a[class*="-next"]')],
			endless:true,
			paging: $thumbWrap.find('.paging')
		});

	}

	function makeThumnail(idx) {
		var s = '';
		s += '<li class="item">';

		$thumbItem.not($thumbItem.eq(idx)).each(function(i) {
			if ( (i%3 == 0) && i != 0) {
        		s +='</li><li class="item">';
    		}
    		s += $(this).clone(true, true).wrapAll('<div/>').parent().html();
		});
    	s += '</li>';
		$thumbList.find('ul').empty().html(s);
	}

	$('.thumbnail_list').on('click', 'a', function(e) {
		// if ( $(this).hasClass('on') ) return false;
		e.preventDefault();

		var idx = $(this).attr('data-idx');
		var $targetData = $(this), 
			datas = $targetData.data();

		datas.href = $targetData.attr('href');
		datas.imgSrc = $targetData.find('img').attr('src');

		makeThumnail(idx);
		xliderSet();

		GALAXY.omniture(datas.omni);

		titleOffset = ($newGalleryView.offset().top-viewTop) - loadNavHeight[GALAXY.sizeMode];

		$('body').attr('data-tags', $(this).attr('data-tags'));
		$('body').attr('data-msg', $(this).attr('data-msg'));
		GALAXY.setSmoothScrollTop(titleOffset);
		$bigImg.removeClass('show');
		GALAXY.loadImage( $bigImg.find('img'), function() {
			getData( datas, idx );
			$bigImg.addClass('show');
			playVideo();
		});

	});
	
	function getData(datas, idx) {
		videoData = datas.ytLink;
		locationPush(datas.href, idx);

		$bigImg.find('img').attr('src', datas.imgSrc);
		$viewCopy.text(datas.copy);
		$viewTit.text(datas.title);
		$videoPlay.attr('data-omni', datas.omni);
		$viewMore.attr('href', datas.learnmoreLink);
		$videoFrame.hide();
		$bigImg.show();
	}

	$videoPlay.on('click', function(e) {
		e.preventDefault();
		playVideo();
	});

	function playVideo() {
		var videoUrl = "https://www.youtube.com/embed/"+ videoData +"?showinfo=0&amp;wmode=transparent&amp;autoplay=1&amp;rel=0";
			videoHtml = '<iframe id="vod-player" class="vod-player" allowfullscreen title="Video player" src="'+ videoUrl +'" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>',
		$videoFrame.children('.vod-src').html(videoHtml);
		$videoFrame.show();
		$bigImg.hide();
	}

	function locationChange() {
		var reg = /how-to\/([A-Z0-9-_]+)/i;
		if (reg.test(location.href)) {
			var pageName = location.href.match( reg )[1];
			$thumbItem.each(function(i) {
				var tgHref = $(this).attr('href');
				if ( tgHref.indexOf(pageName) == 3 ) {
					var $targetData = $(this),
						idx =  $targetData.attr('data-idx'),
						datas = $targetData.data();
					datas.href = $targetData.attr('href');
					datas.imgSrc = $targetData.find('img').attr('src');
					makeThumnail(idx);
					xliderSet();
					getData(datas, idx);
				}
			});
		}
	}

	function locationPush(page, idx) {
		if (supportPushstate) {
			if (GALAXY.isGalaxy) {
				if (page.indexOf('/')==0||page.indexOf('.')==0) {
					window.history.pushState('', '', page);
				} else {
					window.history.pushState('', '', locationBase + (page));
				}
			} 
		} else if (!GALAXY.isGalaxy && !supportPushstate){
			location.href = locationBase + (page === '' ? '#!/' : '#!/'+ (page) + '/');
		}
	}

	// share
	$('.gallery_share a').click(GALAXY.sharing);

	// load
	init();
	
});
})(window.jQuery);