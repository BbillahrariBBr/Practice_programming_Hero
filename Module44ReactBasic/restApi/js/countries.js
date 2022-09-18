const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    console.log(countries[0]);
    const allCountriesHtml = countries.map(country => getHtmlCountry(country))
    const containerDiv = document.getElementById('countries');
    containerDiv.innerHTML = allCountriesHtml.join(' ');
    // console.log(allCountriesHtml);
}

const getHtmlCountry = country => {
    return `
    <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}" >
        </div>
    `
}

loadCountries();