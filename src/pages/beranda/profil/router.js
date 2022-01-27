import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { CardIkon } from '../../../components'
import ProfilAnggaran from './anggaran'
import ProfilGuru from './guru'
import ProfilLengkapGuru from './guru/lengkap'
import ProfilKegiatan from './kegiatan'
import ProfilSekolah from './sekolah'
 

const RouterProfil = () => {
    const history = useHistory()

    function profil (){history.push('/profil')}
    function profilguru (){history.push('/profil/guru')}
    function galerikegiatan (){history.push('/profil/galeri-sekolah')}
    function anggaran (){history.push('/profil/anggaran')}

    return (
        <div>
            <div className='profil-row row-icon' data-aos="flip-up" data-aos-duration="1500">
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
        <Switch>
            <Route exact path="/profil">
                <ProfilSekolah />
            </Route>
            <Route path="/profil/guru">
                <ProfilGuru />
            </Route>
            <Route exact path='/profil/profil-guru/:id'>
                <ProfilLengkapGuru />
            </Route>
            <Route path="/profil/galeri-sekolah">
                 <ProfilKegiatan />
            </Route>
            <Route path="/profil/anggaran">
                <ProfilAnggaran />
            </Route>
        </Switch>
        </div>
    )
}

export default RouterProfil
