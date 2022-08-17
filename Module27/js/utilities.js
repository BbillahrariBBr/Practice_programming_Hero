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
function setInnerTextValueById(id, newValue) {
    const innerTextField = document.getElementById(id);
    innerTextField.innerText = newValue;
}