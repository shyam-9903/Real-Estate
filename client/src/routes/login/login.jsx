import { useContext, useState } from "react";
import "./login.scss";
import apiRequest from "../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const {updateUser} = useContext(AuthContext)

  const navigate = useNavigate(); //hook to navigate after registration

  //function to send data to backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // to stop refreshing of page
    setisLoading(true)
    setError("");

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      updateUser(res.data)
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally{
      setisLoading(false) 
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
