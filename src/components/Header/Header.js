import React from 'react';
import "./Header.scss";
import { HashLink as Link } from 'react-router-hash-link';

import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <header className="Header">
            <Logo />
            <nav>
                <Link to="/#UVOD">Úvod</Link>
                <Link to="/#O_NAS">Kto sme</Link>
                <Link to="/#REFERENCIE">Referencie</Link>
                <Link to="/#GALERIA">Galéria</Link>
                <Link to="/#KONTAKT">Kontakt</Link>
            </nav>
        </header>
    );
}

export default Header;
