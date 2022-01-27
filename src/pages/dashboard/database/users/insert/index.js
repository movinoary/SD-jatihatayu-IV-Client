import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const DatabaseUserInsert = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3210/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
    <div className='dashboard-form'>
            <form onSubmit={Register}>
                <p>{msg}</p>
                <div className='form-dashboard'>
                    <label>Nama</label>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='form-dashboard'>
                    <label>E-mail</label>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-dashboard'>
                    <label>Password</label>
                    <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-dashboard'>
                    <label>Konfirmasi Password</label>
                    <input type="password" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                </div>
            <div className='input-button'>
             <button className='button-normal'>Tambah Users</button>
            </div>
        </form>
    </div>
    )
}

export default DatabaseUserInsert
