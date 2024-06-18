import multer from "multer";
import path from "path";

// Fungsi untuk memvalidasi tipe gambar berdasarkan ekstensi file
const imageFileFilter = (req, file, cb) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const fileExtension = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(fileExtension)) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'));
    }
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'gambar/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: imageFileFilter // Menambahkan filter gambar
});

export default upload;
