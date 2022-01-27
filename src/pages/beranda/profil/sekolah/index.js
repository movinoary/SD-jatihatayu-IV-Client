import React from 'react'
import { Header, LayoutProfilSekolah } from '../../../../layout'

const ProfilSekolah = () => {
    return (
        <div>
            <Header cname='header sub' judul='Profil' subjudul='sekolah'/>
            <div className='beranda-row' data-aos="fade-up" data-aos-duration="1500">
                <LayoutProfilSekolah />
            </div>
        </div>
    )
}

export default ProfilSekolah
