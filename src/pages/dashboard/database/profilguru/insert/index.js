import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

const DatabaseProfilGuruInsert = () => {
    const [image, setImage] = useState("https://fakeimg.pl/350x200/");
    const [saveImage, setSaveImage] = useState(null);
    const [namedepan, setNamedepan] = useState('')
    const [namebelakang, setNamebelakang] = useState('')
    const [gelar, setGelar] = useState('')
    const [jabatan, setJabatan] = useState('')
    const [tempat, setTempat] = useState('')
    const [tanggal, setTanggal] = useState('')
    const [alamat, setAlamat] = useState('')
    const [descp, setDescp] = useState('')
    const [fb, setFb] = useState('')
    const [wa, setWa] = useState('')
    const [mail, setMail] = useState('')
    const [ig, setIg] = useState('')
    const history = useHistory()
  
    function handleUploadChange(e) {
      let uploaded = e.target.files[0];
      setImage(URL.createObjectURL(uploaded));
      setSaveImage(uploaded);
    }
  
    function handleSave() {
      if (saveImage) {
        // save image to backend
        let formData = new FormData();
        formData.append("photo", saveImage);
        formData.append("namadepan", namedepan);
        formData.append("namabelakang", namebelakang);
        formData.append("gelar", gelar);
        formData.append("jabatan", jabatan);
        formData.append("tempatlahir", tempat);
        formData.append("tanggallahir", tanggal);
        formData.append("alamat", alamat);
        formData.append("desc", descp);
        formData.append("facebook", fb);
        formData.append("wa", wa);
        formData.append("email", mail);
        formData.append("instagram", ig);
  
        fetch("http://localhost:3210/profil-guru", {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            history.push( '/dashboard/profil-guru/get')
          });
      } else {
        alert("Upload gambar dulu");
      }
    }
  
    return (
      <div className="dashboard-form">
        <div className='form-dashboard'>
          <img src={image} alt="..." />
          <label>Upload image here</label>
          <input
            onChange={handleUploadChange}
            type="file"
            id="formFile"
          />
        </div>
        <div className='form-dashboard'>
         <label >Nama Depan</label>
          <input
            placeholder='Masukan Nama Depan'
            type="text"
            onChange={(event) => setNamedepan(event.target.value)}
          />
        </div>
        <div className='form-dashboard'>
          <label>Nama Belakang </label>
          <input
            placeholder='Masukan Nama Belakang'
            type="text"
            onChange={(event) => setNamebelakang(event.target.value)}
          />
        </div>
        <div className='form-dashboard'>
          <label>Gelar </label>
          <input
            placeholder='Masukan Gelar'
            type="text"
            onChange={(event) => setGelar(event.target.value)}
          />
        </div>
        <div className='form-dashboard'>
          <label >Jabatan</label>
          <input
            placeholder='Masukan Posisi Guru'
            type="text"
            onChange={(event) => setJabatan(event.target.value)}
          />
        </div>
        <div className='form-dashboard'>
          <label >Tempat Lahir</label>
          <input
            placeholder='Masukan Tempat Lahir'
            type="text"
            onChange={(event) => setTempat(event.target.value)}
          />
        </div>
        <div className='form-dashboard'>
          <label>Tanggal Lahir </label>
          <input
            placeholder='Masukan Tanggal Lahir "31-des-1999"'
            type="text"
            onChange={(event) => setTanggal(event.target.value)}
          />
        </div>
        <div className='form-dashboard'>
          <label >Alamat</label>
          <input
            placeholder='Masukan Alamat'
            type="text"
            onChange={(event) => setAlamat(event.target.value)}
          />
        </div>
        <div className='form-dashboard'>
          <label >Desc</label>
          <input
            placeholder='Masukan Desc'
            type="text"
            onChange={(event) => setDescp(event.target.value)}
          />
        </div>
        <div className='form-dashboard'>
          <label>Whatsapp </label>
          <input
            placeholder='Masukan Nomer Whatsapp'
            type="text"
            onChange={(event) => setFb(event.target.value)}
          />
        </div>
        <div className='form-dashboard'>
          <label >Facebook</label>
          <input
            placeholder='Masukan Nama Facebook'
            type="text"
            onChange={(event) => setWa(event.target.value)}
          />
        </div>
        <div className='form-dashboard'>
          <label>E-Mail </label>
          <input
            placeholder='Masukan E-mail'
            type="text"
            onChange={(event) => setMail(event.target.value)}
          />
        </div>
        <div className='form-dashboard'>
          <label >Instagram</label>
          <input
            placeholder='Masukan ID Instagram'
            type="text"
            onChange={(event) => setIg(event.target.value)}
          />
        </div>
        <button onClick={handleSave} className="button-normal">Simpan Data Profil Guru</button>
      </div>
    );
}
  

export default DatabaseProfilGuruInsert
