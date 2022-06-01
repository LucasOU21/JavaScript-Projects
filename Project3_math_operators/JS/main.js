// Multiply function that multiply any number and gives an result
function multiply_function() {
    var multiply = 123 * 321;
    document.getElementById("Math").innerHTML = "123 * 321 =" + multiply;

}
// Subtraction function that Subtraction any number and gives an result
function subtraction_function() {
      var Subtraction = 345 - 234;
      document.getElementById("MathS").innerHTML = "345 - 234 =" + Subtraction;
}
// adding function that adds any number and gives an result
function addition_function() {
    var add = 420 + 420;
    document.getElementById("MathA").innerHTML = "420 + 420 =" + add;
}
// divide function that divides any number and gives an result
function division_function() {
    var divide = 3463 / 34634;
    document.getElementById("MathD").innerHTML = "3463 / 34634 =" + divide;
}
// operation function that multiply,add,subtraction, and divide any numbers and gives an result
function more_math() {
    var simple_math = (-3 + 4) / 5 * 10;
    document.getElementById("MathO").innerHTML = "Negative 3 plus 4, divide 5 times 10 =" + simple_math;
}
// Returns a reminder/ percentage of a number
function modulus_operator() {
    var simple_math = 50 % 23;
    document.getElementById("MathMO").innerHTML = "When you divide 50 by 23 you have a reminder of: " + simple_math;
}
//Returns a negative number
function negative_operator() {
    var x = 12311141;
    document.getElementById("MathN").innerHTML = -x;
}
// increase any number by 1 with "++"
var X = 5;
X++;

//decrease any number by 1 with "--"
var Xd = 8.50;
Xd--;
//returns a random number with certain limitations
window.alert(Math.random()) * 100;


