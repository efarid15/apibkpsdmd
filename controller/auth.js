'use strict';

const response = require('../res');
const connection = require('../conn');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');


exports.me = function(req, res) {
    const token = req.headers['x-access-token']
    if (!token) return res.status(400).json({type: 'error', message: 'x-access-token header tidak ditemukan.'})
    jwt.verify(token, config.jwtToken, (error, result) => {
        if (error) return res.status(403).json({type: 'error', message: 'Token yang diberikan salah.', error})
        return res.json({
            type: 'success',
            message: 'token yang diberikan benar.',
            result
        })
    })

};

exports.login = function(req, res) {
    const email = req.body.email
    const password = req.body.password

    connection.query('SELECT * FROM v_users where email=?', email, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            if (rows.length == 0) return res.status(403).json({type: 'error', message: 'User tidak ditemukan'})
            const user = rows[0]
            bcrypt.compare(password, user.password, (error, result) => {
                if (error) return res.status(500).json({type: 'error', message: 'enkripsi error', error})
                if (result) {
                    res.json({
                        type: 'success',
                        message: 'User berhasil login',
                        user: {id: user.id, email: user.email, nama:user.nama, roleuser:user.role, bkdid:user.bkdid},
                        token: jwt.sign({id: user.id, email: user.email}, config.jwtToken, {expiresIn: '7d'})
                    })
                } else return res.status(403).json({type: 'error', message: 'Password salah.'})
            })
            
        }
    });
};