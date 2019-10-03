'use strict';

const response = require('../res');
const connection = require('../conn');

exports.users = function(req, res) {
    connection.query('SELECT * FROM users', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.bkdUser = function(req, res) {
    connection.query('SELECT * FROM v_bkduser', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from BKPSDMD Sulsel API Server!", res)
};

exports.findUsers = function(req, res) {

    var user_id = req.params.user_id;

    connection.query('SELECT nip, nama, email, roleid FROM users where id = ?',
        [ user_id ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.createUsers = function(req, res) {

    const nip = req.body.nip;
    const nama = req.body.nama;
    const roleid = req.body.roleid;
    const email = req.body.email;
    const password = req.body.password;


    connection.query('INSERT INTO users (nip, roleid, email, password) values (?,?,?,?)',
        [ nip, roleid, nama, email, password ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan user!", res)
            }
        });
};

exports.updateUsers = function(req, res) {

    const user_id = req.body.user_id;
    const nip = req.body.nip;
    const nama = req.body.nama;
    const roleid = req.body.roleid;
    const email = req.body.email;
    const password = req.body.password;


    connection.query('UPDATE person SET nip = ?, roleid = ?, email = ?, nama = ?, password = ?  WHERE id = ?',
        [ nip, roleid, email, nama, password, user_id ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil merubah user!", res)
            }
        });
};

exports.deleteUsers = function(req, res) {

    const user_id = req.body.user_id;

    connection.query('DELETE FROM users WHERE id = ?',
        [ user_id ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menghapus user!", res)
            }
        });
};