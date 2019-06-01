$(".arrow").click(function() {

  $("html, body").animate({scrollTop: $("header").height()+ 550 },"slow");

  return false;

} );
