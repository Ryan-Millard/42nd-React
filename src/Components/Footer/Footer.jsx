import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.css";
import logo from '../../assets/42nd-precinct-logo.png';

const Footer = () => {
	return (
		<footer className={styles.footerWrapper}>
			<div className={styles.footerLinks}>
				<div className={styles.iconContainer}>
					<a
						href="https://www.instagram.com/42ndprecinctsecurity"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
					>
						<FaInstagram className={styles.icon} size={40} />
					</a>

					<a href="/" aria-label="Homepage">
						<img
							className={styles.logo}
							src={logo}
							alt="42nd Precinct Security Logo"
						/>
					</a>

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

