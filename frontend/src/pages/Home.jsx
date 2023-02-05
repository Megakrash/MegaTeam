import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SeeAllTeams from "@components/home/SeeAllTeams";
import UserContext from "../context/UserContext";

export default function Home() {
  const { userToken } = useContext(UserContext);

  return (
    <div className="home">
      {userToken === "" ? (
        <div className="home_noToken">
          <p>To use this application you must</p>
          <NavLink to="/signin">
            <p className="home_noToken_link">sign up</p>
          </NavLink>
          <p>or</p>
          <NavLink to="/login">
            <p className="home_noToken_link">register</p>
          </NavLink>
        </div>
      ) : (
        <div className="home_Token">
          <SeeAllTeams />
        </div>
      )}
    </div>
  );
}
