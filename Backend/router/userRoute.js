import express, { Router } from "express";
import { register, registerumkm,registeradmin, login, loginumkm, loginadmin, getUser, getumkm, userdata,
     getdatauser, umkmdata, jumlahuser, jumlahumkm,
     getdataumkm,
     getdataadmin, handleUpload} from "../controller/auth.js";
import upload from "../upload/multer.js";
const router = express.Router();

router.post('/loginuser', async (req, res) => {
    const { email, password } = req.body;
    const result = await login(email, password);
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(401).json(result);
    }
});
router.post('/loginumkm', async (req, res) => {
    const { email, password } = req.body;
    const result = await loginumkm(email, password);
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(401).json(result);
    }
});
router.post('/loginadmin', async (req, res) => {
    const { email, password } = req.body;
    const result = await loginadmin(email, password);
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(401).json(result);
    }
});
// Register endpoint
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const result = await register(email, password);
    if (result.success) {
        res.status(201).json(result);
    } else {
        res.status(400).json(result);
    }
});
router.post('/registerumkm', async (req, res) => {
    const { email, password } = req.body;
    const result = await registerumkm(email, password);
    if (result.success) {
        res.status(201).json(result);
    } else {
        res.status(400).json(result);
    }
});
router.post('/registeradmin', async (req, res) => {
    const { email, password } = req.body;
    const result = await registeradmin(email, password);
    if (result.success) {
        res.status(201).json(result);
    } else {
        res.status(400).json(result);
    }
});
router.get('/userdata', async (req, res) => {
    const email = req.params.email;
    const user = await getUser(email);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});
router.get('/umkmdata', async (req, res) => {
    const email = req.params.email;
    const user = await getumkm(email);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});

router.post('/userdataupload', async (req, res) => {
    const {nama, email, NoHp, TempatLahir, TgglLahir, Jenkel} = req.body;
    const result =await userdata (nama, email, NoHp, TempatLahir, TgglLahir, Jenkel);
    if (result) {
        res.status(200).json({ success: true, msg: "Berhasil sumbit"})
    } else {
        res.status(401).json({Error})
    }
  });
  router.get('/getdataadmin',getdataadmin);
  router.get('/getdatauser',getdatauser);
  router.get('/getdataumkm',getdataumkm);
  
  router.post('/upload', upload.array('thumbnail', 5), handleUpload);
router.get('/jumlahuser', async (req, res) => {
    try {
        const result = await jumlahuser();
        res.status(200).json({ success: true, count: result });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: 'Failed to fetch user count' });
    }
});
router.get('/jumlahumkm', async (req, res) => {
    try {
        const result = await jumlahumkm();
        res.status(200).json({ success: true, count: result });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: 'Failed to fetch user count' });
    }
});
export default router;