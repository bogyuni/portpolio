var countries = {};


/*Update BuyNow 2015-10-21 16:00*/
$.extend(countries, {

// USA
US: {
	type: "buy",
	link: "http://www.samsung.com/us/explore/tab-s2-features-and-specs/"
},

// Brazil
BR: {
	type: "buy",
	link: "http://www.samsung.com/br/consumer/mobile-devices/tablets/galaxy-tab-s/SM-T815YZWPZTO"
},

// Netherlands
NL: {
	type: "buy",
	link: "http://www.samsung.com/nl/consumer/mobile-phone/tab/tab/SM-T815NZKEPHN"
},

// France
FR: {
	type: "buy",
	link: "http://www.samsung.com/fr/galaxytabs2/acheter.html"
},

// Germany
DE: {
	type: "buy",
	link: "http://www.samsung.com/de/consumer/mobile-devices/tablets/galaxy-tab-s/SM-T815NZKEDBT/"
},

// Italy , Malta
IT: {
	type: "buy",
	link: "http://www.samsung.com/it/consumer/mobile-devices/tablets/galaxy-tab-s/SM-T815NZDEITV"
},

// Sweden
SE: {
	type: "buy",
	link: "http://www.samsung.com/se/consumer/mobile-devices/tablets/galaxy-tab-s/SM-T810NZWENEE"
},

// Spain
ES: {
	type: "buy",
	link: "http://www.samsung.com/es/consumer/mobile-devices/tablets/galaxy-tab-s/SM-T815NZKEPHE"
},

// United Kingdom
GB: {
	type: "buy",
	link: "http://www.samsung.com/uk/consumer/mobile-devices/tablets/galaxy-tab-s/SM-T710NZKEBTU"
},

// China
CN: {
	type: "buy",
	link: "http://www.samsung.com/cn/consumer/mobile-phones/tablets/galaxy-tab-s/SM-T810NZWECHN"
},

// Korea
KR: {
	type: "buy",
	link: "http://www.samsung.com/sec/consumer/mobile-tablet/tablet/galaxy-tabs/SM-T815NZKEKOO"
},

// Australia
AU: {
	type: "buy",
	link: "http://www.samsung.com/au/galaxy-tab-s2/"
},

// New Zealand
NZ: {
	type: "buy",
	link: "http://www.samsung.com/nz/consumer/mobile-devices/tablets/galaxy-tab-s/SM-T815YZWEXNZ"
}


});




$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
		var omniCodes = {regist:"pre registration:tabs2", order:":pre order:tabs2", buy:":buy now:tabs2"};
		var altTitles = {regist:"pre-registration", order:"pre-order", buy:"buy now"};
		var country = (countryCode.length==2) ? countries[countryCode] : {};
		if (country&&country.type) {
			$(".country-check").addClass(country.type).find(".order-button")
			.attr({href:country.link,target:"_blank",title:"Go to "+altTitles[country.type]+" page in a new window"})
			.attr({"data-omni":omniCodes[country.type]})
			.click(GALAXY.tracking);
		}
	};
});
