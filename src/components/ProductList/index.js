import React from 'react';
import ProductCard from '../ProductCard';
import './style.scss';

const ProductList = ({title, items}) => {
    return (
        <section className="product-list">
            <h2>{title}</h2>
            <ul>
                {items.map((item, i) => (
                    <li key={i}>
                        <ProductCard data={item} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProductList;