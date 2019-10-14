'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listPeserta = function(req, res) {
    connection.query('SELECT * FROM v_pesertabkd', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.listPesertapengajuan = function(req, res) {

    var pengajuanId = req.params.pengajuanId;

    connection.query('SELECT * FROM v_pesertabkd where kegiatanid = ?',
        [ pengajuanId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.listPesertabkd = function(req, res) {

    var bkdId = req.params.bkdId;

    connection.query('SELECT * FROM v_pesertabkd where bkdid = ?',
        [ bkdId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};
