import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/42nd-precinct-logo.png';

const Header = () => {
  return (
    <header className={styles.navbarWrapper}>
      <a href="index.html">
        <img className={styles.logo} src={logo} alt="logo" />
      </a>
    </header>
  );
};

export default Header;
