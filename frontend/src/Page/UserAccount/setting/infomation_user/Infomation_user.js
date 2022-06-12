import React, { useState } from "react";
import "./Information.scss";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
const Infomation_user = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msgVal, setmsgVal] = useState("");
  const onchangeName = (event) => {
    setName(event.target.value);
  };
  const onchangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onchangePhone = (event) => {
    setPhone(event.target.value);
  };
  const validateAll = () => {
    const msg = {};
    if (isEmpty(name)) {
      msg.name = "Please input your name";
    }
    if (isEmpty(email)) {
      msg.email = "Please input your email";
    } else {
      if (!isEmail(email)) {
        msg.email = "Invalid Email";
      }
    }
    if (isEmpty(phone)) {
      msg.phone = "Please input your phone";
    }
    setmsgVal(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const onSubmitSave = () => {
    const isValid = validateAll();
    if (!isValid) return;
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <form action="" className="infomation" onSubmit={onSubmitForm}>
      <div className="input-container ">
        <i className="fa fa-user icon" style={{ width: 22.5 }}></i>
        <input
          type="text"
          placeholder="Tài khoản..."
          className="input"
          name="username"
          readOnly
        />
      </div>
      <p>{}</p>
      <div className="input-container ">
        <i className="fa fa-id-card icon" style={{ width: 22.5 }}></i>
        <input
          type="text"
          placeholder="Họ tên..."
          className="input"
          name="name"
          value={name}
          onChange={onchangeName}
        />
      </div>
      <p>{msgVal.name}</p>
      <div className="input-container ">
        <i className="fa fa-envelope icon" style={{ width: 22.5 }}></i>
        <input
          type="email"
          placeholder="Email..."
          className="input"
          name="email"
          readOnly
          value={email}
          onChange={onchangeEmail}
        />
      </div>
      <p>{msgVal.email}</p>
      <div className="input-container ">
        <i className="fa fa-phone icon" style={{ width: 22.5 }}></i>
        <input
          type="text"
          placeholder="SĐT..."
          className="input"
          name="phone"
          value={phone}
          onChange={onchangePhone}
        />
        <p>{msgVal.phone}</p>
      </div>
      <button onClick={onSubmitSave}>LƯU</button>
    </form>
  );
};
export default Infomation_user;
