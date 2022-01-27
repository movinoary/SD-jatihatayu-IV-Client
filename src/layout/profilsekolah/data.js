import React from 'react'
import './style.css'

const Identitas = () => {
    return (
        <div className='identitas'>
          <div className='identitas-list'>
            <p>Nama 	                    </p>                       
            <p>NPSN 	                    </p>       
            <p>Alamat 	                  </p> 
            <p>Kode Pos       	          </p>    
            <p>Desa/Kelurahan 	          </p>          
            <p>Kecamatan/Kota (LN) 	      </p>                 
            <p>Kab.-Kota/Negara (LN) 	    </p>          
            <p>Propinsi/Luar Negeri (LN) 	</p>               
            <p>Status Sekolah 	          </p>     
            <p>Waktu Penyelenggaraan 	    </p>                  
            <p>Jenjang Pendidikan 	      </p> 
          </div>
          <div className='identitas-isi'>
            <p>: 	SD NEGERI JATI RAHAYU IV</p>             
            <p>: 	20222815</p>                             
            <p>: 	Jl. Wisma Kusuma Indah Blok C No. 100</p>
            <p>: 	17414</p>                                
            <p>: 	JATI RAHAYU</p>                          
            <p>: 	Kec. Pondok Melati</p>                   
            <p>: 	Kota Bekasi</p>                          
            <p>: 	Prov. Jawa Barat</p>                     
            <p>: 	NEGERI</p>                               
            <p>: 	Sehari Penuh/5 hari</p>                  
            <p>: 	SD</p>                                   
          </div>
        </div>
    )
}

const Perizinan = () => {
  return (
      <div className='identitas'>
        <div className='identitas-list'>

        <p>Naungan 	                </p> 
        <p>No. SK. Pendirian 	      </p>       
        <p>Tanggal SK. Pendirian 	  </p>            
        <p>No. SK. Operasional 	    </p>                       
        <p>Tanggal SK. Operasional 	</p>                     
        <p>File SK Operasional 	    </p>                       
        <p>Akreditasi 	            </p>            
        <p>No. SK. Akreditasi 	    </p>                                   
        <p>Tanggal SK. Akreditasi 	</p>                     
        <p>No. Sertifikasi ISO 	    </p>                              
        </div>
      <div className='identitas-isi'>
        <p>: 	Kementerian Pendidikan dan Kebudayaan</p>
        <p>: 	165/PSD/1983</p>                         
        <p>: 	1983-02-01</p>                           
        <p>: 	165/PSD/1983</p>                         
        <p>: 	1983-02-01</p>                           
        <p>: 	Perlu Update</p>                         
        <p>: 	A</p>                                    
        <p>: 	02.00/330/BAP-SM/XI/2017</p>             
        <p>: 	20-11-2017</p>                           
        <p>: 	Belum Bersertifikat</p>                  
      </div>
      </div>
  )
}

const Prasarana = () => {
  return (
    <div className='identitas'>
      <div className='identitas-list'>
        <p>Sarana :</p>
        <p>1. Ruang Kepala Sekolah</p>
        <p>2. Ruang Guru</p>
        <p>3. Ruang Kelas</p>
        <p>4. Ruang Lab Komputer</p>
        <p>4. Lapangan Sekolah</p>
      </div>
      <div className='identias-isi'>
        <p>Prasarana :</p>
        <p>Akses Internet : 300Mbps (Indihome)</p>
        <p>Listrik : 12100 Watt (PLN)</p>
      </div>
      </div>
  )
}

const Kontak = () => {
  return (
    <div className='identitas'>
      <div className='identitas-list'>
        <p>Fax</p>
        <p>E-mail</p>
        <p>Website</p>
        <p>Operator</p>
        <p>No.telepon</p>
        </div>
      <div className='identitas-isi'>
        <p>: </p>
        <p>: sdnjatirahayu_4@yahoo.co.id</p>
        <p>: http://</p>
        <p>: 1</p>
        <p>: (021) 000 111 222</p>
      </div>
      </div>
  )
}

const Visi = () => {
  return (
      <div className='identitas'>
        <p>Menjadi sekolah yang unggul dan profesional dalam meningkatkan mutu pendidikan</p>
      </div>
  )
}

const Misi = () => {
  return (
      <div className='identitas-isi'>
        <p>1. Menanamkan budi pekerti yang luhur serta ketaqwaan terhadap Tuhan YME</p>
        <p>2. Meningkatkan dan mengembangkan generasi unggul melalui penguasaan ilmu pengetahuan, teknologi dan bahasa</p>
        <p>3. Mengembangkan pendidikan karakter yang berbasis iman dan moral</p>
        <p>4. Menyelenggarakan tata kelola yang baik melalui fungsi manajemen yang professional</p>
        <p>5. Meningkatkan mutu pendidikan melalui ekstrakurikuler</p>
      </div>
  )
}

const Maps = () => {
  return (
      <div className='identitas'>
        <iframe className='maps' title='maps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7931.565454692225!2d106.9144505!3d-6.292261399999991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x412ff30a149e9751!2sSekolah%20Dasar%20Negeri%20Jati%20Rahayu%20IV!5e0!3m2!1sid!2sid!4v1638252643901!5m2!1sid!2sid"/>
      </div>
  )
}

export {Identitas, Perizinan, Prasarana, Kontak, Visi, Misi, Maps} ;
