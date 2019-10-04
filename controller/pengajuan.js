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
    const namaKegiatan = req.body.namaKegiatan;
    const jmlPeserta = req.body.jmlPeserta;
    const tglKegiatan = req.body.tglKegiatan;
    
    
    connection.query('INSERT INTO pengajuan (bkd, namakegiatan, jmlpeserta, tglkegiatan) values (?,?,?,?)',
        [ idBkd, namaKegiatan, jmlPeserta, tglKegiatan ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan pengajuan ", res)
            }
        });
};

exports.findApprove = function(req, res) {

    var pengajuanId = req.params.pengajuanId;

    connection.query('SELECT * FROM v_approve where id = ?',
        [ pengajuanId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
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

exports.setApprove = function(req, res) {

    var pengajuanId = req.body.pengajuanId;
    var statusPengajuan = req.body.statusPengajuan;

    connection.query('UPDATE pengajuan SET status = ? where id = ?',
        [ statusPengajuan, pengajuanId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

