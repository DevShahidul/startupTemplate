$(function() {
    "use strict";
    
    var $window = $(window);
    
    $("body").addClass('loader');
    
    /* 1. Custom mouse cursor */
	document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px"
    });
    var e = document.getElementById("pointer");
    
    /* Document ready function */
    $(function(){
        /* Nav expand collapse */
        var NavIcon = $(".navIcon");
        if(NavIcon.length){
            NavIcon.click(function(){
                $("body").toggleClass("navExpanded");
                $(".nav-wrap").slideToggle();
            })
        }
        
    }) // End ready function
    
    /* Window load function */
    $window.on("load", function(){
        $("body").addClass("in");
    })
    
    /* Touch, no touch */
    var supports = (function() {
        var d = document.documentElement,
            c = "ontouchstart" in window || navigator.msMaxTouchPoints;
        if (c) {
            d.className += " touch";
            return {
                touch: true
            }
        } else {
            d.className += " no-touch";
            return {
                touch: false
            }
        }
    })();
    
}(jQuery));