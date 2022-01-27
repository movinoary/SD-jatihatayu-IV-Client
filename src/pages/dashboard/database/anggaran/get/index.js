import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Title } from '../../../../../components'

const DatabseAnggaranGet = () => {
    const [anggaran, setAnggaran] = useState([])

    useEffect(() => {
        getAnggaran()
    }, [])

    const getAnggaran = async () => {
        const response = await axios.get('http://localhost:3210/anggaran')
        setAnggaran(response.data)
    }

    const deleteAnggaran = async (id) => {
        await axios.delete(`http://localhost:3210/anggaran/${id}`)
        getAnggaran()
    }

    return (
        <div>
            <div>
                <Title title='Data' subtitle='anggaran' desc='Berada di halaman profil subhalaman anggaran'/>
                <Link to='/dashboard/anggaran/add'>
                    <button className='button-normal'>Tambah Anggaran</button>
                </Link>
            </div>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>No</th>
                        <th>Keterangan</th>
                        <th>icon</th>
                        <th>Jumlah Rp</th>
                        <th>Data Rp</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    { anggaran.map((anggaran, index) => (
                    <tr key={anggaran.id}>
                        <td>{index + 1}</td>
                        <td>{anggaran.keterangan}</td>
                        <td><i className={anggaran.icon} /></td>
                        <td>{anggaran.jumlah_rp}</td>
                        <td>{anggaran.data_rp}</td>
                        <td>
                            <Link 
                                to={`/dashboard/anggaran/update/${anggaran.id}`} 
                                className='button-dash edit'
                            >
                                edit
                            </Link>
                            <button
                             onClick={() => deleteAnggaran(anggaran.id) }
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

export default DatabseAnggaranGet
