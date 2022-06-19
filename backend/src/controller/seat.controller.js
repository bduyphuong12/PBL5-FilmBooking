const { response } = require('express');
const Seat = require('../models/seat.model');

exports.get_seat = function (req, res) {
    Seat.get_all(function (data) {
        res.send({ result: data });
    });
}

exports.get_seat_info = function (req, res) {
    Seat.get_info(req.params.id, function (data) {
        res.send({ result: data });
    });
}



exports.updatePo = function (req, res) {
    Seat.updateStatusPo(req.params.id, function (response) {
        res.send({ result: response });
    })
}

exports.reset = function (req, res) {
    Seat.resetByIdRoom(req.params.id, function (response) {
        res.send({ result: response });
    });
}

exports.getByRoomId = function (req, res) {
    Seat.getByRoomId(req.params.id, function (response) {
        res.send({ result: response });
    });
}