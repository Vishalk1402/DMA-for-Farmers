import React from 'react';
import './Product.css';

const products = [
    {
        id: 1,
        image: './images/wheat.jpg', 
        name: 'Wheat',
        price: 'Rs.1000',
        location: 'Jalgaon',
        farmer: 'Nandkishor Kumbhar',
        daysListed: '5 days',
    },
    {
        id: 2,
        image: './images/lemon.jpg',
        name: 'lemon',
        price: 'Rs.1300',
        location: 'Bhamane',
        farmer: 'Sanket Patil',
        daysListed: '3 days',
    },
    {
        id: 3,
        image: './images/Corn.jpg',
        name: 'corn',
        price: 'Rs.2200',
        location: 'Yaval',
        farmer: 'Dishant Patil',
        daysListed: '7 days',
    },
    {
        id: 4,
        image: './images/soyabean.jpg',
        name: 'Soyabean',
        price: 'Rs.1500',
        location: 'Malkhapur',
        farmer: 'Bhushan Sushir',
        daysListed: '2 days',
    },
    {
        id: 5,
        image: './images/D.jpg',
        name: 'Dragon Fruit',
        price: 'Rs.5000',
        location: 'Shirpur',
        farmer: 'Vishal Koli',
        daysListed: '10 days',
    },
];

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>Location: {product.location}</p>
            <p>Farmer: {product.farmer}</p>
            <p>Days Listed: {product.daysListed}</p>
            <button className="buy-button">Buy</button>
        </div>
        
    );
};
const Product = () => {
    return (
        <div className="product-listing">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        
    );
};

export default Product;