import React from "react";
import "./login.scss";

import { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { Link } from "react-router-dom";
const Login_form = () => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [valmsg, setValmsg] = useState("");
  const onChangeUserName = (event) => {
    let value = event.target.value;
    setUserName(value);
  };
  const onChangePassWord = (event) => {
    let value = event.target.value;
    setPassWord(value);
  };
  const validateAll = () => {
    const msg = {};
    if (isEmpty(username)) {
      msg.username = "Please input your username";
    }
    if (isEmpty(password)) {
      msg.password = "Please input your password";
    }
    setValmsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const onSubmitLogin = () => {
    const isValid = validateAll();
    if (!isValid) return;
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login">
      <form action="" className="login_form" onSubmit={onSubmitForm}>
      <h2>ĐĂNG NHẬP</h2>

      <div className="input-container ">
        <i className="fa fa-user icon" style={{ width: 22.5 }}></i>
        <input
          type="text"
          placeholder="Tài khoản..."
          className="input"
          name="username"
          value={username}
          onChange={onChangeUserName}
        />
        <p>{valmsg.username}</p>
      </div>
      <div className="input-container">
        <i className="fa fa-key icon"></i>
        <input
          type="password"
          placeholder="Mật khẩu..."
          className="input"
          name="password"
          value={password}
          onChange={onChangePassWord}
        />
        <p>{valmsg.password}</p>
      </div>
      <button className="btn-login" onClick={onSubmitLogin}>
        ĐĂNG NHẬP
      </button>
      <div className="register">
        <label htmlFor="register">Bạn chưa có tài khoản?</label>
        <Link id="register" to={'/register'}>
          <button>
          ĐĂNG KÝ
          </button>
        </Link>
      </div>
    </form>
    </div>
    
  );
};
export default Login_form;
