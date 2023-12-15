//multer.js
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
 destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
 },
 filename: (req, file, cb) => {
    const uniqueName = uuidv4() + '-' + file.originalname;
    cb(null, uniqueName);
 },
});

const upload = multer({ storage: storage });

module.exports = upload;