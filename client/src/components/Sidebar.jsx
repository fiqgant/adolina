import React from "react";
import { NavLink } from "react-router-dom";
import {
  IoPerson,
  IoHome,
  IoServer,
  IoDesktop,
  IoSettings,
} from "react-icons/io5";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  // const logout = () => {
  //   dispatch(LogOut());
  //   dispatch(reset());
  //   navigate("/");
  // };

  return (
    <aside className="menu pl-2 has-shadow is-hidden-touch">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <NavLink to={"/dashboard"}>
            <span className="icon">
              <IoHome />
            </span>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/device"}>
            <span className="icon">
              <IoDesktop />
            </span>
            <span>Device</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/docs"}>
            <span className="icon">
              <IoServer />
            </span>
            <span>API</span>
          </NavLink>
        </li>
        {user && user.role === "admin" && (
          <li>
            <NavLink to={"/users"}>
              <span className="icon">
                <IoPerson />
              </span>
              <span>Users</span>
            </NavLink>
          </li>
        )}
      </ul>

      <p className="menu-label">Settings</p>
      <ul className="menu-list">
        <li>
          <NavLink to={`/users/edit/${user && user.uuid}`}>
            <span className="icon">
              <IoSettings />
            </span>
            <span>Profile</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
