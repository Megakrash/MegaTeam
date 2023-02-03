import React from "react";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="confirmation">
      <h2 className="confirmation_title">Congratulations & welcome !</h2>
      <button
        className="sendBtn confirm_btn"
        type="button"
        onClick={() => {
          navigate("/login");
        }}
      >
        <span className="sendSpan">Log in ?</span>
      </button>
    </div>
  );
}

export default Confirmation;
