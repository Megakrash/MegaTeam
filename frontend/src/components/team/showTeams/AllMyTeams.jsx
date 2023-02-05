import React from "react";
import PropTypes from "prop-types";
import TeamCard from "./TeamCard";

function AllMyTeams({ allTeam, getAllTeam }) {
  return (
    <div className="allMyTeams">
      <p className="allMyTeams_title">All my teams :</p>
      <div className="allMyTeams_card">
        {allTeam.map((infos) => {
          return (
            <TeamCard
              key={infos.team_id}
              id={infos.team_id}
              getAllTeam={getAllTeam}
            />
          );
        })}
      </div>
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
  getAllTeam: PropTypes.func.isRequired,
};
