import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const PostCard = ({ data }) => {
    const { image, theme, id, title, intro, link } = data;

    return (
        <div className="post-card">
            <img 
                alt={image.alt} 
                src={image.src}  
            />
            <div>
                <Link to={theme.target}>{theme.name}</Link>
                <small>{id}</small>
                <h3>{title}</h3>
                <p>{intro}</p>
                <Link to={link.target} className="more-info">{link.name}</Link>
            </div>
        </div>
    );
}

export default PostCard;