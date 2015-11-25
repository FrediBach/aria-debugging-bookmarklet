(function() {

	// Add some css to the document so we visually see which elemnt has focus:

	var newcss = ".active-element-bookmarklet{box-shadow: inset 0 0 0 4px rgba(255,0,0,0.2);-webkit-box-shadow: inset 0 0 0 4px rgba(255,0,0,0.2);-moz-box-shadow: inset 0 0 0 4px rgba(255,0,0,0.2)}";

	if ("\v" == "v"){
		document.createStyleSheet().cssText = newcss;
	} else {
		var tag = document.createElement("style");
		tag.type = "text/css";
		document.getElementsByTagName("head")[0].appendChild(tag);
		tag[ (typeof document.body.style.WebkitAppearance=="string") ? "innerText" : "innerHTML" ] = newcss;
	}

	// Create an interval that checks for the active element:

	if (window._activeElInterval) {

		clearInterval(window._activeElInterval);
		window._currentActiveEl.classList.remove("active-element-bookmarklet");

		delete window._activeElInterval;
		delete window._currentActiveEl;

	} else {

		var activeEl = null;

		window._activeElInterval = setInterval(function() {

			window._currentActiveEl = document.activeElement;

			if (window._currentActiveEl !== activeEl) {

				if (activeEl !== null){
					activeEl.classList.remove("active-element-bookmarklet");
				}

				activeEl = window._currentActiveEl;
				console.log(activeEl);

				window._currentActiveEl.classList.add("active-element-bookmarklet");

			}

		}, 200);

	}

})();

/*

Bookmarklet: (made with -> http://chriszarate.github.io/bookmarkleter/)

javascript:void function(){var e=".active-element-bookmarklet{box-shadow: inset 0 0 0 4px rgba(255,0,0,0.2);-webkit-box-shadow: inset 0 0 0 4px rgba(255,0,0,0.2);-moz-box-shadow: inset 0 0 0 4px rgba(255,0,0,0.2)}",t=document.createElement("style");if(t.type="text/css",document.getElementsByTagName("head")[0].appendChild(t),t["string"==typeof document.body.style.WebkitAppearance?"innerText":"innerHTML"]=e,window._activeElInterval)clearInterval(window._activeElInterval),window._currentActiveEl.classList.remove("active-element-bookmarklet"),delete window._activeElInterval,delete window._currentActiveEl;else{var n=null;window._activeElInterval=setInterval(function(){window._currentActiveEl=document.activeElement,window._currentActiveEl!==n&&(null!==n&&n.classList.remove("active-element-bookmarklet"),n=window._currentActiveEl,console.log(n),window._currentActiveEl.classList.add("active-element-bookmarklet"))},200)}}();

*/