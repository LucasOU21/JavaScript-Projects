//Global variable
var Y = 21;
function Add_numbers_1() {
    document.write(20 + Y + "<br>")
}
function Add_numbers_2() {
    document.write(Y + 100);
}
Add_numbers_1();
Add_numbers_2();

//local variable
var Y = 21;
function Add_numbers_1() {
    var Y = 21;
    document.write(20 + Y + "<br>");
}
function Add_numbers_2() {
    document.write(Y + 100);
}
Add_numbers_1();
Add_numbers_2();

//console debug
function Add_numbers_1() {
    var Y = 21;
    console.log(18 + Y );
}
function Add_numbers_2() {
    console.log(Y + 100);
}
Add_numbers_1();
Add_numbers_2();

//If statment
function get_Date() {
    if (new Date().getDate() < 12) {
        document.getElementById("Greeting").innerHTML = "It's noon time for lunch ";

    }
}

//if statment
function get_Apple() {
var youLikeApple = true;
if (youLikeApple) {
    document.getElementById("Apple").innerHTML = "You like Apple products!";
}

}

//if and else statement
function Product_Function() {
    if (Apple > Samsung) {
        Choice = "You prefer Apple Products.";
        Product = document.getElementById("Apple_P").innerHTML = "You prefer Apple Products.";

    }
    else {
        Choice = "You prefer Samsung products"
    }
    document.getElementById("What_product").innerHTML = "You prefer Samsung products";
}

//else if statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";

    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}