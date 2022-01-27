import React from 'react'
import './style.css'

const Input = (props) => {
    return (
    <div className='func-form'>
        <h2>{props.ket}</h2>
        <input type={props.type} name={props.name} placeholder={props.placeholder} />        
    </div>
    )
}

export default Input