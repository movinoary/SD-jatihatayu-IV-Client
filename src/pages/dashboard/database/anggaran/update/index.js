import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const DatabaseAnggaranUpdate = () => {
    const [keterangan, setKeterangan] = useState('')
    const [icon, setIcon] = useState('')
    const [jumlahrp, setJumlahrp] = useState('')
    const [datarp, setDatarp] = useState('')
    const history = useHistory()
    const { id } = useParams()

    const updateAnggaran = async (e) => {
        e.preventDefault()
        await axios.patch(`http://localhost:3210/anggaran/${id}`, {
            keterangan: keterangan,
            icon: icon,
            jumlah_rp: jumlahrp,
            data_rp: datarp
        })
        history.push( '/dashboard/anggaran/get')
    }
    useEffect(() => {
        getAnggaranById()
    }, [])

    const getAnggaranById = async() => {
        const response = await axios.get(`http://localhost:3210/anggaran/${id}`)
        setKeterangan(response.data.keterangan)
        setIcon(response.data.icon)
        setJumlahrp(response.data.jumlah_rp)
        setDatarp(response.data.data_rp)
    }

    return (
        <div className='dashboard-form'>
            <form onSubmit={ updateAnggaran }>
                <div className="form-dashboard">
                    <label>Keterangan</label>
                    <input 
                        type="text" 
                        placeholder='keterangan' 
                        value={ keterangan }
                        onChange={ (e) => setKeterangan(e.target.value) }
                    />
                </div>
                <div className="form-dashboard">
                    <label>Icon</label>
                    <input 
                        type="text" 
                        placeholder='Price' 
                        value={ icon }
                        onChange={ (e) => setIcon(e.target.value) }
                    />
                </div>
                <div className="form-dashboard">
                    <label >Jumlah Rp</label>
                    <input 
                        type="text" 
                        placeholder='Price' 
                        value={ jumlahrp }
                        onChange={ (e) => setJumlahrp(e.target.value) }
                    />
                </div>
                <div className="form-dashboard">
                    <label >Data Rp</label>
                    <input 
                        type="text" 
                        placeholder='Price' 
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

export default DatabaseAnggaranUpdate
