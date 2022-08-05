function celTofar(cels) {
    //f  = (c*1.8)+32
    let f = (cels * 1.8) + 32;
    return f;
}

function farToCel(far) {
    // c = (f-32)/1.8;
    let c = (far - 32) / 1.8;
    return c;
}

let result = celTofar(30);
let res = farToCel(86);
console.log(result);
console.log(res);