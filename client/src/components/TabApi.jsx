import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DocsTabs from './TabDocs';

const Tabs = () => {
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState('server');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const generatePrivateKey = () => {
    navigate(`/users/edit/${user.uuid}`);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="tabs is-centered">
          <ul>
            <li className={activeTab === 'server' ? 'is-active' : ''}>
              <a onClick={() => handleTabClick('server')}>
                <span className="icon is-small"><i className="fas fa-server" aria-hidden="true"></i></span>
                <span>Server</span>
              </a>
            </li>
            <li className={activeTab === 'documentation' ? 'is-active' : ''}>
              <a onClick={() => handleTabClick('documentation')}>
                <span className="icon is-small"><i className="fas fa-file-alt" aria-hidden="true"></i></span>
                <span>Documentation</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="tab-content">
          <div className={`tab ${activeTab === 'server' ? 'is-active' : ''}`}>
            {activeTab === 'server' && (
              <div className="content">
                <h2>Private Key</h2>
                <div className="field is-grouped">
                  <div className="control is-expanded">
                    <input className="input" type="text" value={user && user.private_key} disabled />
                  </div>
                  <div className="control">
                    <button className="button is-primary" onClick={generatePrivateKey}>
                      Generate Private Key
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={`tab ${activeTab === 'documentation' ? 'is-active' : ''}`}>
            {activeTab === 'documentation' && (
              <div className="content">
                <DocsTabs />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
