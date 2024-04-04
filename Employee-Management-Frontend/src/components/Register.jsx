import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerAPICall } from "../services/AuthService";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    const register = { name, username, email, password };
    try {
      const response = await registerAPICall(register);
      if (response.status === 200) {
        setSuccessMsg("User Registered Successfully!...Please Login to Continue..!");
      }
      setName(" "); setEmail(" "); setPassword(" "); setUsername(" ");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleClose() {
    navigate("/login");
  }
  return (
    <section className="content">
      <div className="container">
        {successMsg &&
          <div className='modal-popup'>
            <p className='successMsg'>{successMsg} <span className='icon' onClick={() => handleClose()}>X</span></p>
          </div>
        }
        <div className="loginForm">
          <h3>Sign Up!</h3>
          <form onSubmit={(e) => handleRegister(e)}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                aria-describedby="name"
                placeholder="Enter Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                placeholder="Enter Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
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

export default Register