var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 50){
        $("header").css({"background": "#F6F6F6"})
    }
    if(100 > scrolled){
        $("header").css({"background": "none"})
    }

}
