import React from 'react';
import './style.scss';

const Featured = () => {
    return (
        <section className="featured">
            <div>
                <h2>Título do banner lorem ipsum</h2>
                <img src="https://picsum.photos/315/413?random=1" alt="Featured 1" />
                <ul>
                    <li>/ Lorem ipsum dolor sit amet, consectetur</li>
                    <li>/ Lorem ipsum dolor sit amet, consectetur</li>
                    <li>/ Lorem ipsum dolor sit amet, consectetur</li>
                </ul>
            </div>
        </section>
    );
}

export default Featured;