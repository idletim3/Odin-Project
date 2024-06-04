/**
 * Lets do some math!
 * Some rules first:
 *   - Replace the strings to the right of the = with the math expression they describe.
 *   - Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out
 */

const a = 1+8;      // "one plus eight"
const b = 22*3;     // "22 times three"
const c = 5%4;      // "the *remainder* of 5/4"
const d = a-17;     // "the variable 'a' minus 17"
const e = a+b+c+d;  // "the sum of the previous four variables"

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

module.exports = {a, b, c, d, e}
