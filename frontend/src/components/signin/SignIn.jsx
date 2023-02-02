import React, { useState } from "react";
import axios from "axios";
import PasswordMeter from "./PasswordMeter";
import Confirmation from "./Confirmation";

function SignIn() {
  const [mail, setMail] = useState("");
  const [repeatMail, setRepeatMail] = useState("");
  const [password, setPassword] = useState("");
  const [showValidation, setShowValidation] = useState(false);
  const [showError, setShowError] = useState(false);
  const [userInfos, setUserInfos] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  const postNewUser = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_PORT_BACKEND}/users`, userInfos)
      .then(() => {
        setShowValidation(true);
      })
      .catch(() => {
        setShowError(true);
      });
  };

  return (
    <div className="signin">
      {showValidation === false ? (
        <form className="signin_form" action="" onSubmit={postNewUser}>
          <p className="signin_form_title">Sign in</p>
          <div className="signin_form_box">
            <label className="signin_form_box_label" htmlFor="title">
              Nickname
            </label>
            <input
              className="signin_form_box_input"
              type="text"
              id="nickname"
              value={userInfos.name}
              placeholder="Enter your Nickname"
              onChange={(e) =>
                setUserInfos({ ...userInfos, nickname: e.target.value })
              }
              required
            />
          </div>
          <div className="signin_form_box">
            <label className="signin_form_box_label" htmlFor="title">
              Email
            </label>
            <input
              className="signin_form_box_input"
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setMail(e.target.value);
                setShowError(false);
              }}
              required
            />
          </div>
          <div className="signin_form_box">
            <label className="signin_form_box_label" htmlFor="title">
              Confirm your email
            </label>
            <input
              className="signin_form_box_input"
              type="email"
              value={userInfos.email}
              placeholder="Confirm your email"
              onChange={(e) => {
                setUserInfos({ ...userInfos, email: e.target.value });
                setRepeatMail(e.target.value);
              }}
              required
            />
          </div>
          {showError === true && <p>Email already used</p>}
          {mail !== "" && mail === repeatMail && (
            <div className="signin_form_box">
              <label className="signin_form_box_label" htmlFor="title">
                Password
              </label>
              <input
                className="signin_form_box_input"
                type="password"
                id="password"
                value={userInfos.password}
                placeholder="Enter your password"
                onChange={(e) => {
                  setUserInfos({ ...userInfos, password: e.target.value });
                  setPassword(e.target.value);
                }}
                required
              />
              <PasswordMeter
                password={password}
                className="password-strength-meter"
              />
            </div>
          )}
          <button type="submit" className="sendBtn signin_form_btn">
            <span className="sendSpan">Send</span>
          </button>
        </form>
      ) : (
        <Confirmation />
      )}
    </div>
  );
}

export default SignIn;
