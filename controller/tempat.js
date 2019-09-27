'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listTempat = function(req, res) {
    connection.query('SELECT * FROM tempat', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.findTempat = function(req, res) {

    var tempatId = req.params.tempatId;

    connection.query('SELECT * FROM tempat where id = ?',
        [ tempatId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createTempat = function(req, res) {

    const namaTempat = req.body.namaTempat;
    const ruanganTempat = req.body.ruanganTempat;
    const alamatTempat = req.body.alamatTempat;
    

    connection.query('INSERT INTO tempat (namatempat, ruangan, alamat) values (?,?,?)',
        [ namaTempat, ruanganTempat, alamatTempat ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan tempat diklat", res)
            }
        });
};

exports.updateTempat = function(req, res) {

    const tempatId = req.body.tempatId;
    const namaTempat = req.body.namaTempat;
    const ruanganTempat = req.body.ruanganTempat;
    const alamatTempat = req.body.alamatTempat;
    

    connection.query('UPDATE tempat SET namatempat = ?, ruangan = ?, alamat = ?   WHERE id = ?',
        [ namaTempat, ruanganTempat, alamatTempat, tempatId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil merubah tempat diklat !", res)
            }
        });
};

exports.deleteTempat = function(req, res) {

    const tempatId = req.body.tempatId;

    connection.query('DELETE FROM tempat WHERE id = ?',
        [ tempatId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menghapus tempat diklat!", res)
            }
        });
};