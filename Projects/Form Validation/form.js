console.log("Welcome! cars for rent");
console.log("ENTER your details to have valid entry");

let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
console.log(name, email, phone);

let validuser = false;
let validemail = false;
let validphone = false;

//$('#failure').hide();
//$('#success').hide();

// ADD THE eventListener to name to validate it
name.addEventListener('blur', () => {
    console.log('name is blured');

    let regex = /^[a-zA-Z]([\_0-9a-zA-Z]){2,15}$/;    // the pattern of name should be like this
    let str = name.value;        // Access the value whatever we enter in name in dom
    console.log(str);

    if (regex.exec(str)) {
        console.log("name is valid");
        name.classList.remove('is-invalid');  // its an class which validate it and add a red border to invalid term
        validuser = true
    }
    else {
        console.log("name is not valid");
        name.classList.add('is-invalid');
        validuser = false;
    }
})

// Same validation email also
email.addEventListener('blur', () => {
    console.log('email is blured');

    // The pattern of email will be like this
    let regex = /^([_\.\-a-zA-Z0-9]+)@([_\-\.a-zA-Z]+)\.([a-zA-Z]){2,30}$/;
    let str = email.value;
    console.log(str);

    if (regex.exec(str)) {
        console.log("email is valid");
        email.classList.remove('is-invalid');
        validemail = true
    }
    else {
        console.log("email is not valid");
        email.classList.add('is-invalid');
        validemail = false;
    }
})

// Same validation phone also
phone.addEventListener('blur', () => {
    console.log('phone is blured');

    // The pattern of phone will be like this
    let regex = /^[0-9]{10}$/;   // its very simple only 10 digit no between 0-9.
    let str = phone.value;
    console.log(str);

    if (regex.exec(str)) {
        console.log("phone is valid");
        phone.classList.remove('is-invalid');
        validphone = true
    }
    else {
        console.log("phone is not valid");
        phone.classList.add('is-invalid');
        validphone = false;
    }
})


let submit = document.getElementById('submit');
submit.addEventListener('click', function (e) {
    console.log("you have submitted your enquiry form");
    console.log(validuser, validemail, validphone);

    // submit your form here
    if (validuser && validemail && validphone) {
        console.log("name, email and phone are valid! Submitting the form");

        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        success.classList.add('show');

        $('#failure').hide();
        $('#success').show();
    }
    else {
        console.log("One of name, email and phone are incorrect! Please correct the errors");
        let failure = document.getElementById('failure');
        failure.classList.add('show');

        $('#failure').show();
        $('#success').hide();
    }


    e.preventDefault();
})