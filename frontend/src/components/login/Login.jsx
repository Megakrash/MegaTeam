import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Login({ setUserContext }) {
  const navigate = useNavigate();
  const [userInfos, setUserInfos] = useState({
    email: "",
    password: "",
  });

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_PORT_BACKEND}/login`, userInfos)
      .then((res) => {
        setUserContext(res.data);
        localStorage.setItem(
          "token",
          JSON.stringify({
            userToken: res.data.token,
            id: res.data.id,
          })
        );
        navigate("/team");
        window.location.reload();
      })

      .catch((err) => console.warn(err));
  };
  return (
    <div className="signin">
      <form className="signin_form" action="" onSubmit={loginUser}>
        <p className="signin_form_title">Log in</p>
        <div className="signin_form_box">
          <label className="signin_form_box_label" htmlFor="title">
            Email
          </label>
          <input
            className="signin_form_box_input"
            type="email"
            id="email"
            value={userInfos.email}
            placeholder="Enter your email"
            onChange={(e) =>
              setUserInfos({ ...userInfos, email: e.target.value })
            }
            required
          />
        </div>
        <div className="signin_form_box">
          <label className="signin_form_box_label" htmlFor="title">
            Password
          </label>
          <input
            className="signin_form_box_input"
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setUserInfos({ ...userInfos, password: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="sendBtn signin_form_btn">
          <span className="sendSpan">Send</span>
        </button>
      </form>
    </div>
  );
}

export default Login;

Login.propTypes = {
  setUserContext: PropTypes.func.isRequired,
};
