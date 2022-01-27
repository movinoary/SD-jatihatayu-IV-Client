import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

const DatabaseDataSekolahUpdate = () => {
    const [keterangan, setKeterangan] = useState('')
    const [jumlah, setJumlah] = useState('')
    const history = useHistory()
    const { id } = useParams()

    const updateDataSekolah = async (e) => {
        e.preventDefault()
        await axios.patch(`http://localhost:3210/data-sekolah/${id}`, {
            keterangan: keterangan,
            jumlah: jumlah,

        })
        history.push( '/dashboard/data-sekolah/get')
    }
    useEffect(() => {
        getDataSekolahById()
    }, [])

    const getDataSekolahById = async() => {
        const response = await axios.get(`http://localhost:3210/data-sekolah/${id}`)
        setKeterangan(response.data.keterangan)
        setJumlah(response.data.jumlah)
    }

    return (
        <div className='dashboard-form'>
            <form onSubmit={ updateDataSekolah }>
                <div className="form-dashboard">
                    <label >Keterangan</label>
                    <input 
                        type="text" 
                        placeholder='keterangan' 
                        value={ keterangan }
                        onChange={ (e) => setKeterangan(e.target.value) }
                    />
                </div>
                <div className="form-dashboard">
                    <label>Jumlah</label>
                    <input 
                        type="text" 
                        placeholder='Jumlah' 
                        value={ jumlah }
                        onChange={ (e) => setJumlah(e.target.value) }
                    />
                </div>
                <div className="form-dashboard">
                    <button className="button-normal">simpan data sekolah</button>
                </div>
            </form>
        </div>
    )
}

export default DatabaseDataSekolahUpdate
