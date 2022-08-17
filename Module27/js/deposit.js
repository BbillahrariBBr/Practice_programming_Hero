function getInputValueById(id) {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    const number = parseFloat(inputValue);
    inputField.value = '';
    return number;

}

function getInnerTextValueById(id) {
    const innerTextField = document.getElementById(id);
    const innerTextValue = innerTextField.innerText;
    const number = parseFloat(innerTextValue);
    return number;

}
document.getElementById('btn-deposit').addEventListener('click', function () {
    const deposit = getInputValueById('inp-deposit')
    console.log(deposit);
    const totalDeposit = getInnerTextValueById('deposit-total')
    console.log(totalDeposit);
    const totalBalance = getInnerTextValueById('total-balance')
    console.log(totalBalance);
})