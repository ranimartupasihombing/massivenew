// api.js

import axios from 'axios';

const backendUrl = 'http://localhost:3000'; // Ganti dengan alamat dan port backend Anda

// Fungsi untuk login
// const login = async (email, password) => {
//     try {
//         const response = await axios.post(`${backendUrl}/login`, { email, password });
//         return console.log(response.data.message)
//     } catch (error) {
//         return { success: false, message: error.response.data.message };
//     }
// };
// Fungsi untuk registrasi

// api.js

const login = async (email, password) => {
    try {
        const response = await axios.post(`${backendUrl}/loginuser`, { email, password });
        
        if (response.data.success) {
            const { token } = response.data; // Ambil token dari respons

            // Simpan token ke local storage untuk digunakan di otorisasi permintaan selanjutnya
            localStorage.setItem('token', token);

            return { success: true, message: 'Login successful', token: token };
        } else {
            throw new Error('Login failed');
        }
    } catch (error) {
        console.error('Error login', error);
        return { success: false, message: error.message };
    }
};
export const register = async (email, password) => {
  try {
    const response = await axios.post(`${backendUrl}/register`, { email, password });

    if (!response.data.success) {
      throw new Error('Registration failed'); // Adjust based on your server response structure
    }
    return response.data; // Assuming the server returns JSON with success message
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};


  const registerumkm = async (email, password) => {
    try {
        const response = await axios.post(`${backendUrl}/registerumkm`, { email, password });
        return console.log(response.data.message)
    } catch (error) {
        return { success: false, message: error.response.data.message };
    }
};
const userdata = async (Nama, Email, NoHp, TempatLahir, TgglLahir, Jenkel) => {
    try {
        const response = await axios.post(`${backendUrl}/userdata`, { Nama, Email, NoHp, TempatLahir, TgglLahir, Jenkel});
        if (response && response.data) {
            console.log(response.data);
            return response.data;
        } else {
            throw new Error("Invalid response format");
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: error.response.data || error.message };
    }
};

export { login, registerumkm, userdata};