import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Title } from '../../../../../components'

const DatabaseVideoYoutubeGet = () => {
    const [videoyoutube, setVideoyoutube] = useState([])

    useEffect(() => {
        getVideoYoutube()
    }, [])

    const getVideoYoutube = async () => {
        const response = await axios.get('http://localhost:3210/video-youtube')
        setVideoyoutube(response.data)
    }

    const deleteVideoYoutube = async (id) => {
        await axios.delete(`http://localhost:3210/video-youtube/${id}`)
        getVideoYoutube()
    }

    return (
        <div>
            <div>
                <Title title='Data' subtitle='video' titleend='youtube' desc='berada di halaman video'/>
                <Link to='/dashboard/video-youtube/add'>
                    <button className='button-normal'>Tambah Data Video youtube</button>
                </Link>
            </div>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>No</th>
                        <th>judul</th>
                        <th>Link Youtube</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody className='tbody'>
                    { videoyoutube.map((Video, index) => (
                    <tr key={Video.id}>
                        <td>{index + 1}</td>
                        <td>{Video.judul}</td>
                        <td>{Video.link_youtube}</td>
                        <td>
                            <Link 
                                to={`/dashboard/video-youtube/update/${Video.id}`} 
                                className='button-dash edit'
                            >
                                edit
                            </Link>
                            <button
                             onClick={() => deleteVideoYoutube(Video.id) }
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

export default DatabaseVideoYoutubeGet
