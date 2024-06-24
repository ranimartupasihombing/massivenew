// DashboardAdmin.jsx (Frontend)

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DashboardAdmin.css';
import axios from 'axios'; // Import axios
import usericon from '../../Assets/img/icondasboard4.png';
import umkmicon from '../../Assets/img/icondasboard3.png';
import menuicon from '../../Assets/img/icondasboard2.png';
import rateicon from '../../Assets/img/icondasboard1.png';

const DashboardAdmin = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetchUserCount(); // Panggil fungsi fetch saat komponen pertama kali dirender
  }, []);

  const fetchUserCount = async () => {
    try {
      const response = await axios.get('http://localhost:3000/jumlahuser');
      setUserCount(response.data.count);
    } catch (error) {
      console.error('Error fetching user count:', error);
    }
  };

  const [umkmCount, setUmkmCount] = useState(0);

  useEffect(() => {
    fetchumkmCount(); // Panggil fungsi fetch saat komponen pertama kali dirender
  }, []);

  const fetchumkmCount = async () => {
    try {
      const response = await axios.get('http://localhost:3000/jumlahumkm');
      setUmkmCount(response.data.count);
    } catch (error) {
      console.error('Error fetching user count:', error);
    }
  };
  return (
    <div className="dashboard-admin_dashboardadmin">
      <div className="home_dashboardadmin">HOME</div>
      <div className="admin_dashboardadmin">Dashboard</div>

      <div className="container_dashboardadmin">
        <div className="halaman-dasboard_dashboardadmin">Halaman Dashboard</div>
        <div className="line-div_dashboardadmin"></div>
        <div className="rectangle-parent_dashboardadmin">
          <Link to="/admin/users" className="box_dashboardadmin frame-item_dashboardadmin">
            <img src={usericon} alt="Users" className="box-icon_dashboardadmin"/>
            <div className="box-content_dashboardadmin">{userCount} Jumlah Pengguna</div>
          </Link>
          <Link to="/admin/umkm" className="box_dashboardadmin frame-inner_dashboardadmin">
            <img src={umkmicon} alt="UMKM" className="box-icon_dashboardadmin"/>
            <div className="box-content_dashboardadmin">{umkmCount}Jumlah UMKM</div>
          </Link>
          {/* <Link to="/admin/products" className="box_dashboardadmin rectangle-div_dashboardadmin">
            <img src={menuicon} alt="Kuliner" className="box-icon_dashboardadmin"/>
            <div className="box-content_dashboardadmin">100 Kuliner</div>
          </Link>
          <Link to="admin/umkm" className="box_dashboardadmin frame-child1_dashboardadmin">
            <img src={rateicon} alt="Ulasan" className="box-icon_dashboardadmin"/>
            <div className="box-content_dashboardadmin">50 Jumlah Ulasan</div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
