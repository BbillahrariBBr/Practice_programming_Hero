const numbers = [9, 8, 4, 6, 3];
const output = [];
// for (const number of numbers) {
//     const doubled = number * 2;
//     output.push(doubled);
// }
// console.log(output);

// function doubleIT(number) {
//     return number * 2;
// }
const doubleIT = num => num * 2
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIT(number)
        output.push(doubled);
    }
    return output
}
const res = getDoubles(numbers);
// console.log(res);

/*
purpose
1. get an array
2.for every elements of the array do something
3.store the result in an array
4. return the result array
*/

const makeDouble = numbers.map(doubleIT);
const makeDouble1 = numbers.map(number => number * 2);
const makeDouble2 = numbers.map(x => x * 2);
console.log(makeDouble2);