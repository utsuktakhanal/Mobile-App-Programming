function backgroundChange() {
  document.querySelector(".capitals").style.backgroundColor = "lightblue";
}

function imageChange() {
  document.querySelector("#image1").src = "/images/rome-2.jpg";
}

function addition() {
  let a, b, c;
  a = 5;
  b = 6;
  c = a + b;
  document.getElementById("add").innerHTML = c;
}

function multiplication() {
  let x, y, z;
  x = 5;
  y = 6;
  z = x * y;
  document.getElementById("multiply").innerHTML = z;
}

function division() {
  let p, q, r;
  p = 30;
  q = 6;
  r = p / q;
  document.getElementById("divide").innerHTML = r;
}

function subtraction() {
  let m, n, o;
  m = 10;
  n = 6;
  o = m - n;
  document.getElementById("subtract").innerHTML = o;
}

// if-else
function showCityImage() {
  let city = document.getElementById("cityInput");
  let image = document.getElementById("showCityImage");

  if (city.value === "london") {
    image.src = "/images/london.jpg";
  } else if (city.value === "paris") {
    image.src = "/images/paris.jpg";
  } else if (city.value === "rome") {
    image.src = "/images/rome-1.jpg";
  } else if (city.value === "brussels") {
    image.src = "/images/brussels.jpg";
  } else {
    image.src = "/images/nature.jpg";
  }
}
