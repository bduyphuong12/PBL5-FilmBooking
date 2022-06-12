const db = require('../common/connect');
const Seat = function (seat) {
    this.room_id = seat.room_id;
    this.row_no = seat.row_no; 
    this.seat_no = seat.seat_no;
    this.status = seat.status; 
}

Seat.get_all = function (result) {
    db.query("select * from seat", function (err, phim) {
        if (err) {
            result(err);
        } else {
            result(phim);
        }
    });
};

Seat.getByRoomId = function (id, result) {
    db.query("select * from seat where Room_Id = ?", id, function (err, dv) {
        if (err || dv.length == 0) {
            result(err);
        } else {
            result(dv);
        }
    });
};



module.exports = Seat;