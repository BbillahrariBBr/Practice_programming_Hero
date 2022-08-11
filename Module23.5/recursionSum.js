function sum(number) {
    if (number == 1) {
        return 1;
    }
    return number + sum(number - 1)
}
// const res = sum(5);
// console.log(res);

function recursion(number) {
    if (number == 1) {
        return 1;
    }

    return number * recursion(number - 1);
}

const res = recursion(6);
console.log(res);