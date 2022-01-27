import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import * as SiIcon  from 'react-icons/si';
import './style.css'
import { Header } from '../../../../../layout';

const ProfilLengkapGuru = () => {
    const [namedepan, setNamedepan] = useState([])
    const [namebelakang, setNamebelakang] = useState([])
    const [gelar, setGelar] = useState([])
    const [foto, setFoto] = useState([])
    const [jabatan, setJabatan] = useState([])
    const [tempat, setTempat] = useState([])
    const [tanggal, setTanggal] = useState([])
    const [alamat, setAlamat] = useState([])
    const [descp, setDescp] = useState([])
    const [fb, setFb] = useState([])
    const [wa, setWa] = useState([])
    const [mail, setMail] = useState([])
    const [ig, setIg] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getProfil()
    }, [])

    const getProfil = async () => {
        const response = await axios.get(`http://localhost:3210/profil-guru/${id}`)
        setNamedepan(response.data.nama_depan)
        setNamebelakang(response.data.nama_belakang)
        setGelar(response.data.gelar)
        setFoto(response.data.foto)
        setJabatan(response.data.jabatan)
        setTempat(response.data.tempat_lahir)
        setTanggal(response.data.tanggal_lahir)
        setAlamat(response.data.alamat)
        setDescp(response.data.desc)
        setFb(response.data.facebook)
        setWa(response.data.wa)
        setMail(response.data.email)
        setIg(response.data.instagram)
    }

    return (
        <>
        <Header cname='header sub' judul='Profil guru' />
        <div className='prolengkar'>
            <div className='prolengkar-atas'>
                <div className='prolengkar-sosmed' data-aos="fade-right" data-aos-duration="1500">
                    <div className="button-sosmed">
                        <div className='icon facebook'>
                            <div className="tooltip">{fb}</div>
                            <span><i className='fab fa-facebook'></i></span>
                        </div>
                    </div>
                    <div className="button-sosmed">
                        <div className='icon mail'>
                            <div className="tooltip">{mail}</div>
                            <span><SiIcon.SiGmail /></span>
                        </div>
                    </div>
                </div>
                <div className='prolengkar-photo' data-aos="zoom-in" data-aos-duration="1500">
                    <img src={foto} alt='Profil' />
                </div>
                <div className='prolengkar-sosmed' data-aos="fade-left" data-aos-duration="1500">
                    <div className="button-sosmed">
                        <div className='icon instagram'>
                            <div className="tooltip">{ig}</div>
                            <span><i className='fab fa-instagram'></i></span>
                        </div>
                    </div>
                    <div className="button-sosmed">
                        <div className='icon whatsapp'>
                            <div className="tooltip">{wa}</div>
                            <span><i className='fab fa-whatsapp'></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='prolengkar-tengah'>
                <div className='prolengkar-profil' data-aos="fade-right" data-aos-duration="1500">
                    <h3> {namedepan} <span> {namebelakang} </span> {gelar}</h3>
                    <h4>Guru  <span>{jabatan}</span> </h4>
                    </div>
                <div className='prolengkar-profil' data-aos="fade-left" data-aos-duration="1500">
                    <p>{tempat}, {tanggal}</p>
                    <p>{alamat}</p>
                </div>
            </div>  
            <div className='prolengkar-bawah'>
                <div className='prolengkar-desc' data-aos="zoom-out" data-aos-duration="1500">
                    <p>{descp}</p>
                </div>
            </div>
        </div>
      </>
    )
}

export default ProfilLengkapGuru
