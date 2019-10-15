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

exports.listPengajuanbkd = function(req, res) {

    var bkdId = req.params.bkdId;

    connection.query('SELECT * FROM v_pengajuan where bkd = ?',
        [ bkdId ],
        function (error, rows, fields){
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
    const tempat = req.body.tempat
    const filepengajuan = req.body.filepengajuan
    
    
    connection.query('INSERT INTO pengajuan (bkd, namakegiatan, jmlpeserta, tglkegiatan, tempat, filepengajuan) values (?,?,?,?,?,?)',
        [ idBkd, namaKegiatan, jmlPeserta, tglKegiatan, tempat, filepengajuan ],
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

exports.findApprovebkd = function(req, res) {

    var bkdId = req.params.bkdId;
    var pengajuanId = req.params.pengajuanId;

    connection.query('SELECT * FROM v_approve where bkd = ? and id= ?',
        [ bkdId, pengajuanId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};


exports.listApprovebkd = function(req, res) {

    var bkdId = req.params.bkdId;

    connection.query('SELECT * FROM v_approve where bkd = ?',
        [ bkdId ],
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

