# Answer

## What was the issue with the original code?

I created a simple example with a function, and it does a division by zero,
but in this case it is not handled, so my code breaks.

## How does handling errors improve reliability?

I think to handling errors is more important in software development.
In addition, It avoid errors with customer and prevent fatal errors in
the code.

## example

Original code:

function Division(a, b) {
  return a / b;
}

//Incorrect output because the division by 0 is not handled
console.log(Division(1, 0));

Refactor:

function Division(a, b) {
  if (b === 0) {
    throw new Error('Be careful: Division by zero is not allowed');
  }
  return a / b;
}

//Handled division by 0 error
try {
  console.log(Division(1, 0));
} catch (error) {
  console.error(error.message);
}
