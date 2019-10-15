const multer = require('multer');
const response = require('../res');
const connection = require('../conn');
const path = require('path');


exports.FileUpload = function (req, res) {

    const storage = multer.diskStorage({
        destination : './uploads',
        filename: function(req, file, cb){
            cb(null, file.fieldname + '-' + Date.now() +
            path.extname(file.originalname));
        }
    });
    
    //init upload
    const upload = multer({
        storage : storage
    }).single('dokumen');
    
    //set storage engine

upload(req, res, err => {
    if(err){
        console.log(err)
    } else{
        response.ok("Berhasil upload file!", res)
    }
 });
    
};





