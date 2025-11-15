$(document).ready(function () {
  $("#nick").click(function () {
    $(this).hide();
  });
  $("#tisha").hover(
    function () {
      alert("Hello Tisha");
    },
    function () {
      alert("Goodbye Tisha");
    }
  );
  $("#utsukta").hover(
    function () {
      $(this).css("background-color", "lightblue");
    },
    function () {
      $(this).css("background-color", "pink");
    }
  );
  $("#subject").dblclick(function () {
    $(this).css("font-size", "24px");
  });
  $("#subject").click(function () {
    $(this).css("font-size", "16px");
  });
});
