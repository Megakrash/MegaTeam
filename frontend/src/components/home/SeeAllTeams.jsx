import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeTeamCard from "./HomeTeamCard";

function SeeAllTeams() {
  const [allTeam, setAllTeam] = useState("");

  const getAllTeam = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/team_user`)
      .then((res) => {
        setAllTeam(res.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getAllTeam();
  }, []);

  return (
    <div className="seeAllTeams">
      <p className="allMyTeams_title">All teams from all users :</p>
      {allTeam.length >= 1 && (
        <div className="seeAllTeams_card">
          {allTeam.map((infos) => {
            return (
              <div key={infos.team_id} className="seeAllTeams_card_team">
                <HomeTeamCard id={infos.team_id} user={infos.user_id} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SeeAllTeams;
