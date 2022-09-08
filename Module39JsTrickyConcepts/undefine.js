// 8 ways to get undefine
/*
1. variable that is not initialized will give  undefine
2. function with no returns,
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefine
5.property that dosent exits on an object will gave undefine
6. array index dosent exits on an array will gave undefine(accessing array elements outside of the range)
7. deleting an element inside an array.
8. set a value directly to undefine.
*/
//1
let a;

//2 
function sum(a, b) {
    const res = a + b;
}
const resu = sum();

//3 
function third(a, b) {
    const res = a + b;
    console.log(a, b);
}

function fourth(a, b) {
    if (a > b) {
        return
    }
    return b;
}
const check = fourth(3, 2);
//5
const fifth = { id: 2, age: 40 };
// console.log(fifth.age, fifth.salary);

const sixth = [0, 1, 2, 3];
// console.log(sixth[5]);


const seventh = [0, 1, 2, 3];
//u should not do it. instead use slice
delete seventh[1];
console.log(seventh[1]);
console.log(seventh);


// console.log(resu);