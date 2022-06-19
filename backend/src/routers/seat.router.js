module.exports = function (router) {
    var seatController = require('../controller/seat.controller');

    router.get("/seat/list", seatController.get_seat);

    router.get("/seat/getByRoomId/:id", seatController.getByRoomId);

    router.put("/seat/updatePo/:id", seatController.updatePo);

    router.put("/seat/reset/:id", seatController.reset);

    router.get("/seat/info/:id", seatController.get_seat_info);
}