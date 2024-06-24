import React,  { useState, useEffect } from 'react';
import './DashboardAdminProfil.css';
import axios from 'axios';

const AdminProfil = () => {
  const [adminData, setadminData] = useState([]);

  const fetchAdminData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getdataadmin'); // Sesuaikan URL dengan endpoint yang benar
      return response;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return { data: { success: false, msg: 'Error fetching data' } };
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchAdminData();
        if (response.data.success) {
          setadminData(response.data.data);
        } else {
          console.error('Failed to fetch data:', response.data.msg);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div className="dashboard-admin-profil_profil">
      <div className="home_profil">HOME</div>
      <div className="admin_profil">Admin</div>
      <div className="table-container_profil">
        <table className="admin-table_profil">
          <thead>
            <tr>
              <th>NO</th>
              <th>Email Admin</th>
              <th>Password Admin</th>
            
            </tr>
          </thead>
          <tbody>
            {adminData.map((admin, index) => (
              <tr key={index}>
               <td>{index + 1}</td>
                <td>{admin.email}</td>
                <td>{admin.password}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProfil;