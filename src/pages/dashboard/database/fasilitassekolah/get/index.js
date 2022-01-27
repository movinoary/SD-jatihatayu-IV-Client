import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Title } from '../../../../../components'

const DatabaseFasilitasGet = () => {
    const [fasilitas, setFasilitas] = useState([])

    useEffect(() => {
        getFasilitas()
    }, [])

    const getFasilitas = async () => {
        const response = await axios.get('http://localhost:3210/fasilitas-sekolah')
        setFasilitas(response.data)
    }

    const deleteFasilitas = async (id) => {
        await axios.delete(`http://localhost:3210/fasilitas-sekolah/${id}`)
        getFasilitas()
    }

    return (
        <div>
            <div>
                <Title title='Data' subtitle='Fasilitas' titleend='beranda' desc='beradan di halaman beranda max 3'/>
                <Link to='/dashboard/fasilitas-sekolah/add'>
                    <button className='button-normal'>Tambah Data Fasilitas</button>
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
                    { fasilitas.map((fasilitas, index) => (
                    <tr key={fasilitas.id}>
                        <td>{index + 1}</td>
                        <td>{fasilitas.keterangan}</td>
                        <td><img src={fasilitas.foto} alt='fasilitas' className='img-tabel' /></td>

                        <td>
                            <Link 
                                to={`/dashboard/fasilitas-sekolah/update/${fasilitas.id}`} 
                                className='button-dash edit'
                            >
                                edit
                            </Link>
                            <button
                             onClick={() => deleteFasilitas(fasilitas.id) }
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

export default DatabaseFasilitasGet
