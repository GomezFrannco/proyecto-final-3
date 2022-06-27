const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

module.exports = {
  storage,
};
