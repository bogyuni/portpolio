var countries = {};


/*Update BuyNow 2016-6-10 11:25*/
$.extend(countries, {

// China
CH: {
	type: "buy",
	link: "https://www.samsungshop.com.cn/item/SM-G9350BTM/174.htm"
},

// Malaysia
MY: {
	type: "buy",
	link: "http://www.samsung.com/my/gs7injustice"
},



/* Learn More */
// Hongkong
HK: {
	type: "buy",
	link: "http://www.samsung.com/hk/injustice/"
},

// South Africa
ZA: {
	type: "buy",
	link: "http://www.samsung.com/za/galaxy/events/injustice"
},

// Taiwan 
TW: {
	type: "buy",
	link: "http://www.samsung.com/tw/campaigns/2016injustice_edition/"
}

});



$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
		var omniCodes = {regist:"pre registration:s7", order:":pre order:s7", buy:":buy now:s7"};
		var altTitles = {regist:"pre-registration", order:"pre-order", buy:"buy now"};
		var country = (countryCode.length==2) ? countries[countryCode] : {};
		var learnMoreCountry = ['HK', 'ZA', 'TW'];
		if (country&&country.type) {
			$(".country-check").addClass(country.type).find(".order-button")
			.attr({href:country.link,target:"_blank",title:"Go to "+altTitles[country.type]+" page in a new window"})
			.attr({"data-omni":omniCodes[country.type]})
			.click(GALAXY.tracking);

			if ( learnMoreCountry.indexOf(countryCode) != -1 ) {
				$(".country-check").find('.buy > a').text('Learn More');
			}
		}
	};
});
