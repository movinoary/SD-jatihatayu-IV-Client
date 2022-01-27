// Database
import Database from "./route";

//Database User
import DatabaseUsers from "./users/get";
import DatabaseUserInsert from "./users/insert";

// Database Anggaran
import DatabseAnggaranGet from "./anggaran/get";
import DatabaseAnggaranInsert from "./anggaran/insert";
import DatabaseAnggaranUpdate from "./anggaran/update";


// Database Berita Sekolah
import DatabaseBeritaSekolahGet from "./beritasekolah/get";
import DatabaseBeritaSekolahInsert from "./beritasekolah/insert";
import DatabaseBeritaSekolahUpdate from "./beritasekolah/update";

// Database Berita Umum
import DatabaseBeritaUmumGet from "./beritaumum/get";
import DatabaseBeritaUmumInsert from "./beritaumum/insert";
import DatabaseBeritaUmumUpdate from "./beritaumum/update";

// Database DataSekolah
import DatabaseDataSekolahGet from "./datasekolah/get";
import DatabaseDataSekolahInsert from "./datasekolah/insert";
import DatabaseDataSekolahUpdate from "./datasekolah/update";

// Database Fasilitas Sekolah
import DatabaseFasilitasGet from "./fasilitassekolah/get";
import DatabaseFasilitasInsert from "./fasilitassekolah/insert";
import DatabaseFasilitasUpdate from "./fasilitassekolah/update";

// Database Kegiatan Galeri
import DatabaseKegiatanGaleriGet from "./kegiatangaleri/get";
import DatabaseKegiatanGaleriInsert from "./kegiatangaleri/insert";
import DatabaseKegiatanGaleriUpdate from "./kegiatangaleri/update";

// Database Kegiatan Sekolah
import DatabaseKegiatanSekolahGet from "./kegiatansekolah/get";
import DatabaseKegiatanSekolahInsert from "./kegiatansekolah/insert";
import DatabaseKegiatanSekolahUpdate from "./kegiatansekolah/update";

// Database Profil Guru 
import DatabaseProfilGuruget from "./profilguru/get";
import DatabaseProfilGuruInsert from "./profilguru/insert";
import DatabaseProfilGuruUpdate from "./profilguru/update";

// Database Video Youtube
import DatabaseVideoYoutubeGet from "./videoyoutube/get";
import DatabaseVideoYoutubeInsert from "./videoyoutube/insert";
import DatabaseVideoYoutubeUpdate from "./videoyoutube/update";

export {
    // Database
    Database,
    
    //Database User
    DatabaseUsers,
    DatabaseUserInsert,

    // Database Anggaran
    DatabseAnggaranGet,
    DatabaseAnggaranInsert,
    DatabaseAnggaranUpdate,

    // Database Berita Sekolah
    DatabaseBeritaSekolahGet,
    DatabaseBeritaSekolahInsert,
    DatabaseBeritaSekolahUpdate,

    // Database Berita Umum
    DatabaseBeritaUmumGet,
    DatabaseBeritaUmumInsert,
    DatabaseBeritaUmumUpdate,
    
    // Database DataSekolah
    DatabaseDataSekolahGet,
    DatabaseDataSekolahInsert,
    DatabaseDataSekolahUpdate,

    // Database Fasilitas
    DatabaseFasilitasGet,
    DatabaseFasilitasInsert,
    DatabaseFasilitasUpdate,
    
    // Database Kegiatan Galeri
    DatabaseKegiatanGaleriGet,
    DatabaseKegiatanGaleriInsert,
    DatabaseKegiatanGaleriUpdate,

    // Database kegiatan Sekolah
    DatabaseKegiatanSekolahGet,
    DatabaseKegiatanSekolahInsert,
    DatabaseKegiatanSekolahUpdate,

    // Database Profil Guru 
    DatabaseProfilGuruget,
    DatabaseProfilGuruInsert,
    DatabaseProfilGuruUpdate,
        
    // Database Video Youtube
    DatabaseVideoYoutubeGet,
    DatabaseVideoYoutubeInsert,
    DatabaseVideoYoutubeUpdate,
}