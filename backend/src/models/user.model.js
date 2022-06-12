const db = require('../common/connect');
const User = function (user) {
    this.ID_User = user.ID_User;
    this.User_Name = user.User_Name;
    this.User_Password = user.User_Password;
    this.Email = user.Email;
    this.Phone_Number = user.Phone_Number;
}

User.get_all = function (result) {
    db.query("select * from user", function (err, user) {
        if (err) {
            result(err);
        } else {
            result(user);
        }
    });
};

User.getById = function (id, result) {
    db.query("select * from user where Id_User = ?", id, function (err, user) {
        if (err || user.length == 0) {
            result(err);
        } else {
            result(user);
        }
    });
};

User.add = function (data, result) {
     db.query("INSERT INTO user (ID_User, User_Name, User_Password,Email,Phone_Number) VALUES (?,?,?,?,?);", [data.ID_User,data.User_Name,data.User_Password,data.Email,data.Phone_Number], function(err, user){
        console.log(err, data)
        if (err) {
            result(null);
         } else {
            result(data);
         }
     });
 };

User.remove_user = function (id, result) {
    db.query("delete from user where Id_User = ?", id, function (err, user) {
        if (err) {
            result(null);
        } else {
            result(user);
        }
    });
}

User.update = function (u, result) {
    db.query("update user set User_Name=?,User_Password=?,Email=?,Phone_Number=? where Id_User = ?", [u.User_Name,u.User_Password,u.Email,u.Phone_Number,u.ID_User], function(err, u){
        console.log(err)
        if (err) {
            console.log(err);
            result(err);
        } else {
            result(u);
        }
    })
};

module.exports = User;