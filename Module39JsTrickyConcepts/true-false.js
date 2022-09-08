/*
truthy
1. true
2. any number(+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. '0' 'false'
5. empty object {}
6. empty array []

falsy
1. false
2. 0 
3. empty string falsy ('')
4. undefine
5. null

*/


const x = ' ';
if (!!x) {
    console.log('x is truthy');
}
