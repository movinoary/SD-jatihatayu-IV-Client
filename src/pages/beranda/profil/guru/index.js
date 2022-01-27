import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header } from '../../../../layout'
import { CardGuru } from '../../../../components'

const ProfilGuru = () => {
    const [profilGuru, setProfilGuru] = useState([])

    useEffect(() => {
        getProfilGuru()
    }, [])

    const getProfilGuru = async () => {
        const response = await axios.get('http://localhost:3210/profil-guru')
        setProfilGuru(response.data)
    }

    return (
        <div>
            <Header cname='header sub' judul='Profil' subjudul='guru'/>
            <div className='beranda-row'>
                <div className='row-center' data-aos="flip-up" data-aos-duration="1500">
                    {profilGuru.map((guru) => (
                        <Link to={`/profil/profil-guru/${guru.id}`} className='link'>
                            <CardGuru 
                                image={guru.foto}
                                namaD={guru.nama_depan}
                                namaB={guru.nama_belakang}
                                posisi={guru.jabatan}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfilGuru
