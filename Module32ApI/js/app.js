function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(res => res.json())
        .then(data => console.log(data))

}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    console.log(data);

}