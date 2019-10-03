'use strict';

const response = require('../res');
const connection = require('../conn');

exports.listKabupaten = function(req, res) {
    connection.query('SELECT id, kabupaten_kota FROM tbl_kabkot', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};