// function declaration
function add(nmbr1, nmbr2) {
    const total = nmbr1 + nmbr2;
    return total;
}

//function expression

const add1 = function add1(nmbr1, nmbr2) {
    const total = nmbr1 + nmbr2;
    return total;
}
//function expression with anonymous
const add12 = function (nmbr1, nmbr2) {
    const total = nmbr1 + nmbr2;
    return total;
}

//arrow function-> variable name = (parameters) => return value;
const add5 = (nmbr1, nmbr2 = 0) => nmbr1 + nmbr2;
console.log(add5(5));

// no parameter arrow function
const getPie = () => 3.1416;

//single parameter
const doubleIt = (nmbr) => nmbr * 2;

//single param simplified ver
const fiveTimes = nmbr => nmbr * 5;

// multiline arrow function
