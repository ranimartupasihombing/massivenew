import React, { useState } from 'react';
import './Index.css';
import lambang from "../Assets/img/lambang.png";
import home from '../Assets/img/1.png';
import { Link, useNavigate } from 'react-router-dom';
import { login } from './api'; // Pastikan Anda mengimpor fungsi login yang benar dari API Anda

const Login1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await login(email, password);
      console.log(response); 
      if (response.success) {
        navigate('/');
      } else {
        alert(response.message); 
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <div className="login-umkmuser">
        <img className="homelog" alt="" src={home}/>
        <div className="login-umkmuser-child"></div>
        <img className="lambanglog" alt="" src={lambang}/>
        <div className="rectanglelogin"></div>
        <b className="masukdaftarlog">Masuk/Daftar</b>
        <form onSubmit={handleLogin}>
          <b className="email">Email</b>
          <b className="kata-sandi">Kata Sandi</b>
          <div className="tidak-punya-akun-container" id="tidakPunyaAkun">
            Tidak punya akun? <Link to='/Daftar' className="daftar-di-sini">Daftar Di sini!</Link>
          </div>
          <div className="form-email-login2" id="formEmailLogin">
            <input
              className="form-email-login-child"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <input
            className="form-password-login-child"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="button">
            <button type="submit" className="button-child masuk">
              <img alt="" src="Rectangle 9.svg" />
              Masuk
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login1;
