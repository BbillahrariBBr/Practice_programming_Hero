const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for (country of countries) {
    //     console.log(country);
    // }

    const countriesContainer = document.getElementById('countries-container');
    //if no return then use for each
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Country Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
        `;
        countriesContainer.appendChild(countryDiv);
        //console.log(country);
    });
    //using map
    //console.log(countries);
}
loadCountries();