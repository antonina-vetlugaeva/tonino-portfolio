$(".arrow").click(function() {

  $("html, body").animate({scrollTop: $("header").height()+ 600 },"slow");

  return false;

} );
