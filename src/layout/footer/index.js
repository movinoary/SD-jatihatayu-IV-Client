import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Footer = () => {
    return (
    <div className='footer-container'>
        <section className='footer-bawah'>
            <div className='footer-link-wrapper'>
            <h2 className='footer-subscription-heading' data-aos="fade-up" data-aos-duration="1500">
              Silahkan Hubungi Kami
            </h2>
            <div className='footer-about'>
              <div className='footer-link-items' data-aos="fade-left" data-aos-duration="1500">
                <p>Sosial Media</p>
                 <Link to='/'><i className='fab fa-instagram' /> Instagram</Link>
                 <Link to='/'><i className='fab fa-youtube' /> Youtube</Link>
                 <Link to='/'><i className='fab fa-facebook-f' /> Facebook</Link>
                 <Link to='/'><i className='fab fa-twitter' />Twitter</Link>
                 <Link to='/'><i className='fab fa-linkedin' />Linkdin</Link>
              </div>
              <div className='footer-link-items' data-aos="fade-right" data-aos-duration="1500">
                <p>Halaman</p>
                <Link to='/'>Beranda</Link>
                <Link to='/profil'>Profil</Link>
                <Link to='/e-learning'>E-Learning</Link>
                <Link to='/berita'>Berita</Link>
                <Link to='/masuk'>Masuk</Link>
              </div>
            </div>
            <div className='social-media-wrap' >
                <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                    SDN <span> Jatirahayu </span> IV
                </Link>
                </div>
                <small className='website-rights'>copyrigth 2021 © MV</small>
            </div>
          </div>
          <div className="lokasi" data-aos="zoom-in" data-aos-duration="1500">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7931.565454692225!2d106.9144505!3d-6.292261399999991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x412ff30a149e9751!2sSekolah%20Dasar%20Negeri%20Jati%20Rahayu%20IV!5e0!3m2!1sid!2sid!4v1638252643901!5m2!1sid!2sid" title="lokasi"/>
          </div>
        </section>
    </div> 
    )
}

export default Footer
