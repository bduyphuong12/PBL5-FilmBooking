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

Seat.get_info = function (id,result) {
    db.query("SELECT seat_no.id,seat.Row_No,seat_no.Seat_No FROM seat INNER JOIN seat_no on seat.Seat_Id = seat_no.Seat_Id WHERE seat_no.id = ?", id,function (err, phim) {
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

Seat.resetByIdRoom = function (id, result) {
    db.query("UPDATE seat_no INNER JOIN seat on seat_no.Seat_Id = seat.Seat_Id INNER JOIN room on seat.Room_Id = room.Room_Id SET seat_no.Seat_status = 'null' WHERE room.Room_Id = ?", id, function (err, phim) {
        if (err) {
            result(null);
            console.log(err);
        } else {
            result(phim);
        }
    });
}

Seat.updateStatusPo = function (id, result) {
    db.query("update seat_no set Status='1' where id = ?", id , function(err, u){
        console.log(err)
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(u);
        }
    })
};

module.exports = Seat;