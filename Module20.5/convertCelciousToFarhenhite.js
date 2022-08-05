function celTofar(cels) {
    //f  = (c*1.8)+32
    let f = (cels * 1.8) + 32;
    return f;
}

let result = celTofar(30);
console.log(result);