(function(window){var svgSprite='<svg><symbol id="icon-huanyipi" viewBox="0 0 1024 1024"><path d="M129.342 849.783l3.011 3.345c97.187 108.324 235.834 170.446 380.365 170.446 235.677 0 438.964-159.171 495.871-387.606l-79.75-34.122c-40.634 192.445-218.687 341.3-416.111 341.3-115.487 0-223.172-59.282-303.2-143.62l-3.975-4.191 141.992-101.437L1.163 545.452v395.89l128.179-91.559z m548.587-519.701l346.362 148.447V82.658l-128.179 91.559-3.011-3.345C795.915 62.548 657.268 0.426 512.717 0.426 277.552 0.426 74.383 159.164 17.141 387.029l79.14 32.772c41.44-191.187 220.045-338.948 416.446-338.948 115.507 0 223.172 59.263 303.2 143.6l3.975 4.191-141.973 101.438z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)