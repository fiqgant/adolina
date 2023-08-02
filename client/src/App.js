import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Device from "./pages/Device";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddDevice from "./pages/AddDevice";
import EditDevice from "./pages/EditDevice";
import ApiPages from "./pages/ApiPages";
import SettingsPages from "./pages/SettingPages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/docs" element={<ApiPages />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/device" element={<Device />} />
          <Route path="/device/add" element={<AddDevice />} />
          <Route path="/device/edit/:id" element={<EditDevice />} />
          <Route path="/settings" element={<SettingsPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
