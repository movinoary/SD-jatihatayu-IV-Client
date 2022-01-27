import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Route, Switch, useHistory, Link } from 'react-router-dom';
import './style.css'
import {  DatabaseAnggaranInsert, DatabaseAnggaranUpdate, DatabaseDataSekolahGet, DatabaseDataSekolahInsert, DatabaseDataSekolahUpdate, DatabseAnggaranGet, DatabaseVideoYoutubeGet, DatabaseVideoYoutubeInsert, DatabaseVideoYoutubeUpdate, DatabaseFasilitasGet, DatabaseFasilitasInsert,  DatabaseKegiatanSekolahGet, DatabaseKegiatanSekolahInsert,  DatabaseKegiatanGaleriGet,  DatabaseKegiatanGaleriInsert, DatabaseBeritaSekolahGet, DatabaseBeritaSekolahInsert,  DatabaseBeritaUmumGet, DatabaseBeritaUmumInsert,  DatabaseProfilGuruget, DatabaseProfilGuruInsert, Database, DatabaseFasilitasUpdate, DatabaseBeritaSekolahUpdate, DatabaseBeritaUmumUpdate, DatabaseKegiatanSekolahUpdate, DatabaseKegiatanGaleriUpdate, DatabaseProfilGuruUpdate, DatabaseUserInsert } from '../database';
import { DataNavDashboard } from './Nav/datanav';
import SubNavDashboard from './Nav/subnav';

const PageDashboard = () => {
    const [click, setClick] = useState (false);
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();


    function handleClick(){
        setClick(!click);
    };

    function tambahUsers(){history.push('/dashboard/users/insert')}

    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:3210/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/");
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:3210/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:3210/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }  

    const Logout = async() => {
        try {
            await axios.delete('http://localhost:3210/logout')
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUsers = async (id) => {
        await axios.delete(`http://localhost:3210/users/${id}`)
        getUsers()
    }

    return (
        <div className='page-dashboard'>
            <nav className='nav-dashboard'>
            <div className='nav-dash-title'>
              <div className='nav-title'>
                <i className={click ? "fas fa-arrow-alt-circle-left" : 'fas fa-bars' } onClick={handleClick}/>
                <Link to='/dashboard' className='nav-link'>
                    <h3>SDN <span> Jatirahayu  </span> IV</h3>  
                </Link>
              </div>
              <div className='nav-title'>
                <h3>Akun <span>{name}</span></h3>
                <button  onClick={Logout} className='button-keluar'>keluar</button>
              </div>
            </div>
          </nav>
            <div className='dashboard-row'>
                <div className={click ? 'nav-dash-menu' : "nav-hide" }>
                    {DataNavDashboard.map((item, index) => {
                        return <SubNavDashboard item={item} key={index} />;
                    })}
                </div>
                <div className='dashboard-isi'>
                <Switch>
                    <Route exact path="/dashboard">
                        <Database />
                        <button onClick={getUsers} className="button-normal">Get Users</button>
                        <button onClick={tambahUsers} className="button-normal">Tambah Users</button>
                        <table className="table">
                            <thead className='thead'>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='tbody'>
                                {users.map((user, index) => (
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                        <button className='button-dash edit'>
                                            edit
                                        </button>
                                        <button onClick={() => deleteUsers(user.id) }className='button-dash delete' > 
                                            delete
                                        </button>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Route>
                    <Route path="/dashboard/users/insert">
                        <DatabaseUserInsert />
                    </Route>
                {/* Awal DataBase */}
                    {/* Database Anggaran */}
                        <Route path="/dashboard/anggaran/get">
                            <DatabseAnggaranGet />
                        </Route>
                        <Route path="/dashboard/anggaran/add">
                            <DatabaseAnggaranInsert />
                        </Route>
                        <Route path="/dashboard/anggaran/update/:id">
                            <DatabaseAnggaranUpdate />
                        </Route>
                    {/* Database Berita Sekolah */}
                        <Route path="/dashboard/berita-sekolah/get">
                            <DatabaseBeritaSekolahGet/>
                        </Route>
                        <Route path="/dashboard/berita-sekolah/add">
                            <DatabaseBeritaSekolahInsert />
                        </Route>
                        <Route path="/dashboard/berita-sekolah/update/:id">
                            <DatabaseBeritaSekolahUpdate />
                        </Route>
                    {/* Database Berita Umum */}
                        <Route path="/dashboard/berita-umum/get">
                            <DatabaseBeritaUmumGet/>
                        </Route>
                        <Route path="/dashboard/berita-umum/add">
                            <DatabaseBeritaUmumInsert />
                        </Route>
                        <Route path="/dashboard/berita-umum/update/:id">
                            <DatabaseBeritaUmumUpdate />
                        </Route>
                    {/* Database Data Sekolah */}
                        <Route path="/dashboard/data-sekolah/get">
                            <DatabaseDataSekolahGet/>
                        </Route>
                        <Route path="/dashboard/data-sekolah/add">
                            <DatabaseDataSekolahInsert />
                        </Route>
                        <Route path="/dashboard/data-sekolah/update/:id">
                            <DatabaseDataSekolahUpdate />
                        </Route>
                    {/* Database Fasilitas */}
                        <Route path="/dashboard/fasilitas-sekolah/get">
                            <DatabaseFasilitasGet/>
                        </Route>
                        <Route path="/dashboard/fasilitas-sekolah/add">
                            <DatabaseFasilitasInsert />
                        </Route>
                        <Route path="/dashboard/fasilitas-sekolah/update/:id">
                            <DatabaseFasilitasUpdate />
                        </Route>
                    {/* Database Kegiatan Sekolah */}
                        <Route path="/dashboard/kegiatan-sekolah/get">
                            <DatabaseKegiatanSekolahGet/>
                        </Route>
                        <Route path="/dashboard/kegiatan-sekolah/add">
                            <DatabaseKegiatanSekolahInsert />
                        </Route>
                        <Route path="/dashboard/kegiatan-sekolah/update/:id">
                            <DatabaseKegiatanSekolahUpdate />
                        </Route>
                    {/* Database Kegiatan Galeri */}
                        <Route path="/dashboard/kegiatan-galeri/get">
                            <DatabaseKegiatanGaleriGet/>
                        </Route>
                        <Route path="/dashboard/kegiatan-galeri/add">
                            <DatabaseKegiatanGaleriInsert />
                        </Route>
                        <Route path="/dashboard/kegiatan-galeri/update/:id">
                            <DatabaseKegiatanGaleriUpdate />
                        </Route>
                    {/* Database Profil Guru */}
                        <Route path="/dashboard/profil-guru/get">
                            <DatabaseProfilGuruget/>
                        </Route>
                        <Route path="/dashboard/profil-guru/add">
                            <DatabaseProfilGuruInsert />
                        </Route>
                        <Route path="/dashboard/profil-guru/update/:id">
                            <DatabaseProfilGuruUpdate />
                        </Route>
                    {/* Database Video Youtube */}
                        <Route path="/dashboard/video-youtube/get">
                            <DatabaseVideoYoutubeGet/>
                        </Route>
                        <Route path="/dashboard/video-youtube/add">
                            <DatabaseVideoYoutubeInsert />
                        </Route>
                        <Route path="/dashboard/video-youtube/update/:id">
                            <DatabaseVideoYoutubeUpdate />
                        </Route>
                {/* Akhir DataBase */}
                </Switch>
                </div>
            </div>
        </div>
    )
}

export default PageDashboard
