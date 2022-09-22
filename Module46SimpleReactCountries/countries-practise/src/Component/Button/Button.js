import React, { useState } from 'react';

const Button = (props) => {
    // console.log(props);
    const [population, setPopulation] = useState(0);
    const showPopulation = () => {
        return setPopulation(props.population);
    }
    return (
        <div>
            <p>Power: {population} </p>
            <button onClick={showPopulation}>Show Population</button>
        </div>
    );
};

export default Button;