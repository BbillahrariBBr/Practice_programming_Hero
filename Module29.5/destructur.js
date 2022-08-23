const fish = {
    name: 'king Hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '017176588899',
    price: 400,
}
//destructure
const { price } = fish
const phone = fish.phone;
console.log(price);
const { name, color } = fish;
console.log(name, color);

//array destructurre
const [nmb1, nmb2] = [55, 6];
console.log(nmb1, nmb2);