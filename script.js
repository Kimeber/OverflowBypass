// ==UserScript==
// @name         OverflowBypass
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Now you can scroll all websites!
// @author       Kimeber
// @match      *://*/*
// @icon         https://prnt.sc/130col0
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==


(function() {
    'use strict';
    setTimeout(function () {
        var overflow = getComputedStyle(document.body).overflow;
        if (overflow == "hidden"){
            $('html, body').attr('style', 'overflow: visible !important');
            //$("body").css("overflow", "visible");
        }
    }, 3000);
})();
