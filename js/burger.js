$(".burger").click(function() {
  $(".nav").slideToggle(400);
});

$(window).resize(function() {
  if ($(window).width() > 900) {
    $(".nav").show();
    $(".burger").hide();
  } else {
    $(".nav").hide();
    $(".burger").show();
  }
});
