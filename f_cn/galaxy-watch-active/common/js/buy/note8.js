var countries = {};



/*Update BuyNow 2017-08-28 16:00*/
$.extend(countries, {


SG: {
	type: "buy",
	link: "http://www.samsung.com/sg/smartphones/galaxy-note8/shop/"
},

AU: {
	type: "order",
	link: "https://shop.samsung.com/au/mobile/galaxy-note8"
},

TR: {
	type: "buy",
	link: "http://shop.samsung.com/tr"
},

US: {
	type: "buy",
	link: "http://www.samsung.com/us/galaxy/note8/buy/"
},

CA: {
	type: "buy",
	link: "http://www.samsung.com/ca/smartphones/galaxy-note8/shop/"
},

ZA: {
	type: "order",
	link: "http://www.samsung.com/za/smartphones/galaxy-note8/shop/"
},

UK: {
	type: "buy",
	link: "http://www.samsung.com/uk/smartphones/galaxy-note8.html/?jumpto=shop"
},

FR: {
	type: "buy",
	link: "http://www.samsung.com/fr/smartphones/galaxy-note8/shop/"
},

DE: {
	type: "buy",
	link: "http://www.samsung.com/de/smartphones/galaxy-note8/shop/"
},

IT: {
	type: "buy",
	link: "http://www.samsung.com/it/smartphones/galaxy-note8/shop/"
},

ES: {
	type: "buy",
	link: "http://www.samsung.com/es/smartphones/galaxy-note8/shop/"
},

DK: {
	type: "buy",
	link: "http://www.samsung.com/dk/smartphones/galaxy-note8/shop/"
},

NO: {
	type: "buy",
	link: "http://www.samsung.com/no/smartphones/galaxy-note8/shop/"
},

FI: {
	type: "buy",
	link: "http://www.samsung.com/fi/smartphones/galaxy-note8/shop/"
},

SE: {
	type: "buy",
	link: "http://www.samsung.com/se/smartphones/galaxy-note8/shop/"
},

NL: {
	type: "buy",
	link: "http://www.samsung.com/nl/smartphones/galaxy-note8/shop/"
},

BE: {
	type: "buy",
	link: "http://www.samsung.com/be/smartphones/galaxy-note8/shop/"
},

IN: {
	type: "buy",
	link: "https://shop.samsung.com/in/galaxy-note8.html"
}


});




$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
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