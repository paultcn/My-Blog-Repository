Event.onDOMReady(function(){var h=document.getElementsByTagName("input");for(var c=0;c<h.length;c++){var S=$(h[c]);if(S.hasClassName("prettysearch")){var p={};if(S.hasClassName("applesearch")){p.autosave="Apple.com";}else{if(S.hasClassName("reseller")){p.autosave="Apple.com Reseller";}}if(S.parentNode.tagName=="LABEL"){var A="";var j=S.up().getElementsByClassName("prettyplaceholder")[0];if(j){A=j.innerHTML;}else{A=S.parentNode.firstChild.nodeValue;S.parentNode.firstChild.nodeValue="";}A=A.split("\n")[0];p.placeholder=A;}AC.decorateSearchInput(S,p);}}});