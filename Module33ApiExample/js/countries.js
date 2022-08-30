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
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
        //console.log(country);
    });
    //using map
    //console.log(countries);
}
const loadCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}
    `;
    //data load
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
    // console.log(url);
    // console.log("get Country Detail", code);
    // cons
}

const displayCountryDetail = (country) => {
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
                <h2>Official Name: ${country.name.official} </h2>
                <img src="${country.flags.png}" alt="">
    `
    console.log(country);
}

loadCountries();