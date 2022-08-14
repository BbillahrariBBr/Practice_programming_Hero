//console.log("Test event");
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const mBlue = document.getElementById('makeBlue');

mBlue.onclick = blueButton;

function blueButton() {
    document.body.style.backgroundColor = 'blue';
}