(function(g){var window=this;var Hsa=function(a,b){return g.Sb(a,b)},Y5=function(a,b,c){a.w.set(b,c)},Z5=function(a){Y5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.H)()).toString(36));
return a},$5=function(a,b,c){g.Fa(c)||(c=[String(c)]);
g.an(a.w,b,c)},Isa=function(a,b){var c=[];
g.hk(b,function(d){try{var e=g.fo.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.eo(e)&&c.push(d)},a);
return c},Jsa=function(a,b){var c=Isa(a,b);
(0,g.y)(c,function(d){g.fo.prototype.remove.call(this,d)},a)},Ksa=function(a,b){g.Va(a,b)||a.push(b)},a6=function(a){var b=0,c;
for(c in a)b++;return b},Lsa=function(a,b){var c=b instanceof g.wc?b:g.Ac(b,/^data:image\//i.test(b));
a.src=g.xc(c)},b6=function(){},Msa=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Nsa=function(a){if(a.zd&&"function"==typeof a.zd)return a.zd();
if("string"===typeof a)return a.split("");if(g.Ga(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Ob(a)},Osa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ga(a)||"string"===typeof a)(0,g.y)(a,b,void 0);else{if(a.re&&"function"==typeof a.re)var c=a.re();else if(a.zd&&"function"==typeof a.zd)c=void 0;else if(g.Ga(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Pb(a);d=Nsa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},Psa=function(a,b,c,d){var e=new g.Pm(null,void 0);
a&&g.Qm(e,a);b&&g.Rm(e,b);c&&g.Sm(e,c);d&&(e.u=d);return e},c6=function(a,b){g.Lo[a]=!0;
var c=g.Jo();c&&c.publish.apply(c,arguments);g.Lo[a]=!1},d6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.w=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Mm;this.o=this.u="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Qsa(this,a.capabilities||""),Rsa(this,a.experiments||""),this.u=a.remoteControllerUrl||"",this.o=a.localChannelEncryptionKey||
"")},Qsa=function(a,b){a.capabilities.clear();
(0,g.Vd)(b.split(","),g.La(Hsa,Ssa)).forEach(function(c){a.capabilities.add(c)})},Rsa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},e6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},f6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},Tsa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},Usa=function(a){return new e6(a)},Vsa=function(a){return g.Fa(a)?(0,g.Fc)(a,Usa):[]},g6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},h6=function(a){return g.Fa(a)?"["+(0,g.Fc)(a,g6).join(",")+"]":"null"},i6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},Wsa=function(a){return(0,g.Fc)(a,function(b){return{key:b.id,
name:b.name}})},j6=function(a,b){return g.Sa(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},k6=function(a,b){return g.Sa(a,function(c){return f6(c,b)})},l6=function(a){try{var b=(0,g.ns)(),c=(0,g.ms)();
b&&b.remove(a);c&&c.remove(a)}catch(d){}},Xsa=function(){var a=(0,g.ms)();
a&&Jsa(a,a.o.Ef(!0))},m6=function(){var a=g.ps("yt-remote-connected-devices")||[];
g.nb(a);return a},Ysa=function(a){if(g.Wa(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.Fc)(a,function(d,e){return 0==e?d:d.substring(c.length)})},Zsa=function(a){g.os("yt-remote-connected-devices",a,86400)},o6=function(){if(n6)return n6;
var a=g.ps("yt-remote-device-id");a||(a=i6(),g.os("yt-remote-device-id",a,31536E3));for(var b=m6(),c=1,d=a;g.Va(b,d);)c++,d=a+"#"+c;return n6=d},p6=function(){var a=m6(),b=o6();
g.Va(a,b);g.qs()&&g.pb(a,b);a=Ysa(a);if(g.Wa(a))try{g.$q("remote_sid")}catch(c){}else try{g.Zq("remote_sid",a.join(","),-1)}catch(c){}},$sa=function(){return g.ps("yt-remote-session-browser-channel")},ata=function(){return g.ps("yt-remote-local-screens")||[]},bta=function(){g.os("yt-remote-lounge-token-expiration",!0,86400)},cta=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.Fc)(ata(),function(d){return d.loungeToken}),c=(0,g.Fc)(a,function(d){return d.loungeToken});
(0,g.ni)(c,function(d){return!g.Va(b,d)})&&bta();
g.os("yt-remote-local-screens",a,31536E3)},dta=function(a,b){g.os("yt-remote-session-browser-channel",a);
g.os("yt-remote-session-screen-id",b);var c=m6(),d=o6();g.Va(c,d)||c.push(d);Zsa(c);p6()},q6=function(a){a||(l6("yt-remote-session-screen-id"),l6("yt-remote-session-video-id"));
p6();a=m6();g.$a(a,o6());Zsa(a)},eta=function(){if(!r6){var a=g.po();
a&&(r6=new g.Yn(a))}return r6?!!r6.get("yt-remote-use-staging-server"):!1},fta=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},gta=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},s6=function(a){a.length?hta(a.shift(),function(){s6(a)}):t6()},ita=function(a){return"chrome-extension://"+a+"/cast_sender.js"},hta=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},t6=function(){var a=gta();
a&&a(!1,"No cast extension found")},kta=function(){if(jta){var a=2,b=gta(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;hta("//web.archive.org/web/20200209221551/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",t6,c)}},lta=function(){kta();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);s6(["//web.archive.org/web/20200209221551/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20200209221551/https://www.gstatic.com/eureka/clank/cast_sender.js"])},u6=function(){},mta=function(){},ota=function(a){return(a=nta(a))?new ActiveXObject(a):new XMLHttpRequest},nta=function(a){if(!a.u&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.u=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.u},v6=function(a,b,c){g.A.call(this);
this.w=null!=c?(0,g.x)(a,c):a;this.md=b;this.u=(0,g.x)(this.KE,this);this.o=[]},w6=function(a){a.Ga=g.wf(a.u,a.md);
a.w.apply(null,a.o)},x6=function(a,b,c,d){this.o=a;
this.w=b;this.G=c;this.F=d||1;this.B=45E3;this.A=new g.w1(this);this.u=new g.vf;this.u.setInterval(250)},qta=function(a,b,c){a.Ii=1;
a.sg=Z5(b.clone());a.Wh=c;a.C=!0;pta(a,null)},y6=function(a,b,c,d,e){a.Ii=1;
a.sg=Z5(b.clone());a.Wh=null;a.C=c;e&&(a.pB=!1);pta(a,d)},pta=function(a,b){a.vj=(0,g.H)();
z6(a);a.Yg=a.sg.clone();$5(a.Yg,"t",a.F);a.Vl=0;a.Fc=a.o.qq(a.o.Hl()?b:null);0<a.Xq&&(a.Fo=new v6((0,g.x)(a.tC,a,a.Fc),a.Xq));a.A.ha(a.Fc,"readystatechange",a.KN);var c=a.Bh?g.Yb(a.Bh):{};a.Wh?(a.jp="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Fc.send(a.Yg,a.jp,a.Wh,c)):(a.jp="GET",a.pB&&!g.Kd&&(c.Connection="close"),a.Fc.send(a.Yg,a.jp,null,c));a.o.Pe(1)},tta=function(a,b,c){for(var d=!0;!a.kh&&a.Vl<c.length;){var e=rta(a,c);
if(e==A6){4==b&&(a.Dg=4,B6(15),d=!1);break}else if(e==sta){a.Dg=4;B6(16);d=!1;break}else C6(a,e)}4==b&&0==c.length&&(a.Dg=1,B6(17),d=!1);a.Qe=a.Qe&&d;d||(D6(a),E6(a))},rta=function(a,b){var c=a.Vl,d=b.indexOf("\n",c);
if(-1==d)return A6;c=Number(b.substring(c,d));if(isNaN(c))return sta;d+=1;if(d+c>b.length)return A6;var e=b.substr(d,c);a.Vl=d+c;return e},vta=function(a,b){a.vj=(0,g.H)();
z6(a);var c=b?window.location.hostname:"";a.Yg=a.sg.clone();Y5(a.Yg,"DOMAIN",c);Y5(a.Yg,"t",a.F);try{a.Ue=new ActiveXObject("htmlfile")}catch(n){D6(a);a.Dg=7;B6(22);E6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in F6)k=F6[l];else if(l in uta)k=F6[l]=uta[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
F6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Sc(g.nc("b/12014412"),d+"</body></html>");a.Ue.open();a.Ue.write(g.Nc(c));a.Ue.close();a.Ue.parentWindow.m=(0,g.x)(a.eN,a);a.Ue.parentWindow.d=(0,g.x)(a.xA,a,!0);a.Ue.parentWindow.rpcClose=(0,g.x)(a.xA,a,!1);c=a.Ue.createElement("DIV");a.Ue.parentWindow.document.body.appendChild(c);d=g.zc(a.Yg.toString());d=g.Zc(g.xc(d));d=g.Sc(g.nc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Tc(c,d);a.o.Pe(1)},z6=function(a){a.ru=(0,g.H)()+a.B;
wta(a,a.B)},wta=function(a,b){if(null!=a.Ij)throw Error("WatchDog timer not null");
a.Ij=G6((0,g.x)(a.lN,a),b)},H6=function(a){a.Ij&&(g.v.clearTimeout(a.Ij),a.Ij=null)},E6=function(a){a.o.ex()||a.kh||a.o.xo(a)},D6=function(a){H6(a);
g.he(a.Fo);a.Fo=null;a.u.stop();g.y1(a.A);if(a.Fc){var b=a.Fc;a.Fc=null;b.abort();b.dispose()}a.Ue&&(a.Ue=null)},C6=function(a,b){try{a.o.rA(a,b),a.o.Pe(4)}catch(c){}},yta=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;xta(a,b,function(k){k?c(!0):g.v.setTimeout(function(){yta(a,b,c,d,f)},f)})}},xta=function(a,b,c){var d=new Image;
d.onload=function(){try{I6(d),c(!0)}catch(e){}};
d.onerror=function(){try{I6(d),c(!1)}catch(e){}};
d.onabort=function(){try{I6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{I6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
Lsa(d,a)},I6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},J6=function(){},zta=function(a){this.o=a;
this.u=new J6},Ata=function(a){var b=K6(a.o,a.Vj,"/mail/images/cleardot.gif");
Z5(b);yta(b.toString(),5E3,(0,g.x)(a.ED,a),3,2E3);a.Pe(1)},M6=function(a){var b=a.o.H;
if(null!=b)B6(5),b?(B6(11),L6(a.o,a,!1)):(B6(12),L6(a.o,a,!0));else if(a.Ld=new x6(a,void 0,void 0,void 0),a.Ld.Bh=a.Vq,b=a.o,b=K6(b,b.Hl()?a.tk:null,a.Wq),B6(5),!g.Id||g.md(10))$5(b,"TYPE","xmlhttp"),y6(a.Ld,b,!1,a.tk,!1);else{$5(b,"TYPE","html");var c=a.Ld;a=!!a.tk;c.Ii=3;c.sg=Z5(b.clone());vta(c,a)}},N6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return Msa(a)},O6=function(a){g.He.call(this);
this.headers=new g.Mm;this.T=a||null;this.w=!1;this.O=this.o=null;this.ga=this.H="";this.C=0;this.A="";this.B=this.Z=this.G=this.V=!1;this.F=0;this.M=null;this.ea="";this.J=this.U=!1},Bta=function(a){return g.Id&&g.ld(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},Cta=function(a){return"content-type"==a.toLowerCase()},Eta=function(a,b){a.w=!1;
a.o&&(a.B=!0,a.o.abort(),a.B=!1);a.A=b;a.C=5;Dta(a);P6(a)},Dta=function(a){a.V||(a.V=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},Gta=function(a){if(a.w&&"undefined"!=typeof g.E1)if(a.O[1]&&4==Q6(a)&&2==a.getStatus())R6(a,"Local request error detected and ignored");
else if(a.G&&4==Q6(a))g.wf(a.gx,0,a);else if(a.dispatchEvent("readystatechange"),4==Q6(a)){R6(a,"Request complete");a.w=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.Qg(1,String(a.H));if(!f&&g.v.self&&g.v.self.location){var k=g.v.self.location.protocol;f=k.substr(0,k.length-1)}e=!Fta.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.C=6;try{var l=2<Q6(a)?a.o.statusText:""}catch(m){l=""}a.A=l+" ["+a.getStatus()+"]";Dta(a)}}finally{P6(a)}}},P6=function(a,b){if(a.o){Hta(a);
var c=a.o,d=a.O[0]?g.Ca:null;a.o=null;a.O=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},Hta=function(a){a.o&&a.J&&(a.o.ontimeout=null);
a.M&&(g.v.clearTimeout(a.M),a.M=null)},Q6=function(a){return a.o?a.o.readyState:0},S6=function(a){try{return a.o?a.o.responseText:""}catch(b){return""}},R6=function(a,b){return b+" ["+a.ga+" "+a.H+" "+a.getStatus()+"]"},T6=function(a,b,c){this.o=1;
this.u=[];this.A=[];this.B=new J6;this.G=a||null;this.H=null!=b?b:null;this.C=c||!1},Ita=function(a,b){this.o=a;
this.map=b;this.context=null},Jta=function(a){g.je.call(this,"statevent",a)},Kta=function(a,b){g.je.call(this,"timingevent",a);
this.size=b},Lta=function(a){g.je.call(this,"serverreachability",a)},Ota=function(a){Mta(a);
if(3==a.o){var b=a.kl++,c=a.Ym.clone();Y5(c,"SID",a.w);Y5(c,"RID",b);Y5(c,"TYPE","terminate");U6(a,c);b=new x6(a,a.w,b,void 0);b.Ii=2;b.sg=Z5(c.clone());Lsa(new Image,b.sg.toString());b.vj=(0,g.H)();z6(b)}Nta(a)},Pta=function(a){a.cE(1,0);
a.Ym=K6(a,null,a.Uq);V6(a)},Mta=function(a){a.wg&&(a.wg.abort(),a.wg=null);
a.Zb&&(a.Zb.cancel(),a.Zb=null);a.Hf&&(g.v.clearTimeout(a.Hf),a.Hf=null);W6(a);a.Fd&&(a.Fd.cancel(),a.Fd=null);a.Ag&&(g.v.clearTimeout(a.Ag),a.Ag=null)},Qta=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new Ita(a.yJ++,b));2!=a.o&&3!=a.o||V6(a)},V6=function(a){a.Fd||a.Ag||(a.Ag=G6((0,g.x)(a.wA,a),0),a.Bi=0)},Sta=function(a,b){if(1==a.o){if(!b){a.kl=Math.floor(1E5*Math.random());
var c=a.kl++,d=new x6(a,"",c,void 0);d.Bh=null;var e=X6(a),f=a.Ym.clone();Y5(f,"RID",c);Y5(f,"CVER","1");U6(a,f);qta(d,f,e);a.Fd=d;a.o=2}}else 3==a.o&&(b?Rta(a,b):0==a.u.length||a.Fd||Rta(a))},Rta=function(a,b){if(b)if(6<a.lh){a.u=a.A.concat(a.u);
a.A.length=0;var c=a.kl-1;var d=X6(a)}else c=b.G,d=b.Wh;else c=a.kl++,d=X6(a);var e=a.Ym.clone();Y5(e,"SID",a.w);Y5(e,"RID",c);Y5(e,"AID",a.Vi);U6(a,e);c=new x6(a,a.w,c,a.Bi+1);c.Bh=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Fd=c;qta(c,e,d)},U6=function(a,b){if(a.jd){var c=a.jd.Cw();
c&&g.Ib(c,function(d,e){Y5(b,e,d)})}},X6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.lh&&0<b){var d=a.u[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.u[e].o,k=a.u[e].map;f=6>=a.lh?e:f-d;try{g.Ib(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.A=a.A.concat(a.u.splice(0,b));
return c.join("&")},Tta=function(a){a.Zb||a.Hf||(a.F=1,a.Hf=G6((0,g.x)(a.vA,a),0),a.ti=0)},Y6=function(a){if(a.Zb||a.Hf||3<=a.ti)return!1;
a.F++;a.Hf=G6((0,g.x)(a.vA,a),Uta(a,a.ti));a.ti++;return!0},L6=function(a,b,c){a.hp=c;
a.df=b.Tf;a.C||Pta(a)},W6=function(a){null!=a.ph&&(g.v.clearTimeout(a.ph),a.ph=null)},Uta=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},Z6=function(a,b){if(2==b||9==b){var c=null;
a.jd&&(c=null);var d=(0,g.x)(a.vO,a);c||(c=new g.Pm("//web.archive.org/web/20200209221551/https://www.google.com/images/cleardot.gif"),Z5(c));xta(c.toString(),1E4,d)}else B6(2);Vta(a,b)},Vta=function(a,b){a.o=0;
a.jd&&a.jd.Pv(b);Nta(a);Mta(a)},Nta=function(a){a.o=0;
a.df=-1;if(a.jd)if(0==a.A.length&&0==a.u.length)a.jd.iq();else{g.db(a.A);var b=g.db(a.u);a.A.length=0;a.u.length=0;a.jd.iq(b)}},K6=function(a,b,c){var d=g.Xm(c);
if(""!=d.o)b&&g.Rm(d,b+"."+d.o),g.Sm(d,d.B);else{var e=window.location;d=Psa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.gk&&g.Ib(a.gk,function(f,k){Y5(d,k,f)});
Y5(d,"VER",a.lh);U6(a,d);return d},G6=function(a,b){if(!g.Ha(a))throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},B6=function(a){$6.dispatchEvent(new Jta($6,a))},Wta=function(){},a7=function(a,b,c){g.A.call(this);
this.C=null!=c?(0,g.x)(a,c):a;this.md=b;this.B=(0,g.x)(this.JE,this);this.o=!1;this.u=0;this.w=this.Ga=null;this.A=[]},Xta=function(){this.o=[];
this.u=[]},Yta=function(a,b){this.action=a;
this.params=b||{}},b7=function(a,b){g.A.call(this);
this.o=new g.L(this.VM,0,this);g.B(this,this.o);this.md=5E3;this.u=0;if(g.Ha(a))b&&(a=(0,g.x)(a,b));else if(a&&g.Ha(a.handleEvent))a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.w=a},c7=function(a,b,c){this.M=a;
this.C=b;this.w=new g.Xn;this.u=new b7(this.ZN,this);this.o=null;this.tb=!1;this.B=null;this.H="";this.G=this.A=0;this.F=[];this.J=c||!1},Zta=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.hp,sessionId:a.o.w,arrayId:a.o.Vi}},$ta=function(a,b){a.G=b||0;
a.u.stop();a.o&&(3==a.o.o&&Sta(a.o),Ota(a.o));a.G=0},d7=function(a){return!!a.o&&3==a.o.o},aua=function(a,b){(a.C.loungeIdToken=b)||a.u.stop()},e7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.Qg(4,a))||"";b&&(this.port=":"+b);this.domain=g.Rg(a)||"";a=g.Gb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Fb(a,"10.0")&&(this.u=!1))},f7=function(a,b){var c=a.o;
a.u&&(c="https://"+a.domain+a.port+a.o);return g.$g(c+b,{})},g7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.La(a.A,d,!0),onError:g.La(a.w,e),Hd:g.La(a.B,e)};c&&(a.yb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Hp(b,a)},eua=function(){var a=bua;
cua();h7.push(a);dua(h7)},i7=function(a,b){cua();
var c=h7,d=fua(a,String(b));g.Wa(c)?gua(d):(dua(c),(0,g.y)(c,function(e){e(d)}))},cua=function(){h7||(h7=g.w("yt.mdx.remote.debug.handlers_")||[],g.Ba("yt.mdx.remote.debug.handlers_",h7,void 0))},gua=function(a){var b=(j7+1)%50;
j7=b;k7[b]=a;l7||(l7=49==b)},dua=function(a){var b=k7;
if(b[0]){var c=j7,d=l7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.y)(a,function(f){f(e)})}while(d!=c);
k7=Array(50);j7=-1;l7=!1}},fua=function(a,b){var c=((0,g.H)()-hua)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},m7=function(a){g.P.call(this);
this.F=a;this.o=[]},iua=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},jua=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.Vd)(a.o,function(f){return!!j6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=iua(a,b[d])||c;return c},kua=function(a,b){var c=a.o.length;
a.o=(0,g.Vd)(a.o,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.o.length<c},n7=function(a,b,c,d){g.P.call(this);
this.C=a;this.A=b;this.B=c;this.w=d;this.u=0;this.o=null;this.Ga=NaN},p7=function(a){m7.call(this,"LocalScreenService");
this.w=a;this.u=NaN;o7(this);this.info("Initializing with "+h6(this.o))},lua=function(a){if(a.o.length){var b=(0,g.Fc)(a.o,function(d){return d.id}),c=f7(a.w,"/pairing/get_lounge_token_batch");
g7(a.w,c,{screen_ids:b.join(",")},(0,g.x)(a.TE,a),(0,g.x)(a.SE,a))}},o7=function(a){var b=Vsa(ata());
b=(0,g.Vd)(b,function(c){return!c.uuid});
return jua(a,b)},q7=function(a,b){cta((0,g.Fc)(a.o,Tsa));
b&&bta()},s7=function(a,b){g.P.call(this);
this.C=b;var c=g.ps("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Va(c,l)}this.o=d;this.B=a;this.w=this.A=NaN;this.u=null;r7("Initialized with "+g.Jk(this.o))},mua=function(a,b,c){var d=f7(a.B,"/pairing/get_screen_availability");
g7(a.B,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},t7=function(a,b){a:if(a6(b)!=a6(a.o))var c=!1;
else{c=g.Pb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(r7("Updated online screens: "+g.Jk(a.o)),a.o=b,a.R("screenChange"));nua(a)},u7=function(a){isNaN(a.w)||g.Io(a.w);
a.w=g.Go((0,g.x)(a.Gt,a),0<a.A&&a.A<(0,g.H)()?2E4:1E4)},r7=function(a){i7("OnlineScreenService",a)},oua=function(a){var b={};
(0,g.y)(a.C(),function(c){c.token?b[c.token]=c.id:this.Rb("Requesting availability of screen w/o lounge token.")});
return b},nua=function(a){a=g.Pb(g.Jb(a.o,function(b){return b}));
g.nb(a);a.length?g.os("yt-remote-online-screen-ids",a.join(","),60):l6("yt-remote-online-screen-ids")},v7=function(a){m7.call(this,"ScreenService");
this.C=a;this.u=this.w=null;this.A=[];this.B={};pua(this)},rua=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.Yd();if(k=(c?k6(k,c):null)||k6(k,b)){k.uuid=b;var l=w7(a,k);mua(a.u,l,function(m){e(m?l:null)})}else c?qua(a,c,(0,g.x)(function(m){var n=w7(this,new e6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));mua(this.u,n,function(q){e(q?n:null)})},a),f):e(null)},sua=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},qua=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={yb:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Hp(f7(a.C,"/pairing/get_lounge_token_batch"),e)},tua=function(a){a.o=a.w.Yd();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+h6(a.o))},pua=function(a){x7(a);
a.w=new p7(a.C);a.w.subscribe("screenChange",(0,g.x)(a.bF,a));tua(a);a.A=Vsa(g.ps("yt-remote-automatic-screen-cache")||[]);x7(a);a.info("Initializing automatic screens: "+h6(a.A));a.u=new s7(a.C,(0,g.x)(a.Yd,a,!0));a.u.subscribe("screenChange",(0,g.x)(function(){this.R("onlineScreenChange")},a))},w7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=k6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.os("yt-remote-automatic-screen-cache",(0,g.Fc)(a.A,Tsa)));x7(a);a.B[b.uuid]=b.id;g.os("yt-remote-device-id-map",a.B,31536E3);return b},x7=function(a){a.B=g.ps("yt-remote-device-id-map")||{}},y7=function(a,b,c){g.P.call(this);
this.O=c;this.H=a;this.u=b;this.w=null},z7=function(a,b){i7(a.O,b)},A7=function(a,b){y7.call(this,a,b,"CastSession");
this.o=null;this.A=0;this.C=(0,g.x)(this.fP,this);this.B=(0,g.x)(this.tN,this);this.A=g.Go((0,g.x)(function(){uua(this,null)},this),12E4)},vua=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Jk(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ca,(0,g.x)(function(){z7(this,"Failed to send message: getMdxSessionStatus.")},a)):z7(a,"Sending yt message without session: "+g.Jk(b))},uua=function(a,b){g.Io(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.w||a.w.id!=b){var c=(0,g.x)(a.zo,a),d=(0,g.x)(a.fe,a);a.Vw(b,c,d,5)}}else a.fe(Error("Waiting for session status timed out."))},B7=function(a,b,c){y7.call(this,a,b,"DialSession");
this.A=this.G=null;this.M="";this.T=c;this.B=null;this.F=g.Ca;this.C=NaN;this.J=(0,g.x)(this.iP,this);this.o=g.Ca},wua=function(a){a.o=a.H.zC(a.M,a.u.label,a.u.friendlyName,(0,g.x)(function(b){this.o=g.Ca;
this.zo(b)},a),(0,g.x)(function(b){this.o=g.Ca;
this.fe(b)},a))},xua=function(a){var b={};
b.pairingCode=a.M;b.theme=a.T;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}eta()&&(b.env_useStageMdx=1);return g.Yg(b)},C7=function(a,b){y7.call(this,a,b,"ManualSession");
this.o=g.Go((0,g.x)(this.Wi,this,null),150)},D7=function(a,b,c,d){g.P.call(this);
this.u=a;this.F=b||"233637DE";this.C=c||"cl";this.G=d||!1;this.o=null;this.B=!1;this.w=[];this.A=(0,g.x)(this.eM,this)},yua=function(a,b){return b?g.Sa(a.w,function(c){return f6(b,c.label)},a):null},E7=function(a){i7("Controller",a)},bua=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},F7=function(a){return a.B||!!a.w.length||!!a.o},G7=function(a,b,c){b!=a.o&&(g.he(a.o),(a.o=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.u):a.R("yt-remote-cast2-receiver-selected",
b.u),b.subscribe("sessionScreen",(0,g.x)(a.uA,a,b)),b.w?a.R("yt-remote-cast2-session-change",b.w):c&&a.o.Wi(null)):a.R("yt-remote-cast2-session-change",null))},zua=function(a){var b=a.u.yC(),c=a.o&&a.o.u;
a=(0,g.Fc)(b,function(d){c&&f6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=yua(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Fua=function(a,b,c,d,e,f,k){Aua()?Bua(b,e,f,k)&&(I7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Cua(a,c):(window.__onGCastApiAvailable=function(l,m){l?Cua(a,c):(J7("Failed to load cast API: "+m),K7(!1),I7(!1),l6("yt-remote-cast-available"),l6("yt-remote-cast-receiver"),Dua(),c(!1))},d?g.To("https://web.archive.org/web/20200209221551/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?lta():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?t6():(kta(),s6(Eua.map(ita))))):H7("Cannot initialize because not running Chrome")},Dua=function(){H7("dispose");
var a=L7();a&&a.dispose();g.Ba("yt.mdx.remote.cloudview.instance_",null,void 0);Gua(!1);g.Oo(M7);M7.length=0},N7=function(){return!!g.ps("yt-remote-cast-installed")},Hua=function(){var a=g.ps("yt-remote-cast-receiver");
return a?a.friendlyName:null},Iua=function(){H7("clearCurrentReceiver");
l6("yt-remote-cast-receiver")},Jua=function(){return N7()?L7()?L7().getCastSession():(J7("getCastSelector: Cast is not initialized."),null):(J7("getCastSelector: Cast API is not installed!"),null)},P7=function(){N7()?L7()?O7()?(H7("Requesting cast selector."),L7().requestSession()):(H7("Wait for cast API to be ready to request the session."),M7.push(g.No("yt-remote-cast2-api-ready",P7))):J7("requestCastSelector: Cast is not initialized."):J7("requestCastSelector: Cast API is not installed!")},Q7=
function(a,b){O7()?L7().setConnectedScreenStatus(a,b):J7("setConnectedScreenStatus called before ready.")},Aua=function(){var a=0<=g.Gb.search(/ (CrMo|Chrome|CriOS)\//);
return g.Fv||a},Kua=function(a,b){L7().init(a,b)},Bua=function(a,b,c,d){var e=!1;
L7()||(a=new D7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.os("yt-remote-cast-available",f);c6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){H7("onReceiverSelected: "+f.friendlyName);
g.os("yt-remote-cast-receiver",f);c6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){H7("onReceiverResumed: "+f.friendlyName);
g.os("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){H7("onSessionChange: "+g6(f));
f||l6("yt-remote-cast-receiver");c6("yt-remote-cast2-session-change",f)}),g.Ba("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
H7("cloudview.createSingleton_: "+e);return e},L7=function(){return g.w("yt.mdx.remote.cloudview.instance_")},Cua=function(a,b){K7(!0);
I7(!1);Kua(a,function(c){c?(Gua(!0),g.Qo("yt-remote-cast2-api-ready")):(J7("Failed to initialize cast API."),K7(!1),l6("yt-remote-cast-available"),l6("yt-remote-cast-receiver"),Dua());b(c)})},H7=function(a){i7("cloudview",a)},J7=function(a){i7("cloudview",a)},K7=function(a){H7("setCastInstalled_ "+a);
g.os("yt-remote-cast-installed",a)},O7=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},Gua=function(a){H7("setApiReady_ "+a);
g.Ba("yt.mdx.remote.cloudview.apiReady_",a,void 0)},I7=function(a){g.Ba("yt.mdx.remote.cloudview.initializing_",a,void 0)},R7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.C=this.F=0;this.o=null;this.hasNext=this.ff=!1;this.H=this.G=this.u=this.A=0;this.w=NaN;this.B=!1;this.reset(a)},S7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.ff=!1;a.hasNext=!1;a.F=0;a.C=(0,g.H)();a.A=0;a.u=0;a.G=0;a.H=0;a.w=NaN;a.B=!1},T7=function(a){return 1==a.playerState?((0,g.H)()-a.C)/1E3:0},U7=function(a,b){a.F=b;
a.C=(0,g.H)()},V7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.H)()-a.C)/1E3+a.F;
case -1E3:return 0}return a.F},W7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&S7(a)},X7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Zb(a.o);b.hasPrevious=a.ff;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.C;b.seekableStart=a.A;b.seekableEnd=a.u;b.duration=a.G;b.loadedTime=a.H;b.liveIngestionTime=a.w;return b},Z7=function(a,b){g.P.call(this);
this.o=0;this.A=a;this.C=[];this.B=new Xta;this.w=this.u=null;this.H=(0,g.x)(this.gK,this);this.F=(0,g.x)(this.ol,this);this.G=(0,g.x)(this.fK,this);this.M=(0,g.x)(this.rK,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.vu,this),Lua(this))):c=3;0!=c&&(b?this.vu(c):g.Go((0,g.x)(function(){this.vu(c)},this),0));
var d=Jua();d&&Y7(this,d);this.subscribe("yt-remote-cast2-session-change",this.M)},$7=function(a){return new R7(a.A.getPlayerContextData())},Lua=function(a){(0,g.y)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.C.push(this.A.subscribe(b,g.La(this.bM,b),this))},a)},Mua=function(a){(0,g.y)(a.C,function(b){this.A.unsubscribeByKey(b)},a);
a.C.length=0},a8=function(a,b){var c=a.B;
50>c.o.length+c.u.length&&a.B.u.push(b)},c8=function(a,b,c){var d=$7(a);
U7(d,c);-1E3!=d.playerState&&(d.playerState=b);b8(a,d)},d8=function(a,b,c){a.A.sendMessage(b,c)},b8=function(a,b){Mua(a);
a.A.setPlayerContextData(X7(b));Lua(a)},Y7=function(a,b){a.w&&(a.w.removeUpdateListener(a.H),a.w.removeMediaListener(a.F),a.ol(null));
a.w=b;a.w&&(i7("CP","Setting cast session: "+a.w.sessionId),a.w.addUpdateListener(a.H),a.w.addMediaListener(a.F),a.w.media.length&&a.ol(a.w.media[0]))},Nua=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=$7(a);b.contentId!=d.videoId&&i7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;U7(d,a.u.getEstimatedTime());b8(a,d)}else i7("CP","No cast media video. Ignoring state update.")},e8=function(a,b,c){return(0,g.x)(function(d){this.Rb("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Rb("Retrying "+b+" using MDx browser channel."),d8(this,b,c))},a)},f8=function(a,b,c){g.P.call(this);
this.B=NaN;this.J=!1;this.G=this.F=this.H=this.M=NaN;this.O=[];this.A=this.C=this.w=this.Sa=this.o=null;this.V=a;this.O.push(g.Cq(window,"beforeunload",(0,g.x)(this.ME,this)));this.u=[];this.Sa=new R7;this.T=b.id;this.o=Oua(this,c);this.o.subscribe("handlerOpened",this.kK,this);this.o.subscribe("handlerClosed",this.hK,this);this.o.subscribe("handlerError",this.iK,this);this.o.subscribe("handlerMessage",this.jK,this);aua(this.o,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Sa.videoId;
g.qs()&&g.os("yt-remote-session-video-id",d)},this)},g8=function(a){i7("conn",a)},Oua=function(a,b){return new c7(f7(a.V,"/bc"),b)},h8=function(a,b){a.R("proxyStateChange",b)},Pua=function(a){a.B=g.Go((0,g.x)(function(){g8("Connecting timeout");
this.Ai(1)},a),2E4)},i8=function(a){g.Io(a.B);
a.B=NaN},j8=function(a){g.Io(a.M);
a.M=NaN},Qua=function(a){k8(a);
a.H=g.Go((0,g.x)(function(){l8(this,"getNowPlaying")},a),2E4)},k8=function(a){g.Io(a.H);
a.H=NaN},Sua=function(a,b){b&&(i8(a),j8(a));
b==(d7(a.o)&&isNaN(a.B))?b&&(h8(a,1),l8(a,"getSubtitlesTrack")):b?(a.Tw()&&a.Sa.reset(),h8(a,1),l8(a,"getNowPlaying"),Rua(a)):a.Ai(1)},Tua=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Sa.videoId&&(g.Vb(b.params)?a.Sa.o=null:a.Sa.o=b.params,a.R("remotePlayerChange"))},Uua=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Sa.listId=b.params.listId||a.Sa.listId;W7(a.Sa,c,d);a.R("remoteQueueChange")},Wua=function(a,b){b.params=b.params||{};
Uua(a,b);Vua(a,b);a.R("autoplayDismissed")},Vua=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
U7(a.Sa,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Sa.playerState&&(c=-1E3);a.Sa.playerState=c;c=Number(b.params.loadedTime);a.Sa.H=isNaN(c)?0:c;c=Number(b.params.duration);a.Sa.G=isNaN(c)?0:c;c=a.Sa;var d=Number(b.params.liveIngestionTime);c.w=d;c.B=isNaN(d)?!1:!0;c=a.Sa;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.A=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.Sa.playerState?Qua(a):k8(a);a.R("remotePlayerChange")},Xua=function(a,b){if(-1E3!=
a.Sa.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Sa.playerState=c;c=parseInt(b.params.currentTime,10);U7(a.Sa,isNaN(c)?0:c);a.R("remotePlayerChange")}},Yua=function(a,b){var c="true"==b.params.muted;
a.Sa.volume=parseInt(b.params.volume,10);a.Sa.muted=c;a.R("remotePlayerChange")},Zua=function(a,b){a.C=b.params.videoId;
a.R("nowAutoplaying",parseInt(b.params.timeout,10))},$ua=function(a,b){var c="true"==b.params.hasNext;
a.Sa.ff="true"==b.params.hasPrevious;a.Sa.hasNext=c;a.R("previousNextChange")},Rua=function(a){g.Io(a.G);
a.G=g.Go((0,g.x)(a.Ai,a,1),864E5)},l8=function(a,b,c){c?g8("Sending: action="+b+", params="+g.Jk(c)):g8("Sending: action="+b);
a.o.sendMessage(b,c)},m8=function(a){m7.call(this,"ScreenServiceProxy");
this.ld=a;this.u=[];this.u.push(this.ld.$_s("screenChange",(0,g.x)(this.dP,this)));this.u.push(this.ld.$_s("onlineScreenChange",(0,g.x)(this.GL,this)))},eva=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.N("MDX_CONFIG")||b;Xsa();p6();n8||(n8=new e7(b?b.loungeApiHost:void 0),eta()&&(n8.o="/api/loungedev"));o8||(o8=g.w("yt.mdx.remote.deferredProxies_")||[],g.Ba("yt.mdx.remote.deferredProxies_",o8,void 0));ava();var c=p8();if(!c){var d=new v7(n8);g.Ba("yt.mdx.remote.screenService_",d,void 0);c=p8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);Fua(a,d,function(m){m?q8()&&Q7(q8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){c6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.w("yt.mdx.remote.initialized_")&&(g.Ba("yt.mdx.remote.initialized_",!0,void 0),r8("Initializing: "+g.Jk(b)),s8.push(g.No("yt-remote-cast2-availability-change",function(){c6("yt-remote-receiver-availability-change")})),s8.push(g.No("yt-remote-cast2-receiver-selected",function(){t8(null);
c6("yt-remote-auto-connect","cast-selector-receiver")})),s8.push(g.No("yt-remote-cast2-receiver-resumed",function(){c6("yt-remote-receiver-resumed","cast-selector-receiver")})),s8.push(g.No("yt-remote-cast2-session-change",bva)),s8.push(g.No("yt-remote-connection-change",function(m){m?Q7(q8(),"YouTube TV"):u8()||(Q7(null,null),Iua())})),a=v8(),b.isAuto&&(a.id+="#dial"),g.xp("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),r8(" -- with channel params: "+
g.Jk(a)),cva(a),c.start(),q8()||dva())},gva=function(){var a=fva();
N7()&&g.ps("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},fva=function(){var a=p8().ld.$_gos();
var b=w8();b&&x8()&&(j6(a,b)||a.push(b));return Wsa(a)},y8=function(){var a=hva();
!a&&N7()&&Hua()&&(a={key:"cast-selector-receiver",name:Hua()});return a},hva=function(){var a=fva(),b=w8();
b||(b=u8());return g.Sa(a,function(c){return b&&f6(b,c.key)?!0:!1})},w8=function(){var a=q8();
if(!a)return null;var b=p8().Yd();return k6(b,a)},bva=function(a){r8("remote.onCastSessionChange_: "+g6(a));
if(a){var b=w8();b&&b.id==a.id?Q7(b.id,"YouTube TV"):(b&&z8(),A8(a,1))}else x8()&&z8()},z8=function(){O7()?L7().stopSession():J7("stopSession called before API ready.");
var a=x8();a&&(a.disconnect(1),B8(null))},C8=function(){var a=x8();
return!!a&&3!=a.getProxyState()},r8=function(a){i7("remote",a)},p8=function(){if(!D8){var a=g.w("yt.mdx.remote.screenService_");
D8=a?new m8(a):null}return D8},q8=function(){return g.w("yt.mdx.remote.currentScreenId_")},iva=function(a){g.Ba("yt.mdx.remote.currentScreenId_",a,void 0)},jva=function(){return g.w("yt.mdx.remote.connectData_")},t8=function(a){g.Ba("yt.mdx.remote.connectData_",a,void 0)},x8=function(){return g.w("yt.mdx.remote.connection_")},B8=function(a){var b=x8();
t8(null);a||iva("");g.Ba("yt.mdx.remote.connection_",a,void 0);o8&&((0,g.y)(o8,function(c){c(a)}),o8.length=0);
b&&!a?c6("yt-remote-connection-change",!1):!b&&a&&c6("yt-remote-connection-change",!0)},u8=function(){var a=g.qs();
if(!a)return null;var b=p8().Yd();return k6(b,a)},A8=function(a,b){q8();
w8()&&w8();if(E8)F8=a;else{iva(a.id);var c=new f8(n8,a,v8());c.connect(b,jva());c.subscribe("beforeDisconnect",function(d){c6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){x8()&&(x8(),B8(null))});
B8(c)}},dva=function(){var a=u8();
a?(r8("Resume connection to: "+g6(a)),A8(a,0)):(q6(),Iua(),r8("Skipping connecting because no session screen found."))},ava=function(){var a=v8();
if(g.Vb(a)){a=o6();var b=g.ps("yt-remote-session-name")||"",c=g.ps("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ba("yt.mdx.remote.channelParams_",a,void 0)}},v8=function(){return g.w("yt.mdx.remote.channelParams_")||{}},cva=function(a){a?(g.os("yt-remote-session-app",a.app),g.os("yt-remote-session-name",a.name)):(l6("yt-remote-session-app"),l6("yt-remote-session-name"));
g.Ba("yt.mdx.remote.channelParams_",a,void 0)},G8=function(a,b,c){g.A.call(this);
this.B=a;this.u=b;this.w=new g.qr(this);g.B(this,this.w);this.w.L(b,"onCaptionsTrackListChanged",this.cL);this.w.L(b,"captionschanged",this.eK);this.w.L(b,"captionssettingschanged",this.KB);this.w.L(b,"videoplayerreset",this.Ao);this.w.L(b,"mdxautoplaycancel",this.DD);this.T=this.w.L(b,"onVolumeChange",this.bA);this.G=!1;this.o=c;c.subscribe("proxyStateChange",this.qA,this);c.subscribe("remotePlayerChange",this.rl,this);c.subscribe("remoteQueueChange",this.Ao,this);c.subscribe("autoplayUpNext",this.Rz,
this);c.subscribe("previousNextChange",this.nA,this);c.subscribe("nowAutoplaying",this.jA,this);c.subscribe("autoplayDismissed",this.Qz,this);this.suggestion=null;this.H=new g.mD(64);this.A=new g.L(this.GB,500,this);g.B(this,this.A);this.C=new g.L(this.HB,1E3,this);g.B(this,this.C);this.J=new a7(this.FO,0,this);g.B(this,this.J);this.F={};this.O=new g.L(this.lC,1E3,this);g.B(this,this.O);this.M=new v6(this.GH,1E3,this);g.B(this,this.M);this.V=g.Ca;this.KB();this.Ao();this.rl()},H8=function(a,b){var c=
a.B,d=a.u.getVideoData().lengthSeconds;
c.O=b||0;c.player.R("progresssync",b,d)},kva=function(a){H8(a,0);
a.A.stop();I8(a,new g.mD(64))},K8=function(a,b){if(J8(a)&&!a.G){var c=null;
b&&(c={style:a.u.getSubtitlesUserSettings()},g.ac(c,b));a.o.vB(a.u.getVideoData(1).videoId,c);a.F=$7(a.o).o}},L8=function(a,b){var c=a.u.getPlaylist();
if(c){var d=c.Wa;var e=c.listId.toString()}c=a.u.getVideoData(1);a.o.playVideo(c.videoId,b,d,e,c.playerParams,c.hf,g.vB(c));I8(a,new g.mD(1))},lva=function(a,b){if(b){var c=a.u.getOption("captions","tracklist",{ZS:1});
c&&c.length?(a.u.setOption("captions","track",b),a.G=!1):(a.u.loadModule("captions"),a.G=!0)}else a.u.setOption("captions","track",{})},J8=function(a){return $7(a.o).videoId==a.u.getVideoData(1).videoId},I8=function(a,b){a.C.stop();
var c=a.H;if(!g.sD(c,b)){var d=g.V(b,2);d!=g.V(a.H,2)&&g.VS(a.u.app,d);a.H=b;mva(a.B,c,b)}},M8=function(){g.U.call(this,{D:"div",
I:"ytp-mdx-popup-dialog",N:{role:"dialog"},K:[{D:"div",I:"ytp-mdx-popup-dialog-inner-content",K:[{D:"div",I:"ytp-mdx-popup-title",W:"You're signed out"},{D:"div",I:"ytp-mdx-popup-description",W:"Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",I:"ytp-mdx-privacy-popup-buttons",K:[{D:"button",X:["ytp-button","ytp-mdx-privacy-popup-cancel"],W:"Cancel"},{D:"button",X:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],W:"Confirm"}]}]}]});this.u=new g.ZL(this,250);g.B(this,this.u);this.C=this.o["ytp-mdx-privacy-popup-cancel"];this.L(this.C,"click",this.w);this.A=this.o["ytp-mdx-privacy-popup-confirm"];this.L(this.A,"click",this.B)},N8=function(a){g.U.call(this,{D:"div",
I:"ytp-remote",K:[{D:"div",I:"ytp-remote-display-status",K:[{D:"div",I:"ytp-remote-display-status-icon",K:[g.aM()]},{D:"div",I:"ytp-remote-display-status-text",W:"{{statustext}}"}]}]});this.u=new g.ZL(this,250);g.B(this,this.u);this.w=a;this.L(a,"presentingplayerstatechange",this.A);nva(this,g.nL(a))},nva=function(a,b){if(3==a.w.getPresentingPlayerType()){var c={RECEIVER_NAME:a.w.getOption("remote","currentReceiver").name};
c=g.V(b,128)?g.EM("Error on $RECEIVER_NAME",c):g.tD(b)||g.V(b,4)?g.EM("Playing on $RECEIVER_NAME",c):g.EM("Connected to $RECEIVER_NAME",c);a.ia("statustext",c);a.u.show()}else a.u.hide()},O8=function(a,b){g.lO.call(this,"Play on",0,a,b);
this.u=a;this.C={};this.L(a,"onMdxReceiversChange",this.J);this.L(a,"presentingplayerstatechange",this.J);this.J()},P8=function(a){g.uP.call(this,a);
this.u={key:i6(),name:"This computer"};this.B=null;this.A=[];this.T=this.o=null;this.M=[this.u];this.w=this.u;this.F=new g.mD(64);this.O=0;this.H=-1;this.C=null;if(!g.Hx(this.player.P())){a=this.player;var b=g.TC(a);b&&(b=b.Zk())&&(b=new O8(a,b),g.B(this,b));b=new N8(a);g.B(this,b);g.FL(a,b.element,4);this.C=new M8;g.B(this,this.C);g.FL(a,this.C.element,4);this.J=!!u8()}this.G=null},Q8=function(a){a.G&&(a.player.removeEventListener("presentingplayerstatechange",a.G),a.G=null)},mva=function(a,b,c){a.F=
c;
a.player.R("presentingplayerstatechange",new g.yD(c,b))},R8=function(a,b){if(b.key!=a.w.key)if(b.key==a.u.key)z8();
else{var c;(c=!g.Q(a.player.P().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.N("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.N("SESSION_INDEX")&&!g.N("LOGGED_IN")))||a.J||!a.C);if(c?0:g.Qx(a.player.P())||"WEB_EMBEDDED_PLAYER"==a.player.P().deviceParams.c)g.tD(g.nL(a.player))?a.player.pauseVideo():(a.G=(0,g.x)(a.yN,a),a.player.addEventListener("presentingplayerstatechange",a.G)),a.C&&a.C.u.show(),x8()||(E8=!0);a.w=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);
var e=c.videoId;if(!d&&!e||(2==a.player.app.V||1==a.player.app.V)&&g.Q(a.player.P().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.xa(l).videoId}else k=[e];f=a.player.getCurrentTime(1);d={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.hf,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(c=g.vB(c))&&(d.locationInfo=c);c=d}r8("Connecting to: "+
g.Jk(b));"cast-selector-receiver"==b.key?(t8(c||null),c=c||null,O7()?L7().setLaunchParams(c):J7("setLaunchParams called before ready.")):!c&&C8()&&q8()==b.key?c6("yt-remote-connection-change",!0):(z8(),t8(c||null),c=p8().Yd(),(c=k6(c,b.key))&&A8(c,1))}},uta={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},F6={"'":"\\'"},ova={},Ssa={GP:"atp",kS:"ska",ZR:"que",tR:"mus",jS:"sus",FQ:"dsp",gS:"seq"};
d6.prototype.xg=function(){var a=new d6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.w=this.w;a.u=this.u;a.o=this.o};
var r6,n6="",jta=fta("loadCastFramework")||fta("loadCastApplicationFramework"),Eua=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];u6.prototype.o=null;u6.prototype.getOptions=function(){var a;(a=this.o)||(a={},nta(this)&&(a[0]=!0,a[1]=!0),a=this.o=a);return a};var S8;g.Na(mta,u6);S8=new mta;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Na(v6,g.A);g.h=v6.prototype;g.h.Hi=!1;g.h.rk=0;g.h.Ga=null;g.h.dx=function(a){this.o=arguments;this.Ga||this.rk?this.Hi=!0:w6(this)};
g.h.stop=function(){this.Ga&&(g.v.clearTimeout(this.Ga),this.Ga=null,this.Hi=!1,this.o=[])};
g.h.pause=function(){this.rk++};
g.h.resume=function(){this.rk--;this.rk||!this.Hi||this.Ga||(this.Hi=!1,w6(this))};
g.h.Y=function(){v6.Db.Y.call(this);this.stop()};
g.h.KE=function(){this.Ga=null;this.Hi&&!this.rk&&(this.Hi=!1,w6(this))};g.h=x6.prototype;g.h.Bh=null;g.h.Qe=!1;g.h.Ij=null;g.h.ru=null;g.h.vj=null;g.h.Ii=null;g.h.sg=null;g.h.Yg=null;g.h.Wh=null;g.h.Fc=null;g.h.Vl=0;g.h.Ue=null;g.h.jp=null;g.h.Dg=null;g.h.uk=-1;g.h.pB=!0;g.h.kh=!1;g.h.Xq=0;g.h.Fo=null;var sta={},A6={};g.h=x6.prototype;g.h.setTimeout=function(a){this.B=a};
g.h.KN=function(a){a=a.target;var b=this.Fo;b&&3==Q6(a)?b.dx():this.tC(a)};
g.h.tC=function(a){try{if(a==this.Fc)a:{var b=Q6(this.Fc),c=this.Fc.C,d=this.Fc.getStatus();if(g.Id&&!g.md(10)||g.Kd&&!g.ld("420+")){if(4>b)break a}else if(3>b||3==b&&!g.sh&&!S6(this.Fc))break a;this.kh||4!=b||7==c||(8==c||0>=d?this.o.Pe(3):this.o.Pe(2));H6(this);var e=this.Fc.getStatus();this.uk=e;var f=S6(this.Fc);(this.Qe=200==e)?(4==b&&D6(this),this.C?(tta(this,b,f),g.sh&&this.Qe&&3==b&&(this.A.ha(this.u,"tick",this.EN),this.u.start())):C6(this,f),this.Qe&&!this.kh&&(4==b?this.o.xo(this):(this.Qe=
!1,z6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Dg=3,B6(13)):(this.Dg=0,B6(14)),D6(this),E6(this))}}catch(k){this.Fc&&S6(this.Fc)}finally{}};
g.h.EN=function(){var a=Q6(this.Fc),b=S6(this.Fc);this.Vl<b.length&&(H6(this),tta(this,a,b),this.Qe&&4!=a&&z6(this))};
g.h.eN=function(a){G6((0,g.x)(this.dN,this,a),0)};
g.h.dN=function(a){this.kh||(H6(this),C6(this,a),z6(this))};
g.h.xA=function(a){G6((0,g.x)(this.cN,this,a),0)};
g.h.cN=function(a){this.kh||(D6(this),this.Qe=a,this.o.xo(this),this.o.Pe(4))};
g.h.cancel=function(){this.kh=!0;D6(this)};
g.h.lN=function(){this.Ij=null;var a=(0,g.H)();0<=a-this.ru?(2!=this.Ii&&this.o.Pe(3),D6(this),this.Dg=2,B6(18),E6(this)):wta(this,this.ru-a)};
g.h.getLastError=function(){return this.Dg};J6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
J6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};g.h=zta.prototype;g.h.Vq=null;g.h.Ld=null;g.h.Go=!1;g.h.fx=null;g.h.Wm=null;g.h.Hr=null;g.h.Wq=null;g.h.ue=null;g.h.Tf=-1;g.h.tk=null;g.h.Vj=null;g.h.connect=function(a){this.Wq=a;a=K6(this.o,null,this.Wq);B6(3);this.fx=(0,g.H)();var b=this.o.G;null!=b?(this.tk=b[0],(this.Vj=b[1])?(this.ue=1,Ata(this)):(this.ue=2,M6(this))):($5(a,"MODE","init"),this.Ld=new x6(this,void 0,void 0,void 0),this.Ld.Bh=this.Vq,y6(this.Ld,a,!1,null,!0),this.ue=0)};
g.h.ED=function(a){if(a)this.ue=2,M6(this);else{B6(4);var b=this.o;b.df=b.wg.Tf;Z6(b,9)}a&&this.Pe(2)};
g.h.qq=function(a){return this.o.qq(a)};
g.h.abort=function(){this.Ld&&(this.Ld.cancel(),this.Ld=null);this.Tf=-1};
g.h.ex=function(){return!1};
g.h.rA=function(a,b){this.Tf=a.uk;if(0==this.ue)if(b){try{var c=this.u.parse(b)}catch(d){c=this.o;c.df=this.Tf;Z6(c,2);return}this.tk=c[0];this.Vj=c[1]}else c=this.o,c.df=this.Tf,Z6(c,2);else if(2==this.ue)if(this.Go)B6(7),this.Hr=(0,g.H)();else if("11111"==b){if(B6(6),this.Go=!0,this.Wm=(0,g.H)(),c=this.Wm-this.fx,!g.Id||g.md(10)||500>c)this.Tf=200,this.Ld.cancel(),B6(12),L6(this.o,this,!0)}else B6(8),this.Wm=this.Hr=(0,g.H)(),this.Go=!1};
g.h.xo=function(){this.Tf=this.Ld.uk;if(this.Ld.Qe)0==this.ue?this.Vj?(this.ue=1,Ata(this)):(this.ue=2,M6(this)):2==this.ue&&((!g.Id||g.md(10)?!this.Go:200>this.Hr-this.Wm)?(B6(11),L6(this.o,this,!1)):(B6(12),L6(this.o,this,!0)));else{0==this.ue?B6(9):2==this.ue&&B6(10);var a=this.o;this.Ld.getLastError();a.df=this.Tf;Z6(a,2)}};
g.h.Hl=function(){return this.o.Hl()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Pe=function(a){this.o.Pe(a)};g.Na(O6,g.He);var Fta=/^https?$/i,pva=["POST","PUT"];g.h=O6.prototype;
g.h.send=function(a,b,c,d){if(this.o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET";this.H=a;this.A="";this.C=0;this.ga=b;this.V=!1;this.w=!0;this.o=this.T?ota(this.T):ota(S8);this.O=this.T?this.T.getOptions():S8.getOptions();this.o.onreadystatechange=(0,g.x)(this.gx,this);try{b6(R6(this,"Opening Xhr")),this.Z=!0,this.o.open(b,String(a),!0),this.Z=!1}catch(f){b6(R6(this,"Error opening Xhr: "+f.message));Eta(this,f);return}a=c||
"";var e=this.headers.clone();d&&Osa(d,function(f,k){e.set(k,f)});
d=g.Sa(e.re(),Cta);c=g.v.FormData&&a instanceof g.v.FormData;!g.Va(pva,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.o.setRequestHeader(k,f)},this);
this.ea&&(this.o.responseType=this.ea);"withCredentials"in this.o&&this.o.withCredentials!==this.U&&(this.o.withCredentials=this.U);try{Hta(this),0<this.F&&(this.J=Bta(this.o),b6(R6(this,"Will abort after "+this.F+"ms if incomplete, xhr2 "+this.J)),this.J?(this.o.timeout=this.F,this.o.ontimeout=(0,g.x)(this.hx,this)):this.M=g.wf(this.hx,this.F,this)),b6(R6(this,"Sending request")),this.G=!0,this.o.send(a),this.G=!1}catch(f){b6(R6(this,"Send error: "+f.message)),Eta(this,f)}};
g.h.hx=function(){"undefined"!=typeof g.E1&&this.o&&(this.A="Timed out after "+this.F+"ms, aborting",this.C=8,R6(this,this.A),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.o&&this.w&&(R6(this,"Aborting"),this.w=!1,this.B=!0,this.o.abort(),this.B=!1,this.C=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),P6(this))};
g.h.Y=function(){this.o&&(this.w&&(this.w=!1,this.B=!0,this.o.abort(),this.B=!1),P6(this,!0));O6.Db.Y.call(this)};
g.h.gx=function(){this.la()||(this.Z||this.G||this.B?Gta(this):this.dM())};
g.h.dM=function(){Gta(this)};
g.h.isActive=function(){return!!this.o};
g.h.getStatus=function(){try{return 2<Q6(this)?this.o.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return"string"===typeof this.A?this.A:String(this.A)};g.h=T6.prototype;g.h.gk=null;g.h.Fd=null;g.h.Zb=null;g.h.Uq=null;g.h.Ym=null;g.h.Dv=null;g.h.nn=null;g.h.kl=0;g.h.yJ=0;g.h.jd=null;g.h.Ag=null;g.h.Hf=null;g.h.ph=null;g.h.wg=null;g.h.hp=null;g.h.Vi=-1;g.h.Rx=-1;g.h.df=-1;g.h.Bi=0;g.h.ti=0;g.h.lh=8;var $6=new g.He;g.Na(Jta,g.je);g.Na(Kta,g.je);g.Na(Lta,g.je);g.h=T6.prototype;g.h.connect=function(a,b,c,d,e){B6(0);this.Uq=b;this.gk=c||{};d&&void 0!==e&&(this.gk.OSID=d,this.gk.OAID=e);this.C?(G6((0,g.x)(this.Vv,this,a),100),Pta(this)):this.Vv(a)};
g.h.Vv=function(a){this.wg=new zta(this);this.wg.Vq=null;this.wg.u=this.B;this.wg.connect(a)};
g.h.ex=function(){return 0==this.o};
g.h.wA=function(a){this.Ag=null;Sta(this,a)};
g.h.vA=function(){this.Hf=null;this.Zb=new x6(this,this.w,"rpc",this.F);this.Zb.Bh=null;this.Zb.Xq=0;var a=this.Dv.clone();Y5(a,"RID","rpc");Y5(a,"SID",this.w);Y5(a,"CI",this.hp?"0":"1");Y5(a,"AID",this.Vi);U6(this,a);if(!g.Id||g.md(10))Y5(a,"TYPE","xmlhttp"),y6(this.Zb,a,!0,this.nn,!1);else{Y5(a,"TYPE","html");var b=this.Zb,c=!!this.nn;b.Ii=3;b.sg=Z5(a.clone());vta(b,c)}};
g.h.rA=function(a,b){if(0!=this.o&&(this.Zb==a||this.Fd==a))if(this.df=a.uk,this.Fd==a&&3==this.o)if(7<this.lh){try{var c=this.B.parse(b)}catch(f){c=null}if(g.Fa(c)&&3==c.length)if(0==c[0])a:{if(!this.Hf){if(this.Zb)if(this.Zb.vj+3E3<this.Fd.vj)W6(this),this.Zb.cancel(),this.Zb=null;else break a;Y6(this);B6(19)}}else this.Rx=c[1],0<this.Rx-this.Vi&&37500>c[2]&&this.hp&&0==this.ti&&!this.ph&&(this.ph=G6((0,g.x)(this.aK,this),6E3));else Z6(this,11)}else b!=ova.dQ.o&&Z6(this,11);else if(this.Zb==a&&
W6(this),!g.ub(b)){c=this.B.parse(b);g.Fa(c);for(var d=0;d<c.length;d++){var e=c[d];this.Vi=e[0];e=e[1];2==this.o?"c"==e[0]?(this.w=e[1],this.nn=e[2],e=e[3],null!=e?this.lh=e:this.lh=6,this.o=3,this.jd&&this.jd.Rv(),this.Dv=K6(this,this.Hl()?this.nn:null,this.Uq),Tta(this)):"stop"==e[0]&&Z6(this,7):3==this.o&&("stop"==e[0]?Z6(this,7):"noop"!=e[0]&&this.jd&&this.jd.Qv(e),this.ti=0)}}};
g.h.aK=function(){null!=this.ph&&(this.ph=null,this.Zb.cancel(),this.Zb=null,Y6(this),B6(20))};
g.h.xo=function(a){if(this.Zb==a){W6(this);this.Zb=null;var b=2}else if(this.Fd==a)this.Fd=null,b=1;else return;this.df=a.uk;if(0!=this.o)if(a.Qe)1==b?(b=(0,g.H)()-a.vj,$6.dispatchEvent(new Kta($6,a.Wh?a.Wh.length:0,b,this.Bi)),V6(this),this.A.length=0):Tta(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.df)){if(d=1==b)this.Fd||this.Ag||1==this.o||2<=this.Bi?d=!1:(this.Ag=G6((0,g.x)(this.wA,this,a),Uta(this,this.Bi)),this.Bi++,d=!0);d=!(d||2==b&&Y6(this))}if(d)switch(c){case 1:Z6(this,
5);break;case 4:Z6(this,10);break;case 3:Z6(this,6);break;case 7:Z6(this,12);break;default:Z6(this,2)}}};
g.h.cE=function(a){if(!g.Va(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.vO=function(a){a?B6(2):(B6(1),Vta(this,8))};
g.h.qq=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new O6;a.U=!1;return a};
g.h.isActive=function(){return!!this.jd&&this.jd.isActive(this)};
g.h.Pe=function(a){$6.dispatchEvent(new Lta($6,a))};
g.h.Hl=function(){return!(!g.Id||g.md(10))};
g.h=Wta.prototype;g.h.Rv=function(){};
g.h.Qv=function(){};
g.h.Pv=function(){};
g.h.iq=function(){};
g.h.Cw=function(){return{}};
g.h.isActive=function(){return!0};g.Na(a7,g.A);g.h=a7.prototype;g.h.IE=function(a){this.A=arguments;this.o=!1;this.Ga?this.w=(0,g.H)()+this.md:this.Ga=g.wf(this.B,this.md)};
g.h.stop=function(){this.Ga&&(g.v.clearTimeout(this.Ga),this.Ga=null);this.w=null;this.o=!1;this.A=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.o&&(this.o=!1,this.C.apply(null,this.A)))};
g.h.Y=function(){this.stop();a7.Db.Y.call(this)};
g.h.JE=function(){this.w?(this.Ga=g.wf(this.B,this.w-(0,g.H)()),this.w=null):(this.Ga=null,this.u?this.o=!0:(this.o=!1,this.C.apply(null,this.A)))};g.h=Xta.prototype;g.h.isEmpty=function(){return g.Wa(this.o)&&g.Wa(this.u)};
g.h.clear=function(){this.o=[];this.u=[]};
g.h.contains=function(a){return g.Va(this.o,a)||g.Va(this.u,a)};
g.h.remove=function(a){var b=this.o;var c=(0,g.goa)(b,a);0<=c?(g.Ya(b,c),b=!0):b=!1;return b||g.$a(this.u,a)};
g.h.zd=function(){for(var a=[],b=this.o.length-1;0<=b;--b)a.push(this.o[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Na(b7,g.A);g.h=b7.prototype;g.h.VM=function(){this.md=Math.min(3E5,2*this.md);this.w();this.u&&this.start()};
g.h.start=function(){var a=this.md+15E3*Math.random();g.Pn(this.o,a);this.u=(0,g.H)()+a};
g.h.stop=function(){this.o.stop();this.u=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.md=5E3};g.Na(c7,Wta);g.h=c7.prototype;g.h.subscribe=function(a,b,c){return this.w.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.w.unsubscribe(a,b,c)};
g.h.fg=function(a){return this.w.Ch(a)};
g.h.R=function(a,b){return this.w.R.apply(this.w,arguments)};
g.h.dispose=function(){this.tb||(this.tb=!0,g.he(this.w),$ta(this),g.he(this.u),this.u=null)};
g.h.la=function(){return this.tb};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.H="";this.u.stop();this.B=a||null;this.A=b||0;a=this.M+"/test";b=this.M+"/bind";var d=new T6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.J),e=this.o;e&&(e.jd=null);d.jd=this;this.o=d;e?this.o.connect(a,b,this.C,e.w,e.Vi):c?this.o.connect(a,b,this.C,c.sessionId,c.arrayId):this.o.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.ac(c,b);this.u.isActive()||2==(this.o?this.o.o:0)?this.F.push(c):d7(this)&&Qta(this.o,c)};
g.h.Rv=function(){this.u.reset();this.B=null;this.A=0;if(this.F.length){var a=this.F;this.F=[];for(var b=0,c=a.length;b<c;++b)Qta(this.o,a[b])}this.R("handlerOpened")};
g.h.Pv=function(a){var b=2==a&&401==this.o.df;4==a||b||this.u.start();this.R("handlerError",a)};
g.h.iq=function(a){if(!this.u.isActive())this.R("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.F.push(d)}};
g.h.Cw=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.G&&(a.ui=""+this.G);this.B&&g.ac(a,this.B);return a};
g.h.Qv=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),Ota(this.o)):this.R("handlerMessage",new Yta(a[0],a[1]))};
g.h.ZN=function(){this.u.isActive();var a=this.o,b=0;a.Zb&&b++;a.Fd&&b++;0==b&&this.connect(this.B,this.A)};e7.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
e7.prototype.w=function(a,b){a(Error("Request error: "+b.status))};
e7.prototype.B=function(a){a(Error("request timed out"))};var hua=(0,g.H)(),h7=null,k7=Array(50),j7=-1,l7=!1;g.Na(m7,g.P);m7.prototype.Yd=function(){return this.o};
m7.prototype.contains=function(a){return!!j6(this.o,a)};
m7.prototype.get=function(a){return a?k6(this.o,a):null};
m7.prototype.info=function(a){i7(this.F,a)};g.r(n7,g.P);g.h=n7.prototype;g.h.start=function(){!this.o&&isNaN(this.Ga)&&this.xC()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.Ga)||(g.Io(this.Ga),this.Ga=NaN)};
g.h.Y=function(){this.stop();g.P.prototype.Y.call(this)};
g.h.xC=function(){this.Ga=NaN;this.o=g.Hp(f7(this.C,"/pairing/get_screen"),{method:"POST",yb:{pairing_code:this.A},timeout:5E3,onSuccess:(0,g.x)(this.bP,this),onError:(0,g.x)(this.aP,this),Hd:(0,g.x)(this.cP,this)})};
g.h.bP=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.B;c.name=this.w;this.R("pairingComplete",new e6(c))};
g.h.aP=function(a){this.o=null;a.status&&404==a.status?this.u>=qva.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=qva[this.u],this.Ga=g.Go((0,g.x)(this.xC,this),a),this.u++):this.R("pairingFailed",Error("Server error "+a.status))};
g.h.cP=function(){this.o=null;this.R("pairingFailed",Error("Server not responding"))};
var qva=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Na(p7,m7);g.h=p7.prototype;g.h.start=function(){o7(this)&&this.R("screenChange");!g.ps("yt-remote-lounge-token-expiration")&&lua(this);g.Io(this.u);this.u=g.Go((0,g.x)(this.start,this),1E4)};
g.h.add=function(a,b){o7(this);iua(this,a);q7(this,!1);this.R("screenChange");b(a);a.token||lua(this)};
g.h.remove=function(a,b){var c=o7(this);kua(this,a)&&(q7(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.h.ep=function(a,b,c,d){var e=o7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,q7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.h.Y=function(){g.Io(this.u);p7.Db.Y.call(this)};
g.h.TE=function(a){o7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}q7(this,!b);b&&i7(this.F,"Missed "+b+" lounge tokens.")};
g.h.SE=function(a){i7(this.F,"Requesting lounge tokens failed: "+a)};g.r(s7,g.P);g.h=s7.prototype;g.h.start=function(){var a=parseInt(g.ps("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.H)()-144E5<a?0:a)?u7(this):(this.A=(0,g.H)()+3E5,g.os("yt-remote-fast-check-period",this.A),this.Gt())};
g.h.isEmpty=function(){return g.Vb(this.o)};
g.h.update=function(){r7("Updating availability on schedule.");var a=this.C(),b=g.Jb(this.o,function(c,d){return c&&!!k6(a,d)},this);
t7(this,b)};
g.h.Y=function(){g.Io(this.w);this.w=NaN;this.u&&(this.u.abort(),this.u=null);g.P.prototype.Y.call(this)};
g.h.Gt=function(){g.Io(this.w);this.w=NaN;this.u&&this.u.abort();var a=oua(this);if(a6(a)){var b=f7(this.B,"/pairing/get_screen_availability");this.u=g7(this.B,b,{lounge_token:g.Pb(a).join(",")},(0,g.x)(this.zM,this,a),(0,g.x)(this.yM,this))}else t7(this,{}),u7(this)};
g.h.zM=function(a,b){this.u=null;var c=g.Pb(oua(this));if(g.ob(c,g.Pb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;t7(this,d);u7(this)}else this.Rb("Changing Screen set during request."),this.Gt()};
g.h.yM=function(a){this.Rb("Screen availability failed: "+a);this.u=null;u7(this)};
g.h.Rb=function(a){i7("OnlineScreenService",a)};g.Na(v7,m7);g.h=v7.prototype;g.h.start=function(){this.w.start();this.u.start();this.o.length&&(this.R("screenChange"),this.u.isEmpty()||this.R("onlineScreenChange"))};
g.h.add=function(a,b,c){this.w.add(a,b,c)};
g.h.remove=function(a,b,c){this.w.remove(a,b,c);this.u.update()};
g.h.ep=function(a,b,c,d){this.w.contains(a)?this.w.ep(a,b,c,d):(a="Updating name of unknown screen: "+a.name,i7(this.F,a),d(Error(a)))};
g.h.Yd=function(a){return a?this.o:g.cb(this.o,(0,g.Vd)(this.A,function(b){return!this.contains(b)},this))};
g.h.yC=function(){return(0,g.Vd)(this.Yd(!0),function(a){return!!this.u.o[a.id]},this)};
g.h.zC=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new n7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(k){g.he(f);d(w7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.he(f);e(k)});
f.start();return(0,g.x)(f.stop,f)};
g.h.eP=function(a,b,c,d){g.Hp(f7(this.C,"/pairing/get_screen"),{method:"POST",yb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var k=new e6(f.screen||{});if(!k.name||sua(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);sua(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c(w7(this,k))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
Hd:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.h.Y=function(){g.he(this.w);g.he(this.u);v7.Db.Y.call(this)};
g.h.bF=function(){tua(this);this.R("screenChange");this.u.update()};
v7.prototype.dispose=v7.prototype.dispose;g.Na(y7,g.P);g.h=y7.prototype;g.h.zo=function(a){this.w=a;this.R("sessionScreen",this.w)};
g.h.fe=function(a){this.la()||(a&&z7(this,""+a),this.w=null,this.R("sessionScreen",null))};
g.h.info=function(a){i7(this.O,a)};
g.h.BC=function(){return null};
g.h.Pt=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){z7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.Y=function(){this.Pt("");y7.Db.Y.call(this)};g.Na(A7,y7);g.h=A7.prototype;g.h.Ot=function(a){if(this.o){if(this.o==a)return;z7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.C);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.o=a;this.o.addUpdateListener(this.C);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);vua(this)};
g.h.Wi=function(a){this.info("launchWithParams no-op for Cast: "+g.Jk(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.x)(function(){this.fe()},this),(0,g.x)(function(){this.fe(Error("Failed to stop receiver app."))},this)):this.fe(Error("Stopping cast device witout session."))};
g.h.Pt=g.Ca;g.h.Y=function(){this.info("disposeInternal");g.Io(this.A);this.A=0;this.o&&(this.o.removeUpdateListener(this.C),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.o=null;A7.Db.Y.call(this)};
g.h.tN=function(a,b){if(!this.la())if(b){var c=N6(b);if(g.Ia(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Jk(c));switch(d){case "mdxSessionStatus":uua(this,c.screenId);break;default:z7(this,"Unknown youtube message: "+d)}}else z7(this,"Unable to parse message.")}else z7(this,"No data in message.")};
g.h.Vw=function(a,b,c,d){rua(this.H,this.u.label,a,this.u.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(z7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Go((0,g.x)(this.Vw,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.BC=function(){return this.o};
g.h.fP=function(a){this.la()||a||(z7(this,"Cast session died."),this.fe())};g.Na(B7,y7);g.h=B7.prototype;g.h.Ot=function(a){this.A=a;this.A.addUpdateListener(this.J)};
g.h.Wi=function(a){this.B=a;this.F()};
g.h.stop=function(){this.o();this.o=g.Ca;g.Io(this.C);this.A?this.A.stop((0,g.x)(this.fe,this,null),(0,g.x)(this.fe,this,"Failed to stop DIAL device.")):this.fe()};
g.h.Y=function(){this.o();this.o=g.Ca;g.Io(this.C);this.A&&this.A.removeUpdateListener(this.J);this.A=null;B7.Db.Y.call(this)};
g.h.iP=function(a){this.la()||a||(z7(this,"DIAL session died."),this.o(),this.o=g.Ca,this.fe())};
g.h.mr=function(a){this.M=i6();if(this.B){var b=new chrome.cast.DialLaunchResponse(!0,xua(this));a(b);wua(this)}else this.F=(0,g.x)(function(){g.Io(this.C);this.F=g.Ca;this.C=NaN;var c=new chrome.cast.DialLaunchResponse(!0,xua(this));a(c);wua(this)},this),this.C=g.Go((0,g.x)(function(){this.F()},this),100)};
g.h.uF=function(a,b,c){rua(this.H,this.G.receiver.label,a,this.u.friendlyName,(0,g.x)(function(d){d&&d.token?(this.zo(d),b(new chrome.cast.DialLaunchResponse(!1))):this.mr(b,c)},this),(0,g.x)(function(d){z7(this,"Failed to get DIAL screen: "+d);
this.mr(b,c)},this))};g.Na(C7,y7);C7.prototype.stop=function(){this.fe()};
C7.prototype.Ot=g.Ca;C7.prototype.Wi=function(){g.Io(this.o);this.o=NaN;var a=k6(this.H.Yd(),this.u.label);a?this.zo(a):this.fe(Error("No such screen"))};
C7.prototype.Y=function(){g.Io(this.o);this.o=NaN;C7.Db.Y.call(this)};g.Na(D7,g.P);g.h=D7.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.F);this.G||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.iM,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.tA,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.yK,this);chrome.cast.initialize(c,(0,g.x)(function(){this.la()||
(chrome.cast.addReceiverActionListener(this.A),eua(),this.u.subscribe("onlineScreenChange",(0,g.x)(this.AC,this)),this.w=zua(this),chrome.cast.setCustomReceivers(this.w,g.Ca,(0,g.x)(function(k){this.Rb("Failed to set initial custom receivers: "+g.Jk(k))},this)),this.R("yt-remote-cast2-availability-change",F7(this)),b(!0))},this),(0,g.x)(function(k){this.Rb("Failed to initialize API: "+g.Jk(k));
b(!1)},this))};
g.h.hO=function(a,b){E7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.w;if(!a||c&&c.id!=a)E7("Unsetting old screen status: "+this.o.u.friendlyName),G7(this,null)}if(a&&b){if(!this.o){c=k6(this.u.Yd(),a);if(!c){E7("setConnectedScreenStatus: Unknown screen.");return}var d=yua(this,c);d||(E7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.w.push(d),chrome.cast.setCustomReceivers(this.w,
g.Ca,(0,g.x)(function(e){this.Rb("Failed to set initial custom receivers: "+g.Jk(e))},this)));
E7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);G7(this,new C7(this.u,d),!0)}this.o.Pt(b)}else E7("setConnectedScreenStatus: no screen.")};
g.h.iO=function(a){this.la()?this.Rb("Setting connection data on disposed cast v2"):this.o?this.o.Wi(a):this.Rb("Setting connection data without a session")};
g.h.hP=function(){this.la()?this.Rb("Stopping session on disposed cast v2"):this.o?(this.o.stop(),G7(this,null)):E7("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.tA,this),(0,g.x)(this.DM,this))};
g.h.Y=function(){this.u.unsubscribe("onlineScreenChange",(0,g.x)(this.AC,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.A);var a=bua,b=g.w("yt.mdx.remote.debug.handlers_");g.$a(b||[],a);g.he(this.o);D7.Db.Y.call(this)};
g.h.Rb=function(a){i7("Controller",a)};
g.h.uA=function(a,b){this.o==a&&(b||G7(this,null),this.R("yt-remote-cast2-session-change",b))};
g.h.eM=function(a,b){if(!this.la())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),E7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.u.label!=a.label)E7("onReceiverAction_: Stopping active receiver: "+this.o.u.friendlyName),this.o.stop();else{E7("onReceiverAction_: Casting to active receiver.");this.o.w&&this.R("yt-remote-cast2-session-change",this.o.w);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:G7(this,
new C7(this.u,a));break;case chrome.cast.ReceiverType.DIAL:G7(this,new B7(this.u,a,this.C));break;case chrome.cast.ReceiverType.CAST:G7(this,new A7(this.u,a));break;default:this.Rb("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.u.label==a.label?this.o.stop():this.Rb("Stopping receiver w/o session: "+a.friendlyName)}else this.Rb("onReceiverAction_ called without receiver.")};
g.h.yK=function(a){if(this.la())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Rb("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.u:null;if(!c||c.label!=b.label)return this.Rb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.w)return E7("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.o.w),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Rb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);G7(this,new B7(this.u,b,this.C))}b=this.o;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.uF,b,(b.G.extraData||{}).screenId||null)):new Promise((0,g.x)(b.mr,b))};
g.h.tA=function(a){if(!this.la()){E7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)E7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),G7(this,new A7(this.u,b),!0);else{this.Rb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.u,d=k6(this.u.Yd(),c.label);d&&f6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(E7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.he(this.o),this.o=new A7(this.u,b),this.o.subscribe("sessionScreen",(0,g.x)(this.uA,this,this.o)),this.o.Wi(null));this.o.Ot(a)}}};
g.h.gP=function(){return this.o?this.o.BC():null};
g.h.DM=function(a){this.la()||(this.Rb("Failed to estabilish a session: "+g.Jk(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&G7(this,null))};
g.h.iM=function(a){E7("Receiver availability updated: "+a);if(!this.la()){var b=F7(this);this.B=a==chrome.cast.ReceiverAvailability.AVAILABLE;F7(this)!=b&&this.R("yt-remote-cast2-availability-change",F7(this))}};
g.h.AC=function(){this.la()||(this.w=zua(this),E7("Updating custom receivers: "+g.Jk(this.w)),chrome.cast.setCustomReceivers(this.w,g.Ca,(0,g.x)(function(){this.Rb("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",F7(this)))};
D7.prototype.setLaunchParams=D7.prototype.iO;D7.prototype.setConnectedScreenStatus=D7.prototype.hO;D7.prototype.stopSession=D7.prototype.hP;D7.prototype.getCastSession=D7.prototype.gP;D7.prototype.requestSession=D7.prototype.requestSession;D7.prototype.init=D7.prototype.init;D7.prototype.dispose=D7.prototype.dispose;var M7=[];R7.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";S7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.ff=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.C=a.playerTimeAt,this.A=a.seekableStart,this.u=a.seekableEnd,this.G=a.duration,this.H=a.loadedTime,this.w=a.liveIngestionTime,this.B=
!isNaN(this.w))};
R7.prototype.isAdPlaying=function(){return 1081==this.playerState};
R7.prototype.getDuration=function(){return this.B?this.G+T7(this):this.G};
R7.prototype.clone=function(){return new R7(X7(this))};g.r(Z7,g.P);g.h=Z7.prototype;g.h.play=function(){1==this.o?(this.u?this.u.play(null,g.Ca,e8(this,"play")):d8(this,"play"),c8(this,1,V7($7(this))),this.R("remotePlayerChange")):a8(this,this.play)};
g.h.pause=function(){1==this.o?(this.u?this.u.pause(null,g.Ca,e8(this,"pause")):d8(this,"pause"),c8(this,2,V7($7(this))),this.R("remotePlayerChange")):a8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.o){if(this.u){var b=$7(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Ca,e8(this,"seekTo",{newTime:a}))}else d8(this,"seekTo",{newTime:a});c8(this,3,a);this.R("remotePlayerChange")}else a8(this,g.La(this.seekTo,a))};
g.h.stop=function(){if(1==this.o){this.u?this.u.stop(null,g.Ca,e8(this,"stopVideo")):d8(this,"stopVideo");var a=$7(this);a.index=-1;a.videoId="";S7(a);b8(this,a);this.R("remotePlayerChange")}else a8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=$7(this);if(this.w){if(c.volume!=a){var d=Math.round(a)/100;this.w.setReceiverVolumeLevel(d,(0,g.x)(function(){i7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.Rb("failed to set receiver volume.")},this))}c.muted!=b&&this.w.setReceiverMuted(b,(0,g.x)(function(){i7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.Rb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);d8(this,"setVolume",e)}c.muted=b;c.volume=a;b8(this,c)}else a8(this,g.La(this.setVolume,a,b))};
g.h.vB=function(a,b){if(1==this.o){var c=$7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Jk(b.style),g.ac(d,c.o));d8(this,"setSubtitlesTrack",d);b8(this,c)}else a8(this,g.La(this.vB,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.o){var c=b.getLanguageInfo().getId();d8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=$7(this);d.audioTrackId=c;b8(this,d)}else a8(this,g.La(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=$7(this);c=c||0;var m={videoId:a,currentIndex:c};W7(l,a,c);void 0!==b&&(U7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.Jk(k));d8(this,"setPlaylist",m);d||b8(this,l)};
g.h.wC=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"previous")}else a8(this,g.La(this.wC,a,b))};
g.h.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"next")}else a8(this,g.La(this.nextVideo,a,b))};
g.h.ew=function(){1==this.o?d8(this,"dismissAutoplay"):a8(this,this.ew)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.R("proxyStateChange",a,this.o)}g.P.prototype.dispose.call(this)};
g.h.Y=function(){Mua(this);this.A=null;this.B.clear();Y7(this,null);g.P.prototype.Y.call(this)};
g.h.vu=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.R("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,g.Wa(b.o)&&(b.o=b.u,b.o.reverse(),b.u=[]),a.o.pop().apply(this);else 3==a&&this.dispose()}};
g.h.bM=function(a,b){this.R(a,b)};
g.h.gK=function(a){if(!a)this.ol(null),Y7(this,null);else if(this.w.receiver.volume){a=this.w.receiver.volume;var b=$7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)i7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,b8(this,b)}};
g.h.ol=function(a){i7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.G);if(this.u=a)this.u.addUpdateListener(this.G),Nua(this),this.R("remotePlayerChange")};
g.h.fK=function(a){a?(Nua(this),this.R("remotePlayerChange")):this.ol(null)};
g.h.rK=function(){var a=Jua();a&&Y7(this,a)};
g.h.Rb=function(a){i7("CP",a)};g.r(f8,g.P);g.h=f8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==k&&(l.currentIndex=k);c&&(this.Sa.listId=c);this.Sa.videoId=d;this.Sa.index=k||0;this.Sa.state=3;U7(this.Sa,m);this.A="UNSUPPORTED";g8("Connecting with setPlaylist and params: "+g.Jk(l));this.o.connect({method:"setPlaylist",
params:g.Jk(l)},a,$sa())}else g8("Connecting without params"),this.o.connect({},a,$sa());Pua(this)};
g.h.dispose=function(){this.la()||(this.R("beforeDispose"),h8(this,3));g.P.prototype.dispose.call(this)};
g.h.Y=function(){i8(this);k8(this);j8(this);g.Io(this.F);this.F=NaN;g.Io(this.G);this.G=NaN;this.w=null;g.Dq(this.O);this.O.length=0;this.o.dispose();g.P.prototype.Y.call(this);this.A=this.C=this.u=this.Sa=this.o=null};
g.h.ME=function(){this.Ai(2)};
g.h.kK=function(){g8("Channel opened");this.J&&(this.J=!1,j8(this),this.M=g.Go((0,g.x)(function(){g8("Timing out waiting for a screen.");this.Ai(1)},this),15E3));
dta(Zta(this.o),this.T)};
g.h.hK=function(){g8("Channel closed");isNaN(this.B)?q6(!0):q6();this.dispose()};
g.h.iK=function(a){q6();isNaN(this.lk())?(g8("Channel error: "+a+" without reconnection"),this.dispose()):(this.J=!0,g8("Channel error: "+a+" with reconnection in "+this.lk()+" ms"),h8(this,2))};
g.h.jK=function(a){a.params?g8("Received: action="+a.action+", params="+g.Jk(a.params)):g8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=N6(a.params.devices);this.u=(0,g.Fc)(a,function(c){return new d6(c)});
a=!!g.Sa(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
Sua(this,a);break;case "loungeScreenDisconnected":g.ab(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
Sua(this,!1);break;case "remoteConnected":var b=new d6(N6(a.params.device));g.Sa(this.u,function(c){return b?c.id==b.id:!1})||Ksa(this.u,b);
break;case "remoteDisconnected":b=new d6(N6(a.params.device));g.ab(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":Uua(this,a);break;case "nowPlaying":Wua(this,a);break;case "onStateChange":Vua(this,a);break;case "onAdStateChange":Xua(this,a);break;case "onVolumeChanged":Yua(this,a);break;case "onSubtitlesTrackChanged":Tua(this,a);break;case "nowAutoplaying":Zua(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.C=a.params.videoId||null;this.R("autoplayUpNext",this.C);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.R("autoplayModeChange",this.A);"DISABLED"==this.A&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":$ua(this,a);break;case "requestAssistedSignIn":this.R("assistedSignInRequested",a.params.authCode);break;default:g8("Unrecognized action: "+a.action)}};
g.h.VN=function(){if(this.w){var a=this.w;this.w=null;this.Sa.videoId!=a&&l8(this,"getNowPlaying")}};
g.h.BE=function(){var a=3;this.la()||(a=0,isNaN(this.lk())?d7(this.o)&&isNaN(this.B)&&(a=1):a=2);return a};
g.h.Ai=function(a){g8("Disconnecting with "+a);i8(this);this.R("beforeDisconnect",a);1==a&&q6();$ta(this.o,a);this.dispose()};
g.h.AE=function(){var a=this.Sa;this.w&&(a=this.Sa.clone(),W7(a,this.w,a.index));return X7(a)};
g.h.jO=function(a){var b=new R7(a);b.videoId&&b.videoId!=this.Sa.videoId&&(this.w=b.videoId,g.Io(this.F),this.F=g.Go((0,g.x)(this.VN,this),5E3));var c=[];this.Sa.listId==b.listId&&this.Sa.videoId==b.videoId&&this.Sa.index==b.index||c.push("remoteQueueChange");this.Sa.playerState==b.playerState&&this.Sa.volume==b.volume&&this.Sa.muted==b.muted&&V7(this.Sa)==V7(b)&&g.Jk(this.Sa.o)==g.Jk(b.o)||c.push("remotePlayerChange");this.Sa.reset(a);(0,g.y)(c,function(d){this.R(d)},this)};
g.h.Tw=function(){var a=this.o.C.id,b=g.Sa(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.lk=function(){var a=this.o;return a.u.isActive()?a.u.u-(0,g.H)():NaN};
g.h.pE=function(){return this.A||"UNSUPPORTED"};
g.h.qE=function(){return this.C||""};
g.h.ZO=function(){if(!isNaN(this.lk())){var a=this.o.u;g.Qn(a.o);a.start()}};
g.h.eO=function(a,b){l8(this,a,b);Rua(this)};
f8.prototype.subscribe=f8.prototype.subscribe;f8.prototype.unsubscribeByKey=f8.prototype.fg;f8.prototype.getProxyState=f8.prototype.BE;f8.prototype.disconnect=f8.prototype.Ai;f8.prototype.getPlayerContextData=f8.prototype.AE;f8.prototype.setPlayerContextData=f8.prototype.jO;f8.prototype.getOtherConnectedRemoteId=f8.prototype.Tw;f8.prototype.getReconnectTimeout=f8.prototype.lk;f8.prototype.getAutoplayMode=f8.prototype.pE;f8.prototype.getAutoplayVideoId=f8.prototype.qE;f8.prototype.reconnect=f8.prototype.ZO;
f8.prototype.sendMessage=f8.prototype.eO;g.r(m8,m7);g.h=m8.prototype;g.h.Yd=function(a){return this.ld.$_gs(a)};
g.h.contains=function(a){return!!this.ld.$_c(a)};
g.h.get=function(a){return this.ld.$_g(a)};
g.h.start=function(){this.ld.$_st()};
g.h.add=function(a,b,c){this.ld.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.ld.$_r(a,b,c)};
g.h.ep=function(a,b,c,d){this.ld.$_un(a,b,c,d)};
g.h.Y=function(){for(var a=0,b=this.u.length;a<b;++a)this.ld.$_ubk(this.u[a]);this.u.length=0;this.ld=null;m7.prototype.Y.call(this)};
g.h.dP=function(){this.R("screenChange")};
g.h.GL=function(){this.R("onlineScreenChange")};
v7.prototype.$_st=v7.prototype.start;v7.prototype.$_gspc=v7.prototype.eP;v7.prototype.$_gsppc=v7.prototype.zC;v7.prototype.$_c=v7.prototype.contains;v7.prototype.$_g=v7.prototype.get;v7.prototype.$_a=v7.prototype.add;v7.prototype.$_un=v7.prototype.ep;v7.prototype.$_r=v7.prototype.remove;v7.prototype.$_gs=v7.prototype.Yd;v7.prototype.$_gos=v7.prototype.yC;v7.prototype.$_s=v7.prototype.subscribe;v7.prototype.$_ubk=v7.prototype.fg;var F8=null,E8=!1,n8=null,o8=null,D8=null,s8=[];g.r(G8,g.A);g.h=G8.prototype;
g.h.Y=function(){g.A.prototype.Y.call(this);this.A.stop();this.C.stop();this.J.stop();this.V();this.o.unsubscribe("proxyStateChange",this.qA,this);this.o.unsubscribe("remotePlayerChange",this.rl,this);this.o.unsubscribe("remoteQueueChange",this.Ao,this);this.o.unsubscribe("autoplayUpNext",this.Rz,this);this.o.unsubscribe("previousNextChange",this.nA,this);this.o.unsubscribe("nowAutoplaying",this.jA,this);this.o.unsubscribe("autoplayDismissed",this.Qz,this);this.o=this.B=null};
g.h.Qy=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(J8(this)){if(!$7(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==$7(this.o).playerState?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.M.dx(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.u.getCurrentTime();L8(this,0==c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,c)}};
g.h.eK=function(a){this.J.IE(a)};
g.h.FO=function(a){this.Qy("control_subtitles_set_track",g.Vb(a)?null:a)};
g.h.KB=function(){var a=this.u.getOption("captions","track");g.Vb(a)||K8(this,a)};
g.h.bA=function(a){if(J8(this)){this.o.unsubscribe("remotePlayerChange",this.rl,this);var b=Math.round(a.volume);a=!!a.muted;var c=$7(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.O.start();this.o.subscribe("remotePlayerChange",this.rl,this)}};
g.h.cL=function(){g.Vb(this.F)||lva(this,this.F);this.G=!1};
g.h.qA=function(a,b){this.C.stop();2==b&&this.HB()};
g.h.rl=function(){if(J8(this)){this.A.stop();var a=$7(this.o);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.H=1;break;case 1082:case 1083:this.B.H=0;break;default:this.B.H=-1}switch(a.playerState){case 1081:case 1:I8(this,new g.mD(8));this.GB();break;case 1085:case 3:I8(this,new g.mD(9));break;case 1083:case 0:I8(this,new g.mD(2));this.M.stop();H8(this,this.u.getVideoData().lengthSeconds);break;case 1084:I8(this,new g.mD(4));break;case 2:I8(this,new g.mD(4));H8(this,V7(a));
break;case -1:I8(this,new g.mD(64));break;case -1E3:I8(this,new g.mD(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=$7(this.o).o;var b=this.F;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.F=a,lva(this,a));a=$7(this.o);-1==a.volume||Math.round(this.u.getVolume())==a.volume&&this.u.isMuted()==a.muted||this.O.isActive()||this.lC()}else kva(this)};
g.h.nA=function(){this.u.R("mdxpreviousnextchange")};
g.h.Ao=function(){J8(this)||kva(this)};
g.h.DD=function(){this.o.ew()};
g.h.Rz=function(){};
g.h.jA=function(a){isNaN(a)||this.u.R("mdxnowautoplaying",a)};
g.h.Qz=function(){this.u.R("mdxautoplaycanceled")};
g.h.GH=function(a,b){-1==$7(this.o).playerState?L8(this,a):b&&this.o.seekTo(a)};
g.h.lC=function(){if(J8(this)){var a=$7(this.o);this.w.Xa(this.T);a.muted?this.u.mute():this.u.unMute();this.u.setVolume(a.volume);this.T=this.w.L(this.u,"onVolumeChange",this.bA)}};
g.h.GB=function(){this.A.stop();if(!this.o.la()){var a=$7(this.o);1==a.playerState&&I8(this,new g.mD(8));H8(this,V7(a));this.A.start()}};
g.h.HB=function(){this.C.stop();this.A.stop();var a=this.o.A.getReconnectTimeout();2==this.o.o&&!isNaN(a)&&this.C.start()};g.r(M8,g.U);M8.prototype.w=function(){c6("mdx-privacy-popup-cancel");this.u.hide()};
M8.prototype.B=function(){c6("mdx-privacy-popup-confirm");this.u.hide()};g.r(N8,g.U);N8.prototype.A=function(a){nva(this,a.state)};g.r(O8,g.lO);O8.prototype.J=function(){var a=this.u.getOption("remote","receivers");a&&1<a.length&&!this.u.getOption("remote","quickCast")?(this.C=g.qb(a,this.B,this),g.nO(this,(0,g.Fc)(a,this.B)),a=this.u.getOption("remote","currentReceiver"),this.ye(this.B(a)),this.enable(!0)):this.enable(!1)};
O8.prototype.B=function(a){return a.key};
O8.prototype.Ne=function(a){return"cast-selector-receiver"==a?"Cast...":this.C[a].name};
O8.prototype.Wc=function(a){g.lO.prototype.Wc.call(this,a);this.u.setOption("remote","currentReceiver",this.C[a]);this.w.ib()};g.r(P8,g.uP);g.h=P8.prototype;
g.h.create=function(){eva(g.yx(this.player.P()));this.A.push(g.No("yt-remote-before-disconnect",this.bK,this));this.A.push(g.No("yt-remote-connection-change",this.jM,this));this.A.push(g.No("yt-remote-receiver-availability-change",this.oA,this));this.A.push(g.No("yt-remote-auto-connect",this.hM,this));this.A.push(g.No("yt-remote-receiver-resumed",this.gM,this));this.A.push(g.No("mdx-privacy-popup-confirm",this.HN,this));this.A.push(g.No("mdx-privacy-popup-cancel",this.GN,this));this.oA()};
g.h.load=function(){this.player.cancelPlayback();g.uP.prototype.load.call(this);this.B=new G8(this,this.player,this.o);var a=(a=jva())?a.currentTime:0;var b=C8()?new Z7(x8(),void 0):null;0==a&&b&&(a=V7($7(b)));0!=a&&(this.O=a||0,this.player.R("progresssync",a,void 0));mva(this,this.F,this.F);g.aT(this.player.app,6)};
g.h.unload=function(){this.player.R("mdxautoplaycanceled");this.w=this.u;g.ie(this.B,this.o);this.o=this.B=null;g.uP.prototype.unload.call(this);g.aT(this.player.app,5);Q8(this)};
g.h.Y=function(){g.Oo(this.A);g.uP.prototype.Y.call(this)};
g.h.Xk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.Qy.apply(this.B,[a].concat(g.ea(c)))};
g.h.getAdState=function(){return this.H};
g.h.DE=function(){return this.loaded?this.B.suggestion:null};
g.h.ff=function(){return this.o?$7(this.o).ff:!1};
g.h.hasNext=function(){return this.o?$7(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.O};
g.h.getProgressState=function(){var a=$7(this.o),b=this.player.getVideoData();return{allowSeeking:g.Q(this.player.P().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.Mc():!a.isAdPlaying()&&this.player.Mc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.B?a.w+T7(a):a.w,isAtLiveHead:1>=(a.B?a.u+T7(a):a.u)-this.getCurrentTime(),loaded:a.H,seekableEnd:a.B?a.u+T7(a):a.u,seekableStart:0<a.A?a.A+T7(a):
a.A}};
g.h.nextVideo=function(){this.o&&this.o.nextVideo()};
g.h.iH=function(){this.o&&this.o.wC()};
g.h.bK=function(a){1==a&&(this.T=this.o?$7(this.o):null)};
g.h.jM=function(){var a=C8()?new Z7(x8(),void 0):null;if(a){var b=this.w;this.loaded&&this.unload();this.o=a;this.T=null;b.key!=this.u.key&&(this.w=b,this.load())}else g.he(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.T)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,V7(a)));this.player.R("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.oA=function(){this.M=[this.u].concat(gva());var a=y8()||this.u;R8(this,a);this.player.ma("onMdxReceiversChange")};
g.h.yN=function(a){!this.J&&g.AD(a,8)&&(this.player.pauseVideo(),Q8(this))};
g.h.hM=function(){var a=y8();R8(this,a)};
g.h.gM=function(){this.w=y8()};
g.h.HN=function(){this.J=!0;Q8(this);E8=!1;F8&&A8(F8,1);F8=null};
g.h.GN=function(){this.J=!1;Q8(this);R8(this,this.u);this.w=this.u;E8=!1;F8=null;this.player.playVideo()};
g.h.Hc=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.M;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?P7():R8(this,b)),this.loaded?this.w:this.u;case "quickCast":return 2==this.M.length&&"cast-selector-receiver"==this.M[1].key?(b&&P7(),!0):!1}};
g.h.jH=function(){d8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.wf=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.JP.remote=P8;})(_yt_player);

/*
     FILE ARCHIVED ON 22:15:51 Feb 09, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:20:33 Feb 15, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 20.98
  exclusion.robots: 0.237
  load_resource: 295.529
  exclusion.robots.policy: 0.223
  esindex: 0.016
  captures_list: 284.19
  PetaboxLoader3.resolve: 103.239 (2)
  LoadShardBlock: 244.51 (3)
  CDXLines.iter: 14.867 (3)
  PetaboxLoader3.datanode: 328.816 (5)
*/