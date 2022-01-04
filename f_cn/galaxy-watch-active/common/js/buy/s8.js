var countries = {};


/*Update BuyNow 2017-03-29 00:00*/
$.extend(countries, {

// India
IN: {
	type: "regist",
	link: "http://www.samsung.com/in/microsite/unpacked/"
}

});

/* Update BuyNow 2017-04-19 */
// Update BuyNow 2017-05-18
// $.extend(countries, {
// 	AU : {
// 		type: "order",
// 		link: "https://shop.samsung.com/au/mobile/galaxy-s8"
// 	},
// 	TW : {
// 		type: "order",
// 		link: "http://www.samsung.com/tw/campaigns/2017galaxy_s8_preorder/"
// 	},
// 	PH : {
// 		type: "order",
// 		link: "http://www.samsung.com/ph/galaxys8/preorder/"
// 	},
// 	TH : {
// 		type: "order",
// 		link: "http://www.samsung.com/th/galaxys8/pre-order/waiting-preorder/"
// 	},
// 	SG : {
// 		type: "order",
// 		link: "http://www.samsung.com/sg/smartphones/galaxy-s8/shop/"
// 	},
// 	US : {
// 		type: "order",
// 		link: "http://www.samsung.com/us/explore/galaxy-s8/buy/"
// 	},
// 	CA : {
// 		type: "order",
// 		link: "http://www.samsung.com/ca/smartphones/galaxy-s8/shop/"
// 	}
// });

/* Update BuyNow 2017-05-18 */
$.extend(countries, {
	UK : { 
		type: "buy",
		link: "http://www.samsung.com/uk/smartphones/galaxy-s8/?jumpto=shop"
	},
	FR : { 
		type: "buy",
		link: "http://www.samsung.com/fr/smartphones/galaxy-s8/shop/"
	},
	DE : { 
		type: "buy",
		link: "http://www.samsung.com/de/smartphones/galaxy-s8/?jumpto=shop"
	},
	IT : { 
		type: "buy",
		link: "http://www.samsung.com/it/smartphones/galaxy-s8/shop/"
	},
	ES : { 
		type: "buy",
		link: "http://www.samsung.com/es/smartphones/galaxy-s8/shop/"
	},
	NL : { 
		type: "buy",
		link: "http://www.samsung.com/nl/smartphones/galaxy-s8/?jumpto=shop"
	},
	SE : { 
		type: "buy",
		link: "http://www.samsung.com/se/smartphones/galaxy-s8/?jumpto=shop"
	},
	AU : { 
		type: "buy",
		link: "https://shop.samsung.com/au/mobile/galaxy-s8"
	},
	NZ : { 
		type: "buy",
		link: "http://www.samsung.com/nz/smartphones/galaxy-s8/shop/"
	},
	TR : { 
		type: "buy",
		link: "http://shop.samsung.com/tr"
	},
	US : { 
		type: "buy",
		link: "http://www.samsung.com/us/explore/galaxy-s8/buy/"
	},
	CA : { 
		type: "buy",
		link: "http://www.samsung.com/ca/smartphones/galaxy-s8/shop/"
	},
	BR : { 
		type: "buy",
		link: "https://www.samsung.com/br/smartphones/galaxy-s8/#shop-section"
	}
});
$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
		//var omniCodes = {regist:":pre registration:s8", order:":pre order:s8", buy:":buy now:s8"};
		var altTitles = {regist:"pre-registration", order:"pre-order", buy:"buy now"};
		var country = countries[countryCode] || {};
		if (country&&country.type) {
			$(".country-check")
			.addClass(country.type)
			.find(".order-button")
			.attr({href:country.link,target:"_blank",title:"Go to "+altTitles[country.type]+" page in a new window"})
			//.attr({"data-omni":omniCodes[country.type]})
			.off("click", GALAXY.tracking)
			.on("click", GALAXY.tracking)
		}
	};
});