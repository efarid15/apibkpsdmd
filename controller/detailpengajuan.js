'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listDetailpengajuan = function(req, res) {
    connection.query('SELECT * FROM detailpengajuan', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.findDetailpengajuan = function(req, res) {

    var pengajuanId = req.params.pengajuanId;

    connection.query('SELECT * FROM detailpengajuan where idpengajuan = ?',
        [ pengajuanId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createDetailpengajuan = function(req, res) {

    const idJenisdiklat = req.body.idJenisdiklat;
    const idKampus = req.body.idKampus;
    const idRuangan = req.body.idRuangan;
    const tglMulai = req.body.tglMulai;
    const tglAkhir = req.body.tglAkhir;
    const idPengajuan = req.body.idPengajuan;
    const idMentor = req.body.idMentor;
    

    connection.query('INSERT INTO detailpengajuan (idjenisdiklat, tglmulai, tglberakhir, idtempat, idpengajuan, idwidyaiswara, idruangan) values (?,?,?,?,?,?,?)',
        [ idJenisdiklat, tglMulai, tglAkhir, idKampus, idPengajuan, idMentor, idRuangan],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan detail pengajuan", res)
            }
        });
};

