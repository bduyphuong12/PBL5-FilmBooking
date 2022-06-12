const db = require('../common/connect');
const SeatNo = function (seatNum) {
    this.Seat_Id  = seatNum.Seat_Id;
    this.Seat_No = seatNum.Seat_No;
    this.Status = seatNum.Status;
}

SeatNo.get_all = function (result) {
    db.query("select * from seat_no", function (err, seatNo) {
        if (err) {
            result(err);
        } else {
            result(seatNo);
        }
    });
};

SeatNo.getBySeatId = function (id, result) {
    db.query("select * from seat_no where Seat_Id = ?", id, function (err, dv) {
        if (err || dv.length == 0) {
            result(err);
        } else {
            result(dv);
        }
    });
};


module.exports = SeatNo;