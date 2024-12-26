'use strict';

const myForm = document.querySelector('form');

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const genEnq = document.querySelector('#general-enquiry');
const support = document.querySelector('#support-request');
const consent = document.querySelector('#consent');
const textarea = document.querySelector('textarea');
const submitBtn = document.querySelector('button');

const successMsg = document.querySelector('.success');


function activeRadio (e) {
    e.addEventListener('click', () => {
        genEnq.parentElement.classList.remove('active-radio');
        support.parentElement.classList.remove('active-radio');
        e.parentElement.classList.add('active-radio');
    })
    
}



function emptyFIeld (e) {
    e.addEventListener('blur', () => {
        if(e.value === ''){
            e.classList.add('invalid');
            e.parentElement.querySelector('.error').style.display = "block";
        } else{
            e.classList.remove('invalid');
            e.parentElement.querySelector('.error').style.display = "none";
        }
    })
}

function emailValidation () {

    const regex = /\S+@\S+\.\S+/;

    email.addEventListener('blur', () => {
        if(email.value === '' || email.value !== regex){
            email.classList.add('invalid');
            email.parentElement.querySelector('.error').style.display = "block";
        } else{
            email.classList.remove('invalid');
            email.parentElement.querySelector('.error').style.display = "none";
        }
    })
}

myForm.addEventListener('submit', (e) => {

    e.preventDefault();

    try {
        emptyFIeld(firstName);
    } catch (error) {
        console.error(error)
    }
    // emptyFIeld(firstName);
    // emptyFIeld(lastName);
    // emptyFIeld(textarea);
    // emailValidation();
    // activeRadio(genEnq);
    // activeRadio(support);
    // console.log(22)
});

