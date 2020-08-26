var numero = [];

// 1. CICLO "FOR"

// for (var i = 1; i <= 100; i++) {
//   var numbers = i;
//   if ((numbers % 5 == 0) && (numbers % 3 == 0)) {
//     document.getElementById("lista").innerHTML += "<li>" + "FIZZBUZZ" + "</li>";
//   } else if (numbers % 5 == 0) {
//     document.getElementById("lista").innerHTML += "<li>" + "BUZZ" + "</li>";
//   } else if (numbers % 3 == 0) {
//     document.getElementById("lista").innerHTML += "<li>" + "FIZZ" + "</li>";
//   } else {
//     document.getElementById("lista").innerHTML += "<li>" + i + "</li>";
//   }
// }


// 2. CICLO "WHILE"

var i = 1;
while (i <= 100) {
  var numbers = i;
  if ((numbers % 5 == 0) && (numbers % 3 == 0)) {
    document.getElementById("lista").innerHTML += "<li>" + "FIZZBUZZ" + "</li>";
  } else if (numbers % 5 == 0) {
    document.getElementById("lista").innerHTML += "<li>" + "BUZZ" + "</li>";
  } else if (numbers % 3 == 0) {
    document.getElementById("lista").innerHTML += "<li>" + "FIZZ" + "</li>";
  } else {
    document.getElementById("lista").innerHTML += "<li>" + i + "</li>";
  }
  i++;
}
