'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listDetailkegiatan = function(req, res) {
    connection.query('SELECT * FROM v_detailkegiatan', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.findDetailkegiatan = function(req, res) {

    var detailkegiatanId = req.params.detailkegiatanId;

    connection.query('SELECT * FROM detailkegiatan where id = ?',
        [ detailkegiatanId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createDetailkegiatan = function(req, res) {

    const idKegiatan = req.body.idKegiatan;
    const jenisKegiatan = req.body.jenisKegiatan;
    const tglMulai = req.body.tglMulai;
    const tglBerakhir = req.body.tglBerakhir;
    
    connection.query('INSERT INTO detailkegiatan (idkegiatan, idjeniskegiatan, tglmulai, tglberakhir) values (?,?,?,?)',
        [ idKegiatan, jenisKegiatan, tglMulai, tglBerakhir ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan detail kegiatan ", res)
            }
        });
};

exports.updateDetailkegiatan = function(req, res) {

    const detailkegiatanId = req.body.detailkegiatanId;
    const idKegiatan = req.body.idKegiatan;
    const jenisKegiatan = req.body.jenisKegiatan;
    const tglMulai = req.body.tglMulai;
    const tglBerakhir = req.body.tglBerakhir;

    connection.query('UPDATE detailkegiatan SET idkegiatan = ?, idjeniskegiatan = ?, tgmulai = ?, tglberakhir = ? WHERE id = ?',
        [ idKegiatan, jenisKegiatan, tglMulai, tglBerakhir, detailkegiatanId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil merubah detail kegiatan !", res)
            }
        });
};

exports.deleteDetailkegiatan = function(req, res) {

    const detailkegiatanId = req.body.detailkegiatanId;

    connection.query('DELETE FROM detailkegiatan WHERE id = ?',
        [ detailkegiatanId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menghapus detail kegiatan !", res)
            }
        });
};