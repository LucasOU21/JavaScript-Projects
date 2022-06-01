//The working Version of KVP
function first_Dictionary() {
    var Car = {
      Vehicle: "Sports Car",
      Color: "Red",
      Model: "Ferrari 812 GTS",
      Year: "2021",
      TopSpeed: "285mph", 
      
    };
    document.getElementById("Dictionary").innerHTML = Car.TopSpeed;
}
// the delete value doesn't allow the TopSpeed value to be shown, it's undefine
function first_Dictionary() {
    var Car = {
      Vehicle: "Sports Car",
      Color: "Red",
      Model: "Ferrari 812 GTS",
      Year: "2021",
      TopSpeed: "285mph", 
      
    };
    delete car.TopSpeed;
    document.getElementById("Dictionary").innerHTML = Car.TopSpeed;
}

