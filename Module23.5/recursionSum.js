function sum(number) {
    if (number == 1) {
        return 1;
    }
    return number + sum(number - 1)
}
const res = sum(5);
console.log(res);