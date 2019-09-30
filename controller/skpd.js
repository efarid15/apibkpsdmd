'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listSkpd = function(req, res) {
    connection.query('SELECT * FROM skpd', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.findSkpd = function(req, res) {

    var skpd_id = req.params.skpd_id;

    connection.query('SELECT * FROM skpd where id = ?',
        [ skpd_id ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createSkpd = function(req, res) {

    const namaSkpd = req.body.namaSkpd;
    const alamatSkpd = req.body.alamatSkpd;
    const kabupatenSkpd = 'Makassar';
    const notelpSkpd = req.body.notelpSkpd;


    connection.query('INSERT INTO skpd (namaskpd, alamat, kabupaten, notelp) values (?,?,?,?)',
        [ namaSkpd, alamatSkpd, kabupatenSkpd, notelpSkpd ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan SKPD!", res)
            }
        });
};

exports.updateSkpd = function(req, res) {

    const skpdId = req.body.skpdId;
    const namaSkpd = req.body.namaSkpd;
    const alamatSkpd = req.body.alamatSkpd;
    const kabupatenSkpd = 'Makassar';
    const notelpSkpd = req.body.notelpSkpd;


    connection.query('UPDATE skpd SET namaskpd = ?, alamat = ?, kabupaten = ?, notelp = ?  WHERE id = ?',
        [ namaSkpd, alamatSkpd, kabupatenSkpd, notelpSkpd, skpdId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil merubah SKPD!", res)
            }
        });
};

exports.deleteSkpd = function(req, res) {

    const skpdId = req.params.skpdId;

    connection.query('DELETE FROM skpd WHERE id = ?',
        [ skpdId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menghapus SKPD!", res)
            }
        });
};