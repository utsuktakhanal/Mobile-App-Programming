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

$(document).ready(function () {
  $("#first").click(function () {
    $(this).animate(
      {
        fontSize: "40px",
      },
      1000,
      function () {
        $(this).css("color", "red");
      }
    );
    $(this).fadeOut(500).fadeIn(500);
  });
});
