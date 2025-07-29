import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '10px',
    background: '#333',
    color: '#fff',
    display: 'flex',
    gap: '20px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
