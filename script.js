'use strict';

// Getting the reference to the input field and button

let primaryName = document.querySelector('.first-name');
let secondaryName = document.querySelector('.second-name');
let email = document.querySelector('.email');
let password = document.querySelector('.password');

// Gretting second classes

let firstNameSecondClass = document.querySelector('.first_input');
let secondNameSecondClass = document.querySelector('.second_input');
let emailSecondClass = document.querySelector('.eamil_input');
let passwordSecondClass = document.querySelector('.password_input');

// labels
let firstNameLabel = document.querySelector('.first-name-label');
let secondNameLabel = document.querySelector('.second-name-label');
let labelEmail = document.querySelector('.email-label');
let LabelPassword = document.querySelector('.password-label');

// button
const btn = document.querySelector('.claim-button');

// Create function to validate email using a regular expression
const isEmailValid = function (input) {
  const emailPatern = /^[^\s@][+@[^\s@]+\.[^\s@]+$/;
  return emailPatern.test(input);
};

// Create function to chck if the email is valid

const isEmailInvalid = function (input) {
  return !isEmailValid(input);
};

// Add  Listener Event
btn.addEventListener('click', function () {
  if (primaryName === '') {
    firstNameLabel.style.display = 'flex';
    firstNameSecondClass.style.display = 'flex';
  } else {
    console.log('Nothing');
  }
});
