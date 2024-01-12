'use strict';
const btn = document.querySelector('.btn');
const passwordBox = document.getElementById('password');
const copyBtn = document.querySelector('.copy');
const lenghts = 12;

const upperCase = 'ABCDEFGHIJKLPNOPQRSTUWXYZ';

const lowerCase = 'abcdefghijklpnopqrstuwxyz';

const number = '0123456789';

const symbol = '@#$%^&*()_+|}{:?><.,/][';

const allCharts = upperCase + lowerCase + number + symbol;
// console.log(allCharts);
function createPassword() {
  let password = '';

  password += upperCase[Math.floor(Math.random() * upperCase.length)];

  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

  password += number[Math.floor(Math.random() * number.length)];

  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < lenghts) {
    password += allCharts[Math.floor(Math.random() * allCharts.length)];
  }
  passwordBox.value = password;
}

btn.addEventListener('click', createPassword);

function copyPassword() {
  navigator.clipboard.writeText(passwordBox.value);
}

copyBtn.addEventListener('click', copyPassword);
