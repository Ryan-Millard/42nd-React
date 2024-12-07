import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.css";
import logo from '../../assets/42nd-precinct-logo.png';

const Footer = () => {
	return (
		<footer className={styles.footerWrapper}>
			<div className={styles.footerLinks}>
				<div className={styles.multiElementsPerLine}>
					<div>
						<a
							href="https://www.instagram.com/42ndprecinctsecurity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram className={styles.icon} size={200} />
						</a>
					</div>
					<a href="index.html">
						<img
							className={styles.smallLogo}
							src={logo}
							alt="Logo"
						/>
					</a>
					<div>
						<a
							href="https://www.facebook.com/42ndprecinct"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook className={styles.icon} size={200} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
