# Reflection

## What makes a good variable or function name?

You need to be clear, descriptive, and consistent.
The name must describe its purpose so that other developers can
understand what it is used for. for example:
**const Useractive = true** clearly indicates that it stores the users
who are active in the system,in addition, function must to describe
what it does. for example: **function Registeruseractive {User}**.

## What issues can arise from poorly named variables?

You don't know what the variable or function used for and you have to decipher
what each variable in the code is used for, and that leads to more working
hours, wasted resources and higher chance of errors.

## How did refactoring improve code readability?

Refactoring improves the understanding of each function and variable by making
them clearer and more descriptive, which helps reduce future problems in
the code.

Example:
//Bad naming

//let a = false;
//let info = "";

/*function process(a) {
  if (!a) {
    console.log("UserNotActive");
  } else {
    console.log("User is active information ");
  }
}

process(a);*/

//Refracting
let userActive = false;

function UserIdentityVerification(userActive) {
  if (!userActive) {
    console.log('UserNotActive');
  } else {
    console.log('User is active information ');
  }
}

UserIdentityVerification(userActive);
