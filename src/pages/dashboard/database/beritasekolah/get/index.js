import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Title } from '../../../../../components'

const DatabaseBeritaSekolahGet = () => {
    const [berita, setBerita] = useState([])

    useEffect(() => {
        getBerita()
    }, [])

    const getBerita = async () => {
        const response = await axios.get('http://localhost:3210/berita-sekolah')
        setBerita(response.data)
    }

    const deleteBerita = async (id) => {
        await axios.delete(`http://localhost:3210/berita-sekolah/${id}`)
        getBerita()
    }

    return (
        <div>
            <div>
                <Title title='Data' subtitle='Berita' titleend='sekolah' desc='berada di  halaman berita'/>
                <Link to='/dashboard/berita-sekolah/add'>
                <button className='button-normal'>Tambah Data Berita Sekolah</button>
                </Link>
            </div>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Foto</th>
                        <th>Tanggal</th>
                        <th>Isi Berita</th>
                        <th>Pencipta/Sumber</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    { berita.map((berita, index) => (
                    <tr key={berita.id}>
                        <td>{index + 1}</td>
                        <td>{berita.judul}</td>
                        <td><img src={berita.foto} alt='profilGuru' className='img-tabel' /></td>
                        <td>{berita.updatedAt}</td>
                        <td>{berita.isi_berita}</td>
                        <td>{berita.pencipta}</td>

                        <td>
                            <Link 
                                to={`/dashboard/berita-sekolah/update/${berita.id}`} 
                                className='button-dash edit'
                            >
                                edit
                            </Link>
                            <button
                             onClick={() => deleteBerita(berita.id) }
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

export default DatabaseBeritaSekolahGet
