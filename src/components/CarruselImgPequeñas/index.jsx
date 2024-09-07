import React from 'react';
import './styles.css';

function CarruselImgPequeñas({ imagenes, indexImgActual, handleClick }) {

    return (
        <div>
            {
                imagenes?.map((img, index) => (
                    <img
                        key={index}
                        src={img.pequeña}
                        alt={`Thumbnail ${index}`}
                        className={index === indexImgActual ? "active" : ""}
                        onClick={() => handleClick(index)}
                    />
                ))
            }
        </div>
    )
}

export default CarruselImgPequeñas