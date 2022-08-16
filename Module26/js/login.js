//step 1: add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function (event) {
    //console.log(event.target);
    //step 2: get the email address inside the email input field;
    const emailValue = document.getElementById('inp-email').value;
    const passValue = document.getElementById('inp-pass').value;
    //console.log(emailValue, passValue);

    // do not verify email password on the client side
    // step-4 verify email and password
    if (emailValue === "sontan@baap.com" && passValue === "secret") {
        //console.log("Valid user");
        window.location.href = 'bank.html';
    }
    else {
        alert("Invalid user");
        // console.log();
    }

});