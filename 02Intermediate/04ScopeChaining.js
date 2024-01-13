var name = "shanu";

console.log("Line number 3", name);

function sayName() {
  var name = "S Tiwari";
  console.log("Line number 7", name);
  sayNameTwo()
  function sayNameTwo() {
    console.log("Line number 10", name);
  }
}
sayName();
