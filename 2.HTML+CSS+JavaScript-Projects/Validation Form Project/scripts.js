let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let msgError = document.getElementById('msg-error');
let submitBtn = document.getElementById('submit-btn');
let submitError = document.getElementById('submit-error');


function validateName() {
    let name = document.getElementById('contact-name').value;
    if (name.length === 0) {
        nameError.innerHTML = 'Required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)) {
        nameError.innerHTML = 'Invalid name';
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validatePhoneNo() {
    let phoneNo = document.getElementById('contact-phone').value;
    if (phoneNo.length == 0) {
        phoneError.innerHTML = 'required';
        return false;
    }
    if (!/^\d+$/.test(phoneNo)) {
        phoneError.innerHTML = 'invalid Phone No.';
        return false;
    }
    if (phoneNo.length !== 10) {
        phoneError.innerHTML = 'Phone No. should be 10 digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'required';
        return false;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.innerHTML = 'invalid email';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMsg() {
    let message = document.getElementById('contact-msg').value;

    if (message.length == 0) {
        msgError.innerHTML = 'required';
        return false;
    }

    if (message.length <= 10) {
        msgError.innerHTML = 'write more!'
        return false;
    }

    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhoneNo() || !validateEmail() || !validateMsg()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(()=>{
            submitError.style.display = 'none';
        }, 3000);
    }

    submitBtn.classList.remove('submit-btn');
    submitBtn.classList.add('submit-btn-focus');
    setTimeout(()=>{
        submitBtn.classList.add('submit-btn');
        submitBtn.classList.remove('submit-btn-focus');
        setTimeout(() => {
            document.getElementById('contact-name').value = '';
            document.getElementById('contact-phone').value = '';
            document.getElementById('contact-email').value = '';
            document.getElementById('contact-msg').value = '';
        },0);
    }, 200);
}