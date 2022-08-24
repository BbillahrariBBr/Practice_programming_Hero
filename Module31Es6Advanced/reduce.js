const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
//.reduce(accumuator func, inital val)
//acu func two param
const total = numbers.reduce((prev, cur) => prev + cur, 0);
console.log(total);