import React, { useEffect, useState } from 'react';
import './DashboardPengguna.css';
import axios from 'axios';

const DashboardPengguna = () => {
  const [penggunaData, setPenggunaData] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getdatauser'); // Sesuaikan URL dengan endpoint yang benar
      return response;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return { data: { success: false, msg: 'Error fetching data' } };
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchUserData();
        if (response.data.success) {
          setPenggunaData(response.data.data);
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
    <div className="dashboard-pengguna_pengguna">
      <div className="home_pengguna">HOME</div>
      <div className="pengguna_pengguna">Pengguna</div>
      <div className="table-container_pengguna">
        <table className="pengguna-table_pengguna">
          <thead>
            <tr>
              <th>NO</th>
              <th>Nama Pengguna</th>
              <th>Email Pengguna</th>
              <th>Jenis Kelamin</th>
              <th>No HP</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {penggunaData.map((pengguna, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{pengguna.nama}</td>
                <td>{pengguna.email}</td>
                <td>{pengguna.Jenkel}</td>
                <td>{pengguna.NoHp}</td>
                <td>
                  <i className="fas fa-edit edit-icon_pengguna" title="Edit"></i>
                  <i className="fas fa-trash trash-icon_pengguna" title="Delete"></i>
                  <i className="fas fa-eye show-icon_pengguna" title="Show"></i>
                  <i className="fas fa-check correct-icon_pengguna" title="Verify"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPengguna;
