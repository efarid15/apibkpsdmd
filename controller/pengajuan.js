'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listPengajuan = function(req, res) {
    connection.query('SELECT * FROM v_pengajuan', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.listApprove = function(req, res) {
    connection.query('SELECT * FROM v_approve', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createPengajuan= function(req, res) {

    const idBkd = req.body.idBkd;
    const idSkpd = req.body.idSkpd;
    const namaKegiatan = req.body.namaKegiatan;
    const jmlPeserta = req.body.jmlPeserta;
    const tglKegiatan = req.body.tglKegiatan;
    
    
    connection.query('INSERT INTO pengajuan (skpd, bkd, namakegiatan, jmlpeserta, tglkegiatan) values (?,?,?,?,?)',
        [ idSkpd, idBkd, namaKegiatan, jmlPeserta, tglKegiatan ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan pengajuan ", res)
            }
        });
};


exports.findPengajuan = function(req, res) {

    var pengajuanId = req.params.pengajuanId;

    connection.query('SELECT * FROM v_pengajuan where id = ?',
        [ pengajuanId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

