// ==UserScript==
// @name         Disable Plurk multimedia thumb functuion
// @namespace    https://blog.gslin.org/plurk
// @version      0.20180821.0
// @description  Disable Plurk multimedia thumb function
// @author       Gea-Suan Lin <darkkiller@gmail.com>
// @include      *://www.plurk.com/*
// @exclude      *://www.plurk.com/w/*
// @exclude      *://www.plurk.com/search*
// @grant        none
// ==/UserScript==

(function(){
    document.getElementsByTagName('body')[0].addEventListener('click', function(e){
        for (var el = e.target; el; el = el.parentElement) {
            var c = el.classList;
            if (c.contains('pictureservices') || c.contains('videoservices') || c.contains('ogvideo') || c.contains('iframeembed') || c.contains('plink')) {
                e.stopPropagation();
                return;
            }
        }
    }, true);
}());
