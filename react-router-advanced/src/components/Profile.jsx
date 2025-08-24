// src/components/Profile.jsx
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Profile</h1>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="details" style={{ marginRight: '1rem' }}>Details</Link>
        <Link to="settings" style={{ marginRight: '1rem' }}>Settings</Link>
        <button onClick={handleLogout}>Log Out</button>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route index element={<ProfileDetails />} /> {/* Default nested route */}
      </Routes>
    </div>
  );
}

export default Profile;