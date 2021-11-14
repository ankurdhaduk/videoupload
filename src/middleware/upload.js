const util = require("util");
const multer = require("multer");
require('dotenv').config();

let storage = multer.diskStorage({
    
  destination: (req, file, cb) => {
    cb(null, __basedir + process.env.__VIDEO_SAVE_PATH);
  },
  filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname)
      if (ext !== '.mp4') {
          return cb(res.status(400).end('only mp4 is allowed'), false);
      }
      cb(null, true)
  }
  // filename: (req, file, cb) => {
  //   console.log(file.originalname);
  //   cb(null, file.originalname);
  // },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: process.env.__MAX_SIZE },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
