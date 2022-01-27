import React from 'react'
import { CardIkon, Title } from '../../../../components'
import { useHistory } from 'react-router-dom'

const Database = () => {
    const history = useHistory()

    function ptanggaran (){history.push('/dashboard/anggaran/get')}
    function ptberitasekolah (){history.push('/dashboard/berita-sekolah/get')}
    function ptberitaumum (){history.push('/dashboard/berita-umum/get')}
    function ptdatasekolah (){history.push('/dashboard/data-sekolah/get')}
    function ptfasilitassekolah (){history.push('/dashboard/fasilitas-sekolah/get')}
    function ptkegiatangaleri (){history.push('/dashboard/kegiatan-galeri/get')}
    function ptkegiatansekolah (){history.push('/dashboard/kegiatan-sekolah/get')}
    function ptprofilguru (){history.push('/dashboard/profil-guru/get')}
    function ptvideoyoutube (){history.push('/dashboard/video-youtube/get')}

    return (
        <div>
            <Title title='database' subtitle='beranda'/>
            <div className='database-col'>
                <CardIkon 
                    icon='fas fa-database'
                    judul='anggaran'
                    click={ptanggaran}
                />
                <CardIkon 
                    icon='fas fa-database'
                    judul='Berita Sekolah'
                    click={ptberitasekolah}
                />
                <CardIkon 
                    icon='fas fa-database'
                    judul='Berita umum'
                    click={ptberitaumum}
                />
                <CardIkon 
                    icon='fas fa-database'
                    judul='data sekolah beranda'
                    click={ptdatasekolah}
                />
                <CardIkon 
                    icon='fas fa-database'
                    judul='fasilitas beranda'
                    click={ptfasilitassekolah}
                />
                <CardIkon 
                    icon='fas fa-database'
                    judul='kegiatan beranda'
                    click={ptkegiatansekolah}
                />
                <CardIkon 
                    icon='fas fa-database'
                    judul='kegiatan galeri'
                    click={ptkegiatangaleri}
                />
                <CardIkon 
                    icon='fas fa-database'
                    judul='profil guru'
                    click={ptprofilguru}
                />
                <CardIkon 
                    icon='fas fa-database'
                    judul='video youtube'
                    click={ptvideoyoutube}
                />
            </div>
        </div>
    )
}

export default Database
