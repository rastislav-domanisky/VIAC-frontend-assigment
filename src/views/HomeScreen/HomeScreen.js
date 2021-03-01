import React from 'react';
import "./HomeScreen.scss";
import { Link } from "react-router-dom";

import Header from '../../components/Header/Header';
import bg1 from "../../assets/gallery/galeria-4.jpg";

import foto1 from '../../assets/livis-1.jpg';
import foto2 from '../../assets/livis-2.jpg';
import foto3 from '../../assets/livis-3.jpg';
import foto5 from '../../assets/livis-5.jpg';

const HomeScreen = () => {
    return (
        <div className="HomeScreen">
            <div className="SectionMain" style={{
                backgroundImage: "url('" + bg1 + "')",
            }} >
                <div className="bgColor">
                    <Header />
                    <div className="headingArea">
                        <div className="hLeft">
                            <h1>Výnimočné,<br />exotické jedlo</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                            diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat.</p>
                            <div className="hLeftButtons">
                                <div className="hLeftBtn1"><Link to="/">O nás</Link></div>
                                <div className="hLeftBtn2"><Link to="/">Kontaktujte nás</Link></div>
                            </div>
                        </div>
                        <div className="hRight">
                            <img src={foto1} alt="foto" className="hFoto1" />
                            <img src={foto2} alt="foto" className="hFoto2" />
                            <img src={foto3} alt="foto" className="hFoto3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
