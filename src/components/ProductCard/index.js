import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const ProductCard = ({ data }) => {
    const { category, image, title, flag, price, link } = data;

    return (
        <div className="product-card">
            <h3>{category}</h3>
            <div>
                <img 
                    alt={image.alt} 
                    src={image.src}  
                />
                <h4>{title}</h4>
                {flag && <small>Flag</small>}
                <b>{price}</b>
                <Link to={link.target} className="btn-secondary">{link.name}</Link>
            </div>
        </div>
    );
}

export default ProductCard;