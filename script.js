var surName = prompt("Введите ваше фамилия");
var firstName = prompt("Введите ваше имя");
var age = prompt("Введите свой возраст");
var myInfo = "Я " + surName + " " + firstName + " " + "мне " + age;
console.log(myInfo);
alert(myInfo);

var sumAnswer = prompt("Введите свой ответ: 12 + 34 = ?");
var minusAnswer = prompt("Введите свой ответ: 50 - 19 = ?");
var multiplyAnswer = prompt("Введите свой ответ: 9 * 7 = ?");
var divisionAnswer = prompt("Введите свой ответ: 57 % 9 = ?");

var sum = 12 + 34;
var minus = 50 - 19;
var multiply = 9 * 7;
var division = 57 % 9;

alert("12 + 34" + " = " + sum + " (Ваш ответ " + sumAnswer + ")");
alert("50 - 19" + " = " + minus + " (Ваш ответ " + minusAnswer + ")");
alert("9 * 7" + " = " + multiply + " (Ваш ответ " + multiplyAnswer + ")");
alert("57 % 9" + " = " + division + " (Ваш ответ " + divisionAnswer + ")");

console.log("12 + 34" + " = " + sum + " (Ваш ответ " + sumAnswer + ")");
console.log("50 - 19" + " = " + minus + " (Ваш ответ " + minusAnswer + ")");
console.log("9 * 7" + " = " + multiply + " (Ваш ответ " + multiplyAnswer + ")");
console.log("57 % 9" + " = " + division + " (Ваш ответ " + divisionAnswer + ")");
