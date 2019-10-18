'use strict';
const bcrypt = require('bcrypt');

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

    connection.query('SELECT nip, nama, email, roleid, bkdid FROM users where id = ?',
        [ user_id ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
};

exports.findProfile = function(req, res) {

    var userEmail = req.body.userEmail;

    connection.query('SELECT nip, nama, email, roleid FROM users where email = ?',
        [ userEmail ],
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
    const idbkd = req.body.idbkd;
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

exports.createBkduser = function(req, res) {

    const idbkd = req.body.idbkd;
    const nama = req.body.nama;
    const roleid = req.body.roleid;
    const email = req.body.email;
    const password = req.body.password;

    let hash = bcrypt.hashSync(password, 10);


    connection.query('INSERT INTO users (roleid, email, nama, password, bkdid) values (?,?,?,?,?)',
        [ roleid, email, nama, hash, idbkd ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil menambahkan user!", res)
            }
        });
};

exports.createMemberuser = function(req, res) {

    const nip = req.body.nip
    const idbkd = req.body.idbkd;
    const idskpd = req.body.idskpd;
    const idkegiatan = req.body.idkegiatan;
    const nama = req.body.nama;
    const roleid = req.body.roleid;
    const email = req.body.email;
    const password = req.body.password;

    let hash = bcrypt.hashSync(password, 10);


    connection.query('INSERT INTO users (nip, roleid, email, nama, password, bkdid, skpdid, kegiatanid) values (?,?,?,?,?,?,?,?)',
        [ nip, roleid, email, nama, hash, idbkd, idskpd, idkegiatan ],
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
    const email = req.body.email;
    

    connection.query('UPDATE users SET nip = ?, email = ?, nama = ?  WHERE id = ?',
        [ nip, email, nama, user_id ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil merubah profile!", res)
            }
        });
};

exports.updatePassword = function(req, res) {

    const newPassword = req.body.newPassword;
    const userEmail = req.body.userEmail;

    let hash = bcrypt.hashSync(newPassword, 10);

    connection.query('UPDATE users SET password = ?  WHERE email = ?',
        [ hash, userEmail ],
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("Berhasil merubah password user!", res)
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