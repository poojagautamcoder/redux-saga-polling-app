import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginRequest } from "../action/index";
const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const state = useSelector((state) => {
    return state.isLogin;
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let loginData = {
      username: username,
      password: password,
    };
    dispatch(LoginRequest(loginData));
    setUsername("");
    setPassword("");
  };
  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your details with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
