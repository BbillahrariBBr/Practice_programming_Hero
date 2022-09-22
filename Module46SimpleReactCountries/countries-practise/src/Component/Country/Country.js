import React from 'react';
import Button from '../Button/Button';

const Country = (props) => {
    // console.log(props.country.region);
    console.log(props);
    const countryStyle = {
        border: '2px solid black',
        margin: '5px',
        borderRadius: '20px',
        backgroundColor: 'skyblue',
        padding: '20px'
    }

    const { name, region, flags, population } = props.country;
    return (
        <div style={countryStyle}>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>region: {region}</p>
            <Button population={population}></Button>
        </div>

    );
};

export default Country;