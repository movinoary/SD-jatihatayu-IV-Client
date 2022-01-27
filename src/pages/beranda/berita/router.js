import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from '../../../layout'
import './style.css'
import DaftarBerita from './daftar'
import Beritaumum from './umum'
import BeritaSekolah from './sekolah'

const RouterBerita = () => {
    return (
        <div>
            <Header cname='header sub' judul='Berita' subjudul='sekolah' />
            <Switch>
                <Route exact path='/berita'>
                    <DaftarBerita />
                </Route>
                <Route path='/berita/umum/:id'>
                    <Beritaumum />
                </Route>
                <Route path='/berita/sekolah/:id'>
                    <BeritaSekolah />
                </Route>
            </Switch>
        </div>
    )
}

export default RouterBerita
