function odd_even(number) {
    var msg;
    if (number % 2 == 0) {
        msg = "even";
    }
    else {
        msg = "odd";
    }
    return msg;

}

var oddOrEven = odd_even(7);
console.log(oddOrEven);