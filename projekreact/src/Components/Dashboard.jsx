import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from './Product';
import './Index.css';
import Navbar from './Navbar';

const Dashboard = () => {
  const { products, setProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEditClick = (id) => {
    navigate(`/editproduk/${id}`);
  };

  const handleDeleteClick = (id) => {
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus produk ini?');
    if (confirmDelete) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="dashboard-container_dashboardproduk">
        <h2 className="dashboard-title_dashboardproduk">Dashboard Umkm</h2>
        <div className="search-bar_dashboardproduk">
          <input
            type="text"
            placeholder="Cari Produk"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button 
            className="upload-button_dashboardproduk" 
            onClick={() => navigate('/upload')}
          >
            Unggah Produk
          </button>
        </div>
        <table className="product-table_dashboardproduk">
          <thead>
            <tr>
              <th>Produk</th>
              <th>Kategori</th>
              <th>Harga Jual</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="product-cell_dashboardproduk">
                  <img src={product.thumbnail} alt={product.name} className="product-thumbnail_dashboardproduk" />
                  <span className="product-name_dashboardproduk">{product.name}</span>
                </td>
                <td>{product.category}</td>
                <td>Rp.{product.priceRange}</td>
                <td>
                  <button 
                    className="edit-button_dashboardproduk" 
                    onClick={() => handleEditClick(product.id)}
                  >
                    Edit
                  </button>
                  <button 
                    className="delete-button_dashboardproduk" 
                    onClick={() => handleDeleteClick(product.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;