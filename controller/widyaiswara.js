'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listWidyaiswara = function(req, res) {
    connection.query('SELECT * FROM widyaiswara', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.findWidyaiswara = function(req, res) {

    var widyaiswaraId = req.params.widyaiswaraId;

    connection.query('SELECT * FROM widyaiswara where id = ?',
        [ widyaiswaraId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createWidyaiswara = function(req, res) {

    const namaWidyaiswara = req.body.namaWidyaiswara;
    const notelpWidyaiswara = req.body.notelpWidyaiswara;
    const emailWidyaiswara = req.body.emailWidyaiswara;
    

    connection.query('INSERT INTO widyaiswara (nama, notelp, email) values (?,?,?)',
        [ namaWidyaiswara, notelpWidyaiswara, emailWidyaiswara ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan widyaiswara", res)
            }
        });
};

exports.updateWidyaiswara = function(req, res) {

    const widyaiswaraId = req.body.widyaiswaraId;
    const namaWidyaiswara = req.body.namaWidyaiswara;
    const notelpWidyaiswara = req.body.notelpWidyaiswara;
    const emailWidyaiswara = req.body.emailWidyaiswara;
    

    connection.query('UPDATE widyaiswara SET nama = ?, notelp = ?, email = ?   WHERE id = ?',
        [ namaWidyaiswara, notelpWidyaiswara, emailWidyaiswara, widyaiswaraId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil merubah data widyaiswara !", res)
            }
        });
};

exports.deleteWidyaiswara = function(req, res) {

    const widyaiswaraId = req.body.widyaiswaraId;

    connection.query('DELETE FROM widyaiswara WHERE id = ?',
        [ widyaiswaraId ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menghapus data widyaiswara !", res)
            }
        });
};