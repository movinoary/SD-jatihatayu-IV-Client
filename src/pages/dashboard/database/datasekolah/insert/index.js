import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const DatabaseDataSekolahInsert = () => {
    const [keterangan, setKeterangan] = useState('')
    const [jumlah, setJumlah] = useState('')

    const history = useHistory()

    const saveDataSekolah = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3210/data-sekolah', {
            keterangan: keterangan,
            jumlah: jumlah,
        })
        history.push( '/dashboard/data-sekolah/get')
    }

    return (
        <div className='dashboard-form'>
            <form onSubmit={ saveDataSekolah }>
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
                    <label >Jumlah</label>
                    <input 
                        type="text" 
                        placeholder='jumlah' 
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

export default DatabaseDataSekolahInsert
