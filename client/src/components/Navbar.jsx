import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar is-fixed-top has-shadow">
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <img src={logo} width="112" height="28" alt="logo" />
          </NavLink>

          <button
            type="button"
            className={`navbar-burger burger ${isMenuOpen ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded={isMenuOpen ? "true" : "false"}
            data-target="navbarBasicExample"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <NavLink
              to={"/dashboard"}
              className="navbar-item is-hidden-desktop"
            >
              Dashboard
            </NavLink>
            <NavLink to={"/device"} className="navbar-item is-hidden-desktop">
              Device
            </NavLink>
            <NavLink to={"/docs"} className="navbar-item is-hidden-desktop">
              API
            </NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <a href="/dashboard" className="navbar-link">
                <span className="icon">
                  <IoPersonCircleOutline />
                </span>
                <span>{user && user.name}</span>
              </a>
              <div className="navbar-dropdown">
                <Link
                  to={`/users/edit/${user && user.uuid}`}
                  className="navbar-item"
                >
                  <span className="icon">
                    <IoPersonCircleOutline />
                  </span>
                  <span>Profile</span>
                </Link>
                <a href="/" onClick={logout} className="navbar-item">
                  <span className="icon">
                    <IoLogOutOutline />
                  </span>
                  <span>Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
