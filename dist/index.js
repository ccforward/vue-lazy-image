!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Array.prototype.remove=function(e){if(this.length){var t=this.indexOf(e);return t>-1?this.splice(t,1):void 0}},t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="2"==e.version.split(".")[0],r="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=",i=["scroll","wheel","mousewheel","resize","animationend","transitionend"],o={preLoad:t.preLoad||1.2,error:t.error||r,loading:t.loading||r,try:t.try||3,hasBind:!1},a=[],d=[],u={throttle:function(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,d=function(){r=Date.now(),n=!1,e.apply(o,a)};i>=t?d():n=setTimeout(d,t)}}},on:function(e,t,n){e.addEventListener(t,n)},off:function(e,t,n){e.removeEventListener(t,n)}},f=u.throttle(function(){for(var e=0,t=a.length;e<t;e++)c(a[e])},300),l=function(e,t){t?i.forEach(function(t){u.on(e,t,f)}):i.forEach(function(t){u.off(e,t,f)})},c=function(e){if(d.indexOf(e.src)>-1)return h(e.el,e.src,"loaded",e.bindType);var t=e.el.getBoundingClientRect();t.top<window.innerHeight*o.preLoad&&t.bottom>0&&t.left<window.innerWidth*o.preLoad&&t.right>0&&s(e)},s=function(e){return!(e.try>o.try)&&(e.try++,void p(e,function(t){h(e.el,e.src,"loaded",e.bindType),d.push(e.src),a.remove(e)},function(t){h(e.el,e.error,"error",e.bindType)}))},h=function(e,t,n,r){r?e.setAttribute("style",r+": url("+t+")"):e.setAttribute("src",t),e.setAttribute("lazy",n)},p=function(e,t,n){var r=new Image;r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:e.src})},r.onerror=function(e){n(e)}},v=function(t){var n=!1;return a.forEach(function(e){e.el==t&&(n=!0)}),n&&e.nextTick(function(){f()}),n},g=function(t,n,r){if("loaded"!=t.getAttribute("lazy")&&!v(t)){var i=n.value,u=o.loading,c=o.error;if(d.indexOf(i)>-1)return h(t,i,"loaded",n.arg);h(t,u,"loading",n.arg),e.nextTick(function(){a.push({el:t,src:i,error:c,try:0,bindType:n.arg}),f(),a.length>0&&!o.hasBind&&(o.hasBind=!0,l(window,!0))})}},y=function(e,t,n,r){if(e){for(var i=0,u=a.length;i<u;i++)a[i]&&a[i].el==e&&a.splice(i,1);o.hasBind&&0==a.length&&(o.hasBind=!1,d.length=0,l(window,!1))}};n?e.directive("lazy",{bind:g,update:g,inserted:g,comppnentUpdated:f,unbind:y}):e.directive("lazy",{bind:f,update:function(e,t){g(this.el,{modifiers:this.modifiers,arg:this.arg,value:e,oldValue:t})},unbind:function(){y(this.el)}})}}])});