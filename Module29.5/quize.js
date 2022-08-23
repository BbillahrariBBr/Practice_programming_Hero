function getSum(a, b = 9) { return a + b; } console.log(getSum(2, 7));
const y = x => x * x; const z = y(5)
//console.log(z);
const division = (num1, num2) => console.log(num1 / num2);
division(4, 2)
const three = (nmb1, nmb2, nmb3) => nmb1 * nmb2 * nmb3;
console.log(three(1, 2, 3));
const mulLine = `I am a web Developer.
I Love to code.
I Love to eat biryani`;
console.log(mulLine);

const friends = ['saki', 'bbillah', 'ela', 'bushra'];
const evenFrnd = []
// for (friend of friends) {
//     if (friend.length % 2 == 0) {
//         evenFrnd.push(friend);
//     }
// }
//console.log(evenFrnd);
const f1 = (array) => {
    for (friend of array) {
        if (friend.length % 2 == 0) {
            evenFrnd.push(friend);
        }
    }
    return evenFrnd
}
//const lis = f1(friends)
console.log(f1(friends));
