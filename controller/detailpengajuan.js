'use strict';

const response = require('../res');
const connection = require('../conn');
const multer = require('multer');
const path = require('path');


exports.listDetailpengajuan = function(req, res) {
    connection.query('SELECT * FROM detailpengajuan', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.findDetailpengajuan = function(req, res) {

    var pengajuanId = req.params.pengajuanId;

    connection.query('SELECT * FROM detailpengajuan where idpengajuan = ?',
        [ pengajuanId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createDetailpengajuan = function(req, res) {

    const idJenisdiklat = req.body.idJenisdiklat;
    const idKampus = req.body.idKampus;
    const idRuangan = req.body.idRuangan;
    const idPengajuan = req.body.idPengajuan;
    const idMentor = req.body.idMentor;
    const tglStartoncamp1 = req.body.tglStartoncamp1;
    const tglEndoncamp1 = req.body.tglEndoncamp1; 
    const tglStartoncamp2 = req.body.tglStartoncamp2;
    const tglEndoncamp2 = req.body.tglEndoncamp2; 
    const tglStartoncamp3 = req.body.tglStartoncamp3;
    const tglEndoncamp3 = req.body.tglEndoncamp3;
    const tglMulai = req.body.tglMulai;
    const tglAkhir = req.body.tglAkhir;
    
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
    }).array('dokumen', 3);
    
    upload(req, res, err => {
        if(err){
            console.log(err)
        } else{
            connection.query('INSERT INTO detailpengajuan (idjenisdiklat, idtempat, idpengajuan, idwidyaiswara, idruangan, tglstartoncamp1, tglendoncamp1, tglstartoncamp2, tglendoncamp2, tglstartoncamp3, tglendoncamp3, tglmulai, tglberakhir, dokumenpengajuan) values (?,?,?,?,?,?,?,?,?,?,?,?,?,"'+req.files+'")',
             [ idJenisdiklat, idKampus, idPengajuan, idMentor, idRuangan, tglStartoncamp1, tglEndoncamp1, tglStartoncamp2, tglEndoncamp2, tglStartoncamp3, tglEndoncamp3, tglMulai, tglAkhir],
                function (error, rows, fields){
                    if(error){
                        console.log(error)
                    } else{
                        response.ok("Berhasil menambahkan detail pengajuan", res)
                    }
            });
        }
     });
    

    
};

