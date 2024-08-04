'use strict';

// Getting the reference to the input field and button

const primaryName = document.querySelector('.first-name');
const secondaryName = document.querySelector('.second-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

// Gretting second classes

const firstNameSecondClass = document.querySelector('.first_input');
const secondNameSecondClass = document.querySelector('.second_input');
const emailSecondClass = document.querySelector('.eamil_input');
const passwordSecondClass = document.querySelector('.password_input');
// labels
const firstNameLabel = document.querySelector('.first-name-label');
const secondNameLabel = document.querySelector('.second-name-label');
const labelEmail = document.querySelector('.email-label');
const LabelPassword = document.querySelector('.password-label');

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
  if (primaryName) {
    firstNameLabel.style.display = 'flex';
  } else {
    console.log('Nothing');
  }
});
