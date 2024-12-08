import React from 'react';
import styles from './Front.module.css';
import logo from '../../../../assets/42nd-precinct-logo.png';

// Utility function for handling empty details
const renderDetail = (detail) => (detail === '' ? '\u00A0' : detail);

// Title Component for reusable Name and Position block
const Title = ({ name, position }) => (
  <div className={styles.frontTitle}>
    <p className={`roboto roboto-black ${styles.title}`}>{name}</p>
    <p className="roboto" id={styles.subtitle}>{position}</p>
  </div>
);

// RHS of card, shows address and phone numbers
const ContactDetails = ({ details }) => (
  <div className={styles.frontContactDetails}>
    <ul>
      {details.map((detail, index) => (
        <li key={index}>{renderDetail(detail)}</li>
      ))}
    </ul>
  </div>
);

// Content on LHS of card
const Left = () => (
  <div className={styles.frontBody} id={styles.frontLeftBody}>
    <img className={styles.frontLogo} src={logo} alt="Logo"/>
    <p className={styles.frontFooter} id={styles.frontFooterLeft}>www.42ndprecinct.co.za</p>
  </div>
);

// Content on RHS of card
const Right = () => {
  const contactDetails = [
    '16 Basil Street (cnr Oxford)',
    'Ferndale, Randburg',
    '', // Empty line
    'O: +27 11 791 6340',
    'F: +27 11 791 0285',
    'C: +27 83 650 0313',
    'E: allan@42ndprecinct.co.za',
  ];

  return (
    <div className={styles.frontBody} id={styles.frontRightBody}>
      <Title name="ALLAN MILLARD" position="Managing Director" />
      <ContactDetails details={contactDetails} />
      <p className={styles.frontFooter} id={styles.frontFooterRight}>24-HR HOTLINE: 010 441 2509</p>
    </div>
  );
};

// Exported component that contains LHS & RHS
const Front = () => (
  <div className={styles.front}>
    <div className={styles.frontWrapper}>
      <Left />
      <Right />
    </div>
  </div>
);

export default Front;
