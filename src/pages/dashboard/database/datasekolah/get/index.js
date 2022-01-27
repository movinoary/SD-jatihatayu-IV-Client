import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Title } from '../../../../../components'

const DatabaseDataSekolahGet = () => {
    const [datasekolah, setDatasekolah] = useState([])

    useEffect(() => {
        getDataSekolah()
    }, [])

    const getDataSekolah = async () => {
        const response = await axios.get('http://localhost:3210/data-sekolah')
        setDatasekolah(response.data)
    }

    const deleteDataSekolah = async (id) => {
        await axios.delete(`http://localhost:3210/data-sekolah/${id}`)
        getDataSekolah()
    }

    return (
        <div>
            <div>
            <Title title='Data' subtitle='sekolah' titleend='beranda' desc='berada di halaman beranda maximal pembuatan 3'/>
                <Link to='/dashboard/data-sekolah/add'>
                <button className='button-normal'>Tambah Data Sekolah</button>
                </Link>
            </div>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>No</th>
                        <th>Keterangan</th>
                        <th>Jumlah</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody className='tbody'>
                    { datasekolah.map((datasekolah, index) => (
                    <tr key={datasekolah.id}>
                        <td>{index + 1}</td>
                        <td>{datasekolah.keterangan}</td>
                        <td>{datasekolah.jumlah}</td>

                        <td>
                            <Link 
                                to={`/dashboard/data-sekolah/update/${datasekolah.id}`} 
                                className='button-dash edit'
                            >
                                edit
                            </Link>
                            <button
                             onClick={() => deleteDataSekolah(datasekolah.id) }
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

export default DatabaseDataSekolahGet
