import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const DatabaseAnggaranInsert = () => {
    const [keterangan, setKeterangan] = useState('')
    const [icon, setIcon] = useState('')
    const [jumlahrp, setJumlahrp] = useState('')
    const [datarp, setDatarp] = useState('')
    const history = useHistory()

    const saveAnggaran = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3210/anggaran', {
            keterangan: keterangan,
            icon: icon,
            jumlah_rp: jumlahrp,
            data_rp: datarp
        })
        history.push( '/dashboard/anggaran/get')
    }

    return (
        <div className='dashboard-form'>
            <form onSubmit={ saveAnggaran }>
                <div className="form-dashboard">
                    <label>Keterangan</label>
                    <input 
                        type="text" 
                        placeholder=' Masukan keterangan' 
                        value={ keterangan }
                        onChange={ (e) => setKeterangan(e.target.value) }
                    />
                </div>
                <div className="form-dashboard">
                    <label className='label'>Icon</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder='Masukan Icon format "fab fa-nama" Cari Icon di "https://fontawesome.com/" ' 
                        value={ icon }
                        onChange={ (e) => setIcon(e.target.value) }
                    />
                </div>
                <div className="form-dashboard">
                    <label className='label'>Jumlah Rp</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder='Masukan "Rp.100.200.300"' 
                        value={ jumlahrp }
                        onChange={ (e) => setJumlahrp(e.target.value) }
                    />
                </div>
                <div className="form-dashboard">
                    <label className='label'>Data Rp</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder='Masukan "100200300"' 
                        value={ datarp }
                        onChange={ (e) => setDatarp(e.target.value) }
                    />
                </div>
                <div className="form-dashboard">
                    <button className="button-normal">Simpan Data Anggaran</button>
                </div>
            </form>

        </div>
    )
}

export default DatabaseAnggaranInsert
