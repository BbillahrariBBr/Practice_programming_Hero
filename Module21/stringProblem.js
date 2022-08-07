// string immutable- unchanging . index er value not change
const userName = 'blackPink';
const userInput = 'blackPinK';
if (userName.toLocaleLowerCase() == userInput.toLocaleLowerCase()) {
    console.log('valid user');
}
else {
    console.log('invalid user');
}