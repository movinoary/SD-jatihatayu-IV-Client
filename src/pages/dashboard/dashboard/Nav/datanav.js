import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as ImIcons from 'react-icons/im';

export const DataNavDashboard = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <RiIcons.RiDashboardFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Database',
    icon: <AiIcons.AiFillDatabase />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: 'Anggaran',
      path: '/dashboard/anggaran/get',
        icon: <FaIcons.FaDatabase />
      },
      {
        title: 'Berita Sekolah',
      path: '/dashboard/berita-sekolah/get',
        icon: <FaIcons.FaDatabase />
      },
      {
        title: 'Berita Umum',
      path: '/dashboard/berita-umum/get',
        icon: <FaIcons.FaDatabase />
      },
      {
        title: 'Data Sekolah Beranda',
      path: '/dashboard/data-sekolah/get',
        icon: <FaIcons.FaDatabase />
      },
      {
        title: 'Fasilitas Beranda',
      path: '/dashboard/fasilitas-sekolah/get',
        icon: <FaIcons.FaDatabase />
      },
      {
        title: 'Kegiatan Beranda',
      path: '/dashboard/kegiatan-sekolah/get',
        icon: <FaIcons.FaDatabase />
      },
      {
        title: 'Kegiatan Galeri',
      path: '/dashboard/kegiatan-galeri/get',
        icon: <FaIcons.FaDatabase />
      },
      {
        title: 'Profil Guru',
      path: '/dashboard/profil-guru/get',
        icon: <FaIcons.FaDatabase />
      },
      {
        title: 'Video Youtube',
      path: '/dashboard/video-youtube/get',
        icon: <FaIcons.FaDatabase />
      }
    ],
  },
  {
    title: 'Data Siswa',
    icon: <ImIcons.ImProfile />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Kelas 1',
        icon: <RiIcons.RiNumber1 />
      },
      {
        title: 'Kelas 2',
        icon: <RiIcons.RiNumber2 />
      },
      {
        title: 'Kelas 3',
        icon: <RiIcons.RiNumber3 />
      },
      {
        title: 'Kelas 4',
        icon: <RiIcons.RiNumber4 />
      },
      {
        title: 'Kelas 5',
        icon: <RiIcons.RiNumber5 />
      },
      {
        title: 'Kelas 6',
        icon: <RiIcons.RiNumber6 />
      },
    ]
  },
  {
  title: 'DaftarNiai',
  icon: <ImIcons.ImBooks />,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,

  subNav: [
    {
      title: 'Kelas 1',
      icon: <RiIcons.RiBook3Fill />
    },
    {
      title: 'Kelas 2',
      icon: <RiIcons.RiBook3Fill />
    },
    {
      title: 'Kelas 3',
      icon: <RiIcons.RiBook3Fill />
    },
    {
      title: 'Kelas 4',
      icon: <RiIcons.RiBook3Fill />
    },
    {
      title: 'Kelas 5',
      icon: <RiIcons.RiBook3Fill />
    },
    {
      title: 'Kelas 6',
      icon: <RiIcons.RiBook3Fill />
    },
    
  ],
},
{
  title: 'Bank Soal',
  icon: <AiIcons.AiFillDatabase />,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,

  subNav: [
    {
      title: 'Pendidikan Agama',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'PKN',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'Bahasa Indonesia',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'Matematika',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'IPA',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'IPS',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'PJOK',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'SBdP',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'Bahasa Inggris',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'Bahasa Sunda',
      icon: <FaIcons.FaClipboardList />
    }
  ],
},
{
  title: 'Perangkat Pembelajaran',
  icon: <RiIcons.RiComputerFill />,
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,

  subNav: [
    {
      title: 'Silabus',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'RPP',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'KKM',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'Prota',
      icon: <FaIcons.FaClipboardList />
    },
    {
      title: 'Promes',
      icon: <FaIcons.FaClipboardList />
    },
  ],
},
  {
    title: 'Pengaturan',
    icon: <RiIcons.RiUserSettingsFill />
  }
];
