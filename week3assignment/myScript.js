$(document).ready(function () {
  $("#hamburger").click(function () {
    $("#nav-links").slideToggle();
  });

  $("#exploreBox h2").mouseenter(function () {
    $(this).css("color", "red");
  });

  $("#exploreBox h2").mouseleave(function () {
    $(this).css("color", "black");
  });
});
