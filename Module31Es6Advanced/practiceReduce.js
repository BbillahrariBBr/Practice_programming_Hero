const anArray = [1, 9, 17, 22];
let sum = 0;
for (arr of anArray) {
    sum += arr;
}

// console.log(sum);
const s = anArray.reduce((p, r) => p + r, 0);
console.log(s);
