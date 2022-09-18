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
    // const {name, flags} = country;
    return `
    <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}" >
        </div>
    `
}
//differents way to destructing

// original
// const getHtmlCountry = country => {
//     //destructering
//     //option 1
//     return `
//     <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}" >
//         </div>
//     `
// }
//option 1
// const getHtmlCountry = country => {
//     //destructering
//     //option 1
//     const { name, flags } = country;
//     return `
//     <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}" >
//         </div>
//     `
// }

//option 2
// const getHtmlCountry = ({ name, flags }) => {
//     // const {name, flags} = country;
//     return `
//     <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}" >
//         </div>
//     `
// }

loadCountries();