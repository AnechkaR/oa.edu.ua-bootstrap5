if($(document).ready(function(){function j(a){var b=$(" .active .item .block div").attr("class");$("#bar").removeClass().addClass(b),$("#owl-demo .owl-pagination .owl-page span").removeClass().addClass(b),f=a,k(),l()}function k(){d=$("<div>",{id:"progressBar"}),e=$("<div>",{id:"bar"}),d.append(e),f.append(d)}function l(){i=0,g=!1,h=setInterval(m,10)}function m(){g===!1&&(i+=1/c,e.css({width:i+"%"}),i>=100&&f.trigger("owl.next"))}function n(){g=!0}function o(){var a=$(" .active .item .block div").attr("class");$("#bar").removeClass().addClass(a),$("#owl-demo .owl-pagination .owl-page span").removeClass().addClass(a),clearTimeout(h),l()}$(function(){$("img.lazy").show().lazyload({effect:"fadeIn",threshold:100,failure_limit:14})}),$(".newsmorephoto a[rel^='lightbox-'], .content a[rel^='lightbox-']").attr("data-fancybox","gal1").attr("class","fancybox"),$(".fancybox").fancybox({ }),$(".fancybox-media").fancybox({width:800,height:450,aspectRatio:!0,padding:0,openEffect:"none",closeEffect:"none",helpers:{media:{}}}),$(window).on("scroll",function(){if($(window).width()>750){var a=$(window).scrollTop();$("body").toggleClass("stick",a>0)}}),$(window).on("resize",function(){if($("body").is("#Home"))if($(window).width()<750){var a=$(window).scrollTop();$("body").removeClass("stick")}else{var a=$(window).scrollTop();$("body").toggleClass("stick",a>0)}else if($("body").is("#Inner"))if($(window).width()<750){var a=$(window).scrollTop();$("body").removeClass("stick")}else{var a=$(window).scrollTop();$("body").toggleClass("stick",a>0)}}),$(".scroll-top").on("click",function(a){a.preventDefault(),$("html, body").animate({scrollTop:0},"slow")}),$("#myCarousel, #news-right-carusel").carousel({interval:1e4}),$("#myCarousel").on("slid.bs.carousel",function(){var a=$("#myCarousel h3").text();a=$("#myCarousel .item.active").data("caruselCategory"),$("#myCarousel h3").text(a)}),$("#myCarousel").on("slide.bs.carousel",function(){var a=$("#myCarousel .item.active").next(".item").find("img").eq(0),b=$("#myCarousel .item.active").next(".item").find("img").eq(1),c=$("#myCarousel .item.active").next(".item").find("img").eq(2);a.attr("src",a.data("original")),b.attr("src",b.data("original")),c.attr("src",c.data("original"))}),$('#myCarousel a[data-slide="prev"]').click(function(){var a=$("#myCarousel .item").last(".item").find("img").eq(0),b=$("#myCarousel .item").last(".item").find("img").eq(1),c=$("#myCarousel .item").last(".item").find("img").eq(2);a.attr("src",a.data("original")),b.attr("src",b.data("original")),c.attr("src",c.data("original"))}),$("[id^=carousel-selector-]").click(function(){var a=$(this).attr("data-slide-number");a=parseInt(a),$("#news-right-carusel").carousel(a),$("[id^=carousel-selector-]").removeClass("selected"),$(this).addClass("selected")}),$("#news-right-carusel").on("slid.bs.carousel",function(a){var b=$(".item.active").data("slide-number");b=parseInt(b),$("[id^=carousel-selector-]").removeClass("selected"),$("[id^=carousel-selector-"+b+"]").addClass("selected")});var a=$(location).attr("pathname"),b=window.location.hash;b&&($('#stabs a[href="'+a+b+'"]').tab("show"),$("html, body").animate({scrollTop:0},"slow")),$("#stabs a").click(function(a){$(this).tab("show");var b=$("body").scrollTop();window.location.hash=this.hash,$("html,body").scrollTop(b)}),$(".gototab").click(function(){var a=$(this).attr("href");$('#stabs a[href="'+a+'"]').tab("show")}),$(".panel-group.accordion").on("shown.bs.collapse",function(){var a=$(".panel.panel-default > .panel-collapse.in").offset();a&&($(window).width()<750?$("html,body").animate({scrollTop:$(".panel-collapse.in").siblings("a").offset().top-5},500):$("html,body").animate({scrollTop:$(".panel-collapse.in").siblings("a").offset().top-74},500))}),$(function(){var a=window.location.hash;if(""!=window.location.hash){$("#inner-accordion .in").removeClass("in"),$(a).addClass("in"),$(a).parent().find("a").removeClass("collapsed");var b=$(".panel.panel-default > .panel-collapse.in").offset();b&&($(window).width()<750?$("html,body").animate({scrollTop:$(".panel-collapse.in").siblings("a").offset().top-5},500):$("html,body").animate({scrollTop:$(".panel-collapse.in").siblings("a").offset().top-74},500))}}),$(function(){var a=$(location).attr("pathname"),b=window.location.hash;b&&$('#inner-accordion a[href="'+a+b+'"]').collapse("show"),$("#inner-accordion a").click(function(a){window.location.hash=this.hash})}),$(function(){$("#acc1, #acc2, #acc3, #acc4, #acc5, #acc6, #acc7").accordion({collapsible:!0,active:!1,header:"h3",navigation:!0,heightStyle:"content",activate:function(a,b){var c=$(".accordion").scrollTop();if(b.newHeader.length){var d=$(b.newHeader).offset().top;$(window).width()<750?$("html,body").animate({scrollTop:c+d-5},"fast"):$("html,body").animate({scrollTop:c+d-80},"fast")}}})});var d,e,f,g,h,i,c=7;$("#owl-demo").owlCarousel({slideSpeed:300,paginationSpeed:300,singleItem:!0,afterInit:j,afterMove:o,startDragging:n,addClassActive:!0,lazyLoad:!0,responsive:!0,transitionStyle:"fade"}),$(".owl-next").click(function(){$("#owl-demo").trigger("owl.next")}),$(".owl-prev").click(function(){$("#owl-demo").trigger("owl.prev")}),$("#latest-news-carusel").owlCarousel({autoPlay:!0,slideSpeed:300,singleItem:!0,pagination:!1,transitionStyle:"fade"}),$("#events-carusel").owlCarousel({autoPlay:!0,slideSpeed:300,singleItem:!0,pagination:!1,transitionStyle:"fade"}),new UISearch(document.getElementById("sb-search"))}),function(a){"use strict";function b(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function f(a,b){var f=c(a,b)?e:d;f(a,b)}var c,d,e;"classList"in document.documentElement?(c=function(a,b){return a.classList.contains(b)},d=function(a,b){a.classList.add(b)},e=function(a,b){a.classList.remove(b)}):(c=function(a,c){return b(c).test(a.className)},d=function(a,b){c(a,b)||(a.className=a.className+" "+b)},e=function(a,c){a.className=a.className.replace(b(c)," ")});var g={hasClass:c,addClass:d,removeClass:e,toggleClass:f,has:c,add:d,remove:e,toggle:f};"function"==typeof define&&define.amd?define(g):a.classie=g}(window),function(a){"use strict";function b(){var b=!1;return function(a){(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(b=!0)}(navigator.userAgent||navigator.vendor||a.opera),b}function c(a,b){this.el=a,this.inputEl=a.querySelector("form > input.sb-search-input"),this._initEvents()}!a.addEventListener&&a.Element&&function(){function a(a,b){Window.prototype[a]=HTMLDocument.prototype[a]=Element.prototype[a]=b}var b=[];a("addEventListener",function(a,c){var d=this;b.unshift({__listener:function(a){a.currentTarget=d,a.pageX=a.clientX+document.documentElement.scrollLeft,a.pageY=a.clientY+document.documentElement.scrollTop,a.preventDefault=function(){a.returnValue=!1},a.relatedTarget=a.fromElement||null,a.stopPropagation=function(){a.cancelBubble=!0},a.relatedTarget=a.fromElement||null,a.target=a.srcElement||d,a.timeStamp=+new Date,c.call(d,a)},listener:c,target:d,type:a}),this.attachEvent("on"+a,b[0].__listener)}),a("removeEventListener",function(a,c){for(var d=0,e=b.length;d<e;++d)if(b[d].target==this&&b[d].type==a&&b[d].listener==c)return this.detachEvent("on"+a,b.splice(d,1)[0].__listener)}),a("dispatchEvent",function(a){try{return this.fireEvent("on"+a.type,a)}catch(e){for(var c=0,d=b.length;c<d;++c)b[c].target==this&&b[c].type==a.type&&b[c].call(this,a)}})}(),!String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),c.prototype={_initEvents:function(){var a=this,b=function(b){b.stopPropagation(),a.inputEl.value=a.inputEl.value.trim(),classie.has(a.el,"sb-search-open")?classie.has(a.el,"sb-search-open")&&/^\s*$/.test(a.inputEl.value)&&(b.preventDefault(),a.close()):(b.preventDefault(),a.open())};this.el.addEventListener("click",b),this.el.addEventListener("touchstart",b),this.inputEl.addEventListener("click",function(a){a.stopPropagation()}),this.inputEl.addEventListener("touchstart",function(a){a.stopPropagation()})},open:function(){var a=this;classie.add(this.el,"sb-search-open"),b()||this.inputEl.focus();var c=function(b){a.close(),this.removeEventListener("click",c),this.removeEventListener("touchstart",c)};document.addEventListener("click",c),document.addEventListener("touchstart",c)},close:function(){this.inputEl.blur(),classie.remove(this.el,"sb-search-open")}},a.UISearch=c}(window),window.Modernizr=function(a,b,c){function d(a){o.cssText=a}function f(a,b){return typeof a===b}var p,w,y,i="2.6.2",j={},k=!0,l=b.documentElement,m="modernizr",n=b.createElement(m),o=n.style,r=({}.toString,{}),u=[],v=u.slice,x={}.hasOwnProperty;y=f(x,"undefined")||f(x.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return x.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=v.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(v.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(v.call(arguments)))};return d});for(var z in r)y(r,z)&&(w=z.toLowerCase(),j[w]=r[z](),u.push((j[w]?"":"no-")+w));return j.addTest=function(a,b){if("object"==typeof a)for(var d in a)y(a,d)&&j.addTest(d,a[d]);else{if(a=a.toLowerCase(),j[a]!==c)return j;b="function"==typeof b?b():b,"undefined"!=typeof k&&k&&(l.className+=" "+(b?"":"no-")+a),j[a]=b}return j},d(""),n=p=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=r.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=p[a[n]];return b||(b={},o++,a[n]=o,p[o]=b),b}function f(a,c,d){if(c||(c=b),q)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():l.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),f.canHaveChildren&&!k.test(a)?d.frag.appendChild(f):f}function g(a,c){if(a||(a=b),q)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;g<i;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function i(a){a||(a=b);var d=e(a);return r.shivCSS&&!m&&!d.hasCSS&&(d.hasCSS=!!c(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),q||h(a,d),a}var m,q,j=a.html5||{},k=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,l=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,n="_html5shiv",o=0,p={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",m="hidden"in a,q=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(a){m=!0,q=!0}}();var r={elements:j.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:j.shivCSS!==!1,supportsUnknownElements:q,shivMethods:j.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=r,i(b)}(this,b),j._version=i,l.className=l.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(k?" js "+u.join(" "):""),j}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var A,B,l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};B=function(a){function b(a){var e,f,g,a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a};for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var c,b=0;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var m,n,h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var l,o,k=b.createElement("script"),e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document),/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android [1-2]\.)/.test(navigator.userAgent)){var ss_set={"github octocat":"\uF671",googleplus:"\uF613",foursquare:"\uF690","thumbs up":"\uD83D\uDC4D",wordpress:"\uF621",posterous:"\uF623",pinterest:"\uF650",instagram:"\uF641",linkedin:"\uF612",thumbsup:"\uD83D\uDC4D",dribbble:"\uF660",facebook:"\uF610",envelope:"\u2709","rss feed":"\uDB8C\uDC20",behance:"\uF661",twitter:"\uF611",octocat:"\uF671",youtube:"\uF630","google+":"\uF613",spotify:"\uF6B1",approve:"\uD83D\uDC4D","last fm":"\uF6B2",blogger:"\uF622",paypal:"\uF680",flickr:"\uF640",github:"\uF670",tumblr:"\uF620",lastfm:"\uF6B2",email:"\u2709",vimeo:"\uF631",skype:"\uF6A0",mail:"\u2709",like:"\uD83D\uDC4D",rdio:"\uF6B0",rss:"\uE310"};if("object"!=typeof ss_icons||"object"!=typeof ss_icons){var ss_icons=ss_set,ss_keywords=[];for(var i in ss_set)ss_keywords.push(i)}else for(var i in ss_set)ss_icons[i]=ss_set[i],ss_keywords.push(i);if("function"!=typeof ss_legacy){!function(a,b){"undefined"!=typeof module?module.exports=b():"function"==typeof define&&"object"==typeof define.amd?define(b):this[a]=b()}("ss_ready",function(a){function b(a){for(m=1;a=c.shift();)a()}var d,c=[],e=!1,f=document,g=f.documentElement,h=g.doScroll,i="DOMContentLoaded",j="addEventListener",k="onreadystatechange",l="readyState",m=/^loade|c/.test(f[l]);return f[j]&&f[j](i,d=function(){f.removeEventListener(i,d,e),b()},e),h&&f.attachEvent(k,d=function(){/^c/.test(f[l])&&(f.detachEvent(k,d),b())}),a=h?function(b){self!=top?m?b():c.push(b):function(){try{g.doScroll("left")}catch(c){return setTimeout(function(){a(b)},50)}b()}()}:function(a){m?a():c.push(a)}});var ss_legacy=function(a){if(!a instanceof Object)return!1;if(a.length)for(var b=0;b<a.length;b++)ss_legacy(a[b]);else a.value?a.value=ss_liga(a.value):a.nodeValue?a.nodeValue=ss_liga(a.nodeValue):a.innerHTML&&(a.innerHTML=ss_liga(a.innerHTML))},ss_getElementsByClassName=function(a,b){for(var c=[],d=new RegExp("(^| )"+b+"( |$)"),e=a.getElementsByTagName("*"),f=0,g=e.length;f<g;f++)d.test(e[f].className)&&c.push(e[f]);return c},ss_liga=function(a){var b=new RegExp(ss_keywords.join("|").replace(/[-[\]{}()*+?.,\\^$#\s]/g,"\\$&"),"gi");return a.replace(b,function(a){return ss_icons[a.toLowerCase()]})};ss_ready(function(){ss_legacy(document.getElementsByClassName?document.getElementsByClassName("ss-icon"):ss_getElementsByClassName(document.body,"ss-icon"))})}}!function(){function c(){var a=$("body").attr("id");0!=a&&"undefined"!=typeof b[a]&&e(b[a]),"undefined"!=typeof b["*"]&&e(b["*"])}function d(a,c){"undefined"==typeof b[a]&&(b[a]=[]),b[a].push(c)}function e(a){if(a instanceof Array)for(var b=a.length-1;b>=0;b--)a[b]()}var a={version:"0.2"},b={};$(document).ready(c),a.register=function(a,b){if("string"!=typeof a&&!(a instanceof Array)||"function"!=typeof b)return!1;if("string"==typeof a&&a.indexOf(", ")!=-1&&(a=a.split(", ")),a instanceof Array)for(var c=a.length-1;c>=0;c--)d(a[c],b);else d(a,b);return!0},window.FunctionHandler=a}(),function(a){a.fn.hoverIntent=function(b,c,d){var e={interval:100,sensitivity:7,timeout:0};e="object"==typeof b?a.extend(e,b):a.isFunction(c)?a.extend(e,{over:b,out:c,selector:d}):a.extend(e,{over:b,out:b,selector:c});var f,g,h,i,j=function(a){f=a.pageX,g=a.pageY},k=function(b,c){return c.hoverIntent_t=clearTimeout(c.hoverIntent_t),Math.abs(h-f)+Math.abs(i-g)<e.sensitivity?(a(c).off("mousemove.hoverIntent",j),c.hoverIntent_s=1,e.over.apply(c,[b])):(h=f,i=g,c.hoverIntent_t=setTimeout(function(){k(b,c)},e.interval),void 0)},l=function(a,b){return b.hoverIntent_t=clearTimeout(b.hoverIntent_t),b.hoverIntent_s=0,e.out.apply(b,[a])},m=function(b){var c=jQuery.extend({},b),d=this;d.hoverIntent_t&&(d.hoverIntent_t=clearTimeout(d.hoverIntent_t)),"mouseenter"==b.type?(h=c.pageX,i=c.pageY,a(d).on("mousemove.hoverIntent",j),1!=d.hoverIntent_s&&(d.hoverIntent_t=setTimeout(function(){k(c,d)},e.interval))):(a(d).off("mousemove.hoverIntent",j),1==d.hoverIntent_s&&(d.hoverIntent_t=setTimeout(function(){l(c,d)},e.timeout)))};return this.on({"mouseenter.hoverIntent":m,"mouseleave.hoverIntent":m},e.selector)}}(jQuery),FunctionHandler.register(["*"],function(){function j(){i.removeClass("no-show").addClass("show")}if(screen.width>767){var a=$("#m_univercity"),b=$("#m_enter"),c=$("#m_science"),d=$("#m_resources"),e=$("#m_departments"),f=$("#m_student"),g=$("#m_univercity,#m_enter,#m_science,#m_resources,#m_departments,#m_student"),h=$("#univercity,#enter,#science,#resources,#departments,#student");$("#univercity").hoverIntent(function(){h.removeClass("active"),$(this).addClass("active"),a.fadeIn(200),$("#m_enter,#m_science,#m_resources,#m_departments,#m_student").fadeOut(200)},function(){}),$("#enter").hoverIntent(function(){h.removeClass("active"),$(this).addClass("active"),b.fadeIn(200),$("#m_univercity,#m_science,#m_resources,#m_departments,#m_student").fadeOut(200)},function(){}),$("#science").hoverIntent(function(){h.removeClass("active"),$(this).addClass("active"),c.fadeIn(200),$("#m_univercity,#m_enter,#m_resources,#m_departments,#m_student").fadeOut(200)},function(){}),$("#resources").hoverIntent(function(){h.removeClass("active"),$(this).addClass("active"),d.fadeIn(200),$("#m_univercity,#m_enter,#m_science,#m_departments,#m_student").fadeOut(200)},function(){}),$("#departments").hoverIntent(function(){h.removeClass("active"),$(this).addClass("active"),e.fadeIn(200),$("#m_univercity,#m_enter,#m_science,#m_resources,#m_student").fadeOut(200)},function(){}),$("#student").hoverIntent(function(){h.removeClass("active"),$(this).addClass("active"),f.fadeIn(200),$("#m_univercity,#m_enter,#m_science,#m_resources,#m_departments").fadeOut(200)},function(){});var i=$(".nav.utility");$(".news-block, .pre-footer, #footer, .main, #owl-demo, .navbar-header, .icons, #shadow-top, .headline, .navicons ").hoverIntent(function(){j(),g.fadeOut(150),h.removeClass("active")},function(){})}});