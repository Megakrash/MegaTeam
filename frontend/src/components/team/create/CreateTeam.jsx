import React, { useState } from "react";
import PropTypes from "prop-types";
import AddTeamName from "./AddTeamName";
import AddHero from "./AddHero";

function CreateTeam({ userId, getAllTeam }) {
  const [teamId, setTeamId] = useState(null);
  const [showHero1, setShowHero1] = useState(false);
  const [showHero2, setShowHero2] = useState(false);
  const [showHero3, setShowHero3] = useState(false);
  const [showHeroFinal, setShowHeroFinal] = useState(false);
  const [urlHero1, setUrlHero1] = useState("");
  const [urlHero2, setUrlHero2] = useState("");
  const [urlHero3, setUrlHero3] = useState("");

  return (
    <div className="createTeam">
      {showHeroFinal === false ? (
        <>
          <AddTeamName
            userId={userId}
            setTeamId={setTeamId}
            setShowHero1={setShowHero1}
          />
          {urlHero1 !== "" && (
            <div className="createTeam_pictures">
              {urlHero1 !== "" && (
                <img
                  className="createTeam_pictures_img"
                  src={urlHero1}
                  alt="Hero 1"
                />
              )}
              {urlHero2 !== "" && (
                <img
                  className="createTeam_pictures_img"
                  src={urlHero2}
                  alt="Hero 1"
                />
              )}
              {urlHero3 !== "" && (
                <img
                  className="createTeam_pictures_img"
                  src={urlHero3}
                  alt="Hero 1"
                />
              )}
            </div>
          )}
          {showHero1 === true && (
            <div
              className={
                showHero1 === true
                  ? "createTeam__add active"
                  : "createTeam__add inactive"
              }
            >
              <p className="createTeam_add_title">
                Let's go find a first Super Hero for my new team
              </p>
              <AddHero
                teamId={teamId}
                heroNumber="h1"
                setShowHero1={setShowHero1}
                setShowHero2={setShowHero2}
                setShowHero3={setShowHero3}
                setShowHeroFinal={setShowHeroFinal}
                setUrlHero1={setUrlHero1}
                setUrlHero2={setUrlHero2}
                setUrlHero3={setUrlHero3}
              />
            </div>
          )}
          {showHero2 === true && (
            <div className="createTeam_add">
              <p className="createTeam_add_title">Now the second</p>
              <AddHero
                teamId={teamId}
                heroNumber="h2"
                setShowHero1={setShowHero1}
                setShowHero2={setShowHero2}
                setShowHero3={setShowHero3}
                setShowHeroFinal={setShowHeroFinal}
                setUrlHero1={setUrlHero1}
                setUrlHero2={setUrlHero2}
                setUrlHero3={setUrlHero3}
              />
            </div>
          )}
          {showHero3 === true && (
            <div className="createTeam_add">
              <p className="createTeam_add_title">
                Last super hero for your team
              </p>
              <AddHero
                teamId={teamId}
                heroNumber="h3"
                setShowHero1={setShowHero1}
                setShowHero2={setShowHero2}
                setShowHero3={setShowHero3}
                setShowHeroFinal={setShowHeroFinal}
                setUrlHero1={setUrlHero1}
                setUrlHero2={setUrlHero2}
                setUrlHero3={setUrlHero3}
              />
            </div>
          )}
        </>
      ) : (
        <div>
          {urlHero1 !== "" && (
            <div className="createTeam_pictures">
              {urlHero1 !== "" && (
                <img
                  className="createTeam_pictures_img"
                  src={urlHero1}
                  alt="Hero 1"
                />
              )}
              {urlHero2 !== "" && (
                <img
                  className="createTeam_pictures_img"
                  src={urlHero2}
                  alt="Hero 1"
                />
              )}
              {urlHero3 !== "" && (
                <img
                  className="createTeam_pictures_img"
                  src={urlHero3}
                  alt="Hero 1"
                />
              )}
            </div>
          )}
          <p className="congrat">
            Congratulations !!! You have a Super team now !
          </p>
          <button
            className="sendBtn"
            type="button"
            onClick={() => {
              setShowHeroFinal(false);
              getAllTeam();
              setUrlHero1("");
              setUrlHero2("");
              setUrlHero3("");
            }}
          >
            <span className="sendSpan">Close</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateTeam;

CreateTeam.propTypes = {
  userId: PropTypes.number.isRequired,
  getAllTeam: PropTypes.func.isRequired,
};
