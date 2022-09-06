//some middle console log will be after 3.5 seconds
console.log('print1');
console.log('print2');
console.log('print3');
setTimeout(fun = () => {
    console.log('print4');
}, 3500);
console.log('print5')