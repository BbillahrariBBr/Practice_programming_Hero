function make_avg(number1, number2, number3) {
    var avg = (number1 + number2 + number3) / 3
    return avg.toFixed(3);
}

var nmbrAvg = make_avg(23, 34, 56);
console.log(nmbrAvg);