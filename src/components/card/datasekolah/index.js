import React from 'react'
import './style.css'

const CardDataSekolah = (props) => {
    return (
        <div className='number-card'>
            <span>{props.number}</span>
            <h3>{props.title}</h3>
        </div>
    )
}

export default CardDataSekolah
