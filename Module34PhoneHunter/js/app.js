const loadPhones = async (searchText) => {
    url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = (data) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = ``;
    // display20 phones only
    data = data.slice(0, 20);
    // display no phone  founds
    const noFound = document.getElementById('no-found-message');
    if (data.length === 0) {
        noFound.classList.remove('d-none');
    }
    else {
        noFound.classList.add('d-none');
    }
    // display all phones
    data.forEach(phone => {
        const phonDiv = document.createElement('div');
        phonDiv.classList.add('col');
        phonDiv.innerHTML = `
            <div class="card p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        `;
        phoneContainer.appendChild(phonDiv);
    });
    console.log(data);
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchText = document.getElementById('search-field').value;
    loadPhones(searchText);

})
// loadPhones()