var countries = {};

/* Update BuyNow 2016-11-07 11:25 */
$.extend(countries, {
	KR: {
		type: "buy",
		link: "http://www.samsung.com/sec/consumer/mobile-tablet/gear/gear-s/SM-R760NDAAKOO"
	},
	UK: {
		type: "order",
		link: "http://www.samsung.com/uk/gear-s3/"
	},
	US: {
		type: "regist",
		link: "http://www.samsung.com/us/explore/gear-s3/"
	},
	NL: {
		type: "order",
		link: "http://www.samsung.com/nl/consumer/mobile-phone/wearable/galaxy-gear/SM-R760NDAAPHN"
	},
	DE: {
		type: "order",
		link: "https://shop.samsung.com/de/gears3-preorder"
	},
	ES: {
		type: "regist",
		link: "https://eu.my-samsung.com/optiext/optiextension.dll?id=vHKtQtILXukR5Bm3TMjKDHoKHgambmOjqBQYLohcsscWSCGFfMT9IUj4xIUR7%2BhnSYqIQuTDgFfvvh"
	},
	AU: {
		type: "order",
		link: "https://shop.samsung.com/au/wearables/gear-s3"
	}
});


/* Update BuyNow 2016-11-22 */
$.extend(countries, {
	UK: {
		type: "buy",
		link: "http://www.samsung.com/uk/gear-s3/"
	},
	US: {
		type: "buy",
		link: "http://www.samsung.com/us/mobile/wearables/smartwatches/samsung-gear-s3-frontier-sm-r760ndaaxar/"
	},
	SG: {
		type: "buy",
		link: "http://www.samsung.com/sg/wearables/gear-s3-frontier/"
	},
	DK: {
		type: "order",
		link: "http://www.samsung.com/dk/gear-s3/"
	},
	SE: {
		type: "order",
		link: "http://www.samsung.com/se/gear-s3/"
	}
});

/* Update BuyNow 2016-12-07 */
$.extend(countries, {
	SG: {
		type: "",
		link: ""
	},
	DK: {
		type: "buy",
		link: "http://www.samsung.com/dk/gear-s3/"
	},
	SE: {
		type: "buy",
		link: "http://www.samsung.com/se/gear-s3/"
	},
	FI : {
		type: "buy",
		link: "http://www.samsung.com/fi/gear-s3/"
	},
	NO : {
		type: "buy",
		link: "http://www.samsung.com/no/gear-s3/"
	},
	ES : {
		type: "buy",
		link: "http://www.samsung.com/es/consumer/mobile-devices/wearables/gear/SM-R760NDAAPHE"
	},
	NL : {
		type: "buy",
		link: "http://www.samsung.com/nl/gear-s3/"
	},
	BE : {
		type: "order",
		link: "http://www.samsung.com/be/gear-s3/"
	},
	CH : {
		type: "buy",
		link: "http://www.samsung.com/ch/consumer/mobile-devices/wearables/smartwatches/SM-R760NDAAAUT/"
	},
	PL : {
		type: "buy",
		link: "http://www.samsung.com/pl/consumer/mobile-devices/wearables/gear/SM-R760NDAAXEO"
	},
	RO : {
		type: "buy",
		link: "http://www.samsung.com/ro/consumer/mobile-devices/wearables/gear/SM-R760NDAAROM"
	},
	MX : {
		type: "buy",
		link: "http://www.samsung.com/mx/consumer/mobile-devices/wearables/gear/SM-R760NDAAMXO"
	}
});

// 2017-04-24 PM 14:06
$.extend(countries, {
	AU : {
		type: "buy",
		link: "https://shop.samsung.com/au/wearables/smart-watch"
	}
});


$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
		var altTitles = {regist:"pre-registration", order:"pre-order", buy:"buy now"};
		var country = (countryCode.length==2) ? countries[countryCode] : {};
		if (country&&country.type) {
			$(".country-check")
			.addClass(country.type)
			.find(".order-button")
			.attr({href:country.link,target:"_blank",title:"Go to "+altTitles[country.type]+" page in a new window"})
			.off("click", GALAXY.tracking)
			.on("click", GALAXY.tracking)
			;
		}
	};
});