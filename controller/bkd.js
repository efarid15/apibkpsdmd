'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listBkd = function(req, res) {
    connection.query('SELECT * FROM v_bkd', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.findBkd = function(req, res) {

    var bkd_id = req.params.bkd_id;

    connection.query('SELECT * FROM bkd where id = ?',
        [ bkd_id ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createBkd = function(req, res) {

    const namaBkd = req.body.namaBkd;
    const alamatBkd = req.body.alamatBkd;
    const kabupatenBkd = req.body.kabupatenBkd;
    const notelpBkd = req.body.notelpBkd;


    connection.query('INSERT INTO bkd (namabkd, alamat, kabupaten, notelp) values (?,?,?,?)',
        [ namaBkd, alamatBkd, kabupatenBkd, notelpBkd ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan BKD!", res)
            }
        });
};

exports.updateBkd = function(req, res) {

    const bkdId = req.body.bkdId;
    const namaBkd = req.body.namaBkd;
    const alamatBkd = req.body.alamatBkd;
    const kabupatenBkd = req.body.kabupatenBkd;
    const notelpBkd = req.body.notelpBkd;


    connection.query('UPDATE bkd SET namabkd = ?, alamat = ?, kabupaten = ?, notelp = ?  WHERE id = ?',
        [ namaBkd, alamatBkd, kabupatenBkd, notelpBkd, bkdId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil merubah BKD!", res)
            }
        });
};

exports.deleteBkd = function(req, res) {

    const bkdId = req.params.bkdId;

    connection.query('DELETE FROM bkd WHERE id = ?',
        [ bkdId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menghapus BKD!", res)
            }
        });
};