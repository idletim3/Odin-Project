# Variables

There are three ways to declare variables in JavaScript:
1. const
2. let
3. var

Variables are typically declared using const when their values or type should remain constant. If reassignment is necessary, let is preferred. var should be avoided except for specific cases requiring older browser support.

Variables declared with var are hoisted to the top of their scope, allowing them to be accessed throughout the function or script from the start, regardless of their actual declaration location.

# Operators

## Assignment Operators

| Operator | Example | Same As     |
|----------|---------|-------------|
| =        | x = y   | x = y       |
| +=       | x += y  | x = x + y   |
| -=       | x -= y  | x = x - y   |
| *=       | x *= y  | x = x * y   |
| /=       | x /= y  | x = x / y   |
| %=       | x %= y  | x = x % y   |
| **=      | x **= y | x = x ** y  |

## JavaScript Comparison Operators

| Operator | Description               |
|----------|---------------------------|
| ==       | equal to                  |
| ===      | equal value and equal type|
| !=       | not equal                 |
| !==      | not equal value or not equal type|
| >        | greater than              |
| <        | less than                 |
| >=       | greater than or equal to  |
| <=       | less than or equal to     |
| ?        | ternary operator          |

## JavaScript Logical Operators

| Operator | Description       |
|----------|-------------------|
| &&       | logical and       |
| \|\|     | logical or        |
| !        | logical not       |

## JavaScript Type Operators

| Operator | Description                   |
|----------|-------------------------------|
| typeof   | Returns the type of a variable|
| instanceof| Returns true if an object is an instance of an object type|

## JavaScript Bitwise Operators

Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

| Operator | Description      | Example | Same as      | Result | Decimal |
|----------|------------------|---------|--------------|--------|---------|
| &        | AND              | 5 & 1   | 0101 & 0001  | 0001   | 1       |
| \|       | OR               | 5 \| 1  | 0101 \| 0001 | 0101   | 5       |
| ~        | NOT              | ~5      | ~0101        | 1010   | 10      |
| ^        | XOR              | 5 ^ 1   | 0101 ^ 0001  | 0100   | 4       |
| <<       | left shift       | 5 << 1  | 0101 << 1     | 1010   | 10      |
| >>       | right shift      | 5 >> 1  | 0101 >> 1     | 0010   | 2       |
| >>>      | unsigned right shift| 5 >>> 1 | 0101 >>> 1 | 0010   | 2       |

## JavaScript Conversion Operators

### To Convert String to Number:
- Use the unary plus operator `+`.
  - Example: `+"10"` will convert the string `"10"` to the number `10`.

### To Convert Number to String:
- Use the addition operator `+`.
  - Example: `5 + ""` will convert the number `5` to the string `"5"`.

# References

[JavaScript.Info: Variables](https://javascript.info/variables)

[JavaScript.Info: The old "var"](https://javascript.info/var)

[W3Schools: JS Operators](https://www.w3schools.com/js/js_operators.asp)