import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={`main-header${showMenu ? ' open' : ''}`}>
            <h1>FrontEnd Challenge</h1>
            <nav className="menu-1">
                <Link to="#search" className="search">Pesquisar</Link>
                <Link to="#my" className="account">Minha conta</Link>
                <Link to="#shopping" className="cart">Meu carrinho</Link>
            </nav>
            <nav className="menu-2">
                <Link to="#about">Sobre</Link>
                <Link to="#products">Produtos</Link>
                <Link to="#contact">Contato</Link>
            </nav>
            <button type="button" onClick={() => setShowMenu(!showMenu)}>Menu Mobile</button>
        </header>
    )
}

export default Header;