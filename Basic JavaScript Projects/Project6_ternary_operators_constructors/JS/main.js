function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "Your are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";


}
// ConstructorFunction with "This" and "New" Keywords
function tree(color, texture, height) {
    this.tree_color = color;
    this.tree_texture = texture;
    this.tree_height = height;
}

 

var birch = new tree("White", "Smooth", 200);
function tree_Function() {
 document.getElementById("New_this").innerHTML = "The " + birch.tree_color + " color is from the birch tree";
}



   // Keywords Function, The Vechile() in the code is a object constructor.
function Vechicle(Make, Model, Year, Color) {
    this.Vechicle_Make = Make;
    this.Vechicle_Model = Model;
    this.Vechicle_Year = Year;
    this.Vechicle_Color = Color;
 
    
}
var Jack = new Vechicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vechicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vechicle("Ford", "Pinto", 1971, "Mustrad");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vechicle_Color + "-colored " + Erik.Vechicle_Model +
    " manufactured in " + Erik.Vechicle_Year;
}

// Nested Functions
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Nested_function = 12;
        function Plus_one() {Nested_function += 1;}
        Plus_one();
        return Nested_function;

    }
}
