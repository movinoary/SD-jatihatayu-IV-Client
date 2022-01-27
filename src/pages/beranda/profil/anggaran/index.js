import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Header } from '../../../../layout'
import { CardGrafik } from '../../../../components'

const ProfilAnggaran = () => {
    const [anggaran, setAnggaran] = useState([])

    useEffect(() => {
        getAnggaran()
    }, [])

    const getAnggaran = async () => {
        const response = await axios.get('http://localhost:3210/anggaran')
        setAnggaran(response.data)
    }

    return (
        <div>
            <Header cname='header sub' judul='anggaran' />
            <div className='row-anggaran' >
                { anggaran.map((anggaran) => (
                    <CardGrafik 
                        icon={anggaran.icon}
                        judul={anggaran.keterangan}
                        judulnilai={anggaran.jumlah_rp}
                        datanilai={anggaran.data_rp}
                    />    
                )) }
            </div>
        </div>
    )
}

export default ProfilAnggaran
