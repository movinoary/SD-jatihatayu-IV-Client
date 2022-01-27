import React from 'react'
import './style.css'

const CardIkon = (props) => {
    return (
        <button className="card-icon" onClick={props.click}>
            <i className={props.icon}></i>
            <h3>{props.judul}</h3>
        </button>
    )
}

export default CardIkon
