import React from 'react';
import "./HomeScreen.scss";

import bg1 from "../../assets/gallery/galeria-4.jpg";

const HomeScreen = () => {
    return (
        <div className="HomeScreen">
            <div className="SectionMain" style={{
                backgroundImage: "url('" + bg1 + "')",
            }} >
            <div className="bgColor">

            </div>
            </div>
        </div>
    );
}

export default HomeScreen;
