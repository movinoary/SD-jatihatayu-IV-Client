import React from 'react'
import './style.css'

const Title = (props) => {
    return (
    <div className='FunTitle' data-aos="zoom-in" data-aos-duration="1500">
        <h1  className='function-title'> {props.title}  <span>{props.subtitle}</span>  {props.titleend} <i className={props.icon} /> 
        </h1>       
        <p className='function-desc'>{props.desc}</p>
    </div>
    )

}

export default Title