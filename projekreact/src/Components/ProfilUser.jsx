import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { userdata } from './api'; // Sesuaikan dengan path file api jika diperlukan
import pic from '../Assets/img/ProfilPic.jpg';
import Navbar from './Navbar';
import './Index.css';

const ProfilUser = () => {
  const [formData, setFormData] = useState({
    Nama: '',
    Email: '',
    NoHp: '',
    TempatLahir: '',
    TgglLahir: '',
    Jenkel: ''
  });
  const [profilePic, setProfilePic] = useState('');
  const fileInputRef = useRef(null);

  const handleInput = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const { Nama, Email, NoHp, TempatLahir, TgglLahir, Jenkel } = formData;
    try {
      const response = await userdata(Nama, Email, NoHp, TempatLahir, TgglLahir, Jenkel, profilePic);
      console.log(response); // Mungkin Anda ingin melakukan sesuatu dengan respons
    } catch (error) {
      console.error(error);
      // Tindakan yang sesuai jika terjadi kesalahan
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    await handleInput();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Navbar />
        <div className="profile-container">
          <img
            className='img-user'
            src={profilePic || pic}
            alt="Profile"
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
        </div>
        <div className='Profil-user'>Profil</div>
        <div className='Favbtn-user'>
          <Link to="/BookmarkPage">
            <button name='submit-user'>Favorit</button>
          </Link>
        </div>
        <div className='Form-user'>
          <div className='Nama-user'>Nama</div>
          <div className='Email-user'>Email</div>
          <div className='Nohp-user'>
            <span className='spannomor'>No HP</span>
          </div>
          <div className='Input1-user'>
            <input
              type='text'
              name='Nama'
              placeholder='ex: Galleo Franco Malik'
              value={formData.Nama}
              onChange={handleChange}
            />
          </div>
          <div className='Input2-user'>
            <input
              type='email'
              name='Email'
              placeholder='ex: example@example.com'
              value={formData.Email}
              onChange={handleChange}
            />
          </div>
          <div className='Input3-user'>
            <input
              type='text'
              name='NoHp'
              placeholder='ex: 08123456789'
              value={formData.NoHp}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='Form2-user'>
          <div className='Tempat-user'>Tempat Lahir</div>
          <input
            name='TempatLahir'
            type='text'
            placeholder='ex: Yogyakarta'
            value={formData.TempatLahir}
            onChange={handleChange}
          />
          <div className='Tanggal-user'>Tanggal Lahir</div>
          <input
            name='TgglLahir'
            type='date'
            value={formData.TgglLahir}
            onChange={handleChange}
          />
          <div className='Jenis-user'>Jenis Kelamin</div>
          <div className='Laki-user'>
            <label htmlFor="laki">Laki-Laki</label>
          </div>
          <input
            name='Jenkel'
            type="radio"
            id='laki'
            value='Laki-Laki'
            checked={formData.Jenkel === 'Laki-Laki'}
            onChange={handleChange}
          />
          <div className='Perempuan-user'>
            <label htmlFor="perempuan">Perempuan</label>
          </div>
          <input
            name='Jenkel'
            type="radio"
            id='perempuan'
            value='Perempuan'
            checked={formData.Jenkel === 'Perempuan'}
            onChange={handleChange}
          />
        </div>

        <button name='keluar-user'>Keluar</button>
        <button type="submit" name='simpan-user'>Simpan</button>
      </form>
    </>
  );
}

export default ProfilUser;
