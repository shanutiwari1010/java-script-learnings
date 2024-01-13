// HOISTING

tipper("80");

function tipper(a){
    var bill = parseInt(a);
    console.log(bill+5);
}


var bigBipper = function(a){
    var bill = parseInt(a);
    console.log(bill+15);
}
bigBipper("200");

console.log(name)

var name = "shanu";


function sayName(){
    var name = "S tiwari"
    console.log(name);
}
sayName();

console.log(name);