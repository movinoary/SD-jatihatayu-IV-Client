import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Footer, Header, SambutanKepalaSekolah } from '../../../layout'
import { CardBerita, CardDataSekolah, CardFasilitas, CardIkon, CardKegiatan, Title } from '../../../components'

const PageBeranda = () => {
    const [dataSekolah, setDatasekolah] = useState([])
    const [fasilitas, setFasilitas] = useState([])
    const [kegiatan, setKegiatan] = useState([])
    const history = useHistory()

    useEffect(() => {
        getFasilitas()
        getDataSekolah()
        getKegiatan()
    }, [])

    function profil (){history.push('/profil')}
    function profilguru (){history.push('/profil/guru')}
    function galerikegiatan (){history.push('/profil/galeri-sekolah')}
    function anggaran (){history.push('/profil/anggaran')}
    

    const getDataSekolah = async () => {
        const response = await axios.get('http://localhost:3210/data-sekolah')
        setDatasekolah(response.data)
    }

    const getFasilitas = async () => {
        const response = await axios.get('http://localhost:3210/fasilitas-sekolah')
        setFasilitas(response.data)
    }

    const getKegiatan = async () => {
        const response = await axios.get('http://localhost:3210/kegiatan-sekolah')
        setKegiatan(response.data)
    }

    return (        
    <div>
        <Header cname='header' judul='sekolah dasar negeri' subjudul='jatirahayu iv'/>
        <div className='beranda-row'>
            <Title title='sambutan' subtitle='kepala sekolah'/>
            <SambutanKepalaSekolah />
        </div>
        <div className='beranda-row row-icon' data-aos="fade-down" data-aos-duration="1500">
                <CardIkon
                    judul='Profil Sekolah'
                    icon="fas fa-school"
                    click={profil}

                />
                <CardIkon 
                    judul='Profil Guru'
                    icon='fas fa-chalkboard-teacher'
                    click={profilguru}

                />
                <CardIkon 
                    judul='Galeri Sekolah'
                    icon='fas fa-images'
                    click={galerikegiatan}

                />
                <CardIkon 
                    judul='Anggaran'
                    icon='far fa-chart-bar'
                    click={anggaran}

                />
        </div>
        <div className='beranda-row row-center number' data-aos="fade-up" data-aos-duration="1500">
            {dataSekolah.map((data) => (
                <CardDataSekolah
                  number={data.jumlah}
                  title={data.keterangan}
                /> 
            ))}
        </div>
        <div className='beranda-row ' >
            <Title title='fasilitas' subtitle='sekolah'/>
            <div className='row-center' data-aos="fade-up" data-aos-duration="1500">
                {fasilitas.map((fasilitas)=> (
                    <CardFasilitas 
                        img={fasilitas.foto}
                        title={fasilitas.keterangan}
                    />
                ))}
            </div>
        </div>
        <div className='beranda-row'>
            <Title title='kegiatan' subtitle='sekolah'/>
            <div className='row-grid' data-aos="fade-up" data-aos-duration="1500">
                {kegiatan.map((kegiatan) => (
                    <CardKegiatan 
                        img={kegiatan.foto}
                        title={kegiatan.keterangan}
                    />
                ))}
            </div>
        </div>
        <div className='beranda-row'>
        <Title title='berita' subtitle='sekolah'/>
            <div className='row-center' data-aos="fade-up" data-aos-duration="1500">
                <CardBerita />
                <CardBerita />
                <CardBerita />
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default PageBeranda;
