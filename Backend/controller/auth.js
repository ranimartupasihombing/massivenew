import { connection, query } from "../database/Db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const jwtSecretKey = process.env.JWT_SECRET;

const saltRounds = 10;

const getUser = async () => {
    const command = 'SELECT * FROM user'; // Select all users
    const result = await query(command,[]);
    return result;
};



async function login(email, password) {
    try {
        // Validate input
        if (!email || !password) {
            throw new Error('Email and password are required');
        }
        
        // Assume getUser() fetches users from database
        const users = await getUser();
        
        // Fetch user from database based on email
        const user = users.find(user => user.email === email);
        
        // Check if user exists and password matches
        if (user && await bcrypt.compare(password, user.password)) {
            // Generate JWT token
            const token = jwt.sign({
                userId: user.id,
                email: user.email
            }, jwtSecretKey, { expiresIn: '1h' }); // Token expires in 1 hour
            
            return { success: true, message: 'Login successful', token: token };
        } else {
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
const getumkm = async () => {
    const command = 'SELECT * FROM umkm'; // Select all users
    const result = await query(command);
    return result;
};
async function loginumkm (email, password) {
    try {
        // Validate input
        if (!email || !password) {
            throw new Error('Email and password are required');
        }
        const users = await getumkm();
        // Fetch user from database
        const user = users.find(user => user.email === email);
       
        // Check if user exists and password matches
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({
                userId: user.id,
                username: user.username
            }, jwtSecretKey, { expiresIn: '1h' }); // Token expires in 1 hour
            
            return { success: true, message: 'Login successful' };
        } else {
            console.log();
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
const getadmin = async () => {
    const command = 'SELECT * FROM admin'; // Select all users
    const result = await query(command);
    return result;
};
async function loginadmin (email, password) {
    try {
        // Validate input
        if (!email || !password) {
            throw new Error('Email and password are required');
        }
        const users = await getadmin();
        // Fetch user from database
        const user = users.find(user => user.email === email);
       
        // Check if user exists and password matches
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({
                userId: user.id,
                username: user.username
            }, jwtSecretKey, { expiresIn: '1h' }); // Token expires in 1 hour
            
            return { success: true, message: 'Login successful' };
        } else {
            console.log();
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
async function register(email, password) {
    try {
        // Validate input
        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const existingUser = await query('SELECT * FROM user WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            throw new Error('Username is already taken');
        }

        // Add new user to the database
        const command = 'INSERT INTO user (email, password) VALUES (?, ?)';
        await query(command, [email, hashedPassword]);

        return { success: true, message: 'Registration successful' };
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
async function registerumkm(email, password) {
    try {
        // Validate input
        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const existingUser = await query('SELECT * FROM umkm WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            throw new Error('Email is already taken');
        }
        // Add new user to the database
        const command = 'INSERT INTO umkm (email, password) VALUES (?, ?)';
        await query(command, [email, hashedPassword]);

        return { success: true, message: 'Registration successful' };
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
async function registeradmin(email, password) {
    try {
        // Validate input
        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const existingUser = await query('SELECT * FROM admin WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            throw new Error('Email is already taken');
        }
        // Add new user to the database
        const command = 'INSERT INTO admin (email, password) VALUES (?, ?)';
        await query(command, [email, hashedPassword]);

        return { success: true, message: 'Registration successful' };
    } catch (error) {
        // Handle errors
        return { success: false, message: error.message };
    }
}
const userdata = async ( nama, email, NoHp, TempatLahir, TgglLahir, Jenkel) => {   
     try {
      await query ("INSERT INTO userdata ( nama, email, NoHp, TempatLahir, TgglLahir, Jenkel)  VALUES ( ?, ?, ?, ?, ?, ?)",
        [ nama, email, NoHp, TempatLahir, TgglLahir, Jenkel])
      return ({ msg: "Data ditambahkan" });
    } catch (error) {
        console.error(error);
        // return res.status(500).json({ msg: "Terjadi kesalahan" });
    }
}
const getdatauser = async (req, res) => {
    try {
        const up = await query (`SELECT * FROM userdata`);
        return res.status(200).json({success : true, data: up });
    } catch (error) {
        console.error("Message: ", error);
        return res.status(500).json({msg: "Terjadi kesalahan"});
    }
};  
const handleUpload = async (req, res) => {
    console.log('Data dari form:', req.body);
    console.log('Files yang di-upload:', req.files);
  
    try {
      const { nama_produk, deskripsi_produk, alamat, kontak, thumbnail, kategori_produk, harga_produk } = req.body;
  
      // Pastikan req.files terdefinisi dan memiliki length > 0
      if (!req.files || req.files.length === 0) {
        console.log('No files uploaded or file upload failed.');
        return res.status(400).json({ msg: 'Upload failed or no files uploaded' });
      }
  
      let thumbnails = []; // Array untuk menyimpan nama file thumbnail
  
      // Loop melalui req.files dan ambil filename dari setiap file
      req.files.forEach(file => {
        thumbnails.push(file.filename);
      });
  
      // Simpan data ke database atau lakukan proses sesuai kebutuhan aplikasi
      // Misalnya, menggunakan placeholders untuk query SQL
      await query("INSERT INTO umkmproduk ( nama_produk, deskripsi_produk, alamat, kontak, thumbnail, kategori_produk, harga_produk ) VALUES (?, ?, ?, ?, ?, ?, ?)", [nama_produk, deskripsi_produk, alamat, kontak, thumbnails.join(","), kategori_produk, harga_produk]);
  
      console.log("Data successfully inserted into database.");
      res.status(200).json({ msg: 'Upload berhasil', thumbnails }); // Berhasil
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ msg: "Gagal eksekusi query" }); // Gagal eksekusi query
    }
  };
  
const umkmdata = async (req, res) => {
    const { nama, email, nohp, tempatusaha, alamatusaha } = req.body;
    const thumbnail = req.file.filename;

    try {
        await query("INSERT INTO umkmdata (nama, email, nohp, tempatusaha, alamatusaha, thumbnail) VALUES (?, ?, ?, ?, ?, ?)",
             [nama, email, nohp, tempatusaha, alamatusaha, thumbnail]);
        console.log("Data successfully inserted into database.");
        res.status(200).json({ msg: req.file }); // Berhasil
    } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ msg: "failed" }); // Gagal eksekusi query
    }
};
const getdataumkm = async (req, res) => {
    try {
        const up = await query (`SELECT * FROM umkmdata`);
        return res.status(200).json({success : true, data: up });
    } catch (error) {
        console.error("Message: ", error);
        return res.status(500).json({msg: "Terjadi kesalahan"});
    }
};  
const getdataadmin = async (req, res) => {
    try {
        const up = await query (`SELECT * FROM admin`);
        return res.status(200).json({success : true, data: up });
    } catch (error) {
        console.error("Message: ", error);
        return res.status(500).json({msg: "Terjadi kesalahan"});
    }
};  
const jumlahuser = async () => {
    try {
        const command = 'SELECT COUNT(*) AS count FROM userdata'; // Menghitung jumlah record
        const result = await query(command);
        return result[0].count; // Mengembalikan jumlah record
    } catch (error) {
        throw new Error('Failed to fetch user count');
    }
};
const jumlahumkm = async () => {
    try {
        const command = 'SELECT COUNT(*) AS count FROM umkmdata'; // Menghitung jumlah record
        const result = await query(command);
        return result[0].count; // Mengembalikan jumlah record
    } catch (error) {
        throw new Error('Failed to fetch user count');
    }
};
     // Sesuaikan dengan nama tabel yang sesuai
    

export {login, loginumkm,loginadmin, register, registerumkm,registeradmin, getUser, getumkm, userdata, 
    getdatauser, umkmdata, getdataumkm, getdataadmin, jumlahuser, jumlahumkm, handleUpload};