var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 400){
        $("header").css({"background": "#F6F6F6"})
    }
    if(500 > scrolled){
        $("header").css({"background": "none"})
    }

}
