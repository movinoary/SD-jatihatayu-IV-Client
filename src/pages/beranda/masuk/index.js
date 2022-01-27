import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Sekolah from '../../../images/Sekolah.jpg'
import './style.css'

const PageMasuk = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3210/login', {
                email: email,
                password: password
            });
            history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    
    return (
        <div className='login'>
            <form onSubmit={Auth} className="login-input" data-aos="fade-left" data-aos-duration="1500">
                <div className="login-form">
                    <label >Username</label>
                    <div >
                        <input type="text"  placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />                                    </div>
                </div>
                <div className="login-form">
                    <label >Password</label>
                    <div >
                        <input type="password"  placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />                                    </div>
                </div>
                <div className="field mt-5">
                <p>{msg}</p>
                    <button className="button-normal">Login</button>
                </div>
            </form>
            <div className='login-image' data-aos="fade-right" data-aos-duration="1500">
                <img src={Sekolah} alt='login' />
            </div>
        </div>
    )
}

export default PageMasuk
