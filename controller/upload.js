const multer = require('multer');
const response = require('../res');
const connection = require('../conn');
const path = require('path');

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

exports.FileUpload = function (req, res) {

    //set storage engine

upload(req, res, err => {
    if(err){
        console.log(err)
    } else{
        response.ok("Berhasil upload file!", res)
    }
 });
    
};




