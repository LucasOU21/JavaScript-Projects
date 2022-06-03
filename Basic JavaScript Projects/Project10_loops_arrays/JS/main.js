// It's a simple call loop
const Call_Loop = () => {
    var Digit = "";
    var Y = 1;
    while (Y < 101) {
        Digit += "<br>" + Y;
        Y++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
// A simple For Loop
var Instruments = ["Piano", "Drums", "Guitar", "Triangle", "Flute", "Bass", "Vocal", "Trumpet",];
var Content ="";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
// It's an Array and objects
function array_Function() {
    var Rubik_Cube = [];
    Rubik_Cube[0] = " Turn Up"
    Rubik_Cube[1] = " Turn Left"
    Rubik_Cube[2] = " Turn Down"
    Rubik_Cube[3] = " Turn Right"
    document.getElementById("Array").innerHTML = " You're one step close to solving a Rubik Cube" +
    Rubik_Cube[2] + ".";
}
// Function used with Const Keyword
function constant_function() {
    const Tea_Cup = {type:"Cup", brand:"Hallmark", color:"Blue and white"};
    Tea_Cup.color.color = "Red";
    Tea_Cup.price = "$23"
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Tea_Cup.type + " was " + Tea_Cup.price;
}
//Let keyword
var X = 2022;
document.write(X);
{
    let X = 2021;
    
    document.write("<br>" + X);
}
document.write("<br>" + X);
// Object function
let apple = {
    make: " Iphone",
    model: " ios13",
    year: " 2022",
    color: " Red",
    description : function() {
        return "The Iphone is a " + this.year + this.color + this.make + this.model;
        
    }

};
document.getElementById("Apple_Object").innerHTML = apple.description();

