const loadData = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}

const displayUser = (users) => {
    const userContainer = document.getElementById('user-container');
    for (user of users) {
        const userdiv = document.createElement('div');
        userdiv.classList.add('user');
        userdiv.innerHTML = `
                <h3>Name: ${user.name.title} ${user.name.first} ${user.name.last} </h3>
                <p>mobile: ${user.phone}</p>
                <p>email: ${user.email} </p>
                <p>Location: ${user.location.city}, ${user.location.country}</p>
        `
        userContainer.appendChild(userdiv);
        console.log(user);
    }
}
loadData();