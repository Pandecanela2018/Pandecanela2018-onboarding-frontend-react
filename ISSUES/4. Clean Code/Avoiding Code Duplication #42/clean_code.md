# Answer

## What were the issues with duplicated code?

The code has lower performance because it requires more resources to execute.
Another issue may be confusing logic, which increases the risk of
inconsistencies.

## How did refactoring improve maintainability?

Well, Refactoring issues helps to understand the code
and it is more helpful to change something.

Example:

/*Base = 5;
height = 10;
Area = (Base* height) ;
console.log("Area of triangle: " + Area);

Base = 7;
height = 12;
Area = (Base * height) ;
console.log("Area of triangle: " + Area);

Base = 10;
height = 15;
Area = (Base *height) ;
console.log("Area of triangle: " + Area);
*/

//refactored code

function calculateArea(base, height) {
  return base * height;
}

console.log('Area of triangle: ' + calculateArea(5, 10));
console.log('Area of triangle: ' + calculateArea(7, 12));
console.log('Area of triangle: ' + calculateArea(10, 15));
