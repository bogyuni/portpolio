var countries = {};


/*Update BuyNow 2016-02-21 00:00*/
$.extend(countries, {

});




$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
		// var omniCodes = {regist:":pre registration:gearvr", order:":pre order:gearvr", buy:":buy now:gearvr"};
		var altTitles = {regist:"pre-registration", order:"pre-order", buy:"buy now"};
		var country = (countryCode.length==2) ? countries[countryCode] : {};
		if (country&&country.type) {
			$(".country-check")
			.addClass(country.type)
			.find(".order-button")
			.attr({href:country.link,target:"_blank",title:"Go to "+altTitles[country.type]+" page in a new window"})
			// .attr({"data-omni":omniCodes[country.type]})
			.off("click", GALAXY.tracking)
			.on("click", GALAXY.tracking)
			;
		}
	};
});
