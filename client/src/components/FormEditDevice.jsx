import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditDevice = () => {
  const [name, setName] = useState("");
  const [id_device, setId_device] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getDeviceById = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/device/${id}`
        );
        setName(response.data.name);
        setId_device(response.data.price);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getDeviceById();
  }, [id]);

  const updateDevice = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.REACT_APP_SERVER_URL}/device/${id}`, {
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
      <h2 className="subtitle">Edit Device</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateDevice}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Device Name"
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
                    Update
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

export default FormEditDevice;
