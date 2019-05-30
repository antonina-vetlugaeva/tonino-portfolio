$(".arrow").click(function() {

  $("html, body").animate({scrollTop: $("header").height()+ 650 },"slow");

  return false;

} );
