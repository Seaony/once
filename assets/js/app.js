!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r(r.s=0)}({0:function(e,n,r){r("bUC5"),e.exports=r("pyCd")},bUC5:function(e,n){window.onload=function(){document.getElementById("poster").className="done"};var r,t=$("#audio")[0],o=$("#player");o.click((function(){t.paused?t.play():t.pause()})),$(".progress").click((function(e){var n=$(this).offset().left,o=(e.clientX-n)/$(".progress").width();t.currentTime=r*o})),$("audio").bind("timeupdate",(function(){_prog=(Number(t.currentTime).toFixed(2)/r*100).toFixed(2),$(".progress-bar").attr("aria-valuenow",_prog),$(".progress-bar").css("width",_prog+"%")})),$("audio").bind("durationchange",(function(){r=t.duration})),$("audio").bind("pause",(function(){$(".song-progress").fadeOut(500),o.addClass("icon-play-circle"),o.removeClass("icon-pause-circle")})),$("audio").bind("play",(function(){r=t.duration,$(".song-progress").fadeIn(500),o.addClass("icon-pause-circle"),o.removeClass("icon-play-circle")}));var i=new Image;i.src=$("#poster").attr("data-src"),i.onload=function(){$(".loading").fadeOut(500)}},pyCd:function(e,n){}});