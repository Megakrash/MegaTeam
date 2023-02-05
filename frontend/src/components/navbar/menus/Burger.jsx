import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaUserPlus,
  FaPowerOff,
  FaUserSecret,
  FaUserAstronaut,
} from "react-icons/fa";
import UserContext from "../../../context/UserContext";

function Burger({ isBurgerClicked = false, setIsBurgerClicked }) {
  const { userToken } = useContext(UserContext);
  const navigate = useNavigate();

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
              </div>
            </NavLink>
          </div>
          <button
            className="btn btn-team"
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            <FaUserAstronaut className="logout-icon" /> All teams
          </button>
          <button
            className="btn btn-team"
            type="button"
            onClick={() => {
              navigate("/team");
            }}
          >
            <FaUserSecret className="logout-icon" /> My teams
          </button>
          <button
            className="btn btn-logout"
            type="button"
            onClick={() => {
              localStorage.removeItem("token");
              setIsBurgerClicked(false);
              window.location.reload();
              navigate("/");
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
