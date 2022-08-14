//console.log("Test event");
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const mBlue = document.getElementById('makeBlue');

mBlue.onclick = blueButton;

function blueButton() {
    document.body.style.backgroundColor = 'blue';
}
const purpleBtn = document.getElementById("makePurple");
purpleBtn.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

//
const skyButton = document.getElementById('make-sky');

skyButton.addEventListener('click', function makeSky() {
    document.body.style.backgroundColor = 'SkyBlue';
}
)

document.getElementById('make-green').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green'
})