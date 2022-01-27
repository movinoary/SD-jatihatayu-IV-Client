import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CardBerita, Title } from '../../../../components'

const DaftarBerita = () => {
    const [beritaSekolah, setBeritaSekolah] = useState([])
    const [beritaUmum, setBeritaUmum] = useState([])

    useEffect(() => {
        getBeritaSekolah()
        getBeritaUmum()
    }, [])

    const getBeritaSekolah = async () => {
        const response = await axios.get('http://localhost:3210/berita-sekolah')
        setBeritaSekolah(response.data)
    }

    const getBeritaUmum = async () => {
        const response = await axios.get('http://localhost:3210/berita-umum')
        setBeritaUmum(response.data)
    }

    return (
        <div>
            <div className='beranda-row'>
                <Title title='Daftar' subtitle='Berita' titleend='Umum'/>
                <div className='row-center'>
                    {beritaUmum.map((beritaUmum) => (
                        <Link to={`berita/umum/${beritaUmum.id}` } className='link'>
                            <CardBerita 
                                image={beritaUmum.foto}
                                judul={beritaUmum.judul}
                                tgl={beritaUmum.updatedAt}
                                kat='Umum'
                            />
                        </Link>
                    ))}
                </div>
                <Title title='Daftar' subtitle='Berita' titleend='sekolah'/>
                <div className='row-center'>
                {beritaSekolah.map((beritaSekolah) => (
                     <Link to={`berita/sekolah/${beritaSekolah.id}`} className='link'>
                        <CardBerita 
                            image={beritaSekolah.foto}
                            judul={beritaSekolah.judul}
                            tgl={beritaSekolah.updatedAt}
                            kat='sekolah'
                        />
                    </Link>
                ))}
                </div>
            </div>
        </div>
    )
}

export default DaftarBerita
