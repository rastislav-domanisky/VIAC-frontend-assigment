import React from 'react';
import "./Header.scss";
import { Link } from "react-router-dom";

import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <header className="Header">
            <Logo />
            <nav>
                <Link to="/">Úvod</Link>
                <Link to="/">Kto sme</Link>
                <Link to="/">Referencie</Link>
                <Link to="/">Galéria</Link>
                <Link to="/">Kontakt</Link>
            </nav>
        </header>
    );
}

export default Header;
