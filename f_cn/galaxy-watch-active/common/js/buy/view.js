var countries = {};


/*Update BuyNow 2015-10-29 19:00*/
$.extend(countries, {

// USA
US: {
	type: "buy",
	link: "http://shop.us.samsung.com/store/samsung/en_US/buy/productID.329135300"
}


});



/*Update BuyNow 2015-12-03 14:00*/
$.extend(countries, {

// Germany
DE: {
	type: "order",
	link: "http://www.samsung.com/de/consumer/mobile-devices/tablets/others/SM-T670NZKADBT"
},

// Brasil
BR: {
	type: "buy",
	link: "http://www.samsung.com/br/consumer/mobile-devices/tablets/others/SM-T670NZWAZTO"
},

// Canada
CA: {
	type: "buy",
	link: "http://www.samsung.com/ca/consumer/mobile-devices/tablets/others/SM-T670NZKAXAC"
},

// USA
US: {
	type: "buy",
	link: "http://www.samsung.com/us/mobile/galaxy-tab/SM-T670NZKAXAR"
},

// Singapore
SG: {
	type: "buy",
	link: "http://www.samsung.com/sg/galaxy-view"
},

// Italy
IT: {
	type: "buy",
	link: "http://www.samsung.com/it/consumer/mobile-devices/tablets/galaxy-view/SM-T670NZWAITV"
},

// Spain
ES: {
	type: "buy",
	link: "http://www.samsung.com/es/consumer/mobile-devices/tablets/galaxy-view/SM-T670NZWAPHE"
},

// Sweden
SE: {
	type: "buy",
	link: "http://www.samsung.com/se/consumer/mobile-devices/tablets/galaxy-view/SM-T670NZKANEE"
},

// Netherlands
NL: {
	type: "buy",
	link: "http://www.samsung.com/nl/consumer/mobile-phone/tab/tab/SM-T670NZKAPHN"
}


});


$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
		var omniCodes = {regist:"pre registration:view", order:":pre order:view", buy:":buy now:view"};
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
