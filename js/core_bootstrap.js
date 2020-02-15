function goToByScroll(e){return $("html,body").animate({scrollTop:$(e).offset().top},"slow"),!1}function AsAbove(){1==document.form1.Same.checked?(document.form1.DForename.disabled=!0,document.form1.DSurname.disabled=!0,document.form1.DAddress_1.disabled=!0,document.form1.DAddress_2.disabled=!0,document.form1.DCity.disabled=!0,document.form1.DPostcode.disabled=!0,document.form1.DState.disabled=!0,document.form1.DCountry.disabled=!0,document.form1.DTelephone.disabled=!0,document.form1.DTitle.disabled=!0):(document.form1.DForename.disabled=!1,document.form1.DSurname.disabled=!1,document.form1.DAddress_1.disabled=!1,document.form1.DAddress_2.disabled=!1,document.form1.DCity.disabled=!1,document.form1.DPostcode.disabled=!1,document.form1.DState.disabled=!1,document.form1.DCountry.disabled=!1,document.form1.DTelephone.disabled=!1,document.form1.DTitle.disabled=!1)}function commaFormat(e){var o="";-1!=(e=e.toString()).indexOf(".")&&(o="."+(e=e.split("."))[1],e=e[0]);for(var d="",t=0,r=e.length-1;r>=0&&"-"!=e.charAt(r);r--)3==t&&(d+=",",t=0),d+=e.charAt(r),t++;return"-"==e.charAt(0)&&(d+="-"),d.split("").reverse().join("")+o}$(document).ready(function(){$(".popupme").popover(),$(".tooltipme").tooltip()}),$(document).ready(function(){}),$(document).ready(function(){$("ul li.has-sub").on("touchstart",function(e){"use strict";var o=$(this);return!!o.hasClass("hover")||(o.addClass("hover"),$("ul > li").not(this).removeClass("hover"),e.preventDefault(),!1)})});
/*
     FILE ARCHIVED ON 09:56:02 Jul 09, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:20:16 Feb 15, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 129.695
  exclusion.robots: 0.188
  CDXLines.iter: 14.793 (3)
  LoadShardBlock: 410.708 (3)
  exclusion.robots.policy: 0.174
  captures_list: 432.385
  PetaboxLoader3.datanode: 399.605 (4)
  esindex: 0.013
  PetaboxLoader3.resolve: 106.425 (2)
  RedisCDXSource: 2.841
*/