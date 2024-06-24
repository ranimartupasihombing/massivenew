// src/Components/BookmarkPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useBookmark } from './BookmarkContext';

const BookmarkPage = () => {
  const { bookmarkedItems } = useBookmark();

  return (
    <>
      <Navbar />
      <div className="bookmark-page_bookmark">
        <b className="favorit_bookmark">Favorit</b>
        <Link to="/ProfilUser">
          <img className="icon-share_bookmark" alt="Share Icon" src="src/Assets/img/Vector.png" id="iconShareImage" />
        </Link>
        <div className="halaman-utama-parent_bookmark">
          <b className="halaman-utama_bookmark">Halaman Utama</b>
          <b className="profil_bookmark">Profil</b>
          <b className="masukdaftar_bookmark">Masuk/Daftar</b>
          <b className="rekomendasi_bookmark">Rekomendasi</b>
          <b className="tentang-kami_bookmark">Tentang Kami</b>
        </div>
        {bookmarkedItems.map((item) => (
          <div key={item.id} className="rectangle-parent_bookmark">
            <div className="group-child_bookmark"></div>
            <b className="bika-ambon-rian_bookmark">{item.name}</b>
            <div className="group-item_bookmark"></div>
            <Link to={`/detailumkm/${item.id}`}>
              <b className="selengkapnya_bookmark">Selengkapnya &gt;</b>
            </Link>
            <img className="image-39-icon_bookmark" alt={item.name} src={item.thumbnail} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BookmarkPage;