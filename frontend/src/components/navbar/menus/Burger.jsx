import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FaUser, FaUserPlus, FaPowerOff } from "react-icons/fa";
import UserContext from "../../../context/UserContext";

function Burger({ isBurgerClicked = false, setIsBurgerClicked }) {
  const { userToken, id } = useContext(UserContext);
  const inputImgAvatar = useRef();

  return (
    <div
      className={
        isBurgerClicked ? "menu-burger active" : "menu-burger inactive"
      }
    >
      {userToken && userToken.length > 0 ? (
        <div className="buttons">
          <div className="profile-favorites-container">
            <NavLink to="/profil">
              <div className="btn-profil-image-container">
                <button
                  className="btn btn-profil"
                  type="button"
                  onClick={() => {
                    setIsBurgerClicked(false);
                  }}
                >
                  <FaUser className="signin-icon" /> Profil
                </button>
                <img
                  ref={inputImgAvatar}
                  className="img-avatar-profil"
                  src={`${
                    import.meta.env.VITE_PORT_BACKEND
                  }/assets/images/avatars/${id}.jpg`}
                  alt="avatar"
                  onError={() => {
                    inputImgAvatar.current.src =
                      "https://png.pngtree.com/png-clipart/20210129/ourlarge/pngtree-man-default-avatar-png-image_2813122.jpg";
                  }}
                />
              </div>
            </NavLink>
          </div>

          <button
            className="btn btn-logout"
            type="button"
            onClick={() => {
              localStorage.removeItem("token");
              setIsBurgerClicked(false);
              window.location.reload();
            }}
          >
            <FaPowerOff className="logout-icon" /> Log out
          </button>
        </div>
      ) : (
        <div className="buttons">
          <NavLink to="/login">
            <button
              className="btn btn-login"
              type="button"
              onClick={() => {
                setIsBurgerClicked(false);
              }}
            >
              <FaUser className="login-icon" /> Log in
            </button>
          </NavLink>
          <NavLink to="/signin">
            <button
              className="btn btn-signin"
              type="button"
              onClick={() => {
                setIsBurgerClicked(false);
              }}
            >
              <FaUserPlus className="signin-icon" /> Sign in
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Burger;

Burger.propTypes = {
  isBurgerClicked: PropTypes.bool.isRequired,
  setIsBurgerClicked: PropTypes.func.isRequired,
};
