var a = 11;
var b = 19;
var c = 4;
if (a > b && a > c) {
  console.log(c, "<", b, "<", a);
} else if (a > b && c > b) {
  console.log(b, "<", c, "<", a);
} else if (a > b && c > a) {
  console.log(b, "<", a, "<", c);
} else if (b > a && b > c) {
  console.log(c, "<", a, "<", b);
} else if (b > c && c > a) {
  console.log(a, "<", c, "<", b);
} else {
  console.log(a, "<", b, "<", c);
}

var nameFamily = "Bố";
if (nameFamily == "Anh trai") {
  console.log("xin chào Anh trai");
} else if (nameFamily == "Bố") {
  console.log("xin chào Bố");
} else if (nameFamily == "Mẹ") {
  console.log("xin chào Mẹ");
} else {
  console.log("xin chào Em Gái");
}
