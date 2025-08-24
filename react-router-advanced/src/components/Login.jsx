// src/components/Login.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/profile');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <button onClick={handleLogin} style={{ marginRight: '1rem' }}>
        Log In
      </button>
      <button onClick={() => navigate('/')}>Cancel</button>
    </div>
  );
}

export default Login;