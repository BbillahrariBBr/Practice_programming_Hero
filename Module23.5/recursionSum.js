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
function compare(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }

}

function comp(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}
const result = comp(25, 25);
console.log("123" + 123);
let a = "hi";
let b = "there";
console.log(a + b);
// console.log(result);
// const result = compare(15, "15");
// console.log(result);
// const res = recursion(6);
// console.log(res);