import React from "react";
import PropTypes from "prop-types";

function HeroCard({ heroName, powerstats, image }) {
  const whatValue = (infos) => {
    if (infos === "null") {
      return "??";
    }
    return infos;
  };

  return (
    <div className="heroCard">
      <div className="heroCard_img">
        <img src={image} alt={heroName} />
      </div>
      <div className="heroCard_infos">
        <div className="heroCard_infos_name">
          <p className="heroCard_infos_name_title">{heroName}</p>
        </div>
        <div className="heroCard_infos_stats">
          <p className="heroCard_infos_stats_title">Power stats :</p>
          <p>
            Intelligence : <span> {whatValue(powerstats.intelligence)}</span>
          </p>
          <p>
            Strength : <span>{whatValue(powerstats.strength)}</span>
          </p>
          <p>
            Power : <span>{whatValue(powerstats.power)}</span>
          </p>
          <p>
            Durability : <span>{whatValue(powerstats.durability)}</span>
          </p>
          <p>
            Speed : <span>{whatValue(powerstats.speed)}</span>
          </p>
          <p>
            Combat : <span>{whatValue(powerstats.combat)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;

HeroCard.propTypes = {
  heroName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  powerstats: PropTypes.objectOf(
    PropTypes.shape({
      intelligence: PropTypes.number.isRequired,
      strengh: PropTypes.number.isRequired,
      power: PropTypes.number.isRequired,
      durability: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
      combat: PropTypes.number.isRequired,
    })
  ).isRequired,
};
