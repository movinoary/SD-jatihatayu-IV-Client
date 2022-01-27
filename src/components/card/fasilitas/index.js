import React from 'react'
import './style.css'

const CardFasilitas = (props) => {
    return (
        <div className="fasilitas-card">
            <img src={props.img} alt='fasilitas' />
            <div className="fasilitas-layer">
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default CardFasilitas
