import React, { useState } from 'react';
import logo from './img/logo.svg';
import cart from './img/cart.svg';



const Header = () => {

    const [activeClass, setClass] = useState(false);

    const navSlide = () => {
        setClass(!activeClass)
    }


    return (

        <header>
            <div className="logo-container">
                <img src={logo} alt="logo" />
                <h4 className="logo">LOGO</h4>
            </div>

            <nav>
                <ul className={activeClass ? 'nav-links nav-active' : 'nav-links'}>
                    <li><a href="!#" className="nav-links_link">Ana Sayfa</a></li>
                    <li><a href="!#" className="nav-links_link">Ürünler</a></li>
                    <li><a href="!#" className="nav-links_link">İletişim</a></li>
                </ul>
            </nav>

            <div className="cart">
                <img src={cart} alt="cart" />
            </div>

            <div className="burger" onClick={navSlide}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header;
