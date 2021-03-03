import React from 'react';
import "./HomeScreen.scss";
import { Link } from "react-router-dom";

import Header from '../../components/Header/Header';
import bg1 from "../../assets/gallery/galeria-4.jpg";
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Logo/Logo';

import foto1 from '../../assets/livis-1.jpg';
import foto2 from '../../assets/livis-2.jpg';
import foto3 from '../../assets/livis-3.jpg';
import foto5 from '../../assets/livis-5.jpg';
import arrowIcon from '../../assets/svg/arrow.svg';
import patternImg from '../../assets/svg/pattern.svg';
import galFoto1 from '../../assets/gallery/galeria-1.jpg';
import galFoto2 from '../../assets/gallery/galeria-2.jpg';
import galFoto3 from '../../assets/gallery/galeria-3.jpg';
import galFoto4 from '../../assets/gallery/galeria-4.jpg';
import galFoto5 from '../../assets/gallery/galeria-5.jpg';

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
            <div className="aboutUsSection">
                <img src={foto5} alt="foto" className="aboutFoto" />
                <div className="aboutArea">
                    <p className="aboutLabel">Kto sme</p>
                    <h2 className="aboutTitle">Lívia a Viktória</h2>
                    <p className="aboutText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br /><br />Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                    enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.</p>
                    <div className="aboutCategories">
                        <div className="aboutCategory">
                            Firemné<br />eventy
                        </div>
                        <div className="aboutCategory">
                            Svadby
                        </div>
                        <div className="aboutCategory">
                            Spoločenské<br />podujatia
                        </div>
                        <div className="aboutCategory">
                            Plesy
                        </div>
                        <div className="aboutCategory">
                            Gala<br />večere
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallerySection">
                <p className="gLabel">Galéria</p>
                <div className="gTitleArea">
                    <h2 className="gTitle">Zážitkový catering</h2>
                    <img src={arrowIcon} alt="arrow" className="gArrowIcon" />
                </div>
                <div className="gallery">
                    <Gallery assets={[galFoto1, galFoto2, galFoto3, galFoto4, galFoto5]} />
                </div>
            </div>
            <div className="referencesSection">
                <div className="referencesBtnArea">
                    <div className="refTitleArea">
                        <p className="refsLabel">
                            Referencie
                        </p>
                        <h2 className="refsTitle">
                            Povedali o nás
                        </h2>
                    </div>
                    <div className="refBtn">
                        Viac recenzií
                    </div>
                </div>
                <div className="referencesTextArea">
                    <p className="refsText">
                        Lorem ipsum dolor sit amet, cons
                        ectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam
                        erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit
                        lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="refsAuthor">
                        Lorem Ipsum
                    </p>
                </div>
                <div className="referencesTextArea">
                    <p className="refsText">
                        Lorem ipsum dolor sit amet, cons
                        ectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam
                        erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit
                        lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="refsAuthor">
                        Lorem Ipsum
                    </p>
                </div>
                <div className="referencesTextArea">
                    <p className="refsText">
                        Lorem ipsum dolor sit amet, cons
                        ectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam
                        erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit
                        lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="refsAuthor">
                        Lorem Ipsum
                    </p>
                </div>
            </div>
            <div className="contactSection">
                <div className="cTitleArea">
                    <div className="cTitleLeft">
                        <p className="cLabel">Kontakt</p>
                        <h2 className="cTitle">Napíšte nám</h2>
                    </div>
                    <Logo />
                </div>
                <div className="cFormArea">
                    <div className="cForm">
                        <div className="cRow">
                            <div className="cInput" id="cInputName">
                                <label htmlFor="cName">Meno a priezvisko *</label>
                                <input id="cName" type="text" name="cName" />
                            </div>
                            <div className="cInput" id="cInputTel">
                                <label htmlFor="cTel">Telefón *</label>
                                <input id="cTel" type="tel" name="cTel" />
                            </div>
                        </div>
                        <div className="cRow">
                            <div className="cInput">
                                <label htmlFor="cMail">Emailová adresa *</label>
                                <input id="cMail" type="email" name="cMail" />
                            </div>
                        </div>
                        <div className="cRow">
                            <div className="cInput">
                                <label htmlFor="cMsg">Správa *</label>
                                <textarea name="Text1" rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="cPattern">
                        <img src={patternImg} alt="pattern" className="patternImg" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomeScreen;
