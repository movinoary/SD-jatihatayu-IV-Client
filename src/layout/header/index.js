import React from 'react'
import './style.css'

const Header = (props) => {

    return (
        <div className={props.cname}>
            <h1 className='header-judul' data-aos="zoom-out" data-aos-duration="1500">{props.judul}</h1>
            <span className='header-subjudul' data-aos="zoom-in" data-aos-duration="1500">{props.subjudul}</span>
        </div>
    )
};


export default Header
