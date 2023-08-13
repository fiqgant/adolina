import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddDevice = () => {
  const [name, setName] = useState("");
  const [id_device, setId_device] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveDevice = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/device`, {
        name: name,
        id_device: id_device,
      });
      navigate("/device");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Device</h1>
      <h2 className="subtitle">Tambah Device Baru</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveDevice}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Device"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">ID Device</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={id_device}
                    onChange={(e) => setId_device(e.target.value)}
                    placeholder="ID Device"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddDevice;
