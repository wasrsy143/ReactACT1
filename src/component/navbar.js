import React, { useState } from 'react';

function Navbar() {
  // React state to store the navbar color
  const [bgColor, setBgColor] = useState('#282c34');

  // Function to generate a random color
  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <nav style={{ ...styles.navbar, backgroundColor: bgColor }}>
      <h2 style={styles.logo}>My React App</h2>

      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#services" style={styles.link}>Services</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>

      <button style={styles.button} onClick={changeColor}>
        Change Color
      </button>
    </nav>
  );
}

// Inline styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    color: 'white',
    transition: 'background-color 0.5s ease',
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#61dafb',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#282c34',
  },
};

export default Navbar;
