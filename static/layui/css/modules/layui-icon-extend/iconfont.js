(function(window){var svgSprite='<svg><symbol id="layui-icon-extend-wenjianjia" viewBox="0 0 1024 1024"><path d="M525.1 270.1c16.5 0 28.1-5.4 25.7-12-2.4-6.6-7.9-16.1-12.2-21.2-4.3-5-31.6-9.1-48.1-9.1h-224c-16.5 0-34.8 1.9-40.8 4.3-5.9 2.4-15.3 19.2-17.4 25.9-2 6.7 9.8 12.1 26.3 12.1h290.5zM618 863.3l266.9-266.9v-78.2L539.8 863.3zM869.9 300.1H154.1c-8.3 0-15 6.7-15 15v533.2c0 8.3 6.7 15 15 15h343.3l387.5-387.5V315.1c0-8.2-6.7-15-15-15zM256.7 463.2c-28.7 0-51.9-23.2-51.9-51.9s23.2-51.9 51.9-51.9 51.9 23.2 51.9 51.9-23.3 51.9-51.9 51.9zM859.3 863.3l25.6-25.6v-78.2L781.1 863.3zM738.6 863.3L884.9 717v-78.2L660.5 863.3z" fill="#FFBC00" ></path><path d="M869.9 270.1H587L574.8 236c-7.7-21.4-31.5-38.2-54.2-38.2h-284c-23 0-46.4 17.3-53.1 39.3l-10.1 33.1h-19.2c-24.8 0-45 20.2-45 45v533.2c0 24.8 20.2 45 45 45h715.9c24.8 0 45-20.2 45-45V315.1c-0.2-24.8-20.3-45-45.2-45z m-633.3-42.3h284c10.2 0 22.5 8.7 26 18.3l8.6 24.1H204.7l7.4-24.3c2.9-9.5 14.6-18.1 24.5-18.1z m648.3 609.9l-25.7 25.7H781l103.9-103.9v78.2z m0-120.7L738.6 863.3h-78.2l224.5-224.5V717z m0-120.6L618 863.3h-78.2l345.1-345.1v78.2z m0-120.6L497.4 863.3H154.1c-8.3 0-15-6.7-15-15V315.1c0-8.3 6.7-15 15-15H870c8.3 0 15 6.7 15 15v160.7z" fill="#46287C" ></path><path d="M256.7 411.3m-51.9 0a51.9 51.9 0 1 0 103.8 0 51.9 51.9 0 1 0-103.8 0Z" fill="#FFFFFF" ></path></symbol><symbol id="layui-icon-extend-file" viewBox="0 0 1024 1024"><path d="M873.6 473.6v-48l-288-288H150.4v752h726.4v-416zM214.4 822.4V201.6h326.4v272h272v352H214.4zM572.8 211.2l230.4 230.4h-230.4V211.2z" fill="#707070" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)