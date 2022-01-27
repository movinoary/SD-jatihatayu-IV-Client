import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Title } from '../../../../../components'

const DatabaseProfilGuruGet = () => {
    const [profilGuru, setProfilGuru] = useState([])

    useEffect(() => {
        getProfilGuru()
    }, [])

    const getProfilGuru = async () => {
        const response = await axios.get('http://localhost:3210/profil-guru')
        setProfilGuru(response.data)
    }

    const deleteProfilGuru = async (id) => {
        await axios.delete(`http://localhost:3210/profil-guru/${id}`)
        getProfilGuru()
    }

    return (
        <div>
            <div>
                <Title title='Data' subtitle='profil' titleend='guru' desc='berada di halaman profil subhalaman profil guru'/>
                <Link to='/dashboard/profil-guru/add'>
                    <button className='button-normal'>Tambah Data Profil Guru</button>
                </Link>
            </div>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>No</th>
                        <th>Nama depan</th>
                        <th>Nama Belakang</th>
                        <th>Gelar</th>
                        <th>Jabatan</th>
                        <th>Foto</th>
                        <th>Tempat lahir</th>
                        <th>Tanggal Lahir</th>
                        <th>Alamat</th>
                        <th>Desc</th>
                        <th>Whatsapp</th>
                        <th>Facebook</th>
                        <th>E-mail</th>
                        <th>Instagram</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    { profilGuru.map((profil, index) => (
                    <tr key={profil.id}>
                        <td>{index + 1}</td>
                        <td>{profil.nama_depan}</td>
                        <td>{profil.nama_belakang}</td>
                        <td>{profil.gelar}</td>
                        <td>{profil.jabatan}</td>
                        <td><img src={profil.foto} alt='profilGuru' className='img-tabel' /></td>
                        <td>{profil.tempat_lahir}</td>
                        <td>{profil.tanggal_lahir}</td>
                        <td>{profil.alamat}</td>
                        <td>{profil.desc}</td>
                        <td>{profil.wa}</td>
                        <td>{profil.facebook}</td>
                        <td>{profil.email}</td>
                        <td>{profil.instagram}</td>
                        <td>
                            <Link 
                                to={`/dashboard/profil-guru/update/${profil.id}`} 
                                className='button-dash edit'
                            >
                                edit
                            </Link>
                            <button
                             onClick={() => deleteProfilGuru(profil.id) }
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

export default DatabaseProfilGuruGet
