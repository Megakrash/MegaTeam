import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

function Profil() {
  const [userInfos, setUserInfos] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { id } = useContext(UserContext);
  const navigate = useNavigate();

  const getUser = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/users/${id}`)
      .then((res) => {
        setUserInfos(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    if (id === "") {
      navigate("/");
    } else {
      getUser();
    }
  }, []);

  const updateUser = (data) => {
    axios
      .patch(`${import.meta.env.VITE_PORT_BACKEND}/users/${id}`, data)
      .then(() => {
        getUser();
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const update = () => {
    if (userNickname !== "") {
      updateUser({ nickname: userNickname });
    }
    if (userEmail !== "") {
      updateUser({ email: userEmail });
    }
    if (userPassword !== "") {
      updateUser({ password: userPassword });
    }
  };

  const deleteUser = () => {
    axios
      .delete(`${import.meta.env.VITE_PORT_BACKEND}/users/${id}`)
      .then(() => {
        localStorage.removeItem("token");
        window.location.reload();
        navigate("/");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="signin">
      {userInfos !== "" && (
        <form className="signin_form">
          <div className="signin_form_box">
            <label className="signin_form_box_label" htmlFor="title">
              Nickname
            </label>
            <input
              className="signin_form_box_input"
              type="text"
              id="nickname"
              placeholder={userInfos.nickname}
              onChange={(e) => setUserNickname(e.target.value)}
            />
            <button className="sendBtn" type="button" onClick={() => update()}>
              <span className="sendSpan">Update</span>
            </button>
          </div>
          <div className="signin_form_box">
            <label className="signin_form_box_label" htmlFor="title">
              Email
            </label>
            <input
              className="signin_form_box_input"
              type="email"
              id="email"
              placeholder={userInfos.email}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <button className="sendBtn" type="button" onClick={() => update()}>
              <span className="sendSpan">Update</span>
            </button>
          </div>
          <div className="signin_form_box">
            <label className="signin_form_box_label" htmlFor="title">
              Password
            </label>
            <input
              className="signin_form_box_input"
              type="password"
              id="password"
              placeholder="********"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <button className="sendBtn" type="button" onClick={() => update()}>
              <span className="sendSpan">Update</span>
            </button>
          </div>
          <button
            className="sendBtn profil_btn"
            type="button"
            onClick={() => deleteUser()}
          >
            <span className="sendSpan">Delete account</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default Profil;
