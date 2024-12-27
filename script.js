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
    
        if(e.value === ''){
            e.classList.add('invalid');
            e.parentElement.querySelector('.error').style.display = "block";
        } else{
            e.classList.remove('invalid');
            e.parentElement.querySelector('.error').style.display = "none";
        }
}


function emailValidation (email) {

    //const regex = /^[a-zA-Z0-9._%+-]@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;
    const validRegex = /\S+@\S+\.\S+/;

        if(validRegex.test(email.value)){
            email.classList.remove('invalid');
            email.parentElement.querySelector('.error').style.display = "none";
        } else {
            email.classList.add('invalid');
            email.parentElement.querySelector('.error').style.display = "block";
        }
}

function resetSuccess (submit) {
    if (submit) {
        successMsg.style.display = 'block';
        successMsg.setAttribute('aria-hidden', 'false');
        myForm.reset();
        setTimeout(() => {
            successMsg.style.display = 'none';
            successMsg.setAttribute('aria-hidden', 'false');
        }, 5000)
    
        } else {
        successMsg.style.display = 'none';
        successMsg.setAttribute('aria-hidden', 'true');
    }
}


myForm.addEventListener('submit', (e) => {

    e.preventDefault();

    let submit = false;

    if(genEnq.checked || support.checked){
        document.querySelector('.QT-error').style.display = "none"
    } else {
        document.querySelector('.QT-error').style.display = "block"
    }

    if(consent.checked){
        document.querySelector('.CB-error').style.display = "none"
    } else {
        document.querySelector('.CB-error').style.display = "block"
    }

    
    emptyFIeld(firstName);
    emptyFIeld(lastName);
    emptyFIeld(textarea);
    emailValidation(email);

    
    if (!firstName.classList.contains('invalid') &&
        !lastName.classList.contains('invalid') &&
        !textarea.classList.contains('invalid') &&
        !email.classList.contains('invalid') &&
        genEnq.checked || support.checked &&
        consent.checked) {
            
        submit = true;
    }
    resetSuccess(submit);
});

activeRadio(genEnq);
activeRadio(support);