// api.js

import axios from 'axios';

const backendUrl = 'http://localhost:3000'; // Ganti dengan alamat dan port backend Anda

// Fungsi untuk login
// const login = async (username, password) => {
//     try {
//         const response = await axios.post(`${backendUrl}/login`, { username, password });
//         return console.log(response.data.message)
//     } catch (error) {
//         return { success: false, message: error.response.data.message };
//     }
// };
// Fungsi untuk registrasi

// api.js

const login = async (username, password) => {
    try {
        const response = await axios.post(`${backendUrl}/login`, {username, password})
        if (!response.data.success){
            throw new Error('Login failed')
        }
        return response.data;
    } catch (error) {
        console.error('Error login', error)
    }
}

export const register = async (username, password) => {
  try {
    const response = await axios.post(`${backendUrl}/register`, { username, password });

    if (!response.data.success) {
      throw new Error('Registration failed'); // Adjust based on your server response structure
    }

    return response.data; // Assuming the server returns JSON with success message
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};


  const registerumkm = async (username, password) => {
    try {
        const response = await axios.post(`${backendUrl}/registerumkm`, { username, password });
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

// const upload = async (Jenis, Nama, Gambar) => {
//     try {
//         const response = await axios.post(`${backendUrl}/upload`, { Jenis, Nama, Gambar});
//         return console.log(response.data.message)
//     } catch (error) {
//         return { success: false, message: error.response.data.message };
//     }
// };


export { login, registerumkm, userdata};