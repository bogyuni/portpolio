var countries = {};


/*Update BuyNow 2015-10-21 16:00*/
$.extend(countries, {



});




$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
		var omniCodes = {regist:"pre registration:tabpros", order:":pre order:tabpros", buy:":buy now:tabpros"};
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
