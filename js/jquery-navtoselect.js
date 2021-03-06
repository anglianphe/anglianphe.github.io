!function(e,t,n,i){"use strict";var l=function(t,i){this.element=t,this.$element=n(t),this._isBuilded=!1,this.options=n.extend(l.defaults,i);var o=this;n.extend(o,{init:function(){var t=o.getItems();o.build(t),o.$select.on("change",o.options.onChange),o.$element.trigger("navToSelect::ready"),n(e).on("orientationchange",function(){o.$select.is(":hidden")&&o.$select.is(":focus")&&o.$select.blur()})},build:function(e){o.$select=n("<select />",{class:o.options.namespace}).html(o.buildOptions(e,1)),null===o.options.prependTo?o.$element.after(o.$select):o.$select.prependTo(o.options.prependTo),o._isBuilded=!0},buildOption:function(e,t){var n=new Array(t).join(o.options.indentString);return 1!==t&&o.options.indentSpace?(n+="&nbsp;",'<option class="child" value="'+e.value+'"'+(!1===e.linkable?' data-linkable="false"':"")+(!0===e.actived?' selected="selected"':"")+">"+n+e.label+"</option>"):'<option  value="'+e.value+'"'+(!1===e.linkable?' data-linkable="false"':"")+(!0===e.actived?' selected="selected"':"")+">"+n+e.label+"</option>"},buildOptions:function(e,t){if(t>o.options.maxLevel)return"";var i="";return n.each(e,function(e,n){!1===n.linkable&&void 0!==n.items&&1===t&&o.options.useOptgroup&&(i+='<optgroup label="'+n.label+'">',i+=o.buildOptions(n.items,t+1),i+="</optgroup>"),void 0!==n.items?(i+=o.buildOption(n,t),i+=o.buildOptions(n.items,t+1)):i+=o.buildOption(n,t)}),i},getItems:function(){var e=[];return o.options.placeholder&&(e=e.concat({value:"#",label:o.options.placeholder,linkable:!1})),e=e.concat(o.options.getItemsFromList.call(o,o.$element,1))},getItemValue:function(e){return e.find(o.options.linkSelector).attr("href")},isLinkable:function(e){return"#"!==o.getItemValue(e)},isActived:function(e){return e.is("."+o.options.activeClass)},isBuilded:function(){return o._isBuilded}}),this.init()};l.defaults={maxLevel:4,prependTo:null,activeClass:"active",linkSelector:"a:first",indentString:"&ndash;",indentSpace:!0,placeholder:"Navigate to...",useOptgroup:!1,namespace:"navToSelect",itemFilter:function(e){return!0},getItemLabel:function(e){return e.find(this.options.linkSelector).text()},getItemsFromList:function(e,t){var i=this,l=[];return e.children("li").each(function(){var e=n(this);if(i.options.itemFilter(e)){var o={value:i.getItemValue(e),label:i.options.getItemLabel.call(i,e),linkable:i.isLinkable(e),actived:i.isActived(e)};e.children("ul, ol").length&&(o.items=[],e.children("ul, ol").each(function(){o.items=o.items.concat(i.options.getItemsFromList.call(i,n(this),t+1))})),l.push(o)}}),l},onChange:function(){!1!==n(this).data("linkable")&&(t.location.href=this.value)}},l.prototype={constructor:l,getSelect:function(){return this.$select},destroy:function(){this.$select.remove(),this.$element.data("NavToSelect",null)}},n.fn.navToSelect=function(e){if("string"==typeof e){var t=e,i=arguments.length>1?Array.prototype.slice.call(arguments,1):void 0;return this.each(function(){var e=n.data(this,"navToSelect");e&&"function"==typeof e[t]&&e[t].apply(e,i)})}return this.each(function(){var t=n.data(this,"navToSelect");t||(t=new l(this,e),n.data(this,"navToSelect",t))})}}(window,document,jQuery);
/*
     FILE ARCHIVED ON 08:14:29 Jul 09, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:20:18 Feb 15, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 328.41 (4)
  esindex: 0.017
  LoadShardBlock: 973.963 (3)
  PetaboxLoader3.resolve: 942.778 (2)
  captures_list: 999.268
  RedisCDXSource: 2.496
  CDXLines.iter: 18.193 (3)
  exclusion.robots.policy: 0.244
  exclusion.robots: 0.261
  load_resource: 306.281
*/