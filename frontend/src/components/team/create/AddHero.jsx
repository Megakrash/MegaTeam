import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import HeroCard from "./HeroCard";

function AddHero({
  teamId,
  heroNumber,
  setShowHero1,
  setShowHero2,
  setShowHero3,
  setShowHeroFinal,
  setUrlHero1,
  setUrlHero2,
  setUrlHero3,
}) {
  const [searchBar, setSearchBar] = useState("");
  const [result, setResult] = useState("");
  const [heroName, setHeroName] = useState("");
  const [heroId, setHeroId] = useState("");
  const [heroUrl, setHeroUrl] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showError, setShowError] = useState(false);

  const searchHero = () => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}/${
          import.meta.env.VITE_API_KEY
        }/search/${searchBar}`
      )
      .then((res) => {
        setResult(res.data.results);
        setShowResult(true);
      })
      .catch(() => setShowError(true));
  };

  const addHero = () => {
    if (heroNumber === "h1") {
      axios
        .patch(`${import.meta.env.VITE_PORT_BACKEND}/team/${teamId}`, {
          h1: heroId,
        })
        .then(() => {
          setShowHero1(false);
          setShowHero2(true);
          setUrlHero1(heroUrl);
        })
        .catch((err) => console.error(err));
    }
    if (heroNumber === "h2") {
      axios
        .patch(`${import.meta.env.VITE_PORT_BACKEND}/team/${teamId}`, {
          h2: heroId,
        })
        .then(() => {
          setShowHero2(false);
          setShowHero3(true);
          setUrlHero2(heroUrl);
        })
        .catch((err) => console.error(err));
    }
    if (heroNumber === "h3") {
      axios
        .patch(`${import.meta.env.VITE_PORT_BACKEND}/team/${teamId}`, {
          h3: heroId,
        })
        .then(() => {
          setShowHero3(false);
          setUrlHero3(heroUrl);
          setShowHeroFinal(true);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="addHero">
      <div className="addHero_search">
        <input
          className="signin_form_box_input"
          type="text"
          id="search"
          placeholder="Search your hero here"
          onChange={(e) => setSearchBar(e.target.value)}
        />
        {showError === true && (
          <p className="addHero_search_error">Try something else...</p>
        )}
        <button className="sendBtn" type="button" onClick={() => searchHero()}>
          <span className="sendSpan">Search</span>
        </button>
      </div>
      {heroName !== "" && (
        <div className="addHero_choose">
          <p className="addHero_choose_title">You have chosen</p>
          <p className="addHero_choose_name">{heroName}</p>
          <button className="sendBtn" type="button" onClick={() => addHero()}>
            <span className="sendSpan">Add Hero</span>
          </button>
        </div>
      )}
      <div className="addHero_result">
        {showResult === true && result.length >= 1 && (
          <div className="addHero_result_box">
            <p className="addHero_result_box_title">
              {result.length} result(s)
            </p>
            <div className="addHero_result_box_card">
              {result.map((infos) => {
                return (
                  <button
                    className="addHero_result_box_card_btn"
                    key={infos.id}
                    type="button"
                    onClick={() => {
                      setHeroName(infos.name);
                      setHeroId(infos.id);
                      setHeroUrl(infos.image.url);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <HeroCard
                      heroName={infos.name}
                      powerstats={infos.powerstats}
                      image={infos.image.url}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddHero;

AddHero.propTypes = {
  teamId: PropTypes.number.isRequired,
  heroNumber: PropTypes.string.isRequired,
  setShowHero1: PropTypes.func.isRequired,
  setShowHero2: PropTypes.func.isRequired,
  setShowHero3: PropTypes.func.isRequired,
  setShowHeroFinal: PropTypes.func.isRequired,
  setUrlHero1: PropTypes.func.isRequired,
  setUrlHero2: PropTypes.func.isRequired,
  setUrlHero3: PropTypes.func.isRequired,
};
