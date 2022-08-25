const oddArray = [1, 3, 5, 7, 9];
const eveArray = [];
for (arr of oddArray) {
    eveArray.push(arr + 1);
}
const evenArray = oddArray.map(x => x + 1);
// console.log(evenArray);
console.log(eveArray);

const anArray = [33, 50, 79, 78, 90, 101, 30];
const divTen = anArray.filter(x => x % 10 == 0);
// console.log(divTen);
const findFirst1 = anArray.find(x => x % 10 == 0);
// console.log(findFirst1);