import React from 'react';
import PropTypes from 'prop-types';
import "./Gallery.scss";

const Gallery = (props) => {
    return (
        <div className="Gallery">
            {
                props.assets.map((el) => {
                    return (
                        <img src={el} alt="GalleryIMG" className="GalleryIMG" key={el}/>
                    );
                })
            }
        </div>
    );
}

Gallery.propTypes = {
    assets: PropTypes.array.isRequired,
};

export default Gallery;
