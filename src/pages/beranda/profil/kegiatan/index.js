import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Header } from '../../../../layout'
import { CardKegiatan } from '../../../../components'

const ProfilKegiatan = () => {
    const [kegiatan, setKegiatan] = useState([])

    useEffect(() => {
        getKegiatan()
    }, [])

    const getKegiatan = async () => {
        const response = await axios.get('http://localhost:3210/kegiatan-Galeri')
        setKegiatan(response.data)
    }

    return (
        <div>
            <Header cname='header sub' judul='gelari' subjudul='kegiatan'/>
            <div className='beranda-row row-grid'>
                {kegiatan.map((kegiatan) => (
                    <CardKegiatan
                        img={kegiatan.foto}
                        title={kegiatan.keterangan}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProfilKegiatan
