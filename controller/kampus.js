'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listVKampus = function(req, res) {
    connection.query('SELECT * FROM v_ruangankampus', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.listKampus = function(req, res) {
    connection.query('SELECT * FROM kampus', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.listRuanganKampus = function(req, res) {

    var kampusId = req.params.kampusId;

    connection.query('SELECT * FROM v_ruangankampus where idkampus = ?',
        [ kampusId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.findKampus = function(req, res) {

    var kampusId = req.params.kampusId;

    connection.query('SELECT * FROM kampus where id = ?',
        [ kampusId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createKampus = function(req, res) {

    const namaKampus = req.body.namaKampus;
    const alamatKampus = req.body.alamatKampus;
    

    connection.query('INSERT INTO tempat (namakampus, alamat) values (?,?)',
        [ namaKampus, alamatKampus ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan tempat diklat", res)
            }
        });
};

exports.updateKampus = function(req, res) {

    const kampusId = req.body.kampusId;
    const namaKampus = req.body.namaKampus;
    const alamatKampus = req.body.alamatKampus;
    

    connection.query('UPDATE kampus SET namakampus = ?, alamat = ?   WHERE id = ?',
        [ namaKampus, alamatKampus, kampusId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil merubah kampus !", res)
            }
        });
};

exports.deleteKampus = function(req, res) {

    const kampusId = req.params.kampusId;

    connection.query('DELETE FROM kampus WHERE id = ?',
        [ kampusId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menghapus kampus diklat!", res)
            }
        });
};