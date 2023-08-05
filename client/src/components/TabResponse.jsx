import React, { useState } from 'react';

const ResTabs = () => {
  const [activeTab, setActiveTab] = useState('boiler1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="tabs is-centered">
        <ul>
          <li className={activeTab === 'boiler1' ? 'is-active' : ''}>
            <a href="#" onClick={() => handleTabClick('boiler1')}>
              Boiler 1
            </a>
          </li>
          <li className={activeTab === 'boiler2' ? 'is-active' : ''}>
            <a href="#" onClick={() => handleTabClick('boiler2')}>
              Boiler 2
            </a>
          </li>
          {/* <li className={activeTab === 'klarifikasi' ? 'is-active' : ''}>
            <a href="#" onClick={() => handleTabClick('klarifikasi')}>
              Klarifikasi
            </a>
          </li> */}
          <li className={activeTab === 'mupsteam' ? 'is-active' : ''}>
            <a href="#" onClick={() => handleTabClick('mupsteam')}>
              Mupsteam
            </a>
          </li>
          <li className={activeTab === 'pmgenset1' ? 'is-active' : ''}>
            <a href="#" onClick={() => handleTabClick('pmgenset1')}>
              PM Genset 1
            </a>
          </li>
          <li className={activeTab === 'pmturbin2' ? 'is-active' : ''}>
            <a href="#" onClick={() => handleTabClick('pmturbin2')}>
              PM Turbin 2
            </a>
          </li>
          <li className={activeTab === 'pmturbin3' ? 'is-active' : ''}>
            <a href="#" onClick={() => handleTabClick('pmturbin3')}>
              PM Turbin 3
            </a>
          </li>
          <li className={activeTab === 'pressthresher' ? 'is-active' : ''}>
            <a href="#" onClick={() => handleTabClick('pressthresher')}>
              Press Thresher
            </a>
          </li>
          <li className={activeTab === 'sterilizer' ? 'is-active' : ''}>
            <a href="#" onClick={() => handleTabClick('sterilizer')}>
              Sterilizer
            </a>
          </li>
        </ul>
      </div>

      <div className="tab-content">
        <div className={`tab ${activeTab === 'boiler1' ? 'is-active' : ''}`}>
          {activeTab === 'boiler1' && (
            <div className="content">
              <div className="notification">
                <p className="title is-4">API Boiler 1</p>
                <p>API boiler dapat diakses dengan melakukan HTTP Get Request ke URL berikut:</p>
                <code>http://mahakaryamesindo.com/api/boiler1/?private_key=privatekeyanda&company=namaperusahaan</code>
                <p>Dengan mengganti <strong>private_key</strong> dan <strong>company</strong> pada query di atas sesuai dengan nilai yang sah.</p>
                <p>Contoh Respon Berhasil:</p>
                <pre>{`
[
  {
    "_id": 1,
    "_dbTime": "2023-06-12T14:17:47.000Z",
    "_terminalTime": "2023-06-12 14:17:47.158",
    "_groupName": "mqtt_boiler1",
    "PLC_BOILER_1__commStatus": "1",
    // ... (data lainnya)
  }
]
                `}</pre>
                <p>Contoh Respon Gagal:</p>
                <pre>{`
{
  "msg": "User not found"
}
                `}</pre>
              </div>
            </div>
          )}
        </div>
        <div className={`tab ${activeTab === 'boiler2' ? 'is-active' : ''}`}>
          {activeTab === 'boiler2' && (
            <div className="content">
              <div className="notification">
                <p className="title is-4">API Boiler 2</p>
                <p>API boiler dapat diakses dengan melakukan HTTP Get Request ke URL berikut:</p>
                <code>http://mahakaryamesindo.com/api/boiler2/?private_key=privatekeyanda&company=namaperusahaan</code>
                <p>Dengan mengganti <strong>private_key</strong> dan <strong>company</strong> pada query di atas sesuai dengan nilai yang sah.</p>
                <p>Contoh Respon Berhasil:</p>
                <pre>{`
[
  {
    "_id": 1,
    "_dbTime": "2023-06-12T14:17:47.000Z",
    "_terminalTime": "2023-06-12 14:17:47.158",
    "_groupName": "mqtt_boiler2",
    "PLC_BOILER_1__commStatus": "1",
    // ... (data lainnya)
  }
]
                `}</pre>
                <p>Contoh Respon Gagal:</p>
                <pre>{`
{
"msg": "User not found"
}
                `}</pre>
              </div>
            </div>
          )}
        </div>
        <div className={`tab ${activeTab === 'klarifikasi' ? 'is-active' : ''}`}>
          {activeTab === 'klarifikasi' && (
            <div className="content">
              <div className="notification">
                <p className="title is-4">API Klarifikasi</p>
                <p>API klarifikasi dapat diakses dengan melakukan HTTP Get Request ke URL berikut:</p>
                <code>http://mahakaryamesindo.com/api/klarifikasi/?private_key=privatekeyanda&company=namaperusahaan</code>
                <p>Dengan mengganti <strong>private_key</strong> dan <strong>company</strong> pada query di atas sesuai dengan nilai yang sah.</p>
                <p>Contoh Respon Berhasil:</p>
                <pre>{`
[
  {
    "_id": 1,
    "_dbTime": "2023-06-12T14:17:47.000Z",
    "_terminalTime": "2023-06-12 14:17:47.160",
    "_groupName": "mqtt_klarifikasi",
    "PLC_KLARIFIKASI__commStatus": "1",
    // ... (data lainnya)
    "PLC_KLARIFIKASI_HRM_OS5": "0"
  }
]
                `}</pre>
                <p>Contoh Respon Gagal:</p>
                <pre>{`
{
  "msg": "User not found"
}
                `}</pre>
              </div>
            </div>
          )}
        </div>
        <div className={`tab ${activeTab === 'mupsteam' ? 'is-active' : ''}`}>
          {activeTab === 'mupsteam' && (
            <div className="content">
              <div className="notification">
                <p className="title is-4">API Mupsteam</p>
                <p>API MUP Steam dapat diakses dengan melakukan HTTP Get Request ke URL berikut:</p>
                <code>http://mahakaryamesindo.com/api/mupsteam/?private_key=privatekeyanda&company=namaperusahaan</code>
                <p>Dengan mengganti <strong>private_key</strong> dan <strong>company</strong> pada query di atas sesuai dengan nilai yang sah.</p>
                <p>Contoh Respon Berhasil:</p>
                <pre>{`
[
  {
    "_id": 1,
    "_dbTime": "2023-06-12T14:17:47.000Z",
    "_terminalTime": "2023-06-12 14:17:47.159",
    "_groupName": "mqtt_bpv_mup_steam",
    "PLC_BPV_MAKE_UP_STEAM__commStatus": "1",
    // ... (data lainnya)
    "PLC_BPV_MAKE_UP_STEAM_Tekanan_Out_MakeUp": "0"
  }
]
                `}</pre>
                <p>Contoh Respon Gagal:</p>
                <pre>{`
{
  "msg": "User not found"
}
                `}</pre>
              </div>
            </div>
          )}
        </div>
        <div className={`tab ${activeTab === 'pmgenset1' ? 'is-active' : ''}`}>
          {activeTab === 'pmgenset1' && (
            <div className="content">
              <div className="notification">
                <p className="title is-4">API PM Genset 1</p>
                <p>API PM Genset 1 dapat diakses dengan melakukan HTTP Get Request ke URL berikut:</p>
                <code>http://mahakaryamesindo.com/api/pmgenset1/?private_key=privatekeyanda&company=namaperusahaan</code>
                <p>Dengan mengganti <strong>private_key</strong> dan <strong>company</strong> pada query di atas sesuai dengan nilai yang sah.</p>
                <p>Contoh Respon Berhasil:</p>
                <pre>{`
[
  {
    "_id": 1,
    "_dbTime": "2023-06-12T12:15:36.000Z",
    "_terminalTime": "2023-06-12 12:13:45.284",
    "_groupName": "mqtt_PM_genset1",
    "PM_Genset1__commStatus": "1",
    // ... (data lainnya)
    "PM_Genset1_Total_KWH1": "0"
  }
]
                `}</pre>
                <p>Contoh Respon Gagal:</p>
                <pre>{`
{
  "msg": "User not found"
}
                `}</pre>
              </div>
            </div>
          )}
        </div>
        <div className={`tab ${activeTab === 'pmturbin2' ? 'is-active' : ''}`}>
          {activeTab === 'pmturbin2' && (
            <div className="content">
              <div className="notification">
                <p className="title is-4">API PM Turbin 2</p>
                <p>API PM Turbin 2 dapat diakses dengan melakukan HTTP Get Request ke URL berikut:</p>
                <code>http://mahakaryamesindo.com/api/pmturbin2/?private_key=privatekeyanda&company=namaperusahaan</code>
                <p>Dengan mengganti <strong>private_key</strong> dan <strong>company</strong> pada query di atas sesuai dengan nilai yang sah.</p>
                <p>Contoh Respon Berhasil:</p>
                <pre>{`
[
  {
    "_id": 1,
    "_dbTime": "2023-06-12T14:17:47.000Z",
    "_terminalTime": "2023-06-12 14:17:47.161",
    "_groupName": "mqtt_PM_turbin2",
    "PM_Turbin2__commStatus": "1",
    // ... (data lainnya)
    "PM_Turbin2_Total_KWH1": "0"
  }
]
                `}</pre>
                <p>Contoh Respon Gagal:</p>
                <pre>{`
{
  "msg": "User not found"
}
                `}</pre>
              </div>
            </div>
          )}
        </div>
        <div className={`tab ${activeTab === 'pmturbin3' ? 'is-active' : ''}`}>
          {activeTab === 'pmturbin3' && (
            <div className="content">
              <div className="notification">
                <p className="title is-4">API PM Turbin 3</p>
                <p>API PM Turbin 3 dapat diakses dengan melakukan HTTP Get Request ke URL berikut:</p>
                <code>http://mahakaryamesindo.com/api/pmturbin3/?private_key=privatekeyanda&company=namaperusahaan</code>
                <p>Dengan mengganti <strong>private_key</strong> dan <strong>company</strong> pada query di atas sesuai dengan nilai yang sah.</p>
                <p>Contoh Respon Berhasil:</p>
                <pre>{`
[
  {
    "_id": 1,
    "_dbTime": "2023-06-12T14:17:47.000Z",
    "_terminalTime": "2023-06-12 14:17:47.161",
    "_groupName": "mqtt_PM_turbin3",
    "PM_Turbin3__commStatus": "1",
    // ... (data lainnya)
    "PM_Turbin3_Total_KWH1": "0"
  }
]
                `}</pre>
                <p>Contoh Respon Gagal:</p>
                <pre>{`
{
  "msg": "User not found"
}
                `}</pre>
              </div>
            </div>
          )}
        </div>
        <div className={`tab ${activeTab === 'pressthresher' ? 'is-active' : ''}`}>
          {activeTab === 'pressthresher' && (
            <div className="content">
              <div className="notification">
                <p className="title is-4">API Press Thresher</p>
                <p>API Press Thresher dapat diakses dengan melakukan HTTP Get Request ke URL berikut:</p>
                <code>http://mahakaryamesindo.com/api/pressthresher/?private_key=privatekeyanda&company=namaperusahaan</code>
                <p>Dengan mengganti <strong>private_key</strong> dan <strong>company</strong> pada query di atas sesuai dengan nilai yang sah.</p>
                <p>Contoh Respon Berhasil:</p>
                <pre>{`
[
  {
    "_id": 1,
    "_dbTime": "2023-06-12T14:17:47.000Z",
    "_terminalTime": "2023-06-12 14:17:47.160",
    "_groupName": "mqtt_press_thresher",
    "PLC_PRESS_THRESHER__commStatus": "1",
    // ... (data lainnya)
    "PLC_PRESS_THRESHER_HM_D4": "0"
  }
]
                `}</pre>
                <p>Contoh Respon Gagal:</p>
                <pre>{`
{
  "msg": "User not found"
}
                `}</pre>
              </div>
            </div>
          )}
        </div>
        <div className={`tab ${activeTab === 'sterilizer' ? 'is-active' : ''}`}>
          {activeTab === 'sterilizer' && (
            <div className="content">
              <div className="notification">
                <p className="title is-4">API Sterilizer</p>
                <p>API Sterilizer dapat diakses dengan melakukan HTTP Get Request ke URL berikut:</p>
                <code>http://mahakaryamesindo.com/api/sterilizer/?private_key=privatekeyanda&company=namaperusahaan</code>
                <p>Dengan mengganti <strong>private_key</strong> dan <strong>company</strong> pada query di atas sesuai dengan nilai yang sah.</p>
                <p>Contoh Respon Berhasil:</p>
                <pre>{`
[
  {
    "_id": 1,
    "_dbTime": "2023-06-12T14:17:47.000Z",
    "_terminalTime": "2023-06-12 14:17:47.159",
    "_groupName": "mqtt_sterilizer",
    "PLC_STERILIZER__commStatus": "1",
    // ... (data lainnya)
    "PLC_STERILIZER_S3_Temp": "0.0"
  }
]
                `}</pre>
                <p>Contoh Respon Gagal:</p>
                <pre>{`
{
  "msg": "User not found"
}
                `}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResTabs;
