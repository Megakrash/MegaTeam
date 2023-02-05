import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { FaKiwiBird } from "react-icons/fa";

function AddTeamName({ userId, setTeamId, setShowHero1 }) {
  const [tName, setTName] = useState("");
  const [showTheName, setShowTheName] = useState(false);

  const postNewTeam = () => {
    axios
      .post(`${import.meta.env.VITE_PORT_BACKEND}/team`, { name: tName })
      .then((res) => {
        setTeamId(res.data[0].insertId);
        axios
          .post(`${import.meta.env.VITE_PORT_BACKEND}/team_user`, {
            teamId: res.data[0].insertId,
            userId,
          })
          .then(() => {
            setShowTheName(true);
            setShowHero1(true);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="addTeamName">
      {showTheName === false ? (
        <form className="addTeamName_form">
          <label className="addTeamName_form_label" htmlFor="title">
            First choose a super awesome name for your team !
          </label>
          <input
            className="signin_form_box_input"
            type="text"
            id="nickname"
            placeholder="Enter your super awesome name"
            onChange={(e) => setTName(e.target.value)}
            required
          />
          <button
            className="sendBtn"
            type="button"
            onClick={() => postNewTeam()}
          >
            <span className="sendSpan">Send</span>
          </button>
        </form>
      ) : (
        <div className="addTeamName_result">
          <p className="addTeamName_result_text">
            Oh boy !
            <FaKiwiBird className="kiwi" />
          </p>
          <p className="addTeamName_result_text">
            That's what I call a great name !
          </p>
          <p className="teamNameBtn">{tName} </p>
        </div>
      )}
    </div>
  );
}

export default AddTeamName;

AddTeamName.propTypes = {
  userId: PropTypes.number.isRequired,
  setTeamId: PropTypes.func.isRequired,
  setShowHero1: PropTypes.func.isRequired,
};
