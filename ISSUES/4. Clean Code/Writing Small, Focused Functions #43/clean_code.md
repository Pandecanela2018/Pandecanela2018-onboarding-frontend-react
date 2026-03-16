# Reflection

## Why is breaking down functions beneficial?

They improve Readability, Reusability, Maintainability and Testability
for new developers. In addition, breaking down functions
increases scalability in the future.

## How did refactoring improve the structure of the code?

It visually improved the code, making it easier to identify each function.
In addition, if there is a specific error, it can be fixed function by
function without affecting other parts.

example:

const userName = 'javier Canesa';
const userEmail = '<javier@gmail.com> ';

function processName(userName, userEmail) {
  if (!isEmailValid(userEmail)) {
    notifyInvalidEmail();
    return;
  }

  saveUser(userName);
  sendWelcomeEmail(userEmail);
}

function isEmailValid(email) {
  return email.includes("@");
}

function notifyInvalidEmail() {
  console.log("Invalid email. Please enter a valid email address.");
}

function saveUser(name) {
  console.log(`User "${name}" saved successfully.`);
}

function sendWelcomeEmail(email) {
  console.log(`Welcome email sent to ${email}.`);
}

processName(userName, userEmail);
*/

function processName(userName, userEmail) {
  if (!userEmail.includes('@')) {
    console.log(' Invalid email. Please enter a valid email address.');
    return;
  }

  console.log(`User "${userName}" saved successfully.`);

  console.log(`Welcome email sent to ${userEmail}.`);
}

processName(userName, userEmail);
