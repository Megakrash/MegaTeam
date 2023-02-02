import React from "react";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Congratulations & welcome !</h2>
      <button
        className="sendBtn"
        type="button"
        onClick={() => {
          navigate("/login");
        }}
      >
        <span className="sendSpan">Send</span>
      </button>
    </div>
  );
}

export default Confirmation;
