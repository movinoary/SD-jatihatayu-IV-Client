import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Title } from '../../../../../components'

const DatabaseKegiatanSekolahGet = () => {
    const [kegiatan, setKegiatan] = useState([])

    useEffect(() => {
        getKegiatan()
    }, [])

    const getKegiatan = async () => {
        const response = await axios.get('http://localhost:3210/kegiatan-sekolah')
        setKegiatan(response.data)
    }

    const deleteKegiatan = async (id) => {
        await axios.delete(`http://localhost:3210/kegiatan-sekolah/${id}`)
        getKegiatan()
    }

    return (
        <div>
            <div>
                <Title title='Data' subtitle='Kegiatan' titleend='Beranda' desc='beradan di halaman beranda max 4'/>
                <Link to='/dashboard/kegiatan-sekolah/add'>
                    <button className='button-normal'>Tambah Data Kegiatan Beranda</button>
                </Link>
            </div>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>No</th>
                        <th>Keterangan</th>
                        <th>Foto</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    { kegiatan.map((kegiatan, index) => (
                    <tr key={kegiatan.id}>
                        <td>{index + 1}</td>
                        <td>{kegiatan.keterangan}</td>
                        <td><img src={kegiatan.foto} alt='kegitan sekolah' className='img-tabel' /></td>

                        <td>
                            <Link 
                                to={`/dashboard/kegiatan-sekolah/update/${kegiatan.id}`} 
                                className='button-dash edit'
                            >
                                edit
                            </Link>
                            <button
                             onClick={() => deleteKegiatan(kegiatan.id) }
                             className='button-dash delete'
                            > 
                                delete
                            </button>
                        </td>
                    </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default DatabaseKegiatanSekolahGet
