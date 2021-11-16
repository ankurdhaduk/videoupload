const uploadFile = require("../middleware/upload");
const emailer = require("../emailer/index.js");
var path = require('path')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
// require('dotenv').config();


const upload = async (req, res) => {
    try {
      // await emailer();
      // return;
      await uploadFile(req, res);
 
      if (req.file == undefined) {
        return res.status(400).send({ message: "Please upload a file!" });
      }
      
        ffmpeg(req.file.path)
      // setup event handlers
        .on('filenames', function(filenames) {
            console.log('screenshots are ' + filenames.join(', '));
        })
        .on('end', function() {
            console.log('screenshots were saved');
        })
        .on('error', function(err) {
            console.log('an error happened: ' + err.message);
        })
        // take 1 screenshots at predefined timemarks and size
        .takeScreenshots({ count: 1, timemarks: [ '00:00:01.000', '6' ], size: '250x200',filename: req.file.originalname }, process.env.__THUMB_SAVE_PATH)
        
            res.status(200).send({
                message: "Uploaded the file successfully: " + req.file.path,
            });
    } catch (err) {
      console.log(err);
  
      if (err.code == "LIMIT_FILE_SIZE") {
        return res.status(500).send({
          message: "File size cannot be larger than 2MB!",
        });
      }
  
      res.status(500).send({
        message: `Could not upload the file: ${req.file.originalname}. ${err}`,
      });
    }
  };


  module.exports = {
    upload,
  };