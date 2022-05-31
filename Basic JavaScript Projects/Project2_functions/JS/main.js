//This function used for creating clickable buttons
function Buttonpress() {
    var str = "This Button is red";
    var result = str.fontcolor("red");
    document.getElementById("red_button").innerHTML = result
}
// Used += to create a concatenate string
function second_function() {
    var text = "we got small, large, and extra large buttons";
    text += " Which one you would like?";
    document.getElementById("Button") .innerHTML = text;
}
