import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div>
                <Link to="/">Logo</Link>
                <nav>
                    <Link to="#about">Sobre</Link>
                    <Link to="#products">Produtos</Link>
                    <Link to="#contact">Contato</Link>
                </nav>
                <ul>
                    <li><a href="http://instagram.com" target="_blank" rel="noreferrer" className="instagram">Instagram</a></li>
                    <li><a href="http://facebook.com" target="_blank" rel="noreferrer" className="facebook">Facebook</a></li>
                </ul>
                <p>@Vnda - Tecnologia para ecommerce / CNPJ: 00.000.000/0001-00</p>
            </div>
        </footer>
    )
}

export default Footer;