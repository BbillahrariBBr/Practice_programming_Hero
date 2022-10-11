import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Sister</h3>
            <p><small>House: {house}</small></p>
            <p><small>{money}</small></p>
            <button onClick={() => setMoney(money - 10)}> Decrease</button>
        </div>
    );
};

export default Sister;