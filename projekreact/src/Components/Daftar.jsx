import React, { useState } from 'react';
import './Index.css';
import lambang from "../Assets/img/lambang.png";
import home from '../Assets/img/1.png';
import { register } from './api'; // Import your register function
import { useNavigate } from 'react-router-dom';

const Daftar = () => {
  const [registeremail, setRegisteremail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await register(registeremail, registerPassword);
      console.log(response);
      navigate('/login1');
    } catch (error) {
      console.error('Registration error:', error.message);
    }
  };

  const redirectToLogin = () => {
    navigate('login1');
  };

  return (
    <>
      <div className="login-umkmuser">
        <img className="homelog" alt="" src={home} />
        <div className="login-umkmuser-child">
        </div>
        <img className="lambanglog" alt="" src={lambang} />
        <div className="rectanglelogin" />
        <b className="masukdaftarlog">Buat Akun</b>
        <form>
          <b className="email">Email</b>
          <b className="kata-sandi">Kata Sandi</b>
          <div className="form-email-login2" id="formEmailLogin">
            <input
              className="form-email-login"
              placeholder="Email"
              value={registeremail}
              onChange={(e) => setRegisteremail(e.target.value)}
            />
          </div>
          <input
            className="form-password-login"
            type="password"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </form>

        <div className="button" onClick={handleRegister}>
          <b className="masuk">Daftar</b>
        </div>

        

        <div className="tidak-punya-akun-container" id="tidakPunyaAkun">
          Sudah punya akun?
          <span className="daftar-di-sini" onClick={redirectToLogin}>
            Masuk Di sini!
          </span>
        </div>
      </div>
    </>
  );
};

export default Daftar;
