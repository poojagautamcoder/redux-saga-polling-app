import React, { useEffect, useState } from "react";
import DashPoll from "../../components/DashPoll";
import { useDispatch, useSelector } from "react-redux";
import { DashboardRequest, DelpollsRequest } from "../../redux/action/index";
import { useNavigate, Link } from "react-router-dom";
import checkAuth from "../../redux/checkAuth";
const DashBoard = () => {
  const { data } = useSelector((state) => state.DashboardReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const delPoll = (id) => {
    setList(list.filter((item) => item.id !== id));
    dispatch(
      DelpollsRequest({
        id: id,
      })
    );
  };

  useEffect(() => {
    !checkAuth() && navigate("/");
    dispatch(DashboardRequest());
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <div className="poll-details Screen-page">
      <div className="dashboard">
        {list &&
          list.length &&
          list?.map((curElem, index) => {
            return (
              <div key={curElem._id}>
                <DashPoll list={curElem} />
                <div className="pollsbtn">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => delPoll(curElem?._id)}
                  >
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
        <button type="button" class="btn btn-success" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
export default DashBoard;
