import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, ring }) => {
    return (
        <div>
            <h3>Myself</h3>
            <p><small>{house}</small></p>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;