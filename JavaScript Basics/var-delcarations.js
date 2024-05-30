// Example 1
if (true) {
    var test = true;
}
console.log(test); // true


// Example 2
for (var userID = 0; userID < 100; userID++){
    var jobRole = "employee";
}
console.log(userID);
console.log(jobRole);


// Example 3
function miau(){
  if (true){
    var role = "Administrator";
  }
  console.log(role);
}

miau(); // Administrator
// console.log(role); // Uncaught ReferenceError ReferenceError: bestAnimal is not defined


// Example 4
var declaredVariable = "This variable is declared."
console.log(declaredVariable);
var declaredVariable = "This variable was successfully redeclared."
console.log(declaredVariable);


// Example 5 - This is insane.
function insanityA(){
  phrase = "5a: This is madness";
  console.log(phrase);
  var phrase;
}
insanityA();


function insanityB(){
  var phrase;
  phrase = "5b: This is madness";
  console.log(phrase);
}
insanityB();

function insanityC(){
  var phrase;
  phrase = "5c: This is madness";
  console.log(phrase);
}
insanityC();


// Example 6
function hoisting(){
  var phrase;
  console.log(phrase);
  phrase = "Hoisting example."
}
hoisting(); // undefined because assignment is not hoisted, only declaration is.


// Example 7
(function() {
  console.log("Parentheses around the function");
})();

(function() {
  console.log("Parentheses around the whole thing");
}());

!function() {
  console.log("Bitwise NOT operator starts the expression");
}();

+function() {
  console.log("Unary plus starts the expression");
}();
