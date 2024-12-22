import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./Footer.module.css";
import logo from '@assets/logos/42nd_precinct_logo.png';
import { useTheme } from '@states/ThemeContext';
import lightBackground from "@assets/backgrounds/light_checkered_steel_background.jpg";
import darkBackgroundImage from "@assets/backgrounds/dark_checkered_steel_background.jpg";

const Footer = () => {
	// change the background image based on the current theme
	const { isDarkMode } = useTheme();
	const background = isDarkMode ? darkBackgroundImage : lightBackground;

	return (
		<footer
			className={styles.footerWrapper}
			style={{
				backgroundImage: `linear-gradient(to top, rgba(0,0,0,0) 85%, var(--bg-primary)), url(${background})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
		>
			<div className={styles.footerLinks}>
				<div className={styles.iconContainer}>
					<a
						href="https://www.instagram.com/42ndprecinctsecurity"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
					>
						<AiFillInstagram className={styles.icon} size={50} />
					</a>

					<Link to="/">
						<img className={styles.logo} src={logo} alt="logo" />
					</Link>

					<a
						href="https://www.facebook.com/42ndprecinct"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
					>
						<FaFacebook className={styles.icon} size={40} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

