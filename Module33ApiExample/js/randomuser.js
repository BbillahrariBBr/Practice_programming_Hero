const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayData(data.results))
}

const displayData = usersData => {
    const usersContainer = document.getElementById('users-container');
    for (user of usersData) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>user name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>user email: ${user.email} </p>
        <p>user location: ${user.location.city}, ${user.location.country} </p>
        `;
        usersContainer.appendChild(userDiv);
    }
    console.log(usersData);
}
loadUsers()