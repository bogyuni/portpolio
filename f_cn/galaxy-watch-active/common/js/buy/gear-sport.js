var countries = {};

/*Update BuyNow 2017-10-30 11:30*/
$.extend(countries, {


US: {
	type: "buy",
	link: "https://www.samsung.com/us/mobile/wearables/smartwatches/gear-sport-blue-sm-r600nzbaxar/"
}


});




$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
		// var omniCodes = {regist:"pre registration:gearsport", order:":pre order:gearsport", buy:":buy now:gearsport"};
		var altTitles = {regist:"pre-registration", buy:"pre-order", buy:"buy now"};
		var country = countries[countryCode] || {};
		if (country&&country.type) {
			$(".country-check")
			.addClass(country.type)
			.find(".order-button")
			.attr({href:country.link,target:"_blank",title:"Go to "+altTitles[country.type]+" page in a new window"})
			.off("click", GALAXY.tracking)
			.on("click", GALAXY.tracking)
		}
	};
});