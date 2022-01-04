/* Microsite Analytics code included DIL code for Audience Manager */

/* SiteCatalyst code version: H.25.5.
Copyright 1996-2013 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */

function getFrameReferrer(){
	var refer;
	try{
		if (document.referrer == parent.frames.location) {
			refer = top.document.referrer.toString();
		} else { refer = document.referrer; }
		if (refer.length == "" && window.opener != null) {
			refer = window.opener.location.toString();
		}
	}catch(e){
		refer = document.referrer.toString();
	}
	return refer;
}

function getFrameQueryParam(campaignParam){
    var campaignReturn = "";
    var frameHref = parent.frames.location.href;
	if (frameHref.indexOf("?") > -1 ){
		var frameQueryString = frameHref.substr(frameHref.indexOf("?")).toLowerCase();
		var arrayQueryString = frameQueryString.split("&");
		for ( var i = 0; i < arrayQueryString .length; i++ ){
			if (arrayQueryString[i].indexOf(campaignParam.toLowerCase() + "=") > -1 ){
				var campaignValue = arrayQueryString[i].split("=");
				campaignReturn = campaignValue[1];
				break;
			}
		}
	}
	return unescape(campaignReturn);
}

/*
 * param :No
 * return : Account Site Code that is used in Omniture code
 * Descriptioin : Site Code that is trasformed ( uk -> uk, ca_fr -> cafr )
 */
function getOmniAccountSiteCd(){
	var siteCd;
	var accountSiteCd;
	try {
		siteCd = getOmniSiteCd();
		siteCd = siteCd.replace("_", "");
		accountSiteCd = siteCd;
	} catch(e) {
		accountSiteCd = "etc";
	}
	return accountSiteCd;
}

/*
 * param : Cookie name
 * return : Cookie Value
 * Descriptioin : Cookie value return
 */
function getOmniCookie(cookieName){
	var cookieVal = "";
	var searchParam = cookieName + "=";
	
	if (document.cookie.length > 0){
		offset = document.cookie.indexOf(searchParam);
		if (offset != -1){
			offset += searchParam.length;
			end = document.cookie.indexOf(";", offset);
			if (end == -1)
				end = document.cookie.length;
			cookieVal = unescape(document.cookie.substring(offset, end));
		}
	}
	return cookieVal;
}

/*
 * param : Country Code
 * return : Country Code from country_codes cookie
 * Descriptioin : Currency Unit return
 */
function getOmniSiteCd(){
	var siteCd;
	try {
		siteCd = getOmniCookie('country_codes');
	} catch(e) {
		siteCd = "etc";
	}
	return siteCd;
}
	
/*
 * param : Country Code
 * return : Currency Unit
 * Descriptioin : Currency Unit return
 */
function getOmniCurrencyCd(siteCd) {
	var arrSiteCd = new Array("ae","ae_ar","africa_en","africa_fr","africa_pt","ar","at","au","baltic","be","be_fr","bg","br","ca","ca_fr","ch","ch_fr","cl","cn","co","cz","de","dk","ee","eg","es","eu","fi","fr","global","gr","hk","hk_en","hr","hu","id","ie","il","in","iran","it","jp","sec","kz_ru","latin","latin_en","levant","lt","lv","mea_ar","mea_en","mx","my","n_africa","nl","no","nz","pe","ph","pk","pl","pt","ro","rs","ru","sa","sa_en","se","sg","sk","th","tr","tw","ua","ua_ru","uk","us","ve","vn","za","py","uy","si");
	var arrCurrencyCd = new Array("AED","AED","USD","USD","USD","ARS","EUR","AUD","USD","EUR","EUR","BGN","BRL","CAD","CAD","CHF","CHF","CLP","CNY","COP","CZK","EUR","DKK","EUR","EGP","EUR","EUR","EUR","EUR","USD","EUR","HKD","HKD","HRK","HUF","IDR","EUR","ILS","INR","IRR","EUR","JPY","KRW","KZT","PAB","PAB","LBP","LTL","LVL","USD","USD","MXN","MYR","USD","EUR","NOK","NZD","PEN","PHP","PKR","PLN","EUR","RON","RSD","RUB","SAR","SAR","SEK","SGD","EUR","THB","TRY","TWD","UAH","UAH","GBP","USD","VEF","VND","ZAR","PYG","UYU","SIT");
	var currencyCd = "";
	try {
		for (var i=0; i<arrSiteCd.length; i++) {
			if (siteCd == arrSiteCd[i]) {
				currencyCd = arrCurrencyCd[i];
				break;
			}
		}
	} catch(e) {
		currencyCd = "USD";
	}
	return currencyCd;
}


var s_account="sssamsung4galaxy,sssamsung4mstglobal";
if (window.location.host == "origin2.samsung.com"
 || window.location.host == "stgweb4.samsung.com"
 || window.location.host.indexOf("id-staging.com") > 0) {
	s_account="ssmicrositetest";
}


var s=s_gi(s_account);
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="UTF-8"
s.currencyCode=getOmniCurrencyCd(getOmniSiteCd());

/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s.linkInternalFilters="javascript:,samsung.com"
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"

/* Plugin Config */
s.usePlugins=true
function s_doPlugins(s) {
	/* Add calls to plugins here */

	if(!s.campaign) {
		if (getFrameQueryParam('cid')) {
			s.campaign = getFrameQueryParam('cid');
			s.campaign = s.getValOnce(s.campaign,"s_campaign",0);
		}else {
			s.campaign = s.getQueryParam('cid');
			s.campaign = s.getValOnce(s.campaign,"s_campaign",0);
		}
		if(getFrameReferrer()) s.referrer = getFrameReferrer();
	}

	/*Add calls to plugins here */
	// Tracking internal campaigns or promotions
	if(!s.eVar7)
		s.eVar7=s.getQueryParam('pid');

	s.eVar7=s.getValOnce(s.eVar7,"s_evar7",0);

	if(s.prop1){
		s.eVar1 = s.prop1;
	}

	if(s.prop2){
		s.eVar2 = s.prop2;
	}

	if(s.prop3){
		s.eVar3 = s.prop3;
	}

	if(s.prop4){
		s.eVar4 = s.prop4;
	}

	if(s.prop5){
		s.eVar5 = s.prop5;
	}


	// Copy original referrer into s.referrer if it exists
	var tempVar;
	tempVar = s.getQueryParam('origref');
	if(tempVar) s.referrer=tempVar;


s.prop53 = s.getPreviousValue(s.pageName,'s_ppn'); //prop53: prev page name
s.prop54 = s.getPercentPageViewed(); //prop54: max % viewed of prev page
if(!s.prop53||s.prop54=='no value')s.prop54=''; //clear max % viewed if no prev page view

}

s.doPlugins = s_doPlugins;


/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */
/*
 * Custom Code: Brightcove Smart Analytics v2.2
 */
var player;var modVP;var modExp;var modCon;var mediaFriendly;var mediaName;var mediaID=0;var mediaLength;var mediaOffset=0;var mediaTagsArray = [];var mediaTagsArray2 = [];var mediaRefID;var mediaPlayerType;
var mediaPlayerName="Brightcove Smart Player"; //Required hard code player name here.
function myTemplateLoaded(experienceID) {
    player = brightcove.api.getExperience(experienceID);
    modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    modExp = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    modCon = player.getModule(brightcove.api.modules.APIModules.CONTENT);
    modExp.addEventListener(brightcove.api.events.ExperienceEvent.TEMPLATE_READY, onTemplateReady);}
function onTemplateReady(evt) {
    modVP.addEventListener(brightcove.api.events.MediaEvent.PLAY, onPlay);
    modVP.addEventListener(brightcove.api.events.MediaEvent.STOP, onStop);
	modVP.addEventListener(brightcove.api.events.MediaEvent.PROGRESS, onProgress);}
function onPlay(evt){
mediaLength=evt.duration;  //Required video duration
mediaOffset=Math.floor(evt.position); //Required video position
mediaID=(evt.media.id).toString();  //Required video id
mediaFriendly=evt.media.displayName; //Required video title
mediaName=mediaID+":"+mediaFriendly; //Required Format video name
//mediaRefID=evt.media.referenceId;  //Optional reference id
//mediaPlayerType=player.type; //Optional player type
//mediaTagsArray=evt.media.tags; //Optional tags
//for (i=0;i<mediaTagsArray.length;i++) {mediaTagsArray2[i]=mediaTagsArray[i]['name'];}
/* Check for start of video */
if (mediaOffset==0){
/* These data points are optional. If using SC14, change context data variables to hard coded variable names and change trackVars above. */
//s.contextData['bc_tags']=mediaTagsArray2.toString(); //Optional returns list of tags for current video.  Flash only.
//s.contextData['bc_refid']=mediaRefID; //Optional returns reference id
//s.contextData['bc_player']=mediaPlayerName; //Optional player name is currently hard coded.  Will be dynamic in later releases.
//s.contextData['bc_playertype']=mediaPlayerType; //Optional returns flash or html
s.Media.open(mediaName,mediaLength,mediaPlayerName);
s.Media.play(mediaName,mediaOffset);}else{
s.Media.play(mediaName,mediaOffset);}}
function onStop(evt){
mediaOffset=Math.floor(evt.position);
if (mediaOffset==mediaLength) {
s.Media.stop(mediaName,mediaOffset);
s.Media.close(mediaName);}else{
s.Media.stop(mediaName,mediaOffset);}}
function onProgress(evt){
s.Media.monitor = function (s,media) {
if (media.event == "MILESTONE") {
/* Use to set additional data points during milestone calls */
//s.Media.track(media.name); Uncomment if setting extra milestone data.
}}}

/*
* Plugin: getPreviousValue_v1.0 - return previous value of designated
* variable (requires split utility)
*/
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
/*
* Utility Function: split v1.5 - split a string (JS 1.0 compatible)
*/
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");


/*
 * Plugin: getPercentPageViewed 2.0 (Minfied)
 */
s.handlePPVevents=function(){if(!s_c_il)return;for(var i=0,scill=s_c_il.length;i<scill;i++)if(typeof s_c_il[i]!="undefined"&&s_c_il[i]._c&&s_c_il[i]._c=="s_c"){var s=s_c_il[i];break}if(!s)return;if(!s.getPPVid)return;var dh=Math.max(Math.max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=window.innerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHeight),
st=window.pageYOffset||(window.document.documentElement.scrollTop||window.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c="";if(!s.c_r("tp")||decodeURIComponent(s.c_r("s_ppv").split(",")[0])!=s.getPPVid||s.ppvChange=="1"&&(s.c_r("tp")&&dh!=s.c_r("tp"))){s.c_w("tp",dh);s.c_w("s_ppv","")}else c=s.c_r("s_ppv");var a=c&&c.indexOf(",")>-1?c.split(",",4):[],id=a.length>0?a[0]:escape(s.getPPVid),cv=a.length>1?parseInt(a[1]):0,p0=a.length>2?parseInt(a[2]):pv,cy=a.length>3?parseInt(a[3]):
0,cn=pv>0?id+","+(pv>cv?pv:cv)+","+p0+","+(vh>cy?vh:cy):"";s.c_w("s_ppv",cn)};
s.getPercentPageViewed=function(pid,change){var s=this,ist=!s.getPPVid?true:false;pid=pid?pid:s.pageName?s.pageName:document.location.href;s.ppvChange=change?change:"1";if(typeof s.linkType!="undefined"&&s.linkType!="0"&&s.linkType!=""&&s.linkType!="e")return"";var v=s.c_r("s_ppv"),a=v.indexOf(",")>-1?v.split(",",4):[];if(a&&a.length<4){for(var i=3;i>0;i--)a[i]=i<a.length?a[i-1]:"";a[0]=""}if(a)a[0]=unescape(a[0]);if(!s.getPPVid||s.getPPVid!=pid){s.getPPVid=pid;s.c_w("s_ppv",escape(s.getPPVid));s.handlePPVevents()}if(ist)if(window.addEventListener){window.addEventListener("load",
s.handlePPVevents,false);window.addEventListener("click",s.handlePPVevents,false);window.addEventListener("scroll",s.handlePPVevents,false);window.addEventListener("resize",s.handlePPVevents,false)}else if(window.attachEvent){window.attachEvent("onload",s.handlePPVevents);window.attachEvent("onclick",s.handlePPVevents);window.attachEvent("onscroll",s.handlePPVevents);window.attachEvent("onresize",s.handlePPVevents)}return pid!="-"?a:a[1]};



/*
 * Plugin: getQueryParam 2.1 - return query string parameter(s)
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.subs"
+"tring(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");

/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

/*
 * Utility Function: vpr - set the variable vs with value v
 */
s.vpr=new Function("vs","v",
"if(typeof(v)!='undefined'){var s=this; eval('s.'+vs+'=\"'+v+'\"')}");

/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.trackingServer="nmetrics.samsung.com";
s.trackingServerSecure="smetrics.samsung.com";

/************* MEDIA MODULE **************/
s.m_Media_c="var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m="
+"this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;"
+"if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm"
+".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.ad=0;i.adpn;i.adpp;i.adppp;i.clk;i.CPM;i.co=0;i.cot=0;i.lm=0;i.l"
+"om=0;m.l[n]=i}};m.openAd=function(n,l,p,pn,pp,ppp,CPM,b){var m=this,i=new Object;n=m.cn(n);m.open(n,l,p,b);i=m.l[n];if(i){i.ad=1;i.adpn=m.cn(pn);i.adpp=pp;i.adppp=ppp;i.CPM=CPM}};m._delete=function"
+"(n){var m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new "
+"Object;i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.click=function(n,o"
+"){this.e(n,7,o)};m.complete=function(n,o){this.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=v"
+"o.linkTrackEvents,pe='m_i',pev3,c=vo.contextData,x;if(i.ad){ns+='ad.';if(i.adpn){c['a.media.name']=i.adpn;c[ns+'pod']=i.adpp;c[ns+'podPosition']=i.adppp;}if(!i.vt)c[ns+'CPM']=i.CPM;}if (i.clk) {c[n"
+"s+'clicked']=true;i.clk=0}c['a.contentType']='video'+(i.ad?'Ad':'');c['a.media.channel']=m.channel;c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0)c[ns+'length']=i.l;if(Math.floor(i.ts)>0)c[ns+'ti"
+"mePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView'"
+"]=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3=c['a.contentType'];vo.pe="
+"pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='strin"
+"g'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]=c[x]}else if(y=='view'||y=='segmentView'||y=='clicked'||y=='complete'||y=='timePlayed'||y=='CPM'){if("
+"e)e+=','+a;if(y=='timePlayed'||y=='CPM'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x"
+"+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.even"
+"ts2?',':'')+d[x+'s'][c[x]]}}if(c[x])c[x]=undefined;if(y=='segment'&&c[x+'Num'])c[x+\"Num\"]=undefined}}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='"
+"--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!"
+"=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.tr"
+"ackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;if(!m.channel)m.channel=m.s.wd.location.hostnam"
+"e;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(i.ad){ti=m.adTrackSeconds;tp=m.adTrackMilestones;to=m.adTrackOffsetMilestones;sm=m.adSegmentByMilestones;so=m.adSegmentByOffsetMilestones}if(o<0){if(i"
+".lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.ad=i.ad;w.length=i.l;w.openTi"
+"me=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x==4?"
+"'TRACK':(x==5?'COMPLETE':(x==7?'CLICK':('CLOSE')))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if("
+"(x<=3||x>=5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i.l)*100<c"
+"&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w"
+".mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0"
+";if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]=="
+"'E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if((x>=2||i.x>=100)&&i.lo<o){i.t+=o-i.lo;i.ts+"
+"=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||("
+"x<=3&&i.x>=100)){if(i.lx!=2)i.e+='E'+Math.floor(o);x=0;v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==7){w.clicked=i.clk=1;t=1}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m."
+"completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime"
+"=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new "
+"Object;vo.contextData=new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i)"
+";else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx=sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,"
+"pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){"
+"var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7"
+"='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new"
+" Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch("
+"e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p="
+"'Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8"
+")x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x."
+"type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p=="
+"2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTime"
+"Scale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x"
+"!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c"
+");o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetL"
+"ength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10|"
+"|!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new"
+" Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack"
+"&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd."
+"addEventListener)s.wd.addEventListener('load',m.as,false);if(m.onLoad)m.onLoad(s,m)";s.m_i("Media");

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.25.5';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
+"ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
+";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
+"0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
+",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
+"bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
+"e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
+";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
+"nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
+"e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
+".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
+"0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
+"0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
+");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
+";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
+"f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
+".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
+";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
+"s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
+"r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin"
+"gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase()"
+";else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.t"
+"cn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[u"
+"n]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;retur"
+"n ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if("
+"!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nr"
+"s){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'"
+"].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=ne"
+"w Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.s"
+"ubstring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.len"
+"gth>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\","
+"j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&')"
+";if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c."
+"length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)i"
+"f((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk"
+".substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'"
+"')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextDa"
+"ta.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp="
+"='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this"
+",qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn="
+"s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events"
+"2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!="
+"'linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(25"
+"5);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q="
+"'vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUT"
+"O')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q="
+"'vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else "
+"if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct"
+"';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0)"
+";v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieve"
+"LightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n"
+";else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t."
+"toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase()"
+":'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.loca"
+"tion.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef"
+"||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)r"
+"eturn this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.hre"
+"f}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s."
+"useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target"
+";nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;"
+"if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.wd.name"
+"))){e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();n=s.d.createEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view"
+",e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget);n.s_fe=1;s.bct=e.target;s.bce=n}}}');s.oh=function(o){var s=this,l=s.wd.location,"
+"h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.path"
+"name.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o."
+"scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase("
+");else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('"
+"javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.inn"
+"erText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.su"
+"bstring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=th"
+"is.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1"
+"));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.sq"
+"u=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in"
+" s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],"
+"r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.i"
+"ndexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&"
+"&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false"
+")}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900"
+"?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t"
+".indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountLis"
+"t,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.ind"
+"exOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+"
+"un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m'"
+";m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n"
+"]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new "
+"Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)))"
+";x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d"
+"=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf"
+"('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}"
+"}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s"
+"=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){"
+"if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)cle"
+"arTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'"
+"}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l"
+"=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m"
+"_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){"
+"if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo"
+"[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0"
+";s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._"
+"t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,"
+"e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear()"
+";e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s."
+"admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}')"
+");if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!visitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm="
+"new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y"
+"+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;"
+"s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';i"
+"f(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i"
+"=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width"
+"+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>"
+"=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s"
+".b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.conne"
+"ctionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVer"
+"sion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return"
+" '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.re"
+"ferrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.par"
+"entElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o="
+"0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t"
+"=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.da"
+"taset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+"
+"o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while"
+"(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}o"
+"ce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+"
+"s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt"
+"?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.v"
+"oa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.t"
+"rackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds="
+"ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.l"
+"mq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Obj"
+"ect.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if"
+"(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=docum"
+"ent;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVer"
+"sion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac="
+"(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s"
+".ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s."
+"sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods"
+",cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl"
+"_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,chan"
+"nel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n"
+"<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,"
+"browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disab"
+"leBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQuerySt"
+"ring,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.conte"
+"xtData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()

/* Audience Manager DIL 5.7 */

"function"!==typeof window.DIL&&(window.DIL=function(a,c){var d=[],b,g;a!==Object(a)&&(a={});var e,h,k,q,p,n,l,D,m,J,K,E;e=a.partner;h=a.containerNSID;k=a.iframeAttachmentDelay;q=!!a.disableDestinationPublishingIframe;p=a.iframeAkamaiHTTPS;n=a.mappings;l=a.uuidCookie;D=!0===a.enableErrorReporting;m=a.visitorService;J=a.declaredId;K=!0===a.removeFinishedScriptsAndCallbacks;E=!0===a.delayAllUntilWindowLoad;var L,M,N,F,C,O,P;L=!0===a.disableScriptAttachment;M=!0===a.disableCORSFiring;N=!0===a.disableDefaultRequest;
F=a.afterResultForDefaultRequest;C=a.dpIframeSrc;O=!0===a.testCORS;P=!0===a.useJSONPOnly;D&&DIL.errorModule.activate();var Q=!0===window._dil_unit_tests;(b=c)&&d.push(b+"");if(!e||"string"!==typeof e)return b="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:b,filename:"dil.js"}),Error(b);b="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(h||"number"===typeof h)h=parseInt(h,10),!isNaN(h)&&0<=h&&(b="");
b&&(h=0,d.push(b),b="");g=DIL.getDil(e,h);if(g instanceof DIL&&g.api.getPartner()===e&&g.api.getContainerNSID()===h)return g;if(this instanceof DIL)DIL.registerDil(this,e,h);else return new DIL(a,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+e+" and containerNSID = "+h);var y={IS_HTTPS:"https:"===document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC"},G={stuffed:{}},u={},r={firingQueue:[],
fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:h+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,
d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,mid:null,noVisitorAPI:!1,instance:null,releaseType:"no VisitorAPI",admsProcessingStarted:!1,process:function(f){try{if(!this.admsProcessingStarted){var s=this,a,x,b,d,c;if("function"===typeof f&&"function"===typeof f.getInstance){if(m===Object(m)&&(a=m.namespace)&&"string"===typeof a)x=f.getInstance(a);else{this.releaseType="no namespace";this.releaseRequests();return}if(x===Object(x)&&"function"===
typeof x.isAllowed&&"function"===typeof x.getMarketingCloudVisitorID){if(!x.isAllowed()){this.releaseType="VisitorAPI not allowed";this.releaseRequests();return}this.instance=x;this.admsProcessingStarted=!0;b=function(f){"VisitorAPI"!==s.releaseType&&(s.mid=f,s.releaseType="VisitorAPI",s.releaseRequests())};Q&&(d=m.server)&&"string"===typeof d&&(x.server=d);c=x.getMarketingCloudVisitorID(b);if("string"===typeof c&&c.length){b(c);return}setTimeout(function(){"VisitorAPI"!==s.releaseType&&(s.releaseType=
"timeout",s.releaseRequests())},this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(e){this.releaseRequests()}},releaseRequests:function(){this.calledBack=!0;r.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var f=v.isPopulatedString,s=this.getMarketingCloudVisitorID();f(this.mid)&&this.mid===s||(this.mid=
s);return f(this.mid)?"d_mid="+this.mid+"&":""}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(f,s){var a=v.isPopulatedString,x=encodeURIComponent;if(f===Object(f)&&a(s)){var b=f.dpid,d=f.dpuuid,c=null;if(a(b)&&a(d)){c=x(b)+"$"+x(d);if(!0===this.declaredIdCombos[c])return"setDeclaredId: combo exists for type '"+s+"'";this.declaredIdCombos[c]=!0;this.declaredId[s]={dpid:b,dpuuid:d};return"setDeclaredId: succeeded for type '"+s+"'"}}return"setDeclaredId: failed for type '"+
s+"'"},getDeclaredIdQueryString:function(){var f=this.declaredId.request,s=this.declaredId.init,a="";null!==f?a="&d_dpid="+f.dpid+"&d_dpuuid="+f.dpuuid:null!==s&&(a="&d_dpid="+s.dpid+"&d_dpuuid="+s.dpuuid);return a}},registerRequest:function(f){var s=this.firingQueue;f===Object(f)&&s.push(f);this.firing||!s.length||E&&!DIL.windowLoaded||(this.adms.calledBack?(f=s.shift(),f.src=f.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),v.isPopulatedString(f.corsPostData)&&
(f.corsPostData=f.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+"d_nsid=")),A.fireRequest(f),this.firstRequestHasFired||"script"!==f.tag&&"cors"!==f.tag||(this.firstRequestHasFired=!0)):this.processVisitorAPI())},processVisitorAPI:function(){this.adms.process(window.Visitor)},requestRemoval:function(f){if(!K)return"removeFinishedScriptsAndCallbacks is not boolean true";var s=this.toRemove,a,b;f===Object(f)&&(a=f.script,b=f.callbackName,(a===Object(a)&&"SCRIPT"===a.nodeName||"no script created"===
a)&&"string"===typeof b&&b.length&&s.push(f));if(this.readyToRemove&&s.length){b=s.shift();a=b.script;b=b.callbackName;"no script created"!==a?(f=a.src,a.parentNode.removeChild(a)):f=a;window[b]=null;try{delete window[b]}catch(d){}this.removed.push({scriptSrc:f,callbackName:b});DIL.variables.scriptsRemoved.push(f);DIL.variables.callbacksRemoved.push(b);return this.requestRemoval()}return"requestRemoval() processed"}};g=function(){var f="http://fast.",a="?d_nsid="+h+"#"+encodeURIComponent(document.location.href);
if("string"===typeof C&&C.length)return C+a;y.IS_HTTPS&&(f=!0===p?"https://fast.":"https://");return f+e+".demdex.net/dest4.html"+a};var z={THROTTLE_START:3E4,throttleTimerSet:!1,id:"destination_publishing_iframe_"+e+"_"+h,url:g(),iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messageSendingInterval:y.POST_MESSAGE_ENABLED?15:100,jsonProcessed:[],attachIframe:function(){var f=this,a=document.createElement("iframe");a.id=this.id;a.style.cssText="display: none; width: 0; height: 0;";
a.src=this.url;t.addListener(a,"load",function(){f.iframeHasLoaded=!0;f.requestToProcess()});document.body.appendChild(a);this.iframe=a},requestToProcess:function(f,a){var b=this;f&&!v.isEmptyObject(f)&&this.process(f,a);this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){b.messageSendingInterval=y.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},process:function(f,
a){var b=encodeURIComponent,d,c,e,g,h,n;a===Object(a)&&(n=t.encodeAndBuildRequest(["",a.dpid||"",a.dpuuid||""],","));if((d=f.dests)&&d instanceof Array&&(c=d.length))for(e=0;e<c;e++)g=d[e],g=[b("dests"),b(g.id||""),b(g.y||""),b(g.c||"")],this.addMessage(g.join("|"));if((d=f.ibs)&&d instanceof Array&&(c=d.length))for(e=0;e<c;e++)g=d[e],g=[b("ibs"),b(g.id||""),b(g.tag||""),t.encodeAndBuildRequest(g.url||[],","),b(g.ttl||""),"",n],this.addMessage(g.join("|"));if((d=f.dpcalls)&&d instanceof Array&&(c=
d.length))for(e=0;e<c;e++)g=d[e],h=g.callback||{},h=[h.obj||"",h.fn||"",h.key||"",h.tag||"",h.url||""],g=[b("dpm"),b(g.id||""),b(g.tag||""),t.encodeAndBuildRequest(g.url||[],","),b(g.ttl||""),t.encodeAndBuildRequest(h,","),n],this.addMessage(g.join("|"));this.jsonProcessed.push(f)},addMessage:function(f){var a=encodeURIComponent,a=D?a("---destpub-debug---"):a("---destpub---");this.messages.push(a+f)},sendMessages:function(){var f=this,a;this.messages.length?(a=this.messages.shift(),DIL.xd.postMessage(a,
this.url,this.iframe.contentWindow),this.messagesPosted.push(a),setTimeout(function(){f.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1}},I={traits:function(f){v.isValidPdata(f)&&(u.sids instanceof Array||(u.sids=[]),t.extendArray(u.sids,f));return this},pixels:function(f){v.isValidPdata(f)&&(u.pdata instanceof Array||(u.pdata=[]),t.extendArray(u.pdata,f));return this},logs:function(f){v.isValidLogdata(f)&&(u.logdata!==Object(u.logdata)&&(u.logdata={}),t.extendObject(u.logdata,
f));return this},customQueryParams:function(f){v.isEmptyObject(f)||t.extendObject(u,f,r.reservedKeys);return this},signals:function(f,a){var b,d=f;if(!v.isEmptyObject(d)){if(a&&"string"===typeof a)for(b in d={},f)f.hasOwnProperty(b)&&(d[a+b]=f[b]);t.extendObject(u,d,r.reservedKeys)}return this},declaredId:function(f){r.declaredId.setDeclaredId(f,"request");return this},result:function(f){"function"===typeof f&&(u.callback=f);return this},afterResult:function(f){"function"===typeof f&&(u.postCallbackFn=
f);return this},useImageRequest:function(){u.useImageRequest=!0;return this},clearData:function(){u={};return this},submit:function(){A.submitRequest(u);u={};return this},getPartner:function(){return e},getContainerNSID:function(){return h},getEventLog:function(){return d},getState:function(){var f={},a={};t.extendObject(f,r,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});t.extendObject(a,z,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{pendingRequest:u,otherRequestInfo:f,
destinationPublishingInfo:a}},idSync:function(f){if(f!==Object(f)||"string"!==typeof f.dpid||!f.dpid.length)return"Error: config or config.dpid is empty";if("string"!==typeof f.url||!f.url.length)return"Error: config.url is empty";var a=f.url,b=f.minutesToLive,d=encodeURIComponent,c,a=a.replace(/^https:/,"").replace(/^http:/,"");if("undefined"===typeof b)b=20160;else if(b=parseInt(b,10),isNaN(b)||0>=b)return"Error: config.minutesToLive needs to be a positive number";c=t.encodeAndBuildRequest(["",
f.dpid,f.dpuuid||""],",");f=["ibs",d(f.dpid),"img",d(a),b,"",c];z.addMessage(f.join("|"));r.firstRequestHasFired&&z.requestToProcess();return"Successfully queued"},aamIdSync:function(f){if(f!==Object(f)||"string"!==typeof f.dpuuid||!f.dpuuid.length)return"Error: config or config.dpuuid is empty";f.url="//dpm.demdex.net/ibs:dpid="+f.dpid+"&dpuuid="+f.dpuuid;return this.idSync(f)},passData:function(f){if(v.isEmptyObject(f))return"Error: json is empty or not an object";A.defaultCallback(f);return"json submitted for processing"},
getPlatformParams:function(){return r.platformParams},getEventCallConfigParams:function(){var f=r,a=f.modStatsParams,b=f.platformParams,d;if(!a){a={};for(d in b)b.hasOwnProperty(d)&&!f.nonModStatsParams[d]&&(a[d.replace(/^d_/,"")]=b[d]);f.modStatsParams=a}return a}},A={corsMetadata:function(){var f="none",a=!0;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?f="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?
f="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(a=!1),0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&(a=!1));return{corsType:f,corsCookiesEnabled:a}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(f){r.registerRequest(A.createQueuedRequest(f));return!0},createQueuedRequest:function(f){var a=r,b,d=f.callback,c="img",g;if(!v.isEmptyObject(n)){var e,
m,l;for(e in n)n.hasOwnProperty(e)&&(m=n[e],null!=m&&""!==m&&e in f&&!(m in f||m in r.reservedKeys)&&(l=f[e],null!=l&&""!==l&&(f[m]=l)))}v.isValidPdata(f.sids)||(f.sids=[]);v.isValidPdata(f.pdata)||(f.pdata=[]);v.isValidLogdata(f.logdata)||(f.logdata={});f.logdataArray=t.convertObjectToKeyValuePairs(f.logdata,"=",!0);f.logdataArray.push("_ts="+(new Date).getTime());"function"!==typeof d&&(d=this.defaultCallback);a.useJSONP=!0!==f.useImageRequest;a.useJSONP&&(c="script",b=a.callbackPrefix+"_"+h+"_"+
(new Date).getTime());a=this.makeRequestSrcData(f,b);!P&&(g=this.getCORSInstance())&&a.truncated&&(this.corsMetadata.corsCookiesEnabled||a.isDeclaredIdCall)&&(c="cors");return{tag:c,src:a.src,corsSrc:a.corsSrc,internalCallbackName:b,callbackFn:d,postCallbackFn:f.postCallbackFn,useImageRequest:!!f.useImageRequest,requestData:f,corsInstance:g,corsPostData:a.corsPostData,hasCORSError:!1}},defaultCallback:function(f,a){var b,d,c,e,g,h,m,n,w;if((b=f.stuff)&&b instanceof Array&&(d=b.length))for(c=0;c<d;c++)if((e=
b[c])&&e===Object(e)){g=e.cn;h=e.cv;m=e.ttl;if("undefined"===typeof m||""===m)m=Math.floor(t.getMaxCookieExpiresInMinutes()/60/24);n=e.dmn||"."+document.domain.replace(/^www\./,"");w=e.type;g&&(h||"number"===typeof h)&&("var"!==w&&(m=parseInt(m,10))&&!isNaN(m)&&t.setCookie(g,h,1440*m,"/",n,!1),G.stuffed[g]=h)}b=f.uuid;v.isPopulatedString(b)&&!v.isEmptyObject(l)&&(d=l.path,"string"===typeof d&&d.length||(d="/"),c=parseInt(l.days,10),isNaN(c)&&(c=100),t.setCookie(l.name||"aam_did",b,1440*c,d,l.domain||
"."+document.domain.replace(/^www\./,""),!0===l.secure));q||r.abortRequests||z.requestToProcess(f,a)},makeRequestSrcData:function(f,a){f.sids=v.removeEmptyArrayValues(f.sids||[]);f.pdata=v.removeEmptyArrayValues(f.pdata||[]);var b=r,d=b.platformParams,c=t.encodeAndBuildRequest(f.sids,","),g=t.encodeAndBuildRequest(f.pdata,","),m=(f.logdataArray||[]).join("&");delete f.logdataArray;var n=y.IS_HTTPS?"https://":"http://",l=b.declaredId.getDeclaredIdQueryString(),k;k=[];var w,q,p,u;for(w in f)if(!(w in
b.reservedKeys)&&f.hasOwnProperty(w))if(q=f[w],w=encodeURIComponent(w),q instanceof Array)for(p=0,u=q.length;p<u;p++)k.push(w+"="+encodeURIComponent(q[p]));else k.push(w+"="+encodeURIComponent(q));k=k.length?"&"+k.join("&"):"";w=!1;c="d_nsid="+d.d_nsid+l+(c.length?"&d_sid="+c:"")+(g.length?"&d_px="+g:"")+(m.length?"&d_ld="+encodeURIComponent(m):"");d="&d_rtbd="+d.d_rtbd+"&d_jsonv="+d.d_jsonv+"&d_dst="+d.d_dst;n=n+e+".demdex.net/event";g=b=n+"?"+c+(b.useJSONP?d+"&d_cb="+(a||""):"")+k;2048<b.length&&
(b=b.substring(0,b.lastIndexOf("&")),w=!0);return{corsSrc:n+"?"+(O?"testcors=1&d_nsid="+h+"&":"")+"_ts="+(new Date).getTime(),src:b,originalSrc:g,truncated:w,corsPostData:c+d+k,isDeclaredIdCall:""!==l}},fireRequest:function(f){if("img"===f.tag)this.fireImage(f);else{var a=r.declaredId,a=a.declaredId.request||a.declaredId.init||{},a={dpid:a.dpid||"",dpuuid:a.dpuuid||""};"script"===f.tag?this.fireScript(f,a):"cors"===f.tag&&this.fireCORS(f,a)}},fireImage:function(a){var c=r,e,g;c.abortRequests||(c.firing=
!0,e=new Image(0,0),c.sent.push(a),e.onload=function(){c.firing=!1;c.fired.push(a);c.num_of_img_responses++;c.registerRequest()},g=function(e){b="imgAbortOrErrorHandler received the event of type "+e.type;d.push(b);c.abortRequests=!0;c.firing=!1;c.errored.push(a);c.num_of_img_errors++;c.registerRequest()},e.addEventListener?(e.addEventListener("error",g,!1),e.addEventListener("abort",g,!1)):e.attachEvent&&(e.attachEvent("onerror",g),e.attachEvent("onabort",g)),e.src=a.src)},fireScript:function(a,
c){var g=this,h=r,m,n,l=a.src,k=a.postCallbackFn,q="function"===typeof k,p=a.internalCallbackName;h.abortRequests||(h.firing=!0,window[p]=function(g){try{g!==Object(g)&&(g={});var m=a.callbackFn;h.firing=!1;h.fired.push(a);h.num_of_jsonp_responses++;m(g,c);q&&k(g,c)}catch(l){l.message="DIL jsonp callback caught error with message "+l.message;b=l.message;d.push(b);l.filename=l.filename||"dil.js";l.partner=e;DIL.errorModule.handleError(l);try{m({error:l.name+"|"+l.message},c),q&&k({error:l.name+"|"+
l.message},c)}catch(H){}}finally{h.requestRemoval({script:n,callbackName:p}),h.registerRequest()}},L?(h.firing=!1,h.requestRemoval({script:"no script created",callbackName:p})):(n=document.createElement("script"),n.addEventListener&&n.addEventListener("error",function(d){h.requestRemoval({script:n,callbackName:p});b="jsonp script tag error listener received the event of type "+d.type+" with src "+l;g.handleScriptError(b,a)},!1),n.type="text/javascript",n.src=l,m=DIL.variables.scriptNodeList[0],m.parentNode.insertBefore(n,
m)),h.sent.push(a),h.declaredId.declaredId.request=null)},fireCORS:function(a,c){function g(n){var l;try{if(l=JSON.parse(n),l!==Object(l)){h.handleCORSError(a,c,"Response is not JSON");return}}catch(k){h.handleCORSError(a,c,"Error parsing response as JSON");return}try{var H=a.callbackFn;m.firing=!1;m.fired.push(a);m.num_of_cors_responses++;H(l,c);t&&q(l,c)}catch(p){p.message="DIL handleCORSResponse caught error with message "+p.message;b=p.message;d.push(b);p.filename=p.filename||"dil.js";p.partner=
e;DIL.errorModule.handleError(p);try{H({error:p.name+"|"+p.message},c),t&&q({error:p.name+"|"+p.message},c)}catch(r){}}finally{m.registerRequest()}}var h=this,m=r,n=this.corsMetadata.corsType,l=a.corsSrc,k=a.corsInstance,p=a.corsPostData,q=a.postCallbackFn,t="function"===typeof q;if(!m.abortRequests){m.firing=!0;if(M)m.firing=!1;else try{k.open("post",l,!0),"XMLHttpRequest"===n?(k.withCredentials=!0,k.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),k.onreadystatechange=function(){4===
this.readyState&&(200===this.status?g(this.responseText):h.handleCORSError(a,c,"onreadystatechange"))}):"XDomainRequest"===n&&(k.onload=function(){g(this.responseText)}),k.onerror=function(){h.handleCORSError(a,c,"onerror")},k.ontimeout=function(){h.handleCORSError(a,c,"ontimeout")},k.send(p)}catch(u){this.handleCORSError(a,c,"try-catch")}m.sent.push(a);m.declaredId.declaredId.request=null}},handleCORSError:function(a,b,c){a.hasCORSError||(a.hasCORSError=!0,r.num_of_cors_errors++,r.corsErrorSources.push(c),
a.tag="script",this.fireScript(a,b))},handleScriptError:function(a,b){r.num_of_jsonp_errors++;this.handleRequestError(a,b)},handleRequestError:function(a,b){var c=r;d.push(a);c.abortRequests=!0;c.firing=!1;c.errored.push(b);c.registerRequest()}},v={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;
return!0},removeEmptyArrayValues:function(a){for(var b=0,c=a.length,d,g=[],b=0;b<c;b++)d=a[b],"undefined"!==typeof d&&null!==d&&""!==d&&g.push(d);return g},isPopulatedString:function(a){return"string"===typeof a&&a.length}},t={addListener:function(){if(document.addEventListener)return function(a,b,c){a.addEventListener(b,function(a){"function"===typeof c&&c(a)},!1)};if(document.attachEvent)return function(a,b,c){a.attachEvent("on"+b,function(a){"function"===typeof c&&c(a)})}}(),convertObjectToKeyValuePairs:function(a,
b,c){var d=[],g,e;b||(b="=");for(g in a)a.hasOwnProperty(g)&&(e=a[g],"undefined"!==typeof e&&null!==e&&""!==e&&d.push(g+b+(c?encodeURIComponent(e):e)));return d},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var g=Array(d),e=0;e<d;e++)e in c&&(g[e]=b.call(b,c[e],
e,c));return g},filter:function(a,b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var g=[],e=0;e<d;e++)if(e in c){var h=c[e];b.call(b,h,e,c)&&g.push(h)}return g}return a.filter(b)},getCookie:function(a){a+="=";var b=document.cookie.split(";"),c,d,e;c=0;for(d=b.length;c<d;c++){for(e=b[c];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(a))return decodeURIComponent(e.substring(a.length,
e.length))}return null},setCookie:function(a,b,c,d,e,g){var h=new Date;c&&(c*=6E4);document.cookie=a+"="+encodeURIComponent(b)+(c?";expires="+(new Date(h.getTime()+c)).toUTCString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(g?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,b),!0):!1},extendObject:function(a,b,c){var d;if(a===Object(a)&&b===Object(b)){for(d in b)!b.hasOwnProperty(d)||!v.isEmptyObject(c)&&d in c||(a[d]=b[d]);return!0}return!1},
getMaxCookieExpiresInMinutes:function(){return((new Date(y.COOKIE_MAX_EXPIRATION_DATE)).getTime()-(new Date).getTime())/1E3/60}};"error"===e&&0===h&&t.addListener(window,"load",function(){DIL.windowLoaded=!0});var B=function(){r.registerRequest();S();q||r.abortRequests||z.attachIframe();r.readyToRemove=!0;r.requestRemoval()},S=function(){q||setTimeout(function(){N||r.firstRequestHasFired||r.adms.admsProcessingStarted||r.adms.calledBack||("function"===typeof F?I.afterResult(F).submit():I.submit())},
DIL.constants.TIME_TO_DEFAULT_REQUEST)},R=document;"error"!==e&&(DIL.windowLoaded?B():"complete"!==R.readyState&&"loaded"!==R.readyState?t.addListener(window,"load",B):DIL.isAddedPostWindowLoadWasCalled?t.addListener(window,"load",B):E||(k="number"===typeof k?parseInt(k,10):0,0>k&&(k=0),setTimeout(B,k||DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT)));r.declaredId.setDeclaredId(J,"init");this.api=I;this.getStuffedVariable=function(a){var b=G.stuffed[a];b||"number"===typeof b||(b=t.getCookie(a))||
"number"===typeof b||(b="");return b};this.validators=v;this.helpers=t;this.constants=y;this.log=d;Q&&(this.pendingRequest=u,this.requestController=r,this.setDestinationPublishingUrl=g,this.destinationPublishing=z,this.requestProcs=A,this.variables=G,this.callWindowLoadFunctions=B)},function(){var a=document,c;null==a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",c=function(){a.removeEventListener("DOMContentLoaded",c,!1);a.readyState="complete"},!1))}(),
DIL.extendStaticPropertiesAndMethods=function(a){var c;if(a===Object(a))for(c in a)a.hasOwnProperty(c)&&(this[c]=a[c])},DIL.extendStaticPropertiesAndMethods({version:"5.7",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50,TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT:500},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoadWasCalled:!1,isAddedPostWindowLoad:function(a){this.isAddedPostWindowLoadWasCalled=
!0;this.windowLoaded="function"===typeof a?!!a():"boolean"===typeof a?a:!0},create:function(a){try{return new DIL(a)}catch(c){return(new Image(0,0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(a,c,d){c=c+"$"+
d;c in this.dils||(this.dils[c]=a)},getDil:function(a,c){var d;"string"!==typeof a&&(a="");c||(c=0);d=a+"$"+c;return d in this.dils?this.dils[d]:Error("The DIL instance with partner = "+a+" and containerNSID = "+c+" was not found")},dexGetQSVars:function(a,c,d){c=this.getDil(c,d);return c instanceof this?c.getStuffedVariable(a):""},xd:{postMessage:function(a,c,d){var b=1;c&&(window.postMessage?d.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(d.location=c.replace(/#.*$/,"")+"#"+ +new Date+
b++ +"&"+a))}}}),DIL.errorModule=function(){var a=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),c={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},d=!1;return{activate:function(){d=!0},handleError:function(b){if(!d)return"DIL error module has not been activated";b!==Object(b)&&(b={});var g=b.name?(b.name+"").toLowerCase():
"",e=[];b={name:g,filename:b.filename?b.filename+"":"",partner:b.partner?b.partner+"":"no_partner",site:b.site?b.site+"":document.location.href,message:b.message?b.message+"":""};e.push(g in c?c[g]:c.noerrortypedefined);a.api.pixels(e).logs(b).useImageRequest().submit();return"DIL error report sent"},pixelMap:c}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(a,c,d){var b="";c=c||"Error caught in DIL module/submodule: ";a===Object(a)?b=c+(a.message||"err has no message"):(b=c+"err is not a valid object",
a={});a.message=b;d instanceof DIL&&(a.partner=d.api.getPartner());DIL.errorModule.handleError(a);return this.errorMessage=b}}});
DIL.tools.getSearchReferrer=function(a,c){var d=DIL.getDil("error"),b=DIL.tools.decomposeURI(a||document.referrer),g="",e="",h={queryParam:"q"};return(g=d.helpers.filter([c===Object(c)?c:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(a){return!(!a.hasOwnProperty("hostPattern")||!b.hostname.match(a.hostPattern))}).shift())?{valid:!0,name:b.hostname,keywords:(d.helpers.extendObject(h,g),e=h.queryPattern?
(g=(""+b.search).match(h.queryPattern))?g[1]:"":b.uriParams[h.queryParam],decodeURIComponent(e||"").replace(/\+|%20/g," "))}:{valid:!1,name:"",keywords:""}};
DIL.tools.decomposeURI=function(a){var c=DIL.getDil("error"),d=document.createElement("a");d.href=a||document.referrer;return{hash:d.hash,host:d.host.split(":").shift(),hostname:d.hostname,href:d.href,pathname:d.pathname.replace(/^\//,""),protocol:d.protocol,search:d.search,uriParams:function(a,d){c.helpers.map(d.split("&"),function(c){c=c.split("=");a[c.shift()]=c.shift()});return a}({},d.search.replace(/^(\/|\?)?|\/$/g,""))}};
DIL.tools.getMetaTags=function(){var a={},c=document.getElementsByTagName("meta"),d,b,g,e,h;d=0;for(g=arguments.length;d<g;d++)if(e=arguments[d],null!==e)for(b=0;b<c.length;b++)if(h=c[b],h.name===e){a[e]=h.content;break}return a};
DIL.modules.siteCatalyst={dil:null,handle:DIL.modules.helpers.handleModuleError,init:function(a,c,d,b){try{var g=this,e={name:"DIL Site Catalyst Module Error"},h=function(a){e.message=a;DIL.errorModule.handleError(e);return a};this.options=b===Object(b)?b:{};this.dil=null;if(c instanceof DIL)this.dil=c;else return h("dilInstance is not a valid instance of DIL");e.partner=c.api.getPartner();if(a!==Object(a))return h("siteCatalystReportingSuite is not an object");window.AppMeasurement_Module_DIL=a.m_DIL=
function(a){var b="function"===typeof a.m_i?a.m_i("DIL"):this;if(b!==Object(b))return h("m is not an object");b.trackVars=g.constructTrackVars(d);b.d=0;b.s=a;b._t=function(){var a,b,c=","+this.trackVars+",",d=this.s,e,k=[];e=[];var p={},q=!1;if(d!==Object(d))return h("Error in m._t function: s is not an object");if(this.d){if("function"===typeof d.foreachVar)d.foreachVar(function(a,b){"undefined"!==typeof b&&(p[a]=b,q=!0)},this.trackVars);else{if(!(d.va_t instanceof Array))return h("Error in m._t function: s.va_t is not an array");
if(d.lightProfileID)(a=d.lightTrackVars)&&(a=","+a+","+d.vl_mr+",");else if(d.pe||d.linkType)a=d.linkTrackVars,d.pe&&(b=d.pe.substring(0,1).toUpperCase()+d.pe.substring(1),d[b]&&(a=d[b].trackVars)),a&&(a=","+a+","+d.vl_l+","+d.vl_l2+",");if(a){b=0;for(k=a.split(",");b<k.length;b++)0<=c.indexOf(","+k[b]+",")&&e.push(k[b]);e.length&&(c=","+e.join(",")+",")}e=0;for(b=d.va_t.length;e<b;e++)a=d.va_t[e],0<=c.indexOf(","+a+",")&&"undefined"!==typeof d[a]&&null!==d[a]&&""!==d[a]&&(p[a]=d[a],q=!0)}g.includeContextData(d,
p).store_populated&&(q=!0);q&&this.d.api.signals(p,"c_").submit()}}};a.loadModule("DIL");a.DIL.d=c;return e.message?e.message:"DIL.modules.siteCatalyst.init() completed with no errors"}catch(k){return this.handle(k,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(a){var c=[],d,b,g,e,h;if(a===Object(a)){d=a.names;if(d instanceof Array&&(g=d.length))for(b=0;b<g;b++)e=d[b],"string"===typeof e&&e.length&&c.push(e);a=a.iteratedNames;if(a instanceof Array&&
(g=a.length))for(b=0;b<g;b++)if(d=a[b],d===Object(d)&&(e=d.name,h=parseInt(d.maxIndex,10),"string"===typeof e&&e.length&&!isNaN(h)&&0<=h))for(d=0;d<=h;d++)c.push(e+d);if(c.length)return c.join(",")}return this.constructTrackVars({names:"pageName channel campaign products events pe pev1 pev2 pev3".split(" "),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:250}]})},includeContextData:function(a,c){var d={},b=!1;if(a.contextData===Object(a.contextData)){var g=a.contextData,e=this.options.replaceContextDataPeriodsWith,
h=this.options.filterFromContextVariables,k={},q,p,n,l;"string"===typeof e&&e.length||(e="_");if(h instanceof Array)for(q=0,p=h.length;q<p;q++)n=h[q],this.dil.validators.isPopulatedString(n)&&(k[n]=!0);for(l in g)!g.hasOwnProperty(l)||k[l]||!(h=g[l])&&"number"!==typeof h||(l=("contextData."+l).replace(/\./g,e),c[l]=h,b=!0)}d.store_populated=b;return d}};
DIL.modules.GA={dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:DIL.modules.helpers.handleModuleError,init:function(a,c,d){try{this.tv=this.arr=this.dil=null;this.errorMessage="";this.signals={};this.hasSignals=!1;var b={name:"DIL GA Module Error"},g="";c instanceof DIL?(this.dil=c,b.partner=this.dil.api.getPartner()):(g="dilInstance is not a valid instance of DIL",
b.message=g,DIL.errorModule.handleError(b));a instanceof Array&&a.length?this.arr=a:(g="gaArray is not an array or is empty",b.message=g,DIL.errorModule.handleError(b));this.tv=this.constructTrackVars(d);this.errorMessage=g}catch(e){this.handle(e,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(a){var c=[],d,b,g,e;if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){g=this.defaultTrackVars;e={};d=0;for(b=g.length;d<b;d++)e[g[d]]=
!0;this.defaultTrackVarsObj=e}else e=this.defaultTrackVarsObj;if(a===Object(a)){a=a.names;if(a instanceof Array&&(b=a.length))for(d=0;d<b;d++)g=a[d],"string"===typeof g&&g.length&&g in e&&c.push(g);if(c.length)return c}return this.defaultTrackVars},constructGAObj:function(a){var c={};a=a instanceof Array?a:this.arr;var d,b,g,e;d=0;for(b=a.length;d<b;d++)g=a[d],g instanceof Array&&g.length&&(g=[],e=a[d],g instanceof Array&&e instanceof Array&&Array.prototype.push.apply(g,e),e=g.shift(),"string"===
typeof e&&e.length&&(c[e]instanceof Array||(c[e]=[]),c[e].push(g)));return c},addToSignals:function(a,c){if("string"!==typeof a||""===a||null==c||""===c)return!1;this.signals[a]instanceof Array||(this.signals[a]=[]);this.signals[a].push(c);return this.hasSignals=!0},constructSignals:function(){var a=this.constructGAObj(),c={_setAccount:function(a){this.addToSignals("c_accountId",a)},_setCustomVar:function(a,b,c){"string"===typeof b&&b.length&&this.addToSignals("c_"+b,c)},_addItem:function(a,b,c,d,
e,g){this.addToSignals("c_itemOrderId",a);this.addToSignals("c_itemSku",b);this.addToSignals("c_itemName",c);this.addToSignals("c_itemCategory",d);this.addToSignals("c_itemPrice",e);this.addToSignals("c_itemQuantity",g)},_addTrans:function(a,b,c,d,e,g,h,k){this.addToSignals("c_transOrderId",a);this.addToSignals("c_transAffiliation",b);this.addToSignals("c_transTotal",c);this.addToSignals("c_transTax",d);this.addToSignals("c_transShipping",e);this.addToSignals("c_transCity",g);this.addToSignals("c_transState",
h);this.addToSignals("c_transCountry",k)},_trackSocial:function(a,b,c,d){this.addToSignals("c_socialNetwork",a);this.addToSignals("c_socialAction",b);this.addToSignals("c_socialTarget",c);this.addToSignals("c_socialPagePath",d)}},d=this.tv,b,g,e,h,k,q;b=0;for(g=d.length;b<g;b++)if(e=d[b],a.hasOwnProperty(e)&&c.hasOwnProperty(e)&&(q=a[e],q instanceof Array))for(h=0,k=q.length;h<k;h++)c[e].apply(this,q[h])},submit:function(){try{if(""!==this.errorMessage)return this.errorMessage;this.constructSignals();
return this.hasSignals?(this.dil.api.signals(this.signals).submit(),"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)+this.dil.log):"No signals present"}catch(a){return this.handle(a,"DIL.modules.GA.submit() caught error with message ",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:DIL.modules.helpers.handleModuleError,callback:null,v:function(){return!1},init:function(a,c,d){try{this.callback=this.dil=null,this.errorMessage=
"",a instanceof DIL?(this.dil=a,this.v=this.dil.validators.isPopulatedString,this.cookieName=this.v(c)?c:"aam_ga",this.delimiter=this.v(d)?d:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(b){this.handle(b,"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(a){var c,d,b,g,e,h;h=!1;var k=1;if(a===Object(a)&&(c=a.stuff)&&c instanceof Array&&(d=c.length))for(a=0;a<d;a++)if((b=
c[a])&&b===Object(b)&&(g=b.cn,e=b.cv,g===this.cookieName&&this.v(e))){h=!0;break}if(h){c=e.split(this.delimiter);"undefined"===typeof window._gaq&&(window._gaq=[]);b=window._gaq;a=0;for(d=c.length;a<d&&!(h=c[a].split("="),e=h[0],h=h[1],this.v(e)&&this.v(h)&&b.push(["_setCustomVar",k++,e,h,1]),k>this.LIMIT);a++);this.errorMessage=1<k?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"===typeof this.callback)return this.callback()},
submit:function(){try{var a=this;if(""!==this.errorMessage)return this.errorMessage;this.dil.api.afterResult(function(c){a.process(c)}).submit();return"DIL.modules.GA.Stuffer.submit() successful"}catch(c){return this.handle(c,"DIL.modules.GA.Stuffer.submit() caught error with message ",this.dil)}}}};
DIL.modules.Peer39={aid:"",dil:null,optionals:null,errorMessage:"",calledBack:!1,script:null,scriptsSent:[],returnedData:[],handle:DIL.modules.helpers.handleModuleError,init:function(a,c,d){try{this.dil=null;this.errorMessage="";this.calledBack=!1;this.optionals=d===Object(d)?d:{};d={name:"DIL Peer39 Module Error"};var b=[],g="";this.isSecurePageButNotEnabled(document.location.protocol)&&(g="Module has not been enabled for a secure page",b.push(g),d.message=g,DIL.errorModule.handleError(d));c instanceof
DIL?(this.dil=c,d.partner=this.dil.api.getPartner()):(g="dilInstance is not a valid instance of DIL",b.push(g),d.message=g,DIL.errorModule.handleError(d));"string"===typeof a&&a.length?this.aid=a:(g="aid is not a string or is empty",b.push(g),d.message=g,DIL.errorModule.handleError(d));this.errorMessage=b.join("\n")}catch(e){this.handle(e,"DIL.modules.Peer39.init() caught error with message ",this.dil)}finally{return this}},isSecurePageButNotEnabled:function(a){return"https:"===a&&!0!==this.optionals.enableHTTPS?
!0:!1},constructSignals:function(){var a=this,c=this.constructScript(),d=DIL.variables.scriptNodeList[0];window["afterFinished_"+this.aid]=function(){try{var b=a.processData(p39_KVP_Short("c_p","|").split("|"));b.hasSignals&&a.dil.api.signals(b.signals).submit()}catch(c){}finally{a.calledBack=!0,"function"===typeof a.optionals.afterResult&&a.optionals.afterResult()}};d.parentNode.insertBefore(c,d);this.scriptsSent.push(c);return"Request sent to Peer39"},processData:function(a){var c,d,b,g,e={},h=
!1;this.returnedData.push(a);if(a instanceof Array)for(c=0,d=a.length;c<d;c++)b=a[c].split("="),g=b[0],b=b[1],g&&isFinite(b)&&!isNaN(parseInt(b,10))&&(e[g]instanceof Array||(e[g]=[]),e[g].push(b),h=!0);return{hasSignals:h,signals:e}},constructScript:function(){var a=document.createElement("script"),c=this.optionals,d=c.scriptId,b=c.scriptSrc,c=c.scriptParams;a.id="string"===typeof d&&d.length?d:"peer39ScriptLoader";a.type="text/javascript";"string"===typeof b&&b.length?a.src=b:(a.src=(this.dil.constants.IS_HTTPS?
"https:":"http:")+"//stags.peer39.net/"+this.aid+"/trg_"+this.aid+".js","string"===typeof c&&c.length&&(a.src+="?"+c));return a},submit:function(){try{return""!==this.errorMessage?this.errorMessage:this.constructSignals()}catch(a){return this.handle(a,"DIL.modules.Peer39.submit() caught error with message ",this.dil)}}};

var samsungDilPartner;
switch (getOmniSiteCd()) {
	case "uk":
		samsungDilPartner = "samsung";
		break;
	case "ae":
	case "ae_ar":
		samsungDilPartner = "samsung-mena";
		break;
	case "fr":
		samsungDilPartner = "samsung-france";
		break;
	case "de":
		samsungDilPartner = "samsung-germany";
		break;
	case "it":
		samsungDilPartner = "samsung-italy";
		break;
	case "au":
		samsungDilPartner = "samsungau";
		break;
	case "se":
	case "fi":
	case "no":
	case "dk":
		samsungDilPartner = "samsung-nordics";
		break;
	case "pl": 
    samsungDilPartner = "samsung-poland";
		break;	
	case "nl":      
	case "be":
	case "be_fr": 
	  samsungDilPartner = "samsung-benelux";       
    break;  
	default:
		samsungDilPartner = "";
		break;
}

//console.log("DIL partner initialised to: " + samsungDilPartner);

//Create dil_Local_Account variable to be used for setting the AAM Partner//
var samsungDil = DIL.create({
    partner: samsungDilPartner,
    uuidCookie:{
     name:'aam_uuid',
     days:30
     }
});

//Data Collection Plugins

//get the listed search engine name
if (samsungDil && samsungDil.api)
{
    var se = DIL.tools.getSearchReferrer();
    if (se && se.valid) {
        samsungDil.api.signals({
        c_se : se.name,
        c_st : se.keywords
        });
    }

	var uriData = DIL.tools.decomposeURI(document.URL);
	delete uriData.search;
	delete uriData.href;
	if(! objIsEmpty(uriData.uriParams)){ 
	    samsungDil.api.signals(uriData.uriParams, 'c_');
	};
	delete uriData.uriParams;
	samsungDil.api.signals(uriData, 'c_');
}

//URL data collection
function objIsEmpty(obj) { 
    for(var prop in obj) { 
        if(obj.hasOwnProperty(prop) && prop !== "") 
        {return false;} 
    } 
    return true; 
}

//Site Catalyst Plugin  
    var _scDilObj = s_gi(s_account);
DIL.modules.siteCatalyst.init(_scDilObj, samsungDil, {
    names : ['pageName', 'channel', 'campaign', 'products', 'events', 'pe', 'referrer', 'server', 'purchaseID', 'zip', 'state'],
    iteratedNames : [{
            name : 'eVar',
            maxIndex : 75
        }, {
            name : 'prop',
            maxIndex : 75
        }, {
            name : 'pev',
            maxIndex : 3
        }, {
            name : 'hier',
            maxIndex : 4
        }
    ]
});