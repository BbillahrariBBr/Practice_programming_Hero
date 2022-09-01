const loadPhones = async () => {
    url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = (data) => {
    const phoneContainer = document.getElementById('phone-container');
    data.forEach(phone => {
        const phonDiv = document.createElement('div');
        phonDiv.classList.add('col');
        phonDiv.innerHTML = `
            <div class="card">
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
loadPhones()