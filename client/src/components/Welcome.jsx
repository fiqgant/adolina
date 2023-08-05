import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MapEmbed from "./MapEmbed";

const deviceList = [
  { key: "boiler1", name: "Boiler 1" },
  { key: "boiler2", name: "Boiler 2" },
  { key: "mupsteam", name: "Mupsteam" },
  { key: "PMGenset1", name: "PM Genset 1" },
  { key: "pmturbin2", name: "PM Turbin 2" },
  { key: "pmturbin3", name: "PM Turbin 3" },
  { key: "PressThresher", name: "Press Thresher" },
  { key: "sterilizer", name: "Sterilizer" },
];

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  const [deviceStatus, setDeviceStatus] = useState({});

  useEffect(() => {
    if (user && user.private_key && user.company) {
      const fetchData = async () => {
        const statusData = {};

        for (const device of deviceList) {
          const apiUrl = `http://mahakaryamesindo.com/api/${device.key}?private_key=${user.private_key}&company=${user.company}`;
          try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const cloudOnlineStatus = data[0].CloudOnline === "1";
            statusData[device.key] = cloudOnlineStatus;
          } catch (error) {
            console.error(`Error fetching ${device.key} API data:`, error);
            statusData[device.key] = false;
          }
        }

        setDeviceStatus(statusData);
      };

      fetchData();
    }
  }, [user]);

  return (
    <div className="container">
      <section className="hero is-primary has-text-centered">
        <div className="hero-body">
        <p className="title">Dashboard</p>
          <p className="subtitle">Welcome, {user && user.name}</p>
        </div>
      </section>

      <div className="columns is-multiline mt-6">
        {deviceList.map((device) => (
          <div className="column is-one-third" key={device.key}>
            <div className={`card ${deviceStatus[device.key] ? "has-background-success" : "has-background-danger"}`}>
              <div className="card-content">
                <p className="title is-4 has-text-centered has-text-weight-semibold">{device.name}</p>
                <p className="subtitle is-6 has-text-centered">
                  <b>{deviceStatus[device.key] ? "Online" : "Offline"}</b>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MapEmbed />
    </div>
  );
};

export default Welcome;