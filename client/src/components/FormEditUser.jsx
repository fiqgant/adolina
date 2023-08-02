import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [private_key, setPrivateKey] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/users/${id}`
        );
        setName(response.data.name);
        setEmail(response.data.email);
        setCompany(response.data.company);
        setPrivateKey(response.data.private_key);
        setRole(response.data.role);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const isUserAdmin = role === "admin";

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.REACT_APP_SERVER_URL}/users/${id}`, {
        name: name,
        email: email,
        company: company,
        private_key: private_key,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      setMsg("Updating...");
      setTimeout(() => {
        setMsg("Update successful");
        window.location.reload(); // Reload the page
      }, 2000);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-content">
          <form onSubmit={updateUser}>
            <p className="has-text-centered">{msg}</p>
            <div className="columns">
              <div className="column is-half">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="******"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Confirm Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                      placeholder="******"
                    />
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field">
                  <label className="label">Company</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Private Key</label>
                  <div className="field has-addons">
                    <div className="control is-expanded">
                      <input
                        type="text"
                        className="input"
                        value={private_key}
                        onChange={(e) => setPrivateKey(e.target.value)}
                        placeholder="Private Key"
                        readOnly
                      />
                    </div>
                    <div className="control">
                      <button
                        type="button"
                        className="button is-info"
                        onClick={updateUser}
                      >
                        Generate API Key
                      </button>
                    </div>
                  </div>
                </div>
                {isUserAdmin && (
                  <div className="field">
                    <label className="label">Role</label>
                    <div className="control">
                      <div className="select">
                        <select
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <option value="admin">Admin</option>
                          <option value="user">User</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditUser;
