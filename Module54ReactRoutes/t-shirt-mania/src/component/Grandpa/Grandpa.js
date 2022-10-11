import React, { createContext } from 'react';
import './Grandpa.css'
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'

const RingContext = createContext('Matir ring')

const Grandpa = () => {

    const house = 7
    const ring = 'Diamond ring'
    return (
        <div className='grandpa'>
            <h2>Grand pa</h2>
            <section className='flex'>
                <Father house={house} ring={ring}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;