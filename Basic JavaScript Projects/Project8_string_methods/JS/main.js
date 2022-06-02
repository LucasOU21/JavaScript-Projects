//Concatenate() Method
function full_Sentence() {
    var part_1 = "I like"
    var part_2 = " to read"
    var part_3 = " about science"
    var part_4 = " in my spare time."
    var whole_mathq = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_mathq;
}

//Slice() Method
function slice_Method() {
    var Sentence = "Skipping rocks on the lake is fun.";
    var Sentence = Sentence.slice(24,33);
    document.getElementById("Slice").innerHTML = Section;
}

//toString() Method
function string_Method() {
    var X =2022;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();

}

//toPrecision() Metod
function precision_Method() {
    var X = 3.14159265359;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}