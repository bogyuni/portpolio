;(function($){
	/**
 * Copyright 2014 Google Inc. All rights reserved.
 *
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 *
 * @fileoverview Description of this file.
 *
 * A polyfill for HTML Canvas features, including
 * Path2D support.
 */
!function(t,r){void 0==t&&(t=r("canvas").Context2d),void 0==t.prototype.ellipse&&(t.prototype.ellipse=function(t,r,n,e,o,i,a,s){this.save(),this.translate(t,r),this.rotate(o),this.scale(n,e),this.arc(0,0,1,i,a,s),this.restore()}),"function"==typeof Path2D&&"function"==typeof(new Path2D).addPath||function(){function r(t){if(this.ops_=[],void 0!=t)if("string"==typeof t)try{this.ops_=parser.parse(t)}catch(t){}else{if(!t.hasOwnProperty("ops_"))throw"Error: "+typeof t+"is not a valid argument to Path";this.ops_=t.ops_.slice(0)}}parser=function(){function t(t,r,n,e,o,i){this.message=t,this.expected=r,this.found=n,this.offset=e,this.line=o,this.column=i,this.name="SyntaxError"}function r(r){function n(t){return Pr!==t&&(Pr>t&&(Pr=0,xr={line:1,column:1,seenCR:!1}),function(t,n,e){var o,i;for(o=n;o<e;o++)i=r.charAt(o),"\n"===i?(t.seenCR||t.line++,t.column=1,t.seenCR=!1):"\r"===i||"\u2028"===i||"\u2029"===i?(t.line++,t.column=1,t.seenCR=!0):(t.column++,t.seenCR=!1)}(xr,Pr,t),Pr=t),xr}function e(t){Cr<mr||(Cr>mr&&(mr=Cr,Tr=[]),Tr.push(t))}function o(e,o,i){var a=n(i),s=i<r.length?r.charAt(i):null;return null!==o&&function(t){var r=1;for(t.sort(function(t,r){return t.description<r.description?-1:t.description>r.description?1:0});r<t.length;)t[r-1]===t[r]?t.splice(r,1):r++}(o),new t(null!==e?e:function(t,r){var n,e,o,i=new Array(t.length);for(o=0;o<t.length;o++)i[o]=t[o].description;return n=t.length>1?i.slice(0,-1).join(", ")+" or "+i[t.length-1]:i[0],e=r?'"'+function(t){function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(t){return"\\x0"+r(t)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(t){return"\\x"+r(t)}).replace(/[\u0180-\u0FFF]/g,function(t){return"\\u0"+r(t)}).replace(/[\u1080-\uFFFF]/g,function(t){return"\\u"+r(t)})}(r)+'"':"end of input","Expected "+n+" but "+e+" found."}(o,s),o,s,i,a.line,a.column)}function i(){var t,r,n,e,o;for(t=Cr,r=[],n=B();n!==ht;)r.push(n),n=B();if(r!==ht)if(n=a(),n===ht&&(n=dt),n!==ht){for(e=[],o=B();o!==ht;)e.push(o),o=B();e!==ht?(Mr=t,r=_t(n),t=r):(Cr=t,t=gt)}else Cr=t,t=gt;else Cr=t,t=gt;return t}function a(){var t,r,n,e,o;if(t=Cr,(r=s())!==ht){for(n=Cr,e=[],o=B();o!==ht;)e.push(o),o=B();e!==ht?(o=a(),o!==ht?(e=[e,o],n=e):(Cr=n,n=gt)):(Cr=n,n=gt),n===ht&&(n=dt),n!==ht?(r=[r,n],t=r):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function s(){var t,r,n,e,o;if(t=Cr,(r=p())!==ht){for(n=Cr,e=[],o=B();o!==ht;)e.push(o),o=B();e!==ht?(o=u(),o!==ht?(e=[e,o],n=e):(Cr=n,n=gt)):(Cr=n,n=gt),n===ht&&(n=dt),n!==ht?(r=[r,n],t=r):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function u(){var t,r,n,e,o;if(t=Cr,(r=c())!==ht){for(n=Cr,e=[],o=B();o!==ht;)e.push(o),o=B();e!==ht?(o=u(),o!==ht?(e=[e,o],n=e):(Cr=n,n=gt)):(Cr=n,n=gt),n===ht&&(n=dt),n!==ht?(r=[r,n],t=r):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function c(){var t;return t=f(),t===ht&&(t=h())===ht&&(t=y())===ht&&(t=d())===ht&&(t=_())===ht&&(t=M())===ht&&(t=m())===ht&&(t=w())===ht&&(t=q()),t}function p(){var t,n,o,i;if(t=Cr,At.test(r.charAt(Cr))?(n=r.charAt(Cr),Cr++):(n=ht,0===br&&e(Ct)),n!==ht){for(o=[],i=B();i!==ht;)o.push(i),i=B();o!==ht?(i=l(),i!==ht?(Mr=t,n=Mt(n,i),t=n):(Cr=t,t=gt)):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function l(){var t,r,n,e,o;return t=Cr,r=E(),r!==ht?(n=Cr,e=j(),e===ht&&(e=dt),e!==ht?(o=v(),o!==ht?(e=[e,o],n=e):(Cr=n,n=gt)):(Cr=n,n=gt),n===ht&&(n=dt),n!==ht?(Mr=t,r=Pt(r,n),t=r):(Cr=t,t=gt)):(Cr=t,t=gt),t}function f(){var t,n;return t=Cr,xt.test(r.charAt(Cr))?(n=r.charAt(Cr),Cr++):(n=ht,0===br&&e(mt)),n!==ht&&(Mr=t,n=Tt()),t=n}function h(){var t,n,o,i;if(t=Cr,bt.test(r.charAt(Cr))?(n=r.charAt(Cr),Cr++):(n=ht,0===br&&e(wt)),n!==ht){for(o=[],i=B();i!==ht;)o.push(i),i=B();o!==ht?(i=v(),i!==ht?(Mr=t,n=Ft(n,i),t=n):(Cr=t,t=gt)):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function v(){var t,r,n,e,o;return t=Cr,r=E(),r!==ht?(n=Cr,e=j(),e===ht&&(e=dt),e!==ht?(o=v(),o!==ht?(e=[e,o],n=e):(Cr=n,n=gt)):(Cr=n,n=gt),n===ht&&(n=dt),n!==ht?(Mr=t,r=Pt(r,n),t=r):(Cr=t,t=gt)):(Cr=t,t=gt),t}function y(){var t,n,o,i;if(t=Cr,qt.test(r.charAt(Cr))?(n=r.charAt(Cr),Cr++):(n=ht,0===br&&e(Rt)),n!==ht){for(o=[],i=B();i!==ht;)o.push(i),i=B();o!==ht?(i=g(),i!==ht?(Mr=t,n=kt(n,i),t=n):(Cr=t,t=gt)):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function g(){var t,r,n,e,o;return t=Cr,r=S(),r!==ht?(n=Cr,e=j(),e===ht&&(e=dt),e!==ht?(o=g(),o!==ht?(e=[e,o],n=e):(Cr=n,n=gt)):(Cr=n,n=gt),n===ht&&(n=dt),n!==ht?(Mr=t,r=Pt(r,n),t=r):(Cr=t,t=gt)):(Cr=t,t=gt),t}function d(){var t,n,o,i;if(t=Cr,Et.test(r.charAt(Cr))?(n=r.charAt(Cr),Cr++):(n=ht,0===br&&e(St)),n!==ht){for(o=[],i=B();i!==ht;)o.push(i),i=B();o!==ht?(i=g(),i!==ht?(Mr=t,n=It(n,i),t=n):(Cr=t,t=gt)):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function _(){var t,n,o,i;if(t=Cr,zt.test(r.charAt(Cr))?(n=r.charAt(Cr),Cr++):(n=ht,0===br&&e(Dt)),n!==ht){for(o=[],i=B();i!==ht;)o.push(i),i=B();o!==ht?(i=A(),i!==ht?(Mr=t,n=jt(n,i),t=n):(Cr=t,t=gt)):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function A(){var t,r,n,e,o;return t=Cr,r=C(),r!==ht?(n=Cr,e=j(),e===ht&&(e=dt),e!==ht?(o=A(),o!==ht?(e=[e,o],n=e):(Cr=n,n=gt)):(Cr=n,n=gt),n===ht&&(n=dt),n!==ht?(Mr=t,r=Pt(r,n),t=r):(Cr=t,t=gt)):(Cr=t,t=gt),t}function C(){var t,r,n,e,o,i;return t=Cr,r=E(),r!==ht?(n=j(),n===ht&&(n=dt),n!==ht?(e=E(),e!==ht?(o=j(),o===ht&&(o=dt),o!==ht?(i=E(),i!==ht?(Mr=t,r=Ht(r,e,i),t=r):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt),t}function M(){var t,n,o,i;if(t=Cr,Qt.test(r.charAt(Cr))?(n=r.charAt(Cr),Cr++):(n=ht,0===br&&e(Vt)),n!==ht){for(o=[],i=B();i!==ht;)o.push(i),i=B();o!==ht?(i=P(),i!==ht?(Mr=t,n=Lt(n,i),t=n):(Cr=t,t=gt)):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function P(){var t,r,n,e,o;return t=Cr,r=x(),r!==ht?(n=Cr,e=j(),e===ht&&(e=dt),e!==ht?(o=P(),o!==ht?(e=[e,o],n=e):(Cr=n,n=gt)):(Cr=n,n=gt),n===ht&&(n=dt),n!==ht?(Mr=t,r=Pt(r,n),t=r):(Cr=t,t=gt)):(Cr=t,t=gt),t}function x(){var t,r,n,e;return t=Cr,r=E(),r!==ht?(n=j(),n===ht&&(n=dt),n!==ht?(e=E(),e!==ht?(Mr=t,r=Ot(r,e),t=r):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt),t}function m(){var t,n,o,i;if(t=Cr,Zt.test(r.charAt(Cr))?(n=r.charAt(Cr),Cr++):(n=ht,0===br&&e(Bt)),n!==ht){for(o=[],i=B();i!==ht;)o.push(i),i=B();o!==ht?(i=T(),i!==ht?(Mr=t,n=Ut(n,i),t=n):(Cr=t,t=gt)):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function T(){var t,r,n,e,o;return t=Cr,r=b(),r!==ht?(n=Cr,e=j(),e===ht&&(e=dt),e!==ht?(o=T(),o!==ht?(e=[e,o],n=e):(Cr=n,n=gt)):(Cr=n,n=gt),n===ht&&(n=dt),n!==ht?(Mr=t,r=Pt(r,n),t=r):(Cr=t,t=gt)):(Cr=t,t=gt),t}function b(){var t,r,n,e;return t=Cr,r=E(),r!==ht?(n=j(),n===ht&&(n=dt),n!==ht?(e=E(),e!==ht?(Mr=t,r=Ot(r,e),t=r):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt),t}function w(){var t,n,o,i;if(t=Cr,Gt.test(r.charAt(Cr))?(n=r.charAt(Cr),Cr++):(n=ht,0===br&&e(Jt)),n!==ht){for(o=[],i=B();i!==ht;)o.push(i),i=B();o!==ht?(i=F(),i!==ht?(Mr=t,n=Kt(n,i),t=n):(Cr=t,t=gt)):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function F(){var t,r,n,e,o;return t=Cr,r=E(),r!==ht?(n=Cr,e=j(),e===ht&&(e=dt),e!==ht?(o=F(),o!==ht?(e=[e,o],n=e):(Cr=n,n=gt)):(Cr=n,n=gt),n===ht&&(n=dt),n!==ht?(Mr=t,r=Pt(r,n),t=r):(Cr=t,t=gt)):(Cr=t,t=gt),t}function q(){var t,n,o,i;if(t=Cr,Nt.test(r.charAt(Cr))?(n=r.charAt(Cr),Cr++):(n=ht,0===br&&e(Wt)),n!==ht){for(o=[],i=B();i!==ht;)o.push(i),i=B();o!==ht?(i=R(),i!==ht?(Mr=t,n=Xt(n,i),t=n):(Cr=t,t=gt)):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function R(){var t,r,n,e,o;return t=Cr,r=k(),r!==ht?(n=Cr,e=j(),e===ht&&(e=dt),e!==ht?(o=R(),o!==ht?(e=[e,o],n=e):(Cr=n,n=gt)):(Cr=n,n=gt),n===ht&&(n=dt),n!==ht?(Mr=t,r=Pt(r,n),t=r):(Cr=t,t=gt)):(Cr=t,t=gt),t}function k(){var t,r,n,e,o,i,a,s,u,c,p,l;return t=Cr,r=I(),r!==ht?(n=j(),n===ht&&(n=dt),n!==ht?(e=I(),e!==ht?(o=j(),o===ht&&(o=dt),o!==ht?(i=z(),i!==ht?(a=j(),a!==ht?(s=D(),s!==ht?(u=j(),u===ht&&(u=dt),u!==ht?(c=D(),c!==ht?(p=j(),p===ht&&(p=dt),p!==ht?(l=E(),l!==ht?(Mr=t,r=Yt(r,e,i,s,c,l),t=r):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt),t}function E(){var t,r,n,e;return t=Cr,r=S(),r!==ht?(n=j(),n===ht&&(n=dt),n!==ht?(e=S(),e!==ht?(Mr=t,r=$t(r,e),t=r):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt),t}function S(){var t,r;return t=Cr,r=z(),r!==ht&&(Mr=t,r=tr(r)),t=r}function I(){var t;return t=Q(),t===ht&&(t=Z()),t}function z(){var t,r,n;return t=Cr,r=O(),r===ht&&(r=dt),r!==ht?(n=Q(),n!==ht?(r=[r,n],t=r):(Cr=t,t=gt)):(Cr=t,t=gt),t===ht&&(t=Cr,r=O(),r===ht&&(r=dt),r!==ht?(n=Z(),n!==ht?(r=[r,n],t=r):(Cr=t,t=gt)):(Cr=t,t=gt)),t}function D(){var t;return 48===r.charCodeAt(Cr)?(t=rr,Cr++):(t=ht,0===br&&e(nr)),t===ht&&(49===r.charCodeAt(Cr)?(t=er,Cr++):(t=ht,0===br&&e(or))),t}function j(){var t,r,n,e,o;if(t=Cr,r=[],(n=B())!==ht)for(;n!==ht;)r.push(n),n=B();else r=gt;if(r!==ht)if(n=H(),n===ht&&(n=dt),n!==ht){for(e=[],o=B();o!==ht;)e.push(o),o=B();e!==ht?(r=[r,n,e],t=r):(Cr=t,t=gt)}else Cr=t,t=gt;else Cr=t,t=gt;if(t===ht)if(t=Cr,(r=H())!==ht){for(n=[],e=B();e!==ht;)n.push(e),e=B();n!==ht?(r=[r,n],t=r):(Cr=t,t=gt)}else Cr=t,t=gt;return t}function H(){var t;return 44===r.charCodeAt(Cr)?(t=ir,Cr++):(t=ht,0===br&&e(ar)),t}function Q(){var t,r,n;return t=Cr,r=V(),r!==ht?(n=L(),n===ht&&(n=dt),n!==ht?(r=[r,n],t=r):(Cr=t,t=gt)):(Cr=t,t=gt),t===ht&&(t=Cr,r=Z(),r!==ht?(n=L(),n!==ht?(r=[r,n],t=r):(Cr=t,t=gt)):(Cr=t,t=gt)),t}function V(){var t,n,o,i;return t=Cr,n=Z(),n===ht&&(n=dt),n!==ht?(46===r.charCodeAt(Cr)?(o=sr,Cr++):(o=ht,0===br&&e(ur)),o!==ht?(i=Z(),i!==ht?(n=[n,o,i],t=n):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt),t===ht&&(t=Cr,n=Z(),n!==ht?(46===r.charCodeAt(Cr)?(o=sr,Cr++):(o=ht,0===br&&e(ur)),o!==ht?(n=[n,o],t=n):(Cr=t,t=gt)):(Cr=t,t=gt)),t}function L(){var t,n,o,i;return t=Cr,cr.test(r.charAt(Cr))?(n=r.charAt(Cr),Cr++):(n=ht,0===br&&e(pr)),n!==ht?(o=O(),o===ht&&(o=dt),o!==ht?(i=Z(),i!==ht?(n=[n,o,i],t=n):(Cr=t,t=gt)):(Cr=t,t=gt)):(Cr=t,t=gt),t}function O(){var t;return 43===r.charCodeAt(Cr)?(t=lr,Cr++):(t=ht,0===br&&e(fr)),t===ht&&(45===r.charCodeAt(Cr)?(t=hr,Cr++):(t=ht,0===br&&e(vr))),t}function Z(){var t,n,o;if(t=Cr,n=[],yr.test(r.charAt(Cr))?(o=r.charAt(Cr),Cr++):(o=ht,0===br&&e(gr)),o!==ht)for(;o!==ht;)n.push(o),yr.test(r.charAt(Cr))?(o=r.charAt(Cr),Cr++):(o=ht,0===br&&e(gr));else n=gt;return n!==ht&&(Mr=t,n=dr(n)),t=n}function B(){var t;return _r.test(r.charAt(Cr))?(t=r.charAt(Cr),Cr++):(t=ht,0===br&&e(Ar)),t}function U(t){for(var r=[],n=0;n<t.length;n++)t[n]instanceof Array?r.push.apply(r,U(t[n])):r.push(t[n]);return r}function G(t,r){return"mlazhvcsqt".indexOf(t)===-1?wr=r:(wr[0]+=r[0],wr[1]+=r[1]),kr=t,wr.slice(0)}function J(t,r){for(var n=[],e=wr.slice(0),o=0;o<r.length;o+=2){wr=e.slice(0);var i=G(t,r.slice(o,o+2));n=n.concat(i),o==r.length-4&&(Fr=i.slice(0))}return n}function K(){"CcSsQqTt".indexOf(kr)==-1&&(Fr=wr.slice(0));var t=[0,0];return t[0]=2*wr[0]-Fr[0],t[1]=2*wr[1]-Fr[1],t}function N(t,r){var n=[r,0];return"H"==t&&(n[1]=wr[1]),G(t,n)}function W(t,r){var n=[0,r];return"V"==t&&(n[0]=wr[0]),G(t,n)}function X(t,r){var n=[t];if(r&&r.length>1)for(var e=r[1],o=0;o<e.length;o++)n.push(e[o]);return n}function Y(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2))}function $(t,r){return t[0]*r[0]+t[1]*r[1]}function tt(t,r){return $(t,r)/(Y(t)*Y(r))}function rt(t,r,n){return Math.min(Math.max(val,r),n)}function nt(t,r){var n=1;return t[0]*r[1]-t[1]*r[0]<0&&(n=-1),n*Math.acos(rt(tt(t,r)),-1,1)}function et(t,r){var n=Math.cos(r),e=Math.sin(r);return[n*t[0]+e*t[1],-1*e*t[0]+n*t[1]]}function ot(t,r){var n=Math.cos(r),e=Math.sin(r);return[n*t[0]-e*t[1],e*t[0]+n*t[1]]}function it(t,r){return[(t[0]-r[0])/2,(t[1]-r[1])/2]}function at(t,r){return[(t[0]+r[0])/2,(t[1]+r[1])/2]}function st(t,r){return[t[0]*r[0],t[1]*r[1]]}function ut(t,r){return[t*r[0],t*r[1]]}function ct(t,r){return[t[0]+r[0],t[1]+r[1]]}function pt(t,r,n,e,o,i,a){if(0==r||0==n)return void qr.push({type:"lineTo",args:a});var e=e*(Math.PI/180);r=Math.abs(r),n=Math.abs(n);var s=et(it(t,a),e),u=st(s,s),c=Math.pow(r,2),p=Math.pow(n,2),l=Math.sqrt(u[0]/c+u[1]/p);l>1&&(r*=l,n*=l,c=Math.pow(r,2),p=Math.pow(n,2));var f=Math.sqrt(Math.abs(c*p-c*u[1]-p*u[0])/(c*u[1]+p*u[0]));o==i&&(f*=-1);var h=ut(f,[r*s[1]/n,-n*s[0]/r]),v=ct(ot(h,e),at(t,a)),y=[(s[0]-h[0])/r,(s[1]-h[1])/n],g=[(-1*s[0]-h[0])/r,(-1*s[1]-h[1])/n],d=nt([1,0],y),_=nt(y,g),A=d,C=d+_;qr.push({type:"save",args:[]},{type:"translate",args:[v[0],v[1]]},{type:"rotate",args:[e]},{type:"scale",args:[r,n]},{type:"arc",args:[0,0,1,A,C,1-i]},{type:"restore",args:[]})}var lt,ft=arguments.length>1?arguments[1]:{},ht={},vt={svg_path:i},yt=i,gt=ht,dt=null,_t=function(t){return qr},At=/^[Mm]/,Ct={type:"class",value:"[Mm]",description:"[Mm]"},Mt=function(t,r){var n=t;Rr&&(n="M",Rr=!1),qr.push({type:"moveTo",args:G(n,r[0])});for(var e=1;e<r.length;e++)qr.push({type:"lineTo",args:G(t,r[e])})},Pt=function(t,r){return X(t,r)},xt=/^[Zz]/,mt={type:"class",value:"[Zz]",description:"[Zz]"},Tt=function(){qr.push({type:"closePath",args:[]})},bt=/^[Ll]/,wt={type:"class",value:"[Ll]",description:"[Ll]"},Ft=function(t,r){for(var n=0;n<r.length;n++)qr.push({type:"lineTo",args:G(t,r[n])})},qt=/^[Hh]/,Rt={type:"class",value:"[Hh]",description:"[Hh]"},kt=function(t,r){for(var n=0;n<r.length;n++)qr.push({type:"lineTo",args:N(t,r[n])})},Et=/^[Vv]/,St={type:"class",value:"[Vv]",description:"[Vv]"},It=function(t,r){for(var n=0;n<r.length;n++)qr.push({type:"lineTo",args:W(t,r[n])})},zt=/^[Cc]/,Dt={type:"class",value:"[Cc]",description:"[Cc]"},jt=function(t,r){for(var n=0;n<r.length;n++)qr.push({type:"bezierCurveTo",args:J(t,r[n])})},Ht=function(t,r,n){return t.concat(r,n)},Qt=/^[Ss]/,Vt={type:"class",value:"[Ss]",description:"[Ss]"},Lt=function(t,r){for(var n=0;n<r.length;n++)qr.push({type:"bezierCurveTo",args:K().concat(J(t,r[n]))})},Ot=function(t,r){return t.concat(r)},Zt=/^[Qq]/,Bt={type:"class",value:"[Qq]",description:"[Qq]"},Ut=function(t,r){for(var n=0;n<r.length;n++)qr.push({type:"quadraticCurveTo",args:J(t,r[n])})},Gt=/^[Tt]/,Jt={type:"class",value:"[Tt]",description:"[Tt]"},Kt=function(t,r){for(var n=0;n<r.length;n++){var e=K();qr.push({type:"quadraticCurveTo",args:e.concat(J(t,r[n]))}),Fr=e.slice(0)}},Nt=/^[Aa]/,Wt={type:"class",value:"[Aa]",description:"[Aa]"},Xt=function(t,r){for(var n=0;n<r.length;n++){var e=[wr.slice()],o=[G(t,r[n].slice(-2))];absArgs=e.concat(r[n].slice(0,-2),o),pt.apply(this,absArgs)}},Yt=function(t,r,n,e,o,i){return[parseFloat(t),parseFloat(r),parseFloat(U(n).join("")),parseInt(e),parseInt(o),i[0],i[1]]},$t=function(t,r){return[t,r]},tr=function(t){return parseFloat(U(t).join(""))},rr="0",nr={type:"literal",value:"0",description:'"0"'},er="1",or={type:"literal",value:"1",description:'"1"'},ir=",",ar={type:"literal",value:",",description:'","'},sr=".",ur={type:"literal",value:".",description:'"."'},cr=/^[eE]/,pr={type:"class",value:"[eE]",description:"[eE]"},lr="+",fr={type:"literal",value:"+",description:'"+"'},hr="-",vr={type:"literal",value:"-",description:'"-"'},yr=/^[0-9]/,gr={type:"class",value:"[0-9]",description:"[0-9]"},dr=function(t){return t.join("")},_r=/^[ \t\n\r]/,Ar={type:"class",value:"[ \\t\\n\\r]",description:"[ \\t\\n\\r]"},Cr=0,Mr=0,Pr=0,xr={line:1,column:1,seenCR:!1},mr=0,Tr=[],br=0;if("startRule"in ft){if(!(ft.startRule in vt))throw new Error("Can't start parsing from rule \""+ft.startRule+'".');yt=vt[ft.startRule]}var wr=[0,0],Fr=[0,0],qr=[],Rr=!0,kr="";if((lt=yt())!==ht&&Cr===r.length)return lt;throw lt!==ht&&Cr<r.length&&e({type:"end",description:"end of input"}),o(null,Tr,mr)}return function(t,r){function n(){this.constructor=t}n.prototype=r.prototype,t.prototype=new n}(t,Error),{SyntaxError:t,parse:r}}();for(var n=["closePath","moveTo","lineTo","quadraticCurveTo","bezierCurveTo","rect","arc","arcTo","ellipse","isPointInPath","isPointInStroke"],e=0;e<n.length;e++){var o=n[e];r.prototype[o]=function(t){return function(){this.ops_.push({type:t,args:Array.prototype.slice.call(arguments,0)})}}(o)}r.prototype.addPath=function(t,r){var n=!1;r&&void 0!=r.a&&void 0!=r.b&&void 0!=r.c&&void 0!=r.d&&void 0!=r.e&&void 0!=r.f&&(n=!0,this.ops_.push({type:"save",args:[]}),this.ops_.push({type:"transform",args:[r.a,r.b,r.c,r.d,r.e,r.f]})),this.ops_=this.ops_.concat(t.ops_),n&&this.ops_.push({type:"restore",args:[]})},original_fill=t.prototype.fill,original_stroke=t.prototype.stroke,original_clip=t.prototype.clip,original_is_point_in_path=t.prototype.isPointInPath,original_is_point_in_stroke=t.prototype.isPointInStroke,t.prototype.fill=function(n){if(n instanceof r){this.beginPath();for(var e=0,o=n.ops_.length;e<o;e++){var i=n.ops_[e];t.prototype[i.type].apply(this,i.args)}original_fill.apply(this,Array.prototype.slice.call(arguments,1))}else original_fill.apply(this,arguments)},t.prototype.stroke=function(n){if(n instanceof r){this.beginPath();for(var e=0,o=n.ops_.length;e<o;e++){var i=n.ops_[e];t.prototype[i.type].apply(this,i.args)}original_stroke.call(this)}else original_stroke.call(this)},t.prototype.clip=function(n){if(n instanceof r){this.beginPath();for(var e=0,o=n.ops_.length;e<o;e++){var i=n.ops_[e];t.prototype[i.type].apply(this,i.args)}original_clip.apply(this,Array.prototype.slice.call(arguments,1))}else original_clip.apply(this,arguments)},t.prototype.isPointInPath=function(n){if(n instanceof r){this.beginPath();for(var e=0,o=n.ops_.length;e<o;e++){var i=n.ops_[e];t.prototype[i.type].apply(this,i.args)}return original_is_point_in_path.apply(this,Array.prototype.slice.call(arguments,1))}return original_is_point_in_path.apply(this,arguments)},t.prototype.isPointInStroke=function(n){if(n instanceof r){this.beginPath();for(var e=0,o=n.ops_.length;e<o;e++){var i=n.ops_[e];t.prototype[i.type].apply(this,i.args)}return original_is_point_in_stroke.apply(this,Array.prototype.slice.call(arguments,1))}return original_is_point_in_stroke.apply(this,arguments)},Path2D=r}()}("undefined"==typeof CanvasRenderingContext2D?void 0:CanvasRenderingContext2D,"undefined"==typeof require?void 0:require);
// @info
// Polyfill for SVG getPathData() and setPathData() methods. Based on:
// - SVGPathSeg polyfill by Philip Rogers (MIT License)
// https://github.com/progers/pathseg
// - SVGPathNormalizer by Tadahisa Motooka (MIT License)
// https://github.com/motooka/SVGPathNormalizer/tree/master/src
// - arcToCubicCurves() by Dmitry Baranovskiy (MIT License)
// https://github.com/DmitryBaranovs…/…/v2.1.1/raphael.core.js…
// @author
// Jarosław Foksa
// @license
// MIT License
if($.browser.ie != 8) {
	SVGPathElement.prototype.getPathData&&SVGPathElement.prototype.setPathData||function(){var e={Z:"Z",M:"M",L:"L",C:"C",Q:"Q",A:"A",H:"H",V:"V",S:"S",T:"T",z:"Z",m:"m",l:"l",c:"c",q:"q",a:"a",h:"h",v:"v",s:"s",t:"t"},t=function(e){this._string=e,this._currentIndex=0,this._endIndex=this._string.length,this._prevCommand=null,this._skipOptionalSpaces()},s=window.navigator.userAgent.indexOf("MSIE ")!==-1;t.prototype={parseSegment:function(){var t=this._string[this._currentIndex],s=e[t]?e[t]:null;if(null===s){if(null===this._prevCommand)return null;if(null===(s=("+"===t||"-"===t||"."===t||t>="0"&&t<="9")&&"Z"!==this._prevCommand?"M"===this._prevCommand?"L":"m"===this._prevCommand?"l":this._prevCommand:null))return null}else this._currentIndex+=1;this._prevCommand=s;var a=null,r=s.toUpperCase();return"H"===r||"V"===r?a=[this._parseNumber()]:"M"===r||"L"===r||"T"===r?a=[this._parseNumber(),this._parseNumber()]:"S"===r||"Q"===r?a=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"C"===r?a=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"A"===r?a=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseArcFlag(),this._parseArcFlag(),this._parseNumber(),this._parseNumber()]:"Z"===r&&(this._skipOptionalSpaces(),a=[]),null===a||a.indexOf(null)>=0?null:{type:s,values:a}},hasMoreData:function(){return this._currentIndex<this._endIndex},peekSegmentType:function(){var t=this._string[this._currentIndex];return e[t]?e[t]:null},initialCommandIsMoveTo:function(){if(!this.hasMoreData())return!0;var e=this.peekSegmentType();return"M"===e||"m"===e},_isCurrentSpace:function(){var e=this._string[this._currentIndex];return e<=" "&&(" "===e||"\n"===e||"\t"===e||"\r"===e||"\f"===e)},_skipOptionalSpaces:function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex+=1;return this._currentIndex<this._endIndex},_skipOptionalSpacesOrDelimiter:function(){return!(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!==this._string[this._currentIndex])&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","===this._string[this._currentIndex]&&(this._currentIndex+=1,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},_parseNumber:function(){var e=0,t=0,s=1,a=0,r=1,n=1,u=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"===this._string[this._currentIndex]?this._currentIndex+=1:this._currentIndex<this._endIndex&&"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,r=-1),this._currentIndex===this._endIndex||(this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")&&"."!==this._string[this._currentIndex])return null;for(var i=this._currentIndex;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)this._currentIndex+=1;if(this._currentIndex!==i)for(var l=this._currentIndex-1,h=1;l>=i;)t+=h*(this._string[l]-"0"),l-=1,h*=10;if(this._currentIndex<this._endIndex&&"."===this._string[this._currentIndex]){if(this._currentIndex+=1,this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")return null;for(;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)s*=10,a+=(this._string.charAt(this._currentIndex)-"0")/s,this._currentIndex+=1}if(this._currentIndex!==u&&this._currentIndex+1<this._endIndex&&("e"===this._string[this._currentIndex]||"E"===this._string[this._currentIndex])&&"x"!==this._string[this._currentIndex+1]&&"m"!==this._string[this._currentIndex+1]){if(this._currentIndex+=1,"+"===this._string[this._currentIndex]?this._currentIndex+=1:"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,n=-1),this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")return null;for(;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)e*=10,e+=this._string[this._currentIndex]-"0",this._currentIndex+=1}var v=t+a;return v*=r,e&&(v*=Math.pow(10,n*e)),u===this._currentIndex?null:(this._skipOptionalSpacesOrDelimiter(),v)},_parseArcFlag:function(){if(this._currentIndex>=this._endIndex)return null;var e=null,t=this._string[this._currentIndex];if(this._currentIndex+=1,"0"===t)e=0;else{if("1"!==t)return null;e=1}return this._skipOptionalSpacesOrDelimiter(),e}};var a=function(e){if(!e||0===e.length)return[];var s=new t(e),a=[];if(s.initialCommandIsMoveTo())for(;s.hasMoreData();){var r=s.parseSegment();if(null===r)break;a.push(r)}return a},r=SVGPathElement.prototype.setAttribute,n=SVGPathElement.prototype.removeAttribute,u=window.Symbol?Symbol():"__cachedPathData",i=window.Symbol?Symbol():"__cachedNormalizedPathData",l=function(e,t,s,a,r,n,u,i,h,v){var p,_,c,o,d=function(e,t,s){return{x:e*Math.cos(s)-t*Math.sin(s),y:e*Math.sin(s)+t*Math.cos(s)}},y=function(e){return Math.PI*e/180}(u),f=[];if(v)p=v[0],_=v[1],c=v[2],o=v[3];else{var x=d(e,t,-y);e=x.x,t=x.y;var I=d(s,a,-y);s=I.x,a=I.y;var m=(e-s)/2,g=(t-a)/2,b=m*m/(r*r)+g*g/(n*n);b>1&&(b=Math.sqrt(b),r*=b,n*=b);var M;M=i===h?-1:1;var S=r*r,V=n*n,A=S*V-S*g*g-V*m*m,P=S*g*g+V*m*m,C=M*Math.sqrt(Math.abs(A/P));c=C*r*g/n+(e+s)/2,o=C*-n*m/r+(t+a)/2,p=Math.asin(parseFloat(((t-o)/n).toFixed(9))),_=Math.asin(parseFloat(((a-o)/n).toFixed(9))),e<c&&(p=Math.PI-p),s<c&&(_=Math.PI-_),p<0&&(p=2*Math.PI+p),_<0&&(_=2*Math.PI+_),h&&p>_&&(p-=2*Math.PI),!h&&_>p&&(_-=2*Math.PI)}var E=_-p;if(Math.abs(E)>120*Math.PI/180){var N=_,D=s,O=a;_=h&&_>p?p+120*Math.PI/180*1:p+120*Math.PI/180*-1,s=c+r*Math.cos(_),a=o+n*Math.sin(_),f=l(s,a,D,O,r,n,u,0,h,[_,N,c,o])}E=_-p;var L=Math.cos(p),G=Math.sin(p),k=Math.cos(_),T=Math.sin(_),Z=Math.tan(E/4),w=4/3*r*Z,H=4/3*n*Z,Q=[e,t],z=[e+w*G,t-H*L],F=[s+w*T,a-H*k],q=[s,a];if(z[0]=2*Q[0]-z[0],z[1]=2*Q[1]-z[1],v)return[z,F,q].concat(f);f=[z,F,q].concat(f).join().split(",");var j=[],R=[];return f.forEach(function(e,t){t%2?R.push(d(f[t-1],f[t],y).y):R.push(d(f[t],f[t+1],y).x),6===R.length&&(j.push(R),R=[])}),j},h=function(e){return e.map(function(e){return{type:e.type,values:Array.prototype.slice.call(e.values)}})},v=function(e){var t=[],s=null,a=null,r=null,n=null;return e.forEach(function(e){var u=e.type;if("M"===u){var i=e.values[0],l=e.values[1];t.push({type:"M",values:[i,l]}),r=i,n=l,s=i,a=l}else if("m"===u){var i=s+e.values[0],l=a+e.values[1];t.push({type:"M",values:[i,l]}),r=i,n=l,s=i,a=l}else if("L"===u){var i=e.values[0],l=e.values[1];t.push({type:"L",values:[i,l]}),s=i,a=l}else if("l"===u){var i=s+e.values[0],l=a+e.values[1];t.push({type:"L",values:[i,l]}),s=i,a=l}else if("C"===u){var h=e.values[0],v=e.values[1],p=e.values[2],_=e.values[3],i=e.values[4],l=e.values[5];t.push({type:"C",values:[h,v,p,_,i,l]}),s=i,a=l}else if("c"===u){var h=s+e.values[0],v=a+e.values[1],p=s+e.values[2],_=a+e.values[3],i=s+e.values[4],l=a+e.values[5];t.push({type:"C",values:[h,v,p,_,i,l]}),s=i,a=l}else if("Q"===u){var h=e.values[0],v=e.values[1],i=e.values[2],l=e.values[3];t.push({type:"Q",values:[h,v,i,l]}),s=i,a=l}else if("q"===u){var h=s+e.values[0],v=a+e.values[1],i=s+e.values[2],l=a+e.values[3];t.push({type:"Q",values:[h,v,i,l]}),s=i,a=l}else if("A"===u){var i=e.values[5],l=e.values[6];t.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],i,l]}),s=i,a=l}else if("a"===u){var i=s+e.values[5],l=a+e.values[6];t.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],i,l]}),s=i,a=l}else if("H"===u){var i=e.values[0];t.push({type:"H",values:[i]}),s=i}else if("h"===u){var i=s+e.values[0];t.push({type:"H",values:[i]}),s=i}else if("V"===u){var l=e.values[0];t.push({type:"V",values:[l]}),a=l}else if("v"===u){var l=a+e.values[0];t.push({type:"V",values:[l]}),a=l}else if("S"===u){var p=e.values[0],_=e.values[1],i=e.values[2],l=e.values[3];t.push({type:"S",values:[p,_,i,l]}),s=i,a=l}else if("s"===u){var p=s+e.values[0],_=a+e.values[1],i=s+e.values[2],l=a+e.values[3];t.push({type:"S",values:[p,_,i,l]}),s=i,a=l}else if("T"===u){var i=e.values[0],l=e.values[1];t.push({type:"T",values:[i,l]}),s=i,a=l}else if("t"===u){var i=s+e.values[0],l=a+e.values[1];t.push({type:"T",values:[i,l]}),s=i,a=l}else"Z"!==u&&"z"!==u||(t.push({type:"Z",values:[]}),s=r,a=n)}),t},p=function(e){var t=[],s=null,a=null,r=null,n=null,u=null,i=null,h=null;return e.forEach(function(e){if("M"===e.type){var v=e.values[0],p=e.values[1];t.push({type:"M",values:[v,p]}),i=v,h=p,n=v,u=p}else if("C"===e.type){var _=e.values[0],c=e.values[1],o=e.values[2],d=e.values[3],v=e.values[4],p=e.values[5];t.push({type:"C",values:[_,c,o,d,v,p]}),a=o,r=d,n=v,u=p}else if("L"===e.type){var v=e.values[0],p=e.values[1];t.push({type:"L",values:[v,p]}),n=v,u=p}else if("H"===e.type){var v=e.values[0];t.push({type:"L",values:[v,u]}),n=v}else if("V"===e.type){var p=e.values[0];t.push({type:"L",values:[n,p]}),u=p}else if("S"===e.type){var y,f,o=e.values[0],d=e.values[1],v=e.values[2],p=e.values[3];"C"===s||"S"===s?(y=n+(n-a),f=u+(u-r)):(y=n,f=u),t.push({type:"C",values:[y,f,o,d,v,p]}),a=o,r=d,n=v,u=p}else if("T"===e.type){var _,c,v=e.values[0],p=e.values[1];"Q"===s||"T"===s?(_=n+(n-a),c=u+(u-r)):(_=n,c=u);var y=n+2*(_-n)/3,f=u+2*(c-u)/3,x=v+2*(_-v)/3,I=p+2*(c-p)/3;t.push({type:"C",values:[y,f,x,I,v,p]}),a=_,r=c,n=v,u=p}else if("Q"===e.type){var _=e.values[0],c=e.values[1],v=e.values[2],p=e.values[3],y=n+2*(_-n)/3,f=u+2*(c-u)/3,x=v+2*(_-v)/3,I=p+2*(c-p)/3;t.push({type:"C",values:[y,f,x,I,v,p]}),a=_,r=c,n=v,u=p}else if("A"===e.type){var m=e.values[0],g=e.values[1],b=e.values[2],M=e.values[3],S=e.values[4],v=e.values[5],p=e.values[6];if(0===m||0===g)t.push({type:"C",values:[n,u,v,p,v,p]}),n=v,u=p;else if(n!==v||u!==p){var V=l(n,u,v,p,m,g,b,M,S);V.forEach(function(e){t.push({type:"C",values:e}),n=v,u=p})}}else"Z"===e.type&&(t.push(e),n=i,u=h);s=e.type}),t};SVGPathElement.prototype.setAttribute=function(e,t){"d"===e&&(this[u]=null,this[i]=null),r.call(this,e,t)},SVGPathElement.prototype.removeAttribute=function(e,t){"d"===e&&(this[u]=null,this[i]=null),n.call(this,e)},SVGPathElement.prototype.getPathData=function(e){if(e&&e.normalize){if(this[i])return h(this[i]);var t;this[u]?t=h(this[u]):(t=a(this.getAttribute("d")||""),this[u]=h(t));var s=p(v(t));return this[i]=h(s),s}if(this[u])return h(this[u]);var t=a(this.getAttribute("d")||"");return this[u]=h(t),t},SVGPathElement.prototype.setPathData=function(e){if(0===e.length)s?this.setAttribute("d",""):this.removeAttribute("d");else{for(var t="",a=0,r=e.length;a<r;a+=1){var n=e[a];a>0&&(t+=" "),t+=n.type,n.values&&n.values.length>0&&(t+=" "+n.values.join(" "))}this.setAttribute("d",t)}},SVGRectElement.prototype.getPathData=function(e){var t=this.x.baseVal.value,s=this.y.baseVal.value,a=this.width.baseVal.value,r=this.height.baseVal.value,n=this.hasAttribute("rx")?this.rx.baseVal.value:this.ry.baseVal.value,u=this.hasAttribute("ry")?this.ry.baseVal.value:this.rx.baseVal.value;n>a/2&&(n=a/2),u>r/2&&(u=r/2);var i=[{type:"M",values:[t+n,s]},{type:"H",values:[t+a-n]},{type:"A",values:[n,u,0,0,1,t+a,s+u]},{type:"V",values:[s+r-u]},{type:"A",values:[n,u,0,0,1,t+a-n,s+r]},{type:"H",values:[t+n]},{type:"A",values:[n,u,0,0,1,t,s+r-u]},{type:"V",values:[s+u]},{type:"A",values:[n,u,0,0,1,t+n,s]},{type:"Z",values:[]}];return i=i.filter(function(e){return"A"!==e.type||0!==e.values[0]&&0!==e.values[1]}),e&&e.normalize===!0&&(i=p(i)),i},SVGCircleElement.prototype.getPathData=function(e){var t=this.cx.baseVal.value,s=this.cy.baseVal.value,a=this.r.baseVal.value,r=[{type:"M",values:[t+a,s]},{type:"A",values:[a,a,0,0,1,t,s+a]},{type:"A",values:[a,a,0,0,1,t-a,s]},{type:"A",values:[a,a,0,0,1,t,s-a]},{type:"A",values:[a,a,0,0,1,t+a,s]},{type:"Z",values:[]}];return e&&e.normalize===!0&&(r=p(r)),r},SVGEllipseElement.prototype.getPathData=function(e){var t=this.cx.baseVal.value,s=this.cy.baseVal.value,a=this.rx.baseVal.value,r=this.ry.baseVal.value,n=[{type:"M",values:[t+a,s]},{type:"A",values:[a,r,0,0,1,t,s+r]},{type:"A",values:[a,r,0,0,1,t-a,s]},{type:"A",values:[a,r,0,0,1,t,s-r]},{type:"A",values:[a,r,0,0,1,t+a,s]},{type:"Z",values:[]}];return e&&e.normalize===!0&&(n=p(n)),n},SVGLineElement.prototype.getPathData=function(){return[{type:"M",values:[this.x1.baseVal.value,this.y1.baseVal.value]},{type:"L",values:[this.x2.baseVal.value,this.y2.baseVal.value]}]},SVGPolylineElement.prototype.getPathData=function(){for(var e=[],t=0;t<this.points.numberOfItems;t+=1){var s=this.points.getItem(t);e.push({type:0===t?"M":"L",values:[s.x,s.y]})}return e},SVGPolygonElement.prototype.getPathData=function(){for(var e=[],t=0;t<this.points.numberOfItems;t+=1){var s=this.points.getItem(t);e.push({type:0===t?"M":"L",values:[s.x,s.y]})}return e.push({type:"Z",values:[]}),e}}();
}
/*
 * PathDraw
 *
 * Copyright (c) 2017 damyo
 */
(function($) {
	$.isPathDraw = function(el) {
		return !!$(el).data('PathDraw');
	};
	$.thisOptions = function(el) {
		return $(el).data('PathDraw') ? $(el).data('PathDraw').options : null;
	};
	$.PathDraw = function(el, options, control) {
		var base = this;
		base.$el = $(el);
		base.el = el;
		base.origData;
		base.points;
		base.guide;
		base.origCount;
		base.closeCount;
		base.timer;
		base.pathLength;
		base.svg;
		base.pathes;
		base.canvas = [];
		base.ctx = [];
		base.ctxW;
		base.ctxH;
		base.lpX;
		base.lpY;
		base.followLine;
		base.finishFn = null;
		base.svgRatio = 1;
		base.resolutionScale = 1;
		base.bg = [];
		base.lastLoad = false;
		base.isStop = (control && Object.keys(control)[0] == "drawStop") ? true : false;
		base.initialized = false;
		base.$el.data('PathDraw', base);

		var elData = $(el).data('PathDraw');

		if (!elData.isStop) {
			elData.init = function() {
				elData.options = $.extend({}, $.PathDraw.defaultOptions, options);
				elData.svg = (elData.options.targetSvg) ? $(elData.options.targetSvg)[0] : $('svg', elData.$el).eq(0)[0];
				elData.pathes = $('path', elData.svg);
				if(elData.options.resolution == 2) {
					elData.resolutionScale = 0.5;
				}
				if(elData.options.multiCanvas) {
					var canvases = elData.options.multiCanvas.split(/\s?\,\s?/);
					for(var i = 0; i < canvases.length; i++) {
						elData.canvas.push($('canvas#' + canvases[i], elData.$el)[0]);
						elData.ctx.push(elData.canvas[i].getContext("2d"));
					}
				} else {
					elData.canvas.push($('canvas', elData.$el)[0]);
					elData.ctx.push(elData.canvas[0].getContext("2d"));
				}
				elData.initialized = true;
				$.drawReset(el);
				if(elData.options.background) {
					var bgSrcs = elData.options.background.split(/\s?\,\s?/);
					for(var i_a = 0; i_a < elData.canvas.length; i_a++) {
						var img = new Image();
						elData.bg.push(img);
						elData.bg[i_a].src = (i_a <= bgSrcs.length - 1) ? bgSrcs[i_a] : bgSrcs.length - 1;
					}
				}
				$(window).bind('resize.PathDraw', function() {
					$.drawResize(el);
				});
				elData.$el.bind('detach.PathDraw', function(ev) {
					$.preventDefault(ev);
					$(window).unbind('resize.PathDraw', function() {
						$.drawResize(el);
					});
					elData.$el.unbind('.PathDraw');
					elData.$el.removeData('PathDraw');
				});
			};
			elData.init();
		}
	};

	$.changeSvg = function(el, newSvg) {
		var elData = $(el).data('PathDraw');
		elData.svg = $(newSvg)[0];
		elData.pathes = $('path', $(newSvg));
		$.drawReset(el);
	};

	$.drawResize = function(el) {
		var elData = $(el).data('PathDraw');
		var svgWidth = elData.options.svgWidth;
		elData.ctxW = $.resize(el, elData.options.width, "w") * elData.options.resolution;
		elData.ctxH = $.resize(el, elData.options.height, "h") * elData.options.resolution;
		elData.svgRatio = elData.ctxW / svgWidth;
		for(var i_b = 0; i_b < elData.canvas.length; i_b++) {
			elData.canvas[i_b].width = elData.svg.style.width = elData.ctxW;
			elData.canvas[i_b].height = elData.svg.style.height = elData.ctxH;
		}
		if (elData.isStop) {
			$.draw(el);
		}
		if (elData.lastLoad) {
			if (elData.options.tailer) $(elData.options.tailer).css({ 'left': (elData.lpX * elData.svgRatio) * elData.resolutionScale, 'top': (elData.lpY * elData.svgRatio) * elData.resolutionScale});
			$.drawClear(el);
			$.drawFinish(el);
		}
	}

	$.preventDefault = function(e) {
		e = e || window.event;
		if (e.preventDefault) {
			e.preventDefault();
		}
		e.returnValue = false;
	}

	$.resize = function(el, size, type) {
		var elData = $(el).data('PathDraw');
		if (isNaN(size)) {
			if (size.indexOf("%") != -1) {
				if (type == "h") {
					return elData.$el.height() * (100 / parseInt(size));
				} else {
					return elData.$el.width() * (100 / parseInt(size));
				}
			} else if (size.indexOf("px") != -1) {
				return size.replace("px", "");
			} else {
				return size;
			}
		} else {
			return size;
		}
	}

	$.bgSet = function(el) {
		var elData = $(el).data('PathDraw');
		for(var i_c = 0; i_c < elData.canvas.length; i_c++) {
			var bgW = elData.canvas[i_c].width / elData.bg[i_c].width;
			var bgH = elData.canvas[i_c].height / elData.bg[i_c].height;
			elData.ctx[i_c].globalCompositeOperation = "source-atop";
			if (elData.bgH < elData.bgW) {
				elData.ctx[i_c].drawImage(elData.bg[i_c], 0, (elData.canvas[i_c].height - elData.bg[i_c].height * bgW) * 0.5, elData.canvas[i_c].width, elData.bg[i_c].height * bgW);
			} else {
				elData.ctx[i_c].drawImage(elData.bg[i_c], (elData.canvas[i_c].width - elData.bg[i_c].width * bgH) * 0.5, 0, elData.bg[i_c].width * bgH, elData.canvas[i_c].height);
			}
		}
	}

	$.buildPath = function(el) {
		var elData = $(el).data('PathDraw');
		$.drawStop(el);
		if(!elData.pathes[elData.origCount]) {
			return;
		}
		var speedAccel = elData.pathes[elData.origCount].getAttribute('data-draw-speed') || 1;
		elData.fpsInterval = (1000 / (elData.options.drawFPS * speedAccel));
		elData.timer = setInterval(function() {
			$.buildPath(el)
		}, elData.fpsInterval);
		var pointAccel = elData.pathes[elData.origCount].getAttribute('data-distanceperpoint') || elData.options.distancePerPoint;
		var nextPoint = elData.points[elData.origCount].length * pointAccel;
		elData.pathLength = elData.pathes[elData.origCount].getTotalLength();
		if (nextPoint > elData.pathLength) {
			nextPoint = elData.points[elData.origCount].length * 1;
		}
		if (nextPoint <= elData.pathLength) {
			elData.points[elData.origCount].push(elData.pathes[elData.origCount].getPointAtLength(nextPoint));
			$.draw(el);
		}
	}

	$.draw = function(el) {
		var elData = $(el).data('PathDraw');
		$.drawClear(el);
		for(var i_d = 0; i_d < elData.canvas.length; i_d++) {
			elData.ctx[i_d].beginPath();
			if(elData.options.blending) {
				elData.ctx[i_d].globalCompositeOperation = elData.options.blending;
			}
		}
		var j = elData.points[elData.origCount].length - 1;
		elData.lpX = elData.points[elData.origCount][j].x;
		elData.lpY = elData.points[elData.origCount][j].y;
		var degEdit = (elData.lpX / elData.lpY) * 10;
		if(degEdit > 20) {
			degEdit = 20;
		} else if(degEdit < -20) {
			degEdit = -20;
		}
		if(elData.pathes[elData.origCount].getAttribute('data-line-follow') != "no") {
			if(elData.options.tailer) $(elData.options.tailer).css({ 'left': (elData.lpX * elData.svgRatio) * elData.resolutionScale, 'top': (elData.lpY * elData.svgRatio) * elData.resolutionScale});
		}
		for(var i_e = 0; i_e < elData.canvas.length; i_e++) {
			if(elData.points[elData.origCount][0]) {
				elData.ctx[i_e].moveTo(elData.points[elData.origCount][0].x * elData.svgRatio, elData.points[elData.origCount][0].y * elData.svgRatio);
				for(var i = 1; i < elData.points[elData.origCount].length; i++) {
					if(elData.guide.indexOf(elData.origCount) != -1) {
						elData.ctx[i_e].moveTo(elData.points[elData.origCount][i].x * elData.svgRatio, elData.points[elData.origCount][i].y * elData.svgRatio);
					} else {
						elData.ctx[i_e].lineTo(elData.points[elData.origCount][i].x * elData.svgRatio, elData.points[elData.origCount][i].y * elData.svgRatio);
					}
					var pointAccel = elData.pathes[elData.origCount].getAttribute('data-distanceperpoint') || elData.options.distancePerPoint;
					if(i >= Math.floor(elData.pathLength / pointAccel)) {
						elData.origCount++;
						if(elData.origCount == elData.pathes.length) {
							elData.lastLoad = true;
							$.drawFinish(el);
							return;
						}
					}
				}
			}
		}
		for(var i_f = 0; i_f < elData.canvas.length; i_f++) {
			elData.ctx[i_f].lineWidth = (elData.pathes[elData.origCount].getAttribute('stroke-width') || 1) * elData.svgRatio;
			elData.ctx[i_f].strokeStyle = elData.pathes[elData.origCount].getAttribute('stroke') || "#000";
			elData.ctx[i_f].lineCap = elData.pathes[elData.origCount].getAttribute('stroke-linecap') || "round";
			elData.ctx[i_f].lineJoin = elData.pathes[elData.origCount].getAttribute('stroke-linejoin') || "round";
			if(elData.options.background) elData.ctx[i_f].globalCompositeOperation = "source-over";
			elData.ctx[i_f].stroke();
		}
		if(elData.origCount > 0) {
			for(var m = 0; m < elData.origCount; m++) {
				if(elData.guide.indexOf(m) == -1) {
					var p = new Path2D(elData.pathes[m].getAttribute('d'));
					for(var i_g = 0; i_g < elData.canvas.length; i_g++) {
						elData.ctx[i_g].scale(elData.svgRatio, elData.svgRatio);
						elData.ctx[i_g].lineWidth = elData.pathes[m].getAttribute('stroke-width') || 1;
						elData.ctx[i_g].strokeStyle = elData.pathes[m].getAttribute('stroke') || "#000";
						elData.ctx[i_g].lineCap = elData.pathes[m].getAttribute('stroke-linecap') || "round";
						elData.ctx[i_g].lineJoin = elData.pathes[m].getAttribute('stroke-linejoin') || "round";
						if(elData.options.background) elData.ctx[i_g].globalCompositeOperation = "source-over";
						elData.ctx[i_g].stroke(p);
						elData.ctx[i_g].setTransform(1, 0, 0, 1, 0, 0);
					}
				}
			}
			if(elData.origCount >= elData.origData.length - 1) {
				elData.lastLoad = true;
			}
		}
		if(elData.options.background) {
			$.bgSet(el);
		}
	}

	$.drawStart = function(el, callback) {
		var elData = $(el).data('PathDraw');
		if(!elData.lastLoad) {
			$.drawStop(el);
			$.drawResize(el);
			var delay = 0;
			if(elData.options.startDelay) {
				delay = elData.options.startDelay;
			} else {
				if(elData.origCount == 0) {
					delay = 1000;
					if (elData.options.tailer) $(elData.options.tailer).css({ 'transition': 'all .5s', 'transition-delay': '.5s', 'left': (elData.pathes[elData.followLine].getPointAtLength(0).x * elData.svgRatio) * elData.resolutionScale, 'top': (elData.pathes[elData.followLine].getPointAtLength(0).y * elData.svgRatio) * elData.resolutionScale});
					elData.firstLoad = false;
				} else {
					delay = 0;
				}
			}
			setTimeout(function() {
				if (elData.options.tailer) $(elData.options.tailer).css('transition', 'none');
				$.buildPath(el);
				if (typeof callback === "function") {
					callback();
				}
			}, delay);
		}
	}

	$.drawStop = function(el, callback) {
		var elData = $(el).data('PathDraw');
		clearInterval(elData.timer);
		if (typeof callback === "function") {
			callback();
		}
	}

	$.drawFinish = function(el, callback) {
		var elData = $(el).data('PathDraw');
		$.drawStop(el);
		var pArray = [];
		for(var i = 0; i < elData.pathes.length; i++) {
			if(elData.options.blending) {
				for(var i_h = 0; i_h < elData.canvas.length; i_h++) {
					elData.ctx[i_h].globalCompositeOperation = elData.options.blending;
				}
			}
			if(elData.guide.indexOf(i) == -1) {
				var p = new Path2D(elData.pathes[i].getAttribute('d'));
				for(var i_i = 0; i_i < elData.canvas.length; i_i++) {
					elData.ctx[i_i].scale(elData.svgRatio, elData.svgRatio);
					elData.ctx[i_i].lineWidth = elData.pathes[i].getAttribute('stroke-width') || 1;
					elData.ctx[i_i].strokeStyle = elData.pathes[i].getAttribute('stroke') || "#000";
					elData.ctx[i_i].lineCap = elData.pathes[i].getAttribute('stroke-linecap') || "round";
					elData.ctx[i_i].lineJoin = elData.pathes[i].getAttribute('stroke-linejoin') || "round";
					if (elData.options.background) elData.ctx[i_i].globalCompositeOperation = "source-over";
					elData.ctx[i_i].stroke(p);
					elData.ctx[i_i].setTransform(1, 0, 0, 1, 0, 0);
				}
			}
		}
		for(var i_j = 0; i_j < elData.canvas.length; i_j++) {
			elData.ctx[i_j].setTransform(1, 0, 0, 1, 0, 0);
		}
		if (elData.options.background) {
			$.bgSet(el);
		}
		elData.lastLoad = true;
		if(typeof callback === "function") {
			callback();
		}
		if(elData.finishFn) {
			elData.finishFn();
		}
	}

	$.drawClear = function(el, callback) {
		var elData = $(el).data('PathDraw');
		if(!elData.isStop) {
			for(var i_k = 0; i_k < elData.canvas.length; i_k++) {
				elData.ctx[i_k].clearRect(0, 0, elData.ctx[i_k].canvas.width, elData.ctx[i_k].canvas.height);
			}
			if(typeof callback === "function") {
				callback();
			}
		}
	}

	$.drawReset = function(el, callback) {
		var elData = $(el).data('PathDraw');
		$.drawStop(el);
		elData.firstLoad = true;
		elData.lastLoad = false;
		elData.finishFn = null;
		elData.origData = [];
		elData.points = [];
		elData.guide = [];
		elData.origCount = 0;
		elData.closeCount = 0;
		elData.pathLength = 0;
		var followLine = 0;
		for(var i = 0; i < elData.pathes.length; i++) {
			var newArray = [];
			elData.origData.push(elData.pathes[i].getPathData());
			elData.points.push(newArray);
			if(elData.pathes[i].getAttribute('data-line-type') == "guide") {
				elData.guide.push(i);
			}
			if(elData.pathes[i].getAttribute('data-line-follow') == "no") {
				followLine++;
			}
		}
		elData.followLine = (followLine > 0) ? followLine : 0;
		$.drawClear(el);
		if(typeof callback === "function") {
			callback();
		}
	}

	$.drawFinished = function(el, callback) {
		var elData = $(el).data('PathDraw');
		if(typeof callback === "function") {
			elData.finishFn = callback;
		}
	}

	$.PathDraw.defaultOptions = {
		width: "100%",
		height: "100%",
		// easing: "easeOutExpo",
		tailer: null,
		distancePerPoint: 3,
		drawFPS: 60,
		svgWidth: null,
		// effect: null,
		// eraseMode: false,
		resolution: $.browser.mobile ? 2 : 1,
		noDelay: false,
		background: null,
	};
	$.fn.pathDraw = function(options) {
		if($.browser.ie == 8) {
			return;
		} else {
			return this.each(function() {
				(new $.PathDraw(this, options));
			});
		}
	};
	$.fn.drawStart = function(callback) {
		if($.browser.ie == 8) {
			return;
		} else {
			return this.each(function() {
				(new $.drawStart(this, callback));
			});
		}
	};
	$.fn.drawStop = function(callback) {
		if($.browser.ie == 8) {
			return;
		} else {
			return this.each(function() {
				(new $.drawStop(this, callback));
			});
		}
	};
	$.fn.drawFinish = function(callback) {
		if($.browser.ie == 8) {
			return;
		} else {
			return this.each(function() {
				(new $.drawFinish(this, callback));
			});
		}
	};
	$.fn.drawClear = function(callback) {
		if($.browser.ie == 8) {
			return;
		} else {
			return this.each(function() {
				(new $.drawClear(this, callback));
			});
		}
	};
	$.fn.drawReset = function(callback) {
		if($.browser.ie == 8) {
			return;
		} else {
			return this.each(function() {
				(new $.drawReset(this, callback));
			});
		}
	};
	$.fn.drawFinished = function(callback) {
		if($.browser.ie == 8) {
			return;
		} else {
			return this.each(function() {
				(new $.drawFinished(this, callback));
			});
		}
	};
	$.fn.drawBg = function(callback) {
		if($.browser.ie == 8) {
			return;
		} else {
			return this.each(function() {
				(new $.bgSet(this, callback));
			});
		}
	};
	$.fn.changeSvg = function(newSvg) {
		if($.browser.ie == 8) {
			return;
		} else {
			return this.each(function() {
				(new $.changeSvg(this, newSvg));
			});
		}
	};
})(jQuery);
})(window.jQuery);