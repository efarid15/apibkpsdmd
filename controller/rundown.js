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

    connection.query('SELECT * FROM v_rundown where idpengajuan = ?',
        [ pengajuanId ],
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
    const idwidyaiswara = req.body.idwidyaiswara;
    const jam = req.body.jam;
    

    connection.query('INSERT INTO rundown (idpengajuan, day, deskripsi, hari, idwidyaiswara, jam) values (?,?,?,?,?,?)',
        [ idpengajuan, day, deskripsi, hari, idwidyaiswara, jam ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan rundown kegiatan", res)
            }
        });
};
