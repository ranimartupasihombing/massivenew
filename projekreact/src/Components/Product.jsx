// src/Components/Product.jsx
import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Bika Ambon Rian',
      category: 'Makanan ringan',
      priceRange: '15.000',
      description: 'Bika Ambon adalah kue tradisional Indonesia yang terkenal dengan teksturnya yang lembut dan rasa manisnya yang khas.',
      address: 'Jl. Sumatera No.78, Belawan I, Medan Kota Belawan, Kota Medan, Sumatera Utara 20411',
      contact: '085277116735',
      thumbnail: 'src/Assets/img/rian.png',
      hours: '08:00-22:00'
    },
    // Produk lainnya...
  ]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, addProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};