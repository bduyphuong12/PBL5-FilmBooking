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


Room.update = function (u, result) {
    db.query("update room set Status=?,Id_lich_chieu=? where Room_Id = ?", [u.Status,u.Id_lich_chieu,u.Room_Id], function(err, u){
        console.log(err)
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(u);
        }
    })
};
module.exports = Room;