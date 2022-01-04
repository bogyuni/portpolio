var countries = {};


/*Update BuyNow 2015-10-21 16:00*/
$.extend(countries, {

// USA
US: {
	type: "buy",
	link: "http://www.samsung.com/us/mobile/wearable-tech/SM-R7200ZWAXAR"
},

// Germany
DE: {
	type: "buy",
	link: "http://www.samsung.com/de/galaxy/gear-s2/shop/"
},

// Korea
KR: {
	type: "buy",
	link: "http://www.samsung.com/sec/consumer/mobile-tablet/gear"
},

// Australia
AU: {
	type: "buy",
	link: "http://www.samsung.com/au/gear-s2/"
}


});




$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
		var omniCodes = {regist:"pre registration:gears2", order:":pre order:gears2", buy:":buy now:gears2"};
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
