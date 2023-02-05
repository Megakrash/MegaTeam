import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import CreateTeam from "./create/CreateTeam";
import AllMyTeams from "./showTeams/AllMyTeams";

function Team() {
  const { id } = useContext(UserContext);
  const [allTeam, setAllTeam] = useState("");

  const getAllTeam = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/team_user/${id}`)
      .then((res) => {
        setAllTeam(res.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getAllTeam();
  }, []);

  return (
    <div className="team">
      <div>
        <CreateTeam userId={id} getAllTeam={getAllTeam} />
      </div>
      <div>{allTeam.length >= 1 && <AllMyTeams allTeam={allTeam} />}</div>
    </div>
  );
}

export default Team;
