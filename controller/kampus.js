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
exports.findVKampus = function(req, res) {

    var ruanganId = req.params.ruanganId;

    connection.query('SELECT * FROM v_ruangankampus where id = ?',
        [ ruanganId ],
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

exports.createRuangan = function(req, res) {

    const idKampus = req.body.idKampus;
    const namaRuangan = req.body.namaRuangan;
    

    connection.query('INSERT INTO ruangan (idkampus, namaruangan) values (?,?)',
        [ idKampus, namaRuangan ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan Ruangan kampus", res)
            }
        });
};

exports.updateRuangan = function(req, res) {

    const idKampus = req.body.idKampus;
    const namaRuangan = req.body.namaRuangan;
    const idRuangan = req.body.idRuangan;
    

    connection.query('UPDATE ruangan SET idkampus = ?, namaruangan = ?   WHERE id = ?',
        [ idKampus, namaRuangan, idRuangan ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil merubah ruangan !", res)
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