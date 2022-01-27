import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'
import axios from 'axios'
import { Header } from '../../../layout'
import './style.css'

const PageVideo = () => {
    const [videoyoutube, setVideoyoutube] = useState([])

    useEffect(() => {
        getVideoYoutube()
    }, [])
 
    const getVideoYoutube = async () => {
        const response = await axios.get('http://localhost:3210/video-youtube')
        setVideoyoutube(response.data)
    }

    return (
        <div>
            <Header cname='header sub' judul='Video' />
            <div className='video-youtube'>
                {videoyoutube.map((video) => (
                    <div className='youtube-card'>
                        <div className='youtube-video' data-aos="zoom-in" data-aos-duration="1500">
                            <ReactPlayer url={video.link_youtube} width='100%' heigth='100%' />
                        </div>
                        <div className='youtube-desc' data-aos="zoom-out" data-aos-duration="1500">
                            <h3>{video.judul}</h3>
                        </div>
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default PageVideo
