import React from 'react';
import styles from './Front.module.css';
import logo from '@assets/logos/42nd-precinct-logo.png';
import { useTheme } from '@states/ThemeContext';
import darkBackgroundImage from "@assets/card-background.jpg";

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
const ContactDetails = ({ details }) => {
	const { isDarkMode } = useTheme();

	return (
		<div
			className={styles.frontContactDetails}
			style={{
				color: `${isDarkMode ? 'white' : 'black'}`,
			}}
		>
			<ul>
				{details.map((detail, index) => (
					<li key={index}>{renderDetail(detail)}</li>
				))}
			</ul>
		</div>
	)
};

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
const Front = () => {
	const { isDarkMode } = useTheme();

	// change the background image based on the current theme
	const darkBg = {
		backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 85%, var(--bg-primary)), url(${darkBackgroundImage})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	};
	const lightBg = {
		backgroundColor: 'white',
	};
	const bgStyles = isDarkMode ? darkBg : lightBg;

	return (
		<div className={styles.front}>
			<div
				className={styles.frontWrapper}
				style={bgStyles}
			>
				<Left />
				<Right />
			</div>
		</div>
);
};

export default Front;
