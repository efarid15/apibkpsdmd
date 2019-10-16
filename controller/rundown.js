'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listRundown = function(req, res) {
    connection.query('SELECT * FROM rundown', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.findRundown = function(req, res) {

    var pengajuanId = req.params.pengajuanId;

    connection.query('SELECT * FROM rundown where idpengajuan = ?',
        [ bkdId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createRundown = function(req, res) {

    const idpengajuan = req.body.idpengajuan;
    const day = req.body.day;
    const deskripsi = req.body.deskripsi;
    const hari = req.body.hari;
    

    connection.query('INSERT INTO rundown (idpengajuan, day, deskripsi, hari) values (?,?,?,?)',
        [ idpengajuan, day, deskripsi, hari ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan kritik saran", res)
            }
        });
};
