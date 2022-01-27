import React from 'react'
import './style.css'

const SambutanKepalaSekolah = (props) => {
    return (
        <div className='sambutan-sec'>
            <div className='sambutan-desc' data-aos="fade-right" data-aos-duration="1500">
                <h3> {props.namaD} <span> {props.namaB} </span> {props.gelar} </h3>
                <p>{props.desc1}</p>
                <p>{props.desc2}</p>
            </div>
            <div className='sambutan-img' data-aos="fade-left" data-aos-duration="1500">
                <img src={props.image} alt='sambutan' />
            </div>
        </div>
    )
}

SambutanKepalaSekolah.defaultProps = {
    image : 'https://i.pinimg.com/736x/36/3c/f2/363cf25dec7b7e9b88e1c1855663a861.jpg',
    namaD : 'Minatozaki',
    namaB : 'Sana',
    gelar : 'M,pd',
    desc1 : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    desc2 : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

export default SambutanKepalaSekolah
