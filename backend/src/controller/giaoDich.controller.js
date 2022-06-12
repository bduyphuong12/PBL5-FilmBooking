const { response } = require('express');
const GiaoDich = require('../models/giaoDich.model');


exports.get_list = function (req, res) {
    GiaoDich.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    GiaoDich.getById(req.params.id, function (response) {
        res.send({ result: response });
    });
}

//body-parser
exports.add_tb = function (req, res) {
    var data = req.body;
    console.log(req.body);
    GiaoDich.add(data, function (respnse) {
        res.send({ result: respnse });
    });
}

exports.remove_tb = function (req, res) {
    var id = req.params.id;
    GiaoDich.remove(id, function (response) {
        res.send({ result: response });
    })
}

exports.update_tb = function (req, res) {
    var data = req.body;
    GiaoDich.update(data, function (response) {
        res.send({ result: response });
    });
}


