module.exports = function (router) {
    var roomController = require('../controller/room.controller');

    router.get("/room/list", roomController.get_list);
}