import React from 'react'
import './style.css'

const CardBerita = (props) => {
    return (
        <div className='berita-card' data-aos="zoom-in" data-aos-duration="1500">
            <div className='berita-img'>
                <img src={props.image} alt='berita' />
            </div>
            <div className='berita-desc'>
                <div className='berita-info'>
                <p className='info-tgl'>{props.tgl}</p>
                <p className='info-kat'>{props.kat}</p>
                </div>
                <h3>{props.judul}</h3>
            </div>
        </div>
    )
}

export default CardBerita
