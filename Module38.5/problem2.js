// 2. take a number form users, using prompt and add 250 to that number
const number = prompt('Enter a number: ');
const numberINT = parseInt(number);
if (isNaN(numberINT)) {

    alert("You enter a String");
}
else {
    const res = numberINT + 250;
    alert(`your number is ${res}`);
}
console.log(typeof (numberINT));