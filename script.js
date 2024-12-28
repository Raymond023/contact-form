'use strict';

const myForm = document.querySelector('form');
const email = document.querySelector('#email');
const genEnq = document.querySelector('#general-enquiry');
const support = document.querySelector('#support-request');
const consent = document.querySelector('#consent');
const textField = document.querySelectorAll('.text-field');
const successMsg = document.querySelector('.success');

function radioValidation (radio) {
    if (!radio.checked) {
        radio.parentElement.parentElement.querySelector('.error').style.display = 'block';
    } else {
        radio.parentElement.parentElement.querySelector('.error').style.display = 'none';
    }
}

function validateFIeld (textField) {
    if(textField.value === ''){
        textField.classList.add('invalid');
        textField.parentElement.querySelector('.error').style.display = "block";
    } else{
        textField.classList.remove('invalid');
        textField.parentElement.querySelector('.error').style.display = "none";
    }
}

function emailValidation (email) {
    const validRegex = /\S+@\S+\.\S+/;

    if(validRegex.test(email.value)){
        email.classList.remove('invalid');
        email.parentElement.querySelector('.error').style.display = "none";
    } else {
        email.classList.add('invalid');
        email.parentElement.querySelector('.error').style.display = "block";
    }
}

function resetSuccess () {
    successMsg.style.display = 'block';
    successMsg.setAttribute('aria-hidden', 'false');
    genEnq.parentElement.classList.remove('active-radio');
    support.parentElement.classList.remove('active-radio');
    myForm.reset();
    setTimeout(() => {
        successMsg.style.display = 'none';
        successMsg.setAttribute('aria-hidden', 'false');
    }, 3500)
    
}

myForm.addEventListener('submit', (e) => {

    e.preventDefault();

    textField.forEach(validateFIeld);
    emailValidation(email);
    radioValidation(consent);

    radioValidation(support);
    if(!support.checked) {
        radioValidation(genEnq)
    }
    if (!document.querySelector('.invalid')) {
        resetSuccess()
    }

});