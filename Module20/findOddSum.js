function isOdd(number) {
    if (number % 2 == 1) {
        return true;
    }
    return false;
}
function getSumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;

}
function getOddSum(array) {
    let oddSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (isOdd(array[i])) {
            oddSum += array[i];
        }
    }
    return oddSum;

}



const myArray = [2, 3, 4, 5, 6];

const arraySum = getSumOfArray(myArray);
const arrayOdd = getOddSum(myArray);
console.log(arraySum);
console.log(arrayOdd);