var a = 8;
var b = 10;
var c = 2;
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
// bài tập 3:
var a =10;
var b= 2;
var c = 4;
var countodd=0;
var countEvenNumber=0;
if(a%2 && b%2 && c%2){
    countodd = countodd + 3
}else if(a%2 || b%2 || c%2 ){
    countodd++
}else{countodd = countodd +2}
var countEvenNumber = 3- countodd;
console.log("có",countodd,"số chẵn và có",countEvenNumber,"số lẻ")

// bài tập 4:
var a = 9;
var b = 9;
var c = 8;
if(c * 2 == a * 2 +b * 2){
  console.log("Tam giác vuông")
}else if(a == b && b==c && c==a){
  console.log("Tam giác cân")
}else if(a == b || b==c || c==a){
  console.log("Tam giác cân")
}else{console.log("Tam giác thường")}