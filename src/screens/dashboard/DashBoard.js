import React, { useEffect } from "react";
import DashPoll from "../../components/DashPoll";
import { useDispatch, useSelector } from "react-redux";
import { DashboardRequest } from "../../redux/action/index";
import { useNavigate, Link } from "react-router-dom";
import checkAuth from "../../redux/checkAuth";
const DashBoard = () => {
  const { data } = useSelector((state) => state.DashboardReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                <DashPoll data={curElem} />
                <div className="pollsbtn">
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                  <Link to={`/edit-poll/${curElem?._id}`}>
                    <button type="button" className="btn btn-info edit">
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      <div className="logout-button">
        <Link className="nav-link" to="/">
          <button type="button" class="btn btn-success">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;
