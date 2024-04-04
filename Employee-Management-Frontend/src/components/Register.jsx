import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerAPICall } from "../services/AuthService";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  async function handleRegister(e) {

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

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
          <Form noValidate validated={validated} onSubmit={handleRegister}>
            <div className="form-group">
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isInvalid={
                    validated &&
                    !/^[a-zA-Z]+$/.test(name)
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Required
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="form-group mt-3">
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={
                    validated &&
                    !/^\S+@\S+\.\S+$/.test(email)
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="form-group mt-3">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  isInvalid={
                    validated &&
                    !/^[a-zA-Z]+$/.test(username)
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid username (alphanumeric
                  characters only).
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="form-group mt-3">
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={4}
                  required
                  isInvalid={
                    validated && password.length < 4
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Password must be at least 4 characters long.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="text-center mt-3">
              <Button type="submit" className="btn btn-primary">Submit</Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Register