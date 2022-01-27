import React from 'react'
import './style.css'

function CardKegiatan(props) {
    return (
        <figure className="card-kegiatan" data-aos="flip-up" data-aos-duration="1500">
            <figcaption>
                <h3>{props.title}</h3>
            </figcaption>
            <img src={props.img} alt="Kegiatan" />
        </figure>
    )
};


export default CardKegiatan
