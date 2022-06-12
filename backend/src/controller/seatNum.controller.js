const { response } = require('express');
const SeatNo = require('../models/seatNum.model');
var seatNo = require('../models/seatNum.model');

exports.get_list = function (req, res) {
    SeatNo.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.getBySeatId = function (req, res) {
    SeatNo.getBySeatId(req.params.id, function (response) {
        res.send({ result: response });
    });
}

