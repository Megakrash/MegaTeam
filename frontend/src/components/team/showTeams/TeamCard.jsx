import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function TeamCard({ id, getAllTeam }) {
  const [teamName, setTeamName] = useState("");
  const [infosHero1, setInfosHero1] = useState("");
  const [infosHero2, setInfosHero2] = useState("");
  const [infosHero3, setInfosHero3] = useState("");
  const [showTeams, setShowTeams] = useState(false);

  const getTeam = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/team/${id}`)
      .then((res) => {
        setTeamName(res.data.name);
        axios
          .get(`${import.meta.env.VITE_PORT_BACKEND}/hero/${res.data.h1}`)
          .then((res1) => {
            setInfosHero1(res1.data);
          })
          .catch((err) => console.error(err));
        axios
          .get(`${import.meta.env.VITE_PORT_BACKEND}/hero/${res.data.h2}`)
          .then((res2) => {
            setInfosHero2(res2.data);
          })
          .catch((err) => console.error(err));
        axios
          .get(`${import.meta.env.VITE_PORT_BACKEND}/hero/${res.data.h3}`)
          .then((res3) => {
            setInfosHero3(res3.data);
            setShowTeams(true);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getTeam();
  }, []);

  const deleteTeam = () => {
    axios
      .delete(`${import.meta.env.VITE_PORT_BACKEND}/team/${id}`)
      .then(() => {
        getAllTeam();
        axios
          .delete(`${import.meta.env.VITE_PORT_BACKEND}/hero/${infosHero1.id}`)
          .catch((err) => console.error(err));
        axios
          .delete(`${import.meta.env.VITE_PORT_BACKEND}/hero/${infosHero2.id}`)
          .catch((err) => console.error(err));
        axios
          .delete(`${import.meta.env.VITE_PORT_BACKEND}/hero/${infosHero3.id}`)
          .catch((err) => console.error(err));
      })

      .catch((err) => console.error(err));
  };

  const whatStats = (h1, h2, h3) => {
    return h1 + h2 + h3;
  };

  return (
    <div className="teamCard">
      {showTeams === true && (
        <div className="teamCard_box">
          <p className="teamCard_box_title">{teamName}</p>
          <div className="teamCard_box_hero">
            <div className="teamCard_box_hero_namePic">
              <p className="teamCard_box_hero_namePic_name">
                {infosHero1.name}
              </p>
              <img
                className="teamCard_box_hero_namePic_picture"
                src={infosHero1.url}
                alt={infosHero1.name}
              />
            </div>
            <div className="teamCard_box_hero_namePic">
              <p className="teamCard_box_hero_namePic_name">
                {infosHero2.name}
              </p>
              <img
                className="teamCard_box_hero_namePic_picture"
                src={infosHero2.url}
                alt={infosHero2.name}
              />
            </div>
            <div className="teamCard_box_hero_namePic">
              <p className="teamCard_box_hero_namePic_name">
                {infosHero3.name}
              </p>
              <img
                className="teamCard_box_hero_namePic_picture"
                src={infosHero3.url}
                alt={infosHero3.name}
              />
            </div>
          </div>
          <div className="teamCard_box_infos">
            <div className="teamCard_box_infos_text">
              <p className="teamCard_box_infos_text_title2">
                Global powerstats
              </p>
              <p>
                Intelligence :{" "}
                <span>
                  {whatStats(
                    infosHero1.intelligence,
                    infosHero2.intelligence,
                    infosHero3.intelligence
                  )}
                </span>
              </p>
              <p>
                Strength :{" "}
                <span>
                  {whatStats(
                    infosHero1.strength,
                    infosHero2.strength,
                    infosHero3.strength
                  )}
                </span>
              </p>
              <p>
                Power :{" "}
                <span>
                  {whatStats(
                    infosHero1.power,
                    infosHero2.power,
                    infosHero3.power
                  )}
                </span>
              </p>
              <p>
                Durability :{" "}
                <span>
                  {whatStats(
                    infosHero1.durability,
                    infosHero2.durability,
                    infosHero3.durability
                  )}
                </span>
              </p>
              <p>
                Speed :{" "}
                <span>
                  {whatStats(
                    infosHero1.speed,
                    infosHero2.speed,
                    infosHero3.speed
                  )}
                </span>
              </p>
              <p>
                Combat :{" "}
                <span>
                  {whatStats(
                    infosHero1.combat,
                    infosHero2.combat,
                    infosHero3.combat
                  )}
                </span>
              </p>
            </div>
            <div className="teamCard_box_infos_btn">
              <button
                className="deleteBtn"
                type="button"
                onClick={() => {
                  deleteTeam();
                }}
              >
                Delete team
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamCard;

TeamCard.propTypes = {
  id: PropTypes.number.isRequired,
  getAllTeam: PropTypes.func.isRequired,
};
