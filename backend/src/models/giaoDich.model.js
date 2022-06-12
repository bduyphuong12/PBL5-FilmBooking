const db = require('../common/connect');
const GiaoDich = function (giaoDich) {
    this.id = giaoDich.id;
    this.ngay = giaoDich.ngay;
    this.id_user = giaoDich.id_user;
    this.so_tien = giaoDich.so_tien;
    this.id_hang = giaoDich.id_hang;
}

GiaoDich.get_all = function (result) {
    db.query("select * from giao_dich", function (err, tB) {
        if (err) {
            result(err);
        } else {
            result(tB);
        }
    });
};

GiaoDich.getById = function (id, result) {
    db.query("select * from thong_bao where id = ?", id, function (err, tB) {
        if (err || tB.length == 0) {
            result(err);
        } else {
            result(tB);
        }
    });
};

GiaoDich.add = function (data, result) {
    db.query("INSERT INTO thong_bao (id, ngay, noi_dung) VALUES (?,?,?);", [data.id, data.ngay, data.noi_dung], function (err, tB) {
        console.log(err, data)
        if (err) {
            result(null);
        } else {
            result(data);
        }
    });
};

GiaoDich.remove = function (id, result) {
    db.query("delete from thong_bao where id = ?", id, function (err, tB) {
        if (err) {
            result(null);
        } else {
            result(tB);
        }
    });
}

GiaoDich.update = function (u, result) {
    db.query("update thong_bao set ngay=?,noi_dung=? where id = ?", [u.ngay, u.noi_dung, u.id], function (err, u) {
        console.log(err)
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(u);
        }
    })
};

module.exports = GiaoDich;