function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '10px',
        background: '#eee',
        borderTop: '1px solid #ccc',
        marginTop: '20px'
      }}
    >
      &copy; {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;
