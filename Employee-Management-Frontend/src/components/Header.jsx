import React from 'react';
import { isUserLoggedIn, logout } from "../services/AuthService";
import { NavLink, useNavigate } from 'react-router-dom';
const Header = () => {
  const isAuth = isUserLoggedIn();
  const navigate = useNavigate();

  function handlLogout() {
    logout();
    navigate("/login");
  }
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <a href='/' className='title'>Employee Management System</a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              {isAuth && (
                <li className="nav-item">
                  <NavLink to="/list" className="nav-link">
                    List
                  </NavLink>
                </li>
              )}
              {!isAuth && (
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              )}
              {!isAuth && (
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </li>
              )}
              {isAuth && (
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link"
                    onClick={handlLogout}
                  >
                    Logout
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header