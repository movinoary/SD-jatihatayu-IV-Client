import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BeritaSekolah = () => {
    const [judul, setJudul] = useState([])
    const [foto, setFoto] = useState([])
    const [date, setDate] = useState([])
    const [desc, setDesc] = useState([])
    const [sumber, setSumber] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getBeritaSekolah()
    }, [])

    const getBeritaSekolah = async () => {
        const response = await axios.get(`http://localhost:3210/berita-sekolah/${id}`)
        setJudul(response.data.judul)
        setFoto(response.data.foto)
        setDate(response.data.updatedAt)
        setDesc(response.data.isi_berita)
        setSumber(response.data.pencipta)
    }
    

    return (
        <div className='beranda-row sec-berita'>
            <div className='judul-berita'>
                <h1>{judul}</h1>
                </div>
            <div className='berita-isi'>
                <img src={foto} alt='berita' />
                <p className='isi-tgl'>{date}</p>
                <div className='isi-par'>{desc}</div>
                <p className='isi-sumber'>{sumber}</p>
            </div>
        </div>
    )
}

export default BeritaSekolah
