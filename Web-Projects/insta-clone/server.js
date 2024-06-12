const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Set up storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Endpoint for file upload
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({ filePath: `/uploads/${req.file.filename}` });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
