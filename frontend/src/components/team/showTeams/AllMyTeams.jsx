import React from "react";
import PropTypes from "prop-types";
// import TeamCard from "./TeamCard";

function AllMyTeams({ allTeam }) {
  return (
    <div className="allMyTeams">
      <p className="allMyTeams_title">All my teams</p>
      {allTeam.map((infos) => {
        return (
          <div key={infos.team_id}>{/* <TeamCard id={infos.team_id} /> */}</div>
        );
      })}
    </div>
  );
}

export default AllMyTeams;

AllMyTeams.propTypes = {
  allTeam: PropTypes.arrayOf(
    PropTypes.shape({
      team_id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
