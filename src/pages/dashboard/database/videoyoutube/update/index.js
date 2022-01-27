import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

const DatabaseVideoYoutubeUpdate = () => {
    const [judul, setJudul] = useState('')
    const [linkyoutube, setLinkyoutube] = useState('')
    const history = useHistory()
    const { id } = useParams()

    const updateVideoYoutube = async (e) => {
        e.preventDefault()
        await axios.patch(`http://localhost:3210/video-youtube/${id}`, {
            judul: judul,
            link_youtube: linkyoutube,

        })
        history.push( '/dashboard/video-youtube/get')
    }
    useEffect(() => {
        getVideoYoutubeById()
    }, [])

    const getVideoYoutubeById = async() => {
        const response = await axios.get(`http://localhost:3210/video-youtube/${id}`)
        setJudul(response.data.judul)
        setLinkyoutube(response.data.link_youtube)
    }

    return (
        <div className='dashboard-form'>
            <form onSubmit={ updateVideoYoutube }>
                <div className="form-dashboard">
                    <label >judul</label>
                    <input 
                        type="text" 
                        placeholder='judul' 
                        value={ judul }
                        onChange={ (e) => setJudul(e.target.value) }
                    />
                </div>
                <div className="form-dashboard">
                    <label>Link Youtube</label>
                    <input 
                        type="text" 
                        placeholder='Link Youtube' 
                        value={ linkyoutube }
                        onChange={ (e) => setLinkyoutube(e.target.value) }
                    />
                </div>
                <div className="form-dashboard">
                    <button className="button-normal">Simpan Data Video Youtube</button>
                </div>
            </form>
        </div>
    )
}

export default DatabaseVideoYoutubeUpdate
