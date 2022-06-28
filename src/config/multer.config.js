const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/public/uploads/");
  },
  filename: function (req, file, cb) {
    const fileName = new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname; 
    cb(null, fileName);
  },
});

module.exports = {
  storage,
};
