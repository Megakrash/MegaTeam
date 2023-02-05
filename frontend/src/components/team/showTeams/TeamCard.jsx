import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function TeamCard({ id }) {
  // const [teamInfos, setTeamInfos] = useState("");
  // const [infosHero1, setInfosHero1] = useState("");
  // const [infosHero2, setInfosHero2] = useState("");
  // const [infosHero3, setInfosHero3] = useState("");
  // const [showTeams, setShowTeams] = useState(false);

  const getTeam = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/team/${id}`)
      .then(() => {
        // setTeamInfos(res.data.name);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getTeam();
  }, []);

  return (
    <div className="teamCard">
      {/* {showTeams === true && (
        <div>
          <p>{teamInfos}</p>
          <div>
            <img src={infosHero1.image.url} alt={infosHero1.name} />
            <img src={infosHero2.image.url} alt={infosHero2.name} />
            <img src={infosHero3.image.url} alt={infosHero3.name} />
          </div>
        </div>
      )} */}
    </div>
  );
}

export default TeamCard;

TeamCard.propTypes = {
  id: PropTypes.number.isRequired,
};
