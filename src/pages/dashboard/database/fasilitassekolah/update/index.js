import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const DatabaseFasilitasUpdate = () => {
    const [image, setImage] = useState([]);
    const [saveImage, setSaveImage] = useState(null);
    const [keterangan, setKeterangan] = useState('')
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        getFasilitas()
    })

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

  
        fetch(`http://localhost:3210/fasilitas-sekolah/${id}`, {
          method: "put",
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            history.push( '/dashboard/fasilitas-sekolah/get')
          });
      } else {
        alert("Upload gambar dulu");
      }
    }

    const getFasilitas = async() => {
        const response = await axios.get(`http://localhost:3210/fasilitas-sekolah/${id}`)
        setKeterangan(response.data.keterangan)
        setImage(response.data.foto)
    }
  
  
  
    return (
      <div className="dashboard-form">
        <div className='form-dashboard'>
            <img src={image} alt="fasilitas" />
            <label >Upload image here</label>
            <input
              onChange={handleUploadChange}
              type="file"
              id="formFile"
            />
          </div>
          <div className='form-dashboard'>
           <label> Keterangan</label>
          <input
            type="text"
    
            placeholder='Masukan Keterangan'
            onChange={(e) => setKeterangan(e.target.value)}
          />
          </div>
          <button onClick={handleSave} className="button-normal"> Simpan Data Fasilitas </button>
      </div>
    );
  }

export default DatabaseFasilitasUpdate
