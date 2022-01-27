import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

const DatabaseKegiatanGaleriInsert = () => {
    const [image, setImage] = useState("https://fakeimg.pl/350x200/");
    const [saveImage, setSaveImage] = useState(null);
    const [keterangan, setKeterangan] = useState('')
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
        formData.append("keterangan", keterangan);

  
        fetch("http://localhost:3210/kegiatan-galeri", {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            history.push( '/dashboard/kegiatan-galeri/get')
          });
      } else {
        alert("Upload gambar dulu");
      }
    }
  
  
  
    return (
      <div className="dashboard-form">
        <div className='form-dashboard'>
          <img src={image} alt="Kegiatan" />
          <label  >
            Upload image here
          </label>
          <input
            onChange={handleUploadChange}
            type="file"
            id="formFile"
          />
          </div>
          <div className='form-dashboard'>
           <label>
            Keterangan
          </label>
          <input
            type="text"
            placeholder='Masukan Keterangan'
            onChange={(event) => setKeterangan(event.target.value)}
          />
          </div>
          <button onClick={handleSave} className="button-normal">simpan data kegiatan galeri</button>
      </div>
    );
  }

export default DatabaseKegiatanGaleriInsert
