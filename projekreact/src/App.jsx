// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Ringan from './Components/Ringan';
import Berat from './Components/Berat';
import Loginhome from './Components/Loginhome';
import Login1 from './Components/Login1';
import Daftar from './Components/Daftar';
import Daftar2 from './Components/Daftar2';
import Login2 from './Components/Login2';
import Umkmprofile from './Components/Umkmprofile';
import Upload from './Components/Upload';
import EditProduct from './Components/Editproduk';
import Dashboard from './Components/Dashboard';
import ProfilUser from './Components/ProfilUser';
import Detailbika from './Components/Detailbika';
import Detailmie from './Components/Detailmie';
import Detailumkm from './Components/Detailumkm'; // Ensure you import Detailumkm
import About from './Components/About';
import Peta from './Components/Maps';
import Adminlogin from './Admin/Component/Adminlogin';
import AdminLayout from './Admin/AdminLayout';
import DashboardAdmin from './Admin/Component/DashboardAdmin';
import UlasanBikaAmbon from './Components/UlasanBikaAmbon';
import TulisUlasan from './Components/TulisUlasan';
import AdminProfil from './Admin/Component/DashboardAdminProfil';
import AdminProduk from './Admin/Component/DashboardProduk';
import AdminPengguna from './Admin/Component/DasboardPengguna';
import AdminUmkm from './Admin/Component/DashboardUmkm';
import BookmarkPage from './Components/BookmarkPage';
import TambahProduk from './Admin/Component/Tambahprodukadmin';
import { ProductProvider } from './Components/Product';
import { ReviewProvider } from './Components/ulasan';
import { BookmarkProvider } from './Components/BookmarkContext'; // Add BookmarkProvider

function App() {
  return (
    <ProductProvider>
      <ReviewProvider>
        <BookmarkProvider> {/* Wrap the app with BookmarkProvider */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/loginhome" element={<Loginhome />} />
              <Route path="/berat" element={<Berat />} />
              <Route path="/ringan" element={<Ringan />} />
              <Route path="/login1" element={<Login1 />} />
              <Route path="/daftar" element={<Daftar />} />
              <Route path='/daftar2' element={<Daftar2/>}/>
              <Route path="/login2" element={<Login2 />} />
              <Route path="/umkmprofile" element={<Umkmprofile />} />
              <Route path="/upload" element={<Upload />} />
              <Route path='/editproduk/:id' element={<EditProduct />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profiluser" element={<ProfilUser />} />
              <Route path="/detailbika" element={<Detailbika />} />
              <Route path="/detailmie" element={<Detailmie />} />
              <Route path="/detailumkm/:id" element={<Detailumkm />} /> {/* Updated route */}
              <Route path="/about" element={<About />} />
              <Route path="/maps" element={<Peta />} />
              <Route path="/adminlogin" element={<Adminlogin />} />
              <Route path="/ulasanbikaambon/:productId" element={<UlasanBikaAmbon />} />
              <Route path="/tulisulasan/:productId" element={<TulisUlasan />} />
              <Route path="/BookmarkPage" element={<BookmarkPage />} />

              {/* Define route for AdminLayout with nested routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="beranda" element={<DashboardAdmin />} />
                <Route path="admins" element={<AdminProfil />} />
                <Route path="products" element={<AdminProduk />} />
                <Route path="products/tambah" element={<TambahProduk />} />
                <Route path="users" element={<AdminPengguna />} />
                <Route path="umkm" element={<AdminUmkm />} />
                {/* Add other nested routes here as needed */}
              </Route>
            </Routes>
          </BrowserRouter>
        </BookmarkProvider>
      </ReviewProvider>
    </ProductProvider>
  );
}

export default App;