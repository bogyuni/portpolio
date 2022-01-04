var countries = {};

/*Update BuyNow 2015-10-21 16:00*/
$.extend(countries, {

// USA
US: {
	type: "buy",
	link: "http://www.samsung.com/us/mobile/cell-phones-accessories"
},

// Brazil
BR: {
	type: "buy",
	link: "http://www.samsung.com/br/consumer/mobile-devices/accessories"
},

// Netherlands
NL: {
	type: "buy",
	link: "http://www.samsung.com/nl/consumer/mobile-phone/mobile-phone-accessories"
},

// France
FR: {
	type: "buy",
	link: "http://www.samsung.com/fr/consumer/mobile-devices/accessories"
},

// Germany
DE: {
	type: "buy",
	link: "http://www.samsung.com/de/consumer/mobile-devices/accessories"
},

// Italy , Malta
IT: {
	type: "buy",
	link: "http://www.samsung.com/it/consumer/mobile-devices/accessories/"
},

// Sweden
SE: {
	type: "buy",
	link: "http://www.samsung.com/se/consumer/mobile-devices/accessories"
},

// Spain
ES: {
	type: "buy",
	link: "http://www.samsung.com/es/consumer/mobile-devices/accessories"
},

// United Kingdom
GB: {
	type: "buy",
	link: "http://www.samsung.com/uk/consumer/mobile-devices/accessories"
},

// China
CN: {
	type: "buy",
	link: "http://www.samsung.com/cn/consumer/accessories/mobile-accessories/"
},

// Korea
KR: {
	type: "buy",
	link: "http://www.samsung.com/sec/consumer/accessories/mobile-accessories"
},

// Australia
AU: {
	type: "buy",
	link: "http://www.samsung.com/au/consumer/mobile-phone/accessories/"
},

// New Zealand
NZ: {
	type: "buy",
	link: "http://www.samsung.com/nz/consumer/mobile-devices/accessories"
}


});






$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
		var omniCodes = {regist:"pre registration:note5_accessories", order:":pre order:note5_accessories", buy:":buy now:note5_accessories"};
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
