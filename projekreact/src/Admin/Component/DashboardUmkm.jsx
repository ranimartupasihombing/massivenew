import React, { useEffect, useState } from 'react';
import './DashboardUmkm.css';
import axios from 'axios';

// // Make sure to import Font Awesome for the icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const DashboardUmkm = () => {
  const [umkmData, setumkmData] = useState([]);

  const fetchUmkmData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getdataumkm'); // Sesuaikan URL dengan endpoint yang benar
      return response;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return { data: { success: false, msg: 'Error fetching data' } };
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchUmkmData();
        if (response.data.success) {
          setumkmData(response.data.data);
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
    <div className="dashboard-umkm_umkm">
      <div className="home_umkm">HOME</div>
      <div className="umkm_umkm">UMKM</div>
      <div className="table-container_umkm">
        <table className="umkm-table_umkm">
          <thead>
            <tr>
              <th>NO</th>
              <th>Nama UMKM</th>
              <th>Email UMKM</th>
              <th>Alamat</th>
              <th>Thumbnail</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {umkmData.map((umkm, index) => (
              <tr key={index}>
               <td>{index + 1}</td>
                <td>{umkm.nama}</td>
                <td>{umkm.email}</td>
                <td>{umkm.alamatusaha}</td>
                <td>{umkm.thumbnail}</td>
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

export default DashboardUmkm;