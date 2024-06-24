import React from "react";
import { useNavigate } from "react-router-dom";
import "../Component/Adminlogin.css";
import profilimg from "../../Assets/img/Pengertian-Freelancer.png";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Admin");
  };

  return (
    <div className="admin-login-admin">
      <div className="login-admin">LOGIN</div>
      <div className="login-dashboard-admin-admin">Login Dashboard admin</div>
      <div className="dashboard-admin">Dashboard</div>
      
      <div className="admin-login-child-admin"></div>
      <div className="login1-admin">
        <div className="admin-admin"></div>
        <b className="email-admin">Email</b>
        <b className="kata-sandi-admin">Kata Sandi</b>
        <div className="form-email-login-admin">
          <input className="form-verifikasi-child" id="inputnama" placeholder="Masukkan email" />
        </div>
        <div className="form-password-login-admin">
          <input className="form-verifikasi-child" id="inputnama" placeholder="Masukkan kata sandi" />
        </div>
        <div className="button-admin" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
          <b className="masuk-admin" id="masukText">
            Masuk
          </b>
        </div>
      </div>
      <img
        className="pengertian-freelancer-1-icon-admin"
        alt=""
        src={profilimg}
      />
    </div>
  );
};

export default AdminLogin;