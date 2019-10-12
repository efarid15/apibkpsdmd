'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listJenis = function(req, res) {
    connection.query('SELECT * FROM jenisdiklat', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.findJenis = function(req, res) {

    var jenisId = req.params.jenisId;

    connection.query('SELECT * FROM jenisdiklat where id = ?',
        [ jenisId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createJenis = function(req, res) {

    const jenisDiklat = req.body.jenisDiklat;
    const durasiJenis = req.body.durasiJenis;
    const kategoriDiklat = req.body.kategoriDiklat;
    

    connection.query('INSERT INTO jenisdiklat (jenisdiklat, durasi) values (?,?)',
        [ jenisDiklat, durasiJenis, kategoriDiklat ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan jenis diklat", res)
            }
        });
};

exports.updateJenis = function(req, res) {

    const jenisId = req.body.jenisId;
    const jenisDiklat = req.body.jenisDiklat;
    const durasiJenis = req.body.durasiJenis;
    const kategoriDiklat = req.body.kategoriDiklat;
    

    connection.query('UPDATE jenisdiklat SET jenisdiklat = ?, durasi = ?, idkategori = ?  WHERE id = ?',
        [ jenisDiklat, durasiJenis,jenisId, kategoriDiklat ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil merubah jenis diklat!", res)
            }
        });
};

exports.deleteJenis = function(req, res) {

    const jenisId = req.params.jenisId;

    connection.query('DELETE FROM jenisdiklat WHERE id = ?',
        [ jenisId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menghapus jenis diklat!", res)
            }
        });
};
