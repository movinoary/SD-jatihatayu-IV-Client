import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Title } from '../../../../../components'

const DatabaseBEritaUmumGet = () => {
    const [berita, setBerita] = useState([])

    useEffect(() => {
        getBerita()
    }, [])

    const getBerita = async () => {
        const response = await axios.get('http://localhost:3210/berita-umum')
        setBerita(response.data)
    }

    const deleteBerita = async (id) => {
        await axios.delete(`http://localhost:3210/berita-umum/${id}`)
        getBerita()
    }

    return (
        <div>
            <div>
                <Title title='Data' subtitle='Berita' titleend='umum' desc='berada di halaman berita'/>
                <Link to='/dashboard/berita-umum/add'>
                    <button className='button-normal'>Tambah Data Berita Umum</button>
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
                        <td>{berita.tanggal}</td>
                        <td>{berita.isi_berita}</td>
                        <td>{berita.sumber}</td>

                        <td>
                            <Link 
                                to={`/dashboard/berita-umum/update/${berita.id}`} 
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

export default DatabaseBEritaUmumGet
