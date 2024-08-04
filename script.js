'use strict';

// Getting the reference to the input field and button

const primaryName = document.querySelector('.first-name');
const secondaryName = document.querySelector('.second-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
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

btn.addEventListener('click', function () {});
