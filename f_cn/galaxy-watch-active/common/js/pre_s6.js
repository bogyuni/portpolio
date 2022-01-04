var countries = {};

/*Update BuyNow 2015-10-22 01:00*/
$.extend(countries, {

// USA
US: {
	type: "buy",
	link: "http://www.samsung.com/us/explore/galaxy-s-6-features-and-specs/#buynow"
},

// Brazil
BR: {
	type: "buy",
	link: "http://www.samsung.com/br/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKPZTO"
},

// Netherlands
NL: {
	type: "buy",
	link: "http://www.samsung.com/nl/consumer/mobile-phone/smartphones/smartphones/SM-G920FZKEPHN"
},

// France
FR: {
	type: "buy",
	link: "http://www.samsung.com/fr/consumer/mobile-phones/smartphones/galaxy-s/SM-G920FZWAXEF"
},

// Germany
DE: {
	type: "buy",
	link: "http://www.samsung.com/de/consumer/mobile-device/smartphone/smartphone/SM-G920FZWEDBT"
},

// Italy , Malta
IT: {
	type: "buy",
	link: "http://www.samsung.com/it/consumer/mobile-devices/smartphone/smartphones/SM-G920FZWAITV"
},

// Sweden
SE: {
	type: "buy",
	link: "http://www.samsung.com/se/consumer/mobil/smartphone/galaxy-s/SM-G920FZDANEE"
},

// Spain
ES: {
	type: "buy",
	link: "http://www.samsung.com/es/consumer/mobile-devices/smartphones/galaxy-s/SM-G920FZKAPHE"
},

// United Kingdom
GB: {
	type: "buy",
	link: "http://www.samsung.com/uk/consumer/mobile-devices/smartphones/android/SM-G920FZKEBTU"
},

// China
CN: {
	type: "buy",
	link: "http://www.samsung.com/cn/consumer/mobile-phones/galaxy-s/galaxy-s6/SM-G9208ZWUCHM"
},

// Korea
KR: {
	type: "buy",
	link: "http://www.samsung.com/sec/consumer/mobile-tablet/mobile-phone/galaxy-s/SM-G920SZWASKO"
},

// Japan
JP: {
	type: "buy",
	link: "http://www.samsung.com/jp/product/galaxys6/"
},

// Australia
AU: {
	type: "buy",
	link: "http://www.samsung.com/au/consumer/mobile-phone/smartphone/smartphone/SM-G920IZKEXSA"
},

// New Zealand
NZ: {
	type: "buy",
	link: "http://www.samsung.com/nz/consumer/mobile-phone/smartphone/smartphone/SM-G920IZKANZC"
},

// Canada(CA)
CA: {
	type: "buy",
	link: "http://www.samsung.com/ca/promotions/galaxy/"
},

// Mexico(MX)
MX: {
	type: "buy",
	link: "http://www.samsung.com/mx/promotions/galaxy"
},

// Bolivia
BO: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// Costa Rica
CR: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// Ecuador
EC: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// El Salvador
SV: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// Guatemala
GT: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// Honduras
HN: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// Jamaica
JM: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// Nicaragua
NI: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// Panama
PA: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// Puerto Rico
PR: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// Republica Dominica
DO: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// Trinidad y Tobago
TT: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// Paraguay (PY)
PY: {
	type: "buy",
	link: "http://www.samsung.com/latin/consumer/mobile-devices/smartphones/galaxy-s/SM-G920IZKETPA"
},

// Venezuela(VE)
VE: {
	type: "buy",
	link: "http://www.samsung.com/ve/promotions/galaxy"
},

// Colombia(CO)
CO: {
	type: "buy",
	link: "http://www.samsung.com/co/promotions/galaxy"
},

// Chile(CL)
CL: {
	type: "buy",
	link: "http://www.samsung.com/cl/promotions/galaxy"
},

// Peru(PE)
PE: {
	type: "buy",
	link: "http://www.samsung.com/pe/promotions/galaxy"
},

// Singapore(SG)
SG: {
	type: "buy",
	link: "http://www.samsung.com/sg/consumer/mobile-devices/smartphone/android-os/SM-G920IZDAXSP"
},

// Indonesia(ID)
ID: {
	type: "buy",
	link: "http://www.samsung.com/id/promotions/galaxy"
},

// Thailand(TH)
TH: {
	type: "buy",
	link: "http://www.samsung.com/th/galaxy/galaxys6/galaxy-s6"
},

// Vietnam(VN)
VN: {
	type: "buy",
	link: "http://www.samsung.com/vn/consumer/mobile-devices/smartphones/galaxy-s/SM-G920FZKACAM"
},

// Malaysia(MY)
MY: {
	type: "buy",
	link: "http://www.samsung.com/my/promotions/galaxy"
},

// Philippines(PH)
PH: {
	type: "buy",
	link: "http://www.samsung.com/ph/consumer/mobile-devices/smartphones/android/SM-G920FZKUXTC"
},

// Hong Kong(HK_EN)
HK: {
	type: "buy",
	link: "http://www.samsung.com/hk_en/promotions/galaxy"
},

// Taiwan(TW)
TW: {
	type: "buy",
	link: "http://www.samsung.com/tw/promotions/galaxy"
},

// Ireland(IE)
IE: {
	type: "buy",
	link: "http://www.samsung.com/ie/promotions/galaxy"
},

// Hungary(HU)
HU: {
	type: "buy",
	link: "http://www.samsung.com/hu/promotions/galaxy"
},

// Denmark(DK)
DK: {
	type: "buy",
	link: "http://www.samsung.com/dk/consumer/mobile/smartphone/galaxy-s/SM-G920FZKANEE"
},

// Finland(FI)
FI: {
	type: "buy",
	link: "http://www.samsung.com/fi/consumer/mobile/smartphone/galaxy-s/SM-G920FZKANEE"
},

// Norway(NO)
NO: {
	type: "buy",
	link: "http://www.samsung.com/no/consumer/mobile/smartphone/galaxy-s/SM-G920FZKANEE"
},

// Portugal(PT)
PT: {
	type: "buy",
	link: "http://www.samsung.com/pt/promotions/galaxy"
},

// Poland(PL)
PL: {
	type: "buy",
	link: "http://www.samsung.com/pl/consumer/mobile-phone/smartphone/smartphone/SM-G920FZKAXEO"
},

// Greece(GR)
GR: {
	type: "buy",
	link: "http://www.samsung.com/gr/promotions/galaxy"
},

// Czech(CZ)
CZ: {
	type: "buy",
	link: "http://www.samsung.com/cz/promotions/galaxy"
},

// Slovakia(SK)
SK: {
	type: "buy",
	link: "http://www.samsung.com/sk/promotions/galaxy"
},

// Romania(Ro)
RO: {
	type: "buy",
	link: "http://www.samsung.com/ro/promotions/galaxy"
},

// Bulgaria(BG)
BG: {
	type: "buy",
	link: "http://www.samsung.com/bg/promotions/galaxy"
},

// Austria(AT)
AT: {
	type: "buy",
	link: "http://www.samsung.com/at/consumer/mobile-phone/mobile-phone/smartphones/SM-G920FZWAATO?subsubtype=galaxy"
},

// Switzerland(CH)
CH: {
	type: "buy",
	link: "http://www.samsung.com/ch/consumer/mobile-phone/mobile-phone/smartphones/SM-G920FZWAAUT?subsubtype=galaxy"
},

// Belgium(BE)
BE: {
	type: "buy",
	link: "http://www.samsung.com/be/consumer/mobile-phone/smartphones/smartphones/SM-G920FZKELUX"
},

// Latvia(LV)
LV: {
	type: "buy",
	link: "http://www.samsung.com/lv/promotions/galaxy"
},

// Lithuania(LT)
LT: {
	type: "buy",
	link: "http://www.samsung.com/lt/consumer/mobile-devices/smartphones/galaxy-s/SM-G920FZBASEB"
},

// Estonia(EE)
EE: {
	type: "buy",
	link: "http://www.samsung.com/ee/promotions/galaxy"
},

// Serbia(RS)
RS: {
	type: "buy",
	link: "http://www.samsung.com/rs/promotions/galaxy"
},

// Croatia(HR)
HR: {
	type: "buy",
	link: "http://www.samsung.com/hr/promotions/galaxy"
},

// Slovenija(SI)
SI: {
	type: "buy",
	link: "http://www.samsung.com/si/promotions/galaxy"
},

// Russia(RU)
RU: {
	type: "buy",
	link: "http://www.samsung.com/ru/consumer/mobile-devices/smart-phones/samsung-galaxy/SM-G920FZKASER"
},

// Ukraine(UA)
UA: {
	type: "buy",
	link: "http://www.samsung.com/ua/consumer/mobile-devices/smartphones/galaxy-s/SM-G920FZDASEK"
},

// Kazakhstan(KZ_RU)
KZ: {
	type: "buy",
	link: "http://www.samsung.com/kz_ru/promotions/galaxy"
},

// Mongolia
MN: {
	type: "buy",
	link: "http://www.samsung.com/kz_ru/promotions/galaxy"
},

// India(IN)
IN: {
	type: "buy",
	link: "http://www.samsung.com/in/promotions/galaxy"
},

// UAE(AE)
AE: {
	type: "buy",
	link: "http://www.samsung.com/ae/promotions/galaxy"
},

// Bahrain
BH: {
	type: "buy",
	link: "http://www.samsung.com/ae/promotions/galaxy"
},

// Kuwait
KW: {
	type: "buy",
	link: "http://www.samsung.com/ae/promotions/galaxy"
},

// Oman
OM: {
	type: "buy",
	link: "http://www.samsung.com/ae/promotions/galaxy"
},

// Qatar
QA: {
	type: "buy",
	link: "http://www.samsung.com/ae/promotions/galaxy"
},

// Yemen
YE: {
	type: "buy",
	link: "http://www.samsung.com/ae/promotions/galaxy"
},

// Israel(IL)
IL: {
	type: "buy",
	link: "http://www.samsung.com/il/promotions/galaxy"
},

// Saudi Arabia(SA)
SA: {
	type: "buy",
	link: "http://www.samsung.com/sa_en/promotions/galaxy"
},

// Turkey(TR)
TR: {
	type: "buy",
	link: "http://www.samsung.com/tr/promotions/galaxy"
},

// Iran(IRAN)
IR: {
	type: "buy",
	link: "http://www.samsung.com/iran/promotions/galaxy"
},

// Iraq
IQ: {
	type: "buy",
	link: "http://www.samsung.com/levant/promotions/galaxy"
},

// Jordan
JO: {
	type: "buy",
	link: "http://www.samsung.com/levant/promotions/galaxy"
},

// Lebanon
LB: {
	type: "buy",
	link: "http://www.samsung.com/levant/promotions/galaxy"
},

// Palestine
PS: {
	type: "buy",
	link: "http://www.samsung.com/levant/promotions/galaxy"
},

// Syria
SY: {
	type: "buy",
	link: "http://www.samsung.com/levant/promotions/galaxy"
},

// Pakistan(PK)
PK: {
	type: "buy",
	link: "http://www.samsung.com/pk/promotions/galaxy"
},

// Algeria
DZ: {
	type: "buy",
	link: "http://www.samsung.com/pk/promotions/galaxy"
},

// Egypt(EG)
EG: {
	type: "buy",
	link: "http://www.samsung.com/eg/promotions/galaxy"
},

// Sudan
SD: {
	type: "buy",
	link: "http://www.samsung.com/eg/promotions/galaxy"
},

// Somalia
SO: {
	type: "buy",
	link: "http://www.samsung.com/eg/promotions/galaxy"
},

// Libya
LY: {
	type: "buy",
	link: "http://www.samsung.com/eg/promotions/galaxy"
},

// Algeria
DZ: {
	type: "buy",
	link: "http://www.samsung.com/n_africa/promotions/galaxy"
},

// Comoros
KM: {
	type: "buy",
	link: "http://www.samsung.com/n_africa/promotions/galaxy"
},

// Morocco
MA: {
	type: "buy",
	link: "http://www.samsung.com/n_africa/promotions/galaxy"
},

// Tunisia
TN: {
	type: "buy",
	link: "http://www.samsung.com/n_africa/promotions/galaxy"
},

// Botswana
BW: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Eritera
ER: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Ethiopia
ET: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Gambia
GM: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Ghana
GH: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Kenya
KE: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Liberia
LR: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Malawi
MW: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Namibia
NA: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Nigeria
NG: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Sierra Leone
SL: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Swaziland
SZ: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Tanzania
TZ: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Uganda
UG: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Zambia
ZM: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Zimbabwe
ZW: {
	type: "buy",
	link: "http://www.samsung.com/africa_en/promotions/galaxy"
},

// Benin
BJ: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Burkina Faso
BF: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Burundi
BI: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Cameron
CM: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Central Africa Republic
CF: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Chad
TD: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Congo
CG: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Cote d'voire
CI: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// DR Congo
CD: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Djibouti
DJ: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Gabon
GA: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Guinea Republic
GN: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Ivory Coast
CI: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Madagascar
MG: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Mali
ML: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Mauritania
MR: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Mauritius
MU: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Mayotte
YT: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Niger
NE: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Reunion
RE: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Rwanda
RW: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Senegal
SN: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Seychelles
SC: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Togo
TG: {
	type: "buy",
	link: "http://www.samsung.com/africa_fr/promotions/galaxy"
},

// Angola
AO: {
	type: "buy",
	link: "http://www.samsung.com/africa_pt/promotions/galaxy"
},

// Cape Verde
CV: {
	type: "buy",
	link: "http://www.samsung.com/africa_pt/promotions/galaxy"
},

// Guinea Bissau
GW: {
	type: "buy",
	link: "http://www.samsung.com/africa_pt/promotions/galaxy"
},

// Mozambique
MZ: {
	type: "buy",
	link: "http://www.samsung.com/africa_pt/promotions/galaxy"
},

// South Africa (ZA)
ZA: {
	type: "buy",
	link: "http://www.samsung.com/za/promotions/galaxy"
}

});


var countries2 = {};
$.extend(countries2, {
	BR: {
		type: "onClick"
	},
	FR: {
		type: "onClick"
	},
	ES: {
		type: "onClick"
	},
	HK: {
		type: "onClick"
	},
	AE: {
		type: "onClick"
	},
	NL: {
		type: "onClick"
	},
	ZA: {
		type: "onClick"
	},
	SG: {
		type: "onClick"
	},
	RU: {
		type: "onClick"
	}
});

$(function() {
	var countryCode = $._cookie.get("country_codes");
	countryCode = (countryCode) ? $.trim(countryCode).toUpperCase() : "";
	var omniCodes = {regist:"pre registration(s6)", order:"pre order(s6)", buy:":buy now:s6"};
	var altTitles = {regist:"pre-registration", order:"pre-order", buy:"buy now"};
	var country = (countryCode.length==2) ? countries[countryCode] : {};
	var country2 = (countryCode.length==2) ? countries2[countryCode] : {};
	if (country&&country.type) {
		if (country2&&country2.type) {
			$(".country-check .order-button").click(function(){
	//	alert("8country");
				ftGoalTag42918();
			});
		}
		$(".country-check").addClass(country.type).find(".order-button")
		.attr({href:country.link,target:"_blank",title:"Go to "+altTitles[country.type]+" page in a new window"})
		.attr({"data-omni":omniCodes[country.type]})
		.click(GALAXY.tracking);
	}
});