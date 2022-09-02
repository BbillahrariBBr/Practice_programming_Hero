const loadPhones = async (searchText, dataLimit) => {
    url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (data, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = ``;
    // display20 phones only
    const showAll = document.getElementById('show-all');
    if (dataLimit && data.length > 10) {
        data = data.slice(0, 10);
        showAll.classList.remove('d-none');

    }
    else {
        showAll.classList.add('d-none');
    }

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

                    <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
            </div>
        `;
        phoneContainer.appendChild(phonDiv);

    });
    //stop loader
    toggleSpinner(false);
    console.log(data);
}
const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchText = document.getElementById('search-field').value;
    loadPhones(searchText, dataLimit);
}
document.getElementById('btn-search').addEventListener('click', function () {
    //start loader;
    processSearch(10);

})

//search input filed enter key
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10);
    }
})

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');

    }
}

// not the best solution

document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch()
})

const loadPhoneDetails = async (slug) => {
    url = `https://openapi.programming-hero.com/api/phone/${slug}`
    const res = await fetch(url);
    const data = await res.json();

    displayPhoneDetails(data.data);
}

const displayPhoneDetails = (phnDetails) => {
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = phnDetails.name;
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
    <p>Released Date: ${phnDetails.releaseDate}</p>
    `;
    console.log(phnDetails);
}
// loadPhones()