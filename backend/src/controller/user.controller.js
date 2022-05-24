const { response } = require('express');
const User = require('../models/user.model');
var user = require('../models/user.model');
exports.get_list = function (req, res) {
    User.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.detail = function (req, res) {
    User.getById(req.params.id, function (response) {
        res.send({ result: response });
    });
}

//body-parser
exports.add_user = function (req, res) {
    var data = req.body;
    console.log(req.body);
    User.add(data, function (respnse) {
        res.send({ result: respnse });
    });
}

exports.remove_user = function (req, res) {
    var id = req.params.id;
    User.remove_user(id, function (response) {
        res.send({ result: response });
    })
}

exports.update_user = function (req, res) {
    var data = req.body;
    User.update(data, function (response) {
        res.send({ result: response });
    });
}


