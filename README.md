Aria debugging bookmarklet
==========================

Boookmarklet minifier
---------------------

http://chriszarate.github.io/bookmarkleter/)

Bookmarklet
-----------

```
javascript:void function(){window._aria_elements_bookmarklet_mode?window._aria_elements_bookmarklet_mode++:window._aria_elements_bookmarklet_mode=1;var e,t,a,o,i,n="bookmarkletlog",r="rgba(0,100,255,0.2)",l="rgba(255,0,0,0.2)",m="inset 0 0 0 4px "+r,d="inset 0 0 0 4px "+l;if(e=".aria-debugging-bookmarklet{position:relative !important;box-shadow: "+m+" !important;-webkit-box-shadow: "+m+" !important;-moz-box-shadow: "+m+" !important}",e+=".aria-debugging-bookmarklet::after{z-index:9999999 !important;position:absolute !important;top:-15px !important;left:0 !important;white-space:nowrap !important;background:"+r+" !important;color:#000 !important;font-size:10px !important;content:attr(data-"+n+") !important}",e+=".aria-debugging-active-bookmarklet{z-index:9999999 !important;box-shadow: "+d+" !important;-webkit-box-shadow: "+d+" !important;-moz-box-shadow: "+d+" !important}",t=document.createElement("style"),t.type="text/css",document.getElementsByTagName("head")[0].appendChild(t),t["string"==typeof document.body.style.WebkitAppearance?"innerText":"innerHTML"]=e,1==window._aria_elements_bookmarklet_mode)a=null,window._activeElInterval=setInterval(function(){window._currentActiveEl=document.activeElement,window._currentActiveEl!==a&&(null!==a&&a.classList.remove("aria-debugging-active-bookmarklet"),a=window._currentActiveEl,console.log(a),window._currentActiveEl.classList.add("aria-debugging-active-bookmarklet"))},200);else if(2==window._aria_elements_bookmarklet_mode){clearInterval(window._activeElInterval),window._currentActiveEl.classList.remove("aria-debugging-active-bookmarklet"),delete window._activeElInterval,delete window._currentActiveEl,o=document.getElementsByTagName("*");for(var s,b=0;s=o[b];b++){i="";for(var c=s.attributes.length-1;c>=0;c--)("role"==s.attributes[c].name||"aria-"==s.attributes[c].name.substring(0,5))&&(i+="["+s.attributes[c].name+"="+s.attributes[c].value+"]");""!==i&&(console.log(s,i),s.classList.add("aria-debugging-bookmarklet"),s.dataset[n]=i)}window._aria_elements_bookmarklet_active=!0}else{o=document.getElementsByTagName("*");for(var s,b=0;s=o[b];b++)s.classList.remove("aria-debugging-bookmarklet");delete window._aria_elements_bookmarklet_active,window._aria_elements_bookmarklet_mode=0}}();
```

How-to use it
-------------

1. Add bookmarklet to your browser (bookmarklet is only tested in Chrome)
2. Click bookmarklet and it shows the active element
3. Click bookmarklet again and it shows all WAI-Aria elements
4. Click again and it is removed from the DOM
5. You can click it again to start at step 2

Extras
------

The bookmarklet logs elements to the console.