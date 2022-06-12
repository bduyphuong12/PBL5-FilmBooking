const db = require('../common/connect');
const Room = function (seatNum) {
    this.Room_Id  = seatNum.Room_Id;
    this.Room_Name = seatNum.Room_Name;
}

Room.get_all = function (result) {
    db.query("select * from room", function (err, seatNo) {
        if (err) {
            result(err);
        } else {
            result(seatNo);
        }
    });
};



module.exports = Room;