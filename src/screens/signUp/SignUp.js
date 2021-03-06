import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignupRequest } from "../../redux/action/index";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const data = useSelector((state) => state.SignupReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let loginData = {
      username: username,
      password: password,
      role: role,
    };
    dispatch(SignupRequest(loginData));
    setUsername("");
    setPassword("");
    setRole("");
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (data.isSuccess) {
      navigate("/");
    }
  }, [data.isSuccess]);


  return (
    <div>
      <div className="Screen-page">
        <h3>Sign Up Here...</h3>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label class="form-label">username</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
            />
            <div class="form-text">
              We'll never share your details with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Role</option>
            <option value="1">guest</option>
            <option value="2">admin</option>
          </select>
          <button type="submit" class="btn btn-primary signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
