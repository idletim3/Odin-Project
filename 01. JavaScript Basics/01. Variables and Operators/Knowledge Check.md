# 1. Name the three ways to declare a variable

const - constant values

let - changing values or object types

var - old JavaScriprt

# 2. Which of the three variable declarations should you avoid and why?

`var` should be avoided because it is function-scoped or globally scoped, ignoring block scope, which can lead to unexpected behavior. It is primarily used in older JavaScript code.

# 3. What rules should you follow when naming variables?

Quoting [CodeAesthethic](https://www.youtube.com/watch?v=-J3wNP6u5YU) on Youtube:

- Don't abbreviate
- Don't put types in variable names
- Add units to variables unless the type tells you
- Don't put types in your types (e.g. AbstractX, BaseX)
- Refactor if you find yourself naming code "utils"

# 4. What happens when you add numbers and strings together?

The non-string value is converted to a string and concatenated with the other string.

# 5. How does the Modulo (%), or Remainder, operator work?

The result of a % b is the remainder of the integer division of a by b.

console.log( 15 % 7 ); will display 1.

# 6. Explain the difference between == and ===.

`==` checks for equality with type coercion.
`===` checks for equality without type coercion.

```
let x = 1;
let y = new Number(1);

console.log(x == y); // true, values match, converted to a common type (coercion)
console.log(x === y); // false, strict match, no type coercion
```

# 7. When would you receive a NaN result?

When attempting to perform maths on a non-numeric string value such as "Cat".

```
let nanExample = 1 / "cat";
console.log(nanExample);
```

# 8. How do you increment and decrement a number?

Increment: ++
Decrement: --

# 9. Explain the difference between prefixing and postfixing increment/decrement operators.

Postfix (x++, x--): The value is returned before the increment/decrement. More at [mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment).

```
let x = 1;
let y = x++;
console.log(`x value: ${x}, y value: ${y}`); // "x value: 2, y value: 1"
```

Returns "x value: 2, y value: 1" as x is incremented after its value is returned.

Prefix example:

```
let x = 1;
let y = ++x;
console.log(`x value: ${x}, y value: ${y}`); // "x value: 2, y value: 2" 

```

# 10. What is operator precedence and how is it handled in JS?

Operator precedence determines the order in which operators are evaluated. Higher precedence operators are evaluated before lower precedence ones, similar to the order of operations in mathematics.

# 11. How do you access developer tools and the console?

`Ctrl+Shift+I` or `F12` to open developer tools and the console.

# 12. How do you log information to the console?

console.log()

# 13. What does unary plus operator do to string representations of integers? eg. +”10”

The unary plus operator converts a string representation of a number to an actual number.

# References

[CodeAesthetic: Naming Things in Code](https://www.youtube.com/watch?v=-J3wNP6u5YU)
[Mozilla: Operators - Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
