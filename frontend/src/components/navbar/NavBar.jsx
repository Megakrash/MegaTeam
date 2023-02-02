import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Burger from "./menus/Burger";

function NavBar() {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  return (
    <div className="navbar">
      <NavLink to="/">
        <p className="navbar_logo">MegaTeam</p>
      </NavLink>
      <Burger
        isBurgerClicked={isBurgerClicked}
        setIsBurgerClicked={() => setIsBurgerClicked()}
      />
      <button
        type="button"
        className={isBurgerClicked ? "burger active" : "burger inactive"}
        onClick={(e) => {
          e.stopPropagation();
          setIsBurgerClicked(!isBurgerClicked);
        }}
      >
        <div className="bar bar1" />
        <div className="bar bar2" />
        <div className="bar bar3" />
      </button>
    </div>
  );
}

export default NavBar;
