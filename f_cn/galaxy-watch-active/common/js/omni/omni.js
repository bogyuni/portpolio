if (window.OMNI_CAMPAIGN_NAME==undefined) {
	window.OMNI_CAMPAIGN_NAME = 'galaxyhub';
}
if (window.OMNI_PAGE_NAME==undefined) {
	try {
		window.OMNI_PAGE_NAME = document.body.getAttribute('data-omni-page');
		if (!window.OMNI_PAGE_NAME||window.OMNI_PAGE_NAME==='') {
			window.OMNI_PAGE_NAME = document.getElementById('contents').getAttribute('data-omni-page');
			if (!window.OMNI_PAGE_NAME||window.OMNI_PAGE_NAME==='') {
				window.OMNI_PAGE_NAME = '';
			}
		}
	} catch(e) {
		window.OMNI_PAGE_NAME = '';
	}
}
s.channel = "global:campaign";
s.pageName = "global:campaign:gbm_tn:"+OMNI_CAMPAIGN_NAME+":"+OMNI_PAGE_NAME;
s.hier1  = "global>campaign>gbm_tn>"+OMNI_CAMPAIGN_NAME+">"+OMNI_PAGE_NAME.replace(/\:/g,'>');
s.prop1 = "global";
s.prop2 = "global:campaign";
s.prop3 = "global:campaign:gbm_tn";
s.prop4 = "global:campaign:gbm_tn:"+OMNI_CAMPAIGN_NAME+"";
s.prop5 = "global:campaign:gbm_tn:"+OMNI_CAMPAIGN_NAME+":"+OMNI_PAGE_NAME.split(':')[0];
function omniture_click(ClickName) {
	var s=s_gi(s_account);
	s.linkTrackVars="eVar33,prop33,events,eVar39,eVar40";
	s.linkTrackEvents="event45";
	s.eVar33=ClickName;
	s.prop33=ClickName;
	s.events="event45";
	s.eVar39 = s.pageURL;
	s.eVar40 = s.pageName;
	s.tl(this,'o',ClickName);
	s.linkTrackVars = "none";
	s.linkTrackEvents="none";
}
var s_code = s.t();
/* if (s_code) document.write(s_code);
if (navigator.appVersion.indexOf('MSIE')>= 0) document.write(unescape('%3C') + '\!-' + '-');  */