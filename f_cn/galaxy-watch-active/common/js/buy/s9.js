var countries = {};


/* Update BuyNow 2018-05-06 */
$.extend(countries, {
	US: {
		type: "buy",
		link: "https://www.samsung.com/us/smartphones/galaxy-s9/buy/s/Device/"
	},
	CA: {
		type: "buy",
		link: "http://www.samsung.com/ca/smartphones/galaxy-s9/shop"
	},
	GB: {
		type: "buy",
		link: "http://www.samsung.com/uk/smartphones/galaxy-s9/shop"
	},
	UK: {
		type: "buy",
		link: "http://www.samsung.com/uk/smartphones/galaxy-s9/shop"
	},
	DE: {
		type: "buy",
		link: "http://www.samsung.com/de/smartphones/galaxy-s9/shop"
	},
	FR: {
		type: "buy",
		link: "http://www.samsung.com/fr/smartphones/galaxy-s9/shop"
	},
	IT: {
		type: "buy",
		link: "http://www.samsung.com/it/smartphones/galaxy-s9/shop"
	},
	ES: {
		type: "buy",
		link: "http://www.samsung.com/es/smartphones/galaxy-s9/shop"
	},
	NL: {
		type: "buy",
		link: "http://www.samsung.com/nl/smartphones/galaxy-s9/shop"
	},
	BE: {
		type: "buy",
		link: "http://www.samsung.com/be/smartphones/galaxy-s9/shop"
	},
	SE: {
		type: "buy",
		link: "http://www.samsung.com/se/smartphones/galaxy-s9/shop"
	},
	NO: {
		type: "buy",
		link: "http://www.samsung.com/no/smartphones/galaxy-s9/shop"
	},
	FI: {
		type: "buy",
		link: "http://www.samsung.com/fi/smartphones/galaxy-s9/shop"
	},
	DK: {
		type: "buy",
		link: "http://www.samsung.com/dk/smartphones/galaxy-s9/shop/"
	},
	PT: {
		type: "buy",
		link: "http://www.samsung.com/pt/smartphones/galaxy-s9/shop"
	},
	AT: {
		type: "buy",
		link: "http://www.samsung.com/at/smartphones/galaxy-s9/shop"
	},
	CH: {
		type: "buy",
		link: "http://www.samsung.com/ch/smartphones/galaxy-s9/shop"
	},
	PL: {
		type: "buy",
		link: "http://www.samsung.com/pl/smartphones/galaxy-s9/shop"
	},
	HU: {
		type: "buy",
		link: "http://www.samsung.com/hu/smartphones/galaxy-s9/shop"
	},
	CZ: {
		type: "buy",
		link: "http://www.samsung.com/cz/smartphones/galaxy-s9/shop"
	},
	SK: {
		type: "buy",
		link: "http://www.samsung.com/sk/smartphones/galaxy-s9/shop"
	},
	LV: {
		type: "buy",
		link: "http://www.samsung.com/lv/smartphones/galaxy-s9/shop"
	},
	LT: {
		type: "buy",
		link: "http://www.samsung.com/lt/smartphones/galaxy-s9/shop"
	},
	EE: {
		type: "buy",
		link: "http://www.samsung.com/ee/smartphones/galaxy-s9/shop"
	},
	RO: {
		type: "buy",
		link: "http://www.samsung.com/ro/smartphones/galaxy-s9/shop"
	},
	BG: {
		type: "buy",
		link: "http://www.samsung.com/bg/smartphones/galaxy-s9/shop"
	},
	HR: {
		type: "buy",
		link: "http://www.samsung.com/hr/smartphones/galaxy-s9/shop"
	},
	SI: {
		type: "buy",
		link: "http://www.samsung.com/si/smartphones/galaxy-s9/shop"
	},
	CS: {
		type: "buy",
		link: "http://www.samsung.com/rs/smartphones/galaxy-s9/shop"
	},
	GR: {
		type: "buy",
		link: "http://www.samsung.com/gr/smartphones/galaxy-s9/shop"
	},
	RU: {
		type: "buy",
		link: "http://www.samsung.com/ru/smartphones/galaxy-s9/shop"
	},
	AE: {
		type: "buy",
		link: "http://www.samsung.com/ae/smartphones/galaxy-s9/shop"
	},
	IQ: {
		type: "order",
		link: "http://www.samsung.com/levant/smartphones/galaxy-s9/shop"
	},
	JO: {
		type: "order",
		link: "http://www.samsung.com/levant/smartphones/galaxy-s9/shop"
	},
	SY: {
		type: "order",
		link: "http://www.samsung.com/levant/smartphones/galaxy-s9/shop"
	},
	IL: {
		type: "buy",
		link: "http://www.samsung.com/il/smartphones/galaxy-s9/shop"
	},
	MA: {
		type: "order",
		link: "http://www.samsung.com/n_africa/smartphones/galaxy-s9/shop"
	},
	LB: {
		type: "order",
		link: "http://www.samsung.com/lb/smartphones/galaxy-s9/shop"
	},
	ZA: {
		type: "buy",
		link: "http://www.samsung.com/za/smartphones/galaxy-s9/shop"
	},
	AU: {
		type: "buy",
		link: "http://www.samsung.com/au/smartphones/galaxy-s9/shop"
	},
	NZ: {
		type: "buy",
		link: "https://shop.samsung.com/nz/galaxy-s9/shop"
	},
	TH: {
		type: "buy",
		link: "http://www.samsung.com/th/smartphones/galaxy-s9/shop"
	},
	VN: {
		type: "buy",
		link: "https://www.samsung.com/vn/smartphones/galaxy-s9/shop/"
	},
	CN: {
		type: "buy",
		link: "https://www.samsungshop.com.cn/item/SM-G9650/DS.htm"
	},
	KR: {
		type: "buy",
		link: "http://www.samsung.com/sec/galaxys9/launching/"
	},
	MX: {
		type: "buy",
		link: "https://shop.samsungstore.mx/"
	},
	BR: {
		type: "buy",
		link: "http://www.samsung.com/br/smartphones/galaxy-s9/shop/"
	}
});

$(function() {
	window.initBuyNowButtons = function() {
		var countryCode = $._cookie.get("country_codes");
		countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
		var altTitles = {regist:"pre-registration", order:"pre-order", buy:"buy now"};
		var country = countries[countryCode] || {};
		if (country&&country.type) {
			$(".country-check")
			.addClass(country.type)
			.find(".order-button")
			.attr({href:country.link,target:"_blank",title:"Go to "+altTitles[country.type]+" page in a new window"})
			.off("click", GALAXY.tracking)
			.on("click", GALAXY.tracking);
			if (country.type == 'buy') {
				$('.m_content-drag .c_btn_pre-type2_box').addClass('view').find('a').attr({href:country.link,target:"_blank"});
			}
		}
	};
});