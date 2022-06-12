module.exports = function (router) {
    var seatNoController = require('../controller/seatNum.controller');

    router.get("/seatNo/list", seatNoController.get_list);

    router.get("/seatNo/getBySeatId/:id", seatNoController.getBySeatId);
}