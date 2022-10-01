import React from 'react';
import Card from '../Card/Card';


const CardsGroup = () => {
    const products = [
        { id: 1, name: 'Mac book pro', price: 140000 },
        { id: 2, name: 'iphone', price: 10000 },
        { id: 3, name: 'Msamsung', price: 40000 },
    ]
    return (
        <div className="card-group">
            {
                products.map(product => <Card
                    key={product.id}
                    product={product}
                ></Card>)
            }
        </div>
    );
};

export default CardsGroup;