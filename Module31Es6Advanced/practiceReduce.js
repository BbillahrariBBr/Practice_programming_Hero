const anArray = [1, 9, 17, 22];
let sum = 0;
for (arr of anArray) {
    sum += arr;
}

// console.log(sum);
const s = anArray.reduce((p, r) => p + r, 0);
// console.log(s);

const people = [
    { name: 'meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
]
const output = people.reduce((p, c) => p + c.age, 0)
console.log(output);
