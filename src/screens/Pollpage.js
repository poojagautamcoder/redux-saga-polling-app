import React from "react";
import { useNavigate } from "react-router-dom";
const Pollpage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <div>polllist</div>
      <div>
        <button type="button" class="btn btn-success" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Pollpage;
