import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const DatabaseVideoYoutubeInsert = () => {
    const [judul, setJudul] = useState('')
    const [linkyoutube, setLinkyoutube] = useState('')

    const history = useHistory()

    const saveVideoYoutube = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3210/video-youtube', {
            judul: judul,
            link_youtube: linkyoutube,
        })
        history.push( '/dashboard/video-youtube/get')
    }

    return (
        <div className='dashboard-form'>
            <form onSubmit={ saveVideoYoutube }>
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
                    <label >link youtube</label>
                    <input 
                        type="text" 
                        placeholder='Link Youtube' 
                        value={ linkyoutube }
                        onChange={ (e) => setLinkyoutube(e.target.value) }
                    />
                </div>
                <div className="form-dashboard">
                    <button className="button-normal">simpan data video youtube</button>
                </div>
            </form>

        </div>
    )
}

export default DatabaseVideoYoutubeInsert
