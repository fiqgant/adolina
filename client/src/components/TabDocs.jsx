import React, { useState } from 'react';
import ResTabs from './TabResponse';

const DocsTabs = () => {
  const [activeTab, setActiveTab] = useState('welcome');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="tabs is-toggle">
        <ul>
          <li className={activeTab === 'welcome' ? 'is-active' : ''}>
            <a onClick={() => handleTabClick('welcome')}>
              <span className="icon is-small"><i className="fas fa-terminal" aria-hidden="true"></i></span>
              <span>Welcome</span>
            </a>
          </li>
          <li className={activeTab === 'device' ? 'is-active' : ''}>
            <a onClick={() => handleTabClick('device')}>
              <span className="icon is-small"><i className="fas fa-desktop" aria-hidden="true"></i></span>
              <span>Data</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="tab-content">
        <div className={`tab ${activeTab === 'welcome' ? 'is-active' : ''}`}>
          {activeTab === 'welcome' && (
            <div className="content">
              <div className="field">
                <div className="control">
                  <p>Dengan dukungan dari teknologi terkini, kami hadir untuk memudahkan akses dan integrasi data melalui antarmuka pemrograman aplikasi yang handal dan efisien.</p>
                  <p>Sistem Web API kami adalah jembatan yang menghubungkan aplikasi Anda dengan beragam layanan dan fungsionalitas yang tersedia di dalamnya. Dengan akses yang tepat, Anda dapat menjelajahi berbagai data yang kami sediakan untuk meningkatkan pengalaman pengguna dan mendorong kesuksesan aplikasi Anda.</p>
                  <p>Koneksi API ini memerlukan sedikit pengetahuan tentang pemrograman komputer. Jika anda tidak paham tentang bahasa pemrograman sebaiknya tidak menggunakan ini.</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={`tab ${activeTab === 'device' ? 'is-active' : ''}`}>
          {activeTab === 'device' && (
            <div className="content">
              <h2>Data</h2>
              <p>Adapun beberapa hal yang perlu diperhatikan untuk koneksi API, antara lain:</p>
              <ul>
                <li>Kami membungkus semua HTTP Request ke dalam format JSON</li>
                <li>Seluruh HTTP Request Method dikirim sebagai Get Request.</li>
                <li>Dapatkan Kunci API Anda di halaman Setting Server</li>
              </ul>
              <ResTabs/>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default DocsTabs;
