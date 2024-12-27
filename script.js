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


function emailValidation () {

    const regex = /^[a-zA-Z0-9._%+-]@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;

        if(regex.test(e.value)){
            email.classList.remove('invalid');
            email.parentElement.querySelector('.error').style.display = "none";
        } else{
            email.classList.add('invalid');
            email.parentElement.querySelector('.error').style.display = "block";
        }
}

function resetSuccess () {
    if (submit) {
        successMsg.style.display = 'block';
        successMsg.setAttribute('aria-hidden', 'false');
        myForm.reset();
    
        } else {
        successMsg.style.display = 'none';
        successMsg.setAttribute('aria-hidden', 'true');
    }
}


submitBtn.addEventListener('click', (e) => {

    e.preventDefault();
    if(genEnq.checked || support.checked){
        document.querySelector('.QT-error').style.display = "none"
    } else {
        document.querySelector('.QT-error').style.display = "block"
    }

    if(consent.checked ){
        document.querySelector('.CB-error').style.display = "none"
    } else {
        document.querySelector('.CB-error').style.display = "block"
    }

    
    emptyFIeld(firstName);
    emptyFIeld(lastName);
    emptyFIeld(textarea);
    emailValidation();
    resetSuccess()
    
});

activeRadio(genEnq);
activeRadio(support);