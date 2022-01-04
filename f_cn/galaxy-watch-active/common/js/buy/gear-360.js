var countries = {};


/*Update BuyNow 2016-02-21 00:00*/
$.extend(countries, {

AU: {
	type: "buy",
	link: "http://www.samsung.com/au/wearables/gear-360-2017-sm-r210/"
}

});




$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
		// var omniCodes = {regist:":pre registration:gear360", order:":pre order:gear360", buy:":buy now:gear360"};
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