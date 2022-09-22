import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error))
    }, []);
    return (
        <div>

            <h2>Total Country Found: {countries.length}</h2>
            <div className='countries'>
                {
                    countries.map(country => <Country

                        country={country}
                        key={country.cca3} //uinque key
                    ></Country>)
                }

            </div>


        </div>
    );
};

export default Countries;