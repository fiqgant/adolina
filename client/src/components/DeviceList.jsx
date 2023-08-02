import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeviceList = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    getDevices();
  }, []);

  const getDevices = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/device`);
    setDevices(response.data);
  };

  const deleteDevice = async (deviceId) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/device/${deviceId}`);
    getDevices();
  };

  return (
    <div className="container">
      <div className='box'>
      <h1 className="title">Devices</h1>
      <h2 className="subtitle">List of Devices</h2>
      <Link to="/device/add" className="button is-primary mb-2">
        Add New
      </Link>
      <div className="table-container">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Device Name</th>
              <th>ID Device</th>
              <th>Created By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, index) => (
              <tr key={device.uuid}>
                <td>{index + 1}</td>
                <td>{device.name}</td>
                <td>{device.id_device}</td>
                <td>{device.user.name}</td>
                <td>
                  <div className="buttons">
                    <Link
                      to={`/device/edit/${device.uuid}`}
                      className="button is-small is-info"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteDevice(device.uuid)}
                      className="button is-small is-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default DeviceList;
