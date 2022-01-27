import React from 'react'
import { Chrono } from "react-chrono";
import { Identitas, Kontak, Misi, Perizinan, Prasarana, Visi } from './data';

function LayoutProfilSekolah() {
  const items = [  {
    cardSubtitle: <h1>Identitas Satuan Pendidikan</h1>,
    cardDetailedText: <Identitas />
  },
  {
    cardSubtitle: <h1>Dokumen dan Perizinan</h1>,
    cardDetailedText: <Perizinan />
  },
  {
    cardSubtitle: <h1>Sarana Prasarana</h1>,
    cardDetailedText: <Prasarana />
  },
  {
    cardSubtitle: <h1>Kontak</h1>,
    cardDetailedText: <Kontak />
  },
  {
    cardSubtitle: <h1>Visi</h1>,
    cardDetailedText: <Visi />
  },
  {
    cardSubtitle: <h1>Misi</h1>,
    cardDetailedText: <Misi />
  } ];

  return (
    <div style={{ width: "100%", height: "500px" }}>
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      cardHeight={120}
      theme={{ 
        primary: "green",
        secondary: "black",
        cardBgColor: "white",
        cardForeColor: "black",
        titleColor: "black"
      }}
    />
  </div>
  )
}

export default LayoutProfilSekolah
