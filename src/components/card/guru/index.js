import React from 'react'
import './style.css'

const CardGuru = (props) => {
    return (
        <div className='karyawan-card'>
            <div className='karyawan-img'>
                <img src={props.image} alt='profil' />
            </div>
            <div className='karyawan-desc'>
                <h3>{props.namaD} <span>{props.namaB}</span></h3>
                <p>{props.posisi}</p>
            </div>
        </div>
    )
}

export default CardGuru
