import React, { useEffect } from "react";
import Votingtitle from "../components/Votingtitle";
import { useDispatch, useSelector } from "react-redux";
import { DashboardRequest } from "../redux/action/index";
import { useNavigate } from "react-router-dom";
import checkAuth from "../redux/checkAuth";

const Pollpage = () => {
  const { data } = useSelector((state) => state.DashboardReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    !checkAuth() && navigate("/");
    dispatch(DashboardRequest());
  }, []);

  return (
    <div className="poll-details Screen-page">
      <div className="dashboard">
        {data &&
          data.length &&
          data?.map((curElem, index) => {
            return (
              <div key={curElem._id}>
                <Votingtitle data={curElem} />
              </div>
            );
          })}
      </div>
      <div className="logout-button">
        <button type="button" class="btn btn-success" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Pollpage;
