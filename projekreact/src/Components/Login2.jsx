import React, {useState} from 'react'
import './Index.css'
import lambang from "../Assets/img/lambang.png"
import home from '../Assets/img/1.png'
import {Link, useNavigate } from 'react-router-dom'
import { login } from './api'

const Login2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await login(email, password);
      console.log(response); 
      if (response.success) {
        // Simpan token ke local storage atau session storage
        localStorage.setItem('token', response.token);
        navigate('/Umkmprofile');
      } else {
        alert(response.message); 
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  

  return (
    
    
      <div className="login-umkmuser">
      <img className="homelog" alt="" src={home}/>
<div className="login-umkmuser-child"></div>
<img className="lambanglog" alt="" src={lambang}/>
<div className="rectanglelogin" alt="" src=""/>
<b className="masukdaftarlog">Masuk/Daftar</b>
<form onSubmit={handleLogin}>
<b className="email">Email</b>
<b className="kata-sandi">Kata Sandi</b>
<div className="tidak-punya-akun-container" id="tidakPunyaAkun">Tidak punya akun?
<Link to='/Daftar2' className="daftar-di-sini">Daftar Di sini!</Link>
</div>
<div className="form-email-login2" id="formEmailLogin">
<input className="form-login-umkm-child"
type='email'
placeholder='Email'
value={email}
onChange={(e) => setEmail(e.target.value)}
required>
</input>
</div>
<input className="form-password-login-child"
type='password'
placeholder='Password'
value={password}
onChange={(e) => setPassword(e.target.value)}
required>
</input>

<div className="button">
  <button type='submit' className='button-child masuk' onClick={handleLogin}>Masuk

</button>
</div> 
</form>
      </div>
     
  )
}

export default Login2
