import React, { useState } from 'react';
import './Index.css';
import lambang from "../Assets/img/lambang.png";
import home from '../Assets/img/1.png';
import { registerumkm } from './api'; // Pastikan Anda sudah membuat file api.js dengan fungsi login dan register
import { useNavigate } from 'react-router-dom';

const Daftar = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' }); // State untuk notifikasi

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await registerumkm(registerEmail, registerPassword);
      console.log(response);

      if (response.success) {
        setNotification({ message: response.message, type: 'success' }); // Notifikasi sukses
        navigate('/login2');
      } else {
        setNotification({ message: response.message, type: 'error' }); // Notifikasi gagal
      }
    } catch (error) {
      console.error('Registration error:', error.message);
      setNotification({ message: 'An unexpected error occurred. Please try again.', type: 'error' }); // Notifikasi error tidak terduga
    }
  };

  const redirectToLogin = () => {
    navigate('/login2');
  };

  return (
    <>
      <div className="login-umkmuser">
        <img className="homelog" alt="" src={home} />
        <div className="login-umkmuser-child"></div>
        <img className="lambanglog" alt="" src={lambang} />
        <div className="rectanglelogin" />
        <b className="masukdaftarlog">Buat Akun</b>
        <form action="">
          <b className="email">Email</b>
          <b className="kata-sandi">Kata Sandi</b>
          <div className="form-email-login2" id="formEmailLogin">
            <input 
              className="form-email-login-child" 
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
          </div>
          <input 
            className="form-password-login-child"
            type='password'
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </form>

        <div className="button" onClick={handleRegister}>
          <div className="button-child" />
          <b className="masuk">Daftar</b>
        </div>
        <div className="tidak-punya-akun-container" id="tidakPunyaAkun">Sudah punya akun?
          <span className="daftar-di-sini" onClick={redirectToLogin}>Masuk Di sini!</span>
        </div>
      </div>
      {notification.message && ( // Tampilkan notifikasi jika ada pesan
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </>
  );
};

export default Daftar;
