// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => console.log(response)); //.json is not similar but close to .parse
// // .then(json => console.log(json))
const url = 'https://jsonplaceholder.typicode.com/todos/2';
function loadData() {
    fetch(url)
        .then(res => res.json())
        .then(js => console.log(js));
}
