import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../../Cosmetic/Cosmetic';
// import Shoes from '../../Shoes/Shoes';
// import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    // const cosmetics = [
    //     {
    //         "_id": "632de7623a87eacd6c8f6baf",
    //         "price": 70,
    //         "name": "Booth Black"
    //     },
    //     {
    //         "_id": "632de76210d15554be246d72",
    //         "price": 28,
    //         "name": "Humphrey Swanson"
    //     },
    //     {
    //         "_id": "632de76278da87add8af1140",
    //         "price": 89,
    //         "name": "Debbie Sykes"
    //     },
    //     {
    //         "_id": "632de762aaac7d3f86cad993",
    //         "price": 149,
    //         "name": "Luna Dalton"
    //     },
    //     {
    //         "_id": "632de76288a9572f5ad8b5e5",
    //         "price": 290,
    //         "name": "Cheri Gates"
    //     }
    // ]
    // const first = 55;
    // const second = 66;
    // const total = add(first, second)
    return (
        <div>
            <h1>Welcome to my Cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)
            }
            {/* <p>total: {total}</p>
            <Shoes></Shoes> */}
        </div>
    );
};

export default Cosmetics;