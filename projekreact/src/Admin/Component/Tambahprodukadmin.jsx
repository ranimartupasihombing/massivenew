import React, { useState } from 'react';
import './Tambahprodukadmin.css';

const TambahProduk = ({ history }) => {
  const [form, setForm] = useState({
    namaUMKM: '',
    kategori: '',
    konten: '',
    status: 'Belum Terverifikasi',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to the server or update state
    console.log('Form submitted:', form);
    history.push('/dashboard-produk'); // Redirect to the dashboard page after submission
  };

  return (
    <div className="tambah-produk">
      <h1>Tambah Produk</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Kategori:</label>
          <input
            type="text"
            name="namaUMKM"
            value={form.namaUMKM}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Nama:</label>
          <input
            type="text"
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gambar:</label>
          <input
            type="text"
            name="konten"
            value={form.konten}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="Belum Terverifikasi">Belum Terverifikasi</option>
            <option value="Terverifikasi">Terverifikasi</option>
          </select>
        </div>
        <button type="submit">Tambah Produk</button>
      </form>
    </div>
  );
};

export default TambahProduk;