import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardProduk.css';

const DashboardProduk = () => {
  const [deletePopupVisible, setDeletePopupVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [produkData, setProdukData] = useState([
    { no: 1, namaUMKM: 'Bika ambon rian', kategori: 'Makanan ringan', konten: 'Bika ambon Rian', status: 'Terverifikasi' },
    { no: 2, namaUMKM: 'Sate Padang', kategori: 'Makanan berat', konten: 'Sate Padang Asli', status: 'Terverifikasi' },
    { no: 3, namaUMKM: 'Es Dawet', kategori: 'Minuman', konten: 'Es Dawet Enak', status: 'Terverifikasi' },
    // Add more data as needed
  ]);

  const navigate = useNavigate();

  const showDeletePopup = (item) => {
    setSelectedItem(item);
    setDeletePopupVisible(true);
  };

  const hideDeletePopup = () => {
    setDeletePopupVisible(false);
    setSelectedItem(null);
  };

  const deleteItem = () => {
    const updatedProdukData = produkData.filter(item => item !== selectedItem);
    setProdukData(updatedProdukData);
    hideDeletePopup();
  };

  const handleTambahProdukClick = () => {
    navigate('/admin/products/tambah');
  };

  return (
    <div className="dashboard-produk_produk">
      <div className="home_produk">HOME</div>
      <div className="produk-header_produk">
        <div className="produk_produk">Produk</div>
        <button className="tambah-produk-button_produk" onClick={handleTambahProdukClick}>Tambah Produk</button>
      </div>
      <div className="table-container_produk">
        <table className="produk-table_produk">
          <thead>
            <tr>
              <th>NO</th>
              <th>Nama UMKM</th>
              <th>Kategori</th>
              <th>Konten</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {produkData.map((produk, index) => (
              <tr key={index}>
                <td>{produk.no}</td>
                <td>{produk.namaUMKM}</td>
                <td>{produk.kategori}</td>
                <td>{produk.konten}</td>
                <td>{produk.status}</td>
                <td>
                  <i className="fas fa-edit icon_produk" title="Edit"></i>
                  <i className="fas fa-trash icon_produk" title="Delete" onClick={() => showDeletePopup(produk)}></i>
                  <i className="fas fa-eye icon_produk" title="Show"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletePopupVisible && (
        <div className="delete-popup_produk">
          <div className="delete-message_produk">Apakah Anda yakin ingin menghapus {selectedItem.namaUMKM}?</div>
          <div className="delete-buttons_produk">
            <button onClick={deleteItem}>Ya</button>
            <button onClick={hideDeletePopup}>Tidak</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardProduk;