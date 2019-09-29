'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listKegiatan = function(req, res) {
    connection.query('SELECT * FROM v_kegiatan', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.findKegiatan = function(req, res) {

    var kegiatanId = req.params.kegiatanId;

    connection.query('SELECT * FROM kegiatan where id = ?',
        [ kegiatanId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createKegiatan = function(req, res) {

    const namaKegiatan = req.body.namaKegiatan;
    const jenisKegiatan = req.body.jenisKegiatan;
    const bkdKegiatan = req.body.bkdKegiatan;
    const skpdKegiatan = req.body.skpdKegiatan;
    const jumlahpesertaKegiatan = req.body.jumlahpesertaKegiatan;
    const tanggalKegiatan = req.body.tanggalKegiatan;

    connection.query('INSERT INTO kegiatan (bkd, skpd, namakegiatan, jeniskegiatan, jmlpeserta, tglkegiatan) values (?,?,?,?,?,?)',
        [ bkdKegiatan, skpdKegiatan, namaKegiatan, jenisKegiatan, jumlahpesertaKegiatan, tanggalKegiatan ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan kegiatan ", res)
            }
        });
};

exports.updateKegiatan = function(req, res) {

    const kegiatanId = req.body.kegiatanId;
    const namaKegiatan = req.body.namaKegiatan;
    const jenisKegiatan = req.body.jenisKegiatan;
    const bkdKegiatan = req.body.bkdKegiatan;
    const skpdKegiatan = req.body.skpdKegiatan;
    const jumlahpesertaKegiatan = req.body.jumlahpesertaKegiatan;
    const tanggalKegiatan = req.body.tanggalKegiatan;

    connection.query('UPDATE kegiatan SET bkd = ?, skpd = ?, namakegiatan = ?, jeniskegiatan = ?, jmlpeserta = ?, tglkegiatan = ?  WHERE id = ?',
        [ bkdKegiatan, skpdKegiatan, namaKegiatan, jenisKegiatan, jumlahpesertaKegiatan, tanggalKegiatan ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil merubah kegiatan !", res)
            }
        });
};

exports.deleteKegiatan = function(req, res) {

    const kegiatanId = req.body.kegiatanId;

    connection.query('DELETE FROM kegiatan WHERE id = ?',
        [ kegiatanId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menghapus kegiatan !", res)
            }
        });
};