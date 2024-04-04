import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginAPICall, storeToken, saveLoggedInUser } from "../services/AuthService";
 
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await loginAPICall(username, password);
      const token = "Bearer " + response.data.accessToken;
      const role = response.data.role;

      storeToken(token);
      saveLoggedInUser(username, role);
      navigate("/list");
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <section className="content">
      <div className="container">
        <div className="loginForm">
          <h3>Sign In</h3>
          <form onSubmit={(e) => handleLogin(e)}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username"
                aria-describedby="username"
                placeholder="Enter Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login