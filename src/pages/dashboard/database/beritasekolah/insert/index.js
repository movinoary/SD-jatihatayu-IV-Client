import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

const DatabaseBeritaSekolahInsert = () => {
    const [image, setImage] = useState("https://fakeimg.pl/350x200/");
    const [saveImage, setSaveImage] = useState(null);
    const [judul, setJudul] = useState('')
    const [tanggal, setTanggal] = useState('')
    const [isiBerita, setIsiBerita] = useState('')
    const [pencipta, setPencipta] = useState('')
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
        formData.append("judul", judul);
        formData.append("tanggal", tanggal);
        formData.append("isiberita", isiBerita);
        formData.append("pencipta", pencipta);

  
        fetch("http://localhost:3210/berita-sekolah", {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            history.push( '/dashboard/berita-sekolah/get')
          });
      } else {
        alert("Upload gambar dulu");
      }
    }
  
    return (
      <div className="dashboard-form">
        <div className='form-dashboard'>
        <img src={image}  alt="berita-umum" />
        <label>Upload Foto</label>
        <input
          onChange={handleUploadChange}
          type="file"
          id="formFile"
        />
        </div>
        <div className='form-dashboard'>
         <label>Judul</label>
        <input
          type="text"
          placeholder='Masukan Judul Berita'
          onChange={(event) => setJudul(event.target.value)}
        />
        </div>
        <div className='form-dashboard'>
        <label >Tanggal</label>
        <input
          type="date"
          onChange={(event) => setTanggal(event.target.value)}
        />
        </div>
        <div className='form-dashboard'>
        <label>Isi Berita</label>
        <textarea
          type="text"
          placeholder='Masukan Isi Berita'
          onChange={(event) => setIsiBerita(event.target.value)}
        />
        </div>
        <div className='form-dashboard'>
        <label>
          Pencipta / Sumber
        </label>
        <input
          type="text"
          placeholder='Masukan Nama Pembuat'
          onChange={(event) => setPencipta(event.target.value)}
        />
        </div>
        <button onClick={handleSave} className="button-normal">simpan data berita sekolah</button>
      </div>
    );
  }

export default DatabaseBeritaSekolahInsert
