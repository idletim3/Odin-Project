// What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

console.log(c);
console.log(d);

// What are the values of e and x after the code below?
let e = 2;

let x = 1 + (e *= 2); // The value of e is multiplied, then returned. 

console.log(x);

// What are results of these expressions?
// "" + 1 + 0
console.log("" + 1 + 0) // 10. The empty string "" and + operator convert 1 and 0 into strings, and concatenate them.
// "" - 1 + 0
console.log("" - 1 + 0) // -1 . Values treated as numbers. If We had a string, i.e. "Cat", we would receive NaN.
// true + false
console.log(true+false) // 1 + 0 = 1
// 6 / "3"
console.log(6/"3") // 2 as "3" is converted to a number.
// "2" * "3"
console.log("2" * "3") // 6 as both strings are converted to a number.
// 4 + 5 + "px"
console.log(4+5+"px") // 9px - addition with string concatenation.
// "$" + 4 + 5
console.log("$" + 4 + 5) // $45
// "4" - 2
console.log("4" - 2) // 2
// "4px" - 2
console.log("4px" - 2) // NaN
// "  -9  " + 5
console.log("  -9  " + 5) //   -9  5
// "  -9  " - 5
console.log("  -9  " - 5) // -14
// null + 1
console.log(null + 1) // 1
// undefined + 1
console.log(undefined + 1) // NaN
// " \t \n" - 2
console.log(" \t \n" - 2) // -2


// Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

let firstNumber = +("1");
let secondNumber = +("2");

console.log(firstNumber + secondNumber); // 3

// Prompt confuses the input as string values rather than numeric values.