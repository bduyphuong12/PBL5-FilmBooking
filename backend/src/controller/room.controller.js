const { response } = require('express');
const Room = require('../models/room.model');
var room = require('../models/room.model');

exports.get_list = function (req, res) {
    Room.get_all(function (data) {
        res.send({ result: data });
    });
}


