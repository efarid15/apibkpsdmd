'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listKritik = function(req, res) {
    connection.query('SELECT * FROM v_kritikdansaran', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.lisKritikbkd = function(req, res) {

    var bkdId = req.params.bkdId;

    connection.query('SELECT * FROM v_kritikdansaran where idbkd = ?',
        [ bkdId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createKritik = function(req, res) {

    const idBkd = req.body.idBkd;
    const kritiksaran = req.body.kritiksaran;
    const user = req.body.user;
    const avatar = req.body.avatar;
    

    connection.query('INSERT INTO  (idbkd, kritiksaran, user, avatar) values (?,?,?,?)',
        [ idBkd, kritiksaran, user, avatar ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan kritik saran", res)
            }
        });
};
