import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="Footer">
            © liviscatering.sk {new Date().getFullYear()}
        </footer>
    );
}

export default Footer;
